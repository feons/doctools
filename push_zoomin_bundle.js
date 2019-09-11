const program = require('commander');
var SftpUpload = require('sftp-upload');
var fs = require('fs');
var arguments = {}; // object to hold the entered arguments

program // set up flags
  .version('0.0.1')
  .usage('-release <#_#> -d <milliseconds>')
  .option('-s, --server', '*required* Which server to update the bundle to. Options: "sandbox" or "prod".')
  .option('-b, --bundle', '*required* Which bundle to upload.')
  .option('-p, --path', 'Which path to use for your bundle.')
  .option('-k, --key', '*required* Path and filename of the RSA key.')
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
    console.log('Server is required. Select either "sandbox" or "prod". Quitting attempt.');

    process.exit(1);  
}

if (!arguments.path) { // set default path for product bundles
    arguments.path = '/Users/bimmel/Documents/Repositories/zoomin/products/Bundles/'; // default path to individual bundles
}

const bundleName = ['api builder','api runtime services','api runtime services self','alloy','amplify cli','amplify dashboard','amplify services','amplify services overview','appc cli','appc dashboard','studio','mbs','sphere','syncplicity','sdk']; // names of the various products or top-level documents
const bundleDirectory = ['API_Builder','API_Runtime_Services','API_Runtime_Services_self-install','Alloy','Amplify_CLI','Amplify_Dashboard','Amplify_Services','Amplify_Services_Overview','Appcelerator_CLI','Appcelerator_Dashboard','Appcelerator_Studio','Mobile_Backend_Services','Sphere','Syncplicity','Titanium_SDK']; // bundle directory end path

if (arguments.bundle) { // set up pathway for bundle to be uploaded
    var matches = false; // if the supplied argument isn't found in bundleName array, fail the attempt

    for (i in bundleName) { // match the bundle name with the path to said bundle
        if (arguments.bundle == bundleName[i]) {
            arguments.bundle = arguments.path + bundleDirectory[i];
            matches = true;
            break;
        }
    }

    if (matches == false) {
        console.log('A bundle name is required. Please use one of the following:');
        
        for (i in bundleName) {
            console.log(bundleName[i]);
        }

        console.log('Quitting attempt.');

        process.exit(1);  
    }
}

if (!arguments.key) {
    console.log('A RSA key is required. Quitting attempt.');

    process.exit(1);
}

if (arguments.server && arguments.path && arguments.bundle && arguments.key) {
    var options = { // set options for SFTP upload
        host: 'upload.zoominsoftware.io', // zoomin host
        username: 'axway', // our username
        path: arguments.bundle, // path to the bundle to be uploaded
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

} else { // catch any missing required flags
    console.log('You are missing one or more arguments. Quitting attempt.');

    process.exit(1);
}

