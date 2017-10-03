Ext.data.JsonP['Using_Studio_From_Behind_a_Proxy']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Using Studio From Behind a Proxy</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083019\" class=\"content\">\n                        <h1>Using Studio From Behind a Proxy</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_Studio_From_Behind_a_Proxy-section-src-30083019_UsingStudioFromBehindaProxy-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_Studio_From_Behind_a_Proxy-section-src-30083019_UsingStudioFromBehindaProxy-StartupSplashScreen\">Startup Splash Screen</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_Studio_From_Behind_a_Proxy-section-src-30083019_UsingStudioFromBehindaProxy-PreferencesWindow\">Preferences Window</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_Studio_From_Behind_a_Proxy-section-src-30083019_UsingStudioFromBehindaProxy-WindowsSystemSettings\">Windows System Settings</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_Studio_From_Behind_a_Proxy-section-src-30083019_UsingStudioFromBehindaProxy-WhitelistingURLs\">Whitelisting URLs</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30083019_UsingStudioFromBehindaProxy-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>Studio <strong class=\" \">requires</strong> an Internet connection to authenticate the user to the Appcelerator cloud on first launch, although the credentials are cached for subsequent use. In addition, the web is used for news, documentation and code updates. This guide explains how to configure it for use behind a proxy.  For Windows systems, use the system proxy settings (see the <i class=\" \">Windows System Settings</i> section below for details).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083019_UsingStudioFromBehindaProxy-StartupSplashScreen\">\n        <h2 class=\"heading \"><span>Startup Splash Screen</span></h2>\n    <p>If no user credentials are available to Studio on launch, a splash screen will be displayed allowing you to enter your user name and password. At the bottom of this dialog, click the <strong class=\" \">Proxy Setup...</strong> link to open the following dialog:    </p>\n    <p>    <img src=\"images/download/attachments/30083019/splashscreen1.png\" alt=\"images/download/attachments/30083019/splashscreen1.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    <p>    <img src=\"images/download/attachments/30083019/ProxySetup.png\" alt=\"images/download/attachments/30083019/ProxySetup.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    <p>The proxy schema (<tt class=\" \">HTTP</tt>, <tt class=\" \">HTTPS</tt> and <tt class=\" \">SOCKS</tt> are all supported), server name or IP address, service port number and authentication details can be configured. After clicking <strong class=\" \">OK, </strong>then<strong class=\" \"> Login</strong> to start, all Internet traffic will be directed via this proxy.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083019_UsingStudioFromBehindaProxy-PreferencesWindow\">\n        <h2 class=\"heading \"><span>Preferences Window</span></h2>\n    <p>To configure your proxy settings once Studio has started, open the <strong class=\" \">Preferences</strong> window and navigate to <strong class=\" \">Network Connections</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>From the menu bar, select <strong class=\" \">Windows &gt; </strong> <strong class=\" \">Preferences </strong>on Windows, or<strong class=\" \"> </strong>select<strong class=\" \"> Titanium Studio &gt; Preferences</strong> or <strong class=\" \">Appcelerator Studio </strong>&gt; <strong class=\" \">Preferences </strong>on Mac OS X.    </p>\n</li><li class=\" \">    <p>Navigate to <strong class=\" \">General </strong>&gt; <strong class=\" \">Network Connections</strong>.    </p>\n</li><li class=\" \">    <p>Select the Proxy entry that you would like to edit, for example, <strong class=\" \">HTTP,</strong> and click <strong class=\" \">Edit...</strong>    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Host</strong> and <strong class=\" \">Port</strong> fields, specify the name or IP address and port number of your proxy server.    </p>\n</li><li class=\" \">    <p>If you have authentication enabled, check the <strong class=\" \">Requires Authentication</strong> box and type in your proxy User and Password.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK</strong> to apply your settings.    </p>\n</li><li class=\" \">    <p>Restart Studio. All Internet traffic will be directed via this proxy.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083019_UsingStudioFromBehindaProxy-WindowsSystemSettings\">\n        <h2 class=\"heading \"><span>Windows System Settings</span></h2>\n    <p>For Windows systems, Studio should use the system&apos;s proxy settings.  You may need to enter the proxy settings when the Splash Screen appears to get to the <strong class=\" \">Preferences</strong> window to change the settings.    </p>\n<ol class=\" \"><li class=\" \">    <p>From the menu bar, select <strong class=\" \">Windows &gt; </strong> <strong class=\" \">Preferences</strong>.    </p>\n</li><li class=\" \">    <p>Navigate to <strong class=\" \">General </strong>&gt; <strong class=\" \">Network Connections</strong>.    </p>\n</li><li class=\" \">    <p>Change the <strong class=\" \">Active Provider</strong> drop-down to <strong class=\" \">Native</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK</strong> to apply your settings.    </p>\n</li><li class=\" \">    <p>Restart Studio. All Internet traffic will be directed via the Windows system proxy setttings.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083019_UsingStudioFromBehindaProxy-WhitelistingURLs\">\n        <h2 class=\"heading \"><span>Whitelisting URLs</span></h2>\n    <p>It&apos;s possible you may need to whitelist several URLs in some network environments. Below are the set of URLs to whitelist. If possible, it is easiest to whitelist *.appcelerator.com.    </p>\n    <p>Web access    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://www.appcelerator.com\" target=\"_blank\">www.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://university.appcelerator.com\" target=\"_blank\">university.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://developer.appcelerator.com\" target=\"_blank\">developer.appcelerator.com</a>    </p>\n</li></ul>    <p>Software    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://registry.npmjs.org\" target=\"_blank\">registry.npmjs.org</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://admin.cloudapp-enterprise.appcelerator.com\" target=\"_blank\">admin.cloudapp-enterprise.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://appc-studio.appcelerator.com\" target=\"_blank\">appc-studio.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://api.appcelerator.com\" target=\"_blank\">api.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://download.appcelerator.com\" target=\"_blank\">download.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://go.appcelerator.com\" target=\"_blank\">go.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://preview.appcelerator.com\" target=\"_blank\">preview.appcelerator.com</a> (only for beta software downloads)    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://platform.appcelerator.com\" target=\"_blank\">platform.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://security.appcelerator.com\" target=\"_blank\">security.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://secure-identity.cloud.appcelerator.com\" target=\"_blank\">secure-identity.cloud.appcelerator.com</a>    </p>\n</li><li class=\" \">    <p>software.appcelerator.com     </p>\n</li></ul>    <p>The port numbers used for the URLs are 80 and 443.    </p>\n    <p>For debugger and profiler, Studio will find a free port for the specific IP address, and it it does not locate one, it will use 8999 as the default. For LiveView, it requires ports 8323 and 8324.    </p>\n    <p>For the local web server that Studio creates, the range of the port Studio looks for is controlled by the preference defined in Preferences &gt; Studio &gt; Web Servers &gt; Built-in. By default the range is 8020-8079.    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083019\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Using Studio From Behind a Proxy"});