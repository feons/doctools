Ext.data.JsonP['API_Builder_Oracle_Database_Connector']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title/>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49154959\" class=\"content\">\n                        <h1/>\n    <p>This is an API Builder connector to Oracle Database.    </p>\n    <div class=\"section section-2 \" id=\"src-49154959_APIBuilderOracleDatabaseConnector-Prerequisites\">\n        <h2 class=\"heading \"><span>Prerequisites</span></h2>\n    <p>This connector requires Oracle Instant Client to be installed prior to usage. To install it, please follow the instructions for your environment here:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html\" target=\"_blank\">Oracle Instant Client</a>    </p>\n</li><li class=\" \">    <p>The connector also depends on the &#x2018;node-oracledb&#x2019; module. To be able to properly install the connector, please check the prerequisites here: <a class=\"external-link external-link\" href=\"https://github.com/oracle/node-oracledb#-installation\" target=\"_blank\">node-oracledb</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-49154959_APIBuilderOracleDatabaseConnector-Installation\">\n        <h2 class=\"heading \"><span>Installation</span></h2>\n    <p>To install the connector use:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ appc </code><code class=\"functions\">install</code><code class=\"plain\"> connector</code><code class=\"plain\">/appc</code><code class=\"plain\">.oracledb --save</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49154959_APIBuilderOracleDatabaseConnector-Configuration\">\n        <h2 class=\"heading \"><span>Configuration</span></h2>\n    <p>Create appc.oracledb.default.js in <tt class=\" \">&lt;your_project&gt;/conf</tt> directory.    </p>\n    <p>Example appc.oracledb.defaults.js content:    </p>\n    <div class=\"confbox programlisting rdark syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"rdark syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    connectors: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;appc.oracledb&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"comments\">// Your connection credentials.</code></div>\n<div class=\"line\"><code class=\"plain\">            user: </code><code class=\"string\">&apos;hr&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            password: </code><code class=\"string\">&apos;welcome&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            connectString: </code><code class=\"string\">&apos;localhost/XE&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"comments\">// Create models based on your schema that can be used in your API.</code></div>\n<div class=\"line\"><code class=\"plain\">            generateModelsFromSchema: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"comments\">// Whether or not to generate APIs based on the methods in generated models.</code></div>\n<div class=\"line\"><code class=\"plain\">            modelAutogen: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <p class=\"highlight javascript\">    </p>\n    <p>This example connector configuration will automatically generate models based on your database schema.<br>If you want to create a custom model, set <tt class=\" \">generateModelsFromSchema: false</tt> and reference the documentation for more information how to create models.    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49154959_APIBuilderOracleDatabaseConnector-Unittests\">\n        <h2 class=\"heading \"><span>Unit tests</span></h2>\n    <p>Run the tests:    </p>\n    <div class=\"confbox programlisting rdark syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"rdark syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">npm </code><code class=\"functions\">test</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>The tests will automatically create their own table named &#x201C;TEST_Post&#x201D;.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49154959\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"API Builder Oracle Database Connector"});