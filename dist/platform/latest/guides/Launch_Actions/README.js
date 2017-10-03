Ext.data.JsonP['Launch_Actions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Launch Actions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-31523405\" class=\"content\">\n                        <h1>Launch Actions</h1>\n    <div class=\"section section-2 \" id=\"src-31523405_LaunchActions-Actions\">\n        <h2 class=\"heading \"><span>Actions</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Launch_Actions-section-src-31523405_LaunchActions-Requirements\">Requirements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Launch_Actions-section-src-31523405_LaunchActions-Description\">Description</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Launch_Actions-section-src-31523405_LaunchActions-Invocation\">Invocation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Launch_Actions-section-src-31523405_LaunchActions-Getlaunchtypes\">Get launch types</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Launch_Actions-section-src-31523405_LaunchActions-Launchingaproject\">Launching a project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Launch_Actions-section-src-31523405_LaunchActions-Sampleofuse\">Sample of use</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-31523405_LaunchActions-Requirements\">\n        <h2 class=\"heading \"><span>Requirements</span></h2>\n    <p>The examples in this page use the <i class=\" \"><strong class=\" \">Prototype</strong></i> library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-31523405_LaunchActions-Description\">\n        <h2 class=\"heading \"><span>Description</span></h2>\n    <p>These set of actions can:    </p>\n<ol class=\" \"><li class=\" \">    <p>Retrieve information from the Studio regarding the available launch shortcuts (types).    </p>\n</li><li class=\" \">    <p>Invoke an available launch on a specific project and mode.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-31523405_LaunchActions-Invocation\">\n        <h2 class=\"heading \"><span>Invocation</span></h2>\n    <p>This command is executed immediately in a synchronous way for the retrieval of the launch information, and execute asynchronously for the launch itself.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-31523405_LaunchActions-Getlaunchtypes\">\n        <h2 class=\"heading \"><span>Get launch types</span></h2>\n    <p>The following <i class=\" \">dispatch</i> call will get a <i class=\" \">Map</i> of all the available launch type IDs for a given project name and launch mode:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var launchTypes = dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">  controller: </code><code class=\"string\">&apos;portal.launch&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  action: </code><code class=\"string\">&quot;getLaunchTypes&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  args: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;project&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;MyProject&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;mode&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;run&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON()).evalJSON();</code></div>\n</div>\n    </div>\n    <p><strong class=\" \">Conditions:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>The project must be accessible for a successful retrieval of the mapping.    </p>\n</li><li class=\" \">    <p>The mode can <i class=\" \">only</i> be one of: <i class=\" \">&apos;run&apos;, &apos;debug&apos; or &apos;profile&apos;</i>    </p>\n</li></ol>    <p>The returned value is a <i class=\" \">Map</i> between launch type IDs and their descriptive name.<br>That way, it&apos;s possible to render the same string the Studio display when a user right click a project and select <i class=\" \">&apos;Run As -&gt; ...&apos;</i>.<br>The returned type ID should later be used with the <i class=\" \"><strong class=\" \">launch</strong></i> command-action.    </br></br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-31523405_LaunchActions-Launchingaproject\">\n        <h2 class=\"heading \"><span>Launching a project</span></h2>\n    <p>The following <i class=\" \">dispatch</i> call will launch a specified project.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var result = dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">  controller: </code><code class=\"string\">&apos;portal.launch&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  action: </code><code class=\"string\">&quot;launch&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  args: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;project&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;MyProject&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;mode&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;run&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;com.aptana.launch.type.id&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON());</code></div>\n</div>\n    </div>\n    <p><strong class=\" \">Conditions:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>The project must be accessible for a successful retrieval of the mapping.    </p>\n</li><li class=\" \">    <p>The mode can <i class=\" \">only</i> be one of: <i class=\" \">&apos;run&apos;, &apos;debug&apos; or &apos;profile&apos;</i>    </p>\n</li><li class=\" \">    <p>The <i class=\" \">type</i> must be one that match a type that is returned with the <i class=\" \">getLaunchTypes</i> call.    </p>\n</li></ol>    <p>The <i class=\" \">result</i> field indicate &quot;OK&quot; or &quot;ERROR&quot;. In case of an &quot;OK&quot;, a launch will start in a Job.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-31523405_LaunchActions-Sampleofuse\">\n        <h2 class=\"heading \"><span>Sample of use</span></h2>\n    <p>An extensive example exists at the <i class=\" \"><strong class=\" \"><a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3-sdk\" target=\"_blank\">studio3-sdk</a></strong></i> repository (<i class=\" \">launch.js</i>)    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=31523405\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Launch Actions"});