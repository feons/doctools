Ext.data.JsonP['SecurityManagerProtocol']({"tagname":"class","name":"SecurityManagerProtocol","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.3.0","iphone 3.3.0","ipad 3.3.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Network/HTTPClient.yml","description":["<p>The object representing {@link Titanium.Network.HTTPClient#property-securityManager} must implement this protocol.\nAssigning the securityManager property to an object that does not implement this protocol will cause an exception to be raised.\nAll methods in this protocol are required.</p>"]},"private":null,"id":"class-SecurityManagerProtocol","members":{"cfg":[],"property":[],"method":[{"name":"connectionDelegateForUrl","tagname":"method","owner":"SecurityManagerProtocol","meta":{"description":["<p>This method is only called if {@link SecurityManagerProtocol#method-willHandleURL} returns true.\nSee {@link APSConnectionDelegate} for further information.</p>"],"platform":["iphone 3.3.0","ipad 3.3.0"]},"id":"method-connectionDelegateForUrl"},{"name":"getKeyManagers","tagname":"method","owner":"SecurityManagerProtocol","meta":{"description":["<p>This method is only called if {@link SecurityManagerProtocol#method-willHandleURL} returns true.</p>\n\n<p>Return null to set up a SSL Context with the default system key managers.</p>"],"platform":["android 3.3.0"]},"id":"method-getKeyManagers"},{"name":"getTrustManagers","tagname":"method","owner":"SecurityManagerProtocol","meta":{"description":["<p>This method is only called if {@link SecurityManagerProtocol#method-willHandleURL} returns true.</p>\n\n<p>Return null to set up a SSL Context with the default system trust managers.</p>"],"platform":["android 3.3.0"]},"id":"method-getTrustManagers"},{"name":"willHandleURL","tagname":"method","owner":"SecurityManagerProtocol","meta":{"description":["<p>The parameter passed to this method is a <a href=\"https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSURL_Class/Reference/Reference.html\">NSURL</a>\non iOS and a <a href=\"http://developer.android.com/reference/android/net/Uri.html\">Uri</a> on android.</p>\n\n<p>Return <strong>true</strong> to participate, <strong>false</strong> to allow default authentication flow.</p>"]},"id":"method-willHandleURL"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":112159,"files":[{"filename":"titanium.js","href":"titanium.html#SecurityManagerProtocol"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.3.0</li><li class='platform-iphone'\n        title='iPhone'>3.3.0</li><li class='platform-ipad'\n        title='iPad'>3.3.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>The object representing <a href=\"#!/api/Titanium.Network.HTTPClient-property-securityManager\" rel=\"Titanium.Network.HTTPClient-property-securityManager\" class=\"docClass\">Titanium.Network.HTTPClient.securityManager</a> must implement this protocol.\nAssigning the securityManager property to an object that does not implement this protocol will cause an exception to be raised.\nAll methods in this protocol are required.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.3.0'>Android 3.3.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.3.0'>iPhone 3.3.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.3.0'>iPad 3.3.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>The protocol that the <a href=\"#!/api/Titanium.Network.HTTPClient-property-securityManager\" rel=\"Titanium.Network.HTTPClient-property-securityManager\" class=\"docClass\">Titanium.Network.HTTPClient.securityManager</a> must implement.</p>\n\n<p><p>The object representing <a href=\"#!/api/Titanium.Network.HTTPClient-property-securityManager\" rel=\"Titanium.Network.HTTPClient-property-securityManager\" class=\"docClass\">Titanium.Network.HTTPClient.securityManager</a> must implement this protocol.\nAssigning the securityManager property to an object that does not implement this protocol will cause an exception to be raised.\nAll methods in this protocol are required.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.3.0</li><li class='platform-iphone'\n        title='iPhone'>3.3.0</li><li class='platform-ipad'\n        title='iPad'>3.3.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-connectionDelegateForUrl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SecurityManagerProtocol'>SecurityManagerProtocol</span></div><a href='#!/api/SecurityManagerProtocol-method-connectionDelegateForUrl' class='name expandable'>connectionDelegateForUrl</a>( <span class='pre'>url</span> ) : <a href=\"#!/api/APSConnectionDelegate\" rel=\"APSConnectionDelegate\" class=\"docClass\">APSConnectionDelegate</a></div><div class='description'><div class='short'>The APSConnectionDelegate for this connection. ...</div><div class='long'><p>The <a href=\"#!/api/APSConnectionDelegate\" rel=\"APSConnectionDelegate\" class=\"docClass\">APSConnectionDelegate</a> for this connection.</p>\n\n<p><p>This method is only called if <a href=\"#!/api/SecurityManagerProtocol-method-willHandleURL\" rel=\"SecurityManagerProtocol-method-willHandleURL\" class=\"docClass\">willHandleURL</a> returns true.\nSee <a href=\"#!/api/APSConnectionDelegate\" rel=\"APSConnectionDelegate\" class=\"docClass\">APSConnectionDelegate</a> for further information.</p>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.3.0</li><li class='platform-ipad'\n        title='iPad'>3.3.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : Object<div class='sub-desc'><p>The <a href=\"https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSURL_Class/Reference/Reference.html\">NSURL</a> representing the end point of this connection.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/APSConnectionDelegate\" rel=\"APSConnectionDelegate\" class=\"docClass\">APSConnectionDelegate</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getKeyManagers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SecurityManagerProtocol'>SecurityManagerProtocol</span></div><a href='#!/api/SecurityManagerProtocol-method-getKeyManagers' class='name expandable'>getKeyManagers</a>( <span class='pre'>proxy</span> ) : Object[]</div><div class='description'><div class='short'>Returns an array of objects implementing the X509KeyManager protocol for the SSL Context. ...</div><div class='long'><p>Returns an array of objects implementing the <a href=\"http://developer.android.com/reference/javax/net/ssl/X509KeyManager.html\">X509KeyManager</a> protocol for the SSL Context.</p>\n\n<p><p>This method is only called if <a href=\"#!/api/SecurityManagerProtocol-method-willHandleURL\" rel=\"SecurityManagerProtocol-method-willHandleURL\" class=\"docClass\">willHandleURL</a> returns true.</p>\n\n\n\n\n<p>Return null to set up a SSL Context with the default system key managers.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.3.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'><p>The <a href=\"#!/api/Titanium.Network.HTTPClient\" rel=\"Titanium.Network.HTTPClient\" class=\"docClass\">Titanium.Network.HTTPClient</a> representing this connection.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTrustManagers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SecurityManagerProtocol'>SecurityManagerProtocol</span></div><a href='#!/api/SecurityManagerProtocol-method-getTrustManagers' class='name expandable'>getTrustManagers</a>( <span class='pre'>proxy</span> ) : Object[]</div><div class='description'><div class='short'>Returns an array of objects implementing the X509TrustManager protocol for the SSL Context. ...</div><div class='long'><p>Returns an array of objects implementing the <a href=\"http://developer.android.com/reference/javax/net/ssl/X509TrustManager.html\">X509TrustManager</a> protocol for the SSL Context.</p>\n\n<p><p>This method is only called if <a href=\"#!/api/SecurityManagerProtocol-method-willHandleURL\" rel=\"SecurityManagerProtocol-method-willHandleURL\" class=\"docClass\">willHandleURL</a> returns true.</p>\n\n\n\n\n<p>Return null to set up a SSL Context with the default system trust managers.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.3.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'><p>The <a href=\"#!/api/Titanium.Network.HTTPClient\" rel=\"Titanium.Network.HTTPClient\" class=\"docClass\">Titanium.Network.HTTPClient</a> representing this connection.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-willHandleURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SecurityManagerProtocol'>SecurityManagerProtocol</span></div><a href='#!/api/SecurityManagerProtocol-method-willHandleURL' class='name expandable'>willHandleURL</a>( <span class='pre'>url</span> ) : Boolean</div><div class='description'><div class='short'>Returns if the security manager will participate in authentication of this end point. ...</div><div class='long'><p>Returns if the security manager will participate in authentication of this end point.</p>\n\n<p><p>The parameter passed to this method is a <a href=\"https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSURL_Class/Reference/Reference.html\">NSURL</a>\non iOS and a <a href=\"http://developer.android.com/reference/android/net/Uri.html\">Uri</a> on android.</p>\n\n\n\n\n<p>Return <strong>true</strong> to participate, <strong>false</strong> to allow default authentication flow.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : Object<div class='sub-desc'><p>The Object representing representing the end point of this connection.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});