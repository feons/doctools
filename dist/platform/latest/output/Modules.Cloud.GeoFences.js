Ext.data.JsonP['Modules_Cloud_GeoFences']({"tagname":"class","name":"Modules.Cloud.GeoFences","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.2.1","iphone 3.2.1","ipad 3.2.1"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Modules/Cloud/GeoFences/GeoFences.yml","description":["<p>This feature is only available for <strong>enterprise users</strong>, and the current user must be an <strong>application\nadmin</strong> to create, update or remove geo-fence objects.</p>\n\n<p>The ArrowDB GeoFences API lets you manage geographic regions with an associated JSON data payload.\nUse this API to have the device query the ArrowDB server to retrieve data based on a location.</p> \n<h3>Examples</h3>\n<h4>Create a geo-fence object</h4>\n<p>This example creates a new geo-fence object covering a 10 mile radius around San Francisco,\nCA, USA, and checks the response.</p>\n\n<pre><code>  Cloud.GeoFences.create({\n      geo_fence: {\n          \"loc\":{\"coordinates\":[-122.4167,37.7833], \"radius\":\"10/3959\"},\n          \"payload\":{\"alert\":\"24-hour sale at our SF flagship store on 12/26!\"},\n          \"start_time\": \"2014-12-25T00:00\",\n          \"end_time\":\"2014-12-26T19:00\"\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert('Error:\\n' +\n              ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      }\n  });\n</code></pre><h4>Query for geo-fence objects</h4>\n<p>This example searches for geo-fence objects within 2 km of Oakland, CA, USA, and checks the response.</p>\n\n<pre><code>  Cloud.GeoFences.query({\n      where:{\n          \"loc\": { \n              \"$nearSphere\" : { \n                  \"$geometry\" : { \"type\" : \"Point\", \"coordinates\" : [-122.2708,37.8044] },\n                      \"$maxDistance\" : 2000\n                  }\n              }\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert('Error:\\n' +\n              ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      }\n  });\n</code></pre><h4>Update a geo-fence object</h4>\n<p>This example updates a geo-fence object and checks the response.</p>\n\n<pre><code>Cloud.GeoFences.update({\n    id: geoFenceId,\n    geo_fence:{\"loc\":{\"place_id\":\"531a1217447d300f05003b69\",\"radius\":\"2/6371\"}}\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e.geo_fences));\n    } else {\n        alert('Error:\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre><h4>Delete a geo-fence object</h4>\n<p>This example deletes a geo-fence object and checks the response.</p>\n\n<pre><code>Cloud.GeoFences.remove({\n    id: geoFenceId\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e));\n    } else {\n        alert('Error:\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre>"]},"private":null,"id":"class-Modules.Cloud.GeoFences","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"create","tagname":"method","owner":"Modules.Cloud.GeoFences","meta":{"description":["<p>You must be an <strong>enterprise application admin</strong> to use this API.</p>\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-create\">geo_fences/create.json</a>\nfor the request parameters supported by this method.</p>\n\n<p>Data is returned in the <code>geo_fences</code> property of the parameter passed to the callback.</p>"]},"id":"method-create"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"query","tagname":"method","owner":"Modules.Cloud.GeoFences","meta":{"description":["<p>You must be an <strong>enterprise application user</strong> to use this API.</p>\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-query\">geo_fences/query.json</a>\nfor the request parameters supported by this method.</p>\n\n<p>Data is returned in the <code>geo_fences</code> property of the parameter passed to the callback.</p>"]},"id":"method-query"},{"name":"remove","tagname":"method","owner":"Modules.Cloud.GeoFences","meta":{"description":["<p>You must be an <strong>enterprise application admin</strong> to use this API.</p>\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-delete\">geo_fences/delete.json</a>\nfor the request parameters supported by this method.</p>"]},"id":"method-remove"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"},{"name":"update","tagname":"method","owner":"Modules.Cloud.GeoFences","meta":{"description":["<p>You must be an <strong>enterprise application admin</strong> to use this API.</p>\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-update\">geo_fences/update.json</a>\nfor the request parameters supported by this method.</p>\n\n<p>Data is returned in the <code>geo_fences</code> property of the parameter passed to the callback.</p>"]},"id":"method-update"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":37382,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-Cloud-GeoFences"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.1</li><li class='platform-iphone'\n        title='iPhone'>3.2.1</li><li class='platform-ipad'\n        title='iPad'>3.2.1</li></ul>","editurl":null,"description":"<p><p>This feature is only available for <strong>enterprise users</strong>, and the current user must be an <strong>application\nadmin</strong> to create, update or remove geo-fence objects.</p>\n\n\n\n\n<p>The ArrowDB GeoFences API lets you manage geographic regions with an associated JSON data payload.\nUse this API to have the device query the ArrowDB server to retrieve data based on a location.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Create a geo-fence object</h4>\n\n\n<p>This example creates a new geo-fence object covering a 10 mile radius around San Francisco,\nCA, USA, and checks the response.</p>\n\n\n\n\n<pre><code>  Cloud.GeoFences.create({\n      geo_fence: {\n          \"loc\":{\"coordinates\":[-122.4167,37.7833], \"radius\":\"10/3959\"},\n          \"payload\":{\"alert\":\"24-hour sale at our SF flagship store on 12/26!\"},\n          \"start_time\": \"2014-12-25T00:00\",\n          \"end_time\":\"2014-12-26T19:00\"\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert('Error:\\n' +\n              ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      }\n  });\n</code></pre>\n\n\n<h4>Query for geo-fence objects</h4>\n\n\n<p>This example searches for geo-fence objects within 2 km of Oakland, CA, USA, and checks the response.</p>\n\n\n\n\n<pre><code>  Cloud.GeoFences.query({\n      where:{\n          \"loc\": { \n              \"$nearSphere\" : { \n                  \"$geometry\" : { \"type\" : \"Point\", \"coordinates\" : [-122.2708,37.8044] },\n                      \"$maxDistance\" : 2000\n                  }\n              }\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert('Error:\\n' +\n              ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      }\n  });\n</code></pre>\n\n\n<h4>Update a geo-fence object</h4>\n\n\n<p>This example updates a geo-fence object and checks the response.</p>\n\n\n\n\n<pre><code>Cloud.GeoFences.update({\n    id: geoFenceId,\n    geo_fence:{\"loc\":{\"place_id\":\"531a1217447d300f05003b69\",\"radius\":\"2/6371\"}}\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e.geo_fences));\n    } else {\n        alert('Error:\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre>\n\n\n<h4>Delete a geo-fence object</h4>\n\n\n<p>This example deletes a geo-fence object and checks the response.</p>\n\n\n\n\n<pre><code>Cloud.GeoFences.remove({\n    id: geoFenceId\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e));\n    } else {\n        alert('Error:\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Modules.Cloud.GeoFences"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.2.1'>Android 3.2.1</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.2.1'>iPhone 3.2.1</li><li class='platform-ipad' title='iPad since Titanium SDK 3.2.1'>iPad 3.2.1</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Modules.Cloud.GeoFences</strong></div></div></div><div class='doc-contents'><p>Provides methods for accessing ArrowDB geo-fence objects.</p>\n\n<p><p>This feature is only available for <strong>enterprise users</strong>, and the current user must be an <strong>application\nadmin</strong> to create, update or remove geo-fence objects.</p>\n\n\n\n\n<p>The ArrowDB GeoFences API lets you manage geographic regions with an associated JSON data payload.\nUse this API to have the device query the ArrowDB server to retrieve data based on a location.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Create a geo-fence object</h4>\n\n\n<p>This example creates a new geo-fence object covering a 10 mile radius around San Francisco,\nCA, USA, and checks the response.</p>\n\n\n\n\n<pre><code>  Cloud.GeoFences.create({\n      geo_fence: {\n          \"loc\":{\"coordinates\":[-122.4167,37.7833], \"radius\":\"10/3959\"},\n          \"payload\":{\"alert\":\"24-hour sale at our SF flagship store on 12/26!\"},\n          \"start_time\": \"2014-12-25T00:00\",\n          \"end_time\":\"2014-12-26T19:00\"\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert('Error:\\n' +\n              ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      }\n  });\n</code></pre>\n\n\n<h4>Query for geo-fence objects</h4>\n\n\n<p>This example searches for geo-fence objects within 2 km of Oakland, CA, USA, and checks the response.</p>\n\n\n\n\n<pre><code>  Cloud.GeoFences.query({\n      where:{\n          \"loc\": { \n              \"$nearSphere\" : { \n                  \"$geometry\" : { \"type\" : \"Point\", \"coordinates\" : [-122.2708,37.8044] },\n                      \"$maxDistance\" : 2000\n                  }\n              }\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert('Error:\\n' +\n              ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      }\n  });\n</code></pre>\n\n\n<h4>Update a geo-fence object</h4>\n\n\n<p>This example updates a geo-fence object and checks the response.</p>\n\n\n\n\n<pre><code>Cloud.GeoFences.update({\n    id: geoFenceId,\n    geo_fence:{\"loc\":{\"place_id\":\"531a1217447d300f05003b69\",\"radius\":\"2/6371\"}}\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e.geo_fences));\n    } else {\n        alert('Error:\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre>\n\n\n<h4>Delete a geo-fence object</h4>\n\n\n<p>This example deletes a geo-fence object and checks the response.</p>\n\n\n\n\n<pre><code>Cloud.GeoFences.remove({\n    id: geoFenceId\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e));\n    } else {\n        alert('Error:\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});\n</code></pre>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.1</li><li class='platform-iphone'\n        title='iPhone'>3.2.1</li><li class='platform-ipad'\n        title='iPad'>3.2.1</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyProperties' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Cloud.GeoFences'>Modules.Cloud.GeoFences</span></div><a href='#!/api/Modules.Cloud.GeoFences-method-create' class='name expandable'>create</a>( <span class='pre'>parameters, callback</span> )</div><div class='description'><div class='short'>Create a new geofence object. ...</div><div class='long'><p>Create a new geofence object.</p>\n\n<p><p>You must be an <strong>enterprise application admin</strong> to use this API.</p>\n\n\n\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-create\">geo_fences/create.json</a>\nfor the request parameters supported by this method.</p>\n\n\n\n\n<p>Data is returned in the <code>geo_fences</code> property of the parameter passed to the callback.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CloudGeoFenceResponse\" rel=\"CloudGeoFenceResponse\" class=\"docClass\">CloudGeoFenceResponse</a>&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Cloud.GeoFences'>Modules.Cloud.GeoFences</span></div><a href='#!/api/Modules.Cloud.GeoFences-method-query' class='name expandable'>query</a>( <span class='pre'>[parameters], callback</span> )</div><div class='description'><div class='short'>Retrieve a list of places with sorting and pagination. ...</div><div class='long'><p>Retrieve a list of places with sorting and pagination.</p>\n\n<p><p>You must be an <strong>enterprise application user</strong> to use this API.</p>\n\n\n\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-query\">geo_fences/query.json</a>\nfor the request parameters supported by this method.</p>\n\n\n\n\n<p>Data is returned in the <code>geo_fences</code> property of the parameter passed to the callback.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a> (optional)<div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CloudGeoFenceResponse\" rel=\"CloudGeoFenceResponse\" class=\"docClass\">CloudGeoFenceResponse</a>&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Cloud.GeoFences'>Modules.Cloud.GeoFences</span></div><a href='#!/api/Modules.Cloud.GeoFences-method-remove' class='name expandable'>remove</a>( <span class='pre'>parameters, callback</span> )</div><div class='description'><div class='short'>Delete a place. ...</div><div class='long'><p>Delete a place.</p>\n\n<p><p>You must be an <strong>enterprise application admin</strong> to use this API.</p>\n\n\n\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-delete\">geo_fences/delete.json</a>\nfor the request parameters supported by this method.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CloudGeoFenceResponse\" rel=\"CloudGeoFenceResponse\" class=\"docClass\">CloudGeoFenceResponse</a>&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Cloud.GeoFences'>Modules.Cloud.GeoFences</span></div><a href='#!/api/Modules.Cloud.GeoFences-method-update' class='name expandable'>update</a>( <span class='pre'>parameters, callback</span> )</div><div class='description'><div class='short'>Update information about a place. ...</div><div class='long'><p>Update information about a place.</p>\n\n<p><p>You must be an <strong>enterprise application admin</strong> to use this API.</p>\n\n\n\n\n<p>See <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/GeoFences-method-update\">geo_fences/update.json</a>\nfor the request parameters supported by this method.</p>\n\n\n\n\n<p>Data is returned in the <code>geo_fences</code> property of the parameter passed to the callback.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CloudGeoFenceResponse\" rel=\"CloudGeoFenceResponse\" class=\"docClass\">CloudGeoFenceResponse</a>&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});