Ext.data.JsonP['atomic_increment']({"guide":"<h1 id='atomic_increment-section-atomic-increment-operator'>Atomic Increment Operator</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ul>\n<li><a href='#!/guide/atomic_increment-section--inc'>$inc</a><ul><li><a href='#!/guide/atomic_increment-section-examples'>Examples</a></ul>\n</div>\n\n<p>ArrowDB supports the Mongo <code>$inc</code> atomic increment operator.</p>\n\n<h2 id='atomic_increment-section--inc'>$inc</h2>\n\n<p>You can use <code>$inc</code> to increment (or decrement) a <a href=\"#!/guide/customfields\">custom field</a> by a specified value\nin a single update operation.</p>\n\n<ul>\n<li>The operator accepts positive and negative increment amounts</li>\n<li>It can only can be applied to a single field per method call.</li>\n</ul>\n\n\n<p><code>$inc</code> is specified with the following form, where <code>fieldName</code> is the name of the field to update and\n<code>value</code> is a positive (or negative) number to increment (or decrement) <code>fieldName</code> by:</p>\n\n<pre><code>\"fieldName\": { \"$inc:\" value} \n</code></pre>\n\n<p>The operator must be enclosed quotes, as shown above. The following methods support the <code>$inc</code> operator:</p>\n\n<ul>\n<li><a href=\"#!/api/Checkins-method-update\" rel=\"Checkins-method-update\" class=\"docClass\">Checkins.update</a></li>\n<li><a href=\"#!/api/CustomObjects-method-update\" rel=\"CustomObjects-method-update\" class=\"docClass\">CustomObjects.update</a></li>\n<li><a href=\"#!/api/Events-method-update\" rel=\"Events-method-update\" class=\"docClass\">Events.update</a></li>\n<li><a href=\"#!/api/Files-method-update\" rel=\"Files-method-update\" class=\"docClass\">Files.update</a></li>\n<li><a href=\"#!/api/PhotoCollections-method-update\" rel=\"PhotoCollections-method-update\" class=\"docClass\">PhotoCollections.update</a></li>\n<li><a href=\"#!/api/Photos-method-update\" rel=\"Photos-method-update\" class=\"docClass\">Photos.update</a></li>\n<li><a href=\"#!/api/Places-method-update\" rel=\"Places-method-update\" class=\"docClass\">Places.update</a></li>\n<li><a href=\"#!/api/Posts-method-update\" rel=\"Posts-method-update\" class=\"docClass\">Posts.update</a></li>\n<li><a href=\"#!/api/Reviews-method-update\" rel=\"Reviews-method-update\" class=\"docClass\">Reviews.update</a></li>\n<li><a href=\"#!/api/Users-method-update\" rel=\"Users-method-update\" class=\"docClass\">Users.update</a></li>\n<li><a href=\"#!/api/Statuses-method-update\" rel=\"Statuses-method-update\" class=\"docClass\">Statuses.update</a></li>\n</ul>\n\n\n<h3 id='atomic_increment-section-examples'>Examples</h3>\n\n<p>The following example increments the <code>score</code> custom field by 10 in a <a href=\"#!/api/CustomObjects\" rel=\"CustomObjects\" class=\"docClass\">CustomObjects</a> update to a custom object called <code>family</code>:</p>\n\n<pre><code>$ curl -b c.txt -c c.txt -X PUT -F \"id=511117915554f74313000009\" -F \"fields={\"favorite\":\"play xbox 360\", \"pet\":\"shark\" ,\"score\":{'$inc':10}}\" \"https://api.cloud.appcelerator.com/v1/objects/family/update.json?key=TENIhpXtjFbkBbztvfZMwnciOjE9aHjd\"\n{\n  \"meta\": {\n    \"code\": 200,\n    \"status\": \"ok\",\n    \"method_name\": \"updateCustomObject\"\n  },\n  \"response\": {\n    \"family\": [\n      {\n        \"family_name\": \"ACS\",\n        \"score\": 10,\n        \"age\": 40,\n        \"cars\": 1,\n        \"favorite\": \"play xbox 360\",\n        \"pet\": \"shark\",\n        \"id\": \"511117915554f74313000009\",\n        \"created_at\": \"2013-02-05T14:30:41+0000\",\n        \"updated_at\": \"2013-02-05T14:30:41+0000\",\n        \"user\": {\n          \"id\": \"511117905554f74313000003\",\n          \"first_name\": \"Alice\",\n          \"last_name\": \"Gal\",\n          \"created_at\": \"2013-02-05T14:30:40+0000\",\n          \"updated_at\": \"2013-02-05T14:30:41+0000\",\n          \"external_accounts\": [\n\n          ],\n          \"confirmed_at\": \"2013-02-05T14:30:40+0000\",\n          \"username\": \"alice\",\n          \"email\": \"alice@gal.com\",\n          \"admin\": \"false\"\n        }\n      }\n    ]\n  }\n}\n</code></pre>\n\n<p>The following example decrements the <code>score</code> custom field by 20 in an <a href=\"#!/api/Checkins\" rel=\"Checkins\" class=\"docClass\">Checkins</a> update:</p>\n\n<pre><code>$ curl -b c.txt -c c.txt -X PUT -F \"checkin_id=511111945554f742d300000b\" -F \"custom_fields={\"favorite\":\"play xbox 360\", \"pet\":\"shark\" ,\"score\":{'$inc':-20}}\" \"https://api.cloud.appcelerator.com/v1/checkins/update.json?key=TENIhpXtjFbkBbztvfZMwnciOjE9aHjd\"\n{\n  \"meta\": {\n    \"code\": 200,\n    \"status\": \"ok\",\n    \"method_name\": \"updateCheckin\"\n  },\n  \"response\": {\n    \"checkins\": [\n      {\n        \"id\": \"511111945554f742d300000b\",\n        \"created_at\": \"2013-02-05T14:05:08+0000\",\n        \"updated_at\": \"2013-02-05T14:05:08+0000\",\n        \"place\": {\n          \"id\": \"511111935554f742d3000009\",\n          \"name\": \"Maya Restaurant\",\n          \"created_at\": \"2013-02-05T14:05:07+0000\",\n          \"updated_at\": \"2013-02-05T14:05:07+0000\",\n          \"address\": \"303 2nd Street\",\n          \"city\": \"San Francisco\",\n          \"state\": \"CA\",\n          \"country\": \"United States\",\n          \"phone_number\": \"(415) 543-2928\",\n          \"latitude\": 37.784732,\n          \"longitude\": -122.395441,\n          \"google_cid\": \"7106049823222705125\",\n          \"user\": {\n            \"id\": \"511111925554f742d3000003\",\n            \"first_name\": \"Alice\",\n            \"last_name\": \"Gal\",\n            \"created_at\": \"2013-02-05T14:05:06+0000\",\n            \"updated_at\": \"2013-02-05T14:05:08+0000\",\n            \"external_accounts\": [\n\n            ],\n            \"confirmed_at\": \"2013-02-05T14:05:06+0000\",\n            \"username\": \"alice\",\n            \"email\": \"alice@gal.com\",\n            \"admin\": \"false\"\n          }\n        },\n        \"user\": {\n          \"id\": \"511111925554f742d3000003\",\n          \"first_name\": \"Alice\",\n          \"last_name\": \"Gal\",\n          \"created_at\": \"2013-02-05T14:05:06+0000\",\n          \"updated_at\": \"2013-02-05T14:05:08+0000\",\n          \"external_accounts\": [\n\n          ],\n          \"confirmed_at\": \"2013-02-05T14:05:06+0000\",\n          \"username\": \"alice\",\n          \"email\": \"alice@gal.com\",\n          \"admin\": \"false\"\n        },\n        \"custom_fields\": {\n          \"family_name\": \"ACS\",\n          \"score\": 15,\n          \"age\": 40,\n          \"cars\": 1,\n          \"favorite\": \"play xbox 360\",\n          \"pet\": \"shark\"\n        }\n      }\n    ]\n  }\n}\n</code></pre>\n\n<p>If you apply $inc to multiple fields in one Update call, you will get error:</p>\n\n<pre><code>$ curl -b c.txt -c c.txt -X PUT -F \"checkin_id=511111945554f742d300000b\" -F \"custom_fields={\"favorite\":\"play xbox 360\", \"pet\":\"shark\" ,\"score\":{$inc:10}, \"age\":{$inc:10}}\" \"http://api.cloud.appcelerator.com/v1/checkins/update.json?key=HSejkGE9ghavAelMJv7bZYNM5HyMhqYq\"\n{\n  \"meta\": {\n    \"status\": \"fail\",\n    \"code\": 400,\n    \"message\": \"$inc operation only support to increase one field once.\",\n    \"method_name\": \"updateCheckin\"\n  }\n}\n</code></pre>\n","title":"Atomic Increment Operator"});