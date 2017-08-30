Ext.data.JsonP['Controller_events']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Controller events</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845685\" class=\"content\">\n                        <h1>Controller events</h1>\n    <p>Demonstrates using <a class=\"external-link external-link\" href=\"http://backbonejs.org/#Events\" target=\"_blank\">Backbone events</a> to communicate between view-controllers.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">basics/controller_events</strong>    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/41845685/controller-event.png\" alt=\"images/download/attachments/41845685/controller-event.png\" class=\"confluence-embedded-image\" width=\"250\">\n    </img></p>\n    <p>The main XML view consists of a TextField and two buttons, labeled &quot;Fire Event&quot; and &quot;Remove Listener&quot;. When the user clicks &quot;Fire Event&quot; the required CustomView view-controller uses the Backbone library&apos;s <tt class=\" \">trigger()</tt> method to generate an event named <strong class=\" \">someEvent. </strong>The event object includes a field named <tt class=\" \">message</tt> field that contains the text entered in the TextField.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/CustomView.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/CustomView.js\">\n<div class=\"line\"><code class=\"plain\">function fireEvent(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">  $.trigger(</code><code class=\"string\">&apos;someEvent&apos;</code><code class=\"plain\">, {</code></div>\n<div class=\"line\"><code class=\"plain\">    message:$.text.value</code></div>\n<div class=\"line\"><code class=\"plain\">  });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>The main application view-controller binds a callback function named <strong class=\" \">handler</strong> to the <tt class=\" \">someEvent</tt> event, and displays the message enter in the TextField. It also provides a button that un-binds the handler from the same event.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">function handler(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">  alert(</code><code class=\"string\">&apos;got this from custom event: &apos;</code><code class=\"plain\">+e.message);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function removeListener() {</code></div>\n<div class=\"line\"><code class=\"plain\">  $.requiredController.off(</code><code class=\"string\">&apos;someEvent&apos;</code><code class=\"plain\">, handler);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">$.requiredController.on(</code><code class=\"string\">&apos;someEvent&apos;</code><code class=\"plain\">, handler);</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845685_Controllerevents-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Events\" target=\"_blank\">Backbone Events guide</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845685\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Controller events"});