Ext.data.JsonP['ErrorResponse']({"tagname":"class","name":"ErrorResponse","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/ErrorResponse.yml"},"private":null,"id":"class-ErrorResponse","members":{"cfg":[],"property":[{"name":"code","tagname":"property","owner":"ErrorResponse","meta":{"description":["<p>Error code will be 0 if <code>success</code> is <code>true</code>, nonzero otherwise. If the error\nwas generated by the operating system, that system's error value is used.\nOtherwise, this value will be -1.</p>"]},"id":"property-code"},{"name":"error","tagname":"property","owner":"ErrorResponse","meta":{"description":["<p>Will be undefined if <code>success</code> is <code>true</code>.</p>"]},"id":"property-error"},{"name":"success","tagname":"property","owner":"ErrorResponse","meta":{"description":["<p>Returns <code>true</code> if request succeeded, <code>false</code> otherwise.</p>"]},"id":"property-success"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":83436,"files":[{"filename":"titanium.js","href":"titanium.html#ErrorResponse"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":["ContactsAuthorizationResponse","FacebookDialogResponse","FacebookGraphResponse","FacebookPermissionResponse","FacebookRESTResponse","FacebookReauthResponse","FailureResponse","ForwardGeocodeResponse","HeadingResponse","LocationAuthorizationResponse","LocationResults","MediaAuthorizationResponse","PumpCallbackArgs","ReadCallbackArgs","RequestCameraAccessResult","RequestMusicLibraryAccessResult","RequestPermissionAccessResult","RequestPhotoGalleryAccessResult","RequestStorageAccessResult","ReverseGeocodeResponse","SuccessResponse","ThumbnailResponse","WriteCallbackArgs","WriteStreamCallbackArgs","YQLResponse"],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Properties used in any event or callback which needs to report a success or failure.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-code' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ErrorResponse'>ErrorResponse</span></div><a href='#!/api/ErrorResponse-property-code' class='name expandable'>code</a><span> : Number</span></div><div class='description'><div class='short'>Error code. ...</div><div class='long'><p>Error code. Returns 0 if <code>success</code> is <code>true</code>.</p>\n\n<p><p>Error code will be 0 if <code>success</code> is <code>true</code>, nonzero otherwise. If the error\nwas generated by the operating system, that system's error value is used.\nOtherwise, this value will be -1.</p>\n\n</p></div></div></div><div id='property-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ErrorResponse'>ErrorResponse</span></div><a href='#!/api/ErrorResponse-property-error' class='name not-expandable'>error</a><span> : String</span></div><div class='description'><div class='short'><p>Error message, if any returned.</p>\n\n</div><div class='long'><p>Error message, if any returned.</p>\n\n<p><p>Will be undefined if <code>success</code> is <code>true</code>.</p>\n\n</p></div></div></div><div id='property-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ErrorResponse'>ErrorResponse</span></div><a href='#!/api/ErrorResponse-property-success' class='name not-expandable'>success</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Indicates if the operation succeeded.</p>\n\n</div><div class='long'><p>Indicates if the operation succeeded.</p>\n\n<p><p>Returns <code>true</code> if request succeeded, <code>false</code> otherwise.</p>\n\n</p></div></div></div></div></div></div></div>"});