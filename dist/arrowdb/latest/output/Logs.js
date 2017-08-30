Ext.data.JsonP['Logs']({"tagname":"class","name":"Logs","alternateClassNames":[],"mixins":[],"meta":{},"aliases":{},"files":[{"filename":"Logs.yml","href":"/Users/bimmel/Documents/Repositories/cloud_docs/apidoc/Logs/Logs.yml"},{"filename":"querypushlogdetails.yml","href":"/Users/bimmel/Documents/Repositories/cloud_docs/apidoc/Logs/querypushlogdetails.yml"},{"filename":"querypushlogs.yml","href":"/Users/bimmel/Documents/Repositories/cloud_docs/apidoc/Logs/querypushlogs.yml"}],"members":{"cfg":[],"property":[],"method":[{"name":"logs/querypushlogdetails.json","tagname":"method","owner":"Logs","meta":{"hide":false,"loginRequired":true,"adminRequired":true},"id":"method-querypushlogdetails"},{"name":"logs/querypushlogs.json","tagname":"method","owner":"Logs","meta":{"hide":false,"loginRequired":true,"adminRequired":true},"id":"method-querypushlogs"}],"event":[],"css_var":[],"css_mixin":[]},"extends":null,"singleton":null,"private":null,"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>The Logs API provides methods for querying Arrow push notification logs up to 3 months old.\nLogs older than 3 months are purged.</p>\n\n<p>You must be logged in as an application admin to use these methods.</p>\n\n<h3>Log Pagination</h3>\n\n<p>Since the Logs API only supports the <code>where</code> query parameter and not <code>count</code>, <code>limit</code>, <code>skip</code>,\netc., in order to paginate results, execute a\n<a href=\"#!/guide/search_query-section-range-based-query-pagination-examples\">range-based query pagination expression</a>\non the push log's <code>_id</code> field.</p>\n\n<p>For example, by default, the log IDs are presented in descending order. Use the <code>where</code>\nparameter to return logs with an <code>_id</code> less than the last <code>_id</code> value in the previous results to\nretrieve the next list of results.</p>\n\n<pre><code>where={\"_id\": {\"$lt\": last_id }}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-querypushlogdetails' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Logs'>Logs</span></div><strong class='http-method'>GET </strong><a href='#!/api/Logs-method-querypushlogdetails' class='name expandable'>logs/querypushlogdetails.json</a><strong class='signature'>admin-only</strong></div><div class='description'><div class='short'>Performs a custom query for details about a specific Arrow push notification log item specified\nin the query's where ...</div><div class='long'><p>Performs a custom query for details about a specific Arrow push notification log item specified\nin the query's <code>where</code> clause. Returns a <a href=\"#!/api/PushLogDetails\" rel=\"PushLogDetails\" class=\"docClass\">PushLogDetails</a> object for the specified log item.</p>\n<strong>User Login Required: Yes</strong><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>where</span> : String <strong class=\"required signature\">required</strong><div class='sub-desc'><p>Where clause whose value is JSON object consisting of the field name \"push_id\"\nand the ID of the push notification log item to query for, for example:</p>\n\n<pre><code>where={\"push_id\":\"&lt;PUSHLOG_ID&gt;\"}\n</code></pre>\n</div></li></ul><h3 class=\"pa\">Response Parameters</h3><ul><li><span class='pre'>PushLogDetails</span> : <a href=\"#!/api/PushLogDetails\" rel=\"PushLogDetails\" class=\"docClass\">PushLogDetails</a>[]<div class='sub-desc'><p>Single-element array of <a href=\"#!/api/PushLogDetails\" rel=\"PushLogDetails\" class=\"docClass\">PushLogDetails</a> that matched the query.</p>\n</div></li></ul><div class='examples-section'><h3 class='examples-title icon-examples'>Examples</h3><div class='example example-titanium' platform='titanium' platform_name='Titanium SDK'><p>Example request that queries push log details for the specified log item.</p>\n\n<pre><code>Cloud.sendRequest({\n    url : \"logs/querypushlogdetails.json\",\n    method : \"GET\",\n    data: {\n        'where': {'push_id': '54cab4788a1b3c0933bb3bbc'}\n    }\n}, function(e) {// The callback called when the request completes\n    if (e.success) {\n        alert(e.push_log_details[0]);\n    } else {\n        alert('Error:\\n' + ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre>\n</div><div class='example example-rest' platform='rest' platform_name='REST API'><p>Example cURL request that queries push log details for the push notification log item\nwith the ID \"53c98055e4b03fa5a90c2942\", which was returned in a previous call to\n<a href=\"#!/api/Logs-method-querypushlogs\" rel=\"Logs-method-querypushlogs\" class=\"docClass\">querypushlogs</a>.</p>\n\n<pre><code>$ curl -b cookies.txt -c cookies.txt -d 'where={\"push_id\":\"53c98055e4b03fa5a90c2942\"}' -X GET \"http://api.cloud.appcelerator.com/v1/logs/querypushlogdetails.json?key=&lt;APP_KEY&gt;&amp;pretty_json=true\"\n</code></pre>\n\n<p>Example JSON response:</p>\n\n<pre><code>{\n  \"meta\": {\n    \"code\": 200,\n    \"status\": \"ok\",\n    \"method_name\": \"queryPushLogDetails\",\n    \"more\": false\n  },\n  \"response\": {\n    \"push_log_details\": [\n      {\n        \"_id\": \"53c98055e4b03fa5a90c2942\",\n        \"android_types\": [\n          {\n            \"GCM\": 2\n          }\n        ],\n        \"app_id\": \"52b392a7f00ed00b1b000194\",\n        \"channel\": \"#broadcast\",\n        \"created_at\": \"2014-07-18T20:15:17.562Z\",\n        \"device_count\": 2,\n        \"locked_at\": \"2014-07-18T20:15:43.555Z\",\n        \"pem_sent_at\": \"2014-07-18T20:15:43.863Z\",\n        \"push_id\": \"53c980549d8b700fc70008e6\",\n        \"send_status\": 1,\n        \"types\": [\n          {\n            \"android\": 2\n          }\n        ],\n        \"updated_at\": \"2014-07-18T20:15:16.579Z\"\n      }\n    ]\n  }\n}\n</code></pre>\n</div><div class='example example-ios' platform='ios' platform_name='iOS SDK'><p>Example request to retrieve the specified push log.</p>\n\n<pre><code>NSDictionary *params = @{\n    @\"where\": @{\n        @\"push_id\" : @\"54cbd82802d20d097b09cf80\"\n    }\n};\n\n[[APSCloud sharedInstance] sendRequest:@\"logs/querypushlogdetails.json\" method:@\"GET\" data:params handler:^(APSResponse *e){\n    if (e.success) {\n        [[[UIAlertView alloc] initWithTitle:@\"Success\" message:e.responseString delegate:nil cancelButtonTitle:@\"OK\" otherButtonTitles:nil] show];\n    } else {\n        [[[UIAlertView alloc] initWithTitle:@\"Error\" message:e.errorMessage delegate:nil cancelButtonTitle:@\"OK\" otherButtonTitles:nil] show];\n    }\n}];\n</code></pre>\n</div><div class='example example-android' platform='android' platform_name='Android SDK'><p>Example request to retrieve the specified push log.</p>\n\n<pre><code>HashMap&lt;String,Object&gt; data = new HashMap&lt;String,Object&gt;();\nJSONObject params = new JSONObject(\"{'push_id': '54cc212e8fc90956e00e3a10'}\");\ndata.put(\"where\", params);\n\nAPSCloud.getInstance().sendRequest(\"logs/querypushlogdetails.json\", \"GET\", data, new APSResponseHandler() {\n    public void onResponse(final APSResponse e) {\n        if (e.getSuccess()) {\n            new AlertDialog.Builder(currentActivity)\n            .setTitle(\"Success!\").setMessage(e.getResponse().toString())\n            .setPositiveButton(android.R.string.ok, null)\n            .setIcon(android.R.drawable.ic_dialog_info)\n            .show();\n        }\n        else {\n            Log.e(\"REST\", e.getErrorMessage());\n        }\n    }\n\n    @Override\n    public void onException(APSCloudException e) {\n        Log.e(\"APSUsers\", \"Exception throw: \" + e.toString());\n    }\n});\n</code></pre>\n</div><div class='example example-nodejs' platform='nodejs' platform_name='Node.js SDK'><p>Example Node.js call:</p>\n\n<pre><code>var ArrowDB = require('arrowdb'),\n    arrowDBApp = new ArrowDB('&lt;App Key&gt;');\narrowDBApp.logsQueryPushLogDetails({\n    where: {'push_id': '54cab4788a1b3c0933bb3bbc'}\n}, function(err, result) {\n    if (err) {\n        console.error(err.message);\n    } else {\n        result.body.response.push_log_details.forEach(function (log) {\n            console.log(log);\n        });\n    }\n});\n</code></pre>\n</div></div></div></div></div><div id='method-querypushlogs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Logs'>Logs</span></div><strong class='http-method'>GET </strong><a href='#!/api/Logs-method-querypushlogs' class='name expandable'>logs/querypushlogs.json</a><strong class='signature'>admin-only</strong></div><div class='description'><div class='short'>Performs a custom query of Arrow push notification logs with sorting and pagination. ...</div><div class='long'><p>Performs a custom query of Arrow push notification logs with sorting and pagination. Returns\na list of <a href=\"#!/api/PushLogs\" rel=\"PushLogs\" class=\"docClass\">PushLogs</a> objects that matched the query parameters.</p>\n\n<p>To get additional details about a specific PushLogs item, pass the value of <a href=\"#!/api/PushLogs-property-_id\" rel=\"PushLogs-property-_id\" class=\"docClass\">PushLogs._id</a> to\na <a href=\"#!/api/Logs-method-querypushlogdetails\" rel=\"Logs-method-querypushlogdetails\" class=\"docClass\">querypushlogdetails</a> query.</p>\n<strong>User Login Required: Yes</strong><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>where</span> : String<div class='sub-desc'><p>Constraint values for fields. <code>where</code> should be JSON encoded.</p>\n\n<p>If <code>where</code> is not specified, query returns all objects.</p>\n</div></li></ul><h3 class=\"pa\">Response Parameters</h3><ul><li><span class='pre'>PushLogs</span> : <a href=\"#!/api/PushLogs\" rel=\"PushLogs\" class=\"docClass\">PushLogs</a>[]<div class='sub-desc'><p>List of PushLogs matching the query.</p>\n</div></li></ul><div class='examples-section'><h3 class='examples-title icon-examples'>Examples</h3><div class='example example-titanium' platform='titanium' platform_name='Titanium SDK'><p>Example request that queries for push logs. The callback outputs the push ID and payload\nif the request was successful.</p>\n\n<pre><code>Cloud.sendRequest({\n    url : \"logs/querypushlogs.json\",\n    method : \"GET\",\n}, function(e) {\n    if (e.success) {\n        e.push_logs.forEach(function(log){\n            Ti.API.info(log._id + \":\" + JSON.stringify(log.payload));\n        });\n    } else {\n        alert('Error:\\n' + ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre>\n</div><div class='example example-rest' platform='rest' platform_name='REST API'><p>Example cURL request:</p>\n\n<pre><code>$ curl -b cookies.txt -c cookies.txt -X GET \"http://api.cloud.appcelerator.com/v1/logs/querypushlogs.json?key=&lt;API_KEY&gt;&amp;pretty_json=true\"\n</code></pre>\n\n<p>Example JSON response:</p>\n\n<pre><code>{\n  \"meta\": {\n    \"code\": 200,\n    \"status\": \"ok\",\n    \"method_name\": \"queryPushLogs\",\n    \"more\": false\n  },\n  \"response\": {\n    \"push_logs\": [\n      {\n        \"_id\": \"539b589fc8499a086d000200\",\n        \"app_id\": \"527032812a30cf5d96000003\",\n        \"created_at\": \"2014-06-13T20:01:35.297Z\",\n        \"expire_after_seconds\": null,\n        \"geo_condition\": null,\n        \"locked_at\": \"2014-06-13T20:01:36.833Z\",\n        \"payload\": \"{\\\"alert\\\":\\\"hello\\\",\\\"sound\\\":\\\"none\\\",\\\"vibrate\\\":false}\",\n        \"to_ids\": null,\n        \"updated_at\": \"2014-06-13T20:01:35.297Z\",\n        \"user_id\": null,\n        \"version\": null\n      },\n      {\n        \"_id\": \"53581c34d8d8f2b28a000098\",\n        \"channel\": \"test\",\n        \"payload\": \"test schedule\",\n        \"geo_condition\": \"{\\\"$geoWithin\\\":{\\\"$centerSphere\\\":[[-122.0507049560547,37.38685989379883],0.00252589]}}\",\n        \"app_id\": \"527032812a30cf5d96000003\",\n        \"push_schedule_id\": \"53581c34d8d8f2b28a000097\",\n        \"scheduled_at\": \"2014-10-24T00:00:00.000Z\",\n        \"created_at\": \"2014-04-23T20:01:56.409Z\",\n        \"updated_at\": \"2014-04-23T20:01:56.409Z\"\n      },\n      {\n        \"_id\": \"53581a8ed8d8f2b28a000096\",\n        \"channel\": \"test\",\n        \"payload\": \"test schedule\",\n        \"app_id\": \"527032812a30cf5d96000003\",\n        \"push_schedule_id\": \"53581a8ed8d8f2b28a000095\",\n        \"scheduled_at\": \"2014-10-24T00:00:00.000Z\",\n        \"created_at\": \"2014-04-23T19:54:54.163Z\",\n        \"updated_at\": \"2014-04-23T19:54:54.163Z\"\n      }\n    ]\n  }\n}\n</code></pre>\n</div><div class='example example-ios' platform='ios' platform_name='iOS SDK'><p>Example request to retrieve all push logs.</p>\n\n<pre><code>[[APSCloud sharedInstance] sendRequest:@\"logs/querypushlogs.json\" method:@\"GET\" data:nil handler:^(APSResponse *e){\n    if (e.success) {\n        [[[UIAlertView alloc] initWithTitle:@\"Success\" message:e.responseString delegate:nil cancelButtonTitle:@\"OK\" otherButtonTitles:nil] show];\n    } else {\n        [[[UIAlertView alloc] initWithTitle:@\"Error\" message:e.errorMessage delegate:nil cancelButtonTitle:@\"OK\" otherButtonTitles:nil] show];\n    }\n}];\n</code></pre>\n</div><div class='example example-android' platform='android' platform_name='Android SDK'><p>Example request to retrieve all push logs.</p>\n\n<pre><code>try {\n    APSCloud.getInstance().sendRequest(\"logs/querypushlogs.json\", \"GET\", null, new APSResponseHandler() {\n        public void onResponse(final APSResponse e) {\n            if (e.getSuccess()) {\n                new AlertDialog.Builder(currentActivity)\n                .setTitle(\"Success!\").setMessage(e.getResponse().toString())\n                .setPositiveButton(android.R.string.ok, null)\n                .setIcon(android.R.drawable.ic_dialog_info)\n                .show();\n            }\n            else {\n                Log.e(\"APSCloud\", e.getErrorMessage());\n            }\n        }\n\n        @Override\n        public void onException(APSCloudException e) {\n            Log.e(\"APSCloud\", \"Exception throw: \" + e.toString());\n        }\n    });\n} catch (APSCloudException e) {\n    Log.e(\"APSCloud\", \"Error: \" + e.toString());\n}\n</code></pre>\n</div><div class='example example-nodejs' platform='nodejs' platform_name='Node.js SDK'><p>Example Node.js call:</p>\n\n<pre><code>var ArrowDB = require('arrowdb'),\n    arrowDBApp = new ArrowDB('&lt;App Key&gt;');\narrowDBApp.logsQueryPushLogs({\n    where: {'likeable_type': 'Status'}\n}, function(err, result) {\n    if (err) {\n        console.error(err.message);\n    } else {\n        result.body.response.push_logs.forEach(function (log) {\n            console.log(log);\n        });\n    }\n});\n</code></pre>\n</div></div></div></div></div></div></div></div></div>"});