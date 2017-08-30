Ext.data.JsonP['Changing_the_VM']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Changing the VM Used with Studio</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083275\" class=\"content\">\n                        <h1>Changing the VM Used with Studio</h1>\n    <p>Some Studio users may need to change the VM they use for running Studio. These instructions describe how to switch between GCJ and Sun&apos;s JVM.    </p>\n    <p>1. Open a command prompt and type <strong class=\" \">java -version</strong> to see which VM you are currently running. If you are running GCJ, the command output will look like:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">java version </code><code class=\"string\">&quot;1.5.(some number)&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">gij (GNU libgcy) version </code><code class=\"value\">5.1</code><code class=\"plain\">.</code><code class=\"value\">0</code><code class=\"plain\"> (some number) (Red Hat some version number)</code></div>\n</div>\n    </div>\n    <p>If you&apos;re running Sun&apos;s JVM, the output will look like:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">java version </code><code class=\"string\">&quot;1.5.2_12&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">Java(TM) </code><code class=\"value\">2</code><code class=\"plain\"> Runtime Enrivonment, Standard Edition (build </code><code class=\"value\">1.4</code><code class=\"plain\">.5_12)</code></div>\n</div>\n    </div>\n    <p>2. At the command prompt, type the path for the VM that Studio should use. An example of this for GCJ is:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">cd &lt;path-to-aptana-root-directory&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">./aptanastudio3 -vm /etc/alternatives/java</code></div>\n</div>\n    </div>\n    <p>3. To check that the correct VM is running, replace the path with the path to Sun&apos;s &quot;java&quot; executable, or update your &quot;java&quot; soft link to point to Sun&apos;s java.    </p>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083275\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Changing the VM"});