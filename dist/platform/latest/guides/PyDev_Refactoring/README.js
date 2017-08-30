Ext.data.JsonP['PyDev_Refactoring']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Refactoring</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083063\" class=\"content\">\n                        <h1>PyDev Refactoring</h1>\n    <p>Well, let&apos;s see how refactoring works... and let&apos;s make it by example     <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/smile.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/smile.png\" class=\"emoticon emoticon-smile\">\n    </img></p>\n    <p>As our &apos;base&apos;, we will use the example below:    </p>\n    <p>    <img src=\"images/pydev.org/images/refactor/refactor_base.png\" alt=\"images/pydev.org/images/refactor/refactor_base.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p>Features:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>Keybinding: <strong class=\" \">Alt+Shift+R</strong>    </p>\n</li><li class=\" \">    <p>Supports <strong class=\" \">preview</strong>    </p>\n</li><li class=\" \">    <p>Integrated in the editor (but not in the package explorer, so, it can rename a module, but only through an import to that module)    </p>\n</li><li class=\" \">    <p>Supports <strong class=\" \">undo/redo</strong> in the workspace    </p>\n</li><li class=\" \">    <p>Rename class    </p>\n</li><li class=\" \">    <p>Rename method    </p>\n</li><li class=\" \">    <p>Rename attribute    </p>\n</li><li class=\" \">    <p>Rename imports    </p>\n</li><li class=\" \">    <p>Rename local variable    </p>\n</li></ul>    <p>Let&apos;s say we want to rename our &apos;newVar&apos;, and call it &apos;renamedVar&apos;. To do that, mark it and press <strong class=\" \">Alt+Shift+R</strong> and set the name to &apos;renamedVar&apos;    </p>\n    <p>    <img src=\"images/pydev.org/images/refactor/refactor_rename1.png\" alt=\"images/pydev.org/images/refactor/refactor_rename1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>That would give us the following result:    </br></img></p>\n    <img src=\"images/pydev.org/images/refactor/refactor_rename2.png\" alt=\"images/pydev.org/images/refactor/refactor_rename2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        <p><strong class=\" \">Extracting a method</strong>: Let&apos;s mark the &apos;100+500&apos; and press <strong class=\" \">Alt+Shift+M</strong> (alternatively, you could use a context menu: press the right button and select: refactoring &gt; Extract Method). And set the name of the new method to &apos;newMethod&apos;.    </p>\n    <p>    <img src=\"images/pydev.org/images/refactor/refactor_extract_method1.png\" alt=\"images/pydev.org/images/refactor/refactor_extract_method1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>That would give us the following result:    </br></img></p>\n    <img src=\"images/pydev.org/images/refactor/refactor_extract_method2.png\" alt=\"images/pydev.org/images/refactor/refactor_extract_method2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        <p><strong class=\" \">Inlining a variable</strong>: Let&apos;s say that we are still not satisfied with that, we wouldn&apos;t like that &apos;var&apos; variable, so, we want to remove the reference to it and call the method directly. To do that, mark the &apos;var&apos; and press <strong class=\" \">Alt+Shift+I</strong>.    </p>\n    <p>    <img src=\"images/pydev.org/images/refactor/refactor_inline1.png\" alt=\"images/pydev.org/images/refactor/refactor_inline1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>That would give us the following result:    </br></img></p>\n    <img src=\"images/pydev.org/images/refactor/refactor_inline2.png\" alt=\"images/pydev.org/images/refactor/refactor_inline2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        <p><strong class=\" \">Extracting a variable</strong>: Ok, it just wasn&apos;t what we wanted, so, let&apos;s make the opposite refactoring, let&apos;s extract a variable from the self.newMethod() call. Mark it and press <strong class=\" \">Alt+Shift+L</strong> and set the name to &apos;newVar&apos;    </p>\n    <p>    <img src=\"images/pydev.org/images/refactor/refactor_extract_var1.png\" alt=\"images/pydev.org/images/refactor/refactor_extract_var1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>That would give us the following result:    </br></img></p>\n    <p>    <img src=\"images/pydev.org/images/refactor/refactor_extract_var2.png\" alt=\"images/pydev.org/images/refactor/refactor_extract_var2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>And that&apos;s it for the refactoring... hope you enjoy it.    </br></img></p>\n        </img></img></img></div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083063\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"PyDev Refactoring"});