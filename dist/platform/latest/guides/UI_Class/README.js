Ext.data.JsonP['UI_Class']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>UI Class</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083251\" class=\"content\">\n                        <h1>UI Class</h1>\n    <p>The UI class contains methods for interacting with the user interface inside Studio    </p>\n    <div class=\"section section-2 \" id=\"src-30083251_UIClass-Usage\">\n        <h2 class=\"heading \"><span>Usage</span></h2>\n    <p>Examples of how you might interact with methods of the UI class.    </p>\n    <div class=\"section section-3 \" id=\"src-30083251_safe-id-VUlDbGFzcy1TaW5nbGV0b246\">\n        <h3 class=\"heading \"><span>Singleton:</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble/ui&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Ruble::UI.alert(:info, </code><code class=\"string\">&apos;Title&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;Message&apos;</code><code class=\"plain\">) # opens an info dialog box with title</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083251_UIClass-UIMethods\">\n        <h2 class=\"heading \"><span>UI Methods</span></h2>\n    <p>The UI class has the following singleton methods:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Method    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">alert(style, title, message, *buttons)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Opens a dialog box. style can be one of :warning, :error or :info. buttons is an array of string labels for the buttons the user can choose from. The first entry is the default button (what will be chosen if user hits Enter). The return value is the label of the chosen button.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">menu(options = [])</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>pop up a menu on screen<br><u class=\" \">options</u> may be an Array of Strings, or an Array of Hashes    </br></p>\n<ol class=\" \"><li class=\" \">    <p>If it&apos;s an Array of Hashes, it&apos;s expected that each Hash will contain:    </p>\n</li><li class=\" \">    <p>&apos;display&apos; =&gt; String - entry to show in menu    </p>\n</li><li class=\" \">    <p>&apos;image&apos; = &gt; String - image to show alongside the entry    </p>\n</li><li class=\" \">    <p>&apos;insert&apos; =&gt; String - a snippet to insert when the entry is chosen    </p>\n</li><li class=\" \">    <p>&apos;tool_tip&apos; =&gt; String - tooltip to display for menu entry    </p>\n</li></ol>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">simple_notification(options = {})</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Opens an info dialog box with an &quot;OK&quot; button. Pass in :title, :summary in options hash to set those values on opened dialog. like calling alert(:info, options[:title], options[:summary], &quot;OK&quot;)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">request_item(:title =&gt; &apos;&apos;, :prompt =&gt; &apos;&apos;, :button1 =&gt; &apos;&apos;, :button2 =&gt; &apos;&apos;)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">request_color(hex_string = nil)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Show the system color picker and return a hex-format color (#RRGGBB) string with the chosen color.<br>If the input string is a recognizable hex string, the default color (in the opened color picker) will be set to it.    </br></p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">request_confirmation(options = {</tt>}    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Post a confirmation alert. Returns true if first button chosen, false otherwise.<br>Possible options:    </br></p>\n<ul class=\"alternate \"><li class=\" \">    <p>:button1 =&gt; String - label of the default button    </p>\n</li><li class=\" \">    <p>:button2 =&gt; String - label of the secondary button    </p>\n</li><li class=\" \">    <p>:title =&gt; String - Title of the dialog    </p>\n</li><li class=\" \">    <p>:prompt =&gt; String - message in the dialog    </p>\n</li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">request_string(options)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Opens a dialog box with a text field input. Returns the user input as a string if they choose &quot;OK&quot;.<br>Possible Options:    </br></p>\n<ul class=\"alternate \"><li class=\" \">    <p>:title =&gt; String - title of the dialog.    </p>\n</li><li class=\" \">    <p>:prompt =&gt; String - message added to dialog    </p>\n</li><li class=\" \">    <p>:button1 =&gt; String - label of the confirm button, defaults to &quot;OK&quot;    </p>\n</li><li class=\" \">    <p>:button2 =&gt; String - label of the cancel button. defaults to &quot;Cancel&quot;.    </p>\n</li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">request_secure_string(options = {})</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Opens a password dialog. See request_string.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">tool_tip(content, options = {})</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Show Tooltip using current cursor location. content is shown as bold text at top of tooltip.<br>Possible options:    </br></p>\n<ul class=\"alternate \"><li class=\" \">    <p>:balloon =&gt; true - pop up a balloon style tooltip    </p>\n</li><li class=\" \">    <p>:icon =&gt; :error, :info, or :warning. add an image icon in upper left of tooltip. Only used with balloon tooltips.    </p>\n</li><li class=\" \">    <p>:message =&gt; String, an optional explanatory string that is shown below content.    </p>\n</li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">request_file(options = {})</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Show a standard open file dialog. Returns the full path of the file/dir as a string.<br>Possible Options:    </br></p>\n<ul class=\"alternate \"><li class=\" \">    <p>:only_directories =&gt; true - limit to directory selection. If not present or false, it will be limited to only file selection    </p>\n</li><li class=\" \">    <p>:default =&gt; String - message added to dialog if selecting directories    </p>\n</li><li class=\" \">    <p>:title =&gt; String - title of dialog    </p>\n</li><li class=\" \">    <p>:directory =&gt; String - opening directory path for dialog    </p>\n</li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">request_files(options = {})</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Show a standard open file dialog, allowing multiple selections. See request_file    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083251\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"UI Class"});