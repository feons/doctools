Ext.data.JsonP['Studio_Architecture']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Studio Architecture</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083190\" class=\"content\">\n                        <h1>Studio Architecture</h1>\n    <p>Studio is built on top of the Eclipse platform, a layer of plugins and wrapper code around the core Eclipse infrastructure. As such, it is compatible with many existing Eclipse plugins, and can itself be extended with additional plugins built on top.    </p>\n    <div class=\"section section-2 \" id=\"src-30083190_StudioArchitecture-Pluginarchitecture\">\n        <h2 class=\"heading \"><span>Plugin architecture</span></h2>\n    <p>For a full discussion of the plugin architecture, see the <a class=\"external-link external-link\" href=\"http://www.eclipse.org/articles/Article-Plug-in-architecture/plugin_architecture.html\" target=\"_blank\">Eclipse article</a>. In short, Eclipse allows extensions through plugins via XML configuration files called extension points. Extension points allow new plugins to contribute to an existing feature.    </p>\n    <p>As an example, Eclipse provides a &quot;Team&quot; infrastructure for source control providers to attach to. Individual providers, such as Git, will implement a set of classes and extension points that then enable wizards, menus and other elements to connect to Git.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083190_StudioArchitecture-Blockdiagram\">\n        <h2 class=\"heading \"><span>Block diagram</span></h2>\n    <p>Studio exists in layers, each piece building on the layer below. As shown in the diagram, Titanium Studio builds on top of Aptana Studio, which then builds of top of the generic Eclipse IDE platform.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    </p>\n    <p>Though the Eclipse layer appears to be the largest here, Titanium Studio encompasses roughly 350 plugins, with about 150 in Aptana, another 150 for Eclipse, and the remainder Titanium-specific.    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/30083190/Studio_Block_Diagram.png\" alt=\"images/download/attachments/30083190/Studio_Block_Diagram.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083190_StudioArchitecture-EditorContributions\">\n        <h2 class=\"heading \"><span>Editor Contributions</span></h2>\n    <p>In this snippet from the JS editor plugin.xml, you can see the variety of items to which an editor to contribute: editors, menus, content types, parsers, preference pages, etc.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\"> encoding=</code><code class=\"string\">&quot;UTF-8&quot;</code><code class=\"plain\">?&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;?eclipse version=</code><code class=\"string\">&quot;3.4&quot;</code><code class=\"plain\">?&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;plugin&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension-point id=</code><code class=\"string\">&quot;com.aptana.editor.js.typeMaps&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;%extension-point.typemaps.name&quot;</code><code class=\"plain\"> schema=</code><code class=\"string\">&quot;schema/typeMaps.exsd&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;org.eclipse.ui.editors&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;editor</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;com.aptana.editor.js.JSSourceEditor&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            contributorClass=</code><code class=\"string\">&quot;com.aptana.editor.common.CommonTextEditorActionContributor&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">default</code><code class=\"plain\">=</code><code class=\"string\">&quot;true&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            extensions=</code><code class=\"string\">&quot;js,htc,jsx&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            icon=</code><code class=\"string\">&quot;icons/js.png&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            id=</code><code class=\"string\">&quot;com.aptana.editor.js&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            name=</code><code class=\"string\">&quot;%editor.js.name&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">         &lt;contentTypeBinding</code></div>\n<div class=\"line\"><code class=\"plain\">               contentTypeId=</code><code class=\"string\">&quot;com.aptana.contenttype.js&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">         &lt;/contentTypeBinding&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/editor&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;org.eclipse.core.contenttype.contentTypes&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;content-type</code></div>\n<div class=\"line\"><code class=\"plain\">            base-type=</code><code class=\"string\">&quot;org.eclipse.core.runtime.text&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">default</code><code class=\"plain\">-charset=</code><code class=\"string\">&quot;UTF-8&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            file-extensions=</code><code class=\"string\">&quot;js,htc,jsx&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            id=</code><code class=\"string\">&quot;com.aptana.contenttype.js&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            name=</code><code class=\"string\">&quot;%content-type.js.name&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            priority=</code><code class=\"string\">&quot;normal&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/content-type&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;org.eclipse.core.runtime.preferences&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;initializer</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;com.aptana.editor.js.preferences.PreferenceInitializer&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/initializer&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;com.aptana.parsing.parser&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;parser</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;com.aptana.editor.js.parsing.JSParser&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            content-type=</code><code class=\"string\">&quot;com.aptana.contenttype.js&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/parser&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;org.eclipse.ui.menus&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;menuContribution</code></div>\n<div class=\"line\"><code class=\"plain\">            allPopups=</code><code class=\"string\">&quot;false&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            locationURI=</code><code class=\"string\">&quot;popup:#AbstractTextEditorContext?after=additions&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">         &lt;command</code></div>\n<div class=\"line\"><code class=\"plain\">               commandId=</code><code class=\"string\">&quot;com.aptana.editor.js.quick_outline&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">               style=</code><code class=\"string\">&quot;push&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">         &lt;/command&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/menuContribution&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;org.eclipse.ui.bindings&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;key</code></div>\n<div class=\"line\"><code class=\"plain\">            commandId=</code><code class=\"string\">&quot;com.aptana.editor.js.openDeclaration&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            contextId=</code><code class=\"string\">&quot;com.aptana.scripting.context&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            schemeId=</code><code class=\"string\">&quot;org.eclipse.ui.defaultAcceleratorConfiguration&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            sequence=</code><code class=\"string\">&quot;F3&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;org.eclipse.ui.preferencePages&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;page</code></div>\n<div class=\"line\"><code class=\"plain\">            category=</code><code class=\"string\">&quot;com.aptana.editor.common.preferences.EditorsPreferencePage&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;com.aptana.editor.js.preferences.JSPreferencePage&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            id=</code><code class=\"string\">&quot;com.aptana.editor.js.preferences.JSPreferencePage&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            name=</code><code class=\"string\">&quot;%page.js.name&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/page&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;extension</code></div>\n<div class=\"line\"><code class=\"plain\">         point=</code><code class=\"string\">&quot;com.aptana.buildpath.core.buildParticipants&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;participant</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;com.aptana.editor.js.validator.JSLintValidator&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            id=</code><code class=\"string\">&quot;com.aptana.editor.js.validator.JSLintValidator&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            name=</code><code class=\"string\">&quot;%validator.jslint.name&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            priority=</code><code class=\"string\">&quot;50&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">         &lt;contentTypeBinding</code></div>\n<div class=\"line\"><code class=\"plain\">               contentTypeId=</code><code class=\"string\">&quot;com.aptana.contenttype.js&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">         &lt;/contentTypeBinding&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/participant&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;/extension&gt;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">&lt;/plugin&gt;</code></div>\n</div>\n    </div>\n    <p>Studio also provides over 40 of its own extension points that downstream products can extend, on top of extending our existing classes via subclassing.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083190\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Studio Architecture"});