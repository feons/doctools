Ext.data.JsonP['Installing_the_Java_Development_Tools']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Installing the Java Development Tools</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083143\" class=\"content\">\n                        <h1>Installing the Java Development Tools</h1>\n    <div class=\"section section-2 \" id=\"src-30083143_InstallingtheJavaDevelopmentTools-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Java_Development_Tools-section-src-30083143_InstallingtheJavaDevelopmentTools-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Java_Development_Tools-section-src-30083143_InstallingtheJavaDevelopmentTools-InstalltheEclipseJavaDevelopmentToolsplugin\">Install the Eclipse Java Development Tools plugin</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Java_Development_Tools-section-src-30083143_InstallingtheJavaDevelopmentTools-EnabletheProperSoftwareRepository\">Enable the Proper Software Repository</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Java_Development_Tools-section-src-30083143_InstallingtheJavaDevelopmentTools-FindandInstalltheJavaTooling\">Find and Install the Java Tooling</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083143_InstallingtheJavaDevelopmentTools-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>This guide explains how to install the Java Development Tools (JDT) into Studio.    </p>\n    <p>When updating or adding Eclipse plugins or software, the software repository varies with the version of Studio:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator/Titanium Studio Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Eclipse Repository Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Eclipse Version    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Helios    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.6    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.0.x - 3.1.3    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Indigo    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.7    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.4 - 3.4.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Kepler    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.3    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.0 - latest    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Luna    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.4    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083143_InstallingtheJavaDevelopmentTools-InstalltheEclipseJavaDevelopmentToolsplugin\">\n        <h2 class=\"heading \"><span>Install the Eclipse Java Development Tools plugin</span></h2>\n    <p>First we enable the default software repository and find and install the JDK toolkit.    </p>\n    <div class=\"section section-3 \" id=\"src-30083143_InstallingtheJavaDevelopmentTools-EnabletheProperSoftwareRepository\">\n        <h3 class=\"heading \"><span>Enable the Proper Software Repository</span></h3>\n<ol class=\" \"><li class=\" \">    <p>From the menu bar, select the <strong class=\" \">Help</strong> &gt; <strong class=\" \">Install New Software...</strong>    </p>\n    <img src=\"images/download/attachments/30083143/ADT_install_01.png\" alt=\"images/download/attachments/30083143/ADT_install_01.png\" class=\"confluence-embedded-image\" width=\"600\">\n    </img></li><li class=\" \">    <p>Under the top <strong class=\" \">Work with</strong> drop-down menu, click the link in the phrase, <i class=\" \">Find more software by working with the</i> <strong class=\" \">Available Software Sites</strong> <i class=\" \">preferences</i>    </p>\n    <img src=\"images/download/attachments/30083143/ADT_install_02.png\" alt=\"images/download/attachments/30083143/ADT_install_02.png\" class=\"confluence-embedded-image\" width=\"600\">\n    </img></li><li class=\" \">    <p>Enable the <strong class=\" \">Eclipse &lt;Code_Name&gt; Update Site</strong>. This name varies with the version of Studio you are using.  See the table at the top of this page for more details.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">OK</strong> button    </p>\n    <img src=\"images/download/attachments/30083143/ADT_install_03.png\" alt=\"images/download/attachments/30083143/ADT_install_03.png\" class=\"confluence-embedded-image\" width=\"600\">\n    </img></li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-30083143_InstallingtheJavaDevelopmentTools-FindandInstalltheJavaTooling\">\n        <h3 class=\"heading \"><span>Find and Install the Java Tooling</span></h3>\n<ol class=\" \"><li class=\" \">    <p>Using the <strong class=\" \">Work with</strong> drop-down menu, select <strong class=\" \">Eclipse &lt;Code_Name&gt; Update Site</strong>. This name varies with the version of Studio you are using.  See the table at the top of this page for more details.    </p>\n</li><li class=\" \">    <p>Wait for the package list to be populated    </p>\n    <img src=\"images/download/attachments/30083143/ADT_install_04.png\" alt=\"images/download/attachments/30083143/ADT_install_04.png\" class=\"confluence-embedded-image\" width=\"600\">\n    </img></li><li class=\" \">    <p>Select the <strong class=\" \">Programming Languages / Eclipse Java Development Tools</strong> package from the list.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Next</strong> button.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Next</strong> button on the <strong class=\" \">Install Details</strong> screen that follows.    </p>\n    <img src=\"images/download/attachments/30083143/ADT_install_05.png\" alt=\"images/download/attachments/30083143/ADT_install_05.png\" class=\"confluence-embedded-image\" width=\"600\">\n    </img></li><li class=\" \">    <p>Accept the license agreement.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Finish</strong> button.    </p>\n    <img src=\"images/download/attachments/30083143/ADT_install_06.png\" alt=\"images/download/attachments/30083143/ADT_install_06.png\" class=\"confluence-embedded-image\" width=\"600\">\n    </img></li><li class=\" \">    <p>Once the installation is complete, click the <strong class=\" \">Restart Now</strong> button .    </p>\n    <img src=\"images/download/attachments/30083143/ADT_install_07.png\" alt=\"images/download/attachments/30083143/ADT_install_07.png\" class=\"confluence-embedded-image\" width=\"600\">\n    </img></li></ol>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083143\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Installing the Java Development Tools"});