Ext.data.JsonP['Titanium_SDK_6.0.4.GA_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Titanium SDK 6.0.4.GA - 28 April 2017</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49160602\" class=\"content\">\n                        <h1>Titanium SDK 6.0.4.GA - 28 April 2017</h1>\n    <div class=\"section section-2 \" id=\"src-49160602_TitaniumSDK6.0.4.GAReleaseNote-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.4.GA_Release_Note-section-src-49160602_TitaniumSDK6.0.4.GAReleaseNote-Aboutthisrelease\">About this release</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.4.GA_Release_Note-section-src-49160602_TitaniumSDK6.0.4.GAReleaseNote-Fixedissues\">Fixed issues</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.4.GA_Release_Note-section-src-49160602_TitaniumSDK6.0.4.GAReleaseNote-APIchanges\">API changes</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-49160602_TitaniumSDK6.0.4.GAReleaseNote-Aboutthisrelease\">\n        <h2 class=\"heading \"><span>About this release</span></h2>\n    <p>Titanium SDK 6.0.4.GA is a patch release of the SDK, addressing high-priority issues from previous releases.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49160602_TitaniumSDK6.0.4.GAReleaseNote-Fixedissues\">\n        <h2 class=\"heading \"><span>Fixed issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24165\" target=\"_blank\">TIMOB-24165</a> - Android: Unable remove action bar using custom theme when the window background color is transparent.    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24265\" target=\"_blank\">TIMOB-24265</a> - Android: Application can&apos;t recover from storage permission change    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24316\" target=\"_blank\">TIMOB-24316</a> - Android: Can&apos;t get the right URL if app resume by URL for the second time    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24451\" target=\"_blank\">TIMOB-24451</a> - Android: ListView Template get varying sectionCount and sections array when it is inside a ScrollableView    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24497\" target=\"_blank\">TIMOB-24497</a> - Android: Resuming app from intent does not provide EXTRA    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24527\" target=\"_blank\">TIMOB-24527</a> - Android: Intents using FLAG_ACTIVITY_NEW_DOCUMENT can cause issues with KrollRuntime    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24531\" target=\"_blank\">TIMOB-24531</a> - Android: onBackPressed behaviour does not work correctly    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24555\" target=\"_blank\">TIMOB-24555</a> - Android: Latest Android Tools breaks development with Titanium    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24625\" target=\"_blank\">TIMOB-24625</a> - Android: Change help text for &quot;--device-id&quot; to use &quot;id&quot; instead of &quot;name&quot;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-23613\" target=\"_blank\">TIMOB-23613</a> - CLI: Encryption process fails on Windows with spawn ENAMETOOLONG on a large amount of files    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-23313\" target=\"_blank\">TIMOB-23313</a> - iOS app rejected because &quot;Invalid Swift Support - The SwiftSupport folder is missing&quot;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-23542\" target=\"_blank\">TIMOB-23542</a> - Memory-leaks and warnings across the iOS-project    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24364\" target=\"_blank\">TIMOB-24364</a> - iOS: HTTP Client leaks memory during upload using kroll-thread, eventually causing a force close    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24380\" target=\"_blank\">TIMOB-24380</a> - iOS: Cannot package for iOS iTunes Store; PhaseScriptExecution error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24580\" target=\"_blank\">TIMOB-24580</a> - iOS: SDK upgrade to 6.0.3.GA broke push notification registration    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24561\" target=\"_blank\">TIMOB-24561</a> - UniversalWindowsApp: Ti.Network change event crashes the app    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-49160602_TitaniumSDK6.0.4.GAReleaseNote-APIchanges\">\n        <h2 class=\"heading \"><span>API changes</span></h2>\n    <p>There were no API changes in this release.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49160602\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Titanium SDK 6.0.4.GA Release Note"});