Ext.data.JsonP['Reviewing_pull_requests']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Reviewing pull requests</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-37551424\" class=\"content\">\n                        <h1>Reviewing pull requests</h1>\n    <p>An important way you can help move Titanium forward is to review the changes that others have submitted. Proper functional testing helps us merge changes more quickly and with more confidence.    </p>\n    <p>This document describes the process you can follow to test any of the &quot;NPM-installable&quot; projects, including Alloy and the CLI. While you could test PRs for the Titanium SDK itself, that would also involve <a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source\">Building the Titanium SDK From Source</a> which is covered elsewhere in the documentation.     </p>\n    <div class=\"section section-2 \" id=\"src-37551424_safe-id-UmV2aWV3aW5ncHVsbHJlcXVlc3RzLU9uZS10aW1lc2V0dXA6\">\n        <h2 class=\"heading \"><span>One-time setup:</span></h2>\n<ol class=\" \"><li class=\" \">    <p>Clone the project repo to a local directory. For example, for Alloy you would use <tt class=\" \">git clone https://github.com/appcelerator/alloy.git</tt> (you can&apos;t do this with your fork of the project)    </p>\n</li><li class=\" \">    <p>In the resulting directory, open the <strong class=\" \">.git/config</strong> file in your text editor.    </p>\n</li><li class=\" \">    <p>Follow the instructions at <a class=\"external-link external-link\" href=\"https://help.github.com/articles/checking-out-pull-requests-locally\" target=\"_blank\">https://help.github.com/articles/checking-out-pull-requests-locally</a> to modify your git configuration to support fetching pull requests    </p>\n</li></ol>    <p>    <span style=\"color: #000000;\">\nCheckout a PR    </span>\n    </p>\n    <p>GitHub for Mac (or Windows) users, you&apos;ll see a button to check out the PR directly from the GitHub repo page. This will work only if you have write access to the repo. (You can check out <a class=\"external-link external-link\" href=\"https://github.com/blog/1582-checking-out-pull-requests\" target=\"_blank\">https://github.com/blog/1582-checking-out-pull-requests</a> for more details.) Sorry, you&apos;re going to have to use the command-line for this:    </p>\n<ol class=\" \"><li class=\" \">    <p>Update your local repo with <tt class=\" \">git fetch origin</tt> (which will also fetch all the PRs).    </p>\n</li><li class=\" \">    <p>Check out the specific PR using <tt class=\" \">git checkout pull/origin/999 -b 999</tt> where 999 is the PR number (the -b 999 creates a new local branch named after the PR)    </p>\n</li><li class=\" \">    <p>Install from your local branch: [<tt class=\" \">sudo]</tt><tt class=\" \"> npm install -g .</tt> (with the dot at the end). You&#x2019;re ready now to do your testing, etc.    </p>\n</li></ol>    <p>    <span style=\"color: #000000;\">\nFunctional Review testing    </span>\n    </p>\n    <p>Tickets should contain a description of what steps should be followed to review the changes. Alloy tickets, for example, should note a sample app (either attached to the PR or to the ticket). Run that app and confirm it displays the expected behavior.    </p>\n    <p>Optionally, you could build one of your own projects with the PR version. This could uncover issues that might be missed by the simple test case app included on the ticket.    </p>\n    <p>When you&apos;re done, add a comment on the ticket (preferred) or pull request. If all works fine, a simple &quot;FR passes&quot; comment will suffice. If there are errors or if the feature doesn&apos;t work as expected, please post detailed comments including any error messages    </p>\n    <p>    <span style=\"color: #000000;\">\nPost FR cleanup    </span>\n    </p>\n<ol class=\" \"><li class=\" \">    <p>Install the release version again. E.g. [<tt class=\" \">sudo]</tt><tt class=\" \"> npm install -g alloy</tt>    </p>\n</li><li class=\" \">    <p>Switch to your master branch: <tt class=\" \">git checkout master</tt>    </p>\n</li><li class=\" \">    <p>Finally, force-delete your local PR branch: <tt class=\" \">git branch -D 999</tt> (this will destroy any changes you made to the files)    </p>\n</li></ol>    <p>    <span style=\"color: #000000;\">\nAlloy&apos;s jake app runner    </span>\n    </p>\n    <p>Alloy includes the jake (JavaScript make) utility, which you can use this to run any of the PR test apps, as well as the sample/demo apps included in the repo. For example, from your local Alloy repo directory:    </p>\n<pre class=\" \">jake app:run dir=ALOY-1234 // to run the app in test/apps/testing/ALOY-1234<br>jake app:run dir=basics/simple // to run the test/apps/basics/simple demo app</br></pre><pre class=\" \">// additional command-line options are:<br>platform=android   // to build for android,ios,mobileweb,blackberry<br>tiversion=3.2.2.GA  // to build using a specific SDK version (must match tiapp.xml)(<br>tisdk=&lt;path_to_sdk&gt;</br></br></br></pre><pre class=\" \">// e.g.<br>jake app:run dir=ALOY-1234 platform=android tiversion=3.2.2.GA</br></pre>    <p>The resulting app will be installed to your simulator/emulator under the name <strong class=\" \">Harness</strong>. You can import the Harness app into Studio to build for other platforms, install to device, etc. The Harness app is wiped with each jake app:run command.    </p>\n    <p>    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=37551424\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Reviewing pull requests"});