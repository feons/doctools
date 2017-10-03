Ext.data.JsonP['Deploying_to_Windows_Devices']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Deploying to Windows Devices</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43308601\" class=\"content\">\n                        <h1>Deploying to Windows Devices</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-WindowsPhone\">Windows Phone</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-SetthePublisherID\">Set the Publisher ID</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-CLIInstructions\">CLI Instructions</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-Studioinstructions\">Studio instructions</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-RegistertheDevice\">Register the Device</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-DeploytoaDevicewithStudio\">Deploy to a Device with Studio</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-DeploytoaDevicewiththeCLI\">Deploy to a Device with the CLI</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-WindowsTablet\">Windows Tablet</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-EditGroupPolicySettings\">Edit Group Policy Settings</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-InstalltheCertificate\">Install the Certificate</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_Windows_Devices-section-src-43308601_DeployingtoWindowsDevices-InstallthePackage\">Install the Package</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-43308601_DeployingtoWindowsDevices-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Use Appcelerator Studio or CLI to deploy your Titanium projects as Windows Phone applications, which can be deployed to Windows Phone devices.  To deploy to a Windows tablet, you need to package a Windows Store app with Studio or the CLI, configure the tablet to sideload a package, and install the public certificate and package.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43308601_DeployingtoWindowsDevices-WindowsPhone\">\n        <h2 class=\"heading \"><span>Windows Phone</span></h2>\n    <p>Before deploying the application to a Windows Phone device, you will need to:    </p>\n<ul class=\" \"><li class=\" \">    <p>Set the Publisher ID in the CLI or Studio    </p>\n</li><li class=\" \">    <p>Register the device using the Windows Phone Developer Registration tool (part of the Windows Phone SDK)    </p>\n</li><li class=\" \">    <p>Connect the device to your computer with a USB cable    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Currently, only one Windows Phone device may be plugged in to your computer to deploy. If multiple devices are plugged in, the build process will fail with an error.    </p>\n    </div>\n        <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-SetthePublisherID\">\n        <h3 class=\"heading \"><span>Set the Publisher ID</span></h3>\n    <p>To deploy to the Windows Phone emulator or device, and to create a Windows Phone store package, you need to set your publisher ID.    </p>\n    <p><strong class=\" \">To retrieve your publisher GUID</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>Log into <a class=\"external-link external-link\" href=\"https://dev.windows.com/\" target=\"_blank\">https://dev.windows.com</a>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Dashboard</strong> in the top-right corner.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Account settings</strong> in the left navigation.    </p>\n</li></ol>    <p>The publisher GUID will be under the <strong class=\" \">Account Details</strong> section as the     <span style=\"color: #000000;\">\n<strong class=\" \">Windows publisher ID</strong> field.    </span>\n    </p>\n    <p>    <span style=\"color: #000000;\">\nYou can set the publisher ID using either the CLI or in the Studio Preferences dialog.  If you set the publisher ID using the CLI, the value will be passed to Studio from the CLI.    </span>\n    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-CLIInstructions\">\n        <h3 class=\"heading \"><span>CLI Instructions</span></h3>\n    <p>Use the <tt class=\" \">appc ti config</tt> CLI command to set the <tt class=\" \">windows.publisherId</tt> Titanium CLI key.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc ti config windows.publisherId </code><code class=\"string\">&quot;CN=00000000-0000-1000-8000-000000000000&quot;</code></div>\n</div>\n    </div>\n    <p>Alternatively, you may also pass the publisher ID to the CLI using the <tt class=\" \">-I</tt> option.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-Studioinstructions\">\n        <h3 class=\"heading \"><span>Studio instructions</span></h3>\n<ol class=\" \"><li class=\" \">    <p>Open the Preferences dialog:    </p>\n<ol class=\" \"><li class=\" \">    <p>On Mac OS X, from the menu bar, select <strong class=\" \">Appcelerator Studio</strong> &gt; <strong class=\" \">Preferences</strong>.    </p>\n</li><li class=\" \">    <p>On Windows, from the menu bar, select <strong class=\" \">Window </strong>&gt;<strong class=\" \"> Preferences</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>In the<strong class=\" \"> Preferences</strong> dialog, navigate to<strong class=\" \"> Studio </strong>&gt;<strong class=\" \"> Platforms </strong>&gt;<strong class=\" \"> Windows</strong>.    </p>\n</li><li class=\" \">    <p>Enter your publisher ID in the <strong class=\" \">Publisher Id </strong>field.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-RegistertheDevice\">\n        <h3 class=\"heading \"><span>Register the Device</span></h3>\n    <p>The following instructions are from <a class=\"external-link external-link\" href=\"https://msdn.microsoft.com/en-us/library/windows/apps/ff769508(v=vs.105).aspx\" target=\"_blank\">Windows Dev Center: How to register your phone for development for Windows Phone 8</a>.    </p>\n    <p>    </p>\n<ol class=\" \"><li class=\" \">    <p>Turn on your phone and unlock the phone screen.    </p>\n</li><li class=\" \">    <p>On your phone, ensure that the date and time are correct.    </p>\n</li><li class=\" \">    <p>Connect your phone to your computer by using the USB cable that came with your phone.    </p>\n</li><li class=\" \">    <p>On your computer&#x2019;s Start screen, switch to <strong class=\" \">All apps</strong> view.    </p>\n</li><li class=\" \">    <p>Under <strong class=\" \">Windows Phone SDK 8.1</strong>, click <strong class=\" \">Windows Phone Developer Registration</strong>.    </p>\n</li><li class=\" \">    <p>Verify that the <strong class=\" \">Status</strong> message displays <strong class=\" \">Identified Windows Phone 8 device</strong>. Click the <strong class=\" \">Register</strong> button to unlock the phone. If your phone is already registered, the <strong class=\" \">Status</strong> message indicates this and you see an <strong class=\" \">Unregister</strong> button.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Register</strong>.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Sign In</strong> dialog box for your Microsoft account (formerly known as a Windows Live ID), enter the email address and password for your Microsoft account. Click <strong class=\" \">Sign In</strong>. If you&#x2019;re a registered developer, be sure to use the Microsoft account associated with your developer account.    </p>\n</li><li class=\" \">    <p>After your phone is successfully registered, the <strong class=\" \">Status</strong> message displays: &quot;Congratulations! You have successfully unlocked your Windows Phone.&quot;    </p>\n</li></ol>    <p>Your phone is now registered. You can now deploy apps to the phone.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-DeploytoaDevicewithStudio\">\n        <h3 class=\"heading \"><span>Deploy to a Device with Studio</span></h3>\n    <p>To deploy with Studio:    </p>\n<ol class=\" \"><li class=\" \">    <p>Select the project in the <strong class=\" \">Project Explorer</strong> view.    </p>\n</li><li class=\" \">    <p>In the global tool bar, select <strong class=\" \">Run</strong> from the <strong class=\" \">Launch Mode </strong>drop-down list.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Windows Phone Device</strong> from the <strong class=\" \">Target</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>If the <strong class=\" \">Launch Automatically</strong> option is enabled under the <strong class=\" \">Target</strong> drop-down list, the application will be automatically launched after the device is selected.  If not, you need to click the <strong class=\" \">Launch</strong> button to start the build process.    </p>\n</li></ol>    <p>Your app will be built, installed to your device and automatically launched.    </p>\n    <p>    <img src=\"images/download/attachments/43308601/WindowsPhoneDevice.png\" alt=\"images/download/attachments/43308601/WindowsPhoneDevice.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-DeploytoaDevicewiththeCLI\">\n        <h3 class=\"heading \"><span>Deploy to a Device with the CLI</span></h3>\n    <p>To deploy an application to a device with the CLI, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc run -p windows -T wp-device</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43308601_DeployingtoWindowsDevices-WindowsTablet\">\n        <h2 class=\"heading \"><span>Windows Tablet</span></h2>\n    <p>To deploy to a Windows tablet, you need to <a class=\"external-link external-link\" href=\"https://technet.microsoft.com/en-us/windows/jj874388.aspx\" target=\"_blank\">sideload</a> the application package to the device.    </p>\n<ol class=\" \"><li class=\" \">    <p>Package the application as a Windows Store app. For instructions, see <a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications\">Distributing Windows Applications</a>.    </p>\n</li><li class=\" \">    <p>Enable the <strong class=\" \">Allow all trusted apps to install</strong> group policy    </p>\n</li><li class=\" \">    <p>Install the public certificate that was used to sign the package to the tablet&apos;s <strong class=\" \">Trusted Root Certification Authorities</strong> store    </p>\n</li><li class=\" \">    <p>Execute a PowerShell command to install the package to the tablet with the <tt class=\" \">Add-AppxPackage</tt> command.    </p>\n</li></ol>    <p>After you package the application, copy the project&apos;s <tt class=\" \">generated.cer</tt> and <tt class=\" \">./dist/&lt;PACKAGE_NAME&gt;_Win32.appx</tt> files to to a USB drive and plug it into the tablet.    </p>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-EditGroupPolicySettings\">\n        <h3 class=\"heading \"><span>Edit Group Policy Settings</span></h3>\n    <p>To enable installation of the package, you need to update the device&apos;s group policy.    </p>\n<ol class=\" \"><li class=\" \">    <p>Go to the <strong class=\" \">Start</strong> screen and type &quot;edit group policy.&quot;    </p>\n</li><li class=\" \">    <p>Click<strong class=\" \"> Edit Group Policy</strong>.    </p>\n</li><li class=\" \">    <p>Expand <strong class=\" \">Computer Configuration \\</strong> <strong class=\" \">Administrative Templates \\</strong> <strong class=\" \">Windows Components </strong>    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">App Package Deployment</strong>.    </p>\n</li><li class=\" \">    <p>Double-click <strong class=\" \">Allow all trusted apps to install</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Enabled</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK.</strong>    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-InstalltheCertificate\">\n        <h3 class=\"heading \"><span>Install the Certificate</span></h3>\n    <p>Install the certificate you copied to the USB drive to the device&apos;s Trusted Root Certification Authorities store. You will need administrative privileges.    </p>\n<ol class=\" \"><li class=\" \">    <p>Double-click the certificate file.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Install Certificate...</strong> to open the Certificate Import wizard.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">LOCAL MACHINE</strong>, then click <strong class=\" \">Next</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Place all certificates in the following store</strong>, click <strong class=\" \">Browse</strong>, click <strong class=\" \">Trusted Root Certification Authorities</strong>, click <strong class=\" \">OK</strong>, then click <strong class=\" \">Next</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Finish</strong>.    </p>\n</li></ol>    <p>A dialog should appear that the certificate was installed successfully.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43308601_DeployingtoWindowsDevices-InstallthePackage\">\n        <h3 class=\"heading \"><span>Install the Package</span></h3>\n    <p>Open PowerShell and execute the <tt class=\" \">Add-AppxPackage</tt> command to install the application.    </p>\n<ol class=\" \"><li class=\" \">    <p>Go to the <strong class=\" \">Start</strong> screen and type &quot;powershell.&quot;    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">PowerShell</strong>.    </p>\n</li><li class=\" \">    <p>Execute the following command to install the package:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\">-module appx</code></div>\n<div class=\"line\"><code class=\"plain\">add-appxpackage &lt;PACKAGE_NAME&gt;_Win32.appx</code></div>\n</div>\n    </div>\n</li></ol>    <p>The application will be installed to the device and you can access it from the <strong class=\" \">All apps</strong> screen.    </p>\n    <p>    </p>\n    <p>    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43308601\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Deploying to Windows Devices"});