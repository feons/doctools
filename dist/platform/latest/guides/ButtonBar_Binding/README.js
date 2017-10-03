Ext.data.JsonP['ButtonBar_Binding']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ButtonBar Binding</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41846546\" class=\"content\">\n                        <h1>ButtonBar Binding</h1>\n    <p>Demonstrates how you can use data binding to populate the list of buttons in a ButtonBar or TabbedBar, or Toolbar component.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_bars</strong>    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/41846546/screenshot.png\" alt=\"images/download/attachments/41846546/screenshot.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"240\" height=\"376\">\n    </img></p>\n    <p>The alloy.js file creates the <tt class=\" \">Item</tt> model and <tt class=\" \">Items</tt> collection referenced by the <tt class=\" \">dataCollection</tt> attribute of all elements in the XML view (see below). It also initializes the Items collection with a set of objects consisting of <tt class=\" \">title</tt> and <tt class=\" \">enabled</tt> fields.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/alloy.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/alloy.js\">\n<div class=\"line\"><code class=\"plain\">var Item = Backbone.Model.extend();</code></div>\n<div class=\"line\"><code class=\"plain\">var Items = Backbone.Collection.extend({</code></div>\n<div class=\"line\"><code class=\"plain\">\tmodel: Item</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.items = </code><code class=\"keyword\">new</code><code class=\"plain\"> Items();</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.items.reset([</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ title: </code><code class=\"string\">&apos;button 1&apos;</code><code class=\"plain\">, enabled: </code><code class=\"keyword\">true</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ title: </code><code class=\"string\">&apos;button 2&apos;</code><code class=\"plain\">, enabled: </code><code class=\"keyword\">false</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ title: </code><code class=\"string\">&apos;button 3&apos;</code><code class=\"plain\">, enabled: </code><code class=\"keyword\">true</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">]);</code></div>\n</div>\n    </div>\n    <p>The XML view defines the three UI elements, and the <tt class=\" \">items</tt> collection to the <tt class=\" \">dataCollection</tt> attribute for each of them.     <span style=\"color: #222222;\">\nAs the collection is updated, the view reflects the changes made to the models.     </span>\nIn addition, the Toolbar includes a dataFilter attribute whose value is the name of the function that will filter the items collection before the data binding occurs.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">views/ios/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"views/ios/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;ButtonBar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Labels dataCollection=</code><code class=\"string\">&quot;items&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;Label title=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\"> enabled=</code><code class=\"string\">&quot;{enabled}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/Labels&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/ButtonBar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;TabbedBar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Labels dataCollection=</code><code class=\"string\">&quot;items&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;Label title=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\"> enabled=</code><code class=\"string\">&quot;{enabled}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/Labels&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/TabbedBar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;Toolbar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Items dataCollection=</code><code class=\"string\">&quot;items&quot;</code><code class=\"plain\"> dataFilter=</code><code class=\"string\">&quot;filterItems&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;Button title=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/Items&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/Toolbar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Window&gt;</code></div>\n</div>\n    </div>\n    <p>To make the data bindings take effect, there must be a <tt class=\" \">change</tt> event triggered on the <tt class=\" \">items</tt> collection. One way to do this is to call the Backbone collection&apos;s <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Events-trigger\" target=\"_blank\"><tt class=\" \">trigger()</tt> method</a>, as shown below in the the main index.js controller file. The controller defines a <tt class=\" \">filterItems()</tt> function that only returns those items in the collection whose <tt class=\" \">enabled</tt> property is set to true. Only those items are displayed by the ToolBar control.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">function filterItems(collection) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">return</code><code class=\"plain\"> collection.where({enabled:</code><code class=\"keyword\">true</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.items.trigger(</code><code class=\"string\">&apos;change&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41846546_ButtonBarBinding-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/ButtonBar_Binding-section-src-41846546\">Collection-View Binding</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41846546\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ButtonBar Binding"});