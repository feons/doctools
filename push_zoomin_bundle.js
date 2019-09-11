/*
    Purpose: To upload Zoomin bundles for publishing Confluence-based content to the Axway Docs site
    Usage: node push_zoomin_bundle.js -s <server> -b "<bundle(s)>" -k <path/to/RSA_key>
    Documentation: https://wiki.appcelerator.org/x/rsKVAw
*/
const program = require('commander');
var SftpUpload = require('sftp-upload');
var fs = require('fs');
var arguments = {}; // object to hold the entered arguments

program // set up flags
  .version('0.0.2')
  .usage('node push_zoomin_bundle.js -s <server> -b "<bundle(s)>" -k <path/to/RSA_key> -p <non-default/path/to/bundles>')
  .option('-s, --server', '*Required* Which server to update the bundle to. Options: "sandbox" or "prod".')
  .option('-b, --bundle', '*Required* Which bundle to upload.')
  .option('-p, --path', 'Which path to use for your bundle.')
  .option('-k, --key', '*Required* Path and filename of the RSA key.')
  .parse(process.argv);

var flags = ['server','bundle','path','key']; // list of available flags

for (var i = 0; i < program.rawArgs.length; i++) { // loop through the array of raw arguments to gather the entered arguments
    for (j in flags) { // loop through flags array, determine if the flag was set, and add the value to the arguments object
        if (program.rawArgs[i] == '--' + flags[j] || program.rawArgs[i] == '-' + flags[j].slice(0,1)) {
            arguments[flags[j]] = program.rawArgs[i + 1];
        }
    }
}

if (arguments.server) { // set up pathway for Zoomin server
    if (arguments.server == 'sandbox') {
        arguments.server = '/axway.zoominsoftware.io/confluence/incoming';
    } else if (arguments.server == 'prod') {
        arguments.server = '/docs.axway.com/confluence/incoming';
    }
} else {
    console.log('Server is required. Select either "sandbox" or "prod". End of line.');

    process.exit(1);  
}

if (!arguments.path) { // set default path for product bundles
    arguments.path = '/Users/bimmel/Documents/Repositories/zoomin/products/Bundles/'; // default path to individual bundles
}

const bundleName = ['api builder','api runtime services','api runtime services self','alloy','amplify cli','amplify dashboard','amplify services','amplify services overview','appc cli','appc dashboard','studio','mbs','sphere','syncplicity','sdk']; // names of the various products or top-level documents
const bundleDirectory = ['API_Builder','API_Runtime_Services','API_Runtime_Services_self-install','Alloy','Amplify_CLI','Amplify_Dashboard','Amplify_Services','Amplify_Services_Overview','Appcelerator_CLI','Appcelerator_Dashboard','Appcelerator_Studio','Mobile_Backend_Services','Sphere','Syncplicity','Titanium_SDK']; // bundle directory end path

if (arguments.bundle) { // set up pathway for bundle to be uploaded
    var bundleList = []; // array to hold one or more bundle names
    var bundleListPaths = []; // array to hold the path(s) of one or more bundle paths
    var bundleCount = 0; // used to confirm that the right number of bundles are being sent
    
    if (arguments.bundle.indexOf(',') > -1) { // if there is a comma separated, assume this is a multiple bundle upload request
        bundleList = arguments.bundle.split(',');
    } else { // process a single bundle
        bundleList.push(arguments.bundle);
    }

    for (i in bundleName) { // loop through the bundle names and obtain the correct path and bundle directory names bundle names is mistyped
        for (k in bundleList) {
            if (bundleList[k] == bundleName[i]) {
                bundleListPaths.push(arguments.path + bundleDirectory[i]);
                bundleCount++;
            }
        }
    }

    if (bundleCount == bundleList.length) { // if the bundleList length doesn't match the bundleCount, then one or more of the 
        console.log('Attempting to upload ' + bundleCount + ' bundles.');
    } else {
        console.log('One of the bundles isn\'t right. Please use one of the following:');
        
        for (i in bundleName) {
            console.log(bundleName[i]);
        }

        console.log('End of line.');

        process.exit(1); 
    }
}

if (!arguments.key) {
    console.log('A RSA key is required. End of line.');

    process.exit(1);
}

if (arguments.server && arguments.path && arguments.bundle && arguments.key) {
    for (i in bundleListPaths) { // loop through all bundles and sftp them to the zoomin server
        var options = { // set options for SFTP upload
            host: 'upload.zoominsoftware.io', // zoomin host
            username: 'axway', // our username
            path: bundleListPaths[i], // path to the bundle to be uploaded
            remoteDir: arguments.server, // path to the server
            privateKey: fs.readFileSync(arguments.key) // RSA key
        }

        sftp = new SftpUpload(options);

        sftp.on('error', function(err) {
            throw err;
            })
            .on('uploading', function(progress) {
                console.log('Uploading', progress.file);
                console.log(progress.percent + '% completed');
            })
            .on('completed', function() {
                console.log('Upload complete.');
            })
            .upload();
    }
} else { // catch any missing required flags
    console.log('You are missing one or more arguments. End of line.');

    process.exit(1);
}