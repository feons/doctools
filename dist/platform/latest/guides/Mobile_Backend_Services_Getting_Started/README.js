Ext.data.JsonP['Mobile_Backend_Services_Getting_Started']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Mobile Backend Services Getting Started</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49153748\" class=\"content\">\n                        <h1>Mobile Backend Services Getting Started</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_Getting_Started-section-src-49153748_MobileBackendServicesGettingStarted-CreateanMobileBackendServicesdatasource\">Create an Mobile Backend Services datasource</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_Getting_Started-section-src-49153748_MobileBackendServicesGettingStarted-StandaloneMobileBackendServicesdatasource\">Standalone Mobile Backend Services datasource</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_Getting_Started-section-src-49153748_MobileBackendServicesGettingStarted-MobileBackendServiceswithTitanium\">Mobile Backend Services with Titanium</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_Getting_Started-section-src-49153748_MobileBackendServicesGettingStarted-MobileBackendServiceswithAndroidoriOS\">Mobile Backend Services with Android or iOS</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_Getting_Started-section-src-49153748_MobileBackendServicesGettingStarted-MakecallstoMobileBackendServices\">Make calls to Mobile Backend Services</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_Getting_Started-section-src-49153748_MobileBackendServicesGettingStarted-Nextsteps\">Next steps</a>    </p>\n</li></ul>    <p>Mobile Backend Services (MBS) provides a set of REST APIs for creating, managing, and accessing different types of data in your cloud datasoucrce, such as <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Users\">Users</a>, <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Places\">Places</a>, and <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Photos\">Photos</a> over HTTP or HTTPS. You can integrate MBS into your application using the <a class=\"document-link \" href=\"#!/guide/Titanium_SDK_and_Mobile_Backend_Services\">Titanium</a>    <span style=\"color: #333333;\">\n,     </span>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_iOS_Mobile_Backend_Services\">iOS</a>    <span style=\"color: #333333;\">\n,     </span>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_Android_Mobile_Backend_Services\">Android</a>    <span style=\"color: #333333;\">\n or     </span>\n<a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_SDK_for_Node.js\">Node.js</a>    <span style=\"color: #333333;\">\n SDKs, or by calling the     </span>\n<a class=\"document-link \" href=\"#!/guide/Using_the_REST_API\">REST APIs</a>    <span style=\"color: #333333;\">\n directly.    </span>\n    </p>\n    <p>To manage your application and its data&#x2014;for example, to create or edit <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Users\">Users</a> or manage <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Photos\">Photos</a>&#x2014;you use <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n    <p>This guide explains how to create a standalone MBS datasource and make API calls to the datasource using the REST APIs. For integrating MBS with a specific platform, see the following SDK guides:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_and_Mobile_Backend_Services\">Titanium SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_Android_Mobile_Backend_Services\">Android SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_iOS_Mobile_Backend_Services\">iOS SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_SDK_for_Node.js\">Node.js SDK</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-49153748_MobileBackendServicesGettingStarted-CreateanMobileBackendServicesdatasource\">\n        <h2 class=\"heading \"><span>Create an Mobile Backend Services datasource</span></h2>\n    <p>You can create either a standalone MBS datasource or create an MBS datasource associated with a Titanium, Android or iOS application.    </p>\n    <div class=\"section section-3 \" id=\"src-49153748_MobileBackendServicesGettingStarted-StandaloneMobileBackendServicesdatasource\">\n        <h3 class=\"heading \"><span>Standalone Mobile Backend Services datasource</span></h3>\n    <p>A standalone MBS datasource does not have a specific client application associated with it. Use a standalone MBS source if you want multiple applications to access the same datasource, or if your client application is not Titanium, Android or iOS.    </p>\n<ol class=\" \"><li class=\" \">    <p>Log into <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>Click the Add menu (+) in the top navigation bar.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Create Mobile Backend Services Datasource</strong>.    </p>\n</li><li class=\" \">    <p>Enter a name for the datasource.    </p>\n</li><li class=\" \">    <p>If you have multiple environments, select the environments to enable for the datasource.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK</strong>.    </p>\n    <p>To make calls to MBS, you will need your MBS applications key. After Dashboard creates the datasource, click <strong class=\" \">Configuration</strong> in the left navigation, then click the <strong class=\" \">Show</strong> link next to <strong class=\" \">App Key</strong>. Use the MBS application key to make requests to MBS. Note that you have a key for each deployment environment.    </p>\n</li></ol>    <p>    <img src=\"images/download/attachments/49153748/addarrowdb.gif\" alt=\"images/download/attachments/49153748/addarrowdb.gif\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153748_MobileBackendServicesGettingStarted-MobileBackendServiceswithTitanium\">\n        <h3 class=\"heading \"><span>Mobile Backend Services with Titanium</span></h3>\n    <p>Use Studio or the CLI to enable platform services and create an MBS datasource associated with a Titanium application. After creating the application, load the <tt class=\" \">ti.cloud</tt> module to make requests to MBS.    </p>\n    <p>For directions, see the <a class=\"document-link \" href=\"#!/guide/Quick_Start\">Titanium SDK Guide</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153748_MobileBackendServicesGettingStarted-MobileBackendServiceswithAndroidoriOS\">\n        <h3 class=\"heading \"><span>Mobile Backend Services with Android or iOS</span></h3>\n    <p>Use Dashboard to register an Android application built with Java or iOS application built with Objective-C or Swift. The registration process creates a new MBS datasource associated with the application. Then, use the APS SDKs to integrate MBS services with the application.    </p>\n    <p>For directions, see:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_Android_Mobile_Backend_Services\">Android SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_iOS_Mobile_Backend_Services\">iOS SDK</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153748_MobileBackendServicesGettingStarted-MakecallstoMobileBackendServices\">\n        <h2 class=\"heading \"><span>Make calls to Mobile Backend Services</span></h2>\n    <p>You can make calls to MBS using the following SDKs and modules, or by making HTTP requests directly to MBS.    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Modules.Cloud\">Titanium Cloud Module</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_Android_Mobile_Backend_Services\">Appcelerator Platform Services API Reference for Android</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_iOS_Mobile_Backend_Services\">Appcelerator Platform Services API Reference for iOS</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_SDK_for_Node.js\">Node.js SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api\">Mobile Backend Services API docs</a>    </p>\n</li></ul>    <p>To make MBS calls from other applications, you need to use the platform&apos;s native HTTP client to make HTTP requests directly. You will need to pass the MBS application key in the URL as the <tt class=\" \">key</tt> parameter with each request.    </p>\n    <p>For example, the following Ruby code uses the <tt class=\" \">Net::HTTP</tt> library to make an MBS request:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;net/http&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;json&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">base_url = </code><code class=\"string\">&apos;https://api.cloud.appcelerator.com/v1/&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">key_param = </code><code class=\"string\">&apos;key=&lt;APP_KEY&gt;&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">url = </code><code class=\"constants\">URI</code><code class=\"plain\">(base_url + </code><code class=\"string\">&apos;users/create.json?&apos;</code><code class=\"plain\"> + key_param)</code></div>\n<div class=\"line\"><code class=\"plain\">req = Net::</code><code class=\"constants\">HTTP</code><code class=\"plain\">::Post.</code><code class=\"keyword\">new</code><code class=\"plain\">(url)</code></div>\n<div class=\"line\"><code class=\"plain\">req.set_form_data(</code><code class=\"color2\">:username</code><code class=\"plain\"> =&gt; </code><code class=\"string\">&apos;user1&apos;</code><code class=\"plain\">, </code><code class=\"color2\">:password</code><code class=\"plain\"> =&gt; </code><code class=\"string\">&apos;pass1&apos;</code><code class=\"plain\">, </code><code class=\"color2\">:password_confirmation</code><code class=\"plain\"> =&gt; </code><code class=\"string\">&apos;pass1&apos;</code><code class=\"plain\">))</code></div>\n<div class=\"line\"><code class=\"plain\">res = Net::</code><code class=\"constants\">HTTP</code><code class=\"plain\">.start(url.host, url.port, </code><code class=\"color2\">:use_ssl</code><code class=\"plain\"> =&gt; </code><code class=\"keyword\">true</code><code class=\"plain\">) </code><code class=\"keyword\">do</code><code class=\"plain\"> |http|</code></div>\n<div class=\"line\"><code class=\"plain\">  http.request(req)</code></div>\n<div class=\"line\"><code class=\"keyword\">end</code></div>\n<div class=\"line\"><code class=\"plain\">response = </code><code class=\"constants\">JSON</code><code class=\"plain\">.parse(res.body)</code></div>\n<div class=\"line\"><code class=\"plain\">puts </code><code class=\"string\">&quot;You are now logged in as &quot;</code><code class=\"plain\"> + response[</code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">][</code><code class=\"string\">&quot;users&quot;</code><code class=\"plain\">][</code><code class=\"constants\">0</code><code class=\"plain\">][</code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">]</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>For requests that require a user to be logged in, you will need to retrieve the <tt class=\" \">session_id</tt> from the meta header of the response from either the <tt class=\" \">users/login.json</tt> or <tt class=\" \">users/create.json</tt> method, then pass the <tt class=\" \">session_id</tt> in the URL as the <tt class=\" \">_session_id</tt> parameter with the request.    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">session_id_param = </code><code class=\"string\">&apos;_session_id=&apos;</code><code class=\"plain\"> + response[</code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">][</code><code class=\"string\">&quot;session_id&quot;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">url = </code><code class=\"constants\">URI</code><code class=\"plain\">(base_url + </code><code class=\"string\">&apos;posts/create.json?&apos;</code><code class=\"plain\"> + key_param + </code><code class=\"string\">&apos;&amp;&apos;</code><code class=\"plain\"> + session_id_param)</code></div>\n<div class=\"line\"><code class=\"plain\">req = Net::</code><code class=\"constants\">HTTP</code><code class=\"plain\">::Post.</code><code class=\"keyword\">new</code><code class=\"plain\">(url)</code></div>\n<div class=\"line\"><code class=\"plain\">req.set_form_data(</code><code class=\"color2\">:content</code><code class=\"plain\"> =&gt; </code><code class=\"string\">&apos;Calling ArrowDB from Ruby&apos;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">res = Net::</code><code class=\"constants\">HTTP</code><code class=\"plain\">.start(url.host, url.port, </code><code class=\"color2\">:use_ssl</code><code class=\"plain\"> =&gt; </code><code class=\"keyword\">true</code><code class=\"plain\">) </code><code class=\"keyword\">do</code><code class=\"plain\"> |http|</code></div>\n<div class=\"line\"><code class=\"plain\">  http.request(req)</code></div>\n<div class=\"line\"><code class=\"keyword\">end</code></div>\n<div class=\"line\"><code class=\"plain\">puts res.body</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>The SDKs and modules provided by Appcelerator abstract the HTTP request and will automatically handle passing the application key and session ID between the client application and MBS datasource. For example, the following is an equivalent call using the Titanium Cloud module:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> Cloud = require(</code><code class=\"string\">&apos;ti.cloud&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">Cloud.Users.create({</code></div>\n<div class=\"line\"><code class=\"plain\">    username: </code><code class=\"string\">&apos;user1&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    password: </code><code class=\"string\">&apos;pass1&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    password_confirmation: </code><code class=\"string\">&apos;pass1&apos;</code></div>\n<div class=\"line\"><code class=\"plain\"> }, </code><code class=\"keyword\">function</code><code class=\"plain\"> (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;You are now logged in as &apos;</code><code class=\"plain\"> + e.users[0].username);</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Error:\\n&apos;</code><code class=\"plain\"> + ((e.error &amp;&amp; e.message) || JSON.stringify(e)));</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Cloud.Posts.create({</code></div>\n<div class=\"line\"><code class=\"plain\">    content: </code><code class=\"string\">&apos;Calling ArrowDB from Titanium&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}, </code><code class=\"keyword\">function</code><code class=\"plain\"> (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Post succeeded!&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Error:\\n&apos;</code><code class=\"plain\"> + ((e.error &amp;&amp; e.message) || JSON.stringify(e)));</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153748_MobileBackendServicesGettingStarted-Nextsteps\">\n        <h2 class=\"heading \"><span>Next steps</span></h2>\n    <p>Review the <a class=\"external-link \" href=\"https://wiki.appcelerator.org/display/~lbadenhop/Using+the+REST+API\">REST Guide</a> if you are making HTTP requests directly to MBS, and the <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api\">Mobile Backend Services API reference</a>, which contains Titanium, REST, Android, iOS and Node.js examples. To setup a specific type of client application, see the following SDK guides:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_and_Mobile_Backend_Services\">Titanium SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_Android_Mobile_Backend_Services\">Android SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Platform_Services_SDK_for_iOS_Mobile_Backend_Services\">iOS SDK</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services_SDK_for_Node.js\">Node.js SDK</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153748\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Mobile Backend Services Getting Started"});