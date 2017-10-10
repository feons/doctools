Ext.data.JsonP['JavaScript_Library_Support']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>JavaScript Library Support</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083089\" class=\"content\">\n                        <h1>JavaScript Library Support</h1>\n    <div class=\"section section-2 \" id=\"src-30083089_JavaScriptLibrarySupport-Chapters\">\n        <h2 class=\"heading \"><span>Chapters</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_JavaScriptLibrarySupport-Libraries\">Libraries</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LURvam8oaHR0cDovL2Rvam90b29sa2l0Lm9yZyk\">Dojo (http://dojotoolkit.org)</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LUV4dEpTL1NlbmNoYShodHRwOi8vZXh0anMuY29tKQ\">ExtJS/Sencha (http://extjs.com)</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_JavaScriptLibrarySupport-Google\">Google</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LWpRdWVyeShodHRwOi8vanF1ZXJ5Lm9yZyk\">jQuery (http://jquery.org)</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LTMuMC4xKw\">3.0.1+</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LTMuMC41Kw\">3.0.5+</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LU9wZW5MYXllcnMoaHR0cDovL29wZW5sYXllcnMub3JnLyk\">OpenLayers (http://openlayers.org/)</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LVlVSShodHRwOi8vZGV2ZWxvcGVyLnlhaG9vLmNvbS95dWkvKQ\">YUI (http://developer.yahoo.com/yui/)</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support-section-src-30083089_JavaScriptLibrarySupport-NotcurrentlysupportedwithAPIDocs\">Not currently supported with API Docs</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083089_JavaScriptLibrarySupport-Libraries\">\n        <h2 class=\"heading \"><span>Libraries</span></h2>\n    <p>Studio ships with the ability for users to extend support for JavaScript libraries in content assist. Below is a list of libraries and content assist files we&apos;ve located that should be compatible with Studio. This is not a complete list, and compatibility is not guaranteed, but if you see something on this list and it doesn&apos;t work, please let us know.    </p>\n    <div class=\"section section-3 \" id=\"src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LURvam8oaHR0cDovL2Rvam90b29sa2l0Lm9yZyk\">\n        <h3 class=\"heading \"><span>Dojo ( http://dojotoolkit.org )</span></h3>\n    <p>The XML files Dojo ships require a little bit of massaging to be readable by the Studio content assist processor.    </p>\n    <p>Drop the SDOCML file anywhere into your Web Project (feel free to put it in a special folder).    </p>\n<ul class=\" \"><li class=\" \">    <p>1.6.0: <a class=\"external-link external-link\" href=\"https://raw.github.com/aptana/dojo.ruble/master/support/dojo.1.6.0.sdocml\" target=\"_blank\">https://raw.github.com/aptana/dojo.ruble/master/support/dojo.1.6.0.sdocml</a>    </p>\n</li></ul>    <p>Alternately, to update docs to a newer version (should one come out)    </p>\n<ul class=\" \"><li class=\" \"><ol class=\" \"><li class=\" \">    <p>Download latest API file from <a class=\"external-link external-link\" href=\"http://download.dojotoolkit.org/release-1.6.0/api.xml\" target=\"_blank\">http://download.dojotoolkit.org/release-1.6.0/api.xml</a>    </p>\n</li><li class=\" \">    <p>Download XSL transform file from <a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3-sdk/blob/master/tools/frameworks/dojo/1.6/update_dojo_metadata_1.6.xsl\" target=\"_blank\">https://github.com/aptana/studio3-sdk/blob/master/tools/frameworks/dojo/1.6/update_dojo_metadata_1.6.xsl</a>    </p>\n</li><li class=\" \">    <p>Follow instructions in XSL file to generate api.sdocml file. Drop this into your JavaScript project    </p>\n</li></ol></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LUV4dEpTL1NlbmNoYShodHRwOi8vZXh0anMuY29tKQ\">\n        <h3 class=\"heading \"><span>ExtJS/Sencha ( http://extjs.com )</span></h3>\n    <p>Drop the SDOCML file anywhere into your Web Project (feel free to put it in a special folder).    </p>\n<ul class=\" \"><li class=\" \">    <p>ExtJS 3.3.0: <a class=\"external-link external-link\" href=\"https://raw.github.com/aptana/sencha.ruble/master/support/ext-js-3.3.0.sdocml\" target=\"_blank\">https://raw.github.com/aptana/sencha.ruble/master/support/ext-js-3.3.0.sdocml</a>    </p>\n</li><li class=\" \">    <p>Sencha Touch RC 1: <a class=\"external-link external-link\" href=\"https://github.com/aptana/sencha.ruble/raw/master/support/sencha-touch-rc1.sdocml\" target=\"_blank\">https://github.com/aptana/sencha.ruble/raw/master/support/sencha-touch-rc1.sdocml</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-30083089_JavaScriptLibrarySupport-Google\">\n        <h3 class=\"heading \"><span>Google</span></h3>\n    <p>Drop the VSDoc files into your Web Project.    </p>\n<ul class=\" \"><li class=\" \">    <p>V3 Maps API: <a class=\"external-link external-link\" href=\"http://gmapvsdoc.codeplex.com/\" target=\"_blank\">http://gmapvsdoc.codeplex.com/</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LWpRdWVyeShodHRwOi8vanF1ZXJ5Lm9yZyk\">\n        <h3 class=\"heading \"><span>jQuery ( http://jquery.org )</span></h3>\n    <div class=\"section section-4 \" id=\"src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LTMuMC4xIA\">\n        <h4 class=\"heading \"><span>3.0.1+</span></h4>\n    <p>Drop the SDOCML file anywhere into your Web Project (feel free to put it in a special folder).    </p>\n<ul class=\" \"><li class=\" \">    <p>1.4.2: <a class=\"external-link external-link\" href=\"https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.4.2.sdocml\" target=\"_blank\">https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.4.2.sdocml</a>    </p>\n</li><li class=\" \">    <p>1.6.2: <a class=\"external-link external-link\" href=\"https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.6.2.sdocml\" target=\"_blank\">https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.6.2.sdocml</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LTMuMC41IA\">\n        <h4 class=\"heading \"><span>3.0.5+</span></h4>\n    <p>Install the jQuery ruble and reference it:    </p>\n<ol class=\" \"><li class=\" \">    <p><strong class=\" \">Commands &gt; Install Bundle &gt; jQuery</strong>    </p>\n</li><li class=\" \">    <p>Right click on a project, select <strong class=\" \">Properties &gt; Project Build Path</strong> and select the checkbox for jQuery 1.6.2.    </p>\n</li></ol>    <p>If you already have the jQuery bundle:    </p>\n<ol class=\" \"><li class=\" \">    <p>Choose <strong class=\" \">Commands &gt; Bundle Development &gt; Update User Bundles</strong>    </p>\n</li></ol>    <p>or    </p>\n<ol class=\" \"><li class=\" \">    <p>Find the <strong class=\" \">Aptana Rubles</strong> folder on your system    </p>\n</li><li class=\" \">    <p>Delete the Ruble    </p>\n</li><li class=\" \">    <p>Restart Studio    </p>\n</li><li class=\" \">    <p>Install the Ruble again as above    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LU9wZW5MYXllcnMoaHR0cDovL29wZW5sYXllcnMub3JnLyk\">\n        <h3 class=\"heading \"><span>OpenLayers ( http://openlayers.org/ )</span></h3>\n    <p>There is a current bug with adding the single <a class=\"external-link external-link\" href=\"http://www.openlayers.org/api/OpenLayers.js\" target=\"_blank\">http://www.openlayers.org/api/OpenLayers.js</a> file to a project to get content assist. As a workaround:    </p>\n<ul class=\" \"><li class=\" \">    <p>Download the last stable release: <a class=\"external-link external-link\" href=\"http://openlayers.org/download/OpenLayers-2.10.zip\" target=\"_blank\">http://openlayers.org/download/OpenLayers-2.10.zip</a>    </p>\n</li><li class=\" \">    <p>Unzip the folder.    </p>\n</li><li class=\" \">    <p>Drop the folder named <strong class=\" \">lib/OpenLayers</strong> into your project    </p>\n</li><li class=\" \">    <p>You will see API methods and classes shown.    </p>\n</li></ul>    <p>Note that this technique will not actually show documentation on the classes. For that, we need a SDOCML file which could be created from the source Natural Docs.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083089_safe-id-SmF2YVNjcmlwdExpYnJhcnlTdXBwb3J0LVlVSShodHRwOi8vZGV2ZWxvcGVyLnlhaG9vLmNvbS95dWkvKQ\">\n        <h3 class=\"heading \"><span>YUI ( http://developer.yahoo.com/yui/ )</span></h3>\n    <p>Drop the SDOCML file into your Web Project.    </p>\n<ul class=\" \"><li class=\" \">    <p>3.0: <a class=\"external-link external-link\" href=\"https://github.com/aptana/yui.ruble/raw/master/support/yui.3.0.sdocml\" target=\"_blank\">https://github.com/aptana/yui.ruble/raw/master/support/yui.3.0.sdocml</a>    </p>\n</li><li class=\" \">    <p>2.8: <a class=\"external-link external-link\" href=\"https://github.com/aptana/yui.ruble/raw/master/support/yui.2.8.sdocml\" target=\"_blank\">https://github.com/aptana/yui.ruble/raw/master/support/yui.2.8.sdocml</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083089_JavaScriptLibrarySupport-NotcurrentlysupportedwithAPIDocs\">\n        <h2 class=\"heading \"><span>Not currently supported with API Docs</span></h2>\n    <p>The libraries below may have supported SDOC files in <a class=\"external-link external-link\" href=\"https://github.com/aptana/frameworks/tree/master/plugins/\" target=\"_blank\">https://github.com/aptana/frameworks/tree/master/plugins/</a>, however, we are in the process of converted them to SDOCML or JSCA formats. If you&apos;d like to assist, please let us know.    </p>\n<ul class=\" \"><li class=\" \">    <p>AFLAX    </p>\n</li><li class=\" \">    <p>MooTools (<a class=\"external-link external-link\" href=\"http://mootools.net/\" target=\"_blank\">http://mootools.net/</a>).    </p>\n</li><li class=\" \">    <p>facebook.jscl    </p>\n</li><li class=\" \">    <p>Scriptaculous    </p>\n</li><li class=\" \">    <p>Prototype    </p>\n</li><li class=\" \">    <p>Rico    </p>\n</li><li class=\" \">    <p>Spry    </p>\n</li><li class=\" \">    <p>ms.ajax    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083089\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"JavaScript Library Support"});