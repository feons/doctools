const axios = require('axios');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const promisify = require('util').promisify;

/**
 * Requests a wiki export, polls until ready (or error), then downloads the result to a file.
 *
 * @param {string} username username used to interact via Confluence APIs
 * @param {string} password password used to interact via COnfluence APIs
 * @param {string} outputFile path to file we shoudl save the export as
 */
async function exportAll(username, password, pageId, outputFile) {
	const taskId = await requestExport(username, password, pageId);
	await pollForExport(taskId, username, password);
	return downloadExport(taskId, username, password, outputFile);
}

/**
 * Requests a wiki export
 * @param {string} username username used to interact via Confluence APIs
 * @param {string} password password used to interact via COnfluence APIs
 * @returns {Promise<string>} returns task id to poll/retrieve export when finished
 */
async function requestExport(username, password, rootPageId) {
    const url = `https://wiki.appcelerator.org/rest/scroll-eclipsehelp/1.0/export?exportSchemeId=guides2-7F000001015A6C6CD20B1E0B58AE1D82&rootPageId=${rootPageId}&os_username=${username}&os_password=${password}`;
    const response = await axios.get(url);
    return response.data.id;
}

/**
 * Polls the Confluence server for the status of the export task
 * @param {string} taskId generated uid returned by confluence when we requested the export
 * @param {string} username username used to interact via Confluence APIs
 * @param {string} password password used to interact via Confluence APIs
 * @returns {Promise<void>} this Promise is fulfilled when the export is ready (HTTP code 200)
 */
async function pollForExport(taskId, username, password) {
	while (true) {
		const status = await queryExportStatus(taskId, username, password);
		console.log(`Wiki export http status: ${status}`);
		if (status === 200) {
			return;
		}
		// wait 30 seconds!
		await delay(30000);
	}
}

/**
 * async/await Promise version of "sleep" via setTimeout
 * @param {integer} ms milliseconds to "sleep"
 */
async function delay(ms) {
	// return await for better async stack trace support in case of errors.
	return await new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Queries the Confluence server for the status of the export task (via a HEAD request)
 * @param {string} taskId generated uid returned by confluence when we requested the export
 * @param {string} username username used to interact via Confluence APIs
 * @param {string} password password used to interact via Confluence APIs
 * @returns {Promise<integer>} the HTTP status code
 */
async function queryExportStatus(taskId, username, password) {
	const url = `https://wiki.appcelerator.org/rest/scroll-eclipsehelp/1.0/export/${taskId}?os_username=${username}&os_password=${password}`
	const response = await axios({
		method: 'head',
		url,
	});
	return response.status;
}

/**
 *
 * @param {string} taskId generated uid returned by confluence when we requested the export
 * @param {string} username username used to interact via Confluence APIs
 * @param {string} password password used to interact via COnfluence APIs
 * @param {string} outputFile path to file we shoudl save the export as
 */
async function downloadExport(taskId, username, password, outputFile) {
	outputFile = path.resolve(process.cwd(), outputFile);
	console.log(`Downloading wiki export to ${outputFile}`);
	const url = `https://wiki.appcelerator.org/rest/scroll-eclipsehelp/1.0/export/${taskId}?os_username=${username}&os_password=${password}`;
	const response = await axios({
		method: 'get',
		url,
		responseType: 'stream'
	});
	return new Promise((resolve, reject) => {
		const writeStream = fs.createWriteStream(outputFile);
		writeStream.on('finish', resolve);
		writeStream.on('end', resolve);
		writeStream.on('error', reject);
		response.data.pipe(writeStream);
	});
}

/**
 * @param {string} pageTitle name of the wiki page
 * @return {Promise<string>} the html body (not a full page)
 */
async function grabPageByTitle(pageTitle) {
	const baseURL = 'https://wiki.appcelerator.org/rest/api/content?type=page&spaceKey=guides2&expand=body.view';
	const url = `${baseURL}&title=${encodeURI(pageTitle)}`;
	const response = await axios.get(url);
	// const pageId = response.data.results[0].id; do we need page id?
	return response.data.results[0].body.view.value;
}

if (require.main === module) {
	/**
	 * @returns {Promise<void>}
	 */
	async function main() {
		const program = require('commander');
		program
			.option('-u, --username <username>', 'username for Confluence Wiki')
			.option('-p, --password <password>', 'password for Confluence Wiki')
			.option('-id, --pageId <pageId>', 'Confluence page root id')
			.option('-o, --output [filename.zip]', 'the output file to write to (should be a .zip)', path.resolve(process.cwd(), 'wiki_export.zip'))
			.parse(process.argv);

        return exportAll(program.username, program.password, program.pageId, program.output);
	}

	main().then(() => process.exit(0)).catch(err => {
		console.error(err);
		process.exit(1);
	});
}
