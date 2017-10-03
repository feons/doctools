Ext.data.JsonP['OptionDialog']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>OptionDialog</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845761\" class=\"content\">\n                        <h1>OptionDialog</h1>\n    <p>Demonstrates how to use an OptionDialog control, a modal view that includes a message and one or more option items.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">ui/optiondialog</strong>    </p>\n    </div>\n        <p>On Android an <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.OptionDialog\">OptionDialog</a> is centered on the screen, and at the bottom of the screen on iOS. On Android, you can add buttons below the options, or define a custom view to show in place of the options, as shown below. You can either the options or a custom view, but not both. On iPhone, a Cancel option is always displayed at the bottom of the dialog; on iPad, no cancel option is not displayed and the user can cancel the dialog by tapping outside the dialog.    </p>\n    <p>    <img src=\"images/download/attachments/41845761/screenshot.png\" alt=\"images/download/attachments/41845761/screenshot.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n    <p>The main index.xml view defines the OptionDialog options for Android and iOS. Individual options are defined by an &lt;Options&gt; element that contains one or more &lt;Option&gt; elements. On iOS, you should use the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.OptionDialog-property-destructive\">destructive</a> attribute to specify the index of an option that is destructive or irreversible (like deleting a contact or photo, for example). Destructive options are colored red, as shown above.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- </code></div>\n<div class=\"line\"><code class=\"plain\">            Declare option dialog, which will be opened by an event. </code></div>\n<div class=\"line\"><code class=\"plain\">            The OptionDialog is not part of the view hierarchy.</code></div>\n<div class=\"line\"><code class=\"plain\">            On iOS, descructive and cancel will change the characteristics</code></div>\n<div class=\"line\"><code class=\"plain\">            of the options. </code></div>\n<div class=\"line\"><code class=\"plain\">        --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;OptionDialog id=</code><code class=\"string\">&quot;options&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;App Options&quot;</code><code class=\"plain\"> destructive=</code><code class=\"string\">&quot;3&quot;</code><code class=\"plain\"> cancel=</code><code class=\"string\">&quot;2&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Options&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Option&gt;option </code><code class=\"value\">1</code><code class=\"plain\">&lt;/Option&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Option&gt;option </code><code class=\"value\">2</code><code class=\"plain\">&lt;/Option&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Option&gt;cancel&lt;/Option&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Option&gt;destructive&lt;/Option&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Options&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- buttonNames only rendered on Android --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;ButtonNames&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;ButtonName&gt;button </code><code class=\"value\">1</code><code class=\"plain\">&lt;/ButtonName&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;ButtonName&gt;button </code><code class=\"value\">2</code><code class=\"plain\">&lt;/ButtonName&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/ButtonNames&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- </code></div>\n<div class=\"line\"><code class=\"plain\">                Only on Android, an additional view can be added to be rendered in</code></div>\n<div class=\"line\"><code class=\"plain\">                the OptionDialog, replacing any declared options. It will be </code></div>\n<div class=\"line\"><code class=\"plain\">                assigned to the underlying </code><code class=\"string\">&quot;androidView&quot;</code><code class=\"plain\"> property of the OptionDialog.  </code></div>\n<div class=\"line\"><code class=\"plain\">            --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;View layout=</code><code class=\"string\">&quot;horizontal&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;ImageView id=</code><code class=\"string\">&quot;avImage&quot;</code><code class=\"plain\"> image=</code><code class=\"string\">&quot;/appc4.png&quot;</code><code class=\"plain\"> height=</code><code class=\"string\">&quot;40dp&quot;</code><code class=\"plain\"> width=</code><code class=\"string\">&quot;40dp&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label id=</code><code class=\"string\">&quot;avLabel&quot;</code><code class=\"plain\">&gt;This is an androidView&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/OptionDialog&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- The actual view hierarchy code --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button onClick=</code><code class=\"string\">&quot;showOptions&quot;</code><code class=\"plain\">&gt;options&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845761_OptionDialog-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.OptionDialog\">Titanium.UI.OptionDialog</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845761\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"OptionDialog"});