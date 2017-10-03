Ext.data.JsonP['Alloy_Sync_Adapters_and_Migrations']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Sync Adapters and Migrations</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-36739597\" class=\"content\">\n                        <h1>Alloy Sync Adapters and Migrations</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-SyncAdapters\">Sync Adapters</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-BackboneSync\">Backbone Sync</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-Ready-MadeSyncAdapters\">Ready-Made Sync Adapters</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-SQLiteSyncAdapter\">SQLite Sync Adapter</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-CustomSyncAdapters\">Custom Sync Adapters</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-Example\">Example</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-Migrations\">Migrations</a>    </p>\n</li></ul>    <p>    </p>\n    <div class=\"section section-2 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-SyncAdapters\">\n        <h2 class=\"heading \"><span>Sync Adapters</span></h2>\n    <p>In Alloy, a sync adapter allows you to store and load your models to a persistent storage device, such as an on-device database or remote server.  Alloy relies on the Backbone API to sync model data to persistent storage.    </p>\n    <div class=\"section section-3 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-BackboneSync\">\n        <h3 class=\"heading \"><span>Backbone Sync</span></h3>\n    <p>Backbone syncs your models to persistent storage devices based on the implementation of the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Sync\" target=\"_blank\">Backbone.sync method</a>.  Since Backbone&apos;s primary use is for web applications, by default, the Backbone.sync method executes RESTful JSON requests to a URL specified by the Model.urlRoot or Collection.url attribute, when these classes are created.    </p>\n    <p>Models are accessed from persistent storage (or the collection) based on its <tt class=\" \">id</tt> attribute, which is usually the primary key assigned by the database.  This behavior can be overridden by using the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Model-idAttribute\" target=\"_blank\"><tt class=\" \">idAttribute</tt> attribute</a>, which can specify a different model property to access a model.  This field needs to contain unique values.  The client application can also assign its own ID either when creating a model or in the implementation of the sync method rather than using the primary key returned by a server or database.  Backbone also creates its own client ID (or cid) for each model, which assigns a unique identifier to models for the duration of the application.  Use the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Model-cid\" target=\"_blank\">Model.cid attribute</a> and <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Collection-getByCid\" target=\"_blank\">Collection.getByCid</a> method if you need to access models from a collection before it is saved to persistent storage.    </p>\n    <p>The sync method depends on calls to other Backbone methods as described in the table below.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Backbone Method</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Sync CRUD Method</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Equivalent HTTP Method</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Equivalent SQL Method</strong>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Collection.fetch    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>read    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GET    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>SELECT    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Collection.create (id == null)<br>or<br>Collection.create (id != null)    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>create<br>or<br>update    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>POST<br>or<br>PUT    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>INSERT<br>or<br>UPDATE    </br></br></p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Model.fetch    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>read    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GET    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>SELECT    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Model.save (id == null)<br>or<br>Model.save (id != null)    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>create<br>or<br>update    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>POST<br>or<br>PUT    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>INSERT<br>or<br>UPDATE    </br></br></p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Model.destroy    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>delete    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>DELETE    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>DELETE    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>For example, the code below describes the default sync method behavior with the following Backbone calls:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Since the urlRoot attribute is defined, all HTTP commands are to /library</code></div>\n<div class=\"line\"><code class=\"plain\">var Book = Backbone.Model.extend({urlRoot:</code><code class=\"string\">&apos;/library&apos;</code><code class=\"plain\">})</code></div>\n<div class=\"line\"><code class=\"plain\">var book = </code><code class=\"keyword\">new</code><code class=\"plain\"> Book();</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Performs a POST on /library with the arguments as a payload and the server returns the id as 1</code></div>\n<div class=\"line\"><code class=\"plain\">book.save({title:</code><code class=\"string\">&apos;Bossypants&apos;</code><code class=\"plain\">,author:</code><code class=\"string\">&apos;Tina Fey&apos;</code><code class=\"plain\">,checkout:</code><code class=\"keyword\">false</code><code class=\"plain\">}) </code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Performs a GET on /library/1</code></div>\n<div class=\"line\"><code class=\"plain\">book.fetch({id:</code><code class=\"value\">1</code><code class=\"plain\">}); </code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Performs a PUT on /library/1 with the entire modified object as a payload.</code></div>\n<div class=\"line\"><code class=\"plain\">book.save({checkout:</code><code class=\"keyword\">true</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Performs a DELETE on /library/1</code></div>\n<div class=\"line\"><code class=\"plain\">book.destroy();</code></div>\n</div>\n    </div>\n    <p>In Alloy, you need to use or implement a sync adapter to access persistent storage when using Alloy Model and Collection objects.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-Ready-MadeSyncAdapters\">\n        <h3 class=\"heading \"><span>Ready-Made Sync Adapters</span></h3>\n    <p>Alloy provides a few ready-made sync adapters.  In the &apos;adapter&apos; object, set the &apos;type&apos; to use one of the following:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">sql</tt> for the SQLite database on the Android and iOS platform.    </p>\n</li><li class=\" \">    <p><tt class=\" \">properties</tt> for storing data locally in the Titanium SDK context.    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #999999;\">\n<tt class=\" \">localStorage</tt> for HTML5 localStorage on the Mobile Web platform. Deprecated since Alloy 1.5.0. Use the <tt class=\" \">properties</tt> adapter instead. You do not need to define the <tt class=\" \">columns</tt> object in the <tt class=\" \">config</tt> object. If defined, the object is ignored.    </span>\n    </p>\n</li></ul>    <p>These adapters are part of Alloy and are copied to the <tt class=\" \">Resources/alloy/sync</tt> folder during compilation. These sync adapters assign the <tt class=\" \">id</tt> attribute of the models, which means if you assign an ID when creating a model, it is overridden by any sync operations.    </p>\n    <div class=\"section section-4 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-SQLiteSyncAdapter\">\n        <h4 class=\"heading \"><span>SQLite Sync Adapter</span></h4>\n    <p>The <tt class=\" \">sql</tt> sync adapter has a few extra features compared to the other sync adapters.    </p>\n    <div class=\"section section-5 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-FetchmethodacceptsSQLQuery\">\n        <h5 class=\"heading \"><span>Fetch method accepts SQL Query</span></h5>\n    <p>The Backbone.Collection.fetch method supports SQL queries as a parameter.  Use <tt class=\" \">query</tt> as the key in the dictionary object to create a simple query or query with a prepared statement.  To use a simple query, set the <tt class=\" \">query</tt> property to your SQL query.  To use a query with a prepared statement, set <tt class=\" \">query.statement</tt> to your SQL statement template and set <tt class=\" \">query.params</tt> to the values you want to pass to the statement.  For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var library = Alloy.createCollection(</code><code class=\"string\">&apos;book&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// The table name is the same as the collection_name value from the &apos;config.adapter&apos; object. This may be different from the model name.</code></div>\n<div class=\"line\"><code class=\"plain\">var table = library.config.adapter.collection_name;</code></div>\n<div class=\"line\"><code class=\"comments\">// use a simple query</code></div>\n<div class=\"line\"><code class=\"plain\">library.fetch({query:</code><code class=\"string\">&apos;SELECT * from &apos;</code><code class=\"plain\"> + table + </code><code class=\"string\">&apos; where author=&quot;&apos;</code><code class=\"plain\"> + searchAuthor + </code><code class=\"string\">&apos;&quot;&apos;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// or a prepared statement</code></div>\n<div class=\"line\"><code class=\"plain\">library.fetch({query: { statement: </code><code class=\"string\">&apos;SELECT * from &apos;</code><code class=\"plain\"> + table + </code><code class=\"string\">&apos; where author = ?&apos;</code><code class=\"plain\">, params: [searchAuthor] }});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-5 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-FetchmethodacceptsIDattribute\">\n        <h5 class=\"heading \"><span>Fetch method accepts ID attribute</span></h5>\n    <p><u class=\" \">Since Alloy 1.3.0</u>, to fetch a single model using its ID, pass a dictionary with one key-value pair, where <tt class=\" \">id</tt> is the key and the model&apos;s ID as the value to retrieve that model, to the <tt class=\" \">fetch</tt> method instead of using a SQL query.  For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">myModel.fetch({id: </code><code class=\"value\">123</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// is equivalent to</code></div>\n<div class=\"line\"><code class=\"plain\">myModel.fetch({query: </code><code class=\"string\">&apos;select * from ... where id = &apos;</code><code class=\"plain\"> + </code><code class=\"value\">123</code><code class=\"plain\"> });</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #000000;\">\nColumns accept SQLite keywords    </span>\n    </p>\n    <p>The columns values accept SQLite keywords, such as AUTOINCREMENT and PRIMARY KEY.  For example, the Alloy model file below defines the <tt class=\" \">book_id</tt> to be an auto-incremented, primary key in the <tt class=\" \">books</tt> table.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/models/book.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/models/book.js\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;columns&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;TEXT&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;author&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;TEXT&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;book_id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;INTEGER PRIMARY KEY AUTOINCREMENT&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;adapter&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;sql&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;collection_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;books&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;idAttribute&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;book_id&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-5 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-SpecifycolumnspropertyasprimaryID\">\n        <h5 class=\"heading \"><span>Specify columns property as primary ID</span></h5>\n    <p>Define the <tt class=\" \">idAttribute</tt> key-value pair in the <tt class=\" \">config.adapter</tt> object to use a <tt class=\" \">config.columns</tt> key as the primary ID for the SQLite table, which is used as the model ID for Backbone Model and Collection objects.  In the previous example, the <tt class=\" \">book_id</tt> column is used as the primary key for the table.  If this key is not set, Alloy creates the <tt class=\" \">alloy_id</tt> column in the table and generates a default GUID as the model ID.    </p>\n    </div>\n    <div class=\"section section-5 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-Specifyamigrationtouse\">\n        <h5 class=\"heading \"><span>Specify a migration to use</span></h5>\n    <p>Define the <tt class=\" \">migration</tt> key-value pair in the <tt class=\" \">config.adapter</tt> object to specify the database version to use.  The value of this key is the datatime code of the migration file.  Alloy upgrades or rolls back the database based on this value.  If left undefined, Alloy upgrades the database based on the newest migration file.    </p>\n    </div>\n    <div class=\"section section-5 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-Specifyadatabasetouse\">\n        <h5 class=\"heading \"><span>Specify a database to use</span></h5>\n    <p>Define the <tt class=\" \">db_name</tt> key-value pair in the <tt class=\" \">config.adapter</tt> object to specify the name of the database to use. If left undefined, Alloy uses the default database <tt class=\" \">_alloy_</tt>.    </p>\n    </div>\n    <div class=\"section section-5 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-Specifyadatabasefiletopreload\">\n        <h5 class=\"heading \"><span>Specify a database file to preload</span></h5>\n    <p>Define the <tt class=\" \">db_file</tt> key-value pair in the <tt class=\" \">config.adapter</tt> object to specify the database file (&apos;myfile.sqlite&apos;) to preload.  Place this file in the <tt class=\" \">app/assets</tt> directory of your Alloy project.  Alloy creates a database using the name of the database file minus the file extension if one does not exist.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-CustomSyncAdapters\">\n        <h3 class=\"heading \"><span>Custom Sync Adapters</span></h3>\n    <p>To create a custom sync adapter, create a JavaScript file in either <tt class=\" \">app/assets/alloy/sync</tt> or <tt class=\" \">app/lib/alloy/sync</tt>.  During compilation, this file is copied to the <tt class=\" \">Resources/alloy/sync</tt> folder. In the <tt class=\" \">config</tt> object of the model file, set the <tt class=\" \">type</tt> in the <tt class=\" \">adapter</tt> object to the name of the JavaScript file minus the &apos;.js&apos; extension.    </p>\n    <p>The sync adapter exports three functions:    </p>\n<ul class=\" \"><li class=\"p1 \">    <p><tt class=\" \">module.exports.beforeModelCreate</tt> (optional) - executes code before creating the Backbone.Model class.  First passed parameter is the <tt class=\" \">config</tt> object from the model file. If you add custom properties, such as server settings, to the configuration object, you can process them here.  Second passed parameter is the name of the Alloy Model file.  Returns a <tt class=\" \">config</tt> object.    </p>\n</li><li class=\"p1 \">    <p><tt class=\" \">module.exports.afterModelCreate</tt> (optional) - execute code after creating the Backbone.Model class.  First passed parameter is the newly created Backbone.Model class. Second passed parameter is the name of the Alloy Model file.    </p>\n</li><li class=\" \">    <p><tt class=\" \">module.exports.sync</tt> - implement the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Sync\" target=\"_blank\">Backbone.sync method</a>.    </p>\n</li></ul>    <div class=\"section section-4 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-Example\">\n        <h4 class=\"heading \"><span>Example</span></h4>\n    <p>For a sample of an adapter, refer to the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator-developer-relations/BookClient\" target=\"_blank\">BookClient</a> project.  The client project syncs with the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator-developer-relations/BookService\" target=\"_blank\">BookService</a> project, which is a sample API Builder project that manages a book database with MongoHQ as a backend.  The client project contains a sync adapter, located at <tt class=\" \">app/lib/alloy/sync/book_rest.js</tt>, which uses HTTP requests to interact with the API Builder application.    </p>\n    <p>    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-36739597_AlloySyncAdaptersandMigrations-Migrations\">\n        <h2 class=\"heading \"><span>Migrations</span></h2>\n    <p>A migration is a description of incremental changes to a database, which takes your database from version 1 to version X, with a migration file for each step in the evolution of your database schema. This is helpful to keep different versions of a database in sync. For example, when version 7 of your application is deployed, migrations are able to successfully update the database from versions 1 through 6.    </p>\n    <p>In Alloy, migrations are defined by JavaScript files located in the <tt class=\" \">app/migrations</tt> folder of the project. The file should be named the same as the model JavaScript file prefixed with &apos;YYYYMMDDHHmmss_&apos; (datetime code followed by an underscore), for example, <tt class=\" \">20120610049877_book.js</tt>. Alloy applies the migrations from oldest to newest, according to the datetime code at the beginning of the file name.    </p>\n    <p>The migration file contains two functions that need to be implemented: <tt class=\" \">migration.up(migrator</tt><tt class=\" \">)</tt> and <tt class=\" \">migration.down(migrator)</tt>, where <tt class=\" \">migrator</tt> is a special migration object that provides references to the database and table as well as some convenient functions for table operations (see table below). The <tt class=\" \">migration.up</tt> function upgrades the database from the previous version, while the <tt class=\" \">migration.down</tt> function rolls back the changes to the previous version.    </p>\n    <p>Currently, migrations are only used with the <tt class=\" \">sql</tt> sync adapter.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">db</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Handle to a <tt class=\" \">Ti.Database</tt> instance to interact with the SQLite database. Use this handle to execute SQL calls using <tt class=\" \">db.execute</tt>.    </p>\n    <p>DO NOT CLOSE THIS HANDLE OR OPEN A SECOND INSTANCE OF THE DATABASE. This will cause fatal application errors.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">dbname</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Name of the database.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">table</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Name of the table. Same as value of the <tt class=\" \">config.adapter.collection_name</tt> key of the Alloy Model file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">idAttribute</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Name of the columns attribute to use as the primary key of the database.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">createTable</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Function to create a table in the database with the specified schema. Required parameter is the <tt class=\" \">columns</tt> object from the configuration object of the Alloy Model file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">dropTable</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Function to drop the current table from the database.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">insertRow</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Function to insert data into the table. Required parameter is a data object to insert in the table. Useful for preloading data.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">deleteRow</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Function to delete data from the table. Required parameter is a data object to remove from the table. Alloy uses an SQLite query based on the specified object to find the data to delete.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>For example, the migration file below is the initial version of the database that preloads some data in the table.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/migrations/20120610049877_book.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/migrations/20120610049877_book.js\">\n<div class=\"line\"><code class=\"plain\">var preload_data = [</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;To Kill a Mockingbird&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;Harper Lee&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;The Catcher in the Rye&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;J. D. Salinger&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Of Mice and Men&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;John Steinbeck&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Lord of the Flies&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;William Golding&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;The Great Gatsby&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;F. Scott Fitzgerald&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Animal Farm&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;George Orwell&apos;</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">migration.up = function(migrator) {</code></div>\n<div class=\"line\"><code class=\"plain\">    migrator.createTable({</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;columns&quot;</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;book&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;TEXT&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;author&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;TEXT&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">for</code><code class=\"plain\"> (var i = </code><code class=\"value\">0</code><code class=\"plain\">; i &lt; preload_data.length; i++) { </code></div>\n<div class=\"line\"><code class=\"plain\">\t    migrator.insertRow(preload_data[i]);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">migration.down = function(migrator) {</code></div>\n<div class=\"line\"><code class=\"plain\">    migrator.dropTable();</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <p>Suppose later, you want to include some additional information for your books, such as an ISBN. The below migration file upgrades or rolls back the changes.  Since SQLite does not support the DROP COLUMN operation, the migration needs to create a temporary table to hold the data, drop the new database, create the old database, then copy the data back to the regressed table. Note that if the Alloy Model file does not specify an <tt class=\" \">idAttribute</tt> property, Alloy creates the <tt class=\" \">alloy_id</tt> column.  This column needs to be copied over as part of the migration as shown below.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/migrations/20130118069778_book.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/migrations/20130118069778_book.js\">\n<div class=\"line\"><code class=\"plain\">migration.up = function(migrator) {</code></div>\n<div class=\"line\"><code class=\"plain\">    migrator.db.execute(</code><code class=\"string\">&apos;ALTER TABLE &apos;</code><code class=\"plain\"> + migrator.table + </code><code class=\"string\">&apos; ADD COLUMN isbn INT;&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">migration.down = function(migrator) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var db = migrator.db;</code></div>\n<div class=\"line\"><code class=\"plain\">    var table = migrator.table;</code></div>\n<div class=\"line\"><code class=\"plain\">    db.execute(</code><code class=\"string\">&apos;CREATE TEMPORARY TABLE book_backup(title,author,alloy_id);&apos;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    db.execute(</code><code class=\"string\">&apos;INSERT INTO book_backup SELECT title,author,alloy_id FROM &apos;</code><code class=\"plain\"> + table + </code><code class=\"string\">&apos;;&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    migrator.dropTable();</code></div>\n<div class=\"line\"><code class=\"plain\">    migrator.createTable({</code></div>\n<div class=\"line\"><code class=\"plain\">        columns: {</code></div>\n<div class=\"line\"><code class=\"plain\">            title:</code><code class=\"string\">&quot;TEXT&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            author:</code><code class=\"string\">&quot;TEXT&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    db.execute(</code><code class=\"string\">&apos;INSERT INTO &apos;</code><code class=\"plain\"> + table + </code><code class=\"string\">&apos; SELECT title,author,alloy_id FROM book_backup;&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    db.execute(</code><code class=\"string\">&apos;DROP TABLE book_backup;&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=36739597\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy Sync Adapters and Migrations"});