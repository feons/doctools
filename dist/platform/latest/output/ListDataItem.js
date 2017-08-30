Ext.data.JsonP['ListDataItem']({"tagname":"class","name":"ListDataItem","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ListItem.yml","description":["<p>In addition to the properties defined below, you can define custom key-value pairs, which bind to\nthe child templates of an {@link ItemTemplate}.  The key for these pairs match the <code>bindId</code> of\nthe child view templates and the values are a dictionary of view properties applied to the view components.\nAny other properties that are not identified by a <code>bindId</code> are permitted but are ignored by the item template.</p>\n\n<p>See {@link Titanium.UI.ListItem} for examples of using a list data item.</p>"]},"private":null,"id":"class-ListDataItem","members":{"cfg":[],"property":[{"name":"properties","tagname":"property","owner":"ListDataItem","meta":{"description":["<p>If there are properties set in the {@link ItemTemplate} (not the children view templates),\nthe values set in the list data item override the template's properties.</p>"]},"id":"property-properties"},{"name":"template","tagname":"property","owner":"ListDataItem","meta":{"description":["<p>On iOS, you can specify one of the following pre-defined templates:\n{@link Titanium.UI#property-LIST_ITEM_TEMPLATE_CONTACTS},\n{@link Titanium.UI#property-LIST_ITEM_TEMPLATE_SETTINGS} or {@link Titanium.UI#property-LIST_ITEM_TEMPLATE_SUBTITLE}.</p>"]},"id":"property-template"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":153937,"files":[{"filename":"titanium.js","href":"titanium.html#ListDataItem"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>In addition to the properties defined below, you can define custom key-value pairs, which bind to\nthe child templates of an <a href=\"#!/api/ItemTemplate\" rel=\"ItemTemplate\" class=\"docClass\">ItemTemplate</a>.  The key for these pairs match the <code>bindId</code> of\nthe child view templates and the values are a dictionary of view properties applied to the view components.\nAny other properties that are not identified by a <code>bindId</code> are permitted but are ignored by the item template.</p>\n\n\n\n\n<p>See <a href=\"#!/api/Titanium.UI.ListItem\" rel=\"Titanium.UI.ListItem\" class=\"docClass\">Titanium.UI.ListItem</a> for examples of using a list data item.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.1.0'>Android 3.1.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.1.0'>iPhone 3.1.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.1.0'>iPad 3.1.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Represents displayed item data.</p>\n\n<p><p>In addition to the properties defined below, you can define custom key-value pairs, which bind to\nthe child templates of an <a href=\"#!/api/ItemTemplate\" rel=\"ItemTemplate\" class=\"docClass\">ItemTemplate</a>.  The key for these pairs match the <code>bindId</code> of\nthe child view templates and the values are a dictionary of view properties applied to the view components.\nAny other properties that are not identified by a <code>bindId</code> are permitted but are ignored by the item template.</p>\n\n\n\n\n<p>See <a href=\"#!/api/Titanium.UI.ListItem\" rel=\"Titanium.UI.ListItem\" class=\"docClass\">Titanium.UI.ListItem</a> for examples of using a list data item.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-properties' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ListDataItem'>ListDataItem</span></div><a href='#!/api/ListDataItem-property-properties' class='name not-expandable'>properties</a><span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a>&lt;<a href=\"#!/api/Titanium.UI.ListItem\" rel=\"Titanium.UI.ListItem\" class=\"docClass\">Titanium.UI.ListItem</a>&gt;</span></div><div class='description'><div class='short'><p>Contains key-value pairs of view properties and their values that are applied to the\n<code>ListItem</code>.</p>\n\n</div><div class='long'><p>Contains key-value pairs of view properties and their values that are applied to the\n<code>ListItem</code>.</p>\n\n<p><p>If there are properties set in the <a href=\"#!/api/ItemTemplate\" rel=\"ItemTemplate\" class=\"docClass\">ItemTemplate</a> (not the children view templates),\nthe values set in the list data item override the template's properties.</p>\n\n</p></div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ListDataItem'>ListDataItem</span></div><a href='#!/api/ListDataItem-property-template' class='name expandable'>template</a><span> : String/Number</span></div><div class='description'><div class='short'>Template ID configured with the Titanium.UI.ListView.templates property or\nTitanium.UI.LIST_ITEM_TEMPLATE_DEFAULT. ...</div><div class='long'><p>Template ID configured with the <a href=\"#!/api/Titanium.UI.ListView-property-templates\" rel=\"Titanium.UI.ListView-property-templates\" class=\"docClass\">Titanium.UI.ListView.templates</a> property or\n<a href=\"#!/api/Titanium.UI-property-LIST_ITEM_TEMPLATE_DEFAULT\" rel=\"Titanium.UI-property-LIST_ITEM_TEMPLATE_DEFAULT\" class=\"docClass\">Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT</a>.</p>\n\n<p><p>On iOS, you can specify one of the following pre-defined templates:\n<a href=\"#!/api/Titanium.UI-property-LIST_ITEM_TEMPLATE_CONTACTS\" rel=\"Titanium.UI-property-LIST_ITEM_TEMPLATE_CONTACTS\" class=\"docClass\">Titanium.UI.LIST_ITEM_TEMPLATE_CONTACTS</a>,\n<a href=\"#!/api/Titanium.UI-property-LIST_ITEM_TEMPLATE_SETTINGS\" rel=\"Titanium.UI-property-LIST_ITEM_TEMPLATE_SETTINGS\" class=\"docClass\">Titanium.UI.LIST_ITEM_TEMPLATE_SETTINGS</a> or <a href=\"#!/api/Titanium.UI-property-LIST_ITEM_TEMPLATE_SUBTITLE\" rel=\"Titanium.UI-property-LIST_ITEM_TEMPLATE_SUBTITLE\" class=\"docClass\">Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE</a>.</p>\n\n</p><p>Default: If the ListView's `defaultItemTemplate` property is not set,\nthen <a href=\"#!/api/Titanium.UI-property-LIST_ITEM_TEMPLATE_DEFAULT\" rel=\"Titanium.UI-property-LIST_ITEM_TEMPLATE_DEFAULT\" class=\"docClass\">Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT</a> is used.\n</p></div></div></div></div></div></div></div>"});