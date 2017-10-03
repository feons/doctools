Ext.data.JsonP['Using_a_Module']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Using a Module</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30082372\" class=\"content\">\n                        <h1>Using a Module</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Installingmodules\">Installing modules</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Moduleinstalllocations\">Module install locations</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Configuringyourapptouseamodule\">Configuring your app to use a module</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Updatingthetiapp.xmlfile\">Updating the tiapp.xml file</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Selectingamoduleversion\">Selecting a module version</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_safe-id-VXNpbmdhTW9kdWxlLVVzaW5ncmVxdWlyZSgpdG9sb2FkdGhlbW9kdWxlaW50aGVhcHAnc2NvZGU\">Using require() to load the module in the app&apos;s code</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Troubleshooting\">Troubleshooting</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Requestedmodulecouldnotbefound\">Requested module could not be found</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-30082372_UsingaModule-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>You can install a module so that it is available to a single project, or all projects you create. Then you will see how to use a module within your project.    </p>\n    <div class=\"section section-3 \" id=\"src-30082372_UsingaModule-Installingmodules\">\n        <h3 class=\"heading \"><span>Installing modules</span></h3>\n    <p>You can install a module for a single project, or that all Studio projects can use. Once you&apos;ve installed the module, you then configure it for use in your project (see <a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Configuringyourapptouseamodule\">Configuring your app to use a module</a>).    </p>\n    <p><strong class=\" \">To install a module</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>In Studio, select <strong class=\" \">Help &gt; Install Mobile Module</strong>.    </p>\n</li><li class=\" \">    <p>In the Module dialog, enter the URL of the module&apos;s ZIP file, or click Browse and locate the ZIP file.    </p>\n    <img src=\"images/download/attachments/30082372/install_dialog.png\" alt=\"images/download/attachments/30082372/install_dialog.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"525\" height=\"383\">\n    </img></li><li class=\" \">    <p>For <strong class=\" \">Output Location</strong> select one of the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>To install the module so it&apos;s available to all projects, select <strong class=\" \">Titanium SDK</strong>. See <a class=\"document-link unresolved\" href=\"#!/guide/Using_a_Module-section-src-30082372\">Module install locations</a>.    </p>\n</li><li class=\" \">    <p>To install the module so its available to a single project, select <strong class=\" \">Mobile App Project</strong>, and then choose the desired project from the pop-up menu.    </p>\n</li><li class=\" \">    <p>To install the module to a folder location, select <strong class=\" \">Location</strong> and then browse to the desired output folder.    </p>\n</li></ul></li><li class=\" \">    <p>Click <strong class=\" \">OK</strong>.    </p>\n</li></ol>    <div class=\"section section-4 \" id=\"src-30082372_UsingaModule-Moduleinstalllocations\">\n        <h4 class=\"heading \"><span>Module install locations</span></h4>\n    <p>When you install a module that&apos;s available to all projects, the module is installed to one of the following locations, depending on your platform.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Operating System    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Local Path    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>OS X 10.6 (Snow Leopard) and earlier    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/Library/Application Support/Titanium</tt>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>OS X 10.7 (Lion) and later    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/Library/Application Support/Titanium</tt>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Windows 7    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%ProgramData%\\Titanium\\mobilesdk\\win32</tt>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Windows XP    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\Documents and Settings\\All Users\\Application Data\\Titanium</tt>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>By default on Mac OS X 10.7 and later, the <tt class=\" \">~/Library</tt> folder is hidden by default. To permanently show it, run the following command from a terminal:    </p>\n    <p><tt class=\" \"> chflags nohidden ~/Library/</tt>    </p>\n    <p>    <span style=\"color: #303030;\">\n     </span>\nTo open it once, run the following command from a terminal:    </p>\n    <p><tt class=\" \"> open ~/Library</tt>    </p>\n    </div>\n        </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30082372_UsingaModule-Configuringyourapptouseamodule\">\n        <h3 class=\"heading \"><span>Configuring your app to use a module</span></h3>\n    <p>Once you have installed the module, you must configure your application to use it. This involves two steps:    </p>\n<ul class=\" \"><li class=\" \">    <p>Add the module as a dependency in your application&apos;s <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p>Call the <tt class=\" \">require()</tt> method in your JavaScript code to load the module    </p>\n</li></ul>    <div class=\"section section-4 \" id=\"src-30082372_UsingaModule-Updatingthetiapp.xmlfile\">\n        <h4 class=\"heading \"><span>Updating the tiapp.xml file</span></h4>\n    <p>You can update your application&apos;s tiapp.xml file visually, or manually in a text editor.    </p>\n    <p><strong class=\" \">To add a module to your project</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>In Studio, open your project and double-click its tiapp.xml file.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Overview</strong> tab in the bottom-left of the Editor window.    </p>\n</li><li class=\" \">    <p>In the Modules section, click the green add (<strong class=\" \"> +</strong> ) button.    </p>\n    <img src=\"images/download/attachments/30082372/addbutton.png\" alt=\"images/download/attachments/30082372/addbutton.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"418\" height=\"118\">\n    </img></li><li class=\" \">    <p>Select the module you want to add and click <strong class=\" \">OK</strong>.    </p>\n    <img src=\"images/download/attachments/30082372/tiapp.png\" alt=\"images/download/attachments/30082372/tiapp.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        <p>Note the version numbers listed at the bottom of the dialog. See <a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Selectingamoduleversion\">Selecting a module version</a>.    </p>\n</img></li><li class=\" \">    <p>Save your changes to tiapp.xml.    </p>\n</li></ol>    <p>To manually add a module to your project&apos;s tiapp.xml file, modify the <tt class=\" \">&lt;modules/&gt;</tt> tag in the <tt class=\" \">&lt;ti:app&gt;</tt> node as follows:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;!-- $MODULE_VERSION should be the same as </code><code class=\"string\">&quot;version&quot;</code><code class=\"plain\"> in the module manifest and directory number --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;module version=</code><code class=\"string\">&quot;$MODULE_VERSION&quot;</code><code class=\"plain\">&gt;$MODULE_ID&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;!-- For example, </code><code class=\"keyword\">if</code><code class=\"plain\"> we were adding the calc module: --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;module version=</code><code class=\"string\">&quot;0.1&quot;</code><code class=\"plain\">&gt;org.appcelerator.calc&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/modules&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-30082372_UsingaModule-Selectingamoduleversion\">\n        <h4 class=\"heading \"><span>Selecting a module version</span></h4>\n    <p>A installed module may include one or more versions that your application can use, as well as versions for production, deployment and testing. By default, Studio selects the latest version of a module when you install it.    </p>\n    <p><strong class=\" \">To select a specific module version</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>In the Modules section of tiapp.xml, double-click on the module to opens the <strong class=\" \">Module Properties</strong> dialog.    </p>\n</li><li class=\" \">    <p>For each platform, select the version of the module you want to use.    </p>\n</li><li class=\" \">    <p>Click the arrow next to the platform to expand it to select to use the module for specific build types.    </p>\n    <img src=\"images/download/attachments/30082372/version.png\" alt=\"images/download/attachments/30082372/version.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"399\" height=\"275\">\n    </img></li><li class=\" \">    <p>Click <strong class=\" \">OK</strong>.    </p>\n</li><li class=\" \">    <p>Save tiapp.xml.    </p>\n</li></ol>    </div>\n    <div class=\"section section-4 \" id=\"src-30082372_safe-id-VXNpbmdhTW9kdWxlLVVzaW5ncmVxdWlyZSgpdG9sb2FkdGhlbW9kdWxlaW50aGVhcHAnc2NvZGU\">\n        <h4 class=\"heading \"><span>Using  require()  to load the module in the app&apos;s code</span></h4>\n    <p>Within your app&apos;s JavaScript files, you&apos;ll instantiate the module via the <tt class=\" \">require()</tt> function:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var Module = require(</code><code class=\"string\">&apos;$MODULE_ID&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// For example, to load the calc module:</code></div>\n<div class=\"line\"><code class=\"plain\">var Calc = require(</code><code class=\"string\">&apos;org.appcelerator.calc&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>Finally, you&apos;ll use the module&apos;s object, properties, and methods to enable its features and functionality. Each module distributed in the Marketplace should include documentation and a sample app that demonstrates the basic use of the module. That information would be a great place to start with learning how to use a specific module.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30082372_UsingaModule-ExampleModuleUse\">\n        <h2 class=\"heading \"><span>Example Module Use</span></h2>\n    <p>The following section illustrates how you would use one of the modules included in the Titanium Plus set.    </p>\n    <p>For this example we will be downloading the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_modules/tree/master/admob/mobile\" target=\"_blank\">AdMob</a> module for iOS available on GitHub. While the example covers an iOS use case, the same general steps apply to an Android module. The ZIP file containing the module distribution can be downloaded <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_modules/blob/master/admob/mobile/ios/ti.admob-iphone-1.5.0.zip?raw=true\" target=\"_blank\">here</a>.    </p>\n<ol class=\" \"><li class=\" \">    <p>Install the module as described <a class=\"document-link \" href=\"#!/guide/Using_a_Module-section-src-30082372_UsingaModule-Installingmodules\">above</a>.    </p>\n</li><li class=\" \">    <p>Require the module in your project with the following code:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var admob = require(</code><code class=\"string\">&apos;ti.admob&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>You can now call methods on the admob singleton object:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var adview = admob.createView({</code></div>\n<div class=\"line\"><code class=\"plain\">    top: </code><code class=\"value\">0</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    testing: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    adBackgroundColor: </code><code class=\"string\">&apos;black&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    primaryTextColor: </code><code class=\"string\">&apos;blue&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    secondaryTextColor: </code><code class=\"string\">&apos;green&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    publisherId: </code><code class=\"string\">&apos;&lt;&lt; your ID&gt;&gt;&apos;</code><code class=\"plain\"> </code><code class=\"comments\">// Replace this string with your own API key!</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(adview);</code></div>\n</div>\n    </div>\n</li></ol>    <div class=\"section section-3 \" id=\"src-30082372_UsingaModule-Troubleshooting\">\n        <h3 class=\"heading \"><span>Troubleshooting</span></h3>\n    <div class=\"section section-4 \" id=\"src-30082372_UsingaModule-Requestedmodulecouldnotbefound\">\n        <h4 class=\"heading \"><span>Requested module could not be found</span></h4>\n    <p>If you receive an error saying: &quot;Requested module not found.&quot; Check the name and version number of the module in the <tt class=\" \">tiapp.xml</tt> file.  Make sure that the version of the module is installed either locally or globally.  You can also remove the <tt class=\" \">version</tt> attribute from the <tt class=\" \">module</tt> element to use the most recent version of the module.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30082372_UsingaModule-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this section, you learned that you can install a module for use by a single project or by all projects that you develop on a computer. Once installed, you have to modify your app&apos;s tiapp.xml file to support the module. Then, you must require the module into your app&apos;s code before you can implement its functionality.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30082372\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Using a Module"});