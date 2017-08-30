Ext.data.JsonP['Backbone_Objects_without_Alloy']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Backbone Objects without Alloy</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-36739595\" class=\"content\">\n                        <h1>Backbone Objects without Alloy</h1>\n    <p>    <span style=\"color: #333333;\">\nYou can use plain Backbone Collection and Model objects in place of the Alloy versions.  This does not require any special Alloy or Titanium code.  Use the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/\" target=\"_blank\">Backbone API</a> to create and control Backbone objects instead of using the     </span>\n<tt class=\" \">createCollection</tt>    <span style=\"color: #333333;\">\n and     </span>\n<tt class=\" \">createModel</tt>    <span style=\"color: #333333;\">\n methods. Backbone models also do not require a model configuration file. For example:    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"comments\">// Initialize a collection class and implement the comparator method for sorting</code></div>\n<div class=\"line\"><code class=\"plain\">var collection = Backbone.Collection.extend({</code></div>\n<div class=\"line\"><code class=\"plain\">\tcomparator: function(model){</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"keyword\">return</code><code class=\"plain\"> model.get(</code><code class=\"string\">&apos;title&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Create a new collection</code></div>\n<div class=\"line\"><code class=\"plain\">var library = </code><code class=\"keyword\">new</code><code class=\"plain\"> collection([</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;To Kill a Mockingbird&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;Harper Lee&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;The Catcher in the Rye&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;J. D. Salinger&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Of Mice and Men&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;John Steinbeck&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Lord of the Flies&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;William Golding&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;The Great Gatsby&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;F. Scott Fitzgerald&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Tom Sawyer&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;Mark Twain&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Animal Farm&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;George Orwell&apos;</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">]);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Initialize a model class</code></div>\n<div class=\"line\"><code class=\"plain\">var model = Backbone.Model.extend();</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Create a new model and add it to the collection</code></div>\n<div class=\"line\"><code class=\"plain\">var book = </code><code class=\"keyword\">new</code><code class=\"plain\"> model({title:</code><code class=\"string\">&apos;Bossypants&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;Tina Fey&apos;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">library.add(book);</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Remove the very first model from the collection</code></div>\n<div class=\"line\"><code class=\"plain\">model = library.at(</code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">library.remove(model);</code></div>\n</div>\n    </div>\n    <p>These Backbone objects cannot persist to external storage without implementing the Backbone.sync method, so if you make calls to Collection.fetch, Collection.create, Model.fetch, Model.save and Model.destroy, the application throws an error.    </p>\n    <p>You can use Alloy&apos;s Model-View binding mechanism to keep the local Backbone Models and Collections in sync with an Alloy view-controller.  Follow the same directions in the <a class=\"document-link \" href=\"#!/guide/Alloy_Data_Binding-section-src-36739592_AlloyDataBinding-AlloyModel-ViewBinding\">Alloy Model-View Binding section</a> except instead of using the <tt class=\" \">Model</tt> or <tt class=\" \">Collections</tt> XML tag, you need to first initialize your model or collection in the alloy.js initializer file and add it to the <tt class=\" \">Alloy.Models</tt> or <tt class=\" \">Alloy.Collections</tt> namespace.  For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/alloy.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/alloy.js\">\n<div class=\"line\"><code class=\"comments\">// Initialize a collection class and implement the comparator method for sorting</code></div>\n<div class=\"line\"><code class=\"plain\">var collection = Backbone.Collection.extend({</code></div>\n<div class=\"line\"><code class=\"plain\">\tcomparator: function(model){</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"keyword\">return</code><code class=\"plain\"> model.get(</code><code class=\"string\">&apos;title&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Create a new collection</code></div>\n<div class=\"line\"><code class=\"plain\">var library = </code><code class=\"keyword\">new</code><code class=\"plain\"> collection([</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;To Kill a Mockingbird&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;Harper Lee&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;The Catcher in the Rye&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;J. D. Salinger&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Of Mice and Men&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;John Steinbeck&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Lord of the Flies&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;William Golding&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;The Great Gatsby&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;F. Scott Fitzgerald&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Tom Sawyer&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;Mark Twain&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t{title: </code><code class=\"string\">&apos;Animal Farm&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;George Orwell&apos;</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">]);</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Add the collection to the global scope</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.book = library;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;!-- Markup the view the same except there is no Collection tag --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableView dataCollection=</code><code class=\"string\">&quot;book&quot;</code><code class=\"plain\"> dataTransform=</code><code class=\"string\">&quot;transformFunction&quot;</code><code class=\"plain\"> dataFilter=</code><code class=\"string\">&quot;filterFunction&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;TableViewRow title=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Encase the title attribute in square brackets</code></div>\n<div class=\"line\"><code class=\"plain\">function transformFunction(model) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Need to convert the model to a JSON object</code></div>\n<div class=\"line\"><code class=\"plain\">    var transform = model.toJSON();</code></div>\n<div class=\"line\"><code class=\"plain\">    transform.title = </code><code class=\"string\">&apos;[&apos;</code><code class=\"plain\"> + transform.title + </code><code class=\"string\">&apos;]&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Example of creating a custom attribute, reference in the view using {custom}</code></div>\n<div class=\"line\"><code class=\"plain\">    transform.custom = transform.title + </code><code class=\"string\">&quot; by &quot;</code><code class=\"plain\"> + transform.author;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> transform;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Show only book models by Mark Twain</code></div>\n<div class=\"line\"><code class=\"plain\">function filterFunction(collection) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> collection.where({author:</code><code class=\"string\">&apos;Mark Twain&apos;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Get a reference to the library</code></div>\n<div class=\"line\"><code class=\"plain\">var library = Alloy.Collections.book;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Trigger the update using the &apos;change&apos; event instead of the fetch method, since we do not have persistent storage</code></div>\n<div class=\"line\"><code class=\"plain\">library.trigger(</code><code class=\"string\">&apos;change&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Same code from the previous example...</code></div>\n<div class=\"line\"><code class=\"comments\">// Initialize a model class</code></div>\n<div class=\"line\"><code class=\"plain\">var model = Backbone.Model.extend();</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Create a new model and add it to the collection</code></div>\n<div class=\"line\"><code class=\"plain\">var book = </code><code class=\"keyword\">new</code><code class=\"plain\"> model({title:</code><code class=\"string\">&apos;Bossypants&apos;</code><code class=\"plain\">, author:</code><code class=\"string\">&apos;Tina Fey&apos;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">library.add(book);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Remove the very first model from the collection</code></div>\n<div class=\"line\"><code class=\"plain\">model = library.at(</code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">library.remove(model);</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Do not forget to call destroy to unbind the event handlers created by Alloy </code></div>\n<div class=\"line\"><code class=\"plain\">$.index.addEventListener(</code><code class=\"string\">&apos;close&apos;</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.destroy();</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=36739595\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Backbone Objects without Alloy"});