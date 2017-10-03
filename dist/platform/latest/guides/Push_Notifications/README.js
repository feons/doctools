Ext.data.JsonP['Push_Notifications']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Push Notifications</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-37551711\" class=\"content\">\n                        <h1>Push Notifications</h1>\n    <p>This document contains information on configuring, subscribing, sending, and scheduling push services.    </p>\n    <div class=\"section section-2 \" id=\"src-37551711_PushNotifications-Configuringpushservices\">\n        <h2 class=\"heading \"><span>Configuring push services</span></h2>\n    <p>To send push notifications, Appcelerator Mobile Backend Services relies on the Google Cloud Messaging (GCM) for Android applications, and the Apple Push Notification (APN) service for iOS applications. To use these services in your Titanium application, you first need to enable GCM or APN for your application, and then configure Mobile Backend Services with information about your push service. This guide walks you through the process of creating and configuring push services for your application. For more information, see  <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">Configuring push services</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37551711_PushNotifications-Subscribingtopushnotifications\">\n        <h2 class=\"heading \"><span>Subscribing to push notifications</span></h2>\n    <p>For a push notification to reach a user, the user (or device) must be subscribed to receive push notifications on one or more notification channels. The application must also obtain a device token, which permits Mobile Backend Services to communicate with the push service provider (Google Cloud Messaging or Apple Push Notification). This guide explains how to how obtain a device token, and how to use the PushNotifications API to manage your user&apos;s notification subscriptions. For more information, see  <a class=\"document-link \" href=\"#!/guide/Subscribing_to_push_notifications\">Subscribing to push notifications</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37551711_PushNotifications-Sendingandschedulingpushnotifications\">\n        <h2 class=\"heading \"><span>Sending and scheduling push notifications</span></h2>\n    <p>To send and schedule push notifications, you can use Appcelerator Dashboard. You can also directly call the <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/PushNotifications\">PushNotifications</a> APIs <tt class=\" \">notify </tt>or <tt class=\" \">notify_token</tt> methods to send notifications. For more information, see <a class=\"external-link external-link\" href=\"#!/guide/Sending_and_Scheduling_Push_Notifications\">Sending and Scheduling Push Notifications</a>.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=37551711\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Push Notifications"});