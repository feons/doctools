Ext.data.JsonP['Dealing_with_SOAP_Web_Services']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Dealing with SOAP Web Services</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004907\" class=\"content\">\n                        <h1>Dealing with SOAP Web Services</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dealing_with_SOAP_Web_Services-section-src-29004907_DealingwithSOAPWebServices-AvoidSOAPifyoucan\">Avoid SOAP if you can</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dealing_with_SOAP_Web_Services-section-src-29004907_DealingwithSOAPWebServices-Thelow-techapproach\">The low-tech approach</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dealing_with_SOAP_Web_Services-section-src-29004907_DealingwithSOAPWebServices-UsingtheSudslibrary\">Using the Suds library</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dealing_with_SOAP_Web_Services-section-src-29004907_DealingwithSOAPWebServices-ReferencesandFurtherReading\">References and Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004907_DealingwithSOAPWebServices-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this chapter, you will examine how you can interact with SOAP web services in Titanium.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004907_DealingwithSOAPWebServices-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>In some enterprise settings, &quot;Simple&quot; Object Access Protocol (SOAP) is the format for XML data returned by a web service. SOAP web services are very much possible in Titanium, though they are the least simple option.    </p>\n    <div class=\"section section-3 \" id=\"src-29004907_DealingwithSOAPWebServices-AvoidSOAPifyoucan\">\n        <h3 class=\"heading \"><span>Avoid SOAP if you can</span></h3>\n    <p>Although you can use SOAP web services (this may be your only option, especially if you are dealing with a 3rd party or legacy interface), it is recommended to avoid using SOAP web services in a Titanium application. SOAP retains the disadvantages of XML:    </p>\n<ul class=\" \"><li class=\" \">    <p>The overhead of XML over the wire    </p>\n</li><li class=\" \">    <p>The need to translate from an XML format to a JavaScript object format    </p>\n</li></ul>    <p>And compounds them because SOAP is even more verbose (much more XML being transported over the wire), and the results are even more difficult to parse. Some programming languages provide high-level tools, WSDL parsers, and other mechanisms to work around the complexities of a SOAP format, but JavaScript has historically never had any of those types of tools. This remains the case today, and as such, there are very few high-level libraries and tools to support SOAP in JavaScript.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004907_DealingwithSOAPWebServices-Thelow-techapproach\">\n        <h3 class=\"heading \"><span>The low-tech approach</span></h3>\n    <p>The approach taken by a number of Titanium projects we have worked on is to stay very low-tech and POST manually-created SOAP envelopes (XML strings) to a web service endpoint. If you understand how HTTP and SOAP work together, you can manually construct a SOAP envelope to send to your server, with the appropriate contents:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var client = Ti.Network.createHTTPClient();</code></div>\n<div class=\"line\"><code class=\"plain\">\tclient.onload = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar doc = </code><code class=\"keyword\">this</code><code class=\"plain\">.responseXML.documentElement;</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">//manually parse the SOAP XML document</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var soapRequest = </code><code class=\"string\">&quot;&lt;?xml version=\\&quot;1.0\\&quot; encoding=\\&quot;UTF-8\\&quot;?&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV=\\&quot;http://schemas.xmlsoap.org/soap/envelope/\\&quot; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;xmlns:SOAP-ENC=\\&quot;http://schemas.xmlsoap.org/soap/encoding/\\&quot; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;xmlns:xsi=\\&quot;http://www.w3.org/2001/XMLSchema-instance\\&quot; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;xmlns:xsd=\\&quot;http://www.w3.org/2001/XMLSchema\\&quot; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;xmlns:xs=\\&quot;http://www.w3.org/2001/XMLSchema\\&quot; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;xmlns:wsse=\\&quot;http://schemas.xmlsoap.org/ws/2002/12/secext\\&quot;&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;SOAP-ENV:Body id=\\&quot;_0\\&quot;&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;GetUserDetailsReq&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;Request&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;SessionToken xsi:type=\\&quot;ns:IVRSessionToken\\&quot;&gt;XXXX&lt;/SessionToken&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;/Request&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;/GMGetUserDetailsReq&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;/SOAP-ENV:Body&gt; \\n&quot;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"string\">&quot;&lt;/SOAP-ENV:Envelope&gt;&quot;</code><code class=\"plain\">;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">client.open(</code><code class=\"string\">&apos;POST&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;https://someserver.com/someendpoint.asmx&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">client.send({xml: soapRequest});</code></div>\n</div>\n    </div>\n    <p>Bear in mind the above SOAP envelope is completely made up and derived from another service. In order to use your own SOAP web services in this fashion, you will need to understand what the contents of a SOAP request to your server actually looks like as an HTTP request. Here, other third party tools can help, particularly ones that let you inspect the raw HTTP requests and responses for your web service. On the Mac, you might consider using <a class=\"external-link external-link\" href=\"http://ditchnet.org/soapclient/\" target=\"_blank\">SOAP Client</a>. The Eclipse Web Tools project also has a bit of SOAP <a class=\"external-link external-link\" href=\"http://www.eclipse.org/webtools/ws/\" target=\"_blank\">oriented tooling</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004907_DealingwithSOAPWebServices-UsingtheSudslibrary\">\n        <h3 class=\"heading \"><span>Using the Suds library</span></h3>\n    <p>Also possibly useful is the <a class=\"external-link external-link\" href=\"https://github.com/kwhinnery/Suds\" target=\"_blank\">Suds client library for Titanium</a>. It is an unofficial library and not in any way supported by Appcelerator, but it may be useful as a reference in building your own SOAP client.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004907_DealingwithSOAPWebServices-ReferencesandFurtherReading\">\n        <h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Kitchen Sink SOAP example: <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/soap.js\" target=\"_blank\">https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/soap.js</a> and <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/soap_client_library.js\" target=\"_blank\">https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/soap_client_library.js</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004907_DealingwithSOAPWebServices-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this chapter, you learned that you can interact with SOAP web services in Titanium, but that SOAP involves extra overhead and larger data payloads compared to JSON or XML.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004907\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Dealing with SOAP Web Services"});