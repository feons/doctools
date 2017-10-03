Ext.data.JsonP['API_Builder']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>API Builder</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49153253\" class=\"content\">\n                        <h1>API Builder</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder-section-src-49153253_APIBuilder-Overview\">Overview</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder-section-src-49153253_APIBuilder-Connectors\">Connectors</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder-section-src-49153253_APIBuilder-Models\">Models</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder-section-src-49153253_APIBuilder-APIs\">APIs</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder-section-src-49153253_APIBuilder-Blocks\">Blocks</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder-section-src-49153253_APIBuilder-Topics\">Topics</a>    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    <span style=\"color: #2b4771;\">\nWith the release of version 1.10.0,     </span>\n <strong class=\" \">Arrow Builder</strong>     <span style=\"color: #2b4771;\">\nwill now be known as     </span>\n <strong class=\" \">API Builder</strong>     <span style=\"color: #2b4771;\">\n. The following pages reference many concepts and original features from Arrow Builder but there also several new features and workflows that are uniquely API Builder&apos;s.    </span>\n    </p>\n    </div>\n        <div class=\"section section-2 \" id=\"src-49153253_APIBuilder-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>API Builder lets you build and deploy a project that is comprised of API endpoints that can be consumed by any client application. An API Builder project is a Node.js application that runs in the API Runtime Services and    <span style=\"color: #222222;\">\n is comprised of several components. You can either define the components using JavaScript files placed in specific directories, which are automatically loaded when creating an API Builder instance or programmatically create components after initializing an API Builder instance. For information about the components, see the diagram and sections below.    </span>\n    </p>\n    <p>    <span style=\"color: #222222;\">\nTo get started, see the <a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide\">API Builder Getting Started Guide</a>.    </span>\n    </p>\n    <p>    <span style=\"color: #222222;\">\n     <img src=\"images/download/attachments/49153253/API_Builder_Application.png\" alt=\"images/download/attachments/49153253/API_Builder_Application.png\" class=\"confluence-embedded-image\" width=\"900\">\n <br>     </br></img></span>\n    </p>\n    <div class=\"section section-3 \" id=\"src-49153253_APIBuilder-Connectors\">\n        <h3 class=\"heading \"><span>Connectors</span></h3>\n    <p><strong class=\" \"> <a class=\"document-link \" href=\"#!/guide/API_Builder_Connectors\">API Builder Connectors</a> </strong>are adaptors that allow you to read and write data to and from an external data source, such as <a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services\"> Mobile Backend Services,</a> MySQL, Salesforce, and MongoDB, or in server memory. You can either add an existing connector to your application or create one to interface with your custom data source.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153253_APIBuilder-Models\">\n        <h3 class=\"heading \"><span>Models</span></h3>\n    <p><strong class=\" \"> <a class=\"document-link \" href=\"#!/guide/Models\">Models</a> </strong>provide a standardized interface for an application which allows client applications to access data. Models are either provided by a connector, reduced from an <a class=\"document-link \" href=\"#!/guide/Models\">existing model</a>, or composed of several models (<a class=\"document-link \" href=\"#!/guide/Models\">composite models</a>) using a left or an inner join operation.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153253_APIBuilder-APIs\">\n        <h3 class=\"heading \"><span>APIs</span></h3>\n    <p><strong class=\" \"><a class=\"document-link \" href=\"#!/guide/API_Builder_APIs\">API Builder APIs</a></strong> are custom endpoints that allow you to programmatically access and execute custom operations on model data. You can create an API if you want to execute an operation not exposed by the standardized interface.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153253_APIBuilder-Blocks\">\n        <h3 class=\"heading \"><span>Blocks</span></h3>\n    <p><strong class=\" \"> <a class=\"document-link \" href=\"#!/guide/API_Builder_Blocks\">API Builder Blocks</a> </strong>are filters that allow you to pre- or post-process data. Blocks are optional and can be used by either APIs or Models.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153253_APIBuilder-Topics\">\n        <h2 class=\"heading \"><span>Topics</span></h2>\n<ul class=\"childpages-macro \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide\">API Builder Getting Started Guide</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Developer_Guide\">API Builder Developer Guide</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_How-tos\">API Builder How-tos</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Release_Notes\">API Builder Release Notes</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_FAQ\">API Builder FAQ</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153253\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"API Builder"});