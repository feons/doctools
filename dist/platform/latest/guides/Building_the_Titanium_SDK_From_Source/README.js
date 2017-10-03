Ext.data.JsonP['Building_the_Titanium_SDK_From_Source']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Building the Titanium SDK From Source</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-35620794\" class=\"content\">\n                        <h1>Building the Titanium SDK From Source</h1>\n    <p>This document provides information on how to build Titanium SDK from source files by listing software requirements, how to set up your environment, where to get the source files, building the SDK, how to install a build SDK, and speeding up the Titanium SDK build.    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-SoftwareRequirements\">Software Requirements</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-WindowsNotes\">Windows Notes</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-SettingUpYourEnvironment\">Setting Up Your Environment</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-GettingtheSource\">Getting the Source</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-CheckingOutaPullRequestLocally\">Checking Out a Pull Request Locally</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-BuildtheSDK\">Build the SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-InstallingaBuiltSDK\">Installing a Built SDK</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-ToInstalltheSDKUsingStudio\">To Install the SDK Using Studio</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-ToInstalltheSDKManually\">To Install the SDK Manually</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-SpeedingUptheTitaniumSDKBuild\">Speeding Up the Titanium SDK Build</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-Useccache\">Use ccache</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-ParallelizeCompiling\">Parallelize Compiling</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_safe-id-QnVpbGRpbmd0aGVUaXRhbml1bVNES0Zyb21Tb3VyY2UtRG9uJ3RCdWlsZHRoZURvY3NvbkV2ZXJ5Q29tcGlsZQ\">Don&apos;t Build the Docs on Every Compile</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-SoftwareRequirements\">\n        <h2 class=\"heading \"><span>Software Requirements</span></h2>\n    <p>You must have the following software installed to be able to compile the Titanium SDK. (Click on any item to get instructions on how to install it for your system.)    </p>\n    <p>The following software is required for building Titanium applications, and you probably already have it installed:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_Python\">Python</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_Oracle_JDK\">Oracle JDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK\">iOS SDK</a> (only on Mac OS X systems)    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_SDK\">Android SDK</a> (requires Android 4.2.2, API Level 17, and Google APIs 14 or later)    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_Node\">Node.js</a> (required for building SDK 3.0 and later)    </p>\n</li></ul>    <p>The following additional software is required for building the Titanium SDK:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages\">Python setuptools, and the pyyaml and Pygments libraries</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_Git\">Git</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_NDK\">Android NDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_SCons\">SCons</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_Ant\">Apache Ant</a> (for Android)    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_Eclipse_and_ADT\">Eclipse and ADT</a> (for Android)    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_gperf\">Gperf</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://www.microsoft.com/visualstudio/eng/downloads#d-2010-express\" target=\"_blank\">Visual C++ 2010 Express</a> (for Windows systems)    </p>\n</li></ul>    <p>Many of these items you may already have installed for developing Titanium applications.    </p>\n    <p>To build the SDK for Android, you must have either Apache Ant or Eclipse and ADT installed. In most cases, you should probably have both--Ant for command-line builds, and Eclipse and ADT for interactive builds and debugging. Building the SDK using <tt class=\" \">scons</tt>, as described here, requires Ant.    </p>\n    <div class=\"section section-3 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-WindowsNotes\">\n        <h3 class=\"heading \"><span>Windows Notes</span></h3>\n    <p>For Windows, if you use Studio, you may need to reinstall some of the tools, such as Git, Java and Node.js, and modify your PATH variable to the new locations of the binary executables.  Due to a bug in SCons, paths to tools cannot contain spaces.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-SettingUpYourEnvironment\">\n        <h2 class=\"heading \"><span>Setting Up Your Environment</span></h2>\n    <p>The following environment variables must be set in order to build the SDK from source.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Varible    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Value    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ANDROID_SDK    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android SDK directory, for example, ~/android_sdks    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ANDROID_NDK    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android NDK directory, for example, ~/android-ndk-r9d    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The PATH environment variable must include the paths to the binaries for NPM, Node.js, git, Python, Java, Ant, gperf, $ANDORID_SDK/platform-tools and $ANDROID_SDK/tools    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>JAVA_HOME    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Oracle JDK directory, for example, C:\\Java\\jdk1.7.0_ 51    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ANDROID_PLATFORM    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android SDK platform directory, for example, $ANDROID_SDK/platforms/android-17    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GOOGLE_APIS    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android Google APIs add-on directory, for example, $ANDROID_SDK/add-ons/addon-google_apis-google-14    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-GettingtheSource\">\n        <h2 class=\"heading \"><span>Getting the Source</span></h2>\n    <p>The simplest way to get the SDK source is to simply clone it:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git clone https:</code><code class=\"comments\">//github.com/appcelerator/titanium_mobile.git</code></div>\n</div>\n    </div>\n    <p>However, if you have any interest in contributing to Titanium, you should create your own fork of the <tt class=\" \">titanium_mobile</tt> repository on github, as described in the <a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide\">Pull Request Guide</a>.    </p>\n    <div class=\"section section-3 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-CheckingOutaPullRequestLocally\">\n        <h3 class=\"heading \"><span>Checking Out a Pull Request Locally</span></h3>\n    <p>If you want to test a changes that is a pull request on Github, you can add and checkout remote PR branches to your local titanium_mobile repo.  Note that there are over 5000 PRs in the titanium_mobile Github repo, and over 5000 remote PR branches will be added to your local repo.    </p>\n    <p><strong class=\" \">To add the remote PR branches:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>From the root level of your titanium_mobile repo, open the <tt class=\" \">.git/config</tt> file.    </p>\n</li><li class=\" \">    <p>Locate the appcelerator/titanum_mobile repo contents in the file.  Note that the remote repo name will be different depending on how you retrieved the appcelerator/titanum_mobile remote repo. In the example below, it was name &quot;upstream&quot;.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">[remote </code><code class=\"string\">&quot;upstream&quot;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">        fetch = +refs/heads/*:refs/remotes/upstream/*</code></div>\n<div class=\"line\"><code class=\"plain\">        url = https:</code><code class=\"comments\">//github.com/appcelerator/titanium_mobile.git</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Add the following line to the section and replace <tt class=\" \">&lt;remote_name&gt;</tt> with the name of the remote repo:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">fetch = +refs/pull/*/head:refs/remotes/&lt;remote_name&gt;/pr/*</code></div>\n</div>\n    </div>\n    <p>In the previous example, the section now looks like:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">[remote </code><code class=\"string\">&quot;upstream&quot;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">        fetch = +refs/heads</code><code class=\"comments\">/*:refs/remotes/upstream/*</code></div>\n<div class=\"line\"><code class=\"comments\">        url = https://github.com/appcelerator/titanium_mobile.git</code></div>\n<div class=\"line\"><code class=\"comments\">        fetch = +refs/pull/*/</code><code class=\"plain\">head:refs/remotes/upstream/pr/*</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Fetch the remote PR branches:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git fetch upstream</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Checkout the PR you want to test:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git checkout pr/####</code></div>\n</div>\n    </div>\n</li></ol>    <p><strong class=\" \">To remove the PR remote branches, run the following command:</strong>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git fetch upstream --prune</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-BuildtheSDK\">\n        <h2 class=\"heading \"><span>Build the SDK</span></h2>\n    <p>The method written below is the old way. The repo has now been updated to do away with scons. Please refer to <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile/blob/master/README.md#building-locally\" target=\"_blank\"> https://github.com/appcelerator/titanium_mobile/blob/master/README.md#building-locally</a> on how to build locally with Node.JS scrips.    </p>\n    <p>In the root of your <tt class=\" \">titanium_mobile</tt> repo, run <tt class=\" \">scons</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">scons</code></div>\n</div>\n    </div>\n    <p>By default, <tt class=\" \">scons</tt> build all of the platforms, including building the JSCA file for Studio content assist.  To skip generating the JSCA file, specify  <tt class=\" \">build_jsca=0</tt> .    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">scons package_all=</code><code class=\"value\">1</code><code class=\"plain\"> # Build all platforms and OS packages</code></div>\n<div class=\"line\"><code class=\"plain\">scons build_jsca=</code><code class=\"value\">0</code><code class=\"plain\">  # Do full build &amp; packaging but omit JSCA generation</code></div>\n</div>\n    </div>\n    <p>To clean the build artifacts, call <tt class=\" \">scons clean</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">scons clean</code></div>\n</div>\n    </div>\n    <p>When updating to a new version of the SDK, it is usually necessary to do a clean to force a full rebuild.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-InstallingaBuiltSDK\">\n        <h2 class=\"heading \"><span>Installing a Built SDK</span></h2>\n    <p>Once you&apos;ve built the SDK successfully, the built SDK is in <tt class=\" \">titanium_mobile_dir/dist/mobilesdk-&lt;version&gt;-&lt;os&gt;.zip</tt>, where<br><tt class=\" \">titanium_mobile</tt> is the root of your local repo, <tt class=\" \">&lt;version&gt;</tt> is the current version of the SDK master branch, and <tt class=\" \">&lt;os&gt;</tt> is the OS you built for,<br>such as <tt class=\" \">windows</tt> or <tt class=\" \">osx</tt>.    </br></br></p>\n    <div class=\"section section-3 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-ToInstalltheSDKUsingStudio\">\n        <h3 class=\"heading \"><span>To Install the SDK Using Studio</span></h3>\n    <p>Note that if you install an SDK using Studio, it will appear in Studio with the default version number. If you want to rename your custom SDK, see <a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source-section-src-35620794_BuildingtheTitaniumSDKFromSource-ToInstalltheSDKManually\">To Install the SDK Manually</a>.    </p>\n<ol class=\" \"><li class=\" \">    <p>Click <strong class=\" \">Help</strong> &gt; <strong class=\" \">Install Titanium SDK...</strong>.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Install from URL</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Browse</strong>. Browse your <tt class=\" \">&lt;titanium_mobile_dir&gt;/dist</tt> folder and select the zip file.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Finish</strong>.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-ToInstalltheSDKManually\">\n        <h3 class=\"heading \"><span>To Install the SDK Manually</span></h3>\n<ol class=\" \"><li class=\" \">    <p>Unzip the zip file.    </p>\n</li><li class=\" \">    <p>Inside the <tt class=\" \">mobilesdk/&lt;os&gt;</tt> folder, there is a folder named with the version number (for example, 3.0.0). You may want to rename this folder so you can distinguish it later &#x2013; for example, <tt class=\" \">3.0.0.timob-9999</tt>.    </p>\n</li><li class=\" \">    <p>Copy the SDK folder to the folder where your other Titanium SDKs are installed.    </p>\n</li></ol>    <p>The default installation folder for SDKs varies by operating system:    </p>\n<ul class=\" \"><li class=\" \">    <p>OS X Lion and later:<br><br><tt class=\" \">~/Library/Application Support/Titanium</tt>    </br></br></p>\n</li></ul><ul class=\" \"><li class=\" \">    <p>OS X Snow Leopard and earlier:<br><br><tt class=\" \">/Library/Application Support/Titanium</tt>    </br></br></p>\n</li></ul><ul class=\" \"><li class=\" \">    <p>Windows Vista, Windows 7, Windows 8:<br><br><tt class=\" \">%ProgramData%\\Titanium</tt>    </br></br></p>\n</li></ul><ul class=\" \"><li class=\" \">    <p>Windows XP, Windows Server 2003:<br><br><tt class=\" \">%APPDATA%\\Titanium</tt><br><tt class=\" \">%ALLUSERSPROFILE%\\Application Data\\Titanium</tt>    </br></br></br></p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-SpeedingUptheTitaniumSDKBuild\">\n        <h2 class=\"heading \"><span>Speeding Up the Titanium SDK Build</span></h2>\n    <p>The process of compiling the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile\" target=\"_blank\">Titanium SDK source code</a> can be very time consuming if your environment is not primed to do so. Here&apos;s a short list of tips and tricks for getting that compile time down. In our testing so far, these tips can     <span style=\"color: #ff0000;\">\nreduce compile time by as much as 80%!    </span>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>At this time, the instructions refer specifically to speeding up the Titanium SDK build on a Mac OS X machine.    </p>\n    </div>\n        <div class=\"section section-3 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-Useccache\">\n        <h3 class=\"heading \"><span>Use  ccache</span></h3>\n    <p>The Android NDK, required to build Titanium SDK 1.8 and later for Android, can use <a class=\"external-link external-link\" href=\"http://ccache.samba.org/\" target=\"_blank\">ccache</a>, a tool for reusing cached C/C++ compilations. We get huge improvements in build time with it.    </p>\n<ol class=\" \"><li class=\" \">    <p>Install <a class=\"external-link external-link\" href=\"http://mxcl.github.com/homebrew/\" target=\"_blank\">HomeBrew</a> if you don&apos;t have it installed already    </p>\n</li><li class=\" \">    <p>Install <tt class=\" \">ccache</tt> with the following command: <strong class=\" \"> <tt class=\" \">brew install ccache</tt> </strong>    </p>\n</li><li class=\" \">    <p>Set an environment variable <tt class=\" \">NDK_CCACHE</tt> to point to it. Installed with HomeBrew, the command would be: <strong class=\" \"> <tt class=\" \">export NDK_CCACHE=/usr/local/bin/ccache</tt> </strong>    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-35620794_BuildingtheTitaniumSDKFromSource-ParallelizeCompiling\">\n        <h3 class=\"heading \"><span>Parallelize Compiling</span></h3>\n    <p>The NDK can also parallelize while compiling, which can speed up the process.    </p>\n<ol class=\" \"><li class=\" \">    <p>Determine how many cores your machine has. You can use this command on Mac OSX: <strong class=\" \"> <tt class=\" \">system_profiler | grep -i &quot;Number Of Cores&quot;</tt> </strong>    </p>\n</li><li class=\" \">    <p>Multiply the above number by 2. So if the above command returned <tt class=\" \">Number of Cores: 2</tt>, then your value should be 4.    </p>\n</li><li class=\" \">    <p>Set an environment variable <tt class=\" \">NUM_CPUS</tt> equal to the above value. In this case: <strong class=\" \"> <tt class=\" \">export NUM_CPUS=4</tt> </strong>    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-35620794_safe-id-QnVpbGRpbmd0aGVUaXRhbml1bVNES0Zyb21Tb3VyY2UtRG9uJ3RCdWlsZHRoZURvY3NvbkV2ZXJ5Q29tcGlsZQ\">\n        <h3 class=\"heading \"><span>Don&apos;t Build the Docs on Every Compile</span></h3>\n    <p>Skip building the JSCA files (the files used by Studio&apos;s code assist feature). You don&apos;t need them if you&apos;re just making a build for yourself for testing. To skip, run <tt class=\" \">scons</tt> like this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">scons build_jsca=</code><code class=\"value\">0</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=35620794\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Building the Titanium SDK From Source"});