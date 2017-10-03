Ext.data.JsonP['Mobile_Backend_Services_1.6.0.sp1_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Mobile Backend Services 1.6.0.sp1 - 27 July 2017</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-50725282\" class=\"content\">\n                        <h1>Mobile Backend Services 1.6.0.sp1 - 27 July 2017</h1>\n    <p>This release of Mobile Backend Services (MBS) includes version 2.0.5 of the CLI and 1.6.0.sp1 of the server, and includes behavior changes, new features and improvements, and several bug fixes.    </p>\n    <p>MBS 1.6.0.sp1 introduces mandatory dedication of three (3) swarm manager VMs in production cluster. If you have a production deployment using 1.6.0 on-premise cluster, you will need to add these additional swarm manager hosts by following these steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Prepare three additional hosts according to the requirements when setting up the cluster initially. There should be three swarm managers running and services running on the manager nodes will be moved to the three new hosts.    </p>\n</li><li class=\" \">    <p>Use <tt class=\" \">arrowcluster add-host</tt> command to provision the three new hosts.    </p>\n</li><li class=\" \">    <p>Use <tt class=\" \">ssh</tt> to connect to one of the manager nodes. Then use <tt class=\" \">docker node ls -f role=manager</tt> to find all the swarm managers.    </p>\n</li><li class=\" \">    <p>Execute <tt class=\" \">docker node update &lt;node-id&gt; --availability=drain</tt> for each manager node.    </p>\n</li><li class=\" \">    <p>Wait about two minutes and execute <tt class=\" \">arrowcluster verify postinstall</tt> command to verify all services are working well.    </p>\n</li></ol>    <p>Note: Users should use arrowcluster 1.6.1.    </p>\n    <div class=\"section section-2 \" id=\"src-50725282_MobileBackendServices1.6.0.sp1ReleaseNote-Requirements\">\n        <h2 class=\"heading \"><span>Requirements</span></h2>\n    <p>For this release, existing clusters are required to upgrade Docker to version 17.06 and install ntp.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-50725282_MobileBackendServices1.6.0.sp1ReleaseNote-Newfeaturesandimprovements\">\n        <h2 class=\"heading \"><span>New features and improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Introduced <strong class=\" \"><tt class=\" \">has_internet_access</tt></strong> (boolean (true/false)) in the <tt class=\" \">user_input.json</tt> file    </p>\n<ul class=\" \"><li class=\" \">    <p>There are situations when MBS cannot accurately determine if a target cluster in an on-premise environment has Internet access. To remedy this issue, you can set <tt class=\" \">has_internet_access</tt> to true if the cluster has full Internet access so that the installer can retrieve and install required software such as Docker. Otherwise, the cluster should be pre-installed with the following required software:    </p>\n<ul class=\" \"><li class=\" \">    <p>nfs-utils    </p>\n</li><li class=\" \">    <p>docker 17.06    </p>\n</li><li class=\" \">    <p>nc (for port check)    </p>\n</li><li class=\" \">    <p>lsof (for port check)    </p>\n</li></ul></li></ul></li><li class=\" \">    <p>Introduced <strong class=\" \"><tt class=\" \">swarm_manager_hosts</tt></strong> in the <tt class=\" \">user_input.json</tt> file    </p>\n<ul class=\" \"><li class=\" \">    <p>For production deployment, we recommend at least three dedicated swarm manager hosts to ensure high availably of the cluster. The number of swarm managers should be an odd number equal to or less than three.    </p>\n</li><li class=\" \">    <p>Note: if you don&apos;t set <tt class=\" \">swarm_manager_hosts</tt> or it contains less than three hosts, you will receive a warning message to the effect of this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">WARN[</code><code class=\"value\">2017</code><code class=\"plain\">-</code><code class=\"value\">07</code><code class=\"plain\">-</code><code class=\"value\">14</code><code class=\"plain\"> </code><code class=\"value\">14</code><code class=\"plain\">:</code><code class=\"value\">39</code><code class=\"plain\">:</code><code class=\"value\">22</code><code class=\"plain\">] You did not specify dedicated swarm manager hosts. For production environment, there should be at least </code><code class=\"value\">3</code><code class=\"plain\"> dedicated swarm managers. You should maintain an odd number of managers in the swarm to support manager node failures. </code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Enter </code><code class=\"string\">&apos;y&apos;</code><code class=\"plain\">/</code><code class=\"string\">&apos;yes&apos;</code><code class=\"plain\"> to </code><code class=\"keyword\">continue</code><code class=\"plain\"> OR </code><code class=\"string\">&apos;n&apos;</code><code class=\"plain\">/</code><code class=\"string\">&apos;no&apos;</code><code class=\"plain\"> to exit, then hit enter:</code></div>\n<div class=\"line\"><code class=\"plain\">If your cluster is non production, enter yes to </code><code class=\"keyword\">continue</code><code class=\"plain\">.</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Usage: <tt class=\" \">swarm_manager_hosts:[&quot;ip1&quot;, &quot;ip2&quot;,...]</tt>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725282_MobileBackendServices1.6.0.sp1ReleaseNote-Bugfix\">\n        <h2 class=\"heading \"><span>Bug fix</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Fixed a bug that prevent scaled up apps to accept more requests    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=50725282\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Mobile Backend Services 1.6.0.sp1 Release Note"});