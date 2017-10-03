Ext.data.JsonP['Spotlight_Search']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Spotlight Search</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43315092\" class=\"content\">\n                        <h1>Spotlight Search</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Spotlight_Search-section-src-43315092_SpotlightSearch-Introduction\">Introduction</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Spotlight_Search-section-src-43315092_SpotlightSearch-Privatevs.PublicIndexing\">Private vs. Public Indexing</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Spotlight_Search-section-src-43315092_SpotlightSearch-IndexApplicationContent\">Index Application Content</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Spotlight_Search-section-src-43315092_SpotlightSearch-IndexActivities\">Index Activities</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Spotlight_Search-section-src-43315092_SpotlightSearch-RespondtoanApplicationLaunchfromSpotlight\">Respond to an Application Launch from Spotlight</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Spotlight_Search-section-src-43315092_SpotlightSearch-MarkUpWebContent\">Mark Up Web Content</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Spotlight_Search-section-src-43315092_SpotlightSearch-FurtherReading\">Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-43315092_SpotlightSearch-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Starting with iOS 9.0, Apple lets you index your application content and activities to be used by the spotlight search in iOS.  When a user searches for keywords you indexed, your application or activity will be displayed in the results of the search.    </p>\n    <p>To add a search index of your application for iOS, the Titanium SDK exposes the following APIs:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.App.iOS.SearchableItemAttributeSet\">Titanium.App.iOS.SearchableItemAttributeSet</a>: define keywords and properties to describe the item you want to index.  Note that this object can be added to either a SearchableItem object or an UserActivity object to index application content or activities, respectively.    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.App.iOS.SearchableItem\">Titanium.App.iOS.SearchableItem</a>: assembles the SearchableItemAttributeSet as an unique object package to be indexed.    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.App.iOS.SearchableIndex\">Titanium.App.iOS.SearchableIndex</a>: exposes the iOS search index to add the SearchableItems to the index.    </p>\n</li></ul>    <p>In addition to the APIs exposed by the Titanium SDK, if some of your content is available as web content, you can add special markup to make it discoverable by Apple.    </p>\n    <div class=\"section section-3 \" id=\"src-43315092_SpotlightSearch-Privatevs.PublicIndexing\">\n        <h3 class=\"heading \"><span>Private vs. Public Indexing</span></h3>\n    <p>You have the option of adding searchable content to either a private index (on-device index) or a public index (Apple&apos;s server-side index).  The private index will make the searchable content only available on the user&apos;s device.  The public index makes content available to other users.  Only user activities and web content may be added to the public index.    </p>\n    <p>To make content available for public indexing, you need to set the <tt class=\" \">eligibleForPublicIndexing</tt> property of a UserActivity object to true and add specific mark up notation to your web site to allow Apple to index it.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43315092_SpotlightSearch-IndexApplicationContent\">\n        <h2 class=\"heading \"><span>Index Application Content</span></h2>\n    <p>To index application content:    </p>\n<ol class=\" \"><li class=\" \">    <p>Create a SearchableItemAttributeSet object and define the keywords and properties to describe the item to index.    </p>\n</li><li class=\" \">    <p>Create a SearchableItem object and set its <tt class=\" \">attributeSet</tt> property to the previously created SearchItemAttributeSet object.    </p>\n</li><li class=\" \">    <p>Create an instance of a SearchableIndex and pass the SearchableItem object to the <tt class=\" \">AddToDefaultSearchableIndex()</tt> method.    </p>\n</li></ol>    <p><u class=\" \">To create a SearchableItemAttributeSet object</u>, use the <tt class=\" \">Titanium.App.iOS.createSearchableItemAttributeSet()</tt> method and pass the method a dictionary with the <tt class=\" \">itemContentType</tt> attribute set to a <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html\" target=\"_blank\">uniform type identifier</a>. You must set this property when creating the object.  Use either the <tt class=\" \">Titanium.App.iOS.UTTYPE_*</tt> constants or the string indentifier.  The property describes the content type of the item you will be indexing, for example, an image (<tt class=\" \">public.image</tt>), movie (<tt class=\" \">public.movie</tt>) or PDF (<tt class=\" \">com.adobe.pdf</tt>).    </p>\n    <p>Besides the <tt class=\" \">itemContentType</tt> property, set other document-specific properties to describe the content to be indexed.  For example, the code below describes an item for an audio file.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({</code></div>\n<div class=\"line\"><code class=\"plain\">    itemContentType: Ti.App.iOS.UTTYPE_AUDIO,</code></div>\n<div class=\"line\"><code class=\"plain\">    title: </code><code class=\"string\">&apos;While My Guitar Gently Weeps&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    artist: </code><code class=\"string\">&apos;The Beatles&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    album: </code><code class=\"string\">&apos;The Beatles (White Album)&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    musicalGenre: </code><code class=\"string\">&apos;Rock&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    keywords: [</code><code class=\"string\">&apos;love&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;sleeping&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;floor&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;sweeping&apos;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p><u class=\" \">To create a SearchableItem object</u>, use the <tt class=\" \">Titanium.App.iOS.createSearchableItem()</tt> method.  Pass the method a dictionary with the following properites defined.  Only the <tt class=\" \">attributeSet</tt> property is required to be set.    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">attributeSet:</tt> set to the previously created SearchableItemAttributeSet object to associate the metadata with the SearchItem object.    </p>\n</li><li class=\" \">    <p><tt class=\" \">domainIdentifier:</tt> user-defined string that identifies the domain or owner the item belongs to, for example, if the item describes a song, the domain identifier could be an album.    </p>\n</li><li class=\" \">    <p><tt class=\" \">expirationDate:</tt> set to have the content removed by that date.  By default, the indexed data will be removed after one month.    </p>\n</li><li class=\" \">    <p><tt class=\" \">uniqueIdentifier:</tt> user-defined string that uniquely identifiers the object within the application.    </p>\n</li></ul>    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var item = Ti.App.iOS.createSearchableItem({</code></div>\n<div class=\"line\"><code class=\"plain\">    identifier: </code><code class=\"string\">&apos;beatles-white-album-lp-1-track-7&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    domainIdentifier: </code><code class=\"string\">&apos;beatles-white-album&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    attributeSet: itemAttr</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p><u class=\" \">To index the item</u>, create an instance of a SearchableIndex with the <tt class=\" \">Titanium.App.iOS.createSearchableIndex()</tt> method.  Invoke the <tt class=\" \">addToDefaultSearchAbleIndex()</tt> method on the instance, and pass the method an array of SearchableItem objects to index and a callback function to handle the success and error cases.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var indexer = Ti.App.iOS.createSearchableIndex();</code></div>\n<div class=\"line\"><code class=\"plain\">indexer.addToDefaultSearchableIndex([item], function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Press the home button and now search for your keywords&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Error: &apos;</code><code class=\"plain\"> + JSON.stringify(e.error));</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});        </code></div>\n</div>\n    </div>\n    <p>When you run the above code, after the success dialog appears, close the application and go to Spotlight search by swiping to the right on the home screen.  Searching for any of the terms from the attribute set will display the item and application as a result.    </p>\n    <p>    <img src=\"images/download/attachments/43315092/appsearch.png\" alt=\"images/download/attachments/43315092/appsearch.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43315092_SpotlightSearch-IndexActivities\">\n        <h2 class=\"heading \"><span>Index Activities</span></h2>\n    <p>To index an activity:    </p>\n<ol class=\" \"><li class=\" \">    <p>Create a SearchableItemAttributeSet object and define the keywords and properties to describe the activity to index.    </p>\n</li><li class=\" \">    <p>Create the UserActivity and set its <tt class=\" \">eligibleForSearch</tt> property to true, which gives the activity permission to be added to the on-device index.    </p>\n</li><li class=\" \">    <p>Optional.  To make the activity searchable to other users, you need to set the <tt class=\" \">eligibleForPublicIndexing</tt> property to <tt class=\" \">true</tt>, and set either the <tt class=\" \">webpageURL</tt> or <tt class=\" \">requiredUserInfoKeys</tt> property.  The activity will be added to Apple&apos;s server-side index.    </p>\n</li><li class=\" \">    <p>Invoke the UserActivity object&apos;s <tt class=\" \">addContentAttributeSet()</tt> and pass it the SearchableItemAttributeSet object, which adds the attribute set to the device&apos;s index and optionally Apple&apos;s server-side index.    </p>\n</li></ol>    <p>For example, if the user activity is editing a document, you may want to advertise the activity to spotlight.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({</code></div>\n<div class=\"line\"><code class=\"plain\">    itemContentType: </code><code class=\"string\">&apos;com.microsoft.word.doc&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    title: </code><code class=\"string\">&apos;How to Make Activities Searchable&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    contentDescription: </code><code class=\"string\">&apos;How-to guide about making a handoff activity appear in spotlight&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    editors: [</code><code class=\"string\">&apos;user@foo.com&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;editor@apple.com&apos;</code><code class=\"plain\">],</code></div>\n<div class=\"line\"><code class=\"plain\">    keywords:[</code><code class=\"string\">&apos;titanium&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;activity&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;handoff&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;spotlight&apos;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">var activity = Ti.App.iOS.createUserActivity({</code></div>\n<div class=\"line\"><code class=\"plain\">    activityType: </code><code class=\"string\">&apos;com.foo.edit.docx&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    title:</code><code class=\"string\">&apos;Edit the Document&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    userInfo:{</code></div>\n<div class=\"line\"><code class=\"plain\">        filename: </code><code class=\"string\">&apos;howto.docx&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    eligibleForSearch: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">activity.addContentAttributeSet(itemAttr);</code></div>\n<div class=\"line\"><code class=\"plain\">activity.becomeCurrent();</code></div>\n</div>\n    </div>\n    <p>    <img src=\"images/download/attachments/43315092/activitysearch.png\" alt=\"images/download/attachments/43315092/activitysearch.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43315092_SpotlightSearch-RespondtoanApplicationLaunchfromSpotlight\">\n        <h2 class=\"heading \"><span>Respond to an Application Launch from Spotlight</span></h2>\n    <p>To know if the application was launched from Spotlight, monitor the <a class=\"external-link external-link\" href=\"#!/api/Titanium.App.iOS-event-continueactivity\"><tt class=\" \">continueactivity</tt> </a> event of the <tt class=\" \">Ti.App.iOS</tt> module.  Note that the event is also fired when an activity is handed off to another device.    </p>\n    <p>The event will be passed an object with the following properties:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">activityType</tt>: Will be set to <tt class=\" \">com.apple.corespotlightitem</tt> if the application was launched from Spotlight, else it will be a user activity type    </p>\n</li><li class=\" \">    <p><tt class=\" \">searchableItemActivityIdentifier</tt>: Will be set to the unique identifier of the search item    </p>\n</li><li class=\" \">    <p><tt class=\" \">title</tt>: Title of the item if available    </p>\n</li></ul>    <p>To respond to a launch from Spotlight, check to see if the <tt class=\" \">activityType</tt> is set to <tt class=\" \">com.apple.corespotlightitem</tt>, then use the <tt class=\" \">searchableItemActivityIdentifier</tt> to navigate to the item.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Ti.App.iOS.addEventListener(</code><code class=\"string\">&apos;continueactivity&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Not launched from Spotlight</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.activityType !== </code><code class=\"string\">&apos;com.apple.corespotlightitem&apos;</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    var uniqueIdentifier = e.searchableItemActivityIdentifier;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Navigate to the content</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43315092_SpotlightSearch-MarkUpWebContent\">\n        <h2 class=\"heading \"><span>Mark Up Web Content</span></h2>\n    <p>In order to make web content searchable by Apple, Apple will use the URLs you provide when submitting your application to the iTunes App Store.  You will need to update the websites <tt class=\" \">robots.txt</tt> file to tell Applebot which websites to crawl.    </p>\n    <p>In your website HTML, add <a class=\"external-link external-link\" href=\"http://schema.org/docs/schemas.html\" target=\"_blank\">schema.org markup</a> and <a class=\"external-link external-link\" href=\"http://ogp.me/\" target=\"_blank\">Open Graph attributes</a> to make the search results of your web content more rich.  Note that Apple only supports a subset of the available schema.org markup.  For more details, see <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/WebContent.html#//apple_ref/doc/uid/TP40016308-CH8-SW1\" target=\"_blank\">iOS Developer Library: App Search Programming Guide - Mark Up Web Content</a>.    </p>\n    <p>Apple also recommends using universal links, which are links in your web content that opens your application if it is installed on the user&apos;s device.  For more details, see <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1\" target=\"_blank\">iOS Developer Library: App Search Programming Guide - Support Universal Links</a>.    </p>\n    <p>To test your website with the iOS 9 search APIs, use the following URL: <a class=\"external-link external-link\" href=\"https://search.developer.apple.com/appsearch-validation-tool\" target=\"_blank\">https://search.developer.apple.com/appsearch-validation-tool</a>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43315092_SpotlightSearch-FurtherReading\">\n        <h2 class=\"heading \"><span>Further Reading</span></h2>\n    <p><a class=\"external-link external-link\" href=\"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/\" target=\"_blank\">iOS Developer Library: App Search Programming Guide</a>    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43315092\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Spotlight Search"});