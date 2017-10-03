Ext.data.JsonP['Models_-_Definition']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Models - Definition</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49153281\" class=\"content\">\n                        <h1>Models - Definition</h1>\n    <p>Place all Model files in the <tt class=\" \">models</tt> folder. You can only declare one model per file. An Model file is a JavaScript file, which:    </p>\n<ol class=\" \"><li class=\" \">    <p>Loads the <tt class=\" \">arrow</tt> module.    </p>\n</li><li class=\" \">    <p>Calls the module&apos;s <tt class=\" \">createModel(&apos;name&apos;, schema)</tt> method (or another <tt class=\" \">Model</tt> method), passing in the name of the model as the first parameter and an object defining the model schema as the second parameter.    </p>\n</li><li class=\" \">    <p>Exports the defined endpoint using the <tt class=\" \">module.exports</tt> variable.    </p>\n</li></ol>    <p>Set the following keys in the object passed to the <tt class=\" \">createModel()</tt> method to define the model:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Required    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>fields    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>An object that represents the model&#x2019;s schema define as key-value pairs. The key is the name of the field and the value is the <tt class=\" \">fields</tt> object. See the next table for details.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>connector    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Connector to which the model is bound (string). Each model can only have <strong class=\" \">one</strong> connector. Connectors are responsible for reading and writing data from/to their data source.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>documented    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Since Release 5.0.0.</strong> Determines whether to generate API documentation (true) or not (false). The default value is <tt class=\" \">true</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>metadata    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Used to provide connector specific configuration (e.g., mapping the model to a specific database table for the MySQL connector or defining the join properties).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>autogen    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Used to determine whether to generate API endpoints directly from the model. The default value is <tt class=\" \">true</tt>. If the endpoint is auto-generated, you do not need to create an API endpoint definition.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>actions    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>An array of data operations supported by the model. The valid values are: &#x2018;create&#x2019;, &#x2018;read&#x2019;, &#x2018;update&#x2019;, and &#x2018;delete&#x2019;. By default, all are supported by the model.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>plural    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A string used as the property name when your API endpoint returns an array. By default, the plural value is the plural of the model name. For example, if your model is named <strong class=\" \">car</strong>, the default plural would be <strong class=\" \">cars</strong>. Note: this value can be set on an API or a model.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>singular    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A string used as the property name when your API endpoint returns a single record. By default, the singular value is the name of the model. Note: this value can be set on an API or a model.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>before    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>One or more blocks to be executed before the request. Blocks are referenced by their <tt class=\" \">name</tt> property. If you want to execute multiple blocks, you should specify them as an array of block names. If multiple blocks are specified, they are executed in the order specified.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>after    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>One or more blocks to be executed after the request. Blocks are referenced by their <tt class=\" \">name</tt> property. If you want to execute multiple blocks, you should specify them as an array of block names. If multiple blocks are specified, they are executed in the order specified.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-2 \" id=\"src-49153281_Models-Definition-Fielddefinition\">\n        <h2 class=\"heading \"><span>Field definition</span></h2>\n    <p>The <tt class=\" \">fields</tt> property (mentioned above) supports a number of sub-properties as well. The table below outlines these properties.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Required    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>type    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The field primitive type plus others (e.g., &#x2018;string&#x2019;, &apos;number&apos;, &apos;boolean&apos;, &apos;object&apos;, &apos;array&apos;, &apos;date&apos;). Type can be any valid JavaScript primitive type. Type can be specified as a string (e.g., &#x2018;string&#x2019;) or by the type class (e.g., String).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>required    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Specifies whether the field is required. The default value is <tt class=\" \">false</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>validator    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A function or regular expression that validates the value of the field. The function is passed the data to validate and should return either <tt class=\" \">null</tt> or <tt class=\" \">undefined</tt> if the validation succeeds. Any other return value means the validation failed, and the return value will be used in the exception message. If a regular expression is used, it should evaluate to either true or false.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>name    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Used if the model field name is different than the field name in the connector&#x2019;s model or the underlying data source for the field name. For example, if my model field is <tt class=\" \">first_name</tt> and the column in a MySQL database is <tt class=\" \">fname</tt>, the value of the <tt class=\" \">name</tt> property should be <tt class=\" \">&apos;fname&apos;</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>default    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The default value for the field.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>description    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The description of the field (used for API documentation).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>readonly    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Either <tt class=\" \">true</tt> or <tt class=\" \">false</tt>. If <tt class=\" \">true</tt> the field will be read-only and any attempt to write the field value will fail.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>maxlength    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The max length of the field (specified as an integer)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>get    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A function used to set the value of a property that will be sent to the client. This property is useful if you want to define a custom field where the value is derived.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>set    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A function used to set the value of a property that will be sent to the connector.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>custom    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>This property should be specified and set to <tt class=\" \">true</tt> if you are defining a custom field. A custom field is one that does not exist in the underlying data source for the connector you specified.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>model    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Model name of the field property. This is either the logical name of a custom model or a connector model name in the form <strong class=\" \">connector/model_name</strong> (e.g., appc.mysql/employee)    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153281_Models-Definition-Modelschemaexample\">\n        <h2 class=\"heading \"><span>Model schema example</span></h2>\n    <p>The example below creates the <tt class=\" \">car</tt> model with the specified schema. The car models will be stored in Mobile Backend Services as CustomObjects. Since the <tt class=\" \">autogen</tt> property was not set to <tt class=\" \">false</tt>, API Builder automatically generates the pre-define endpoints for the client to access the car models using the <tt class=\" \">&lt;SEVER_ADDRESS&gt;/</tt><tt class=\" \">api/car</tt> endpoints.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var Arrow = require(</code><code class=\"string\">&apos;arrow&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var car = Arrow.createModel(</code><code class=\"string\">&apos;car&apos;</code><code class=\"plain\">, {</code></div>\n<div class=\"line\"><code class=\"plain\">    fields: {</code></div>\n<div class=\"line\"><code class=\"plain\">        make:{type:String, description:</code><code class=\"string\">&apos;the make of a car &apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">        model:{type:String, description:</code><code class=\"string\">&apos;the model of the car&apos;</code><code class=\"plain\">, required:</code><code class=\"keyword\">true</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">        year: {type:Number, description:</code><code class=\"string\">&apos;year the car was made&apos;</code><code class=\"plain\">, required:</code><code class=\"keyword\">true</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">        bluebook: {type:Number, description:</code><code class=\"string\">&apos;kelly bluebook value of the car&apos;</code><code class=\"plain\">, required:</code><code class=\"keyword\">true</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">        mileage: {type:Number, description:</code><code class=\"string\">&apos;current mileage of the car&apos;</code><code class=\"plain\">, required:</code><code class=\"keyword\">true</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    connector: </code><code class=\"string\">&apos;appc.arrowdb&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">module.exports = car;</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153281\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Models - Definition"});