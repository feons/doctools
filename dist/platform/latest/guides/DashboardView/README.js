Ext.data.JsonP['DashboardView']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>DashboardView</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845743\" class=\"content\">\n                        <h1>DashboardView</h1>\n    <p>Demonstrates basic use of a DashboardView control in an Alloy application.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">ui/dashboard</strong>    </p>\n    </div>\n        <p>The <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView\">DashboardView</a> control presents a grid of icons, represented by <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardItem\">DashboardItem</a>s, that can reordered and deleted, similar to the iOS home screen (Springboard). Each grid icon can be assigned a numeric badge value displayed over the icon, and be assigned a select . You can configure the number of grid rows and columns. To start edit mode, a user can long-press on a icon, or the application can call the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-method-startEditing\">startEditing()</a> method. The control generates several events as the user <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-edit\">enters</a> or <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-commit\">exits</a> edit mode, <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-delete\">deletes</a> or <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-move\">moves</a> an item, or <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-pagechanged\">changes</a> to another page.    </p>\n    <p>    <img src=\"images/download/attachments/41845743/screenshot.png\" alt=\"images/download/attachments/41845743/screenshot.png\" class=\"confluence-embedded-image\" width=\"640\">\n        </img></p>\n    <p>The index.xml view declares a DashboardView, and defines event handlers for <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-click\">click</a>, <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-edit\">edit</a> and <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView-event-commit\">commit</a> events that are defined by the view-controller.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Toolbar top=</code><code class=\"string\">&quot;0dp&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Items&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Button id=</code><code class=\"string\">&quot;editButton&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;toggleEditMode&quot;</code><code class=\"plain\">&gt;Edit&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Items&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Toolbar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;DashboardView id=</code><code class=\"string\">&quot;dash&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;resetBadge&quot;</code><code class=\"plain\"> onEdit=</code><code class=\"string\">&quot;handleEdit&quot;</code><code class=\"plain\"> onCommit=</code><code class=\"string\">&quot;handleCommit&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;account_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;account_on.png&quot;</code><code class=\"plain\"> badge=</code><code class=\"string\">&quot;10&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;account&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;calls_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;calls_on.png&quot;</code><code class=\"plain\"> badge=</code><code class=\"string\">&quot;110&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;calls&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;cases_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;cases_on.png&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;cases&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;contacts_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;contacts_on.png&quot;</code><code class=\"plain\"> badge=</code><code class=\"string\">&quot;23&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;contacts&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;emps_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;emps_on.png&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;employees&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;leads_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;leads_on.png&quot;</code><code class=\"plain\"> badge=</code><code class=\"string\">&quot;1&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;leads&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;meetings_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;meetings_on.png&quot;</code><code class=\"plain\"> badge=</code><code class=\"string\">&quot;5&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;meetings&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;opps_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;opps_on.png&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;opps&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;DashboardItem image=</code><code class=\"string\">&quot;tasks_off.png&quot;</code><code class=\"plain\"> selectedImage=</code><code class=\"string\">&quot;tasks_on.png&quot;</code><code class=\"plain\"> label=</code><code class=\"string\">&quot;tasks&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/DashboardView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The view-controller defines the event handler functions.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">var isEditable = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">function resetBadge(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    e.item.badge = </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function toggleEditMode(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (isEditable) {</code></div>\n<div class=\"line\"><code class=\"plain\">        $.dash.stopEditing();</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        $.dash.startEditing();</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function handleEdit(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.title = </code><code class=\"string\">&apos;Done&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.DONE;</code></div>\n<div class=\"line\"><code class=\"plain\">    isEditable = </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function handleCommit(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.title = </code><code class=\"string\">&apos;Edit&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.PLAIN;</code></div>\n<div class=\"line\"><code class=\"plain\">    isEditable = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845743_DashboardView-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardView\">Titanium.UI.DashboardView</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.DashboardItem\">Titanium.UI.DashboardItem</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/DashboardView_Binding\">DashboardView Binding</a> sample application, which demonstrates using data binding with a DashboardView.    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845743\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"DashboardView"});