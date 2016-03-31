/*
* Purpose of script: Take arguments from the processSDKWikiPage.sh script and clean up the SDK HTML file so it is uniform with previous HTML release notes and move the processed file to the proper publication directory
*
* See https://wiki.appcelerator.org/x/bK3BAg for documentation
*/
var fs = require('fs');

var whichPage = process.argv[2]; // variable for which wiki page the command line argue is passing in
var location = process.argv[3]; // current directory where data lives
var outputDir = process.argv[4]; // output directory to move the processed HTML file

// get the output of the getSingleWiki.sh into a string, remove various elements, replace numerous elements, add some basics CSS, and save changes to file

console.log("Processing " + whichPage);

var wikiPage = fs.readFileSync(whichPage).toString();
// chop off the header, and a few other lines until you reach the content of the page
var firstLine = wikiPage.indexOf('<?xml version="1.0" encoding="UTF-8" ?>'); //0
var bodyLine = wikiPage.indexOf('<h2 class="heading ">'); // first line of page content
wikiPage = wikiPage.slice(bodyLine,wikiPage.length);

// Note: these two arrays are order dependent. If you add/remove anything from one array, be sure to match it in the other.
// Find/Replace content in the page you wish to process by listing the item you wish to find in the replaceThis array with the new item in the withThis array.
var replaceThis = ['<h2 class="heading "><span>','</span></h2>','<h3 class="heading ">','</h3>','<h2><span>','</span></h2>','<li class=" ">    <p  >','</p>\n</li>','<p  >','<h4','</h4>','<h5','</h5>','<div xmlns="http://www.w3.org/1999/xhtml" class="confbox programlisting scroll-unprocessed">','<div class="defaultnew syntaxhighlighter">',' class="plain"',' class="line"',' class="value"',' class="external-link external-link"',' class="section section-3 "',' class=" "','    </p>','    </li>',' class="toc-indentation "','  class="document-link "','</p>\n<ul',' class="section section-4 "',' class="section section-5 "',' class="heading "',' class="comments"',' class="keyword"','<td  class="confluenceTh"','<li class="li1 ">    <p>','</p>\n<ul>','    <p  class="p1">',' class="section section-2 "','<h3><span>','</span></h3>','  class="confluenceTh" rowspan="1" colspan="1"','  class="confluenceTd" rowspan="1" colspan="1"',' class="confluenceTable"'];
var withThis = ['<h1>','</h1>','<h2>','</h2>','<h2>','</h2>','<li>','</li>','<p>','<h3','</h3>','<h4','</h4>','<div>','<div>','','','','','','','</p>','</li>','','','<ul','','','','','','<th  class="confluenceTh"','<li>','<ul>','','','<h3>','</h3>','','',''];

for (var i = 0; i < replaceThis.length; i++) { // loop through arrays and find/replace various elements
	var re = new RegExp(replaceThis[i], 'g');
	wikiPage = wikiPage.replace(re, withThis[i]);
}

var footer = wikiPage.indexOf('<div class="footer">'); // ~'3460'
var nearEnd = wikiPage.indexOf('<div class="footer">');
wikiPage = wikiPage.substring(0, nearEnd); // chop off the end of the document
var CSSString = '<style>\n\ttd, th {tpadding: 5px;}\n\tthead, tr:nth-child(even) {background-color: #f8f8f8;}\n</style>\n';
wikiPage = CSSString + wikiPage;

//console.log(wikiPage);

fs.writeFileSync(location + '/' + whichPage, wikiPage);
// Rename HTML to strip out everything but the version number, ask user to add "GA" or "RC" and add .html extension
whichPage = whichPage.slice(13,whichPage.length); // '5.1.2_Release_Note.html'
whichPage = whichPage.substr(0,whichPage.indexOf("_")); // '5.1.2'

// Get user input on the type of release note: GA, RC, or Beta
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('GA, RC, or Beta? ');
rl.prompt();

rl.on('line', (line) => {
	switch(line.trim()) { // append the release type and .html to the filename
    	case 'GA':
    		whichPage += ".GA.html";
      		break;
    	case 'RC':
    		whichPage += ".RC.html";
      		break;
      	case 'Beta':
    		whichPage += ".Beta.html";
      		break;
    	default:
      		console.log('Your response needs to either "GA", "RC", or "Beta".');
			break;
	}
	writeNMove(whichPage,outputDir,wikiPage);
	process.exit(0);
	rl.prompt();
})

function writeNMove(page,location,content) { // write out file and put in the production location
	console.log(page + " has been processed and moved to " + location);
	fs.writeFileSync(location + '/' + page, content);
}