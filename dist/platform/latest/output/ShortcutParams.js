Ext.data.JsonP['ShortcutParams']({"tagname":"class","name":"ShortcutParams","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 5.1.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/ApplicationShortcuts.yml","description":["<p>The parameters used when creating and receiving a shortcut. When used for creation, it must include \nat least the <code>itemtype</code> and <code>title</code> properties.</p>"]},"private":null,"id":"class-ShortcutParams","members":{"cfg":[],"property":[{"name":"icon","tagname":"property","owner":"ShortcutParams","meta":{"description":["<p>If you are using one of the pre-defined constants, you can reference to the list of icons from Apple <a href=\"https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/index.html#//apple_ref/c/tdef/UIApplicationShortcutIconType\">here</a>.</p>\n\n<p>If you are using an image file, enable slicing (adding the image to an asset catalog) for\nthe project. To enable slicing, add the <code>use-app-thinning</code> element to the <code>ios</code> element in the\n<code>tiapp.xml</code> file and set the value to <code>true</code>. If you do not enable slicing, the image will\nnot be displayed.</p>\n\n<pre><code>&lt;ti:app&gt;\n  &lt;ios&gt;\n    &lt;use-app-thinning&gt;true&lt;/use-app-thinning&gt;\n  &lt;/ios&gt;\n&lt;/ti:app&gt;\n</code></pre>\n\n<p>The recommended size for image files is 35dp (@2px: 70dp, @3x: 105dp). Also check the <a href=\"https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/index.html\">Apple documentation</a> <br>\nfor more information on shortcut icons.</p> \n\n<p>This API can be assigned the following constants:<ul>\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_COMPOSE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_PLAY}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_PAUSE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_ADD}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_LOCATION}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_SEARCH}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_SHARE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_PROHIBIT}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_CONTACT}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_HOME}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_MARK_LOCATION}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_FAVORITE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_LOVE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_CLOUD}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_INVITATION}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_CONFIRMATION}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_MAIL}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_MESSAGE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_DATE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_TIME}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_CAPTURE_PHOTO}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_CAPTURE_VIDEO}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_TASK}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_TASK_COMPLETED}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_ALARM}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_BOOKMARK}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_SHUFFLE}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_AUDIO}\n <li> {@link Titanium.UI.iOS#property-SHORTCUT_ICON_TYPE_UPDATE}\n</ul></p>"]},"id":"property-icon"},{"name":"itemtype","tagname":"property","owner":"ShortcutParams","meta":{},"id":"property-itemtype"},{"name":"subtitle","tagname":"property","owner":"ShortcutParams","meta":{"description":["<p>The subtitle can be localized, see <a href=\"https://wiki.appcelerator.org/display/guides2/Internationalization\">here</a>\nfor more infos. </p>"]},"id":"property-subtitle"},{"name":"title","tagname":"property","owner":"ShortcutParams","meta":{"description":["<p>The title can be localized, see <a href=\"https://wiki.appcelerator.org/display/guides2/Internationalization\">here</a>\nfor more infos. </p>"]},"id":"property-title"},{"name":"userInfo","tagname":"property","owner":"ShortcutParams","meta":{"description":["<p>The userInfo is an object containing information about the shortcut like an ID or details about it.</p>"]},"id":"property-userInfo"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":218498,"files":[{"filename":"titanium.js","href":"titanium.html#ShortcutParams"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.1.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>The parameters used when creating and receiving a shortcut. When used for creation, it must include \nat least the <code>itemtype</code> and <code>title</code> properties.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 5.1.0'>iPhone 5.1.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Object of options for <a href=\"#!/api/Titanium.UI.iOS.ApplicationShortcuts-method-addDynamicShortcut\" rel=\"Titanium.UI.iOS.ApplicationShortcuts-method-addDynamicShortcut\" class=\"docClass\">Titanium.UI.iOS.ApplicationShortcuts.addDynamicShortcut</a>.</p>\n\n<p><p>The parameters used when creating and receiving a shortcut. When used for creation, it must include \nat least the <code>itemtype</code> and <code>title</code> properties.</p>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.1.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-icon' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ShortcutParams'>ShortcutParams</span></div><a href='#!/api/ShortcutParams-property-icon' class='name expandable'>icon</a><span> : Number/String/<a href=\"#!/api/Titanium.Contacts.Person\" rel=\"Titanium.Contacts.Person\" class=\"docClass\">Titanium.Contacts.Person</a></span></div><div class='description'><div class='short'>The icon to be displayed on the application shortcut. ...</div><div class='long'><p>The icon to be displayed on the application shortcut. You can either use one of the constants like\n<a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_COMPOSE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_COMPOSE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_COMPOSE</a>, a local image specified by the image path or a reference to a\n<a href=\"#!/api/Titanium.Contacts.Person\" rel=\"Titanium.Contacts.Person\" class=\"docClass\">Titanium.Contacts.Person</a>.</p>\n\n<p><p>If you are using one of the pre-defined constants, you can reference to the list of icons from Apple <a href=\"https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/index.html#//apple_ref/c/tdef/UIApplicationShortcutIconType\">here</a>.</p>\n\n\n\n\n<p>If you are using an image file, enable slicing (adding the image to an asset catalog) for\nthe project. To enable slicing, add the <code>use-app-thinning</code> element to the <code>ios</code> element in the\n<code>tiapp.xml</code> file and set the value to <code>true</code>. If you do not enable slicing, the image will\nnot be displayed.</p>\n\n\n\n\n<pre><code>&lt;ti:app&gt;\n  &lt;ios&gt;\n    &lt;use-app-thinning&gt;true&lt;/use-app-thinning&gt;\n  &lt;/ios&gt;\n&lt;/ti:app&gt;\n</code></pre>\n\n\n\n\n<p>The recommended size for image files is 35dp (@2px: 70dp, @3x: 105dp). Also check the <a href=\"https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/index.html\">Apple documentation</a> <br>\nfor more information on shortcut icons.</p>\n\n\n<p></p>\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_COMPOSE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_COMPOSE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_COMPOSE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_PLAY\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_PLAY\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_PLAY</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_PAUSE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_PAUSE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_PAUSE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_ADD\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_ADD\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_ADD</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_LOCATION\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_LOCATION\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_LOCATION</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_SEARCH\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_SEARCH\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_SEARCH</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_SHARE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_SHARE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_SHARE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_PROHIBIT\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_PROHIBIT\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_PROHIBIT</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CONTACT\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CONTACT\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CONTACT</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_HOME\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_HOME\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_HOME</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_MARK_LOCATION\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_MARK_LOCATION\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_MARK_LOCATION</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_FAVORITE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_FAVORITE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_FAVORITE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_LOVE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_LOVE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_LOVE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CLOUD\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CLOUD\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CLOUD</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_INVITATION\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_INVITATION\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_INVITATION</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CONFIRMATION\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CONFIRMATION\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CONFIRMATION</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_MAIL\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_MAIL\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_MAIL</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_MESSAGE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_MESSAGE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_MESSAGE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_DATE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_DATE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_DATE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_TIME\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_TIME\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_TIME</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CAPTURE_PHOTO\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CAPTURE_PHOTO\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CAPTURE_VIDEO\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_CAPTURE_VIDEO\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_TASK\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_TASK\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_TASK</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_TASK_COMPLETED\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_TASK_COMPLETED\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_TASK_COMPLETED</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_ALARM\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_ALARM\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_ALARM</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_BOOKMARK\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_BOOKMARK\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_BOOKMARK</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_SHUFFLE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_SHUFFLE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_SHUFFLE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_AUDIO\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_AUDIO\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_AUDIO</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_UPDATE\" rel=\"Titanium.UI.iOS-property-SHORTCUT_ICON_TYPE_UPDATE\" class=\"docClass\">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_UPDATE</a>\n</li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></ul></p>\n\n</p></div></div></div><div id='property-itemtype' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ShortcutParams'>ShortcutParams</span></div><a href='#!/api/ShortcutParams-property-itemtype' class='name not-expandable'>itemtype</a><span> : String</span></div><div class='description'><div class='short'><p>The unique key for the application shortcut.</p>\n\n</div><div class='long'><p>The unique key for the application shortcut.</p>\n\n</div></div></div><div id='property-subtitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ShortcutParams'>ShortcutParams</span></div><a href='#!/api/ShortcutParams-property-subtitle' class='name not-expandable'>subtitle</a><span> : String</span></div><div class='description'><div class='short'><p>The subtitle displayed on the application shortcut.</p>\n\n</div><div class='long'><p>The subtitle displayed on the application shortcut.</p>\n\n<p><p>The subtitle can be localized, see <a href=\"https://wiki.appcelerator.org/display/guides2/Internationalization\">here</a>\nfor more infos. </p>\n\n</p></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ShortcutParams'>ShortcutParams</span></div><a href='#!/api/ShortcutParams-property-title' class='name not-expandable'>title</a><span> : String</span></div><div class='description'><div class='short'><p>The title of the application shortcut.</p>\n\n</div><div class='long'><p>The title of the application shortcut.</p>\n\n<p><p>The title can be localized, see <a href=\"https://wiki.appcelerator.org/display/guides2/Internationalization\">here</a>\nfor more infos. </p>\n\n</p></div></div></div><div id='property-userInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ShortcutParams'>ShortcutParams</span></div><a href='#!/api/ShortcutParams-property-userInfo' class='name not-expandable'>userInfo</a><span> : Object</span></div><div class='description'><div class='short'><p>The userInfo of the application shortcut.</p>\n\n</div><div class='long'><p>The userInfo of the application shortcut.</p>\n\n<p><p>The userInfo is an object containing information about the shortcut like an ID or details about it.</p>\n\n</p></div></div></div></div></div></div></div>"});