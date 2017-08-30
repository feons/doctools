Ext.data.JsonP['DashboardView_Binding']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>DashboardView Binding</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41846569\" class=\"content\">\n                        <h1>DashboardView Binding</h1>\n    <p>Demonstrates how to use data binding with a DashboardView, which provides an    <span style=\"color: #484848;\">\n iOS Springboard-like view.    </span>\n    </p>\n    <p>    <span style=\"color: #484848;\">\n     </span>\n    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_dashboard</strong>    </p>\n    </div>\n        <p>    <span style=\"color: #484848;\">\n<br>    </br></span>\nItems in a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView\">DashboardView</a> are represented by <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardItem\">DashboardItem</a>s, which can be deleted and re-arranged.    </p>\n    <p>    <img src=\"images/download/attachments/41846569/dashboard.png\" alt=\"images/download/attachments/41846569/dashboard.png\" class=\"confluence-embedded-image\" width=\"250\">\n        </img></p>\n    <p>The model file, shown below, defines the columns (fields) for each DashboardItem, which include the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>image &#x2013; URL of image to display for item    </p>\n</li><li class=\" \">    <p>selectedImage &#x2013; URL of image to display when item is selected    </p>\n</li><li class=\" \">    <p>badge &#x2013; Number to display in badge overlaid the item.    </p>\n</li><li class=\" \">    <p>label &#x2013; Text to display for the item.    </p>\n</li><li class=\" \">    <p>weight &#x2013; Number that determines the sort order of  items.    </p>\n</li></ul>    <p>The model file also defines a <a class=\"external-link external-link\" href=\"http://backbonejs.org/#Collection-comparator\" target=\"_blank\">Backbone comparator</a> function to keep the items sorted according to the value of their <strong class=\" \">weight</strong> field. When the user rearranges the items in the DashboardView, their respective weights are updated to reflect their new position (see below).    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/model/icon.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/model/icon.js\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        columns: {</code></div>\n<div class=\"line\"><code class=\"plain\">            image: </code><code class=\"string\">&apos;TEXT&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            selectedImage: </code><code class=\"string\">&apos;TEXT&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            badge: </code><code class=\"string\">&apos;INTEGER&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            label: </code><code class=\"string\">&apos;TEXT&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            weight: </code><code class=\"string\">&apos;INTEGER&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        adapter: {</code></div>\n<div class=\"line\"><code class=\"plain\">            type: </code><code class=\"string\">&apos;sql&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            collection_name: </code><code class=\"string\">&apos;icons&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    extendModel: function(Model) {</code></div>\n<div class=\"line\"><code class=\"plain\">        _.extend(Model.prototype, {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"comments\">// Extend, override or implement Backbone.Model</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> Model;</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    extendCollection: function(Collection) {</code></div>\n<div class=\"line\"><code class=\"plain\">        _.extend(Collection.prototype, {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"comments\">// Implement the comparator method.</code></div>\n<div class=\"line\"><code class=\"plain\">            comparator : function(icon) {</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">return</code><code class=\"plain\"> icon.get(</code><code class=\"string\">&apos;weight&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        }); </code><code class=\"comments\">// end extend</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> Collection;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <p>The main view sets up the DashboardView and defines bindings between DashboardItems and the data model. It also associates event handlers for when the user deletes or rearranges the DashboardView items.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Toolbar id=</code><code class=\"string\">&quot;toolbar&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Items&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Button id=</code><code class=\"string\">&quot;editButton&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;toggleEditMode&quot;</code><code class=\"plain\">&gt;Edit&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Items&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Toolbar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label id=</code><code class=\"string\">&quot;helptext&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;DashboardView dataCollection=</code><code class=\"string\">&quot;icons&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;dash&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;resetBadge&quot;</code><code class=\"plain\"> onEdit=</code><code class=\"string\">&quot;handleEdit&quot;</code><code class=\"plain\"> onCommit=</code><code class=\"string\">&quot;handleCommit&quot;</code><code class=\"plain\"> onDelete=</code><code class=\"string\">&quot;handleDelete&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;{image}&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;{selectedImage}&quot;</code><code class=\"plain\"> badge=</code><code class=\"string\">&quot;{badge}&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;{label}&quot;</code><code class=\"plain\"> modelId=</code><code class=\"string\">&quot;{alloy_id}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/DashboardView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The main view-controller defines methods that do the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>Reset the badge value for a DashboardItem when the user clicks it.    </p>\n</li><li class=\" \">    <p>Stops and starts edit mode on the DashboardView.    </p>\n</li><li class=\" \">    <p>Handles the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-commit\">commit</a> event generated when the user leaves edit mode. The <tt class=\" \">weight</tt> value of each DashboardItem is reset according to its new position, if the user rearranged the items.    </p>\n</li><li class=\" \">    <p>Handles the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-delete\">delete</a> event when the user deletes an item in edit mode.    </p>\n</li></ul>    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var icons = Alloy.Collections.icons;</code></div>\n<div class=\"line\"><code class=\"plain\">var isEditable = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">function resetBadge(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var model = icons.get(e.item.modelId);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (model) {</code></div>\n<div class=\"line\"><code class=\"plain\">        model.set(</code><code class=\"string\">&apos;badge&apos;</code><code class=\"plain\">, </code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        model.save();</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        TI.API.error(</code><code class=\"string\">&apos;No corresponding model found for DashboardItem in resetBadge()&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function toggleEditMode(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (isEditable) {</code></div>\n<div class=\"line\"><code class=\"plain\">        $.dash.stopEditing();</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        $.dash.startEditing();</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function handleEdit(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// edit is fired when you enter edit mode</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.title = </code><code class=\"string\">&apos;Done&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.DONE;</code></div>\n<div class=\"line\"><code class=\"plain\">    isEditable = </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function handleCommit(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// commit is fired when you exit edit mode</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&apos;Commit: &apos;</code><code class=\"plain\"> + JSON.stringify(e));</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.title = </code><code class=\"string\">&apos;Edit&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.PLAIN;</code></div>\n<div class=\"line\"><code class=\"plain\">    isEditable = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// rearrange the items by setting their weights equal to their new order in the data e.source.array</code></div>\n<div class=\"line\"><code class=\"plain\">    var itemsArray = e.source.data;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">for</code><code class=\"plain\">(var i=</code><code class=\"value\">0</code><code class=\"plain\">,j=itemsArray.length;i&lt;j;i++) {</code></div>\n<div class=\"line\"><code class=\"plain\">        var model = icons.get(itemsArray[i].modelId);</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (model) {</code></div>\n<div class=\"line\"><code class=\"plain\">            model.set(</code><code class=\"string\">&apos;weight&apos;</code><code class=\"plain\">, i);</code></div>\n<div class=\"line\"><code class=\"plain\">            model.save();</code></div>\n<div class=\"line\"><code class=\"plain\">        } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">            TI.API.error(</code><code class=\"string\">&apos;No corresponding model found for DashboardItem in resetBadge()&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// have to re-fetch to show the new order without having to fully-quit the app</code></div>\n<div class=\"line\"><code class=\"plain\">    icons.fetch();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function handleDelete(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// This event fires on item clicks and other times it should not, see https://jira.appcelerator.org/browse/TIMOB-13649</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&apos;Delete item: &apos;</code><code class=\"plain\"> + e.item.label);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">icons.fetch();</code></div>\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41846569_DashboardViewBinding-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView\">Titanium.UI.DashboardView</a> API reference    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardItem\">Titanium.UI.DashboardItem</a> API reference    </p>\n</li></ul>    <p>    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41846569\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"DashboardView Binding"});