Ext.data.JsonP['Example_Applications']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Example Applications</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-29004877\" class=\"content\">\n                        <h1>Example Applications</h1>\n    <div class=\"section section-2 \" id=\"src-29004877_ExampleApplications-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-KitchenSink\">Kitchen Sink</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-RSSReader\">RSS Reader</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-RelatedDocumentation\">Related Documentation</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-TodoList\">Todo List</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-RelatedDocumentation.1\">Related Documentation</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-Geocoder\">Geocoder</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Example_Applications-section-src-29004877_ExampleApplications-RelatedDocumentation.2\">Related Documentation</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-29004877_ExampleApplications-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>The following example applications may be useful to browse for examples of API usage and approaches to structuring Titanium applications.    </p>\n    <p>These applications can all be imported directly from the <strong class=\" \">Samples</strong> view in Studio. URLs are provided for users who don&apos;t use Studio or want to download the code directly.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004877_ExampleApplications-KitchenSink\">\n        <h2 class=\"heading \"><span>Kitchen Sink</span></h2>\n    <p>This expansive sample application showcases the majority of Titanium Mobile&apos;s APIs. Starting in Titanium Release 2.1.1, the Kitchen Sink has been completely refactored to use a more modern application structure. This version of the Kitchen Sink sample does not yet support the Nook or Kindle Fire (or other Android devices that lack support for Google APIs such as location services). For these devices, there is a legacy version of the Kitchen Sink.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Prior to Release 2.1.1, the KitchenSink did not represent <i class=\" \">best practices</i> and therefore its structure should <strong class=\" \">not</strong> be used for real-world applications.    </p>\n    <p>The Nook version of the Kitchen Sink sample still uses the old code structure, and should not be used as an example for real-world applications.    </p>\n    </div>\n    <ul class=\" \"><li class=\" \">    <p><strong class=\" \">Mobile</strong> - <a class=\"external-link external-link\" href=\"http://github.com/appcelerator/KitchenSink\" target=\"_blank\">Kitchen Sink on GitHub</a>    </p>\n</li><li class=\" \">    <p><strong class=\" \">NOOK Color</strong> - <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink-Nook\" target=\"_blank\">NOOK Color Kitchen Sink on Github</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-29004877_ExampleApplications-RSSReader\">\n        <h2 class=\"heading \"><span>RSS Reader</span></h2>\n    <p>RSS Reader is a Titanium Mobile sample app that lets you browse RSS feeds. With it you can pull live RSS feeds from the internet, browse a list of headlines with thumbnail images, then select and read articles.    </p>\n    <p>The RSS Reader app demonstrates:    </p>\n<ul class=\" \"><li class=\" \">    <p>Remote Data access using <tt class=\" \">Ti.Network.HTTPClient</tt>.    </p>\n</li><li class=\" \">    <p>Modular Javascript with CommonJS.    </p>\n</li><li class=\" \">    <p>Multiple window app using a single execution context.    </p>\n</li><li class=\" \">    <p>Loose coupling of UI and data code using application level events.    </p>\n</li><li class=\" \">    <p>Native UI features    </p>\n</li><li class=\" \">    <p>TableView with custom rows.    </p>\n</li><li class=\" \">    <p>Android menus.    </p>\n</li><li class=\" \">    <p>iOS navigation bar buttons.    </p>\n</li><li class=\" \">    <p>iOS Navigation Controller using <tt class=\" \">Ti.UI.iPhone.NavigationGroup</tt>.    </p>\n</li><li class=\" \">    <p>Mobile Web Navigation Group <tt class=\" \">Ti.UI.MobileWeb.NavigationGroup</tt>.    </p>\n</li><li class=\" \">    <p>WebViews for displaying web content.    </p>\n</li><li class=\" \">    <p>Cross-platform design.    </p>\n</li></ul>    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>iOS    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Android    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/29004877/rss_reader_ios.png\" alt=\"images/download/attachments/29004877/rss_reader_ios.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/29004877/rss_reader_android.png\" alt=\"images/download/attachments/29004877/rss_reader_android.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"src-29004877_ExampleApplications-RelatedDocumentation\">\n        <h3 class=\"heading \"><span>Related Documentation</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Networking    </p>\n<ul class=\" \"><li class=\" \">    <p>Guides: <a class=\"document-link \" href=\"#!/guide/Working_with_Remote_Data_Sources\">Working with Remote Data Sources</a>    </p>\n</li><li class=\" \">    <p>API Docs: <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient\"><tt class=\" \">Ti.Network.HTTPClient</tt></a>    </p>\n</li></ul></li></ul><ul class=\" \"><li class=\" \">    <p>Guides: <a class=\"document-link \" href=\"#!/guide/Event_Handling-section-src-29004896_EventHandling-Applicationlevelevents\">Application level events</a>    </p>\n</li></ul><ul class=\" \"><li class=\" \">    <p>Web Views    </p>\n<ul class=\" \"><li class=\" \">    <p>Guides: <a class=\"document-link \" href=\"#!/guide/Integrating_Web_Content\">Integrating Web Content</a>    </p>\n</li><li class=\" \">    <p>API Docs: <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.WebView\">Ti.UI.WebView</a>    </p>\n</li></ul></li></ul><ul class=\" \"><li class=\" \">    <p>UI Elements    </p>\n<ul class=\" \"><li class=\" \">    <p>Guides: <a class=\"document-link \" href=\"#!/guide/Android_UI_Components_and_Conventions-section-src-29004929_AndroidUIComponentsandConventions-Androidmenu\">Android menu</a>    </p>\n</li><li class=\" \">    <p>API Docs: <tt class=\" \">Ti.UI.iOS.NavigationWindow</tt>    </p>\n</li><li class=\" \">    <p>API Docs: <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.MobileWeb.NavigationGroup\"><tt class=\" \">Ti.UI.MobileWeb.NavigationGroup</tt></a>    </p>\n</li></ul></li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004877_ExampleApplications-TodoList\">\n        <h2 class=\"heading \"><span>Todo List</span></h2>\n    <p>Todo List is a a simple tabbed application for keeping track of to do items. With this app you can maintain a listing of tasks to be completed, add to that list, and mark tasks as <strong class=\" \">done</strong>. Uses database storage. On Mobile Web, where <tt class=\" \">Ti.Database</tt> is not supported yet, the <tt class=\" \">Properties</tt> API is used to provide local storage.    </p>\n    <p>The Todo List app demonstrates:    </p>\n<ul class=\" \"><li class=\" \">    <p>Local storage with SQLite using <tt class=\" \">Ti.Database</tt>.    </p>\n</li><li class=\" \">    <p>On Mobile Web, uses the <tt class=\" \">Ti.App.Properties</tt> API for local storage.    </p>\n</li><li class=\" \">    <p>Modular Javascript with CommonJS.    </p>\n</li><li class=\" \">    <p>Multiple window app using a single execution context.    </p>\n</li><li class=\" \">    <p>Native UI features    </p>\n</li><li class=\" \">    <p>Android menus    </p>\n</li><li class=\" \">    <p>iOS navigation bar buttons    </p>\n</li><li class=\" \">    <p>Cross-platform design    </p>\n</li></ul>    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>iOS    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Android    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/29004877/todo_ios.png\" alt=\"images/download/attachments/29004877/todo_ios.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/29004877/todo_android.png\" alt=\"images/download/attachments/29004877/todo_android.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"src-29004877_ExampleApplications-RelatedDocumentation.1\">\n        <h3 class=\"heading \"><span>Related Documentation</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Guides: <a class=\"document-link \" href=\"#!/guide/Working_with_a_SQLite_Database\">Working with a SQLite Database</a>    </p>\n</li><li class=\" \">    <p>API Docs: <a class=\"external-link external-link\" href=\"#!/api/Titanium.Database\">Ti.Database</a>    </p>\n</li><li class=\" \">    <p>API Docs: <a class=\"external-link external-link\" href=\"#!/api/Titanium.App.Properties\">Ti.App.Properties</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004877_ExampleApplications-Geocoder\">\n        <h2 class=\"heading \"><span>Geocoder</span></h2>\n    <p>This is a Titanium Mobile sample app that uses native maps to plot locations. With it you can forward geocode addresses and add them as annotations to the map.    </p>\n    <p>The Geocoder app demonstrates:    </p>\n<ul class=\" \"><li class=\" \">    <p>Using native maps with `Titanium.Map`    </p>\n</li><li class=\" \">    <p>Adding annotations to native maps    </p>\n</li><li class=\" \">    <p>Remote data access using <tt class=\" \">Titanium.Network.HTTPClient</tt>    </p>\n</li><li class=\" \">    <p>Modular Javascript with CommonJS    </p>\n</li><li class=\" \">    <p>Cross-platform design    </p>\n</li></ul>    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>iOS    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Android    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/29004877/geocoder_ios.png\" alt=\"images/download/attachments/29004877/geocoder_ios.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/29004877/geocoder_android.png\" alt=\"images/download/attachments/29004877/geocoder_android.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"src-29004877_ExampleApplications-RelatedDocumentation.2\">\n        <h3 class=\"heading \"><span>Related Documentation</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Guides: <a class=\"document-link \" href=\"#!/guide/Location_Services\">Location Services</a>    </p>\n</li><li class=\" \">    <p>API Docs: <a class=\"external-link external-link\" href=\"#!/api/Titanium.Map\">Titanium.Map</a>    </p>\n</li></ul>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004877\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Example Applications"});