Ext.data.JsonP['Errors_Logging_In_to_Studio']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Errors Logging In to Studio</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083289\" class=\"content\">\n                        <h1>Errors Logging In to Studio</h1>\n    <div class=\"section section-2 \" id=\"src-30083289_ErrorsLoggingIntoStudio-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-Troubleloggingin\">Trouble logging in</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-LaunchStudiofromthecommandline\">Launch Studio from the command line</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-Checkthelogfileforthrownexceptions\">Check the log file for thrown exceptions</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-OSX\">OS X</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-Windows\">Windows</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-Loginfailureduetoenvironmentvariables\">Login failure due to environment variables</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_safe-id-RXJyb3JzTG9nZ2luZ0ludG9TdHVkaW8tUmVwZWF0ZWRwcm9tcHRpbmcob3JGYWlsaW5ndG9wcm9tcHQpZm9yY3JlZGVudGlhbHM\">Repeated prompting (or Failing to prompt) for credentials</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-DeleteKeyChainentry\">Delete KeyChain entry</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_Logging_In_to_Studio-section-src-30083289_ErrorsLoggingIntoStudio-ProvidingaccesstoKeychainservice\">Providing access to Keychain service</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083289_ErrorsLoggingIntoStudio-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>If you are unable to log in to Studio, please try the following diagnostic steps and then submit this as part of your question on the Q &amp; A forum.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083289_ErrorsLoggingIntoStudio-Troubleloggingin\">\n        <h2 class=\"heading \"><span>Trouble logging in</span></h2>\n    <div class=\"section section-3 \" id=\"src-30083289_ErrorsLoggingIntoStudio-LaunchStudiofromthecommandline\">\n        <h3 class=\"heading \"><span>Launch Studio from the command line</span></h3>\n<ol class=\" \"><li class=\" \">    <p>Try the to login using the <tt class=\" \">appc login</tt> command or using the command below on the command line:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">curl -F </code><code class=\"string\">&quot;username=XXXX&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;password=YYYY&quot;</code><code class=\"plain\"> https:</code><code class=\"comments\">//dashboard.appcelerator.com/api/v1/auth/login</code></div>\n</div>\n    </div>\n    <p>(replacing XXXX and YYYY with your username and password. The username needs to be url-escaped, like user@company.com =&gt; user%40company.com)    </p>\n</li><li class=\" \">    <p>If the above command returns success, try to run Studio from the command line and then log in. Check the generated exception log on the command line.    </p>\n<ul class=\" \"><li class=\" \">    <p>From Mac: open a terminal and run <tt class=\" \">&lt;install_dir&gt;/AppceleratorStudio.app/Contents/MacOS/AppceleratorStudio</tt> (by default, the installation directory is <tt class=\" \">/Applications/Titanium Studio</tt>)    </p>\n</li><li class=\" \">    <p>From Windows: open a command prompt and run <tt class=\" \">&lt;install_dir&gt;\\AppceleratorStudio.exe -consoleLog</tt> (by default, the installation directory is <tt class=\" \">C:\\Users\\&lt;username&gt;\\AppData\\Local\\Titanium Studio</tt>)    </p>\n</li></ul></li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-30083289_ErrorsLoggingIntoStudio-Checkthelogfileforthrownexceptions\">\n        <h3 class=\"heading \"><span>Check the log file for thrown exceptions</span></h3>\n    <p>Check the <strong class=\" \">Studio log</strong> file to see if an exception was thrown when attempting to login. See <a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File\">Accessing the Log File</a> for details on how to access the log file.    </p>\n    <p>If the exception generated is<strong class=\" \"> javax.net.ssl.SSLHandshakeException</strong>, <strong class=\" \">javax.net.ssl.SSLPeerUnverifiedException</strong> or <strong class=\" \">&quot;PKIX path building failed&quot;</strong>, it means that the required certificate could not be added to Java&apos;s certificate store. You need to manually download and import the necessary certificates.    </p>\n    <div class=\"section section-4 \" id=\"src-30083289_ErrorsLoggingIntoStudio-OSX\">\n        <h4 class=\"heading \"><span>OS X</span></h4>\n    <p>For <strong class=\" \">Appcelerator Studio</strong>, on an OS X system, run:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">openssl s_client -showcerts -connect dashboard.appcelerator.com:</code><code class=\"value\">443</code><code class=\"plain\"> &lt;/dev/</code><code class=\"keyword\">null</code><code class=\"plain\"> </code><code class=\"value\">2</code><code class=\"plain\">&gt;/dev/</code><code class=\"keyword\">null</code><code class=\"plain\">|openssl x509 -outform PEM &gt;dashboard.pem</code></div>\n<div class=\"line\"><code class=\"plain\">sudo keytool -</code><code class=\"keyword\">import</code><code class=\"plain\"> -keystore /System/Library/Java/Support/CoreDeploy.bundle/Contents/Home/lib/security/cacerts -alias dashboard -file dashboard.pem</code></div>\n</div>\n    </div>\n    <p>For <strong class=\" \">Titanium Studio</strong>, on an OS X system, run:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">openssl s_client -showcerts -connect api.appcelerator.com:</code><code class=\"value\">443</code><code class=\"plain\"> &lt;/dev/</code><code class=\"keyword\">null</code><code class=\"plain\"> </code><code class=\"value\">2</code><code class=\"plain\">&gt;/dev/</code><code class=\"keyword\">null</code><code class=\"plain\">|openssl x509 -outform PEM &gt;mycertfile.pem</code></div>\n<div class=\"line\"><code class=\"plain\">sudo keytool -</code><code class=\"keyword\">import</code><code class=\"plain\"> -keystore /System/Library/Java/Support/CoreDeploy.bundle/Contents/Home/lib/security/cacerts -alias my_cert -file mycertfile.pem</code></div>\n</div>\n    </div>\n    <p>The first command downloads the server certificate, and the second command imports it to system Java&apos;s cacerts store.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-30083289_ErrorsLoggingIntoStudio-Windows\">\n        <h4 class=\"heading \"><span>Windows</span></h4>\n    <p>Use the following steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Download <a class=\"attachment-link \" href=\"./attachments_37683930_1_InstallCert.jar\">InstallCert.jar</a> to a local directory.    </p>\n</li><li class=\" \">    <p>Open <tt class=\" \">cmd.exe</tt>.    </p>\n</li><li class=\" \">    <p>Change directory into the directory and run <tt class=\" \">java -classpath InstallCert.jar InstallCert dashboard.appcelerator.com</tt>.    </p>\n</li><li class=\" \">    <p>It should output the same exception stacktrace as above and detect what certificate needs to be added; enter <tt class=\" \">1</tt>.    </p>\n</li></ol>    <p>Let it run until it finishes, and afterward, Java should be able to complete a handshake with the host, and you could verify by running the program again.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083289_ErrorsLoggingIntoStudio-Loginfailureduetoenvironmentvariables\">\n        <h3 class=\"heading \"><span>Login failure due to environment variables</span></h3>\n    <p>If you cannot log into Studio even though you entered valid username and password information and the same credentials are valid on appcelerator.com does work, it might be due one of the following possible causes:    </p>\n<ul class=\" \"><li class=\" \">    <p>The NODE_ENV environment variable is set to &quot;development&quot;. The appc-platform-sdk module essentially assumes you are an internal developer for Appcelerator and forces you to a pre-production or development environment if you have it configured.    </p>\n</li><li class=\" \">    <p>You don&apos;t have development info configured. Studio will send you to a pre-prod environment.    </p>\n</li><li class=\" \">    <p>Pre-prod only environments has certain accounts whitelisted for login and returns 4xx invalid login for everyone else.    </p>\n</li></ul>    <p>If one of these issues matches your problem, try these suggestions to fix it:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Use another (namespaced) environment variable</strong>. This is only useful for your engineers internally. Use a namespace like APPC_NODE_ENV. The NODE_ENV environment variable can be used by other developers and other projects for many uses (for better or worse).    </p>\n</li><li class=\" \">    <p>If you&apos;re in development mode, print out the top of appc commands that hit the API. If you&apos;re going to silently change how your entire module behaves for the end user, based on this common environment variable, you should at least read that you&apos;re in a development/pre-production mode and print this out to the user.    </p>\n</li></ul>    <p>    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083289_safe-id-RXJyb3JzTG9nZ2luZ0ludG9TdHVkaW8tUmVwZWF0ZWRwcm9tcHRpbmcob3JGYWlsaW5ndG9wcm9tcHQpZm9yY3JlZGVudGlhbHM\">\n        <h2 class=\"heading \"><span>Repeated prompting (or Failing to prompt) for credentials</span></h2>\n    <p>If Studio fails to save the user credentials, it prompts you to enter userId and password every time it is restarted. This could be resultant of either change in master password of OS secure keyring, or corrupted secured storage. To resolve this issue, please try the following diagnostic steps and verify whether they address the problem. The Studio log will have series of exceptions on similar lines:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">!MESSAGE (Build </code><code class=\"value\">3.1</code><code class=\"plain\">.</code><code class=\"value\">1.1364101697</code><code class=\"plain\">) [ERROR]  Failed to save the signed-in user</code></div>\n<div class=\"line\"><code class=\"plain\">!STACK </code><code class=\"value\">0</code></div>\n<div class=\"line\"><code class=\"plain\">org.eclipse.equinox.security.storage.StorageException: No password provided.</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.equinox.internal.security.storage.SecurePreferencesRoot.getModulePassword(SecurePreferencesRoot.java:</code><code class=\"value\">304</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.equinox.internal.security.storage.SecurePreferencesRoot.getPassword(SecurePreferencesRoot.java:</code><code class=\"value\">224</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.equinox.internal.security.storage.SecurePreferences.put(SecurePreferences.java:</code><code class=\"value\">224</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.equinox.internal.security.storage.SecurePreferencesWrapper.put(SecurePreferencesWrapper.java:</code><code class=\"value\">110</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at com.appcelerator.titanium.core.TitaniumUserManager.saveSignedInUser(TitaniumUserManager.java:</code><code class=\"value\">474</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at com.appcelerator.titanium.rcp.IDEWorkbenchWindowAdvisor.postWindowOpen(IDEWorkbenchWindowAdvisor.java:</code><code class=\"value\">376</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.ui.internal.WorkbenchWindow.fireWindowOpened(WorkbenchWindow.java:</code><code class=\"value\">1365</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.ui.internal.WorkbenchWindow.open(WorkbenchWindow.java:</code><code class=\"value\">826</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.ui.internal.Workbench$</code><code class=\"value\">70</code><code class=\"plain\">.runWithException(Workbench.java:</code><code class=\"value\">3724</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.ui.internal.StartupThreading$StartupRunnable.run(StartupThreading.java:</code><code class=\"value\">31</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.swt.widgets.RunnableLock.run(RunnableLock.java:</code><code class=\"value\">35</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.swt.widgets.Synchronizer.runAsyncMessages(Synchronizer.java:</code><code class=\"value\">135</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.swt.widgets.Display.runAsyncMessages(Display.java:</code><code class=\"value\">3563</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    at org.eclipse.swt.widgets.Display.readAndDispatch(Display.java:</code><code class=\"value\">3212</code><code class=\"plain\">)</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #2b4771;\">\nDeleting the secure storage from Studio    </span>\n    </p>\n<ul class=\" \"><li class=\"line number2 index1 alt1 \">    <p>Go to Preferences &gt; General &gt; Security &gt; Secure Storage.    </p>\n</li><li class=\"line number2 index1 alt1 \">    <p>In the Contents tab, select the &apos;[Default Secure Storage]&apos; item in the list and delete it.    </p>\n</li><li class=\"line number2 index1 alt1 \">    <p>Restart Studio.    </p>\n</li><li class=\"line number2 index1 alt1 \">    <p>Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-30083289_ErrorsLoggingIntoStudio-DeleteKeyChainentry\">\n        <h3 class=\"heading \"><span>Delete KeyChain entry</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Open Keychain Access utility in Mac (Applications &gt; Utilities &gt; Keychain Access).    </p>\n</li><li class=\" \">    <p>Search for the service &quot;equinox.secure.storage&quot; in Keychain Access.    </p>\n</li><li class=\" \">    <p>If possible, create a backup copy and then, delete the service.    </p>\n</li><li class=\" \">    <p>Restart Studio.    </p>\n</li><li class=\" \">    <p>Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-30083289_ErrorsLoggingIntoStudio-ProvidingaccesstoKeychainservice\">\n        <h3 class=\"heading \"><span>Providing access to Keychain service</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Open Keychain Access utility in Mac (Applications &gt; Utilities &gt; Keychain Access).    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #000000;\">\nSearch for the service &apos;equinox.secure.storage&apos; in Keychain Access.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #000000;\">\nOpen the properties of &apos;equinox.secure.storage&apos; service and then assign additional privileges to be accessed by the required/all applications (either make sure that Studio is added to access the keychain, or choose to &apos;Allow all applications to access this item&apos; in Access Control section).    </span>\n    <span style=\"color: #000000;\">\n<br>    </br></span>\n    </p>\n</li><li class=\" \">    <p>Restart Studio.    </p>\n</li><li class=\" \">    <p>Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.<br>    <span style=\"color: #000000;\">\n     </span>\n    </br></p>\n</li></ul>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083289\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Errors Logging In to Studio"});