Ext.data.JsonP['Database_Best_Practices']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Database Best Practices</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30082364\" class=\"content\">\n                        <h1>Database Best Practices</h1>\n    <p>We recommend the following as best practices when working with databases in Titanium:    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Database_Best_Practices-section-src-30082364_DatabaseBestPractices-Openandclosethedatabaseandresultsetwitheachoperation\">Open and close the database and resultset with each operation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Database_Best_Practices-section-src-30082364_DatabaseBestPractices-Usetransactionstospeedbatchinserts\">Use transactions to speed batch inserts</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Database_Best_Practices-section-src-30082364_DatabaseBestPractices-Useaminimalpre-populateddatabase\">Use a minimal pre-populated database</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Database_Best_Practices-section-src-30082364_DatabaseBestPractices-Storeaversionnumbertoeasedatabaseupdates\">Store a version number to ease database updates</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Database_Best_Practices-section-src-30082364_DatabaseBestPractices-Referencesandfurtherinformation\">References and further information</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30082364_DatabaseBestPractices-Openandclosethedatabaseandresultsetwitheachoperation\">\n        <h2 class=\"heading \"><span>Open and close the database and resultset with each operation</span></h2>\n    <p>In a mobile app, you&apos;re dealing with a single-user, memory constrained environment in which connection pooling is not important. The time to open/close connections is less of a hit that consuming memory by keeping connections open.    </p>\n    <p>Furthermore, SQLite enforces sequential write-access to the database (one process at a time). This makes it vital that you close the database connection when you have completed any <tt class=\" \">INSERT</tt> or <tt class=\" \">UPDATE</tt> operations. If you don&apos;t, you might receive &quot;DatabaseObjectNotClosed&quot; exceptions when your script next attempts to write to it.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">cityWeatherRS.close(); </code><code class=\"comments\">// close the resultset when you&apos;re done reading from it</code></div>\n<div class=\"line\"><code class=\"plain\">db.close(); </code><code class=\"comments\">// and close the database connection</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30082364_DatabaseBestPractices-Usetransactionstospeedbatchinserts\">\n        <h2 class=\"heading \"><span>Use transactions to speed batch inserts</span></h2>\n    <p>A (perhaps not so widely known) trick in the database world is to use <a class=\"external-link external-link\" href=\"http://www.sqlteam.com/article/introduction-to-transactions\" target=\"_blank\">transactions</a> to speed up inserts. Let&apos;s say you have a loop that does ten inserts or updates. By wrapping them in a transaction, you create a single, mass operation against the database rather than ten little operations. The single operation can be significantly faster than those individual updates. The downside is that if any of the updates fail, the entire batch is rolled back.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// you get a bunch of data, maybe from the network, to save in the db</code></div>\n<div class=\"line\"><code class=\"plain\">var playlist = [];</code></div>\n<div class=\"line\"><code class=\"plain\">playlist.push({disc:</code><code class=\"string\">&apos;Leon Live&apos;</code><code class=\"plain\">, artist:</code><code class=\"string\">&apos;Leon Russell&apos;</code><code class=\"plain\">, comment:</code><code class=\"string\">&apos;Gospel, blues and rock rolled into one&apos;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">playlist.push({disc:</code><code class=\"string\">&apos;Animal Notes&apos;</code><code class=\"plain\">, artist:</code><code class=\"string\">&apos;Crack the Sky&apos;</code><code class=\"plain\">, rating:</code><code class=\"string\">&apos;Obscure but rocking&apos;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// etc.</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var db = Ti.Database.open(</code><code class=\"string\">&apos;myDatabase&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">db.execute(</code><code class=\"string\">&apos;BEGIN&apos;</code><code class=\"plain\">); </code><code class=\"comments\">// begin the transaction</code></div>\n<div class=\"line\"><code class=\"keyword\">for</code><code class=\"plain\">(var i=</code><code class=\"value\">0</code><code class=\"plain\">, var j=playlist.length; i &lt; j; i++) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar item = playlist[i];</code></div>\n<div class=\"line\"><code class=\"plain\">\tdb.execute(</code><code class=\"string\">&apos;INSERT INTO albums (disc, artist, rating) VALUES (?, ?, ?)&apos;</code><code class=\"plain\">, item.disc, item.artist, item.comment);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">db.execute(</code><code class=\"string\">&apos;COMMIT&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">db.close();</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30082364_DatabaseBestPractices-Useaminimalpre-populateddatabase\">\n        <h2 class=\"heading \"><span>Use a minimal pre-populated database</span></h2>\n    <p>Shipping a pre-populated database with your app increases the size of the app&apos;s package file (ipa or apk) making for slower downloads from the App Store or Market. It also consumes more storage space on the user&apos;s device. Because the <tt class=\" \">Resources</tt> directory is read-only on the device, the distribution database file cannot be deleted; installing the database copies it to the <tt class=\" \">ApplicationDataDirectory</tt> folder, resulting in two copies of this file on the user&apos;s device.    </p>\n    <p>Additionally, older versions of Android limited resource file sizes that require workarounds for large database files. Essentially, all your Android assets are packed into the APK file. Those assets are also compressed (except for a small list of graphics or other files known to not compress significantly). In Android 2.2 and earlier, the installer could not uncompress assets that were over 1 MB. So, if you had a 2 MB database file, your app would not be installable on older Android devices. Workarounds sometimes recommend naming your database with an extension like .mp3 that will flag the <tt class=\" \">aapt</tt> packaging tool to not compress the file.    </p>\n    <p>Rather than shipping a large pre-populated database, you can ship a &quot;skeleton&quot; database file instead. This would be a database with the minimum amount of data required for the application to run. Then, on first boot, ask the user&apos;s authorization to download a replacement from a remote source, using something like the following method:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var updateMyDatabase = function(newdata) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// logic here to delete existing content and insert new data</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// maybe you&apos;ve retrieved a bunch of JSON encoded data that you</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// rehydrate, loop through, and insert into your tables</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">buttonInstallRemote.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, function(){</code></div>\n<div class=\"line\"><code class=\"plain\">  var c = Ti.Network.createHTTPClient();</code></div>\n<div class=\"line\"><code class=\"plain\">  c.setTimeout(</code><code class=\"value\">10000</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">  c.onload = function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">    updateMyDatabase(</code><code class=\"keyword\">this</code><code class=\"plain\">.responseData);</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.UI.createAlertDialog({title:</code><code class=\"string\">&apos;Info&apos;</code><code class=\"plain\">, message:</code><code class=\"string\">&apos;Database installed&apos;</code><code class=\"plain\">, buttonNames: [</code><code class=\"string\">&apos;OK&apos;</code><code class=\"plain\">]}).show();</code></div>\n<div class=\"line\"><code class=\"plain\">  };</code></div>\n<div class=\"line\"><code class=\"plain\">  c.onerror = function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.UI.createAlertDialog({title:</code><code class=\"string\">&apos;Error&apos;</code><code class=\"plain\">, message:</code><code class=\"string\">&apos;Error: &apos;</code><code class=\"plain\"> + e.error, buttonNames: [</code><code class=\"string\">&apos;OK&apos;</code><code class=\"plain\">]}).show();</code></div>\n<div class=\"line\"><code class=\"plain\">  };</code></div>\n<div class=\"line\"><code class=\"plain\">  c.open(</code><code class=\"string\">&apos;GET&apos;</code><code class=\"plain\">,&quot;http:</code><code class=\"comments\">//example.com/getNewDatabaseData); </code></div>\n<div class=\"line\"><code class=\"plain\">  c.send();</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30082364_DatabaseBestPractices-Storeaversionnumbertoeasedatabaseupdates\">\n        <h2 class=\"heading \"><span>Store a version number to ease database updates</span></h2>\n    <p>By storing a version number within your database, you can detect which version is installed and take action as needed. For example, your app might determine that version 1.0 of your database is installed, then create new tables or alter existing tables. However, if you don&apos;t have a version identifier in your database, you&apos;ll be left guessing...is the user really running the old version or did a previous update fail? Are they downloading a new app version or upgrading an existing version? Whatever the scenario, we recommend you include a &quot;version&quot; table in your database in which you store a database version number.    </p>\n    <p>If you&apos;ve failed to do this, you might be able to use a PRAGMA command like the following to detect if a certain column is present and by doing so differentiate between an old and new version of your database.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// ADD COLUMN TO A TABLE</code></div>\n<div class=\"line\"><code class=\"plain\">var addColumn = function(dbname, tblName, newFieldName, colSpec) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar db = Ti.Database.open(dbname);</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar fieldExists = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\tresultSet = db.execute(</code><code class=\"string\">&apos;PRAGMA TABLE_INFO(&apos;</code><code class=\"plain\"> + tblName + </code><code class=\"string\">&apos;)&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">while</code><code class=\"plain\"> (resultSet.isValidRow()) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"keyword\">if</code><code class=\"plain\">(resultSet.field(</code><code class=\"value\">1</code><code class=\"plain\">)==newFieldName) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tfieldExists = </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tresultSet.next();</code></div>\n<div class=\"line\"><code class=\"plain\">\t} </code><code class=\"comments\">// end while</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">if</code><code class=\"plain\">(!fieldExists) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// field does not exist, so add it</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tdb.execute(</code><code class=\"string\">&apos;ALTER TABLE &apos;</code><code class=\"plain\"> + tblName + </code><code class=\"string\">&apos; ADD COLUMN &apos;</code><code class=\"plain\">+newFieldName + </code><code class=\"string\">&apos; &apos;</code><code class=\"plain\"> + colSpec);</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\tdb.close();</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30082364_DatabaseBestPractices-Referencesandfurtherinformation\">\n        <h2 class=\"heading \"><span>References and further information</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://www.whoishostingthis.com/compare/sqlite/optimize/\" target=\"_blank\">SQLite Optimization FAQ</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30082364\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Database Best Practices"});