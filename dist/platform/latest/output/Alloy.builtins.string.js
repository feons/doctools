Ext.data.JsonP['Alloy_builtins_string']({"tagname":"class","name":"Alloy.builtins.string","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"editurl":"https://github.com/appcelerator/alloy/edit/master/Alloy/builtins/string.js"},"private":null,"id":"class-Alloy.builtins.string","members":{"cfg":[],"property":[],"method":[{"name":"formatCurrency","tagname":"method","owner":"Alloy.builtins.string","meta":{},"id":"method-formatCurrency"},{"name":"lcfirst","tagname":"method","owner":"Alloy.builtins.string","meta":{},"id":"method-lcfirst"},{"name":"trim","tagname":"method","owner":"Alloy.builtins.string","meta":{},"id":"method-trim"},{"name":"trimZeros","tagname":"method","owner":"Alloy.builtins.string","meta":{},"id":"method-trimZeros"},{"name":"ucfirst","tagname":"method","owner":"Alloy.builtins.string","meta":{},"id":"method-ucfirst"},{"name":"urlDecode","tagname":"method","owner":"Alloy.builtins.string","meta":{},"id":"method-urlDecode"},{"name":"urlToJson","tagname":"method","owner":"Alloy.builtins.string","meta":{},"id":"method-urlToJson"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":43,"files":[{"filename":"alloy.js","href":"alloy2.html#Alloy-builtins-string"},{"filename":"string.js","href":"string.html#Alloy-builtins-string"}],"html_meta":{"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>A collection of utilities for manipulating strings.\nTo use the string builtin library,\nrequire it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>\n\n<pre><code>var string = require('/alloy/string');\nvar text = '     hola, mundo   ';\nTi.API.info(string.ucfirst(string.trim(text))); // --&gt; 'Hola, mundo'\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-formatCurrency' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.string'>Alloy.builtins.string</span></div><a href='#!/api/Alloy.builtins.string-method-formatCurrency' class='name expandable'>formatCurrency</a>( <span class='pre'>amount</span> ) : String</div><div class='description'><div class='short'>Returns an amount formatted as a currency value. ...</div><div class='long'><p>Returns an amount formatted as a currency value.\nUses the device settings to determine the currency symbol.\nOn the Mobile Web platform, the currency symbol will always be dollars ('$').</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>amount</span> : String<div class='sub-desc'><p>Amount to format.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Amount formatted as a currency value.</p>\n</div></li></ul></div></div></div><div id='method-lcfirst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.string'>Alloy.builtins.string</span></div><a href='#!/api/Alloy.builtins.string-method-lcfirst' class='name expandable'>lcfirst</a>( <span class='pre'>text</span> ) : String</div><div class='description'><div class='short'>Lowercases the first character in the string. ...</div><div class='long'><p>Lowercases the first character in the string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>String to lowercase.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>String with first character lowercased.</p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.string'>Alloy.builtins.string</span></div><a href='#!/api/Alloy.builtins.string-method-trim' class='name expandable'>trim</a>( <span class='pre'>line</span> ) : String</div><div class='description'><div class='short'>Removes leading and trailing white space from a string. ...</div><div class='long'><p>Removes leading and trailing white space from a string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : String<div class='sub-desc'><p>String to trim.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>String without leading and trailing white space.</p>\n</div></li></ul></div></div></div><div id='method-trimZeros' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.string'>Alloy.builtins.string</span></div><a href='#!/api/Alloy.builtins.string-method-trimZeros' class='name expandable'>trimZeros</a>( <span class='pre'>num</span> ) : Number</div><div class='description'><div class='short'>Removes trailing zeroes from a float value after the decimal point. ...</div><div class='long'><p>Removes trailing zeroes from a float value after the decimal point.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>num</span> : Object<div class='sub-desc'><p>Number to trim.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Number without trailing zeroes.</p>\n</div></li></ul></div></div></div><div id='method-ucfirst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.string'>Alloy.builtins.string</span></div><a href='#!/api/Alloy.builtins.string-method-ucfirst' class='name expandable'>ucfirst</a>( <span class='pre'>text</span> ) : String</div><div class='description'><div class='short'>Capitalizes the first character in the string. ...</div><div class='long'><p>Capitalizes the first character in the string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>String to capitalize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>String with first character capitalized.</p>\n</div></li></ul></div></div></div><div id='method-urlDecode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.string'>Alloy.builtins.string</span></div><a href='#!/api/Alloy.builtins.string-method-urlDecode' class='name expandable'>urlDecode</a>( <span class='pre'>url</span> ) : String</div><div class='description'><div class='short'>Converts URL-encoded characters in a string to ASCII characters. ...</div><div class='long'><p>Converts URL-encoded characters in a string to ASCII characters.\nFor example, the string '%38' will return '&amp;'.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>String to process.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>String with URL-encoded characters replaced with ASCII characters.</p>\n</div></li></ul></div></div></div><div id='method-urlToJson' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.string'>Alloy.builtins.string</span></div><a href='#!/api/Alloy.builtins.string-method-urlToJson' class='name expandable'>urlToJson</a>( <span class='pre'>url</span> ) : Object</div><div class='description'><div class='short'>Parses an URL and converts it to JSON-formatted data. ...</div><div class='long'><p>Parses an URL and converts it to JSON-formatted data.\nFor example, an URL with a query string will produce a JSON object with each query field paired\nwith its value as well as the base URL.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>URL to process.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>JSON-formatted URL data.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});