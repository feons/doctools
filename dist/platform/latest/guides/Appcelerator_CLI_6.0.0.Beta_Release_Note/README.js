Ext.data.JsonP['Appcelerator_CLI_6.0.0.Beta_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator CLI 6.0.0.Beta - 18 October 2016</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-48431468\" class=\"content\">\n                        <h1>Appcelerator CLI 6.0.0.Beta - 18 October 2016</h1>\n    <p>Appcelerator CLI 6.0.0.Beta is a patch release that includes several improvements and bug fixes.    </p>\n    <p>    <span style=\"color: #2b4771;\">\nComponent versions    </span>\n    </p>\n    <p>The following components are shipped with CLI 6.0.0.Beta:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Alloy    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.9.3    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Builder    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.8.9    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Cloud CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.2.1    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.10    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-2 \" id=\"src-48431468_AppceleratorCLI6.0.0.BetaReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1035\" target=\"_blank\">CLI-1035</a> - Update appc-app-preview-cli-hook to latest version    </p>\n<ul class=\" \"><li class=\" \">    <p>Improved logging message for appc-app-preview-cli-hook    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1046\" target=\"_blank\">CLI-1046</a> - Getting the correct module versions from dashboard    </p>\n<ul class=\" \"><li class=\" \">    <p class=\"p1\">The CLI pulls SDK compatible module versions    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1106\" target=\"_blank\">CLI-1106</a> - Improve speed of extracting modules on Windows    </p>\n<ul class=\" \"><li class=\" \">    <p>Decreased extraction time for Windows modules    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1115\" target=\"_blank\">CLI-1115</a> - Set Node 4.x as minimum supported version    </p>\n<ul class=\" \"><li class=\" \">    <p>Set Node 4.X as the minimum supported version    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-48431468_AppceleratorCLI6.0.0.BetaReleaseNote-Fixedissues\">\n        <h2 class=\"heading \"><span>Fixed issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1002\" target=\"_blank\">CLI-1002</a> - If you pass &quot;--help&quot; or &quot;-h&quot; flag to &quot;appc ti&quot;, then &quot;Cannot read property &apos;match&apos; of undefined&quot; error is returned    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1003\" target=\"_blank\">CLI-1003</a> - If you run &quot;appc setup&quot; with the help flag, then &quot;appc setup&quot; will try to find/download the latest core first    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1024\" target=\"_blank\">CLI-1024</a> - ti info returned the invalid json output    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1044\" target=\"_blank\">CLI-1044</a> - CLI 5.4.0-31 can not create apps in EU region    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1054\" target=\"_blank\">CLI-1054</a> - Set connection timeout for appc use command    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1071\" target=\"_blank\">CLI-1071</a> - Building with an invalidated session does not prompt for login and throws error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1077\" target=\"_blank\">CLI-1077</a> - CLI outputting non-JSON warning to Studio    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1081\" target=\"_blank\">CLI-1081</a> - Modules update failed with Error: Invalid URI    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1090\" target=\"_blank\">CLI-1090</a> - update-notifier still getting installed    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1092\" target=\"_blank\">CLI-1092</a> - Error &apos;Cannot read property &apos;replace&apos; of undefined&apos; when creating an app without Test in an enterprise org    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1099\" target=\"_blank\">CLI-1099</a> - appc login error when specify arrowcloud url without protocol    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1122\" target=\"_blank\">CLI-1122</a> - Hyperloop is downloaded every time lastUpdateCheckTiDownloads expires on Windows    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=48431468\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Appcelerator CLI 6.0.0.Beta Release Note"});