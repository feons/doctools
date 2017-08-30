Ext.data.JsonP['Windows_Module_Quick_Start']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Windows Module Quick Start</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-46248212\" class=\"content\">\n                        <h1>Windows Module Quick Start</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-WindowsModulePrerequisites\">Windows Module Prerequisites</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-CreateaNewModule\">Create a New Module</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-BuildandPackagetheModule\">Build and Package the Module</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-TesttheModule\">Test the Module</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-CreateaTestApplication\">Create a Test Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-AddtheModuleasaDependencytotheProject\">Add the Module as a Dependency to the Project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-LoadtheModuleandMakeModuleAPICalls\">Load the Module and Make Module API Calls</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-RuntheApplication\">Run the Application</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-ModifytheModule\">Modify the Module</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-AddaProperty\">Add a Property</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-AddaFunction\">Add a Function</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-Firingcallbacks\">Firing callbacks</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start-section-src-46248212_WindowsModuleQuickStart-NextSteps\">Next Steps</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-46248212_WindowsModuleQuickStart-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>This guide walks through the steps to create, build and test an Windows module using Studio.  The equivalent CLI instructions are given in the information boxes near the top of each section.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46248212_WindowsModuleQuickStart-WindowsModulePrerequisites\">\n        <h2 class=\"heading \"><span>Windows Module Prerequisites</span></h2>\n    <p>To develop an Windows-based Module, you&apos;ll need all of the software required to build a Titanium application for Windows:    </p>\n<ul class=\" \"><li class=\" \">    <p>Titanium SDK    </p>\n</li><li class=\" \">    <p>Supported versions of Visual Studio and the Windows Phone SDK, as described in <a class=\"document-link \" href=\"#!/guide/Installing_the_Windows_Phone_SDK\">Installing the Windows Phone SDK</a>    </p>\n</li><li class=\" \">    <p>Studio or the Appcelerator Command-Line Interface (CLI) for creating modules, and building and running test applications    </p>\n</li></ul>    <p>Like Windows application development, Windows module development is only supported on Windows.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46248212_WindowsModuleQuickStart-CreateaNewModule\">\n        <h2 class=\"heading \"><span>Create a New Module</span></h2>\n    <p>First, create a new module project.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">CLI Instructions</div>\n            <p>From a terminal, change the current working directory to your workspace and run:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">cd /PATH/TO/WORKSPACE</code></div>\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -n test --id com.example.test</code></div>\n<div class=\"line\"><code class=\"plain\">### when prompted </code><code class=\"keyword\">for</code><code class=\"plain\"> the project type, select </code><code class=\"string\">&quot;Titanium Module&quot;</code><code class=\"plain\"> </code></div>\n</div>\n    </div>\n    </div>\n        <p>In Studio:    </p>\n<ol class=\" \"><li class=\" \">    <p>From the menu, select <strong class=\" \">File</strong> &gt; <strong class=\" \">New</strong> &gt; <strong class=\" \">Mobile Module Project</strong> to open the <strong class=\" \">New Mobile Module Project</strong> dialog.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Project name</strong> field, enter <strong class=\" \">test</strong>.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Module Id</strong> field, enter <strong class=\" \">com.example.test</strong>.    </p>\n</li><li class=\" \">    <p>In <strong class=\" \">Deployment Targets</strong>, select <strong class=\" \">Windows</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Next</strong>, then click <strong class=\" \">Finish</strong>.    </p>\n</li></ol>    <p>Studio sets up a new folder called <tt class=\" \">test</tt> that contains your module project.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46248212_WindowsModuleQuickStart-BuildandPackagetheModule\">\n        <h2 class=\"heading \"><span>Build and Package the Module</span></h2>\n    <p>Next, build the module and package it.  This process produces a ZIP file containing a binary library with unprocessed module assets, example code and documentation.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">CLI Instructions</div>\n            <p>From a terminal, go to the module&apos;s windows directory and run the <tt class=\" \">appc ti build -p windows --build-only</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">cd test/windows</code></div>\n<div class=\"line\"><code class=\"plain\">appc ti build -p windows --build-only</code></div>\n</div>\n    </div>\n    <p>After the build completes, unzip the built module in the Titanium SDK home path: (<tt class=\" \">C:\\ProgramData\\Titanium</tt>).    </p>\n    </div>\n        <p>In Studio:    </p>\n<ol class=\" \"><li class=\" \">    <p>Select your module folder in the <strong class=\" \">Project Explorer</strong> view.    </p>\n</li><li class=\" \">    <p>Verify <strong class=\" \">Package</strong> and <strong class=\" \">Windows Module</strong> are displayed in <strong class=\" \">Launch Mode</strong> and <strong class=\" \">Launch Target</strong>, respectively.    </p>\n</li><li class=\" \">    <p>Click the Package icon to open the <strong class=\" \">Package Windows Module</strong> dialog.    </p>\n</li><li class=\" \">    <p>In <strong class=\" \">Output Location</strong>, choose the <strong class=\" \">Titanium SDK</strong> to install the module in the Titanium SDK home path to be accessed by any Titanium application.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Finish</strong>.    </p>\n</li></ol>    <p>Studio builds and installs the module to the Titanium SDK home path.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46248212_WindowsModuleQuickStart-TesttheModule\">\n        <h2 class=\"heading \"><span>Test the Module</span></h2>\n    <p>To test the module, create a test application and add the module as a dependency of the project.  Then, load the module and make module API calls to the module reference.    </p>\n    <div class=\"section section-3 \" id=\"src-46248212_WindowsModuleQuickStart-CreateaTestApplication\">\n        <h3 class=\"heading \"><span>Create a Test Application</span></h3>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">CLI Instructions</div>\n            <p>From a new terminal window, change the current working directory to your workspace and run the following commands:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">cd /PATH/TO/WORKSPACE</code></div>\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t titanium -p windows -n Hello -u http:</code><code class=\"comments\">// --id com.example.hello</code></div>\n<div class=\"line\"><code class=\"plain\">cd Hello/</code></div>\n</div>\n    </div>\n    </div>\n        <p>In Studio:    </p>\n<ol class=\" \"><li class=\" \">    <p>From the menu, select <strong class=\" \">File</strong> &gt; <strong class=\" \">New</strong> &gt; <strong class=\" \">Mobile App Project</strong> to open the <strong class=\" \">New Mobile App Project</strong> dialog.    </p>\n</li><li class=\" \">    <p>On the <strong class=\" \">Project Template</strong> page, select <strong class=\" \">Default Alloy Project</strong> as the template type, then click <strong class=\" \">Next</strong>.    </p>\n</li><li class=\" \">    <p>On the <strong class=\" \">Project Location</strong> page, enter the following information:    </p>\n<ul class=\" \"><li class=\" \">    <p>In the <strong class=\" \">Project Name</strong> field, enter <strong class=\" \">Hello</strong>.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">App ID</strong> field, enter <strong class=\" \">com.example.hello</strong>.    </p>\n</li><li class=\" \">    <p>In <strong class=\" \">Deployment Targets</strong>, select <strong class=\" \">Windows</strong>.    </p>\n</li></ul></li><li class=\" \">    <p>Click <strong class=\" \">Finish</strong> to create the project.    </p>\n</li></ol>    <p>Studio sets up a new folder called <tt class=\" \">Hello</tt> that contains the test application you will be using to test the module.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-46248212_WindowsModuleQuickStart-AddtheModuleasaDependencytotheProject\">\n        <h3 class=\"heading \"><span>Add the Module as a Dependency to the Project</span></h3>\n    <p>To load the module in the application, you need to add it as a dependency to the project.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">CLI Instructions</div>\n            <p>Open the <tt class=\" \">tiapp.xml</tt> and update the <tt class=\" \">&lt;modules/&gt;</tt> element to include the module as a dependency to the project:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;ti:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module platform=</code><code class=\"string\">&quot;windows&quot;</code><code class=\"plain\">&gt;com.example.test&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n    </div>\n    </div>\n        <p>In Studio:    </p>\n<ol class=\" \"><li class=\" \">    <p>Open the <tt class=\" \">tiapp.xml</tt> file located in the root directory of the project.    </p>\n</li><li class=\" \">    <p>Under the <strong class=\" \">Modules</strong> section, click the <strong class=\" \">Add</strong> button.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">com.example.test</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK</strong>.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-46248212_WindowsModuleQuickStart-LoadtheModuleandMakeModuleAPICalls\">\n        <h3 class=\"heading \"><span>Load the Module and Make Module API Calls</span></h3>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>The module can be loaded by passing the module ID to the <tt class=\" \">require()</tt> method, which returns a reference to the module that API calls can be made on.    </p>\n    </div>\n        <p>Open the <tt class=\" \">app/alloy.js</tt> file and replace the code with the following, which invokes API calls to the module:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/alloy.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/alloy.js\">\n<div class=\"line\"><code class=\"plain\">var test = require(</code><code class=\"string\">&apos;com.example.test&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&quot;module is =&gt; &quot;</code><code class=\"plain\"> + test);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&quot;module example() method returns =&gt; &quot;</code><code class=\"plain\"> + test.example());</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&quot;module exampleProp is =&gt; &quot;</code><code class=\"plain\"> + test.exampleProp);</code></div>\n<div class=\"line\"><code class=\"plain\">test.exampleProp = </code><code class=\"string\">&quot;This is a test value&quot;</code><code class=\"plain\">;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-46248212_WindowsModuleQuickStart-RuntheApplication\">\n        <h3 class=\"heading \"><span>Run the Application</span></h3>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">CLI Instructions</div>\n            <p>From a terminal that has the test app as its current working directory, run:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc run -p windows</code></div>\n</div>\n    </div>\n    </div>\n        <p>In the Studio toolbar, select <strong class=\" \">Run</strong> in <strong class=\" \">Launch Modes</strong> and select an Windows Phone simulator in <strong class=\" \">Launch Targets</strong>.    </p>\n    <p>Studio builds and launches the application on the select Windows Phone simulator.  Monitor the <strong class=\" \">Console</strong> view for log output.    </p>\n    <p>The console lines seen below show us that the module is working as expected.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">Console</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"Console\">\n<div class=\"line\"><code class=\"plain\">[INFO]  module is =&gt; [object ComExampleTestModule]</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]  module example() method returns =&gt; hello world</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]  module exampleProp is =&gt; hello world</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46248212_WindowsModuleQuickStart-ModifytheModule\">\n        <h2 class=\"heading \"><span>Modify the Module</span></h2>\n    <p>Let&apos;s modify the module code to create a view object and access a string property.    </p>\n    <p>First, look at some of the default files created by the Titanium SDK.  Expand the <tt class=\" \">windows</tt> folder.  Inside this folder are two files:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">src/ComExampleTest.cpp</tt>: This is a boiler plate Module class. Every module requires a module class, which acts as the base API for the module.    </p>\n</li><li class=\" \">    <p>i<tt class=\" \">nclude/ComExampleTest.hpp</tt>: This is a header file for the boiler plate class.    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-46248212_WindowsModuleQuickStart-AddaProperty\">\n        <h3 class=\"heading \"><span>Add a Property</span></h3>\n    <p>A Module is a key/value store like an Object. Without any modification, you can set properties on a Module and then read them back at will as if they were properties. You can also override the getters and setters to add some custom logic. Modify the default module class files to store and retrieve a string value. First, modify the <tt class=\" \">ComExampleTestModule.hpp</tt> file to declare a variable to hold the string:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ComExampleTest.hpp</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ComExampleTest.hpp\">\n<div class=\"line\"><code class=\"keyword\">class</code><code class=\"plain\"> COMEXAMPLETEST_EXPORT Test : </code><code class=\"keyword\">public</code><code class=\"plain\"> Titanium::Module, </code><code class=\"keyword\">public</code><code class=\"plain\"> JSExport&lt;Test&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">public</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        ...</code></div>\n<div class=\"line\"><code class=\"plain\">        TITANIUM_PROPERTY_DEF(exampleProp);</code></div>\n<div class=\"line\"><code class=\"plain\">        ...</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">private</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        std::string exampleProp__;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <p>Next, modify the example setter and getter to actually set and get the variable you just declared. These methods are already declared in the <tt class=\" \">ComExampleTestModule.cpp</tt> file but not implemented. TitaniumKit provides useful macro to declare setter and getter, which is <tt class=\" \">TITANIUM_PROPERTY_GETTER</tt> and <tt class=\" \">TITANIUM_PROPERTY_GETTER</tt>. TitaniumKit requires property value being treated as an <tt class=\" \">JSValue</tt> datatype. Once you implement the method, register it using <tt class=\" \">TITANIUM_ADD_FUNCTION</tt> in <tt class=\" \">JSExportInitialize</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ComExampleTest.cpp</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ComExampleTest.cpp\">\n<div class=\"line\"><code class=\"plain\">TITANIUM_PROPERTY_GETTER(Test, exampleProp)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// example property getter</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Getter should return JavaScript value (JSValue).</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// For more information on how to use JSContext / JSValue / JSObject, check out HAL:</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      https://github.com/appcelerator/HAL</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> get_context().CreateString(exampleProp__);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">TITANIUM_PROPERTY_SETTER(Test, exampleProp)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// example property setter</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// There are a variable expanded from TITANIUM_PROPERTY_SETTER macro here:</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//     JSValue argument ... JavaScript value that is passed to this setter</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Example:</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//   # Check if it&apos;s a string</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      auto _0 = argument.IsString();</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//   # Convert argument to std::string</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      auto _0 = static_cast&lt;std::string&gt;(argument);    </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//   For more information on how to use JSContext / JSValue / JSObject, check out HAL:</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      https://github.com/appcelerator/HAL</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Update property string</code></div>\n<div class=\"line\"><code class=\"plain\">    exampleProp__ = </code><code class=\"keyword\">static_cast</code><code class=\"plain\">&lt;std::string&gt;(argument);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Setter should return true if the property was set, otherwise false.</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">void</code><code class=\"plain\"> Test::JSExportInitialize()</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    JSExport&lt;Test&gt;::SetClassVersion(1);</code></div>\n<div class=\"line\"><code class=\"plain\">    JSExport&lt;Test&gt;::SetParent(JSExport&lt;Titanium::Module&gt;::Class());</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// register exampleProp property</code></div>\n<div class=\"line\"><code class=\"plain\">    TITANIUM_ADD_PROPERTY(Test, exampleProp);</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-46248212_WindowsModuleQuickStart-AddaFunction\">\n        <h3 class=\"heading \"><span>Add a Function</span></h3>\n    <p>In order to add JavaScript function to Module, modify the default module class files to return JavaScript value First, modify the <tt class=\" \">ComExampleTestModule.hpp</tt> file to declare a JavaScript function using <tt class=\" \">TITANIUM_FUNCTION_DEF</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ComExampleTest.hpp</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ComExampleTest.hpp\">\n<div class=\"line\"><code class=\"keyword\">class</code><code class=\"plain\"> COMEXAMPLETEST_EXPORT Test : </code><code class=\"keyword\">public</code><code class=\"plain\"> Titanium::Module, </code><code class=\"keyword\">public</code><code class=\"plain\"> JSExport&lt;Test&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">public</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        ...</code></div>\n<div class=\"line\"><code class=\"plain\">        TITANIUM_FUNCTION_DEF(example);</code></div>\n<div class=\"line\"><code class=\"plain\">        ...</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <p>Next, modify the example function to actually return variable you just declared. These methods are already declared in the <tt class=\" \">ComExampleTestModule.cpp</tt> file but not implemented. TitaniumKit provides useful macro to declare JavaScript function, which is <tt class=\" \">TITANIUM_FUNCTION</tt>. <tt class=\" \">TITANIUM_FUNCTION</tt> should return <tt class=\" \">JSValue</tt> datatype. Once you implement the method, register it using <tt class=\" \">TITANIUM_ADD_PROPERTY</tt> in <tt class=\" \">JSExportInitialize</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ComExampleTest.cpp</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ComExampleTest.cpp\">\n<div class=\"line\"><code class=\"plain\">TITANIUM_FUNCTION(Test, example)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// example method</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// There are variables expanded from TITANIUM_FUNCTION macro here:</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//     std::vector&lt;JSValue&gt; arguments ... list of arguments that is passed to this function</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//     JSObject this_object           ... &quot;this&quot; JavaScript object</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Example: </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//    # Get first argument and convert to std::string</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      auto _0 = static_cast&lt;std::string&gt;(arguments.at(0));    </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//    # Get first argument and convert to double</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      auto _0 = static_cast&lt;double&gt;(arguments.at(0));    </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//    # Get first argument and convert to std::uint32_t</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      auto _0 = static_cast&lt;std::uint32_t&gt;(arguments.at(0));    </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//   Function should return JSValue.</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//   For more information on how to use JSContext / JSValue / JSObject, check out HAL:</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//      https://github.com/appcelerator/HAL</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// </code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Let&apos;s return exampleProp value for now</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> get_context().CreateString(exampleProp__);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">void</code><code class=\"plain\"> Test::JSExportInitialize()</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    JSExport&lt;Test&gt;::SetClassVersion(1);</code></div>\n<div class=\"line\"><code class=\"plain\">    JSExport&lt;Test&gt;::SetParent(JSExport&lt;Titanium::Module&gt;::Class());</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// register example function</code></div>\n<div class=\"line\"><code class=\"plain\">    TITANIUM_ADD_FUNCTION(Test, example);</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-46248212_WindowsModuleQuickStart-Firingcallbacks\">\n        <h3 class=\"heading \"><span>Firing callbacks</span></h3>\n    <p>There are multiple way to fire JavaScript functions as a callback. First, the easiest way to fire callback is leveraging Titanium&apos;s event mechanics such as <tt class=\" \">addEventListener</tt>.<br>So let say you are listening <tt class=\" \">somethingfired</tt> event. In this case you can add listener in JavaScript like below.    </br></p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app.js\">\n<div class=\"line\"><code class=\"plain\">test.addEventListener(</code><code class=\"string\">&apos;somethingfired&apos;</code><code class=\"plain\">, </code><code class=\"keyword\">function</code><code class=\"plain\">(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(e.type + </code><code class=\"string\">&apos; my_number:&apos;</code><code class=\"plain\"> + e.my_number);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>In this case, you can fire this callback from the module by executing <tt class=\" \">fireEvent</tt> like below.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ComExampleTest.cpp</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ComExampleTest.cpp\">\n<div class=\"line\"><code class=\"plain\">TITANIUM_FUNCTION(YourModule, doTheMyNumberEvent)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">const</code><code class=\"plain\"> auto ctx = get_context();</code></div>\n<div class=\"line\"><code class=\"plain\">    auto e = ctx.CreateObject();</code></div>\n<div class=\"line\"><code class=\"plain\">    e.SetProperty(</code><code class=\"string\">&quot;my_number&quot;</code><code class=\"plain\">, ctx.CreateNumber(12345));</code></div>\n<div class=\"line\"><code class=\"plain\">    fireEvent(</code><code class=\"string\">&quot;somethingfired&quot;</code><code class=\"plain\">, e);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>There is another way to do the callback, by calling <tt class=\" \">JSObject</tt> as a function directly. This is basic functionality on HAL framework.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app.js\">\n<div class=\"line\"><code class=\"plain\">test.doTheCallbackImmediately(</code><code class=\"keyword\">function</code><code class=\"plain\">(str) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(str);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>Since HAL <tt class=\" \">JSObject</tt> is callable, you can just execute it with arguments like below.    </p>\n    <p>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ComExampleTest.cpp</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ComExampleTest.cpp\">\n<div class=\"line\"><code class=\"plain\">TITANIUM_FUNCTION(YourModule, doTheCallbackImmediately)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    ENSURE_OBJECT_AT_INDEX(my_callback, 0);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">const</code><code class=\"plain\"> std::vector&lt;JSValue&gt; args { get_context().CreateString(</code><code class=\"string\">&quot;TEST&quot;</code><code class=\"plain\">) };</code></div>\n<div class=\"line\"><code class=\"plain\">    my_callback(args, get_object());</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> get_context().CreateUndefined();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46248212_WindowsModuleQuickStart-NextSteps\">\n        <h2 class=\"heading \"><span>Next Steps</span></h2>\n<ul class=\" \"><li class=\" \">    <p>For information about HAL API, see <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/HAL\" target=\"_blank\">github/appcelerator/HAL</a>    </p>\n</li><li class=\" \">    <p>For information about TitaniumKit, see <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile_windows\" target=\"_blank\">github/appcelerator/titanium_mobile_windows</a>    </p>\n</li><li class=\" \">    <p>For more examples of using the module API, see working Titanium modules under <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile_windows/tree/master/Source\" target=\"_blank\">github/appcelerator/titanium_mobile_windows/Source</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46248212\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Windows Module Quick Start"});