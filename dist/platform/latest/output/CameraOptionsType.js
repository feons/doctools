Ext.data.JsonP['CameraOptionsType']({"tagname":"class","name":"CameraOptionsType","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Media/Media.yml"},"private":null,"id":"class-CameraOptionsType","members":{"cfg":[],"property":[{"name":"allowEditing","tagname":"property","owner":"CameraOptionsType","meta":{"platform":["iphone 0.8","ipad 0.8"]},"id":"property-allowEditing"},{"name":"animated","tagname":"property","owner":"CameraOptionsType","meta":{"platform":["iphone 0.8","ipad 0.8"]},"id":"property-animated"},{"name":"arrowDirection","tagname":"property","owner":"CameraOptionsType","meta":{"description":["<p>This property is only used if the camera is displayed in a\npopover (<code>inPopOver</code> is <code>true</code>).</p> \n\n<p>This API can be assigned the following constants:<ul>\n <li> {@link Titanium.UI.iPad#property-POPOVER_ARROW_DIRECTION_ANY}\n <li> {@link Titanium.UI.iPad#property-POPOVER_ARROW_DIRECTION_DOWN}\n <li> {@link Titanium.UI.iPad#property-POPOVER_ARROW_DIRECTION_LEFT}\n <li> {@link Titanium.UI.iPad#property-POPOVER_ARROW_DIRECTION_RIGHT}\n <li> {@link Titanium.UI.iPad#property-POPOVER_ARROW_DIRECTION_UNKNOWN}\n <li> {@link Titanium.UI.iPad#property-POPOVER_ARROW_DIRECTION_UP}\n</ul></p>"],"platform":["ipad 0.8"]},"id":"property-arrowDirection"},{"name":"autohide","tagname":"property","owner":"CameraOptionsType","meta":{"description":["<p>On Android, this property is considered only if <code>overlay</code> is also set. When an\noverlay is not set, the default Android Camera Activity is used, which is only\ncapable of reporting back the results of one taken photo, making <code>autohide</code>\nmeaningless in that context.</p>"],"platform":["android 3.2.0","iphone 0.8","ipad 0.8"]},"id":"property-autohide"},{"name":"autorotate","tagname":"property","owner":"CameraOptionsType","meta":{"description":["<p>Set to <code>false</code> to disable rotating the camera preview. The camera preview will remain\nin the same orientation it was opened in.</p>\n\n<p>Set to <code>true</code> to allow the camera preview to rotate when the device rotates.\nBlack bars will appear and disappear as the device is rotated.</p>"],"platform":["ipad 3.4.0"]},"id":"property-autorotate"},{"name":"cancel","tagname":"property","owner":"CameraOptionsType","meta":{},"id":"property-cancel"},{"name":"error","tagname":"property","owner":"CameraOptionsType","meta":{},"id":"property-error"},{"name":"inPopOver","tagname":"property","owner":"CameraOptionsType","meta":{"description":["<p>Use <code>inPopOver: true</code> on iPad to display the camera view in a popover.</p>"],"platform":["ipad 0.8"]},"id":"property-inPopOver"},{"name":"mediaTypes","tagname":"property","owner":"CameraOptionsType","meta":{"platform":["android 5.4.0","iphone 0.8","ipad 0.8"]},"id":"property-mediaTypes"},{"name":"overlay","tagname":"property","owner":"CameraOptionsType","meta":{"description":["<p>On iOS, the overlay view is usually used in conjunction with <code>showControls: false</code>.\nThe <code>transform</code> property can be used to scale and position the camera preview inside\nthe overlay view.</p>"]},"id":"property-overlay"},{"name":"popoverView","tagname":"property","owner":"CameraOptionsType","meta":{"description":["<p>This property is only used if the camera is displayed in a\npopover (<code>inPopOver</code> is <code>true</code>).</p>"],"platform":["ipad 0.8"]},"id":"property-popoverView"},{"name":"saveToPhotoGallery","tagname":"property","owner":"CameraOptionsType","meta":{},"id":"property-saveToPhotoGallery"},{"name":"showControls","tagname":"property","owner":"CameraOptionsType","meta":{"platform":["iphone 0.8","ipad 0.8"]},"id":"property-showControls"},{"name":"success","tagname":"property","owner":"CameraOptionsType","meta":{},"id":"property-success"},{"name":"transform","tagname":"property","owner":"CameraOptionsType","meta":{"description":["<p>Can be used to size and position the camera or photogallery view behind an overlay view.\niOS 10 note: There was a <a href=\"http://openradar.appspot.com/28232651\">known iOS 10 issue</a> caused by Apple\nthat breaks the native camera transformation. Apple fixed this issue in the iOS 10.2 release.</p>"],"platform":["iphone 0.8","ipad 0.8"]},"id":"property-transform"},{"name":"videoMaximumDuration","tagname":"property","owner":"CameraOptionsType","meta":{"platform":["android 5.4.0","iphone 0.8","ipad 0.8"]},"id":"property-videoMaximumDuration"},{"name":"videoQuality","tagname":"property","owner":"CameraOptionsType","meta":{"platform":["android 5.4.0","iphone 0.8","ipad 0.8"]},"id":"property-videoQuality"},{"name":"whichCamera","tagname":"property","owner":"CameraOptionsType","meta":{"platform":["android 5.4.0"]},"id":"property-whichCamera"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":103342,"files":[{"filename":"titanium.js","href":"titanium.html#CameraOptionsType"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Simple object for specifying options to <a href=\"#!/api/Titanium.Media-method-showCamera\" rel=\"Titanium.Media-method-showCamera\" class=\"docClass\">showCamera</a>.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-allowEditing' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-allowEditing' class='name expandable'>allowEditing</a><span> : Boolean</span></div><div class='description'><div class='short'>Specifies if the media should be editable after capture/selection. ...</div><div class='long'><p>Specifies if the media should be editable after capture/selection.</p>\n\n<p>Default: false</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-animated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-animated' class='name expandable'>animated</a><span> : Boolean</span></div><div class='description'><div class='short'>Specifies if the dialog should be animated upon showing and hiding. ...</div><div class='long'><p>Specifies if the dialog should be animated upon showing and hiding.</p>\n\n<p>Default: true</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-arrowDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-arrowDirection' class='name not-expandable'>arrowDirection</a><span> : Number</span></div><div class='description'><div class='short'><p>Controls the type of arrow and position of the popover.</p>\n\n</div><div class='long'><p>Controls the type of arrow and position of the popover.</p>\n\n<p><p>This property is only used if the camera is displayed in a\npopover (<code>inPopOver</code> is <code>true</code>).</p>\n\n\n<p></p>\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_ANY\" rel=\"Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_ANY\" class=\"docClass\">Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_ANY</a>\n <li> <a href=\"#!/api/Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_DOWN\" rel=\"Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_DOWN\" class=\"docClass\">Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN</a>\n <li> <a href=\"#!/api/Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_LEFT\" rel=\"Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_LEFT\" class=\"docClass\">Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT</a>\n <li> <a href=\"#!/api/Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_RIGHT\" rel=\"Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_RIGHT\" class=\"docClass\">Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT</a>\n <li> <a href=\"#!/api/Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_UNKNOWN\" rel=\"Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_UNKNOWN\" class=\"docClass\">Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN</a>\n <li> <a href=\"#!/api/Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_UP\" rel=\"Titanium.UI.iPad-property-POPOVER_ARROW_DIRECTION_UP\" class=\"docClass\">Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_UP</a>\n</li></li></li></li></li></li></ul></p>\n\n</p><ul class='platforms'><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-autohide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-autohide' class='name expandable'>autohide</a><span> : Boolean</span></div><div class='description'><div class='short'>Specifies if the camera should be hidden automatically after the media capture is completed. ...</div><div class='long'><p>Specifies if the camera should be hidden automatically after the media capture is completed.</p>\n\n<p><p>On Android, this property is considered only if <code>overlay</code> is also set. When an\noverlay is not set, the default Android Camera Activity is used, which is only\ncapable of reporting back the results of one taken photo, making <code>autohide</code>\nmeaningless in that context.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-autorotate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-autorotate' class='name expandable'>autorotate</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines if the camera preview should rotate or not. ...</div><div class='long'><p>Determines if the camera preview should rotate or not.</p>\n\n<p><p>Set to <code>false</code> to disable rotating the camera preview. The camera preview will remain\nin the same orientation it was opened in.</p>\n\n\n\n\n<p>Set to <code>true</code> to allow the camera preview to rotate when the device rotates.\nBlack bars will appear and disappear as the device is rotated.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-ipad'\n        title='iPad'>3.4.0</li></ul></div></div></div><div id='property-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-cancel' class='name not-expandable'>cancel</a><span> : Callback&lt;<a href=\"#!/api/FailureResponse\" rel=\"FailureResponse\" class=\"docClass\">FailureResponse</a>&gt;</span></div><div class='description'><div class='short'><p>Function to call if the user presses the cancel button.</p>\n\n</div><div class='long'><p>Function to call if the user presses the cancel button.</p>\n\n</div></div></div><div id='property-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-error' class='name not-expandable'>error</a><span> : Callback&lt;<a href=\"#!/api/FailureResponse\" rel=\"FailureResponse\" class=\"docClass\">FailureResponse</a>&gt;</span></div><div class='description'><div class='short'><p>Function to call upon receiving an error.</p>\n\n</div><div class='long'><p>Function to call upon receiving an error.</p>\n\n</div></div></div><div id='property-inPopOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-inPopOver' class='name expandable'>inPopOver</a><span> : Boolean</span></div><div class='description'><div class='short'>Show the camera in a popover. ...</div><div class='long'><p>Show the camera in a popover.</p>\n\n<p><p>Use <code>inPopOver: true</code> on iPad to display the camera view in a popover.</p>\n\n</p><p>Default: false</p><ul class='platforms'><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-mediaTypes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-mediaTypes' class='name expandable'>mediaTypes</a><span> : String[]</span></div><div class='description'><div class='short'>Array of media type constants to allow. ...</div><div class='long'><p>Array of media type constants to allow. Note: If you want to select live photos, iOS only  allows\nyou to select existing live photos from the gallery, capturing new live photos is not supported by\niOS public API, yet.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.Media-property-MEDIA_TYPE_PHOTO\" rel=\"Titanium.Media-property-MEDIA_TYPE_PHOTO\" class=\"docClass\">Titanium.Media.MEDIA_TYPE_PHOTO</a>\n <li> <a href=\"#!/api/Titanium.Media-property-MEDIA_TYPE_LIVEPHOTO\" rel=\"Titanium.Media-property-MEDIA_TYPE_LIVEPHOTO\" class=\"docClass\">Titanium.Media.MEDIA_TYPE_LIVEPHOTO</a>\n <li> <a href=\"#!/api/Titanium.Media-property-MEDIA_TYPE_VIDEO\" rel=\"Titanium.Media-property-MEDIA_TYPE_VIDEO\" class=\"docClass\">Titanium.Media.MEDIA_TYPE_VIDEO</a>\n</li></li></li></ul></p>\n\n<p>Default: Both photo and video allowed.</p><ul class='platforms'><li class='platform-android'\n        title='Android'>5.4.0</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-overlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-overlay' class='name expandable'>overlay</a><span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a></span></div><div class='description'><div class='short'>View to added as an overlay to the camera UI (on top). ...</div><div class='long'><p>View to added as an overlay to the camera UI (on top).</p>\n\n<p><p>On iOS, the overlay view is usually used in conjunction with <code>showControls: false</code>.\nThe <code>transform</code> property can be used to scale and position the camera preview inside\nthe overlay view.</p>\n\n</p><p>Default: no overlay view</p></div></div></div><div id='property-popoverView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-popoverView' class='name not-expandable'>popoverView</a><span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a></span></div><div class='description'><div class='short'><p>View to position the camera or photo gallery popover on top of.</p>\n\n</div><div class='long'><p>View to position the camera or photo gallery popover on top of.</p>\n\n<p><p>This property is only used if the camera is displayed in a\npopover (<code>inPopOver</code> is <code>true</code>).</p>\n\n</p><ul class='platforms'><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-saveToPhotoGallery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-saveToPhotoGallery' class='name expandable'>saveToPhotoGallery</a><span> : Boolean</span></div><div class='description'><div class='short'>Specifies if the media should be saved to the photo gallery upon successful capture. ...</div><div class='long'><p>Specifies if the media should be saved to the photo gallery upon successful capture.</p>\n\n<p>Default: false</p></div></div></div><div id='property-showControls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-showControls' class='name expandable'>showControls</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the built-in camera controls should be displayed. ...</div><div class='long'><p>Indicates if the built-in camera controls should be displayed.</p>\n\n<p>Default: true</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-success' class='name not-expandable'>success</a><span> : Callback&lt;<a href=\"#!/api/CameraMediaItemType\" rel=\"CameraMediaItemType\" class=\"docClass\">CameraMediaItemType</a>&gt;</span></div><div class='description'><div class='short'><p>Function to call when the camera is closed after a successful capture/selection.</p>\n\n</div><div class='long'><p>Function to call when the camera is closed after a successful capture/selection.</p>\n\n</div></div></div><div id='property-transform' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-transform' class='name expandable'>transform</a><span> : <a href=\"#!/api/Titanium.UI.2DMatrix\" rel=\"Titanium.UI.2DMatrix\" class=\"docClass\">Titanium.UI.2DMatrix</a></span></div><div class='description'><div class='short'>Transformation matrix to apply to the camera or photogallery view. ...</div><div class='long'><p>Transformation matrix to apply to the camera or photogallery view.</p>\n\n<p><p>Can be used to size and position the camera or photogallery view behind an overlay view.\niOS 10 note: There was a <a href=\"http://openradar.appspot.com/28232651\">known iOS 10 issue</a> caused by Apple\nthat breaks the native camera transformation. Apple fixed this issue in the iOS 10.2 release.</p>\n\n</p><p>Default: identity matrix</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-videoMaximumDuration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-videoMaximumDuration' class='name not-expandable'>videoMaximumDuration</a><span> : Number</span></div><div class='description'><div class='short'><p>Maximum duration (in milliseconds) to allow video capture before completing.</p>\n\n</div><div class='long'><p>Maximum duration (in milliseconds) to allow video capture before completing.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.4.0</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-videoQuality' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-videoQuality' class='name expandable'>videoQuality</a><span> : Number</span></div><div class='description'><div class='short'>Constant to indicate the video quality during capture. ...</div><div class='long'><p>Constant to indicate the video quality during capture.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.Media-property-QUALITY_HIGH\" rel=\"Titanium.Media-property-QUALITY_HIGH\" class=\"docClass\">Titanium.Media.QUALITY_HIGH</a>\n <li> <a href=\"#!/api/Titanium.Media-property-QUALITY_LOW\" rel=\"Titanium.Media-property-QUALITY_LOW\" class=\"docClass\">Titanium.Media.QUALITY_LOW</a>\n <li> <a href=\"#!/api/Titanium.Media-property-QUALITY_MEDIUM\" rel=\"Titanium.Media-property-QUALITY_MEDIUM\" class=\"docClass\">Titanium.Media.QUALITY_MEDIUM</a>\n</li></li></li></ul></p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.4.0</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-whichCamera' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraOptionsType'>CameraOptionsType</span></div><a href='#!/api/CameraOptionsType-property-whichCamera' class='name expandable'>whichCamera</a><span> : Number</span></div><div class='description'><div class='short'>Opens the camera with the specified camera direction. ...</div><div class='long'><p>Opens the camera with the specified camera direction.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.Media-property-CAMERA_FRONT\" rel=\"Titanium.Media-property-CAMERA_FRONT\" class=\"docClass\">Titanium.Media.CAMERA_FRONT</a>\n <li> <a href=\"#!/api/Titanium.Media-property-CAMERA_REAR\" rel=\"Titanium.Media-property-CAMERA_REAR\" class=\"docClass\">Titanium.Media.CAMERA_REAR</a>\n</li></li></ul></p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.4.0</li></ul></div></div></div></div></div></div></div>"});