Ext.data.JsonP['PyDev_Running_a_program']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Running a program</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083051\" class=\"content\">\n                        <h1>PyDev Running a program</h1>\n    <p>Ok, now that you&apos;re already up and running, let&apos;s <strong class=\" \">run a program from within Eclipse</strong> with PyDev.    </p>\n    <p>For that, we will extend the module we created in the previous chapter with the following program:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> __name__ </code><code class=\"keyword\">=</code><code class=\"keyword\">=</code><code class=\"plain\"> </code><code class=\"string\">&apos;__main__&apos;</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">print</code><code class=\"plain\"> </code><code class=\"string\">&apos;Hello World&apos;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n</div>\n    </div>\n    <p>Then, to run the file you can:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>Use a shortcut: <strong class=\" \">F9</strong> to run based on the project configuration where the module is contained.    </p>\n</li><li class=\" \">    <p>Go to the menu: Alt + R + S + The number of the Run you wish (It can be Python, Jython, unit-test, etc).    </p>\n</li><li class=\" \">    <p>Note: if you were using <strong class=\" \">unit-tests</strong>, you could use: <strong class=\" \">Ctrl+F9</strong> to run the unit-tests from the module (and even selecting which tests should be run).    </p>\n</li></ul>    <p><strong class=\" \">NOTE</strong>:    </p>\n    <blockquote>\n    <p>External files may be launched, but an associated project must be available. So, a file may be dragged from the filesystem into Eclipse and later, with the editor open F9 may be pressed to run the file...    </p>\n    <p>It&apos;ll still ask for a project to resolve the PYTHONPATH and interpreter to be used (you can probably just use any project you have that has the interpreter you want to use for the run or create a PyDev project as &apos;external_projects&apos; and bind those runs to it).    </p>\n    <p>&#x2013; The configuration created may be changed later on in the menu: Run &gt; Run configurations.    </p>\n        </blockquote>\n    <p>    <img src=\"images/pydev.org/images/menu_run.png\" alt=\"images/pydev.org/images/menu_run.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>Doing so, the console should be brough forward with the output of the code (if you had some exception raised, clicking on it would bring you to the code in the stack-trace).    </br></img></p>\n    <p>After the first run, if you type <strong class=\" \">Ctrl+F11</strong>, the last file ran is re-run. Or, if you type just <strong class=\" \">F11</strong>, a debug session is started with your last run. Let&apos;s test this...    </p>\n    <p><strong class=\" \">Note</strong>: This behavior changed in Eclipse 3.3 &#x2013; but it&apos;s generally recommended to restore it in the preferences at: <strong class=\" \">window &gt; preferences &gt; Run/Debug &gt; Launching</strong> and set the Launch Operation to <strong class=\" \">Always launch the previously launched application</strong>. This tutorial will always consider this as the default option.    </p>\n    <p>First, you&apos;ll need to add a breakpoint in the &quot;print &apos;Hello World&apos;&quot; line. To do so, go to the line and type <strong class=\" \">Ctrl+F10</strong> and select &apos;Add breakpoint&apos;, then type <strong class=\" \">F11</strong>. Doing so, will trigger you to go to the &apos;debug perspective&apos;. You should say <strong class=\" \">&apos;yes&apos;</strong> to this dialog.    </p>\n    <p>    <img src=\"images/pydev.org/images/perspective_to_debug.png\" alt=\"images/pydev.org/images/perspective_to_debug.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>After saying yes, you should be brought to the perspective below.    </br></img></p>\n    <p>    <img src=\"images/pydev.org/images/debug_perspective.png\" alt=\"images/pydev.org/images/debug_perspective.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>In this perspective, the debug actions are activated and presented to<br>you, so, you can use:    </br></br></img></p>\n    <p><strong class=\" \">F5</strong>: Step into    </p>\n    <p><strong class=\" \">F6</strong>: Step over    </p>\n    <p><strong class=\" \">F7</strong>: Step return    </p>\n    <p><strong class=\" \">F8</strong>: Resume execution    </p>\n    <p>After the debug session, you can return to the previous perspective by typing <strong class=\" \">&apos;Ctrl+F8&apos;</strong> (this keybinding iterates through the open perspectives)... And while we are at it, <strong class=\" \">&apos;Ctrl+F7&apos;</strong> iterates through the views and <strong class=\" \">&apos;Ctrl+F6&apos;</strong> iterates through the editors.    </p>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083051\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"PyDev Running a program"});