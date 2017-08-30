Ext.data.JsonP['ScrollableView_Binding']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ScrollableView Binding</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845710\" class=\"content\">\n                        <h1>ScrollableView Binding</h1>\n    <p>Demonstrates binding a data collection to a ScrollableView component.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_scrollableview</strong>    </p>\n    </div>\n        <img src=\"images/download/attachments/41845710/scrollableview.png\" alt=\"images/download/attachments/41845710/scrollableview.png\" class=\"confluence-embedded-image\" width=\"200\">\n        <p>The main index.xml view defines the ScrollableView element and sets its dataCollection attribute to the &quot;articles&quot; collection. The content of each ScrollableView screen is defined by the article.xml view, which is included via a &lt;Require/&gt; element.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ScrollableView dataCollection=</code><code class=\"string\">&quot;articles&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Require src=</code><code class=\"string\">&quot;article&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/ScrollableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The article.xml view defines a &lt;ScrollView/&gt; element containing an Image element and two Label elements. The content of each UI element is bound to the fields in the collection: <strong class=\" \">image</strong>, <strong class=\" \">title,</strong> and <strong class=\" \">content.</strong>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/article.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/article.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ScrollView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ImageView </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;image&quot;</code><code class=\"plain\"> image=</code><code class=\"string\">&quot;{image}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\"> text=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;content&quot;</code><code class=\"plain\"> text=</code><code class=\"string\">&quot;{content}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ScrollView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The model configuration file, article.js, uses an external SQLite data file to provide the columns and initial data set provided by the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/blob/master/test/apps/models/binding_scrollableview/assets/articles.sqlite\" target=\"_blank\">app/assets/articles.sqlite</a> file.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/models/article.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/models/article.js\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        adapter: {</code></div>\n<div class=\"line\"><code class=\"plain\">            type: </code><code class=\"string\">&apos;sql&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            collection_name: </code><code class=\"string\">&apos;articles&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            db_file: </code><code class=\"string\">&apos;/articles.sqlite&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845710_ScrollableViewBinding-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ScrollableView\">Titanium.UI.ScrollableView</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/SQL_Preload\">SQL Preload sample app</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </img></div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845710\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ScrollableView Binding"});