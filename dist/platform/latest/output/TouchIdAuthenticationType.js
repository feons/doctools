Ext.data.JsonP['TouchIdAuthenticationType']({"tagname":"class","name":"TouchIdAuthenticationType","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.touchid/edit/master/apidoc/TouchId.yml"},"private":null,"id":"class-TouchIdAuthenticationType","members":{"cfg":[],"property":[{"name":"allowableReuseDuration","tagname":"property","owner":"TouchIdAuthenticationType","meta":{"platform":["android 6.1.0","iphone 6.1.0","ipad 6.1.0"]},"id":"property-allowableReuseDuration"},{"name":"callback","tagname":"property","owner":"TouchIdAuthenticationType","meta":{},"id":"property-callback"},{"name":"cancelTitle","tagname":"property","owner":"TouchIdAuthenticationType","meta":{"platform":["android 6.1.0","iphone 6.1.0","ipad 6.1.0"]},"id":"property-cancelTitle"},{"name":"fallbackTitle","tagname":"property","owner":"TouchIdAuthenticationType","meta":{"platform":["android 6.1.0","iphone 6.1.0","ipad 6.1.0"]},"id":"property-fallbackTitle"},{"name":"reason","tagname":"property","owner":"TouchIdAuthenticationType","meta":{},"id":"property-reason"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":31018,"files":[{"filename":"titanium.js","href":"titanium.html#TouchIdAuthenticationType"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Dictionary passed to <a href=\"#!/api/Modules.TouchId-method-authenticate\" rel=\"Modules.TouchId-method-authenticate\" class=\"docClass\">Modules.TouchId.authenticate</a>.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-allowableReuseDuration' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchIdAuthenticationType'>TouchIdAuthenticationType</span></div><a href='#!/api/TouchIdAuthenticationType-property-allowableReuseDuration' class='name expandable'>allowableReuseDuration</a><span> : Number</span></div><div class='description'><div class='short'>Note: This property is iOS only!\n\n\n\n\nThe time interval (in seconds) for accepting a successful Touch ID device \nunloc...</div><div class='long'><p>Note: This property is iOS only!</p>\n\n\n\n\n<p>The time interval (in seconds) for accepting a successful Touch ID device \nunlock (on the lock screen) from the past.  If the device  was successfully \nunlocked by Touch ID within this time interval, then Touch ID authentication \non this context will succeed automatically and the reply block will be \ncalled without prompting user for Touch ID.</p>\n\n\n\n\n<p>The default value is 0, meaning that no previous TouchID unlock can be reused.</p>\n\n\n\n\n<p>This property is meant only for reusing Touch ID matches from the device \nlock screen. It does not allow reusing previous Touch ID matches in \napplication or between applications.</p>\n\n\n\n\n<p>The maximum supported interval is 5 minutes and setting the value beyond \n5 minutes does not increase the accepted interval.    </p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 9.0 and later \n</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>6.1.0</li><li class='platform-iphone'\n        title='iPhone'>6.1.0</li><li class='platform-ipad'\n        title='iPad'>6.1.0</li></ul></div></div></div><div id='property-callback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchIdAuthenticationType'>TouchIdAuthenticationType</span></div><a href='#!/api/TouchIdAuthenticationType-property-callback' class='name expandable'>callback</a><span> : Callback</span></div><div class='description'><div class='short'>Callback function executed after the authentication completes. ...</div><div class='long'><p>Callback function executed after the authentication completes. \nThe callback function is passed a dictionary with three properties:</p>\n\n\n\n\n<ul>\n<li><code>success</code> (Boolean): Set to true if authentication succeeded.</li>\n<li><code>error</code> (String): System error message.</li>\n<li><code>code</code> (Number): Module <code>ERROR_*</code> constant indicating the reason for the failure.        </li>\n</ul>\n\n</div></div></div><div id='property-cancelTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchIdAuthenticationType'>TouchIdAuthenticationType</span></div><a href='#!/api/TouchIdAuthenticationType-property-cancelTitle' class='name expandable'>cancelTitle</a><span> : String</span></div><div class='description'><div class='short'>Allows cancel button title customization. ...</div><div class='long'><p>Allows cancel button title customization. A default localized title \"Cancel\" \nis used when this property is not defined or is set to empty string.</p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 10.0 and later \n</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>6.1.0</li><li class='platform-iphone'\n        title='iPhone'>6.1.0</li><li class='platform-ipad'\n        title='iPad'>6.1.0</li></ul></div></div></div><div id='property-fallbackTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchIdAuthenticationType'>TouchIdAuthenticationType</span></div><a href='#!/api/TouchIdAuthenticationType-property-fallbackTitle' class='name expandable'>fallbackTitle</a><span> : String</span></div><div class='description'><div class='short'>Allows fallback button title customization. ...</div><div class='long'><p>Allows fallback button title customization. A default localized title \n\"Enter Password\" is used when this property is left nil. If set to empty \nstring, the button will be hidden.</p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 10.0 and later \n</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>6.1.0</li><li class='platform-iphone'\n        title='iPhone'>6.1.0</li><li class='platform-ipad'\n        title='iPad'>6.1.0</li></ul></div></div></div><div id='property-reason' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchIdAuthenticationType'>TouchIdAuthenticationType</span></div><a href='#!/api/TouchIdAuthenticationType-property-reason' class='name expandable'>reason</a><span> : String</span></div><div class='description'><div class='short'>Note: This property is iOS only!\n\n\n\n\nMessage displayed in the authentication dialog describing why the\napplication is...</div><div class='long'><p>Note: This property is iOS only!</p>\n\n\n\n\n<p>Message displayed in the authentication dialog describing why the\napplication is requesting authentication.</p>\n\n</div></div></div></div></div></div></div>"});