Ext.data.JsonP['Analytics_Architecture']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Analytics Architecture</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43298695\" class=\"content\">\n                        <h1>Analytics Architecture</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_AnalyticsArchitecture-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_AnalyticsArchitecture-AndroidAnalytics\">Android Analytics</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_AnalyticsArchitecture-iOSAnalytics\">iOS Analytics</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_AnalyticsArchitecture-FAQ\">FAQ</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLVdoYXRjb3VudHNhc2FuZXdzZXNzaW9uPw\">What counts as a new session?</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLVRoZWRldmljZWRldGFpbHNvZnRoZUFuYWx5dGljc3BhZ2VkaXNwbGF5c2luZm9ybWF0aW9uLHN1Y2hhcyJpUGFkMiw3Im9yImlQYWQzLDMiLldoYXRpc3RoZW1lYW5pbmdvZnRoZW51bWJlcmFmdGVydGhlY29tbWE_\">The device details of the Analytics page displays information, such as &quot;iPad2, 7&quot; or &quot;iPad3, 3&quot;. What is the meaning of the number after the comma?</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLVRoZW51bWJlcm9mdG90YWxpbnN0YWxsc3JlcG9ydGVkaW5BcHBjZWxlcmF0b3JBbmFseXRpY3Nkb2Vzbm90bWF0Y2h0aGVudW1iZXJvZmRvd25sb2Fkc3RoYXRhcmVyZXBvcnRlZGJ5dGhlaVR1bmVzb3JBbmRyb2lkYXBwc3RvcmUuV2hhdGlzZ29pbmdvbj8\">The number of total installs reported in Appcelerator Analytics does not match the number of downloads that are reported by the iTunes or Android app store. What is going on?</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Analytics_Architecture-section-src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLUhvd2RvSWRpc2FibGVUaXRhbml1bUFuYWx5dGljcz8\">How do I disable Titanium Analytics?</a>    </p>\n</li></ul></li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>This page describes the Analytics Architecture for AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services SDK, and Titanium SDK 3.3.0 and later.    </p>\n    </div>\n        <div class=\"section section-2 \" id=\"src-43298695_AnalyticsArchitecture-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>    <span style=\"color: #333333;\">\nAnalytics are sent by Titanium applications automatically unless the developer has chosen to turn them off. Generic analytics data about user activity session starts and ends, and application installations and upgrades are sent by default. Developers may send additional data to help understand how users are interacting with their application. Some analytics data can be viewed using the Analytics UI.    </span>\n    </p>\n    <p>    <span style=\"color: #333333;\">\nBy default, only the following events are sent by the Analytics module:    </span>\n    </p>\n<ul class=\" \"><li class=\" \">    <p>    <span style=\"color: #333333;\">\n<tt class=\" \">ti.enroll</tt>: indicates the first launch of the application after an installation or upgrade    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\n<tt class=\" \">ti.foreground</tt>: indicates the application is in the foreground and the start of a new session    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\n<tt class=\" \">ti.background</tt>: indicates the application is in the background and the current session has ended    </span>\n    </p>\n</li></ul>    <p>    <span style=\"color: #333333;\">\nFor a tutorial about sending additional data, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Analytics\">Appcelerator Analytics</a>.    </span>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298695_AnalyticsArchitecture-AndroidAnalytics\">\n        <h2 class=\"heading \"><span>Android Analytics</span></h2>\n    <p>For the Android platform, the Analytics module sends three events: <tt class=\" \">ti.enroll,</tt> which determines user installations or upgrades when the application is first ran, and <tt class=\" \">ti.foreground</tt> and <tt class=\" \">ti.background</tt>, which determines the session of application activity by the user.    </p>\n    <p class=\"p2\">The<strong class=\" \"> </strong><tt class=\" \">ti.enroll</tt> event is generated when <tt class=\" \">onCreate()</tt> is called. This event is only sent once on the first launch of the application after it has been installed or updated.    </p>\n    <p class=\"p2\">The <tt class=\" \">ti.foreground</tt> event is generated each time the activity calls the <tt class=\" \">onResume()</tt> method. The event is queued and is only sent if this is not the first event and the <tt class=\" \">ti.background</tt> event has not been generated recently. If a <tt class=\" \">ti.background</tt> event was processed within the last 30 seconds*, this indicates that a new activity is being opened on top of an old activity. A possible scenario is if you hit the Home button, then reopen the app quickly resulting in a <tt class=\" \">ti.foreground</tt> event to be placed on top of a <tt class=\" \">ti.background</tt> event. In this case, both events are removed from the queue and the current session is still active.    </p>\n    <p class=\"li4\">The <tt class=\" \">ti.background</tt> event is generated when the activity calls the <tt class=\" \">onPause()</tt> method, which occurs in the following scenarios:    </p>\n<ul class=\" \"><li class=\"li6 \">    <p>A new activity opens on top of the current activity, so the current activity (A1) is being replaced by a new activity (A2). In this scenario, the old activity (A1) would receive an <tt class=\" \">onPause()</tt> call, which generates a <tt class=\" \">ti.background</tt> event, then within a short period, the new activity (A2) would start and receive its <tt class=\" \">onResume()</tt> call, which generates a <tt class=\" \">ti.foreground</tt> event. Both of these event are removed from the queue, marking the current session as still active.    </p>\n</li><li class=\"li6 \">    <p>The application is placed in the background by hitting the Home button or Power button. In this scenario, the current activity receives an <tt class=\" \">onPause()</tt> call, which generates a <tt class=\" \">ti.background</tt> event to be placed in the event queue, which is sent after a small threshold of time to ensure a <tt class=\" \">ti.foreground</tt> event is not generated.    </p>\n</li></ul>    <p class=\"li6\">Having <tt class=\" \">onPause()</tt> generate the <tt class=\" \">ti.background</tt> event ensures that it is generated in cases where the app was forced killed by the user or by the system due to low memory. The same case would be applicable in the scenario where the current activity is the only activity in the stack and it is closed by backing out of the application using the Back button until the application closes.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>(*) The default timeout is 30 seconds. If you are using the APS SDK, you can change the default timeout value. You cannot change the default timeout value for Titanium applications.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-43298695_AnalyticsArchitecture-iOSAnalytics\">\n        <h2 class=\"heading \"><span>iOS Analytics</span></h2>\n    <p>For the iOS platform, the Analytics module sends the same events as the Android platform:    </p>\n<ul class=\" \"><li class=\" \">    <p>    <span style=\"color: #000000;\">\nThe     </span>\n<tt class=\" \">ti.enroll</tt>    <span style=\"color: #000000;\">\n event is    </span>\n    <span style=\"color: #000000;\">\n only sent once on the first launch of the application after it has been installed or updated.    </span>\n    </p>\n</li><li class=\" \">    <p>The <tt class=\" \">ti.foreground</tt> event is generated when the application boots up and enters the foreground while the app transitions from the background to the active state, that is, from within the <tt class=\" \">applicationWillEnterForeground</tt> method.    </p>\n</li><li class=\" \">    <p>The <tt class=\" \">ti.background</tt> event is generated when the application is in the background, that is, from within the <tt class=\" \">applicationDidEnterBackground</tt> method, and when the application thread terminates.    </p>\n</li></ul>    <p>Events stored in the analytics queue are polled and sent in batches. In case of a send failure, unsent events are queued and attempts to resend the events five time before giving up. All pending events, which failed during the send, are queued and sent when the next event is generated.    </p>\n    <p>If a <tt class=\" \">ti.background</tt> event was processed within the last 30 seconds* of a <tt class=\" \">ti.foreground</tt> event, both events are removed from the queue and the current session is still active.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>(*) The default timeout is 30 seconds. If you are using the APS SDK, you can change the default timeout value. You cannot change the default timeout value for Titanium applications.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-43298695_AnalyticsArchitecture-FAQ\">\n        <h2 class=\"heading \"><span>FAQ</span></h2>\n    <div class=\"section section-3 \" id=\"src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLVdoYXRjb3VudHNhc2FuZXdzZXNzaW9uPw\">\n        <h3 class=\"heading \"><span>What counts as a new session?</span></h3>\n    <p>A session is a period of activity that a user has used the application. This may not necessarily be the period when the application boots and terminates. If the application is placed in the background, then put back in the foreground at a later time, this ends the previous session and creates a new session, respectively, if the events were not processed within 30 seconds* of each other.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>(*) The default timeout is 30 seconds. If you are using the APS SDK, you can change the default timeout value. You cannot change the default timeout value for Titanium applications.    </p>\n    </div>\n        </div>\n    <div class=\"section section-3 p1\" id=\"src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLVRoZWRldmljZWRldGFpbHNvZnRoZUFuYWx5dGljc3BhZ2VkaXNwbGF5c2luZm9ybWF0aW9uLHN1Y2hhcyJpUGFkMiw3Im9yImlQYWQzLDMiLldoYXRpc3RoZW1lYW5pbmdvZnRoZW51bWJlcmFmdGVydGhlY29tbWE_\">\n        <h3 class=\"heading p1\"><span>The device details of the Analytics page displays information, such as &quot;iPad2, 7&quot; or &quot;iPad3, 3&quot;. What is the meaning of the number after the comma?</span></h3>\n    <p class=\"p1\">&quot;iPad2, 7&quot; or &quot;iPad3, 3&quot; is the hardware model of the device. The number after the comma means the actual model of the device. Some examples:    </p>\n<ul class=\" \"><li class=\"p1 \">    <p>&quot;iPad2, 7&quot; is <a class=\"external-link external-link\" href=\"http://www.everymac.com/systems/apple/ipad/specs/apple-ipad-mini-original-a1455-4g-lte-verizon-sprint-specs.html\" target=\"_blank\">iPad mini (Wi-Fi/Verizon &amp; Sprint/GPS)</a>    </p>\n</li><li class=\"p1 \">    <p>&quot;iPad3, 3&quot; is <a class=\"external-link external-link\" href=\"http://www.everymac.com/systems/apple/ipad/specs/apple-ipad-3rd-gen-early-2012-gsm-4g-lte-att-specs.html\" target=\"_blank\">iPad 3rd Gen (Wi-Fi/Cellular AT&amp;T/GPS)</a>    </p>\n</li></ul>    <p class=\"p1\">Modify the device model in the following URL to retrieve information about the device: <a class=\"external-link external-link\" href=\"http://www.everymac.com/ultimate-mac-lookup/?search_keywords=iPad3,3\" target=\"_blank\">http://www.everymac.com/ultimate-mac-lookup/?search_keywords=iPad3,3</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLVRoZW51bWJlcm9mdG90YWxpbnN0YWxsc3JlcG9ydGVkaW5BcHBjZWxlcmF0b3JBbmFseXRpY3Nkb2Vzbm90bWF0Y2h0aGVudW1iZXJvZmRvd25sb2Fkc3RoYXRhcmVyZXBvcnRlZGJ5dGhlaVR1bmVzb3JBbmRyb2lkYXBwc3RvcmUuV2hhdGlzZ29pbmdvbj8\">\n        <h3 class=\"heading \"><span>The number of total installs reported in Appcelerator Analytics does not match the number of downloads that are reported by the iTunes or Android app store. What is going on?</span></h3>\n    <p>The number of downloads from the app store is not expected to match the number of unique devices that run an application. Reasons include but are not limited to the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>A user can download an app once, and install it on multiple devices. For example, if a family has three iPhones and two iPads, and they share applications through iTunes home sharing, then there will be <strong class=\" \">one</strong> iTunes download, and <strong class=\" \">five</strong> installs in Appcelerator Analytics.    </p>\n</li><li class=\" \">    <p>For applications built before Titanium Mobile version 3.3.0.GA, if a user deletes an application, and later re-downloads a previously installed app, there will be two separate downloads from the app store, but the number of users in Appcelerator Aanalytics will not change because the machine ID will have been seen before.    </p>\n</li><li class=\" \">    <p>When a new version of the app is released, many users will upgrade by downloading the new version. However, the downloads are actually upgrades and will not count as new installs in Appcelerator Analytics.    </p>\n</li><li class=\" \">    <p>A user may download an application and never run it or run it when the device has no network connectivity to send analytic events.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 p1\" id=\"src-43298695_safe-id-QW5hbHl0aWNzQXJjaGl0ZWN0dXJlLUhvd2RvSWRpc2FibGVUaXRhbml1bUFuYWx5dGljcz8\">\n        <h3 class=\"heading p1\"><span>How do I disable Titanium Analytics?</span></h3>\n    <p>Note that disabling Titanium Analytics will disable or display no data when you visit either platform.appcelerator.com for the Analytics section.    </p>\n    <p>Open your project&apos;s <tt class=\" \">tiapp.xml</tt> file. If the file contains the following tag: <tt class=\" \">&lt;analytics&gt;true&lt;/analytics&gt;</tt>, set the value to false. If this tag does not exist, you need to add it as a child of the <tt class=\" \">&lt;ti:app&gt;</tt> parent tag with the value set to false.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298695\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Analytics Architecture"});