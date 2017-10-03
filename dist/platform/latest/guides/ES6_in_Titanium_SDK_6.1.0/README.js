Ext.data.JsonP['ES6_in_Titanium_SDK_6.1.0']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ES6 in Titanium SDK 6.1.0</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49162227\" class=\"content\">\n                        <h1>ES6 in Titanium SDK 6.1.0</h1>\n    <p>We&apos;re introducing the ability to write ES6 (or 7) user code in Titanium SDK 6.1.0 and Alloy 1.10.0. This is a &quot;feature preview&quot; since the feature is not fully implemented across all of our tooling, and because it requires some flags and/or caveats. Specifically, we have moved our tooling from using uglifyjs to babylon to parse (and sometimes transform) your JS code. While this allows us to handle newer JS versions and syntax, we have not <strong class=\" \">yet</strong> included transpilation in our build pipeline.    </p>\n    <p>So what does this mean? It means you could write ES6/7 code that the target platform&apos;s JS engine does not yet support and the code will error at runtime. Or that you could write code that works on iOS 9, but not iOS 8. We have plans to eventually include transpilation during the build to convert any unsupported code and/or features down to ES5 for the older JS engines (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24610\" target=\"_blank\">TIMOB-24610</a>).    </p>\n    <p>For now, you will need to be aware of the JS support levels in each platform. <a class=\"external-link external-link\" href=\"https://kangax.github.io/compat-table/es6/\" target=\"_blank\">https://kangax.github.io/compat-table/es6/</a> is a great resource for this.    </p>\n    <div class=\"section section-2 \" id=\"src-49162227_safe-id-RVM2aW5UaXRhbml1bVNESzYuMS4wLUdyZWF0LGhvd2RvSXVzZWl0bm93PyE\">\n        <h2 class=\"heading \"><span>Great, how do I use it now?!</span></h2>\n<ul class=\" \"><li class=\" \">    <p>On Android, we&apos;re using V8 5.1.281.59 (equivalent to Chrome browser version 51) in Titanium SDK 6.1.0, so any language support in that version of V8 should be supported by default (outside of tail call optimization).    </p>\n</li><li class=\" \">    <p>On iOS, by default we use the TiCore JS engine, which is essentially an old fork of JavaScriptCore engine - and does not support ES6 features. However, you can &quot;turn on&quot; the JavaScriptCore engine bundled with iOS by setting a value in your tiapp.xml:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;</code><code class=\"keyword\">ti</code><code class=\"plain\">:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;</code><code class=\"keyword\">ios</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;</code><code class=\"keyword\">use</code><code class=\"plain\">-jscore-framework&gt;true&lt;/</code><code class=\"keyword\">use</code><code class=\"plain\">-jscore-framework&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/</code><code class=\"keyword\">ios</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">ti</code><code class=\"plain\">:app&gt;</code></div>\n</div>\n    </div>\n    <p>See <a class=\"document-link \" href=\"#!/guide/tiapp.xml_and_timodule.xml_Reference-section-src-29004921_tiapp.xmlandtimodule.xmlReference-use-jscore-framework\">tiapp.xml and timodule.xml Reference#use-jscore-framework</a>. As a general reference: iOS 8 only supports 17% of ES6, iOS 9 supports 54%, and iOS 10+ supports 100%.    </p>\n</li><li class=\" \">    <p>On Windows, we use a relatively recent fork of JavaScriptCore that should support most of ES6    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-49162227_ES6inTitaniumSDK6.1.0-KnownIssues\">\n        <h2 class=\"heading \"><span>Known Issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p>You can write code that the CLI may accept but that the underlying JS engine doesn&apos;t support yet. That may work on versions of the SDK/OS you test with but not on older versions. We need to support transpilation down to ES5 for older engines: <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24610\" target=\"_blank\">TIMOB-24610</a>    </p>\n</li><li class=\" \">    <p>Liveview doesn&apos;t yet handle ES6 (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1216\" target=\"_blank\">CLI-1216</a>)    </p>\n</li><li class=\" \">    <p>Using some things like import/export inside Alloy controllers may fail anyways due to the way we generate code by not hoisting those to the top-level.    </p>\n</li><li class=\" \">    <p>There is a performance hit for using babylon and babel to handle code (over uglifyjs) in Alloy compiles resulting in a slower build time. (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1312\" target=\"_blank\">ALOY-1312</a>)    </p>\n</li><li class=\" \">    <p>Studio does not yet support ES6 grammar and may improperly mark such code as having errors: <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8764\" target=\"_blank\">TISTUD-8764</a>    </p>\n</li><li class=\" \">    <p>Currently the version of Alloy in the Appcelerator CLI has not been upgraded to 1.10.0. So for now Alloy applications run using this are unable to use ES6 code (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1213\" target=\"_blank\">CLI-1213</a>)    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49162227\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ES6 in Titanium SDK 6.1.0"});