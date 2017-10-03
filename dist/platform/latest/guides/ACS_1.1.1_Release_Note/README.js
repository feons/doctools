Ext.data.JsonP['ACS_1.1.1_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ACS 1.1.1 - 16 May 2014</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-50725332\" class=\"content\">\n                        <h1>ACS 1.1.1 - 16 May 2014</h1>\n    <p>The 1.1.1 release of Appcelerator Cloud Services includes the following fixes and features:    </p>\n    <div class=\"section section-2 \" id=\"src-50725332_ACS1.1.1ReleaseNote-Newfeatures\">\n        <h2 class=\"heading \"><span>New features</span></h2>\n<ul class=\" \"><li class=\" \">    <p>When calling an ACS object&apos;s <tt class=\" \">query</tt> or <tt class=\" \">show</tt> methods you can include a new parameter called <tt class=\" \">show_user_like</tt>. If the current user has liked the object being queried or shown, the JSON response contains <tt class=\" \">&quot;current_user_liked&quot;:true</tt>. See the <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Checkins-method-query\">Checkins.query</a> and <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Checkins-method-show\">Checkins.show</a> REST API examples for examples.    </p>\n</li><li class=\" \">    <p>ACS now uses <tt class=\" \">yajl-ruby</tt> to generate JSON responses. YAJL is faster than the previous <tt class=\" \">Hash.to_json</tt> implementation.    </p>\n</li><li class=\" \">    <p>ACS now supports SSL uploads for File and Photo objects    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725332_ACS1.1.1ReleaseNote-Bugfixes\">\n        <h2 class=\"heading \"><span>Bug fixes</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Fixed an Android issue with UTF-8 encoded characters not being displayed properly in push notifications    </p>\n</li><li class=\" \">    <p>Fixed an issue where an application administrator was unable to check ACLs for a regular user    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=50725332\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ACS 1.1.1 Release Note"});