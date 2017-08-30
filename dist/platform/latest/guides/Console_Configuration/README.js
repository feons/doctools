Ext.data.JsonP['Console_Configuration']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Console Configuration</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-43305028\" class=\"content\">\n                        <h1>Console Configuration</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-Example\">Example</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-Settings\">Settings</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-admin\">admin</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-apikey_development\">apikey_development</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-apikey_production\">apikey_production</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-APIKeyAuthPlugin\">APIKeyAuthPlugin</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-APIKeyAuthType\">APIKeyAuthType</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-apiPrefix\">apiPrefix</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-bodyParser\">bodyParser</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-busboy\">busboy</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-connectors\">connectors</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-cors\">cors</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-defaultConnector\">defaultConnector</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-ignoreDuplicateModels\">ignoreDuplicateModels</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-logging\">logging</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-logLevel\">logLevel</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-port\">port</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-ssl\">ssl</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Console_Configuration-section-src-43305028_ConsoleConfiguration-ConfiguringSSL\">Configuring SSL</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-43305028_ConsoleConfiguration-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>API Builder uses the configuration files in the project&apos;s <tt class=\" \">conf</tt> directory to initialize the application and its connectors.  Each JavaScript file in the directory should expose an object of key-value pairs.  You may add any arbitrary key-value pair besides the one described below.  The values will be passed to any method that is passed the API Builder configuration object.  Note that the API key values and session object are auto-generated when you create a new API Builder project.    </p>\n    <p>For environment-specific configuration files, add either <tt class=\" \">.development</tt> or <tt class=\" \">.production</tt> to the end of the filename.  For example, <tt class=\" \">foo.development.js</tt> will be used for the development environment, while <tt class=\" \">foo.production.js</tt> will be used for the production environment.    </p>\n    <p>If multiple files set the same keys, the value from the last file loaded will be used unless it is an environment-specific file.  Files are loaded based on the order returned from the OS&apos;s <tt class=\" \">readdir()</tt> method. For example, if <tt class=\" \">Foo.js</tt> and <tt class=\" \">foo.development.js</tt> set the same key, the value in <tt class=\" \">Foo.js</tt> is used since it is not environment specific.  However, if <tt class=\" \">Foo.development.js</tt> and <tt class=\" \">foo.development.js</tt> set the same key, the value from <tt class=\" \">foo.development.js</tt> is used since it is loaded last.    </p>\n    <p>Since Release 5.0.0, you can override the configuration file settings with an environment variable.  For the setting you want to override, prefix the variable with <tt class=\" \">ARROW_</tt>.  For example, if you want to override the <tt class=\" \">apikey</tt> setting, set the <tt class=\" \">ARROW_APIKEY</tt> environment variable.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43305028_ConsoleConfiguration-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">./conf/foo.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"./conf/foo.js\">\n<div class=\"line\"><code class=\"plain\">module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// These are generated when you create a new project</code></div>\n<div class=\"line\"><code class=\"plain\">    apikey_production: </code><code class=\"string\">&apos;xxxxxxxxxxxxxxxxxxxxxxxxx&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    apikey_development: </code><code class=\"string\">&apos;yyyyyyyyyyyyyyyyyyyyyyyyy&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Selects the authorization type -- uses HTTP Basic Authorization by default</code></div>\n<div class=\"line\"><code class=\"plain\">    APIKeyAuthType: </code><code class=\"string\">&apos;basic&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// All API paths will be prefixed with &apos;/foo&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    apiPrefix: </code><code class=\"string\">&apos;/foo&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets body-parser middleware setting</code></div>\n<div class=\"line\"><code class=\"plain\">    bodyParser: {</code></div>\n<div class=\"line\"><code class=\"plain\">        limit: </code><code class=\"value\">1</code><code class=\"plain\"> * </code><code class=\"value\">1024</code><code class=\"plain\"> * </code><code class=\"value\">1024</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets busboy initialization settings</code></div>\n<div class=\"line\"><code class=\"plain\">    busboy: {</code></div>\n<div class=\"line\"><code class=\"plain\">        limit: {</code></div>\n<div class=\"line\"><code class=\"plain\">            fieldNameSize: </code><code class=\"value\">100</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            fieldSize: </code><code class=\"value\">1</code><code class=\"plain\"> * </code><code class=\"value\">1024</code><code class=\"plain\"> * </code><code class=\"value\">1024</code></div>\n<div class=\"line\"><code class=\"plain\">        } </code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Connector settings...</code></div>\n<div class=\"line\"><code class=\"plain\">    connectors: {</code></div>\n<div class=\"line\"><code class=\"plain\">        connector_name: {</code></div>\n<div class=\"line\"><code class=\"plain\">            collection: </code><code class=\"string\">&apos;foobar&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        another_connector: {</code></div>\n<div class=\"line\"><code class=\"plain\">            name: </code><code class=\"string\">&apos;foobaz&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// et cetera, et cetera, et cetera</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43305028_ConsoleConfiguration-Settings\">\n        <h2 class=\"heading \"><span>Settings</span></h2>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-admin\">\n        <h3 class=\"heading \"><span>admin</span></h3>\n    <p>Configures the admin console. The <tt class=\" \">admin</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Default    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>allowedHosts    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>When the application is in production, restrict access to the admin console to the specified hosts.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>apiDocPrefix    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>String    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/apidoc</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Path to access the generated API docs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>css    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>CSS files to inject to customize the styling of the Admin Console and API docs. Files must be relative to <tt class=\" \">./web/public/</tt> folder or absolute URLs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">customHTMLErrorPage    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>String    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>HTML content to display for unauthorized access (HTTP 401 error code).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>disableAuth    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Boolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to <tt class=\" \">true</tt> to disable authorization to access the admin console.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>disableAPIDoc    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Boolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to <tt class=\" \">true</tt> to not display the generated API Docs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">enableAdminInProduction    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Boolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to <tt class=\" \">true</tt> to enable the admin console in the production environment.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>enabled    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Boolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to <tt class=\" \">true</tt> to enable the admin console.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>js    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>JavaScript files to inject to customize the styling of the Admin Console and API docs. Files must be relative to <tt class=\" \">./web/public/</tt> folder or absolute URLs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>prefix    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>String    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/arrow</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Path to access the admin console.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">validEmails    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>developer&apos;s e-mail address    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>When the application is in production, restrict access to the admin console to the specified accounts.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">validOrgs    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;Number&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>developer&apos;s organization    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>When the application is in production, restrict access to the admin console to the specified organizations.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-apikey_development\">\n        <h3 class=\"heading \"><span>apikey_development</span></h3>\n    <p>Generated API key used when testing the application, that is, running the application locally.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-apikey_production\">\n        <h3 class=\"heading \"><span>apikey_production</span></h3>\n    <p>Generated API key used when running the application in production, that is used, when it is deployed to API Runtime Services.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-APIKeyAuthPlugin\">\n        <h3 class=\"heading \"><span>APIKeyAuthPlugin</span></h3>\n    <p>Location of the authorization module if <tt class=\" \">APIKeyAuthType</tt> is set to <tt class=\" \">plugin</tt>.    </p>\n    <p>For details, see <a class=\"document-link \" href=\"#!/guide/Authentication_Schemes\">Authentication Schemes</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-APIKeyAuthType\">\n        <h3 class=\"heading \"><span>APIKeyAuthType</span></h3>\n    <p>String value indicating the authorization type for the application.  By default, it is set to <tt class=\" \">basic</tt>.    </p>\n    <p>For details, see <a class=\"document-link \" href=\"#!/guide/Authentication_Schemes\">Authentication Schemes</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-apiPrefix\">\n        <h3 class=\"heading \"><span>apiPrefix</span></h3>\n    <p>Prefix path to use for the API requests for Models and APIs.  Each endpoint you define in a Model or API will be prefixed by this value. By default, it is set to <tt class=\" \">/api</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-bodyParser\">\n        <h3 class=\"heading \"><span>bodyParser</span></h3>\n    <p>Configures body-parser middleware settings.  The <tt class=\" \">bodyParser</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Default    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>limit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Number/String    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&apos;1mb&apos;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Sets the maximum request body size in bytes for the body-parser middleware.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-busboy\">\n        <h3 class=\"heading \"><span>busboy</span></h3>\n    <p>Configuration object to pass to the busboy constructor, which is created when the API Builder middleware is initialized.  For a list of properties you can set, see the <a class=\"external-link external-link\" href=\"https://www.npmjs.com/package/busboy#busboy-methods\" target=\"_blank\">busboy documentation</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-connectors\">\n        <h3 class=\"heading \"><span>connectors</span></h3>\n    <p>Configures the connectors used by the application. The connectors field is an object of key-value pairs where the key is the name of the connector and the value is another key-value pair object used to configure the connector. The configuration object is specific to each connector.    </p>\n    <p>Most connectors will have their own default configuration file in the <tt class=\" \">conf</tt> directory.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-cors\">\n        <h3 class=\"heading \"><span>cors</span></h3>\n    <p>Configures the CORS settings. The <tt class=\" \">cors</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">Access-Control-Allow-Origin    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>String    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Specifies the URI that can access the server. Defaults to all.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>safeHeaders    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>HTTP headers to expose and allow, that is, the specified value is set for <tt class=\" \">Access-Control-Expose-Headers</tt> and <tt class=\" \">Access-Control-Allow-Headers</tt>.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-defaultConnector\">\n        <h3 class=\"heading \"><span>defaultConnector</span></h3>\n    <p>Specify the name of the default connector. Used if a Model does not specify one.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-ignoreDuplicateModels\">\n        <h3 class=\"heading \"><span>ignoreDuplicateModels</span></h3>\n    <p>Set to <tt class=\" \">true</tt> to ignore duplicate Model definitions.  Defaults to false, which will throw an error if a model definition is duplicated.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-logging\">\n        <h3 class=\"heading \"><span>logging</span></h3>\n    <p>Configures the logger utility.  The <tt class=\" \">logging</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Default    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>logdir    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>String    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>./logs    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of the transaction logs if enabled.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">transactionLogEnabled    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Boolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to <tt class=\" \">true</tt> to enable transaction logs.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-logLevel\">\n        <h3 class=\"heading \"><span>logLevel</span></h3>\n    <p>Sets the log level for the logger utility.  Accepted values are <tt class=\" \">debug</tt>, <tt class=\" \">error</tt>, <tt class=\" \">fatal</tt>, <tt class=\" \">info</tt>, <tt class=\" \">trace</tt>, or <tt class=\" \">warn</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-port\">\n        <h3 class=\"heading \"><span>port</span></h3>\n    <p>Sets the port number for the server if the <tt class=\" \">PORT</tt> environment variable is not set.  By default, the port is set to 8080.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-ssl\">\n        <h3 class=\"heading \"><span>ssl</span></h3>\n    <p>Configures SSL settings for the server.  The <tt class=\" \">ssl</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #2b4771;\">\nDefault    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #2b4771;\">\nDescription    </span>\n    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ssl    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>default    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A dictionary configuring SSL for your server. See <a class=\"external-link external-link\" href=\"http://localhost:8080/arrow/index.html#heading-configuring-ssl\" target=\"_blank\">Configuring SSL</a> below for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ssl.port    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8443    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>If the <tt class=\" \">ssl</tt> config value is provided, this will control the port it will listen for HTTPS traffic on.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ssl.key    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Private key to use for SSL.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ssl.cert    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Public x509 certificate to use.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ssl.pfx    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Certificate, Private key and CA certificates to use for SSL.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ssl.passphrase    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A string of passphrase for the private key or pfx.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><a class=\"external-link external-link\" href=\"http://ssl.ca/\" target=\"_blank\">ssl.ca</a>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>An authority certificate or array of authority certificates to check the remote host against.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43305028_ConsoleConfiguration-ConfiguringSSL\">\n        <h3 class=\"heading \"><span>Configuring SSL</span></h3>\n    <p>In order to use HTTPS for your app, you will need to add the following to one of your configuration files:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">sslInProduction: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    ssl: {</code></div>\n<div class=\"line\"><code class=\"plain\">        port: 8443,</code></div>\n<div class=\"line\"><code class=\"plain\">        key: fs.readFileSync(</code><code class=\"string\">&apos;./agent2-key.pem&apos;</code><code class=\"plain\">), </code><code class=\"comments\">// This assumes your key and cert reside in your conf directory.</code></div>\n<div class=\"line\"><code class=\"plain\">        cert: fs.readFileSync(</code><code class=\"string\">&apos;./agent2-cert.pem&apos;</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// instead of key and cert, you could use a pfx:</code></div>\n<div class=\"line\"><code class=\"plain\">        pfx: fs.readFileSync(</code><code class=\"string\">&apos;server.pfx&apos;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    }&#xA0;</code></div>\n</div>\n    </div>\n    <p>For more configurations, please refer to the <a class=\"external-link external-link\" href=\"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener\" target=\"_blank\">NodeJS Documentation on HTTPS</a>.    </p>\n    <p>If you are not in production but have configured the SSL dictionary, API Builder will listen for HTTPS traffic. But for production, you need to specify <tt class=\" \">sslInProduction: true</tt> as well.    </p>\n    <p>Now when you start your server, if everything is configured properly, you will see the following in your logs:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">INFO  | SSL bound to port </code><code class=\"value\">8443</code></div>\n</div>\n    </div>\n    <p class=\"highlight bash\">Congratulations, your server is now ready for HTTPS traffic!    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43305028\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Console Configuration"});