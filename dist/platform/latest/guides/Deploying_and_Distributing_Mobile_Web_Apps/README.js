Ext.data.JsonP['Deploying_and_Distributing_Mobile_Web_Apps']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Deploying and Distributing Mobile Web Apps</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083701\" class=\"content\">\n                        <h1>Deploying and Distributing Mobile Web Apps</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_and_Distributing_Mobile_Web_Apps-section-src-30083701_DeployingandDistributingMobileWebApps-DeploymentRequirements\">Deployment Requirements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_and_Distributing_Mobile_Web_Apps-section-src-30083701_DeployingandDistributingMobileWebApps-Deployingfortesting\">Deploying for testing</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_and_Distributing_Mobile_Web_Apps-section-src-30083701_DeployingandDistributingMobileWebApps-DeploymentwithinyourfirewallortotheInternet\">Deployment within your firewall or to the Internet</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_and_Distributing_Mobile_Web_Apps-section-src-30083701_DeployingandDistributingMobileWebApps-References\">References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30083701_DeployingandDistributingMobileWebApps-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this section, you will learn how to deploy and distribute a Mobile Web app for testing or distribution.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083701_DeployingandDistributingMobileWebApps-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>Deploying and distributing Mobile Web apps follows a different process than for native apps. You don&apos;t have to publish Mobile Web apps through someone else&apos;s app store; you can self-publish them (on your web site or a service you contract with). Because of that, the distinction between deploying (for testing) and distribution (for publishing) is largely where you post the generated files. If they&apos;re available to only you or within your firewall, you could consider that a testing deployment. If you make the files available on the Internet, you could call that publishing.    </p>\n    <p>(If you&apos;re considering a hybrid app -- HTML5 UI/logic wrapped in a WebView container -- you&apos;ll need to follow the native iOS/Android publishing processes already outlined.)    </p>\n    <div class=\"section section-3 \" id=\"src-30083701_DeployingandDistributingMobileWebApps-DeploymentRequirements\">\n        <h3 class=\"heading \"><span>Deployment Requirements</span></h3>\n    <p>Mobile Web applications require a web server to host the HTML, JavaScript, CSS, and image files. Generally speaking any web server will work including nginx, node.js, Apache, and IIS. Your choice of server may depend on other non-Titanium specific requirements such as SSL or application integration.    </p>\n    <p>Mobile Web does not depend on or take advantage of a web application server such as PHP.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083701_DeployingandDistributingMobileWebApps-Deployingfortesting\">\n        <h3 class=\"heading \"><span>Deploying for testing</span></h3>\n    <p>Studio includes an integrated web server that you can use for developer-level testing (where you test your own work). You can use this server to test your Mobile Web project within a browser installed on your computer or to host pages accessible within the emulator or simulator. To deploy to this integrated web server, choose the appropriate option from the Run menu in Studio, as shown in this screenshot:    </p>\n    <p>    <img src=\"images/download/attachments/30083701/mwdeploy.png\" alt=\"images/download/attachments/30083701/mwdeploy.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083701_DeployingandDistributingMobileWebApps-DeploymentwithinyourfirewallortotheInternet\">\n        <h3 class=\"heading \"><span>Deployment within your firewall or to the Internet</span></h3>\n    <p>When building a Mobile Web application, the files are generated into a directory build/mobileweb. Deploying (for testing or publishing) thus involves posting those files to a web server that&apos;s accessible to your testing team or end users. If your application uses Ti.Network.HttpClient to communicate with different sites, then either those sites must enable CORS (Cross-Origin Resource Sharing) or you must set up a proxy on your web server with CORS enabled.    </p>\n    <p>    <img src=\"images/download/attachments/30083701/mwpublish.png\" alt=\"images/download/attachments/30083701/mwpublish.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083701_DeployingandDistributingMobileWebApps-References\">\n        <h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Cross-Origin Resource Sharing - <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing\" target=\"_blank\">Wikipedia</a> or <a class=\"external-link external-link\" href=\"http://www.w3.org/TR/cors/\" target=\"_blank\">W3C</a>    </p>\n</li><li class=\" \">    <p>App icon and splash screen assets for Mobile Web apps - <a class=\"document-link \" href=\"#!/guide/Icons_and_Splash_Screens\">Icons and Splash Screens</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083701_DeployingandDistributingMobileWebApps-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this section, you learned how to deploy a Mobile Web app to the integrated localhost server for developer testing in the browser or simulator/emulator. You also learned that to enable remote testing and to publish your app, you need to post those files to a web server.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083701\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Deploying and Distributing Mobile Web Apps"});