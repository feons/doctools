Ext.data.JsonP['Titanium_Android_Calendar_Calendar']({"tagname":"class","name":"Titanium.Android.Calendar.Calendar","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.5"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/Calendar/CalendarProxy.yml","deprecated":{"version":"3.2.0","text":""}},"private":null,"id":"class-Titanium.Android.Calendar.Calendar","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"hidden","tagname":"property","owner":"Titanium.Android.Calendar.Calendar","meta":{"readonly":true,"description":["<p>This property is <code>true</code> when this calendar is hidden.</p>"]},"id":"property-hidden"},{"name":"id","tagname":"property","owner":"Titanium.Android.Calendar.Calendar","meta":{"readonly":true},"id":"property-id"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"},{"name":"name","tagname":"property","owner":"Titanium.Android.Calendar.Calendar","meta":{"readonly":true},"id":"property-name"},{"name":"selected","tagname":"property","owner":"Titanium.Android.Calendar.Calendar","meta":{"readonly":true,"description":["<p>Set to <code>true</code> when this calendar is selected.</p>\n\n<p>See {@link Titanium.Android.Calendar} for examples.</p>"]},"id":"property-selected"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"createEvent","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-createEvent"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getEventById","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getEventById"},{"name":"getEventsBetweenDates","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getEventsBetweenDates"},{"name":"getEventsInDate","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getEventsInDate"},{"name":"getEventsInMonth","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getEventsInMonth"},{"name":"getEventsInYear","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getEventsInYear"},{"name":"getHidden","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getHidden"},{"name":"getId","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getId"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"getName","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getName"},{"name":"getSelected","tagname":"method","owner":"Titanium.Android.Calendar.Calendar","meta":{},"id":"method-getSelected"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":53891,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Android-Calendar-Calendar"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.5</li></ul>","editurl":null,"deprecated":"        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> since 3.2.0 \n</p>\n        </div>\n"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Android.Calendar.Calendar"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.5'>Android 1.5</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Titanium.Android.Calendar.Calendar</strong></div></div></div><div class='doc-contents'><p>An object that represents a single calendar on Android.</p>\n\n        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> since 3.2.0 \n</p>\n        </div>\n<ul class='platforms'><li class='platform-android'\n        title='Android'>1.5</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-hidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-property-hidden' class='name not-expandable'>hidden</a><span> : Boolean</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Indicates whether this calendar is hidden.</p>\n\n</div><div class='long'><p>Indicates whether this calendar is hidden.</p>\n\n<p><p>This property is <code>true</code> when this calendar is hidden.</p>\n\n</p></div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-property-id' class='name not-expandable'>id</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Identifier of this calendar.</p>\n\n</div><div class='long'><p>Identifier of this calendar.</p>\n\n</div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-property-name' class='name not-expandable'>name</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Display name of this calendar.</p>\n\n</div><div class='long'><p>Display name of this calendar.</p>\n\n</div></div></div><div id='property-selected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-property-selected' class='name not-expandable'>selected</a><span> : Boolean</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Indicates whether the calendar is selected.</p>\n\n</div><div class='long'><p>Indicates whether the calendar is selected.</p>\n\n<p><p>Set to <code>true</code> when this calendar is selected.</p>\n\n\n\n\n<p>See <a href=\"#!/api/Titanium.Android.Calendar\" rel=\"Titanium.Android.Calendar\" class=\"docClass\">Titanium.Android.Calendar</a> for examples.</p>\n\n</p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-createEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-createEvent' class='name expandable'>createEvent</a>( <span class='pre'>properties</span> ) : <a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a></div><div class='description'><div class='short'>Creates an event in this calendar. ...</div><div class='long'><p>Creates an event in this calendar.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>properties</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a>&lt;<a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>&gt;<div class='sub-desc'><p>Properties of the event</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getEventById' class='name expandable'>getEventById</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a></div><div class='description'><div class='short'>Gets the event with the specified identifier. ...</div><div class='long'><p>Gets the event with the specified identifier.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>Identifier of the event.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventsBetweenDates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getEventsBetweenDates' class='name expandable'>getEventsBetweenDates</a>( <span class='pre'>date1, date2</span> ) : <a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</div><div class='description'><div class='short'>Gets events that occur between two dates. ...</div><div class='long'><p>Gets events that occur between two dates.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date1</span> : Date<div class='sub-desc'><p>Start date.</p>\n\n</div></li><li><span class='pre'>date2</span> : Date<div class='sub-desc'><p>End date.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventsInDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getEventsInDate' class='name expandable'>getEventsInDate</a>( <span class='pre'>year, month, day</span> ) : <a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</div><div class='description'><div class='short'>Gets events that occur on a specified date. ...</div><div class='long'><p>Gets events that occur on a specified date.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>year</span> : Number<div class='sub-desc'><p>Year of the events.</p>\n\n</div></li><li><span class='pre'>month</span> : Number<div class='sub-desc'><p>Month of the events, as a zero-based integer with January at 0 and December at 11.</p>\n\n</div></li><li><span class='pre'>day</span> : Number<div class='sub-desc'><p>Day of the month of the events.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventsInMonth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getEventsInMonth' class='name expandable'>getEventsInMonth</a>( <span class='pre'>year, month</span> ) : <a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</div><div class='description'><div class='short'>Gets events that occur during a specified month. ...</div><div class='long'><p>Gets events that occur during a specified month.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>year</span> : Number<div class='sub-desc'><p>Year of the events.</p>\n\n</div></li><li><span class='pre'>month</span> : Number<div class='sub-desc'><p>Month of the events, as a zero-based integer with January at 0 and December at 11.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventsInYear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getEventsInYear' class='name expandable'>getEventsInYear</a>( <span class='pre'>year</span> ) : <a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</div><div class='description'><div class='short'>Gets all events that occur during a specified year. ...</div><div class='long'><p>Gets all events that occur during a specified year.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>year</span> : Number<div class='sub-desc'><p>Year of the events.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Android.Calendar.Event\" rel=\"Titanium.Android.Calendar.Event\" class=\"docClass\">Titanium.Android.Calendar.Event</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getHidden' class='name expandable'>getHidden</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the hidden property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Android.Calendar.Calendar-property-hidden\" rel=\"Titanium.Android.Calendar.Calendar-property-hidden\" class=\"docClass\">hidden</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the id property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Android.Calendar.Calendar-property-id\" rel=\"Titanium.Android.Calendar.Calendar-property-id\" class=\"docClass\">id</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the name property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Android.Calendar.Calendar-property-name\" rel=\"Titanium.Android.Calendar.Calendar-property-name\" class=\"docClass\">name</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.Calendar.Calendar'>Titanium.Android.Calendar.Calendar</span></div><a href='#!/api/Titanium.Android.Calendar.Calendar-method-getSelected' class='name expandable'>getSelected</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the selected property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Android.Calendar.Calendar-property-selected\" rel=\"Titanium.Android.Calendar.Calendar-property-selected\" class=\"docClass\">selected</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});