Ext.data.JsonP['Titanium_UI_iOS_StatusBar']({"tagname":"class","name":"Titanium.UI.iOS.StatusBar","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 5.4.0","ipad 5.4.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/StatusBar.yml"},"private":null,"id":"class-Titanium.UI.iOS.StatusBar","members":{"cfg":[],"property":[{"name":"ANIMATION_STYLE_FADE","tagname":"property","owner":"Titanium.UI.iOS.StatusBar","meta":{"readonly":true,"description":["<p>One of the group of status bar animation style constants\n{@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_NONE ANIMATION_STYLE_NONE}, \n{@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_SLIDE ANIMATION_STYLE_SLIDE}, \nand {@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_FADE ANIMATION_STYLE_FADE}.</p>"]},"id":"property-ANIMATION_STYLE_FADE"},{"name":"ANIMATION_STYLE_NONE","tagname":"property","owner":"Titanium.UI.iOS.StatusBar","meta":{"readonly":true,"description":["<p>One of the group of status bar animation style constants \n{@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_NONE ANIMATION_STYLE_NONE}, \n{@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_SLIDE ANIMATION_STYLE_SLIDE}, \nand {@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_FADE ANIMATION_STYLE_FADE}.</p>"]},"id":"property-ANIMATION_STYLE_NONE"},{"name":"ANIMATION_STYLE_SLIDE","tagname":"property","owner":"Titanium.UI.iOS.StatusBar","meta":{"readonly":true,"description":["<p>One of the group of status bar animation style constants \n{@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_NONE ANIMATION_STYLE_NONE}, \n{@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_SLIDE ANIMATION_STYLE_SLIDE}, \nand {@link Titanium.UI.iOS.StatusBar#property-ANIMATION_STYLE_FADE ANIMATION_STYLE_FADE}.</p>"]},"id":"property-ANIMATION_STYLE_SLIDE"},{"name":"DEFAULT","tagname":"property","owner":"Titanium.UI.iOS.StatusBar","meta":{"readonly":true,"description":["<p>Use with the {@link Titanium.UI.Window#property-statusBarStyle} property.</p>\n\n<p>One of the group of status bar style constants \n{@link Titanium.UI.iOS.StatusBar#property-DEFAULT DEFAULT}, \n{@link Titanium.UI.iOS.StatusBar#property-GRAY GRAY}, \n{@link Titanium.UI.iOS.StatusBar#property-GREY GREY},\n{@link Titanium.UI.iOS.StatusBar#property-LIGHT_CONTENT LIGHT_CONTENT},</p>"]},"id":"property-DEFAULT"},{"name":"GRAY","tagname":"property","owner":"Titanium.UI.iOS.StatusBar","meta":{"readonly":true,"description":["<p>Use with the {@link Titanium.UI.Window#property-statusBarStyle} property.</p>\n\n<p>One of the group of status bar style constants \n{@link Titanium.UI.iOS.StatusBar#property-DEFAULT DEFAULT}, \n{@link Titanium.UI.iOS.StatusBar#property-GRAY GRAY}, \n{@link Titanium.UI.iOS.StatusBar#property-GREY GREY},\n{@link Titanium.UI.iOS.StatusBar#property-LIGHT_CONTENT LIGHT_CONTENT},</p>"]},"id":"property-GRAY"},{"name":"GREY","tagname":"property","owner":"Titanium.UI.iOS.StatusBar","meta":{"readonly":true,"description":["<p>Alias for {@link Titanium.UI.iOS.StatusBar#property-GRAY GRAY}.</p>\n\n<p>Use with the {@link Titanium.UI.Window#property-statusBarStyle} property.</p>\n\n<p>One of the group of status bar style constants \n{@link Titanium.UI.iOS.StatusBar#property-DEFAULT DEFAULT}, \n{@link Titanium.UI.iOS.StatusBar#property-GRAY GRAY}, \n{@link Titanium.UI.iOS.StatusBar#property-GREY GREY},\n{@link Titanium.UI.iOS.StatusBar#property-LIGHT_CONTENT LIGHT_CONTENT},</p>"]},"id":"property-GREY"},{"name":"LIGHT_CONTENT","tagname":"property","owner":"Titanium.UI.iOS.StatusBar","meta":{"readonly":true,"description":["<p>Use with the {@link Titanium.UI.Window#property-statusBarStyle} property.</p>\n\n<p>One of the group of status bar style constants \n{@link Titanium.UI.iOS.StatusBar#property-DEFAULT DEFAULT}, \n{@link Titanium.UI.iOS.StatusBar#property-GRAY GRAY}, \n{@link Titanium.UI.iOS.StatusBar#property-GREY GREY},\n{@link Titanium.UI.iOS.StatusBar#property-LIGHT_CONTENT LIGHT_CONTENT},</p>"]},"id":"property-LIGHT_CONTENT"},{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":227502,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-UI-iOS-StatusBar"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.4.0</li><li class='platform-ipad'\n        title='iPad'>5.4.0</li></ul>","editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.UI.iOS.StatusBar"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 5.4.0'>iPhone 5.4.0</li><li class='platform-ipad' title='iPad since Titanium SDK 5.4.0'>iPad 5.4.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Titanium.UI.iOS.StatusBar</strong></div></div></div><div class='doc-contents'><p>A set of constants for the status bar style.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.4.0</li><li class='platform-ipad'\n        title='iPad'>5.4.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ANIMATION_STYLE_FADE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.StatusBar'>Titanium.UI.iOS.StatusBar</span></div><a href='#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_FADE' class='name not-expandable'>ANIMATION_STYLE_FADE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Fade animation style, when the status bar is hidden or shown.</p>\n\n</div><div class='long'><p>Fade animation style, when the status bar is hidden or shown.</p>\n\n<p><p>One of the group of status bar animation style constants\n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_NONE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_NONE\" class=\"docClass\">ANIMATION_STYLE_NONE</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_SLIDE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_SLIDE\" class=\"docClass\">ANIMATION_STYLE_SLIDE</a>, \nand <a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_FADE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_FADE\" class=\"docClass\">ANIMATION_STYLE_FADE</a>.</p>\n\n</p></div></div></div><div id='property-ANIMATION_STYLE_NONE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.StatusBar'>Titanium.UI.iOS.StatusBar</span></div><a href='#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_NONE' class='name not-expandable'>ANIMATION_STYLE_NONE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>No animation style, when the status bar is hidden or shown.</p>\n\n</div><div class='long'><p>No animation style, when the status bar is hidden or shown.</p>\n\n<p><p>One of the group of status bar animation style constants \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_NONE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_NONE\" class=\"docClass\">ANIMATION_STYLE_NONE</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_SLIDE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_SLIDE\" class=\"docClass\">ANIMATION_STYLE_SLIDE</a>, \nand <a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_FADE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_FADE\" class=\"docClass\">ANIMATION_STYLE_FADE</a>.</p>\n\n</p></div></div></div><div id='property-ANIMATION_STYLE_SLIDE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.StatusBar'>Titanium.UI.iOS.StatusBar</span></div><a href='#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_SLIDE' class='name not-expandable'>ANIMATION_STYLE_SLIDE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Slide animation style, when the status bar is hidden or shown.</p>\n\n</div><div class='long'><p>Slide animation style, when the status bar is hidden or shown.</p>\n\n<p><p>One of the group of status bar animation style constants \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_NONE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_NONE\" class=\"docClass\">ANIMATION_STYLE_NONE</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_SLIDE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_SLIDE\" class=\"docClass\">ANIMATION_STYLE_SLIDE</a>, \nand <a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_FADE\" rel=\"Titanium.UI.iOS.StatusBar-property-ANIMATION_STYLE_FADE\" class=\"docClass\">ANIMATION_STYLE_FADE</a>.</p>\n\n</p></div></div></div><div id='property-DEFAULT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.StatusBar'>Titanium.UI.iOS.StatusBar</span></div><a href='#!/api/Titanium.UI.iOS.StatusBar-property-DEFAULT' class='name not-expandable'>DEFAULT</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Default status bar style.</p>\n\n</div><div class='long'><p>Default status bar style.</p>\n\n<p><p>Use with the <a href=\"#!/api/Titanium.UI.Window-property-statusBarStyle\" rel=\"Titanium.UI.Window-property-statusBarStyle\" class=\"docClass\">Titanium.UI.Window.statusBarStyle</a> property.</p>\n\n\n\n\n<p>One of the group of status bar style constants \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-DEFAULT\" rel=\"Titanium.UI.iOS.StatusBar-property-DEFAULT\" class=\"docClass\">DEFAULT</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GRAY\" rel=\"Titanium.UI.iOS.StatusBar-property-GRAY\" class=\"docClass\">GRAY</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GREY\" rel=\"Titanium.UI.iOS.StatusBar-property-GREY\" class=\"docClass\">GREY</a>,\n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" rel=\"Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" class=\"docClass\">LIGHT_CONTENT</a>,</p>\n\n</p></div></div></div><div id='property-GRAY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.StatusBar'>Titanium.UI.iOS.StatusBar</span></div><a href='#!/api/Titanium.UI.iOS.StatusBar-property-GRAY' class='name not-expandable'>GRAY</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Gray-colored status bar style.</p>\n\n</div><div class='long'><p>Gray-colored status bar style.</p>\n\n<p><p>Use with the <a href=\"#!/api/Titanium.UI.Window-property-statusBarStyle\" rel=\"Titanium.UI.Window-property-statusBarStyle\" class=\"docClass\">Titanium.UI.Window.statusBarStyle</a> property.</p>\n\n\n\n\n<p>One of the group of status bar style constants \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-DEFAULT\" rel=\"Titanium.UI.iOS.StatusBar-property-DEFAULT\" class=\"docClass\">DEFAULT</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GRAY\" rel=\"Titanium.UI.iOS.StatusBar-property-GRAY\" class=\"docClass\">GRAY</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GREY\" rel=\"Titanium.UI.iOS.StatusBar-property-GREY\" class=\"docClass\">GREY</a>,\n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" rel=\"Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" class=\"docClass\">LIGHT_CONTENT</a>,</p>\n\n</p></div></div></div><div id='property-GREY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.StatusBar'>Titanium.UI.iOS.StatusBar</span></div><a href='#!/api/Titanium.UI.iOS.StatusBar-property-GREY' class='name not-expandable'>GREY</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Gray-colored status bar style.</p>\n\n</div><div class='long'><p>Gray-colored status bar style.</p>\n\n<p><p>Alias for <a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GRAY\" rel=\"Titanium.UI.iOS.StatusBar-property-GRAY\" class=\"docClass\">GRAY</a>.</p>\n\n\n\n\n<p>Use with the <a href=\"#!/api/Titanium.UI.Window-property-statusBarStyle\" rel=\"Titanium.UI.Window-property-statusBarStyle\" class=\"docClass\">Titanium.UI.Window.statusBarStyle</a> property.</p>\n\n\n\n\n<p>One of the group of status bar style constants \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-DEFAULT\" rel=\"Titanium.UI.iOS.StatusBar-property-DEFAULT\" class=\"docClass\">DEFAULT</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GRAY\" rel=\"Titanium.UI.iOS.StatusBar-property-GRAY\" class=\"docClass\">GRAY</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GREY\" rel=\"Titanium.UI.iOS.StatusBar-property-GREY\" class=\"docClass\">GREY</a>,\n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" rel=\"Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" class=\"docClass\">LIGHT_CONTENT</a>,</p>\n\n</p></div></div></div><div id='property-LIGHT_CONTENT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.StatusBar'>Titanium.UI.iOS.StatusBar</span></div><a href='#!/api/Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT' class='name expandable'>LIGHT_CONTENT</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Status bar style to use with dark backgrounds. ...</div><div class='long'><p>Status bar style to use with dark backgrounds. Valid on iOS 7 and above.</p>\n\n<p><p>Use with the <a href=\"#!/api/Titanium.UI.Window-property-statusBarStyle\" rel=\"Titanium.UI.Window-property-statusBarStyle\" class=\"docClass\">Titanium.UI.Window.statusBarStyle</a> property.</p>\n\n\n\n\n<p>One of the group of status bar style constants \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-DEFAULT\" rel=\"Titanium.UI.iOS.StatusBar-property-DEFAULT\" class=\"docClass\">DEFAULT</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GRAY\" rel=\"Titanium.UI.iOS.StatusBar-property-GRAY\" class=\"docClass\">GRAY</a>, \n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-GREY\" rel=\"Titanium.UI.iOS.StatusBar-property-GREY\" class=\"docClass\">GREY</a>,\n<a href=\"#!/api/Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" rel=\"Titanium.UI.iOS.StatusBar-property-LIGHT_CONTENT\" class=\"docClass\">LIGHT_CONTENT</a>,</p>\n\n</p></div></div></div><div id='property-apiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});