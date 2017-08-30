Ext.data.JsonP['Studio_4.7.0.RC_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Studio 4.7.0.RC - 3 August 2016</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-46254956\" class=\"content\">\n                        <h1>Studio 4.7.0.RC - 3 August 2016</h1>\n    <p>Studio 4.7.0.RC is a minor release that includes new features, improvements and bug fixes.    </p>\n    <div class=\"section section-2 \" id=\"src-46254956_Studio4.7.0.RCReleaseNote-NewFeatures\">\n        <h2 class=\"heading \"><span>New Features</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7763\" target=\"_blank\">TISTUD-7763</a> - Integrate error reporting from Appc Studio into analytics server    </p>\n<ul class=\" \"><li class=\" \">    <p>    <span style=\"color: #000000;\">\nAppcelerator Studio comes with a built-in error reporting tool that can be used to identify problems within the Studio and automatically upload problems to the Appcelerator analytics server, providing key insights as to where problems may exist in Studio and how they can be improved.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #222222;\">\nPlease see     </span>\n<a class=\"document-link \" href=\"#!/guide/Studio_Error_Reporting\">Studio Error Reporting</a>    <span style=\"color: #222222;\">\n for details on this new feature.    </span>\n    </p>\n</li></ul></li></ul><ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8492\" target=\"_blank\">TISTUD-8492</a> - Enable Hyperloop    </p>\n<ul class=\" \"><li class=\" \">    <p>The Hyperloop Module will give you direct access to the native APIs. Studio supports enabling Hyperloop Module during the new project creation and through tiapp.xml editor.    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46254956_Studio4.7.0.RCReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-422\" target=\"_blank\">GB-422</a> - Opening the controller on the creation of an action from the Properties view    </p>\n<ul class=\" \"><li class=\" \">    <p>When creating an action in the Properties of an element, the controller now opened    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-500\" target=\"_blank\">GB-500</a> - Using Alloy.Globals variables in Appcelerator App Designer get converted to strings    </p>\n<ul class=\" \"><li class=\" \">    <p>Added a new popup menu action called &quot;Set Variable&quot; to set the global properties as a variable    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8459\" target=\"_blank\">TISTUD-8459</a> - Windows: Remove Windows SDK Home field in preferences    </p>\n<ul class=\" \"><li class=\" \">    <p>Windows SDK Home field configuration is removed from the Studio Preferences.  CLI automatically detects these locations through the registry keys during the build.    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8467\" target=\"_blank\">TISTUD-8467</a> - Studio: Ability to set Windows SDK used to package app    </p>\n<ul class=\" \"><li class=\" \">    <p>Ability to set Windows SDK and publisher cert while packaging an app    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46254956_Studio4.7.0.RCReleaseNote-FixedIssues\">\n        <h2 class=\"heading \"><span>Fixed Issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-411\" target=\"_blank\">GB-411</a> - Ti.UI.VideoPlayer should be implemented as a drag &amp; drop element    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-479\" target=\"_blank\">GB-479</a> - Unable to view Design editor due to XML parsing error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-485\" target=\"_blank\">GB-485</a> - After you select an element, you cannot cancel the selection    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-486\" target=\"_blank\">GB-486</a> - View&apos;s backgroundGradient property has inaccurate information    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-495\" target=\"_blank\">GB-495</a> - Cannot open controller automatically after creating a function from the designer editor    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-513\" target=\"_blank\">GB-513</a> - Properties view always shows &quot;GUI Builder - iPhone&quot;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8453\" target=\"_blank\">TISTUD-8453</a> - Studio 4.6.0.201604041329 tries to create the samples view but fails with error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8458\" target=\"_blank\">TISTUD-8458</a> - Ran in to a NPE while trying to run Studio    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8477\" target=\"_blank\">TISTUD-8477</a> - Studio should support Github two factor authentication    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8483\" target=\"_blank\">TISTUD-8483</a> - Cannot build for Android    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8506\" target=\"_blank\">TISTUD-8506</a> - Cannot unpublish an Arrow app    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8516\" target=\"_blank\">TISTUD-8516</a> - Avoid error notification for &quot;Unable to retrieve the icon at null for sample Apple WatchOS2&quot;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8529\" target=\"_blank\">TISTUD-8529</a> - Update Hyperloop documentation link in the studio    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46254956\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Studio 4.7.0.RC Release Note"});