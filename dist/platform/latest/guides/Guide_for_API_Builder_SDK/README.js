Ext.data.JsonP['Guide_for_API_Builder_SDK']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Guide for API Builder SDK</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-46244860\" class=\"content\">\n                        <h1>Guide for API Builder SDK</h1>\n    <div class=\"section section-2 \" id=\"src-46244860_GuideforAPIBuilderSDK-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>This document will guide you on how to create an API Builder SDK for your target client platform: Android, iOS, Alloy, Titanium, jQuery, or Node.js.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46244860_GuideforAPIBuilderSDK-Environmentsetup\">\n        <h2 class=\"heading \"><span>Environment setup</span></h2>\n    <p>In order to generate an API Builder SDK for your target client platform, you will need the following on your machine:    </p>\n<ul class=\" \"><li class=\" \">    <p>Node version &gt;= 4.2.X    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \"> <a class=\"external-link external-link\" href=\"https://nodejs.org/en/\" target=\"_blank\">https://nodejs.org/en/</a> </strong>    </p>\n</li></ul></li><li class=\" \">    <p>Appc CLI NPM    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \"> <tt class=\" \">sudo npm install -g appcelerator</tt> <br> </br></strong>    </p>\n</li></ul></li><li class=\" \">    <p>Appc CLI Core &gt;= 5.1.0    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \"> <tt class=\" \">appc use latest</tt> </strong>    </p>\n</li></ul></li><li class=\" \">    <p>Titanium SDK<strong class=\" \"> <br> </br></strong>    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">appc ti sdk install latest</tt>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46244860_GuideforAPIBuilderSDK-GeneratingAPIBuilderSDK\">\n        <h2 class=\"heading \"><span>Generating  API Builder  SDK</span></h2>\n<ol class=\" \"><li class=\" \">    <p>In terminal/command prompt, create a new API Builder App: <tt class=\" \">appc new</tt>    </p>\n<ol class=\" \"><li class=\" \">    <p><strong class=\" \">Login</strong> using your <strong class=\" \">Appcelerator</strong> credentials.    </p>\n</li><li class=\" \">    <p>Pick the enterprise organization you belong to.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">API Builder App </strong>from the list of options and follow the prompts to create the app    </p>\n</li></ol></li><li class=\" \">    <p>After the API Builder app is created, cd into the API Builder project and install a connector that you would like to use like <tt class=\" \">appc install connector/appc.arrowdb</tt>    </p>\n<ol class=\" \"><li class=\" \">    <p>The example below will use the appc.arrowdb connector.    </p>\n</li></ol></li><li class=\" \">    <p>Next, run <strong class=\" \">appc generate</strong>    </p>\n</li><li class=\" \">    <p>Select API Builder<strong class=\" \"> SDK </strong>from the list of options    </p>\n</li><li class=\" \">    <p>The next prompt will ask you to select your target client platform (Alloy, Android, etc.). In this example, lets choose <strong class=\" \">Android</strong>.    </p>\n</li><li class=\" \">    <p>Specify the name of the SDK. The prompt will provide you with a pre-picked name. Lets stick with that name for now.    </p>\n</li><li class=\" \">    <p>Specify the directory where the generated SDK will be created into. The prompt will provide you with a pre-determined directory. Again, lets still with the default.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-46244860_GuideforAPIBuilderSDK-SetupandworkaroundsforAndroidprojects\">\n        <h2 class=\"heading \"><span>Setup and workarounds for Android projects</span></h2>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>The below steps will be using Android Studio since that is the official supported IDE by Google: <a class=\"external-link external-link\" href=\"http://developer.android.com/sdk/index.html\" target=\"_blank\">http://developer.android.com/sdk/index.html</a>    </p>\n    </div>\n    <ol class=\" \"><li class=\" \">    <p>Move the API Builder SDK (<tt class=\" \">&lt;arrow dir&gt;/sdk/com/&lt;arrow sdk&gt;</tt>) under the Android com directory (<tt class=\" \">&lt;android dir&gt;/app/src/main/java/com</tt>). For example, moving the monkeysdk: <tt class=\" \">monkeysk/app/src/main/java/com</tt>    </p>\n</li><li class=\" \">    <p>During your project creation, if you set your target SDK to 23 (Android 6.0), then you will need to add the following Gradle configuration in your <strong class=\" \">build.gradle</strong> file (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/API-1194\" target=\"_blank\">API-1194</a>):    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">android {</code></div>\n<div class=\"line\"><code class=\"plain\">\t...</code></div>\n<div class=\"line\"><code class=\"plain\">\tbuildToolsVersion </code><code class=\"string\">&quot;23.0.2&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    useLibrary </code><code class=\"string\">&apos;org.apache.http.legacy&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>    <img src=\"images/download/attachments/46244860/arrow_sdk2.png\" alt=\"images/download/attachments/46244860/arrow_sdk2.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n</li><li class=\" \">    <p>In the <strong class=\" \">AndroidManifest.xml </strong>file, you will need to add the <strong class=\" \">android.permission.INTERNET </strong>property:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">application</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;</code><code class=\"keyword\">uses</code><code class=\"plain\">-permission </code><code class=\"color1\">android:name</code><code class=\"plain\">=</code><code class=\"string\">&quot;android.permission.INTERNET&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n</div>\n    </div>\n    <p>    <img src=\"images/download/attachments/46244860/arrow_sdk3.png\" alt=\"images/download/attachments/46244860/arrow_sdk3.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    <p>    </p>\n</li><li class=\" \">    <p>Next, in your custom API Builder SDK, open <strong class=\" \">API.java </strong>file and change the import path (<strong class=\" \">import com.arrow.CachePolicy.Type;</strong>) to include your custom SDK name; this is a workaround for <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/API-1195\" target=\"_blank\">API-1195</a>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> java.util.Map;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.CachePolicy.Type;</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n</div>\n    </div>\n    <p>    <img src=\"images/download/attachments/46244860/arrow_sdk4.png\" alt=\"images/download/attachments/46244860/arrow_sdk4.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    <p>    </p>\n</li><li class=\" \">    <p>Back in the <strong class=\" \">API.java </strong>file, you will need to workaround both <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/API-1198\" target=\"_blank\">API-1198</a> and <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/API-1196\" target=\"_blank\">API-1196</a>:    </p>\n<ol class=\" \"><li class=\" \">    <p>Replace this code    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">InputStream content = entity.getContent();</code></div>\n<div class=\"line\"><code class=\"plain\">BufferedReader reader = </code><code class=\"keyword\">new</code><code class=\"plain\"> BufferedReader(</code><code class=\"keyword\">new</code><code class=\"plain\"> InputStreamReader(content));</code></div>\n<div class=\"line\"><code class=\"plain\">StringBuilder builder = </code><code class=\"keyword\">new</code><code class=\"plain\"> StringBuilder();</code></div>\n<div class=\"line\"><code class=\"plain\">String line;</code></div>\n<div class=\"line\"><code class=\"keyword\">while</code><code class=\"plain\"> ((line = reader.readLine()) != </code><code class=\"keyword\">null</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">    builder.append(line);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">JSONObject json = </code><code class=\"keyword\">new</code><code class=\"plain\"> JSONObject(builder.toString());</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>With this code    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">JSONObject json = </code><code class=\"keyword\">null</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\">(entity != </code><code class=\"keyword\">null</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">    InputStream content = entity.getContent();</code></div>\n<div class=\"line\"><code class=\"plain\">    BufferedReader reader = </code><code class=\"keyword\">new</code><code class=\"plain\"> BufferedReader(</code><code class=\"keyword\">new</code><code class=\"plain\"> InputStreamReader(content));</code></div>\n<div class=\"line\"><code class=\"plain\">    StringBuilder builder = </code><code class=\"keyword\">new</code><code class=\"plain\"> StringBuilder();</code></div>\n<div class=\"line\"><code class=\"plain\">    String line;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">while</code><code class=\"plain\"> ((line = reader.readLine()) != </code><code class=\"keyword\">null</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        builder.append(line);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\">(builder.length() != </code><code class=\"value\">0</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        json = </code><code class=\"keyword\">new</code><code class=\"plain\"> JSONObject(builder.toString());</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n</li></ol></li><li class=\" \">    <p>If you plan to use the <strong class=\" \">findAll</strong> method from your API Builder SDK, then you will need to open the model class file <strong class=\" \">Testuser.java </strong>(since we generated the API Builder SDK from the default API Builder App), find:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">retVal.setID((Integer) object.get(</code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">));</code></div>\n</div>\n    </div>\n    <p>And replace with:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">retVal.setID(Integer.getInteger((String) object.get(</code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">)));</code></div>\n</div>\n    </div>\n    <p>Note: this is a workaround for <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/API-1197\" target=\"_blank\">API-1197</a>.    </p>\n</li><li class=\" \">    <p>Depending on where you want to use your API Builder SDK in your Android project, you will need to import the API Builder SDK files and setup some API Builder configurations. In this example, we&apos;ll use the <strong class=\" \"> <strong class=\" \">MainActivity.java:<br/></strong></strong>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">package</code><code class=\"plain\"> com.appc.monkeyking;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> android.support.v7.app.AppCompatActivity;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> android.os.Bundle;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// import your Arrow SDK files</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.Callback;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.CallbackWith;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.MonkeySdk;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.Testuser;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\"> MainActivity </code><code class=\"keyword\">extends</code><code class=\"plain\"> AppCompatActivity {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">protected</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> onCreate(Bundle savedInstanceState) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">super</code><code class=\"plain\">.onCreate(savedInstanceState);</code></div>\n<div class=\"line\"><code class=\"plain\">        setContentView(R.layout.activity_main);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// the URL and port to talk to your Arrow App</code></div>\n<div class=\"line\"><code class=\"plain\">        MonkeySdk.setDomain(</code><code class=\"string\">&quot;http://10.0.3.2&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        MonkeySdk.setPort(</code><code class=\"value\">8080</code><code class=\"plain\">);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// the API key for your Arrow app</code></div>\n<div class=\"line\"><code class=\"plain\">        MonkeySdk.setAuthorization(</code><code class=\"string\">&quot;71YFaz201s55+Mmvzh5G62sqo3tUwwbS&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}&#xA0;</code></div>\n</div>\n    </div>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>If you are planning to run your API Builder App locally, then you should <strong class=\" \">setDomain</strong> to the following URLs for the following cases:    </p>\n<ul class=\" \"><li class=\" \">    <p>Running your Android app from the <strong class=\" \">stock emulator</strong>:<strong class=\" \"> <a class=\"external-link external-link\" href=\"http://10.0.2.2/\" target=\"_blank\">http://10.0.2.2</a>  </strong>    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://developer.android.com/tools/devices/emulator.html#emulatornetworking\" target=\"_blank\">http://developer.android.com/tools/devices/emulator.html#emulatornetworking</a> <strong class=\" \"> <br> </br></strong>    </p>\n</li></ul></li><li class=\" \">    <p>Running your Android app from <strong class=\" \"> <strong class=\" \">Genymotion emulator: </strong><a class=\"external-link external-link\" href=\"http://10.0.3.2/\" target=\"_blank\">http://10.0.3.2</a> </strong>    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://stackoverflow.com/questions/18463319/access-host-from-genymotion-emulator\" target=\"_blank\">http://stackoverflow.com/questions/18463319/access-host-from-genymotion-emulator</a>    </p>\n</li></ul></li></ul>    </div>\n    </li><li class=\" \">    <p>Once you have the configuration setup, you can make calls to your API Builder App such as:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">package</code><code class=\"plain\"> com.appc.monkeyking;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> android.support.v7.app.AppCompatActivity;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> android.os.Bundle;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// import your Arrow SDK files</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.Callback;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.CallbackWith;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.MonkeySdk;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.monkeysdk.Testuser;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\"> MainActivity </code><code class=\"keyword\">extends</code><code class=\"plain\"> AppCompatActivity {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">protected</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> onCreate(Bundle savedInstanceState) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">super</code><code class=\"plain\">.onCreate(savedInstanceState);</code></div>\n<div class=\"line\"><code class=\"plain\">        setContentView(R.layout.activity_main);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// the URL and port to talk to your Arrow App</code></div>\n<div class=\"line\"><code class=\"plain\">        MonkeySdk.setDomain(</code><code class=\"string\">&quot;http://10.0.3.2&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        MonkeySdk.setPort(</code><code class=\"value\">8080</code><code class=\"plain\">);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// the API key for your Arrow app</code></div>\n<div class=\"line\"><code class=\"plain\">        MonkeySdk.setAuthorization(</code><code class=\"string\">&quot;71YFaz201s55+Mmvzh5G62sqo3tUwwbS&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tButton createPerson = (Button)findViewById(R.id.testButton);</code></div>\n<div class=\"line\"><code class=\"plain\">        createPerson.setOnClickListener(</code><code class=\"keyword\">new</code><code class=\"plain\"> View.OnClickListener() {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> onClick(View view) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\tJSONObject famousPerson = </code><code class=\"keyword\">null</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t</code><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\tfamousPerson = </code><code class=\"keyword\">new</code><code class=\"plain\"> JSONObject()</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t\t\t.put(</code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;monkey&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t\t\t.put(</code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;king&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t\t\t.put(</code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;monkey@king.com&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t</code><code class=\"keyword\">catch</code><code class=\"plain\">(JSONException e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\te.printStackTrace();</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\tTestuser.create(famousPerson, </code><code class=\"keyword\">new</code><code class=\"plain\"> Callback() {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t</code><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t</code><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> onSuccess(JSONObject body, HttpResponse response) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t\t\tLog.i(</code><code class=\"string\">&quot;monkeyking&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;Monkey King is created.&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t</code><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t</code><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> onError(Exception exception, JSONObject body, HttpResponse response) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t\t\texception.printStackTrace();</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t});</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n</li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46244860\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Guide for API Builder SDK"});