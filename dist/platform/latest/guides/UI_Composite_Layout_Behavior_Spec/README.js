Ext.data.JsonP['UI_Composite_Layout_Behavior_Spec']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>UI Composite Layout Behavior Spec</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-4196675\" class=\"content\">\n                        <h1>UI Composite Layout Behavior Spec</h1>\n    <div class=\"section section-2 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-BackwardsCompatibilityandDeprecation\">Backwards Compatibility and Deprecation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Definitions\">Definitions</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Layoutparameters\">Layout parameters</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Availableunits\">Available units</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-tiapp.xmlproperties\">tiapp.xml properties</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-PrecedenceoflayoutParams\">Precedence of layoutParams</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Autosizebehaviors\">Auto size behaviors</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-ScrollViewcontentsize\">ScrollView content size</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-SIZEbehavior\">SIZE behavior</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-ScrollViewSIZE\">ScrollView SIZE</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-FILLbehavior\">FILL behavior</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-ScrollViewFILL\">ScrollView FILL</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Viewautosizeclassification\">View auto size classification</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-UNDEFINEDbehavior\">UNDEFINED behavior</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-UNDEFINEDandscrollviewcontents\">UNDEFINED and scrollview contents</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-CodeExamples\">Code Examples</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-ProposedAPI\">Proposed API</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_safe-id-VUlDb21wb3NpdGVMYXlvdXRCZWhhdmlvclNwZWMtRGltZW5zaW9uKGR1Y2t0eXBlKQ\">Dimension (duck type)</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Ti.UI.View\">Ti.UI.View</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Ti.UI\">Ti.UI</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Events\">Events</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>Titanium&apos;s UI behavior has remained unspecified and fragmented across platforms, which makes cross-platform development difficult for users and designing tests to evaluate UI impractical. With proposed changes to the layout system, and more advanced testing frameworks, it has become necessary to explicitly define UI behavior in as many situations as possible.    </p>\n    <p>This document is a codification of UI behavior (the &quot;Composite&quot; layout) for both Android and iOS platforms, including explicit specifications for unit types, order in which layout properties are valuated, &quot;auto&quot; behavior, and dealing with unset values.    </p>\n    <p>The behavior for &quot;Horizontal&quot; and &quot;Vertical&quot; layouts will be specified in another document.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-BackwardsCompatibilityandDeprecation\">\n        <h2 class=\"heading \"><span>Backwards Compatibility and Deprecation</span></h2>\n    <p>In Titanium Mobile 2.0, the value of any layout parameter on a View will always maintain that value, making it &quot;static&quot;. The properties <tt class=\" \">size</tt>, and <tt class=\" \">rect</tt>, will now serve as the &quot;dynamic&quot; APIs that provide position and size. We will also maintain backwards compatibility with the current &quot;immediate mode&quot; layout scheme, but this behavior will be marked as <strong class=\" \">DEPRECATED</strong>. Moving forward, we will drop support for this method in favor of the the <tt class=\" \">startLayout</tt> / <tt class=\" \">finishLayout</tt>, and <tt class=\" \">updateLayout</tt> semantics.    </p>\n    <p>    <span id=\"src-4196675_UICompositeLayoutBehaviorSpec-definitions\"><a class=\"confluence-anchor-link\" name=\"src-4196675_UICompositeLayoutBehaviorSpec-definitions\"/></span>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Definitions\">\n        <h2 class=\"heading \"><span>Definitions</span></h2>\n<ul class=\" \"><li class=\" \">    <p>dip : Density-independent pixels. A measurement which is translated natively to a corresponding pixel measure using a scale factor based on a platform-specific &quot;default&quot; density, and the device&apos;s physical density.    </p>\n</li><li class=\" \">    <p>System unit : A platform-dependent unit which is the default for how the system presents its view information to the native layout system. On Android this is pixels; on iOS it is dip.    </p>\n</li></ul>    <p>    <span id=\"src-4196675_UICompositeLayoutBehaviorSpec-layout_parameters\"><a class=\"confluence-anchor-link\" name=\"src-4196675_UICompositeLayoutBehaviorSpec-layout_parameters\"/></span>\n    </p>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Layoutparameters\">\n        <h3 class=\"heading \"><span>Layout parameters</span></h3>\n    <p>This is the list of Layout Parameters used by &quot;Composite&quot;, &quot;Horizontal&quot;, and &quot;Vertical&quot; layouts. Layout Parameters are discussed in more detail in the Layout specification, but these all correspond to existing layout settings.    </p>\n<ul class=\" \"><li class=\" \">    <p>width : The width of the view    </p>\n</li><li class=\" \">    <p>left : Pins left side of the view to this x position in the parent, measured from the parent&apos;s left bound.    </p>\n</li><li class=\" \">    <p>right : Pins right side of the view to this x position in the parent, measured from the parent&apos;s right bound.    </p>\n</li><li class=\" \">    <p>height : The height of the view    </p>\n</li><li class=\" \">    <p>top : Pins top side of the view to this y position in the parent, measured from the parent&apos;s top bound.    </p>\n</li><li class=\" \">    <p>bottom : Pins bottom side of the view to this y position in the parent, measured from the parent&apos;s bottom bound.    </p>\n</li><li class=\" \">    <p>center : (x, y) : Pins the view&apos;s center to the specified point:    </p>\n<ul class=\" \"><li class=\" \">    <p>center.x : The x-coordinate, measured from the parent&apos;s left bound    </p>\n</li><li class=\" \">    <p>center.y : The y-coordinate, measured from the parent&apos;s top bound    </p>\n</li></ul></li><li class=\" \">    <p>layout : The layout type to use. The default value is for the &quot;Composite&quot; layout. Other valid values are &quot;vertical&quot; and &quot;horizontal&quot;. This property is intended to be replaced by the new UI Layout API Spec    </p>\n<ul class=\" \"><li class=\" \">    <p>&apos;vertical&apos; : Pinning happens vertically relative to other views inside the parent, using remaining space    </p>\n</li><li class=\" \">    <p>&apos;horizontal&apos; : Pinning happens horizontally relative to other views inside the parent, using remaining space    </p>\n</li></ul></li><li class=\" \">    <p>zIndex : The stack order of the view inside its parent. Higher values are rendered towards the top.    </p>\n</li></ul>    <p>When a child view&apos;s boundary exceeds that of the parent view, it should be clipped to the size of the parent view.<br>    <span id=\"src-4196675_UICompositeLayoutBehaviorSpec-available_units\"><a class=\"confluence-anchor-link\" name=\"src-4196675_UICompositeLayoutBehaviorSpec-available_units\"/></span>\n    </br></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Availableunits\">\n        <h3 class=\"heading \"><span>Available units</span></h3>\n    <p>A unit is a unit of measurement on the device screen or, for some types, a measurement relative to information from the parent view.    </p>\n<ul class=\" \"><li class=\" \">    <p>Absolute measurements    </p>\n<ul class=\" \"><li class=\" \">    <p>px : pixels    </p>\n</li><li class=\" \">    <p>mm : millimeters    </p>\n</li><li class=\" \">    <p>cm : centimeters    </p>\n</li><li class=\" \">    <p>in : inches    </p>\n</li><li class=\" \">    <p>dp/dip : Density-independent pixels    </p>\n<ul class=\" \"><li class=\" \">    <p>Android : px = dip * (screen density) / 160    </p>\n</li><li class=\" \">    <p>iOS : px = dip * (screen density) / 163 (effectively; 1dip=1px on standard, 1dip=2px on retina)    </p>\n</li><li class=\" \">    <p>Mobile Web: px = dip * (screen density) / 96 (effectively; 1dip=1px most browsers scale pages to 96dpi to make them consistent with desktops).    </p>\n</li></ul></li></ul></li><li class=\" \">    <p>Relative measurements    </p>\n<ul class=\" \"><li class=\" \">    <p>% : Percentage of the size of the parent.    </p>\n<ul class=\" \"><li class=\" \">    <p>For x-axis values (width, left, right, center.x) this is relative to the parent&apos;s width    </p>\n</li><li class=\" \">    <p>For y-axis values (height, top, bottom, center.y) this is relative to the parent&apos;s height.    </p>\n</li></ul></li></ul></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-tiapp.xmlproperties\">\n        <h3 class=\"heading \"><span>tiapp.xml properties</span></h3>\n    <p>We allow users to specify a default unit type to interpret untyped values. By default, this value is a special unit type only available to this property, &apos;system&apos; (see <a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-definitions\">Definitions</a>, above).    </p>\n<ul class=\" \"><li class=\" \">    <p>ti.ui.defaultunit : String, the default unit to interpret values without a unit as.    </p>\n<ul class=\" \"><li class=\" \">    <p>Generated in default tiapp.xml template (users can explicitly see default value)    </p>\n</li><li class=\" \">    <p>Valid values: px, mm, cm, in, dp, dip, system    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-PrecedenceoflayoutParams\">\n        <h3 class=\"heading \"><span>Precedence of layoutParams</span></h3>\n    <p>Certain parameters influence the calculation of others when they are unset (see <a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-undefined_behavior\">UNDEFINED behavior</a> ). The purpose of establishing an order of precedence is only to determine when certain settings override others when there is an obvious conflict, or determine which properties are used for computing implicit values.    </p>\n    <p>In order of precedence, from &apos;evaluated first&apos; to &apos;evaluated last&apos;:    </p>\n<ol class=\" \"><li class=\" \">    <p>width : overrides implicit width calculations    </p>\n</li><li class=\" \">    <p>left : overrides horizontal positioning determined by center.x, right    </p>\n</li><li class=\" \">    <p>center.x : overrides horizontal positioning determined by other pins    </p>\n</li><li class=\" \">    <p>right    </p>\n</li><li class=\" \">    <p>height : overrides implicit height calculations    </p>\n</li><li class=\" \">    <p>top : overrides vertical positioning determined by other pins    </p>\n</li><li class=\" \">    <p>center.y : overrides vertical positioning determined by other pins    </p>\n</li><li class=\" \">    <p>bottom    </p>\n</li></ol>    <p>When a conflict occurs between the different layout params, the order of precedence will determine which params will be ignored.  If a view has a width of 200, a left value of 100, and a right value of 10, then the view would be 200 wide, and 100 from the left of its parent view.  The right value is ignored since it conflicts the width and left values, and has lower precedence.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Autosizebehaviors\">\n        <h3 class=\"heading \"><span>Auto size behaviors</span></h3>\n    <p>&quot;auto&quot; (sometimes refered to as &quot;psychic&quot;) is a measurement specification for width/height which &quot;sizes the view appropriately given the type of view and its contents.&quot; This is a vague descriptor, and has been broken up into two general specified behaviors: SIZE and FILL.    </p>\n    <p>&quot;auto&quot; will be deprecated in 2.0.0, to be replaced with Ti.UI.SIZE and Ti.UI.FILL constants which represent explicit &quot;auto&quot; behavior. As a result, this section codifies existing &quot;auto&quot; behavior into these two subtypes, and declares which views use which type when their width or height is set to &quot;auto&quot; under the present system.    </p>\n    <div class=\"section section-4 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-ScrollViewcontentsize\">\n        <h4 class=\"heading \"><span>ScrollView content size</span></h4>\n    <p>In the case of ScrollView, contentWidth and contentHeight may also be set to &quot;auto&quot;, and in those cases, this is the expected behavior:    </p>\n<ul class=\" \"><li class=\" \">    <p>When <strong class=\" \"><i class=\" \">all</i></strong> children views have FILL behavior, the content area of the scroll view will be clipped to the physical size of the scroll view    </p>\n</li><li class=\" \">    <p>Otherwise, the content area will grow according to the bottom offset of the bottom-most View and the right offset of right-most View. In some cases the bottom-most and right-most View may be the same View.    </p>\n</li></ul>    <p>    <span id=\"src-4196675_UICompositeLayoutBehaviorSpec-SIZE\"><a class=\"confluence-anchor-link\" name=\"src-4196675_UICompositeLayoutBehaviorSpec-SIZE\"/></span>\n    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-SIZEbehavior\">\n        <h3 class=\"heading \"><span>SIZE behavior</span></h3>\n    <p>This behavior represents constraining a view size to fit its contents.    </p>\n<ul class=\" \"><li class=\" \">    <p>height only : Constrained by view&apos;s width, or if width is incalcuable (&lt;2 horizontal pinning properties) and unset, then constrained by parent&apos;s width.    </p>\n</li><li class=\" \">    <p>width only : Constrained by view&apos;s height, or if height is incalculable (&lt;2 vertical pinning properties) and unset, then constrained by parent&apos;s height.    </p>\n</li><li class=\" \">    <p>height + width : width constrained by parent width, height constraint by content height, i.e. grows to fill width first, and then sizes height to display content.    </p>\n</li></ul>    <div class=\"section section-4 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-ScrollViewSIZE\">\n        <h4 class=\"heading \"><span>ScrollView SIZE</span></h4>\n    <p>Scrollview <tt class=\" \">contentWidth</tt> or <tt class=\" \">contentHeight</tt> can be set to <tt class=\" \">Ti.UI.SIZE</tt>. This value behaves as <tt class=\" \">SIZE</tt> is described above, where the scrollview itself first sizes to contents, and then if those contents extend beyond the bounds of the scrollview, the content view sizes to fit the contents appropriately.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-FILLbehavior\">\n        <h3 class=\"heading \"><span>FILL behavior</span></h3>\n    <p>This behavior represents growing a view size to fill its parent.    </p>\n<ul class=\" \"><li class=\" \">    <p>height only : Fills all available vertical space inside the parent    </p>\n</li><li class=\" \">    <p>width only : Fills all available horizontal space inside the parent    </p>\n</li><li class=\" \">    <p>height + width : Fills all available space inside the parent\\    </p>\n</li><li class=\" \">    <p>NOTE: The fill behavior does not take any other views into account except for its parent. i.e. If the parent view has 2 children, the first with a static width/height and the second with fill behavior for both, the second view will still fill its parent.    </p>\n</li><li class=\" \">    <p>If the parent does not have a height/width constraint (i.e. The parent has size behavior for width/height while the child has fill behavior), then the view will recursively go through the parents to find a width/height constraint and fill to that constraint.    </p>\n</li></ul>    <div class=\"section section-4 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-ScrollViewFILL\">\n        <h4 class=\"heading \"><span>ScrollView FILL</span></h4>\n    <p>Scrollview <tt class=\" \">contentWidth</tt> or <tt class=\" \">contentHeight</tt> can be set to <tt class=\" \">Ti.UI.FILL</tt>. Regardless of contents, this behaves as described above, meaning that the content view bounds fill the scrollview. This has the side-effect that the scrollview does not scroll, so using this value is considered undesirable.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Viewautosizeclassification\">\n        <h3 class=\"heading \"><span>View auto size classification</span></h3>\n    <p>Views are logically grouped into either SIZE or FILL for their auto behavior. Windows FILL the screen by default.    </p>\n<ul class=\" \"><li class=\" \">    <p>SIZE Views    </p>\n<ul class=\" \"><li class=\" \">    <p>Button    </p>\n</li><li class=\" \">    <p>Label    </p>\n</li><li class=\" \">    <p>ImageView    </p>\n</li><li class=\" \">    <p>ProgressBar    </p>\n</li><li class=\" \">    <p>Switch    </p>\n</li><li class=\" \">    <p>TextArea    </p>\n</li><li class=\" \">    <p>TextField    </p>\n</li><li class=\" \">    <p>Picker    </p>\n</li><li class=\" \">    <p>SearchBar    </p>\n<ul class=\" \"><li class=\" \">    <p>height only, FILL width    </p>\n</li></ul></li><li class=\" \">    <p>ButtonBar    </p>\n</li><li class=\" \">    <p>TableViewSection    </p>\n</li></ul></li></ul><ul class=\" \"><li class=\" \">    <p>FILL Views    </p>\n<ul class=\" \"><li class=\" \">    <p>View    </p>\n</li><li class=\" \">    <p>TabGroup    </p>\n</li><li class=\" \">    <p>VideoView    </p>\n</li><li class=\" \">    <p>Toolbar    </p>\n<ul class=\" \"><li class=\" \">    <p>width only, SIZE height    </p>\n</li></ul></li><li class=\" \">    <p>TableView    </p>\n</li><li class=\" \">    <p>TableViewRow    </p>\n<ul class=\" \"><li class=\" \">    <p>width only, SIZE height    </p>\n</li></ul></li><li class=\" \">    <p>WebView    </p>\n</li><li class=\" \">    <p>ScrollView    </p>\n</li><li class=\" \">    <p>ScrollableView    </p>\n</li><li class=\" \">    <p>Slider    </p>\n<ul class=\" \"><li class=\" \">    <p>width only, SIZE height    </p>\n</li></ul></li></ul></li></ul>    <p>    <span id=\"src-4196675_UICompositeLayoutBehaviorSpec-undefined_behavior\"><a class=\"confluence-anchor-link\" name=\"src-4196675_UICompositeLayoutBehaviorSpec-undefined_behavior\"/></span>\n    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-UNDEFINEDbehavior\">\n        <h3 class=\"heading \"><span>UNDEFINED behavior</span></h3>\n    <p>If layout parameter values are undefined, then this means that they need to be computed based on existing values if possible, and if not, then have some sensible default.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p><strong class=\" \">The layout parameters themselves will not actually change value, the dynamic APIs</strong> <tt class=\" \">rect</tt> <strong class=\" \">and</strong> <tt class=\" \">size</tt> <strong class=\" \">will contain the actual system values.</strong>    </p>\n    </div>\n    <ul class=\" \"><li class=\" \">    <p>width : implicit based on horizontal pins (left, center.x, right)    </p>\n<ul class=\" \"><li class=\" \">    <p>If two (or more) horizontal pins are available, computed from these values    </p>\n</li><li class=\" \">    <p>Otherwise, follows view&apos;s &quot;auto&quot; behavior    </p>\n<ul class=\" \"><li class=\" \">    <p>On &quot;auto&quot; deprecation, follows SIZE behavior    </p>\n</li></ul></li><li class=\" \">    <p>If width is dependent on the parent (e.g. percentage), and the parent is set to SIZE, width is undefined    </p>\n</li></ul></li><li class=\" \">    <p>left : implicit based on other horizontal pins (center.x, right)    </p>\n<ul class=\" \"><li class=\" \">    <p>If no pinning properties are set : The view is centered horizontally in it&apos;s parent    </p>\n</li><li class=\" \">    <p>Otherwise, no left side pinning    </p>\n</li></ul></li><li class=\" \">    <p>center.x : No center pinning (horizontal)    </p>\n</li><li class=\" \">    <p>right : No right side pinning    </p>\n</li><li class=\" \">    <p>height : implicit based on vertical pins (top, center.y, bottom)    </p>\n<ul class=\" \"><li class=\" \">    <p>If two (or more) vertical pins are available, computed from these values    </p>\n</li><li class=\" \">    <p>Otherwise, follows view&apos;s &quot;auto&quot; behavior    </p>\n<ul class=\" \"><li class=\" \">    <p>On &quot;auto&quot; deprecation, follows SIZE behavior    </p>\n</li></ul></li><li class=\" \">    <p>If height is dependent on the parent (e.g. percentage), and the parent is set to SIZE, height is undefined    </p>\n</li></ul></li><li class=\" \">    <p>top : implicit based on other vertical pins (center.y, bottom)    </p>\n<ul class=\" \"><li class=\" \">    <p>If no pinning properties are set : The view is centered vertically in it&apos;s parent    </p>\n</li><li class=\" \">    <p>Otherwise, no top side pinning    </p>\n</li></ul></li><li class=\" \">    <p>center.y : No center pinning (vertical)    </p>\n</li><li class=\" \">    <p>bottom : No bottom side pinning    </p>\n</li><li class=\" \">    <p>zIndex: implementation treats as 0, but will still be undefined in the View&apos;s layout params. Views are stacked in order of being added to the parent based on their index.    </p>\n</li></ul>    <div class=\"section section-4 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-UNDEFINEDandscrollviewcontents\">\n        <h4 class=\"heading \"><span>UNDEFINED and scrollview contents</span></h4>\n    <p>For clarity, scrollview <tt class=\" \">contentWidth</tt> and <tt class=\" \">contentHeight</tt> behave as if they were set to &quot;auto&quot; when undefined. This is consistent with the behavior described above.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-CodeExamples\">\n        <h2 class=\"heading \"><span>Code Examples</span></h2>\n    <p>Each of these examples contrast the way something is done today (&quot;old&quot;) with the way it will be done with the new dynamic size / rect properties, and batch updating semantics (&quot;new&quot;).    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">Updating Layout Parameters</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"Updating Layout Parameters\">\n<div class=\"line\"><code class=\"comments\">// [old] changes the top and left of the view directly, re-layout twice</code></div>\n<div class=\"line\"><code class=\"plain\">view.top = </code><code class=\"value\">50</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">view.left = </code><code class=\"value\">50</code><code class=\"plain\">;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// [new] change top and left, but only request a single layout</code></div>\n<div class=\"line\"><code class=\"plain\">view.startLayout();</code></div>\n<div class=\"line\"><code class=\"plain\">view.top = </code><code class=\"value\">50</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">view.left = </code><code class=\"value\">50</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">view.finishLayout();</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// [new] equivalent to above, but using batch update for convenience</code></div>\n<div class=\"line\"><code class=\"plain\">view.updateLayout({</code></div>\n<div class=\"line\"><code class=\"plain\">    top: </code><code class=\"value\">50</code><code class=\"plain\">, left: </code><code class=\"value\">50</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">Get Native and Model parameters</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"Get Native and Model parameters\">\n<div class=\"line\"><code class=\"plain\">view.width = </code><code class=\"value\">100</code><code class=\"plain\">;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// [old] get the views&apos;s native width, but user supplied width is unavailable</code></div>\n<div class=\"line\"><code class=\"comments\">// view.width may not necessarily be 100 after being laid out</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.debug(</code><code class=\"string\">&quot;view width = &quot;</code><code class=\"plain\"> + view.width);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// [new] get the view&apos;s native width, and the user supplied width</code></div>\n<div class=\"line\"><code class=\"comments\">// view.rect, view.size, are the new dynamic/native APIs</code></div>\n<div class=\"line\"><code class=\"comments\">// view.X will always have the user-supplied layout params</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.debug(</code><code class=\"string\">&quot;button width = &quot;</code><code class=\"plain\"> + view.rect.width + </code><code class=\"string\">&quot;, my width = &quot;</code><code class=\"plain\"> + view.width);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-ProposedAPI\">\n        <h2 class=\"heading \"><span>Proposed API</span></h2>\n    <p>    <span id=\"src-4196675_UICompositeLayoutBehaviorSpec-Dimension\"><a class=\"confluence-anchor-link\" name=\"src-4196675_UICompositeLayoutBehaviorSpec-Dimension\"/></span>\n    </p>\n    <div class=\"section section-3 \" id=\"src-4196675_safe-id-VUlDb21wb3NpdGVMYXlvdXRCZWhhdmlvclNwZWMtRGltZW5zaW9uKGR1Y2t0eXBlKQ\">\n        <h3 class=\"heading \"><span>Dimension (duck type)</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Properties    </p>\n<ul class=\" \"><li class=\" \">    <p>x : Number    </p>\n</li><li class=\" \">    <p>y : Number    </p>\n</li><li class=\" \">    <p>width : Number    </p>\n</li><li class=\" \">    <p>height : Number    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Ti.UI.View\">\n        <h3 class=\"heading \"><span>Ti.UI.View</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Properties    </p>\n<ul class=\" \"><li class=\" \">    <p>size : <a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Dimension\">Dimension</a>, read-only, returns the bounds of the view in system units. x and y properties are always 0    </p>\n</li><li class=\" \">    <p>rect : <a class=\"document-link \" href=\"#!/guide/UI_Composite_Layout_Behavior_Spec-section-src-4196675_UICompositeLayoutBehaviorSpec-Dimension\">Dimension</a>, read-only, returns the frame of the view (position relative to parent bounds) in system units.    </p>\n</li><li class=\" \">    <p>left : String or Number, the left bound of the view specified by the user    </p>\n</li><li class=\" \">    <p>right : String or Number, the right bound of the view specified by the user    </p>\n</li><li class=\" \">    <p>top : String or Number, the top bound of the view specified by the user    </p>\n</li><li class=\" \">    <p>bottom : String or Number, the bottom bound of the view specified by the user    </p>\n</li><li class=\" \">    <p>center : Object, the center point of the view specified by the user    </p>\n<ul class=\" \"><li class=\" \">    <p>x : String or Number, the x coordinate of the center point    </p>\n</li><li class=\" \">    <p>y : String or Number, the y coordinate of the center point    </p>\n</li></ul></li><li class=\" \">    <p>width : String or Number, the width of the view specified by the user    </p>\n</li><li class=\" \">    <p>height : String or Number, the height of the view specified by the user    </p>\n</li></ul></li><li class=\" \">    <p>Functions    </p>\n<ul class=\" \"><li class=\" \">    <p>startLayout() : void, starts a batch-update of the View&apos;s layout params    </p>\n</li><li class=\" \">    <p>finishLayout() : void, finishes a batch-update of the View&apos;s layout params, and schedules a layout pass of the view tree    </p>\n</li><li class=\" \">    <p>updateLayout(Object params) : void, performs a batch-update of all supplied layout params, and schedules a layout pass after they have been updated    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Ti.UI\">\n        <h3 class=\"heading \"><span>Ti.UI</span></h3>\n<ul class=\" \"><li class=\" \">    <p>Constants    </p>\n<ul class=\" \"><li class=\" \">    <p>Ti.UI.SIZE : Sets a view&apos;s height/width to be that of &quot;auto&quot; SIZE    </p>\n</li><li class=\" \">    <p>Ti.UI.FILL : Sets a view&apos;s height/width to be that of &quot;auto&quot; FILL    </p>\n</li><li class=\" \">    <p>Ti.UI.UNIT_PX : px unit    </p>\n</li><li class=\" \">    <p>Ti.UI.UNIT_MM : mm unit    </p>\n</li><li class=\" \">    <p>Ti.UI.UNIT_CM : cm unit    </p>\n</li><li class=\" \">    <p>Ti.UI.UNIT_IN : in unit    </p>\n</li><li class=\" \">    <p>Ti.UI.UNIT_DIP : dip unit    </p>\n</li></ul></li></ul><ul class=\" \"><li class=\" \">    <p>Functions    </p>\n<ul class=\" \"><li class=\" \">    <p>convertUnits(String convertFromValue, String convertToUnits) : Number, the conversion of one unit type to another using the metrics of the main Display    </p>\n<ul class=\" \"><li class=\" \">    <p>convertFromValue : A measurement and optional unit to convert from, i.e. 160, &quot;120dip&quot;    </p>\n</li><li class=\" \">    <p>convertToUnits : The unit to convert to from one of the UNIT_* constants above    </p>\n</li><li class=\" \">    <p><i class=\" \">NOTE</i> we will need to accomodate for multiple displays in future revisions of this API    </p>\n</li><li class=\" \">    <p><i class=\" \">NOTE</i> because parent/self information is required for converting % values, there is no unit constant for &apos;%&apos; or conversions allowed to/from this value. If a percent value is passed in, this method returns 0.    </p>\n</li></ul></li></ul></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-4196675_UICompositeLayoutBehaviorSpec-Events\">\n        <h3 class=\"heading \"><span>Events</span></h3>\n<ul class=\" \"><li class=\" \">    <p>&apos;postlayout&apos; : This event will be fired after a layout pass has occurred.    </p>\n</li></ul>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=4196675\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"UI Composite Layout Behavior Spec"});