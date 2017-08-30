Ext.data.JsonP['iOS_3D_Touch']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>iOS 3D Touch</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-46008174\" class=\"content\">\n                        <h1>iOS 3D Touch</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-QuickActions\">Quick Actions</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-AddStaticShortcuts\">Add Static Shortcuts</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-AddDynamicShortcuts\">Add Dynamic Shortcuts</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-RespondtoQuickActions\">Respond to Quick Actions</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-PeekandPop\">Peek and Pop</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-Example\">Example</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/iOS_3D_Touch-section-src-46008174_iOS3DTouch-FurtherReading\">Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-46008174_iOS3DTouch-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Starting with Release 5.1.0, the Titanium SDK supports the <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/3DTouch.html#//apple_ref/doc/uid/TP40006556-CH71-SW1\" target=\"_blank\">Peek and Pop, and Quick Action features</a> of 3D touch, which provides additional functionality and responsiveness for iOS users.  Both features require a 3D Touch enabled device running iOS 9 or later. Note that you can only test 3D touch features on device.    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Peek and Pop</strong> provides a way for the user to quickly preview item content in the application by pressing on it, then optionally switching to the peeked item.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Quick Action</strong> provides application shortcuts when the user presses the application icon on the Home Screen. The shortcuts allow the user to quickly perform an action with your application without navigating through the application.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <div class=\"title\">3D Touch != Force Touch</div>\n            <p>Apple also has a feature called Force Touch for the Apple Watch, MacBook and Magic Trackpad, which should not be confused with 3D touch.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-46008174_iOS3DTouch-QuickActions\">\n        <h2 class=\"heading \"><span>Quick Actions</span></h2>\n    <p>Press firmly on the app icon in the Home screen to reveal the Quick Actions (or Application Shortcuts).  Quick actions can either be static (always present) or dynamic (generated by the application).    </p>\n    <p>To use quick actions, first create static or dynamic actions, then listen for the <tt class=\" \">shortcutitemclick</tt> event to determine when the user taps a quick action.    </p>\n    <p><a class=\"external-link external-link\" href=\"https://github.com/appcelerator-developer-relations/appc-sample-3dtouch/blob/master/docs/shortcuts.png\" target=\"_blank\">     <img src=\"images/github.com/appcelerator-developer-relations/appc-sample-3dtouch/raw/master/docs/shortcuts.png\" alt=\"images/github.com/appcelerator-developer-relations/appc-sample-3dtouch/raw/master/docs/shortcuts.png\" class=\"confluence-embedded-image confluence-external-resource\">\n </img></a>    </p>\n    <div class=\"section section-3 \" id=\"src-46008174_iOS3DTouch-AddStaticShortcuts\">\n        <h3 class=\"heading \"><span>Add Static Shortcuts</span></h3>\n    <p>To define static shortcuts, add the <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW36\" target=\"_blank\"> <tt class=\" \">UIApplicationShortcutItems</tt> </a>key to the <tt class=\" \">ios/plist/dict</tt> element in the <tt class=\" \">tiapp.xml</tt> file.  Set the <tt class=\" \">UIApplicationShortcutItems</tt> key to an array of dict items containing  additional keys that define the shortcut.  You must specify the  <tt class=\" \">UIApplicationShortcutItemType</tt> and  <tt class=\" \">UIApplicationShortcutItemTitle</tt> keys :    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">UIApplicationShortcutItemTitle </tt> (required): title of the quick action. May be assigned an <tt class=\" \">i18n</tt> localized string in the <tt class=\" \">app.xml</tt> file.    </p>\n</li><li class=\" \">    <p><tt class=\" \">UIApplicationShortcutItemType</tt> (required): unique identifier of the quick action passed to the event. Use a reverse domain notation, for example, <tt class=\" \">com.foocompany.fooapp.fooshortcut</tt>.    </p>\n</li><li class=\" \">    <p><tt class=\" \">UIApplicationShortcutItemSubtitle</tt>: string to display underneath the title in the quick action. May be assigned an <tt class=\" \">i18n</tt> localized string in the <tt class=\" \">app.xml</tt> file.    </p>\n</li><li class=\" \">    <p> <tt class=\" \">UIApplicationShortcutItemIconType</tt>: Set to a <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/index.html#//apple_ref/c/tdef/UIApplicationShortcutIconType\" target=\"_blank\">UIApplicationShortcutIcon enum</a> to display an icon with the quick action.    </p>\n</li><li class=\" \">    <p><tt class=\" \">UIApplicationShortcutItemIconFile</tt>: Hash of a 35 x 35 dp icon to display with the quick action. To retrieve the hash of the icon, build the project once and retrieve the hash of the corresponding image from<tt class=\" \"> build/iphone/Assets.xcassets.</tt>    </p>\n</li><li class=\" \">    <p>   <tt class=\" \">UIApplicationShortcutItemUserInfo</tt>: custom dictionary that is passed to the event.      </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <div class=\"title\">Localization</div>\n            <p>Place localized strings for the title and subtitle of the quick actions in the <tt class=\" \">app.xml</tt> file as opposed to the <tt class=\" \">strings.xml</tt> file.    </p>\n    </div>\n        <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <div class=\"title\">Custom Quick Action Icons</div>\n            <p>If you specify a custom quick action icon using the <tt class=\" \">UIApplicationShortcutItemIconFile</tt>, you need to enable slicing, that is, adding images to the asset catalog. To enable slicing, add the <tt class=\" \">use-app-thinning</tt> element to the <tt class=\" \">ios</tt> element in the <tt class=\" \">tiapp.xml</tt> file and set the value to <tt class=\" \">true</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">tiapp.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"tiapp.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;ti:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;use-app-thinning&gt;</code><code class=\"keyword\">true</code><code class=\"plain\">&lt;/use-app-thinning&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n    </div>\n    </div>\n        <p>   <strong class=\" \">Example:</strong>       </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">tiapp.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"tiapp.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;ti:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- Define </code><code class=\"keyword\">static</code><code class=\"plain\"> shortcuts here --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;key&gt;UIApplicationShortcutItems&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- First item uses hard-coded values and a </code><code class=\"keyword\">default</code><code class=\"plain\"> icon --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemIconType&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;UIApplicationShortcutIconTypeAdd&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemTitle&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;Add an Image&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemSubtitle&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;JPEG, PNG or GIF&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemType&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;com.appcelerator.example.addimage&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- Second item uses localized strings and a custom icon --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;!-- Find the corresponding hash in build/iphone/Assets.xcassets --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemIconFile&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;6ce9fb071294c440a20ff73b7c09fef2082c2206&lt;/string&gt;                  </code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;!-- Title and subtitle in an i18n/&lt;lang&gt;/app.xml file --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemTitle&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;add_photo_title&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemSubtitle&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;add_photo_subtitle&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemType&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;com.appcelerator.example.addphoto&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;!-- Custom dictionary (object) to receive in the event --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;UIApplicationShortcutItemUserInfo&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                            &lt;key&gt;myCustomKey&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                            &lt;string&gt;myCustomValue&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-46008174_iOS3DTouch-AddDynamicShortcuts\">\n        <h3 class=\"heading \"><span>Add Dynamic Shortcuts</span></h3>\n    <p>To create or remove dynamic shortcuts, use the <a class=\"external-link external-link\" href=\"https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.ApplicationShortcuts\" target=\"_blank\"> <tt class=\" \">Ti.UI.iOS.ApplicationShortcuts</tt> API</a>.    </p>\n    <p>To create a dynamic shortcut:    </p>\n<ol class=\" \"><li class=\" \">    <p>Use the <tt class=\" \">Ti.UI.iOS.forceTouchSupported</tt> to test if the device supports 3D touch.    </p>\n</li><li class=\" \">    <p>Create an instance of an ApplicationShortcut using the <tt class=\" \">Ti.UI.iOS.createApplicationShortcuts()</tt> method.    </p>\n</li><li class=\" \">    <p>Invoke the <tt class=\" \">addDynamicShortcut()</tt> method on the ApplicationShortcut instance and pass method a dictionary with the following parameters:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">itemtype</tt> (required): unique identifier of the quick action passed to the event. Use a reverse domain notation, for example, <tt class=\" \">com.foocompany.fooapp.fooshortcut</tt>.    </p>\n</li><li class=\" \">    <p><tt class=\" \">title</tt> (required): title of the quick action.    </p>\n</li><li class=\" \">    <p><tt class=\" \">subtitle</tt>: subtitle of the quick action displayed beneath the title.    </p>\n</li><li class=\" \">    <p><tt class=\" \">icon</tt>: icon to display with the quick action.  May be assigned a <tt class=\" \">Titanium.UI.iOS.SHORTCUT_ICON_TYPE_*</tt> constant, an image URL or a <tt class=\" \">Titanium.Contacts.Person</tt>.  If you use an image file, you need to enable slicing.  See the note in the previous section for instructions.    </p>\n</li></ul></li></ol>    <p>To remove a dynamic shortcut, invoke the ApplicationShortcut instance&apos;s <tt class=\" \">removeDynamicShortcut()</tt> method and pass it the <tt class=\" \">itemtype</tt> identifier of the dynamic shortcut to remove or invoke the <tt class=\" \">removeAllDynamicShortcuts()</tt> method to remove all dynamic shortcuts.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app.js\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (Ti.UI.iOS.forceTouchSupported) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Create an applicationShortcuts instance</code></div>\n<div class=\"line\"><code class=\"plain\">    appShortcuts = Ti.UI.iOS.createApplicationShortcuts();</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Add a dynamic shortcut</code></div>\n<div class=\"line\"><code class=\"plain\">    appShortcuts.addDynamicShortcut({</code></div>\n<div class=\"line\"><code class=\"plain\">        itemtype: </code><code class=\"string\">&apos;com.appcelerator.example.details&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        title: </code><code class=\"string\">&apos;Open the last picture&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        icon: Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOVE,</code></div>\n<div class=\"line\"><code class=\"plain\">        userInfo: {</code></div>\n<div class=\"line\"><code class=\"plain\">            filename: </code><code class=\"string\">&apos;foo.png&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-46008174_iOS3DTouch-RespondtoQuickActions\">\n        <h3 class=\"heading \"><span>Respond to Quick Actions</span></h3>\n    <p>When the user taps a Quick Action, the <tt class=\" \">shortcutitemclick</tt> event is fired for the <tt class=\" \">Ti.App.iOS</tt> static class. The payload includes all properties set for the static or dynamic shortcut except the icon. Simply use the <tt class=\" \">itemtype</tt> to identify the shortcut and act accordingly.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">function respondToShortcut(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">switch</code><code class=\"plain\">(e.itemtype) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"string\">&apos;com.appcelerator.example.addphoto&apos;</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">            addPhoto();</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"string\">&apos;com.appcelerator.example.details&apos;</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">            openImage(e.userInfo.filename);</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.App.iOS.addEventListener(</code><code class=\"string\">&apos;shortcutitemclick&apos;</code><code class=\"plain\">, respondToShortcut);</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46008174_iOS3DTouch-PeekandPop\">\n        <h2 class=\"heading \"><span>Peek and Pop</span></h2>\n    <p>To use Peek and Pop, press firmly on a peek-supported view. As you start applying more force, the rest of the screen will blur and reveal the preview.  Maintaining the press will eventually open (pop) the detailed window. Swipe up while you peek to reveal any available quick actions.    </p>\n    <p><a class=\"external-link external-link\" href=\"https://github.com/appcelerator-developer-relations/appc-sample-3dtouch/blob/master/docs/preview.png\" target=\"_blank\">     <img src=\"images/github.com/appcelerator-developer-relations/appc-sample-3dtouch/raw/master/docs/preview.png\" alt=\"images/github.com/appcelerator-developer-relations/appc-sample-3dtouch/raw/master/docs/preview.png\" class=\"confluence-embedded-image confluence-external-resource\">\n </img></a>    </p>\n    <p>To enable Peek and Pop:    </p>\n<ol class=\" \"><li class=\" \">    <p>Use the <tt class=\" \">Ti.UI.iOS.forceTouchSupported</tt> to test if the device supports 3D touch.    </p>\n</li><li class=\" \">    <p>Create a PreviewContext object using the <tt class=\" \">Titanium.UI.iOS.createPreviewContext()</tt> method. Pass the method a dictionary with the following properties:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">preview</tt>: view object to use as the peeked view.    </p>\n</li><li class=\" \">    <p><tt class=\" \">actions</tt>: array of <a class=\"external-link external-link\" href=\"https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.PreviewAction\" target=\"_blank\">PreviewActions</a> or <a class=\"external-link external-link\" href=\"https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.PreviewActionGroup\" target=\"_blank\">PreviewActionGroup</a> objects to use as the quick actions.    </p>\n</li><li class=\" \">    <p><tt class=\" \">contentHeight</tt>: height of the preview window. Defaults to fill most of the screen.    </p>\n</li></ul></li><li class=\" \">    <p>Add the <tt class=\" \">peek</tt> and <tt class=\" \">pop</tt> events to the created preview context to receive updates about the current preview state.    </p>\n</li><li class=\" \">    <p>Attach the PreviewContext object to a view. Set the view&apos;s <tt class=\" \">previewContext</tt> property to the PreviewContext object.    </p>\n</li></ol>    <p><strong class=\" \">Example:</strong>    </p>\n    <p>The following example shows how to attach a PreviewContext to an ImageView in an Alloy view.  Note that the example omits the preview and pop views referenced in the controller code.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ImageView id=</code><code class=\"string\">&quot;peekView&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers.index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers.index.js\">\n<div class=\"line\"><code class=\"plain\">function popView() {</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.createController(</code><code class=\"string\">&apos;pop&apos;</code><code class=\"plain\">).getView().open();</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (Ti.UI.iOS.forceTouchSupported) {</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    var share = Ti.UI.iOS.createPreviewAction({</code></div>\n<div class=\"line\"><code class=\"plain\">        title: </code><code class=\"string\">&quot;Share&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    share.addEventListener(</code><code class=\"string\">&quot;click&quot;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// Implement share logic here</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    $.peekView.previewContext = Ti.UI.iOS.createPreviewContext({</code></div>\n<div class=\"line\"><code class=\"plain\">        preview: Alloy.createController(</code><code class=\"string\">&apos;preview&apos;</code><code class=\"plain\">).getView(),</code></div>\n<div class=\"line\"><code class=\"plain\">        pop: popView(),</code></div>\n<div class=\"line\"><code class=\"plain\">        actions: [share]</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.peekView.previewContext.addEventListener(</code><code class=\"string\">&quot;peek&quot;</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.warn(</code><code class=\"string\">&quot;The view was peeked - Update the preview here if you want to&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.peekView.previewContext.addEventListener(</code><code class=\"string\">&quot;pop&quot;</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.warn(</code><code class=\"string\">&quot;The view was popped - Open the full context here&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        popView();</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46008174_iOS3DTouch-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n    <p>For a full example, see <a class=\"external-link external-link\" href=\"https://github.com/appcelerator-developer-relations/appc-sample-3dtouch\" target=\"_blank\">https://github.com/appcelerator-developer-relations/appc-sample-3dtouch</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46008174_iOS3DTouch-FurtherReading\">\n        <h2 class=\"heading \"><span>Further Reading</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.ApplicationShortcuts\">Ti.UI.iOS.ApplicationShortcuts</a> API reference    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.PreviewContext\">Ti.UI.iOS.PreviewContext</a> API reference    </p>\n</li><li class=\" \">    <p>Apple Human Interface Guidelines: <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/3DTouch.html\" target=\"_blank\">3D Touch</a>    </p>\n</li><li class=\" \">    <p>Appel Documentation: <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/index.html\" target=\"_blank\">Getting Started with 3D Touch</a>    </p>\n</li></ul>    <p>    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46008174\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"iOS 3D Touch"});