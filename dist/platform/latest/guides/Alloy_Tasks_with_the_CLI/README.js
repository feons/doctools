Ext.data.JsonP['Alloy_Tasks_with_the_CLI']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Tasks with the CLI</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-37536785\" class=\"content\">\n                        <h1>Alloy Tasks with the CLI</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-CreatingaNewApplication\">Creating a New Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-CreatingaNewApplicationUsingaTestApplication\">Creating a New Application Using a Test Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-GeneratingComponents\">Generating Components</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-GeneratingaController\">Generating a Controller</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-GeneratingaView\">Generating a View</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-GeneratingaStyle\">Generating a Style</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-GeneratingaModel\">Generating a Model</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-GeneratingaMigration\">Generating a Migration</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-GeneratingaWidget\">Generating a Widget</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-Generatingalloy.jmk\">Generating alloy.jmk</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-ExtractingLocalizationStrings\">Extracting Localization Strings</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-CompilingaSpecificView-Controller\">Compiling a Specific View-Controller</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-BuildinganApplication\">Building an Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-InstallingSpecialProjectComponents\">Installing Special Project Components</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_with_the_CLI-section-src-37536785_AlloyTaskswiththeCLI-InstallingtheCompilerPlugin\">Installing the Compiler Plugin</a>    </p>\n</li></ul></li></ul>    <p>Alloy provides a command-line interface to create a new projects, generate skeleton components, and compile Alloy code to Titanium code. See <a class=\"document-link \" href=\"#!/guide/Alloy_Quick_Start-section-src-34636229_AlloyQuickStart-Command-LineInterfaceInstallation\">Command-Line Interface Installation</a> for directions on installing the latest released Alloy CLI.Run <tt class=\" \">appc alloy --help</tt> to see all available target options or see the <a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference\">Alloy Command-Line Interface Reference</a>.    </p>\n    <div class=\"section section-2 \" id=\"src-37536785_AlloyTaskswiththeCLI-CreatingaNewApplication\">\n        <h2 class=\"heading \"><span>Creating a New Application</span></h2>\n    <p>To create an Alloy application, run the following command from your work space directory:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t titanium</code></div>\n</div>\n    </div>\n    <p>You will be prompted to enter an application name and application ID.    </p>\n    <p>A new skeleton Alloy project will be generated in the directory named after the application name.    </p>\n    <p>A new Alloy project has a folder named <tt class=\" \">app</tt> that contains the skeleton Alloy application.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37536785_AlloyTaskswiththeCLI-CreatingaNewApplicationUsingaTestApplication\">\n        <h2 class=\"heading \"><span>Creating a New Application Using a Test Application</span></h2>\n    <p>Starting with Appcelerator CLI 5.0.0 or Alloy 1.7.6, you can generate a new Alloy project using a test application from the Alloy Github repo.  (The source code is copied from the global or local install of the Alloy npm package.)    </p>\n    <p>To create an Alloy application based on a test application, first create a skeleton Titanium project, then run the Alloy new command with the <tt class=\" \">--testapp &lt;path_to_test_app&gt;</tt> option.  Pass the option the relative path to the test application after the <tt class=\" \">alloy/test/apps</tt> path.  For example, if you want to use the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/tree/master/test/apps/ui/picker\" target=\"_blank\">picker test application</a>, run <tt class=\" \">alloy new --testapp ui/picker</tt> from a skeleton Titanium project.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t titanium --classic -i com.appc.picker -n AlloyPicker</code></div>\n<div class=\"line\"><code class=\"plain\">cd AlloyPicker</code></div>\n<div class=\"line\"><code class=\"plain\">appc alloy </code><code class=\"keyword\">new</code><code class=\"plain\"> --testapp ui/picker</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37536785_AlloyTaskswiththeCLI-GeneratingComponents\">\n        <h2 class=\"heading \"><span>Generating Components</span></h2>\n    <p>The CLI can generate skeleton controllers (with views and styles), models, database migrations and widgets. The following commands can be ran from the root folder of the project or the location of the project may be specified with the <tt class=\" \">-o</tt> command-line option.  You can also create platform-specific views or controllers using the <tt class=\" \">--platform</tt> option.  You can also create views, styles and controllers for a widget by specifying the <tt class=\" \">--widgetname</tt> option with the name of the widget.    </p>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-GeneratingaController\">\n        <h3 class=\"heading \"><span>Generating a Controller</span></h3>\n    <p>To generate a controller with a style and view, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy generate controller &lt;name&gt; [--widgetname &lt;widget_name&gt;] [-o path_to_project/app] [--platform &lt;platform&gt;]</code></div>\n</div>\n    </div>\n    <p>This creates <tt class=\" \">app/controllers/&lt;name&gt;.js</tt>, <tt class=\" \">app/styles/&lt;name&gt;.tss</tt>, and <tt class=\" \">app/views/&lt;name&gt;.xml</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-GeneratingaView\">\n        <h3 class=\"heading \"><span>Generating a View</span></h3>\n    <p>To generate a view and style <strong class=\" \">without</strong> a controller, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy generate view &lt;name&gt;  [--widgetname &lt;widget_name&gt;] [-o path_to_project/app] [--platform &lt;platform&gt;]</code></div>\n</div>\n    </div>\n    <p>This creates <tt class=\" \">app/styles/&lt;name&gt;.tss</tt> and <tt class=\" \">app/views/&lt;name&gt;.xml</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-GeneratingaStyle\">\n        <h3 class=\"heading \"><span>Generating a Style</span></h3>\n    <p>To generate a style for a view-controller, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy generate style &lt;name&gt; [--widgetname &lt;widget_name&gt;]</code></div>\n</div>\n    </div>\n    <p>Alloy uses the id and attribute names in the markup file to populate the skeleton style file.  This creates <tt class=\" \">app/styles/&lt;name&gt;.tss</tt>.    </p>\n    <p>To generate style files for all view-controllers, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy generate style --all</code></div>\n</div>\n    </div>\n    <p>If you add new id or class attributes to the markup file, running either of these commands updates the style file with the new attributes.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-GeneratingaModel\">\n        <h3 class=\"heading \"><span>Generating a Model</span></h3>\n    <p>To generate a model, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy generate model &lt;name&gt; &lt;adapter&gt; [&lt;col_name_1&gt;:&lt;col_type_1&gt; &lt;col_name_2&gt;:&lt;col_type_2&gt; ...] [-o path_to_project/app]</code></div>\n</div>\n    </div>\n    <p>The fourth parameter selects the adapter type, either <tt class=\" \">sql</tt> for SQLite engine (Android and iOS platforms) or <tt class=\" \">properties</tt> for storing models locally in Titanium SDK context.    </p>\n    <p>The fifth parameter defines the table schema. This is required for &apos;sql&apos; and &apos;properties&apos; adapter types.    </p>\n    <p>This creates <tt class=\" \">app/models/&lt;name&gt;.js</tt>, and <tt class=\" \">app/migrations/DATETIME_&lt;name&gt;.js</tt> if the adapter type is &apos;sql&apos;.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-GeneratingaMigration\">\n        <h3 class=\"heading \"><span>Generating a Migration</span></h3>\n    <p>To generate a standalone migration for a specific model, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy generate migration &lt;name&gt; [-o path_to_project/app]</code></div>\n</div>\n    </div>\n    <p>This creates a timestamp-ordered migration file for the model specified, that is, <tt class=\" \">app/migrations/DATETIME_&lt;name&gt;.js</tt>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-GeneratingaWidget\">\n        <h3 class=\"heading \"><span>Generating a Widget</span></h3>\n    <p>To generate a basic widget, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy generate widget &lt;name&gt; [-o path_to_project/app]</code></div>\n</div>\n    </div>\n    <p>This creates a default widget in the project&apos;s <tt class=\" \">app/widgets</tt> path, generating a configuration file, controller, style and view: <tt class=\" \">app/widgets/&lt;name&gt;/widget.json</tt>, <tt class=\" \">app/widgets/&lt;name&gt;/controllers/widget.js</tt>, <tt class=\" \">app/widgets/&lt;name&gt;/styles/widget.tss</tt>, and <tt class=\" \">app/widgets/&lt;name&gt;/views/widget.xml</tt>. The widget is automatically added as a dependency in the Alloy project&apos;s configuration file <tt class=\" \">config.json</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-Generatingalloy.jmk\">\n        <h3 class=\"heading \"><span>Generating alloy.jmk</span></h3>\n    <p>To generate the build customization file <tt class=\" \">alloy.jmk</tt>, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc lloy generate jmk [-o path_to_project/app]</code></div>\n</div>\n    </div>\n    <p>This creates the JavaScript Makefile <tt class=\" \">app/alloy.jmk</tt> with a few task hooks in place. Refer to <a class=\"document-link \" href=\"#!/guide/Alloy_Reference_Guides-section-src-34636399_AlloyReferenceGuides-ProjectBuildCustomizationFile\">Project Build Customization File</a> for more details.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37536785_AlloyTaskswiththeCLI-ExtractingLocalizationStrings\">\n        <h2 class=\"heading \"><span>Extracting Localization Strings</span></h2>\n    <p>The <tt class=\" \">alloy extract-i18n</tt> command inspects your JS and TSS (since Alloy 1.2.0), and XML files (since Alloy 1.6.0) for instances of Titanium&apos;s localization functions and adds those strings to an i18n strings.xml file.  The command has the following syntax:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy extract-i18n [language] [--apply]</code></div>\n</div>\n    </div>\n    <p><strong class=\" \">Parameters</strong>:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">language</tt> &#x2013; Optional. The two-letter language code (<tt class=\" \">en</tt> or <tt class=\" \">es</tt>, for example) of the target language. If not specified, the default is <tt class=\" \">en</tt> (English).    </p>\n</li><li class=\" \">    <p><tt class=\" \">--apply</tt> &#x2013; Optional. If present, the command writes new localization entries to the target language&apos;s strings.xml file. Existing i18n entries are left untouched. If the XML file doesn&apos;t exist, it is created for you. If this parameter is absent, a preview of the changes are displayed in the terminal window.    </p>\n</li></ul>    <p>The following localization functions are supported:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">Titanium.Locale.getString()</tt>    </p>\n</li><li class=\" \">    <p><tt class=\" \">Ti.Locale.getString()</tt>    </p>\n</li><li class=\" \">    <p><tt class=\" \">L()</tt>    </p>\n</li></ul>    <p>    <span style=\"color: #000000;\">\nThe command extracts the first parameter (the i18n key) from each localization function and, if it&apos;s a string, adds it to the target language&apos;s strings.xml file.     </span>\nFor example, suppose a JavaScript file in your application contained the following code:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var name = Ti.Locale.getString(</code><code class=\"string\">&apos;name&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var color = Titanium.Locale.getString(</code><code class=\"string\">&apos;color&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var currency = L(</code><code class=\"string\">&apos;currency&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>To create an English language localization file, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy extract-i18n --apply</code></div>\n</div>\n    </div>\n    <p>This generates <tt class=\" \">app/i18n/en/strings.xml</tt> or (before Alloy 1.8.0)  <tt class=\" \">i18n/en/strings.xml</tt> in your project directory, if it doesn&apos;t exist. The contents of the generated XML file would appear as follows:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\"> encoding=</code><code class=\"string\">&quot;UTF-8&quot;</code><code class=\"plain\">?&gt;&lt;resources&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">&gt;name&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;color&quot;</code><code class=\"plain\">&gt;color&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;currency&quot;</code><code class=\"plain\">&gt;currency&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/resources&gt;</code></div>\n</div>\n    </div>\n    <p>If you later add more localization functions to your code and run the same command again, the new entries would be added to strings.xml. Existing entries are left untouched.    </p>\n    <p>To generate a strings.xml for a specific language, pass the two-letter language code as a parameter. For example, the following command creates a strings.xml file for Spanish language locales (<tt class=\" \">app/i18n/es/strings.xml</tt> or - before Alloy 1.8.0 - <tt class=\" \">i18n/es/strings.xml</tt>):    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&#xA0;appc alloy extract-i18n es --apply</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #000000;\">\nWhen called with <tt class=\" \">--apply</tt>, the command only adds new i18n entries and leaves existing entries untouched. For this reason,     </span>\n<tt class=\" \">alloy extract-i18n --apply</tt>     <span style=\"color: #000000;\">\nis a safe operation, but you can also     </span>\n    <span style=\"color: #000000;\">\npreview changes in the terminal by calling the command without <tt class=\" \">--apply</tt>    </span>\n, as shown below.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy extract-i18n</code></div>\n</div>\n    </div>\n    <p>The output of this command shows the content of the current en/strings.xml file (before) and its content once you apply the changes (after) with <tt class=\" \">--apply</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">[INFO] ######## BEFORE ########</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\"> encoding=</code><code class=\"string\">&quot;UTF-8&quot;</code><code class=\"plain\">?&gt;&lt;resources&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">&gt;name&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;color&quot;</code><code class=\"plain\">&gt;color&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;currency&quot;</code><code class=\"plain\">&gt;currency&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/resources&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO] ######## AFTER  ########</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\"> encoding=</code><code class=\"string\">&quot;UTF-8&quot;</code><code class=\"plain\">?&gt;&lt;resources&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">&gt;name&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;color&quot;</code><code class=\"plain\">&gt;color&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;currency&quot;</code><code class=\"plain\">&gt;currency&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;string name=</code><code class=\"string\">&quot;test&quot;</code><code class=\"plain\">&gt;test&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/resources&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37536785_AlloyTaskswiththeCLI-CompilingaSpecificView-Controller\">\n        <h2 class=\"heading \"><span>Compiling a Specific View-Controller</span></h2>\n    <p>Starting with Appcelerator CLI 5.0.0 or Alloy 1.7.6, you can select which Alloy view-controller to compile to Titanium code.  Use the command to update the Titanium base code for incremental changes to the Alloy project.  Pass the <tt class=\" \">file=&lt;filename&gt;</tt> to the <tt class=\" \">--config</tt> option when running the Alloy compile command.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy compile --config platform=&lt;platform&gt;,file=&lt;file&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">## Example</code></div>\n<div class=\"line\"><code class=\"plain\">appc alloy compile --config platform=android,file=app/controller/index.js</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37536785_AlloyTaskswiththeCLI-BuildinganApplication\">\n        <h2 class=\"heading \"><span>Building an Application</span></h2>\n    <p>To build and run an application, execute the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc run --platform &lt;platform&gt; [--project-dir &lt;value&gt;] [--sdk &lt;value&gt;] [ &lt;platform_build_options&gt; ]</code></div>\n</div>\n    </div>\n    <p>Running this from the root directory of the project compiles the files to the correct location automatically.    </p>\n    <p>See the <a class=\"document-link \" href=\"#!/guide/Titanium_Command-Line_Interface_Reference-section-src-35619828_TitaniumCommand-LineInterfaceReference-Build\">Titanium Command-Line Interface Reference guide</a> for a complete explanation of the available options.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37536785_AlloyTaskswiththeCLI-InstallingSpecialProjectComponents\">\n        <h2 class=\"heading \"><span>Installing Special Project Components</span></h2>\n    <div class=\"section section-3 \" id=\"src-37536785_AlloyTaskswiththeCLI-InstallingtheCompilerPlugin\">\n        <h3 class=\"heading \"><span>Installing the Compiler Plugin</span></h3>\n    <p>To install the compiler plugin that hooks the Alloy project to Studio, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc alloy install plugin [path_to_project]</code></div>\n</div>\n    </div>\n    <p>Use this command to update the compiler plugin if your project was created using an older version of Alloy.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=37536785\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy Tasks with the CLI"});