Ext.data.JsonP['Modules_Performance']({"tagname":"class","name":"Modules.Performance","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.1.1","iphone 3.1.1","ipad 3.1.1"],"editurl":"https://github.com/appcelerator-modules/appcelerator.apm/edit/master/apidoc/Performance.yml","description":["<p class=\"note\">This feature requires an Enterprise subscription!</p>\n\n<p>The Appcelerator Performance Management (APM) module provides hooks to the Crittercism-powered services for\nreal-time crash reporting and app monitoring to capture errors and provide valuable diagnostic\ninformation of your mobile application.</p>\n\n<p>For information on getting started and usage examples, refer to the\n<a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Performance\">Performance guide</a></p>"]},"private":null,"id":"class-Modules.Performance","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"didCrashOnLastAppLoad","tagname":"method","owner":"Modules.Performance","meta":{},"id":"method-didCrashOnLastAppLoad"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"getNotificationTitle","tagname":"method","owner":"Modules.Performance","meta":{"deprecated":{"version":"3.3.0","text":""},"platform":["android 3.1.1"]},"id":"method-getNotificationTitle"},{"name":"getOptOutStatus","tagname":"method","owner":"Modules.Performance","meta":{},"id":"method-getOptOutStatus"},{"name":"getUserUUID","tagname":"method","owner":"Modules.Performance","meta":{},"id":"method-getUserUUID"},{"name":"init","tagname":"method","owner":"Modules.Performance","meta":{"description":["<p>On the Android platform, you can optionally pass in initialization parameters.</p>"]},"id":"method-init"},{"name":"leaveBreadcrumb","tagname":"method","owner":"Modules.Performance","meta":{"description":["<p>These breadcrumbs are collected and passed to the Performance service.\nThe most recent 100 breadcrumbs before the crash occurred are displayed on the Performance Dashboard.</p>"]},"id":"method-leaveBreadcrumb"},{"name":"logHandledException","tagname":"method","owner":"Modules.Performance","meta":{"description":["<p>Crittercism limits the logging of handled errors to one per minute. Up to five\nerrors are buffered and are subsequently sent after the one minute limit.</p>"]},"id":"method-logHandledException"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"},{"name":"setMetadata","tagname":"method","owner":"Modules.Performance","meta":{"description":["<p>The data is stored in a dictionary and displayed on the developer portal\nwhen viewing a user profile.</p>"]},"id":"method-setMetadata"},{"name":"setOptOutStatus","tagname":"method","owner":"Modules.Performance","meta":{},"id":"method-setOptOutStatus"},{"name":"setUsername","tagname":"method","owner":"Modules.Performance","meta":{"description":["<p>Updates only if there has been a change to the username from previous settings.</p>"]},"id":"method-setUsername"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":31685,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-Performance"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.1</li><li class='platform-iphone'\n        title='iPhone'>3.1.1</li><li class='platform-ipad'\n        title='iPad'>3.1.1</li></ul>","editurl":null,"description":"<p><p class=\"note\">This feature requires an Enterprise subscription!</p>\n\n\n\n\n<p>The Appcelerator Performance Management (APM) module provides hooks to the Crittercism-powered services for\nreal-time crash reporting and app monitoring to capture errors and provide valuable diagnostic\ninformation of your mobile application.</p>\n\n\n\n\n<p>For information on getting started and usage examples, refer to the\n<a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Performance\">Performance guide</a></p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Modules.Performance"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.1.1'>Android 3.1.1</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.1.1'>iPhone 3.1.1</li><li class='platform-ipad' title='iPad since Titanium SDK 3.1.1'>iPad 3.1.1</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Modules.Performance</strong></div></div></div><div class='doc-contents'><p>Add-on module that provides support for real-time crash reporting and performance monitoring services.</p>\n\n<p><p class=\"note\">This feature requires an Enterprise subscription!</p>\n\n\n\n\n<p>The Appcelerator Performance Management (APM) module provides hooks to the Crittercism-powered services for\nreal-time crash reporting and app monitoring to capture errors and provide valuable diagnostic\ninformation of your mobile application.</p>\n\n\n\n\n<p>For information on getting started and usage examples, refer to the\n<a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Performance\">Performance guide</a></p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.1</li><li class='platform-iphone'\n        title='iPhone'>3.1.1</li><li class='platform-ipad'\n        title='iPad'>3.1.1</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-didCrashOnLastAppLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-didCrashOnLastAppLoad' class='name expandable'>didCrashOnLastAppLoad</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the application crashed on the previous session else returns false. ...</div><div class='long'><p>Returns <code>true</code> if the application crashed on the previous session else returns <code>false</code>.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNotificationTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-getNotificationTitle' class='name expandable'>getNotificationTitle</a>( <span class='pre'></span> ) : String<strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Returns a string consisting of the notification title. ...</div><div class='long'><p>Returns a string consisting of the notification title. If not available, returns an empty string.</p>\n\n        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> since 3.3.0 \n</p>\n        </div>\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.1</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOptOutStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-getOptOutStatus' class='name expandable'>getOptOutStatus</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the user opt out to send information else returns false. ...</div><div class='long'><p>Returns <code>true</code> if the user opt out to send information else returns <code>false</code>.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUserUUID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-getUserUUID' class='name expandable'>getUserUUID</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns a string consisting of the UUID generated by Crittercism for user identification. ...</div><div class='long'><p>Returns a string consisting of the UUID generated by Crittercism for user identification.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-init' class='name expandable'>init</a>( <span class='pre'>[appid], [config]</span> ) : void</div><div class='description'><div class='short'>Initializes the module. ...</div><div class='long'><p>Initializes the module.</p>\n\n<p><p>On the Android platform, you can optionally pass in initialization parameters.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>appid</span> : String (optional)<div class='sub-desc'><p>APM App ID found in the <code>tiapp.xml</code> file or the Appcelerator Performance dashboard.</p>\n\n\n\n\n<p>By default, if this parameter is not specified, the module uses the value stored\nas the <code>com-appcelerator-apm-id</code> key in the <code>tiapp.xml</code> file to initialize the module.</p>\n\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/InitParams\" rel=\"InitParams\" class=\"docClass\">InitParams</a> (optional)<div class='sub-desc'><p>Android-specific initialization parameters.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-leaveBreadcrumb' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-leaveBreadcrumb' class='name expandable'>leaveBreadcrumb</a>( <span class='pre'>breadcrumb</span> )</div><div class='description'><div class='short'>Leaves a breadcrumb trail in your code to get a playback of events leading up to a crash. ...</div><div class='long'><p>Leaves a breadcrumb trail in your code to get a playback of events leading up to a crash.</p>\n\n<p><p>These breadcrumbs are collected and passed to the Performance service.\nThe most recent 100 breadcrumbs before the crash occurred are displayed on the Performance Dashboard.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>breadcrumb</span> : String<div class='sub-desc'><p>Up to 140 characters to identify the event or application state.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-logHandledException' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-logHandledException' class='name expandable'>logHandledException</a>( <span class='pre'>error</span> )</div><div class='description'><div class='short'>Used to track handled errors. ...</div><div class='long'><p>Used to track handled errors.</p>\n\n<p><p>Crittercism limits the logging of handled errors to one per minute. Up to five\nerrors are buffered and are subsequently sent after the one minute limit.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/Error\" rel=\"Error\" class=\"docClass\">Error</a><div class='sub-desc'><p>Error to log.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setMetadata' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-setMetadata' class='name expandable'>setMetadata</a>( <span class='pre'>key, value</span> )</div><div class='description'><div class='short'>Used to set a single pair of arbitrary user metadata. ...</div><div class='long'><p>Used to set a single pair of arbitrary user metadata.</p>\n\n<p><p>The data is stored in a dictionary and displayed on the developer portal\nwhen viewing a user profile.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Metadata key.</p>\n\n</div></li><li><span class='pre'>value</span> : String/Number<div class='sub-desc'><p>Metadata value. Can be either an integer or string.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setOptOutStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-setOptOutStatus' class='name expandable'>setOptOutStatus</a>( <span class='pre'>optOutStatus</span> )</div><div class='description'><div class='short'>Sets the users opt-out status from sending any and all information to the Performance service. ...</div><div class='long'><p>Sets the users opt-out status from sending <strong>any and all</strong> information to the Performance service.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>optOutStatus</span> : Boolean<div class='sub-desc'><p>If set to <code>true</code>, data is not sent to the Performance service.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setUsername' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Performance'>Modules.Performance</span></div><a href='#!/api/Modules.Performance-method-setUsername' class='name expandable'>setUsername</a>( <span class='pre'>username</span> )</div><div class='description'><div class='short'>Sets a username to differentiate user metadata for crash reports. ...</div><div class='long'><p>Sets a username to differentiate user metadata for crash reports.</p>\n\n<p><p>Updates only if there has been a change to the username from previous settings.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>username</span> : String<div class='sub-desc'><p>Up to 32 characters to set to identify a user.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});