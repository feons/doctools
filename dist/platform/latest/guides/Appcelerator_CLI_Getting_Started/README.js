Ext.data.JsonP['Appcelerator_CLI_Getting_Started']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator CLI Getting Started</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-50168352\" class=\"content\">\n                        <h1>Appcelerator CLI Getting Started</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-Installation\">Installation</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-InstallNode.js\">Install Node.js</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-InstalltheCLI\">Install the CLI</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-UpdatetheCLI\">Update the CLI</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-ConfiguretheCLI\">Configure the CLI</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-ProxySetup\">Proxy Setup</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-SettheCorePackageVersion\">Set the Core Package Version</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Getting_Started-section-src-50168352_AppceleratorCLIGettingStarted-Nextsteps\">Next steps</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-50168352_AppceleratorCLIGettingStarted-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Appcelerator provides a command-line interface to check and configure your environment setup, create and build applications, and much more.  This guide covers how to install the Appcelerator CLI and execute some common tasks.    </p>\n    <p>Run <strong class=\" \"><tt class=\" \">appc --help</tt></strong> to see all available target options or see the <a class=\"document-link \" href=\"#!/guide/Appcelerator_Command-Line_Interface_Reference\">Appcelerator Command-Line Interface Reference</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-50168352_AppceleratorCLIGettingStarted-Installation\">\n        <h2 class=\"heading \"><span>Installation</span></h2>\n    <p>To setup the Appcelerator CLI, install Node.js, install the <tt class=\" \">appcelerator</tt> module using the NPM CLI, then run the <tt class=\" \">appc setup</tt> command to download and setup the latest CLI package.    </p>\n    <div class=\"section section-3 \" id=\"src-50168352_AppceleratorCLIGettingStarted-InstallNode.js\">\n        <h3 class=\"heading \"><span>Install Node.js</span></h3>\n    <p>The CLI requires Node.js 0.10.13 or later. If you don&apos;t have Node installed, install it from:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://nodejs.org/\" target=\"_blank\">nodejs.org</a>    </p>\n</li></ul>    <p>Before installing the CLI, you should decide where you want the Node Package Manager (<tt class=\" \">npm</tt>) to install packages. By default <tt class=\" \">npm</tt> installs into <tt class=\" \">/usr/local</tt> on OS X, which requires that you run <tt class=\" \">npm</tt> as root. This is not recommended. You can avoid having to run <tt class=\" \">npm</tt> by doing one of the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>Make the <tt class=\" \">/usr/local</tt> directory writable by all: <tt class=\" \">sudo chmod 777 /usr/local</tt>    </p>\n</li></ul><ul class=\" \"><li class=\" \">    <p>Set <tt class=\" \">npm</tt> to install to your home directory, or another directory of your choosing by setting the <tt class=\" \">npm</tt> prefix. For example, you can add the following to your <tt class=\" \">.bash_profile</tt> or other initialization file:  <tt class=\" \">export NPM_CONFIG_PREFIX=$HOME</tt>    </p>\n</li></ul>    <p>In this case, <tt class=\" \">npm</tt> packages are installed to <tt class=\" \">$HOME/lib/node_modules</tt> and launch scripts are installed in <tt class=\" \">$HOME/bin</tt>. <tt class=\" \">$HOME/bin</tt> must be in your PATH.    </p>\n    <p>For more information, see <a class=\"document-link \" href=\"#!/guide/Installing_Node\">Installing Node</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-50168352_AppceleratorCLIGettingStarted-InstalltheCLI\">\n        <h3 class=\"heading \"><span>Install the CLI</span></h3>\n<ol class=\" \"><li class=\" \">    <p>Install the <tt class=\" \">appc</tt> CLI. You many need to prepend the command with <tt class=\" \">sudo</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">npm </code><code class=\"functions\">install</code><code class=\"plain\"> appcelerator -g</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Setup the Appcelerator Platform environment.  This process will download the latest updates, setup the CLI and verify your development environment.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc setup</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>After getting the latest updates, you are prompted for your Appcelerator Platform credentials.    </p>\n</li><li class=\" \">    <p>If you are a member or more than one organization, you will be prompted to select an organization.    </p>\n</li><li class=\" \">    <p>Next, you must authorize your computer.  Select either to send the authorization code to a phone number (using SMS/text messaging) or e-mail associated with your Appcelerator Platform account.    </p>\n</li><li class=\" \">    <p>Enter the code you received.    </p>\n</li><li class=\" \">    <p>Finally, the CLI will ask you about the projects you want to develop, and based on your answers, will check your environment to verify it is OK.    </p>\n</li></ol>    <p>If you encounter an error installing <tt class=\" \">appc</tt>, see <a class=\"document-link \" href=\"#!/guide/Installing_Node-section-src-35620436_InstallingNode-TroubleshootingnpmProblems\">Troubleshooting npm Problems</a>.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-50168352_AppceleratorCLIGettingStarted-UpdatetheCLI\">\n        <h2 class=\"heading \"><span>Update the CLI</span></h2>\n    <p>The CLI has two components: the NPM package and the Core package, which contains the other CLI components.    </p>\n    <p><strong class=\" \">To update the NPM package</strong>, run the <strong class=\" \"><tt class=\" \">npm install appcelerator -g</tt></strong> command.  Note that you may need to prefix the command with <tt class=\" \">sudo</tt> on OS X systems.    </p>\n    <p><strong class=\" \">To update the Core package</strong>, run the <strong class=\" \"><tt class=\" \">appc setup</tt></strong> command to download and install the latest package.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-50168352_AppceleratorCLIGettingStarted-ConfiguretheCLI\">\n        <h2 class=\"heading \"><span>Configure the CLI</span></h2>\n    <div class=\"section section-3 \" id=\"src-50168352_AppceleratorCLIGettingStarted-ProxySetup\">\n        <h3 class=\"heading \"><span>Proxy Setup</span></h3>\n    <p>If you are using the Appcelerator CLI from behind a proxy, you need to configure your proxy server settings using the <tt class=\" \">appc config set</tt> command to set the <tt class=\" \">proxyServer</tt> variable to your proxy server settings.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc config </code><code class=\"functions\">set</code><code class=\"plain\"> proxyServer [http|https]:</code><code class=\"plain\">//</code><code class=\"plain\">&lt;username&gt;:&lt;password&gt;@&lt;domain&gt;:&lt;port_number&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">## Example</code></div>\n<div class=\"line\"><code class=\"plain\">appc config </code><code class=\"functions\">set</code><code class=\"plain\"> proxyServer https:</code><code class=\"plain\">//admin</code><code class=\"plain\">:password1234@foo.com:554</code></div>\n</div>\n    </div>\n    <p>Note: We encourage you to use <strong class=\" \"><tt class=\" \">appc config set cafile</tt></strong> as a security option over <tt class=\" \">appc config set strictSSL false </tt>as the latter doesn&#x2019;t do SSL key validation when making requests.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-50168352_AppceleratorCLIGettingStarted-SettheCorePackageVersion\">\n        <h3 class=\"heading \"><span>Set the Core Package Version</span></h3>\n    <p>To use a specific version of the core package (which contains specific versions of the Alloy, Arrow and Titanium CLIs), run the <tt class=\" \">appc use &lt;version&gt;</tt> command.  If you do not have the specified version installed, the CLI will download and install it for you.    </p>\n    <p>To see a list of available versions, run the <strong class=\" \"><tt class=\" \">appc use</tt></strong> command (without a version).    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc use</code></div>\n<div class=\"line\"><code class=\"plain\">The following versions are available:</code></div>\n<div class=\"line\"><code class=\"plain\">4.0.2      Installed (Active)                      </code></div>\n<div class=\"line\"><code class=\"plain\">4.0.1      Installed                               </code></div>\n<div class=\"line\"><code class=\"plain\">4.0.0      Installed                               </code></div>\n<div class=\"line\"><code class=\"plain\">4.0.0-rc   Installed&#xA0; </code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-50168352_AppceleratorCLIGettingStarted-Nextsteps\">\n        <h2 class=\"heading \"><span>Next steps</span></h2>\n    <p>After setting up the CLI, please review <a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_Tasks\">Appcelerator CLI Tasks</a> on building apps with the CLI.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=50168352\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Appcelerator CLI Getting Started"});