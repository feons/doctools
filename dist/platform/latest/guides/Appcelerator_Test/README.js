Ext.data.JsonP['Appcelerator_Test']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator Test</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-43298697\" class=\"content\">\n                        <h1>Appcelerator Test</h1>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Enterprise Subscription Required!</div>\n            <p>This Appcelerator Platform feature requires an Enterprise Subscription.    </p>\n    </div>\n        <p>    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-Testingconcepts\">Testing concepts</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-Testdashboard\">Test dashboard</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-SeeAlso\">See Also</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-43298697_AppceleratorTest-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Appcelerator Test, enabled by SOASTA&#x2019;s TouchTest&#x2122; mobile test automation solution, provides precision recording, playback and results analysis of automated mobile tests. Appcelerator Test lets you capture, compose and edit tests that include precision gestures, such as swipe, pinch, and pans.    </p>\n<ul class=\" \"><li class=\" \">    <p>To quickly get started recording and playing back tests, see  <a class=\"document-link \" href=\"#!/guide/Getting_started_with_Test\">Getting started with Test</a> .    </p>\n</li><li class=\" \">    <p>For an short overview of Test concepts, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-Testingconcepts\">Testing concepts</a>.    </p>\n</li><li class=\" \">    <p>For an overview of Test dashboard functionality, see   <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-Testdashboard\">Test dashboard</a>.     </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-43298697_AppceleratorTest-Testingconcepts\">\n        <h2 class=\"heading \"><span>Testing concepts</span></h2>\n    <p>The primary focus of testing is a   <strong class=\" \">Composition, </strong> which  is the test itself.  The Composition i s presented in the  <strong class=\" \">Composition Editor</strong> , which  is also the test player, debugger, and  where results are analyzed.  Use the Composition Editor to add one or more  <strong class=\" \">Clips</strong>  to your Composition, which are arranged in  <strong class=\" \">Tracks</strong> .    </p>\n    <p>    <img src=\"images/download/attachments/43298697/image2014-3-19_18_44_7.png\" alt=\"images/download/attachments/43298697/image2014-3-19_18_44_7.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"715\" height=\"310\">\n        </img></p>\n    <p>A <strong class=\" \">clip</strong> is the basic building block of a composition. The same test clip can be reused in multiple compositions. You use the <strong class=\" \">Clip Editor</strong> (shown below) to create your test clips by recording your actions directly from a device. Each action (gesture, input, and so forth) that you record is represented as an editable <strong class=\" \">App Action</strong>. App Actions have properties and commands that you can configure to modify their behavior, timing, or output.    </p>\n    <p>    <img src=\"images/download/attachments/43298697/image2014-3-19_22_21_5.png\" alt=\"images/download/attachments/43298697/image2014-3-19_22_21_5.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"614\" height=\"396\">\n        </img></p>\n    <p>When you playback a composition, all the app actions in each clip are executed on the device exactly as recorded.  See  <a class=\"document-link \" href=\"#!/guide/Getting_started_with_Test-section-src-43298707_GettingstartedwithTest-Testingbasics\">Getting started with Test</a>  for details on creating and using clips and compositions.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298697_AppceleratorTest-Testdashboard\">\n        <h2 class=\"heading \"><span>Test dashboard</span></h2>\n    <p>You access all Test functionality from the Test tab of <a class=\"external-link external-link\" href=\"https://platform.appcelerator\" target=\"_blank\">Appcelerator Dashboard</a>. There are two basic views to the Test dashboard: a read-only <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-Testoverview\">overview page</a> that presents metrics on all test activity, and a <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-Testdetailview\">detail view</a> where you actually record and create tests.    </p>\n    <div class=\"section section-3 \" id=\"src-43298697_AppceleratorTest-Testoverviewdisplay\">\n        <h3 class=\"heading \"><span>Test overview display</span></h3>\n    <p>When no application is currently selected from the Apps menu, the Test dashboard displays metrics, including the total number of tests that have run, and the average time those tests &#x2013; <i class=\" \">compositions</i> in Test terminology &#x2013; have taken to complete.    </p>\n    <p>Click  <strong class=\" \">Compositions Run</strong>  to view details about the number of compositions that have run, by application or platform. A graph plots the numbers of total number compositions run, by application or platform, over the currently selected time period. Hovering over an inflection point on a graph line displays details about the compositions run at that time, as shown below.    </p>\n    <p> With <strong class=\" \">Compositions Run</strong> selected, click  <strong class=\" \">Application</strong>  to view   <strong class=\" \">Compositions Run by Application</strong>, which displays the number of <strong class=\" \">Completed</strong>, <strong class=\" \">Aborted</strong>, <strong class=\" \">Failed</strong>, and <strong class=\" \">Stopped</strong> compositions for each application, and the date and time of the last run.  For example, in the following Test dashboard, 40 total compositions have been run across all applications. According to the table, seventeen of those compositions were run against the &quot;KitchenSink&quot; application; of those, eight completed successfully, one failed, and one was stopped by a user.    </p>\n    <p>Similarly, click <strong class=\" \">Platform </strong>to view  <strong class=\" \">     <span style=\"color: #484850;\">\nCompositions Run by Platform,     </span>\n </strong>     <span style=\"color: #484850;\">\nwhich displays    </span>\n     <span style=\"color: #484850;\">\n the same information as for the <strong class=\" \">By Application</strong> view, except that the <strong class=\" \">Last</strong> field is replaced by a <strong class=\" \">Top App</strong> field that links to the Test page for the application with the most composition runs.     </span>\n    </p>\n    <img src=\"images/download/attachments/43298697/image2014-3-20_1_31_21.png\" alt=\"images/download/attachments/43298697/image2014-3-20_1_31_21.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"866\" height=\"622\">\n        <p>Click  <strong class=\" \">Avg. Composition Run Time</strong> to view the average time those compositions took to complete, by application or platform.   <strong class=\" \">     <span style=\"color: #484850;\">\nAvg. Composition Run Time by Application    </span>\n </strong> displays the average time it took Completed and Failed compositions to complete. for each application, and the date and time of the last run. <strong class=\" \">     <span style=\"color: #484850;\">\nCompositions Run by Platform    </span>\n </strong>     <span style=\"color: #484850;\">\n displays the same information for each platform, except that the date/time field is replaced by a link to the application with the most compositions. A    </span>\n   graph displays the average composition run time, by application or platform, for all compositions in the currently selected time period.    </p>\n    <p>You can export both the time-series data plotted in the graph, or the data displayed in the table. Click the <strong class=\" \">Export Data</strong> menu and choose <strong class=\" \">Export Chart Data</strong> or <strong class=\" \">Export Table Data</strong>, as desired.    </p>\n    <p>    <img src=\"images/download/attachments/43298697/image2014-3-20_2_23_19.png\" alt=\"images/download/attachments/43298697/image2014-3-20_2_23_19.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"290\" height=\"155\">\n        </img></p>\n    </img></div>\n    <div class=\"section section-3 \" id=\"src-43298697_AppceleratorTest-Testdetaildisplay\">\n        <h3 class=\"heading \"><span>Test detail display</span></h3>\n    <p>When you select an application from the Apps menu (&quot;FStocks2&quot; in the screenshot below), the Test dashboard updates to display the web interface where you create clips, compose compositions, and view results for that application. For more information on using this view, see <a class=\"document-link \" href=\"#!/guide/Getting_started_with_Test\">Getting started with Test</a>.    </p>\n    <p>    <img src=\"images/download/attachments/43298697/image2014-3-20_3_11_32.png\" alt=\"images/download/attachments/43298697/image2014-3-20_3_11_32.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"772\" height=\"490\">\n        </img></p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298697_AppceleratorTest-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\"childpages-macro \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Getting_started_with_Test\">Getting started with Test</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Test_Best_Practices\">Test Best Practices</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Re-enabling_Test_After_Service_Upgrade\">Re-enabling Test After Service Upgrade</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Data-Driven_Tests\">Data-Driven Tests</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins\">Integrating Test with Jenkins</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Troubleshooting_problems_with_Test\">Troubleshooting problems with Test</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298697\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Appcelerator Test"});