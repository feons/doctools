Ext.data.JsonP['Administration_API_for_the_Developer_Toolbox']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Administration API for the Developer Toolbox</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083153\" class=\"content\">\n                        <h1>Administration API for the Developer Toolbox</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_AdministrationAPIfortheDeveloperToolbox-About\">About</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LURlc2lnbiZCYWNrZ3JvdW5k\">Design &amp; Background</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_AdministrationAPIfortheDeveloperToolbox-Capabilities\">Capabilities</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_AdministrationAPIfortheDeveloperToolbox-Administration\">Administration</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmG5hbWXigJlmaWVsZA\">&#x2018;name&#x2019; field</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmHZlcnNpb27igJlmaWVsZA\">&#x2018;version&#x2019; field</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmGl0ZW1fdHlwZeKAmWZpZWxk\">&#x2018;item_type&#x2019; field</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmGFjdGlvbuKAmWZpZWxk\">&#x2018;action&#x2019; field</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Administration_API_for_the_Developer_Toolbox-section-src-30083153_AdministrationAPIfortheDeveloperToolbox-SupportedApplicationInstallers\">Supported Application Installers</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-About\">\n        <h2 class=\"heading \"><span>About</span></h2>\n    <p>This document provides the Admin API for the developer toolbox usage.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LURlc2lnbiZCYWNrZ3JvdW5k\">\n        <h2 class=\"heading \"><span>Design &amp; Background</span></h2>\n    <p>The Developer Toolbox is designed to interact with the Studio through a controller-action mechanism that uses JSON to pass commands and information.    </p>\n    <p>On the Studio side, the main plugin that takes part in handling remote requests and communicating with the toolbox is the com.aptana.portal.ui. The plugin provides the core implementation for a controller-action-like scheme.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-Capabilities\">\n        <h2 class=\"heading \"><span>Capabilities</span></h2>\n    <p>This is what the Studio side is capable of handling at the moment (this list will grow as we add more capabilities in time):    </p>\n<ol class=\" \"><li class=\" \">    <p>Version check of these items:    </p>\n<ol class=\" \"><li class=\" \">    <p>Plugins    </p>\n</li><li class=\" \">    <p>Ruby (native call)    </p>\n</li><li class=\" \">    <p>Rails (native call)    </p>\n</li><li class=\" \">    <p>SqLite3 (native call)    </p>\n</li><li class=\" \">    <p>Preferences check of version for other applications that were installed through a supported installer (see below).    </p>\n</li></ol></li><li class=\" \">    <p>Installations:    </p>\n<ol class=\" \"><li class=\" \">    <p>Ruby (Windows only)    </p>\n</li><li class=\" \">    <p>XAMPP (Windows only)    </p>\n</li><li class=\" \">    <p>Python (Windows only)    </p>\n</li></ol></li><li class=\" \">    <p>Add to Project:    </p>\n<ol class=\" \"><li class=\" \">    <p>JavaScript libraries    </p>\n</li></ol></li><li class=\" \">    <p>Other Studio interactions    </p>\n<ol class=\" \"><li class=\" \">    <p>Open views    </p>\n</li><li class=\" \">    <p>List the latest opened files    </p>\n</li><li class=\" \">    <p>Open files    </p>\n</li></ol></li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-Administration\">\n        <h2 class=\"heading \"><span>Administration</span></h2>\n    <p>The admin of the toolbox database controls what will be displayed and available for installation.    </p>\n    <p>The toolbox get the information from the &#x2018;items&#x2019; table. This table contains multiple columns and a lot of information. However, this document will describe  only the columns that are critical for the Toolbox-Studio interactions.    </p>\n    <p>This list contains the columns we will be dealing with:    </p>\n<ul class=\" \"><li class=\" \">    <p>name - The item&#x2019;s name    </p>\n</li><li class=\" \">    <p>version - The version we are looking for, or installing.    </p>\n</li><li class=\" \">    <p>item_type - The general type definition of an item. Can be &#x2018;Plugin&#x2019;, &#x2018;Application&#x2019;, &#x2018;Template&#x2019;, &#x2018;Ruble&#x2019; and &#x2018;Gem&#x2019; (for now, only the first two are in use). More about the item_type below.    </p>\n</li><li class=\" \">    <p>action- Holds the JSON command that will be inspected and partially transferred to the Studio side.    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmG5hbWXigJlmaWVsZA\">\n        <h3 class=\"heading \"><span>&#x2018;name&#x2019; field</span></h3>\n    <p>    <span id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-name\"><a class=\"confluence-anchor-link\" name=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-name\"/></span>\nAs hinted by its name... this field will be displayed in the Toolbox as the item&#x2019;s name.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmHZlcnNpb27igJlmaWVsZA\">\n        <h3 class=\"heading \"><span>&#x2018;version&#x2019; field</span></h3>\n    <p>    <span id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-version\"><a class=\"confluence-anchor-link\" name=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-version\"/></span>\nThe version field is used when the toolbox tries to determine what item version is installed. For example, a Plugin item will be displayed as &#x2018;Installed&#x2019; if the Studio reports a matching plugin version for it. It will be displayed as &#x2018;Update&#x2019; if the Studio reports a lower version exists.    </p>\n    <p>This field should be given in a form of x.y.z pattern, and should include numbers only.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmGl0ZW1fdHlwZeKAmWZpZWxk\">\n        <h3 class=\"heading \"><span>&#x2018;item_type&#x2019; field</span></h3>\n    <p>    <span id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-item_type\"><a class=\"confluence-anchor-link\" name=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-item_type\"/></span>\nThis field defines the internal type of the item. Note that this type can be different that what is specified in the &#x2018;category_list&#x2019; field, which defines the UI arrangement of the items in the toolbox.    </p>\n    <p>The field must hold one of the supported integer types:    </p>\n<ul class=\" \"><li class=\" \">    <p>1 : Plugin    </p>\n</li><li class=\" \">    <p>2 : Application    </p>\n</li><li class=\" \">    <p>3 : Template    </p>\n</li><li class=\" \">    <p>4 : Ruble    </p>\n</li><li class=\" \">    <p>5 : Gem    </p>\n</li></ul>    <p>Note that for the moment, only the first two (plugins (1) and applications (2)) are actually being handled by the Javascript part of the toolbox. The rest are there for future use, and are defined in the item.rb model of the toolbox rails-application.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083153_safe-id-QWRtaW5pc3RyYXRpb25BUElmb3J0aGVEZXZlbG9wZXJUb29sYm94LeKAmGFjdGlvbuKAmWZpZWxk\">\n        <h3 class=\"heading \"><span>&#x2018;action&#x2019; field</span></h3>\n    <p>    <span id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-action\"><a class=\"confluence-anchor-link\" name=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-action\"/></span>\nThe action field is the most important, and complex, part of the Toolbox-Studio interaction. It holds a JSON instructions that specify how to download and install the item.    </p>\n    <p>Here is the structure outline of the JSON command, followed by an example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;command&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;&lt;command_name&gt;&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;&lt;windows | linux | macosx | all&gt;&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;action&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;&lt;action&gt;&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;attributes&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;&lt;key&gt;&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;&lt;value&gt;&quot;</code><code class=\"plain\"> ... },</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: &lt;array of strings or a single string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p><i class=\" \"><u class=\" \">Example:</u></i>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;command&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;ruby&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;windows&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;action&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;install&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;attributes&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;install_dir&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;C:\\/Ruby&quot;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"string\">&quot;http://rubyforge.org/frs/download.php/71492/rubyinstaller-1.8.7-p299.exe&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"string\">&quot;http://rubyforge.org/frs/download.php/66888/devkit-3.4.5r3-20091110.7z&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            ]</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;all&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;action&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;open&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;http://www.ruby-lang.org/en/downloads/&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>In the given example, we call for the &#x2018;ruby&#x2019; command. The toolbox JavaScript framework looks at the &#x2018;item_type&#x2019; value and decides how to proceed and which controller to call.    </p>\n    <p>The &#x2018;os&#x2019; attribute defines that for Windows, the action &#x2018;install&#x2019; should be invoked. For any other OS, the action &#x2018;open&#x2019; is called. The &#x2018;all&#x2019; is actually the default operation that will be called if a specific OS match was not found.    </p>\n    <p>For the &#x2018;Windows&#x2019; OS, the install action is requested and the toolbox will dispatch the &#x2018;install&#x2019; on the &#x2018;portal.ruby.installer&#x2019; Studio controller, and will pass it the attributes map and the URLs that will be used to download the content.    </p>\n    <p>For any other, non-Windows, OS, the action &#x2018;open&#x2019; will be called to open an internal browser with the given URL string that was defined for the &#x2018;urls&#x2019; key.    </p>\n    <p>Note that some <strong class=\" \">installers</strong>, such as Ruby, require a specific order of URLs. The Studio-side installation expects a specific order, and will execute the download and install in that order. The specific instructions for any supported installer will be described at the end of this document.    </p>\n    <p>Here are a couple of more examples that will install a plugin and a JavaScript library:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;command&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;plugins&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;all&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;attributes&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"string\">&quot;feature_id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;com.aptana.php.feature&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"string\">&quot;plugin_id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;com.aptana.editor.php&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"string\">&quot;plugin_version&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;3.0.0&quot;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;action&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;install&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;http://download.aptana.com/studio3/plugin/install&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>---------------------------------------------------------------------------------------    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;command&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;js_library&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;all&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;attributes&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\"> : </code><code class=\"string\">&quot;prototype 1.6.1&quot;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;action&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;install&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;http://prototypejs.org/assets/2009/8/31/prototype.js&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>Pay attention that installing a Plug-in or a JavaScript library is more generic then installing a specific application. The command for installing a Plug-in is always &#x2018;plugins&#x2019;, and the command for installing a JS library is always &#x2018;js_library&#x2019;.    </p>\n    <p>The application installers are more complex, so they require a specific support for each app we want to provide our users. See the &quot;<strong class=\" \"><i class=\" \">Supported Application Installers</i></strong>&quot; section below.    </p>\n    <p>The &#x2018;<strong class=\" \"><i class=\" \">attributes</i></strong>&#x2019; JSON value contains extra information that is used by the different types of installers. Here is a table of attributes that are expected to be given for each installer type:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Command    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Attributes    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>plugins    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>feature_id<br>plugin_id<br>plugin_version    </br></br></p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>js_library    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>name    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ruby    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>install_dir [optional]    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>xampp    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>install_dir [optional]    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>python    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>install_dir [optional]    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083153_AdministrationAPIfortheDeveloperToolbox-SupportedApplicationInstallers\">\n        <h2 class=\"heading \"><span>Supported Application Installers</span></h2>\n    <p>The specific supported applications, as mentioned above, are:    </p>\n<ul class=\" \"><li class=\" \">    <p>Ruby - Through the &#x2018;ruby&#x2019; command (see the example)    </p>\n</li><li class=\" \">    <p>XAMPP - Through the &#x2018;xampp&#x2019; command.    </p>\n</li><li class=\" \">    <p>Python - Through the &#x2018;python&#x2019; command.    </p>\n</li></ul>    <p>Each of these applications has its own installer support that runs the native installer with its expected attributes.    </p>\n    <p>Each of the application is downloaded from the web, and then, the downloaded content is handled by executing the native installer process and/or unzipping it.    </p>\n    <p>Special requirements:    </p>\n<ol class=\" \"><li class=\" \">    <p>Ruby - The installer require two URLs in the JSON &#x2018;urls&#x2019; array, in that order. The first URL should be pointed to the Windows &#x2018;RubyInstaller&#x2019;. The second URL should be pointed to the &#x2018;DevKit&#x2019; zip file. The RubyInstaller will be executed in a native way, while the DevKit will be later extracted into the installed directory and some modifications will be made to its configuration files.    </p>\n</li><li class=\" \">    <p>XAMPP - The installer expects a single URL for the native XAMPP installer.    </p>\n</li><li class=\" \">    <p>Python - The installer expects a single URL for the native Python installer.    </p>\n</li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083153\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Administration API for the Developer Toolbox"});