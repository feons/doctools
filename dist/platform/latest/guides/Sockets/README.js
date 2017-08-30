Ext.data.JsonP['Sockets']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Sockets</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-29004824\" class=\"content\">\n                        <h1>Sockets</h1>\n    <div class=\"section section-2 \" id=\"src-29004824_Sockets-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Sockets-section-src-29004824_Sockets-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Sockets-section-src-29004824_Sockets-SocketsExplained\">Sockets Explained</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Sockets-section-src-29004824_Sockets-UsageExamples\">Usage Examples</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-29004824_Sockets-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>Support for listening and connecting sockets via TCP will allow application developers to incorporate lower level network logic into their applications.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004824_Sockets-SocketsExplained\">\n        <h2 class=\"heading \"><span>Sockets Explained</span></h2>\n    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.Socket.TCP\">Titanium.Network.Socket.TCP</a> implements the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Stream\">Titanium.Stream</a> interface and therefore relies on <a class=\"external-link external-link\" href=\"#!/api/Titanium.Buffer\">Titanium.Buffer</a>.    </p>\n    <p>Socket operations are generally asynchronous and therefore socket callbacks are core to how one operation flows into the next. For example, when connecting to a remote host, you wait until the <tt class=\" \">connected</tt> callback is invoked and initiate read and write operations from inside that callback.    </p>\n    <p>Once a socket is connected, IO operations leave the scope of <tt class=\" \">Ti.Network.Socket</tt> and move into the realm of general Stream IO. Again, because sockets are naturally asynchronous, IO interactions with them should generally be conducted through the <tt class=\" \">Ti.Stream</tt> module. Lastly, while sockets can be an extremely powerful part of your developer tool box, network programming is non-trivial and investigation into the basics of how BSD sockets work is suggested.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004824_Sockets-UsageExamples\">\n        <h2 class=\"heading \"><span>Usage Examples</span></h2>\n    <p>The following code excerpt creates a socket and connects to a remote server. When the socket connects, a callback function is invoked to interact with the socket. The callback function is shown in the next excerpt.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">//Create a socket, connect to another listening socket locally, write some data and then enter read loop</code></div>\n<div class=\"line\"><code class=\"plain\">var connectSocket = Ti.Network.Socket.createTCP({</code></div>\n<div class=\"line\"><code class=\"plain\">    host: </code><code class=\"string\">&apos;google.com&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    port: </code><code class=\"value\">80</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    connected: function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.info(</code><code class=\"string\">&quot;Socket &lt;&quot;</code><code class=\"plain\"> + e.socket + </code><code class=\"string\">&quot;&gt; connected to host &lt;&quot;</code><code class=\"plain\"> + e.socket.host + </code><code class=\"string\">&quot;&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        postConnect();</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    error: function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot;Socket &lt;&quot;</code><code class=\"plain\"> + e.socket + </code><code class=\"string\">&quot;&gt; encountered error when connecting&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot; error code &lt;&quot;</code><code class=\"plain\"> + e.errorCode + </code><code class=\"string\">&quot;&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot; error description &lt;&quot;</code><code class=\"plain\"> + e.error + </code><code class=\"string\">&quot;&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">connectSocket.connect();</code></div>\n</div>\n    </div>\n    <p>The following code excerpt shows the <tt class=\" \">postConnect</tt> function used in the previous excerpt. It writes a message to the socket and then enters a read loop, reading data from the socket until the socket is closed.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">function postConnect()</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// write some data</code></div>\n<div class=\"line\"><code class=\"plain\">        var outData = Ti.createBuffer({value:</code><code class=\"string\">&quot;Howdy remote socket! How are you?&quot;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">        var bytesWritten = connectSocket.write(outData);</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.info(</code><code class=\"string\">&quot;&lt;&quot;</code><code class=\"plain\"> + bytesWritten + </code><code class=\"string\">&quot;&gt; bytes written to socket&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// start read loop</code></div>\n<div class=\"line\"><code class=\"plain\">        var readBuffer = Ti.createBuffer({length:</code><code class=\"value\">1024</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">        var bytesRead = </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">while</code><code class=\"plain\"> ((bytesRead = connectSocket.read(readBuffer)) &gt; -</code><code class=\"value\">1</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">            var stringData = Ti.Codec.decodeString({source: readBuffer, length: bytesRead });</code></div>\n<div class=\"line\"><code class=\"plain\">            Ti.API.info(</code><code class=\"string\">&quot;received &lt;&quot;</code><code class=\"plain\"> + bytesRead + </code><code class=\"string\">&quot;&gt; bytes of data. String representation of data is &lt;&quot;</code><code class=\"plain\"> + stringData + </code><code class=\"string\">&quot;&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">            readBuffer.clear(); </code><code class=\"comments\">// clear the buffer before the next read</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.info(</code><code class=\"string\">&quot;socket has closed&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        connectSocket.close(); </code><code class=\"comments\">// close the socket on our end</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">catch</code><code class=\"plain\"> (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// IO error on socket. socket is closed and connectSocket.error is called</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>The following sample creates a listening socket &#x2013; in this case, listening on the loopback address, which can be used for communicating with other processes on the same device. iOS also supports Ti.Platform.address (the address of the WiFi interface). Android supports only the loopback address.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">//Create a socket and listen for incoming connections</code></div>\n<div class=\"line\"><code class=\"plain\">var listenSocket = Ti.Network.Socket.createTCP({</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Hostname to listen on/connect to. </code></div>\n<div class=\"line\"><code class=\"plain\">    host: </code><code class=\"string\">&apos;127.0.0.1&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    port: </code><code class=\"value\">40404</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    accepted: function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// this where you would usually store the e.inbound value somewhere else so it can be used for</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// read / write operations elsewhere in the app</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.info(</code><code class=\"string\">&quot;Listening socket &lt;&quot;</code><code class=\"plain\"> + e.socket + </code><code class=\"string\">&quot;&gt; accepted incoming connection &lt;&quot;</code><code class=\"plain\"> + e.inbound + </code><code class=\"string\">&quot;&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        e.inbound.close(); </code><code class=\"comments\">// close the accepted socket</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    error: function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot;Socket &lt;&quot;</code><code class=\"plain\"> + e.socket + </code><code class=\"string\">&quot;&gt; encountered error when listening&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot; error code &lt;&quot;</code><code class=\"plain\"> + e.errorCode + </code><code class=\"string\">&quot;&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot; error description &lt;&quot;</code><code class=\"plain\"> + e.error + </code><code class=\"string\">&quot;&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// Starts listening for connections, does not accept them.</code></div>\n<div class=\"line\"><code class=\"plain\">listenSocket.listen(); </code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Tells socket to accept the next inbound connection. Asynchronous.</code></div>\n<div class=\"line\"><code class=\"comments\">// listenSocket.accepted callback is invoked when a connection is actually accepted.</code></div>\n<div class=\"line\"><code class=\"plain\">listenSocket.accept();</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004824\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Sockets"});