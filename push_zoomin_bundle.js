/*
    Purpose: To upload Zoomin bundles for publishing Confluence-based content to the Axway Docs site
    Usage: node push_zoomin_bundle.js -s <server> -b "<bundle(s)>" -k <path/to/RSA_key>
    Documentation: https://wiki.appcelerator.org/x/rsKVAw
*/

const program = require('commander');
const SftpUpload = require('sftp-upload');
const fs = require('fs');
const flags = ['server','bundle','path','key']; // list of available flags
const bundleName = ['api builder','api runtime services','api runtime services self','alloy','amplify cli','amplify dashboard','amplify services','amplify services overview','appc cli','appc dashboard','studio','mbs','sphere','syncplicity','sdk']; // names of the various products or top-level documents
const bundleDirectory = ['API_Builder','API_Runtime_Services','API_Runtime_Services_self-install','Alloy','Amplify_CLI','Amplify_Dashboard','Amplify_Services','Amplify_Services_Overview','Appcelerator_CLI','Appcelerator_Dashboard','Appcelerator_Studio','Mobile_Backend_Services','Sphere','Syncplicity','Titanium_SDK']; // bundle directory end path
var message = ''; // variable to hold the display message for bundle attempts and to which servers
var arguments = {}; // object to hold the entered arguments
var bundleList = []; // array to hold one or more bundle names
var bundleListPaths = []; // array to hold the path(s) of one or more bundle paths
var bundleCount = 0; // used to confirm that the right number of bundles are being sent
var serverCount = 0; // variable to track number of properly submitted server names

program // set up flags
  .version('0.1.0')
  .usage('node push_zoomin_bundle.js -s <server> -b "<bundle(s)>" -k <path/to/RSA_key> -p <non-default/path/to/bundles>')
  .option('-s, --server', '*Required* Which server to update the bundle to. Options: "sandbox" or "prod".')
  .option('-b, --bundle', '*Required* Which bundle to upload.')
  .option('-p, --path', 'Which path to use for your bundle.')
  .option('-k, --key', '*Required* Path and filename of the RSA key.')
  .parse(process.argv);

for (var i = 0; i < program.rawArgs.length; i++) { // loop through the array of raw arguments to gather the entered arguments
    for (j in flags) { // loop through flags array, determine if the flag was set, and add the value to the arguments object
        if (program.rawArgs[i] == '--' + flags[j] || program.rawArgs[i] == '-' + flags[j].slice(0,1)) {
            arguments[flags[j]] = program.rawArgs[i + 1];
        }
    }
}

if (arguments.server) { // set up pathway for Zoomin server
    if (arguments.server.indexOf(',') > -1 || arguments.server.indexOf(', ') > -1) { // check if the request is for a single server or multiple
        var servers = arguments.server.replace(/, /g, ',').split(','); // split argument into an array

        for (i in servers) { // check if the submitted server names check out
            if (servers[i] == 'prod') {
                servers[i] = '/docs.axway.com/confluence/incoming'; // re-assign array value to proper server path
                serverCount++;
            } else if (servers[i] == 'sandbox') {
                servers[i] = '/axway.zoominsoftware.io/confluence/incoming'; // re-assign array value to proper server path
                serverCount++;
            }
        }

        if (serverCount == 2) { // if the server names check out, update display message
            message = ' to both the sandbox and prod servers.';
        } else { // if not, exit program, program
            messageExit('Check spelling of submitted server names. Select either "sandbox" or "prod".\nEnd of line.', true);
        }
    } else { // assume the upload attempt is to a single server
        if (arguments.server == 'sandbox' || arguments.server == 'prod') { // check if server name checks out
            var servers = arguments.server;
            message = ' to the ' + servers + ' server.';
        } else {
            messageExit('Server is required. Select either "sandbox" or "prod".\nEnd of line.', true);
        }
    }
} else {
    messageExit('Server is required. Select either "sandbox" or "prod".\nEnd of line.', true);
}

if (!arguments.path) { // set default path for product bundles
    arguments.path = '/Users/bimmel/Documents/Repositories/zoomin/products/Bundles/'; // default path to individual bundles
}

if (arguments.bundle) { // set up pathway for bundle to be uploaded    
    if (arguments.bundle.indexOf(',') > -1 || arguments.bundle.indexOf(', ') > -1) { // if there is a comma separated, assume this is a multiple bundle upload request
        bundleList = arguments.bundle.replace(/, /g, ',').split(','); // remove any spaces after the comma and convert into an array
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
        if (bundleCount == 1) {
            message = 'Attempting to upload one bundle' + message;
        } else {
            message = 'Attempting to upload ' + bundleCount + ' bundles' + message;
        }
        messageExit(message, false);
    } else {
        message = 'One of the bundle names isn\'t right. Please use one of the following: ';
        
        for (var i = 0; i < bundleName.length; i++) {
            if (i == bundleName.length - 1) {
                message += 'and/or "' + bundleName[i] + '".\n';
            } else {
                message += '"' + bundleName[i] + '", ';
            }
        }

        messageExit(message + 'End of line.', true);
    }
}

if (!arguments.key) {
    messageExit('A RSA key is required. End of line.', true);
}

if (arguments.server && arguments.path && arguments.bundle && arguments.key) { // if all required arguments are present, push the bundles to the Zoomin server
    for (i in servers) {
        for (k in bundleListPaths) { // loop through all bundles and sftp them to the zoomin server
            var options = { // set options for SFTP upload
                host: 'upload.zoominsoftware.io', // zoomin host
                username: 'axway', // our username
                path: bundleListPaths[k], // path to the bundle to be uploaded
                remoteDir: servers[i], // path to the server
                privateKey: fs.readFileSync(arguments.key) // RSA key
            }

            console.log(options)
    
            // sftp = new SftpUpload(options);
    
            // sftp.on('error', function(err) {
            //     throw err;
            //     })
            //     .on('uploading', function(progress) {
            //         console.log('Uploading', progress.file);
            //         console.log(progress.percent + '% completed');
            //     })
            //     .on('completed', function() {
            //         console.log('Upload complete.');
            //     })
            //     .upload();
        }
    }
    
} else { // catch any missing required flags
    messageExit('You are missing one or more arguments.\nEnd of line.', true);
}

function messageExit(message, exit) { // display message(s) and exit the program if necessary
    console.log(message);

    if (exit) { // if the MCU requests, and exit, terminate the program
        process.exit(1);
    }
}