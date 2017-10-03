Ext.data.JsonP['Alloy_Widgets']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Widgets</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-35621514\" class=\"content\">\n                        <h1>Alloy Widgets</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Widgets-section-src-35621514_AlloyWidgets-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Widgets-section-src-35621514_AlloyWidgets-UsingWidgets\">Using Widgets</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Widgets-section-src-35621514_AlloyWidgets-CreatingWidgets\">Creating Widgets</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-35621514_AlloyWidgets-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Widgets are self-contained components that can be easily dropped into Alloy-powered Titanium projects. They were conceived as a way to reuse code in multiple applications or to be used multiple times in the same application. Widgets have their own views, controllers, styles and assets and are laid out the same as the app directory in the Alloy project.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35621514_AlloyWidgets-UsingWidgets\">\n        <h2 class=\"heading \"><span>Using Widgets</span></h2>\n    <p>See <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup-section-src-46248608_AlloyXMLMarkup-ImportingWidgets\">Importing Widgets</a> for more information on using widgets in your project.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35621514_AlloyWidgets-CreatingWidgets\">\n        <h2 class=\"heading \"><span>Creating Widgets</span></h2>\n    <p>Widgets should be built in their own directory in the Alloy project&apos;s <tt class=\" \">app/widgets/</tt> directory. Widgets have their own views, controllers, models, styles and assets and are laid out the same as the <tt class=\" \">app</tt> directory in the Alloy project. See <a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-src-34636240_AlloyConcepts-ConventionoverConfiguration\">Convention over Configuration</a> for the layout. Additionally, since widgets are self-contained, they should not reference any code or assets not within its path, except for internationalization and localization files, which are located in the <tt class=\" \">i18n</tt> folder. Some differences from Alloy projects and helpful tricks are noted below.    </p>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-AssetsandLibs\">\n        <h3 class=\"heading \"><span>Assets and Libs</span></h3>\n    <p>For any files in the <tt class=\" \">assets</tt> or <tt class=\" \">libs</tt> folder, use the <tt class=\" \">WPATH()</tt> macro to automatically map the path relative from the widget&apos;s root folder, as opposed to the Alloy project&apos;s <tt class=\" \">app</tt> directory. For example, if you have a library located at <tt class=\" \">app/widgets/foo/lib/helper.js</tt>, to require it, use <tt class=\" \">require(WPATH(&apos;helper&apos;))</tt>; and if you have an image located at <tt class=\" \">app/widgets/foo/assets/images/foo.png</tt>, to reference it, use <tt class=\" \">WPATH(&apos;images/foo.png&apos;)</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-Configuration\">\n        <h3 class=\"heading \"><span>Configuration</span></h3>\n    <p>Widgets have their own configuration file called <tt class=\" \">widget.json</tt> located in the widget&apos;s root directory. Refer to <a class=\"document-link \" href=\"#!/guide/Widget_Configuration_File_(widget.json)\">Widget Configuration File (widget.json)</a> for the format of the file.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-Controllers\">\n        <h3 class=\"heading \"><span>Controllers</span></h3>\n    <p>The main controller is called <tt class=\" \">widget.js</tt> instead of <tt class=\" \">index.js</tt>.    </p>\n    <p>To use another view-controller besides <tt class=\" \">widget.js</tt>/<tt class=\" \">widget.xml</tt>, use the <tt class=\" \">Widget.createController(controller_name, [params])</tt> method to create a new instance of the controller and the <tt class=\" \">getView()</tt> method to access the Titanium proxy object. For example, suppose you have a <tt class=\" \">button</tt> view-controller in your <tt class=\" \">foo</tt> widget. To add it to the main widget view:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/widgets/foo/controllers/widget.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/widgets/foo/controllers/widget.js\">\n<div class=\"line\"><code class=\"plain\">var button = Widget.createController(</code><code class=\"string\">&apos;button&apos;</code><code class=\"plain\">).getView();</code></div>\n<div class=\"line\"><code class=\"plain\">$.widget.add(button);</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #000000;\">\nAll methods in the widget controller are private unless you prefix the method with <tt class=\" \">$</tt>, which makes it accessible to the Alloy project and other widgets. For example, if the following code was defined in a widget controller:    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$.init = function (args) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Button object with id=button</code></div>\n<div class=\"line\"><code class=\"plain\">    $.button.title = args.title || </code><code class=\"string\">&apos;Si&apos;</code><code class=\"plain\">; </code></div>\n<div class=\"line\"><code class=\"plain\">    $.button.color = args.color || </code><code class=\"string\">&apos;black&apos;</code><code class=\"plain\">; </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// global variable</code></div>\n<div class=\"line\"><code class=\"plain\">    message = args.message || </code><code class=\"string\">&apos;Hola mundo&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>Then, in the Alloy project, call <tt class=\" \">init</tt> prefixed with the widget ID specified in the Alloy project&apos;s view--in this example, the ID is <tt class=\" \">foo</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$.foo.init({title:</code><code class=\"string\">&apos;Yes&apos;</code><code class=\"plain\">, color:</code><code class=\"string\">&apos;gray&apos;</code><code class=\"plain\">, message:</code><code class=\"string\">&apos;I pity the foo.&apos;</code><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-Models\">\n        <h3 class=\"heading \"><span>Models</span></h3>\n    <p>Use models the same way as with a regular Alloy project except to create a model or collection inside a widget controller, use the  <tt class=\" \">Widget.createModel(model_name, [params])</tt>  and  <tt class=\" \">Widget.createCollection(model_name, [params])</tt>  methods, respectively.  You can also use the <tt class=\" \">Model</tt> and <tt class=\" \">Collection</tt> tags in widget views.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-Styles\">\n        <h3 class=\"heading \"><span>Styles</span></h3>\n    <p>The main TSS file is called <tt class=\" \">widget.tss</tt> instead of <tt class=\" \">index.tss</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-Themes\">\n        <h3 class=\"heading \"><span>Themes</span></h3>\n    <p>Widget themes work the same as project themes except for the placement of the files.  Inside your theme folder (<tt class=\" \">app/themes/&lt;THEME_NAME&gt;</tt>), create <tt class=\" \">widgets/&lt;WIDGET_NAME&gt;</tt> folders, where <tt class=\" \">&lt;THEME_NAME&gt;</tt> is the name of the theme and <tt class=\" \">&lt;WIDGET_NAME&gt;</tt> is the name of the widget. Create two folders, <tt class=\" \">assets</tt> and <tt class=\" \">styles</tt>, to place your custom images and styles for your widget, respectively. The <tt class=\" \">assets</tt> and <tt class=\" \">styles</tt> folders need to be placed in the folder that is named after the widget.  When using a theme, the files in these folders replace the files in the widget&apos;s folders.  For more details, see <a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes-section-src-35621526_AlloyStylesandThemes-Themes\">Alloy Styles and Themes: Themes</a>.    </p>\n    <p>To use a theme, in the project&apos;s <tt class=\" \">config.json</tt> file, add the <tt class=\" \">theme</tt> key with the name of the theme folder as the value.    </p>\n    <p>The following file structure shows the placement of the &quot;mytheme&quot; theme files in relation to the &quot;mywidget&quot; widget.  The project below contains iOS-specific assets and styles for the widget.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">app</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500; themes</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x2514;&#x2500;&#x2500; mytheme</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;       &#x2514;&#x2500;&#x2500; widgets</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;           &#x2514;&#x2500;&#x2500; mywidget</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x251C;&#x2500;&#x2500; assets</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;   &#x251C;&#x2500;&#x2500; ios</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; star_half.png</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;   &#x251C;&#x2500;&#x2500; star.png</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;   &#x2514;&#x2500;&#x2500; star_off.png</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2514;&#x2500;&#x2500; styles</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;                   &#x251C;&#x2500;&#x2500; ios</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;                   &#x2502;   &#x2514;&#x2500;&#x2500; star.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;                   &#x2514;&#x2500;&#x2500; star.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2514;&#x2500;&#x2500; widgets</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2514;&#x2500;&#x2500; mywidget</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500; assets</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x251C;&#x2500;&#x2500; star.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x251C;&#x2500;&#x2500; star_half.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500; star_off.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500; controllers</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x251C;&#x2500;&#x2500; star.js</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500; widget.js</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500; styles</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x251C;&#x2500;&#x2500; star.tss</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500; widget.tss</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500; views</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x251C;&#x2500;&#x2500; star.xml</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500; widget.xml</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2514;&#x2500;&#x2500; widget.json</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-Views\">\n        <h3 class=\"heading \"><span>Views</span></h3>\n    <p>The main view is called <tt class=\" \">widget.xml</tt> instead of <tt class=\" \">index.xml</tt>.    </p>\n    <p>Specifying the <tt class=\" \">id</tt> attribute in the XML markup components will make it easier to access and override Titanium object properties. For example, suppose you have a Button object in a widget view that has its id assigned as <tt class=\" \">button</tt> and in the Alloy project the widget id is <tt class=\" \">foo</tt>. To access a Button property:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&quot;button state: &quot;</code><code class=\"plain\"> + $.foo.button.enabled);</code></div>\n</div>\n    </div>\n    <p>For widgets that have multiple view-controllers, to include a widget&apos;s view-controller in another widget&apos;s view, use the <tt class=\" \">Widget</tt> tag and assign the <tt class=\" \">name</tt> attribute with the name of the view-controller minus the file extension.  <u class=\" \">Since Alloy 1.5.0</u>, if you omit the <tt class=\" \">src</tt> attribute, Alloy assumes you are referencing the current widget. For Alloy 1.4.x and prior, you need to assign the <tt class=\" \">src</tt> attribute to the widget&apos;s name. For example, the following markup is analogous to the example in the Controller section:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/widgets/foo/views/widget.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/widgets/foo/views/widget.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Widget src=</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;button&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-35621514_AlloyWidgets-Widgets\">\n        <h3 class=\"heading \"><span>Widgets</span></h3>\n    <p>Widgets can also contain other widgets. Follow the same directions from <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup-section-src-46248608_AlloyXMLMarkup-ImportingWidgets\">Importing Widgets</a> except the widget&apos;s configuration file is called <tt class=\" \">widget.json</tt> instead of <tt class=\" \">config.json</tt>.  Additionally, to create a widget inside a widget controller, use the <tt class=\" \">Widget.createWidget(widget_name, [controller_name], [params])</tt> method.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=35621514\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy Widgets"});