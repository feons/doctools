Ext.data.JsonP['Deploying_to_iOS_devices']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Deploying to iOS devices</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-27595262\" class=\"content\">\n                        <h1>Deploying to iOS devices</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_safe-id-RGVwbG95aW5ndG9pT1NkZXZpY2VzLUFwcGxlJ3NEZXZlbG9wZXJwcm9ncmFt\">Apple&apos;s Developer program</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-Obtainadevelopmentcertificate\">Obtain a development certificate</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-Registeryourtestdevices\">Register your test devices</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-CreateanAppID\">Create an App ID</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-Createandinstalladevelopmentprovisioningprofile\">Create and install a development provisioning profile</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_safe-id-RGVwbG95aW5ndG9pT1NkZXZpY2VzLUJ1aWxkeW91cmFwcCxlbWJlZGRpbmd0aGVwcm9maWxld2l0aGludGhlYXBwJ3NidW5kbGU\">Build your app, embedding the profile within the app&apos;s bundle</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-BuildingyourappwiththeCLI\">Building your app with the CLI</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-Installingappstoremotedevices\">Installing apps to remote devices</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-AddingiTunesArtwork\">Adding iTunes Artwork</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Deploying_to_iOS_devices-section-src-27595262_DeployingtoiOSdevices-References\">References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-27595262_DeployingtoiOSdevices-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this chapter, you will learn the steps necessary to deploy an app to an iOS device for testing.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-27595262_DeployingtoiOSdevices-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>In order to install your app to an iOS device for testing, you need to complete quite a few steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Register with Apple&apos;s Developer program    </p>\n</li><li class=\" \">    <p>Obtain a developer&apos;s certificate    </p>\n</li><li class=\" \">    <p>Register your test devices    </p>\n</li><li class=\" \">    <p>Create an App ID    </p>\n</li><li class=\" \">    <p>Create and install a development provisioning profile    </p>\n</li><li class=\" \">    <p>Build your app, embedding the profile within the app&apos;s bundle. This step takes care of installing to a locally-connected device as well. We will cover distributing your app to remote testers below as well.    </p>\n</li></ol>    <div class=\"section section-3 \" id=\"src-27595262_safe-id-RGVwbG95aW5ndG9pT1NkZXZpY2VzLUFwcGxlJ3NEZXZlbG9wZXJwcm9ncmFt\">\n        <h3 class=\"heading \"><span>Apple&apos;s Developer program</span></h3>\n    <p>You can download the iOS SDK and development tools from Apple by simply registering for the program: no payment is required. But once it comes time to install your app onto a device, you need to pay their subscription fees. At the time of this writing, the individual and company plan costs $99/year. Enterprise and University programs are also available. See the <a class=\"external-link external-link\" href=\"http://developer.apple.com\" target=\"_blank\">Apple Developer&apos;s site</a> for more information.    </p>\n    <p>Apple verifies your identity before admitting you to the program. For individuals, the process is relatively simple and conducted online in hours or a few days. Companies are required to submit articles of incorporation or other proof of identity. Approval for companies typically takes a few days to a week, depending on how quickly you provide the required paperwork. Additional requirements are placed on Enterprise customers (you must have a DUNS number) and universities (proof of accreditation is typically required).    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-Obtainadevelopmentcertificate\">\n        <h3 class=\"heading \"><span>Obtain a development certificate</span></h3>\n    <p>Once you have been approved by Apple, you can log in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a> and begin the deployment process. The initial user account is designated the Team Agent account. The Team Agent is the person at your organization who oversees development and final distribution of your app. For a one-person company, the Team Agent, developer, and final publisher of the app are all one person. In a corporate or team environment, there will be a single Team Agent and one or more developers.    </p>\n    <p>The Team Agent can invite members to his or her team. Doing so creates developer-specific accounts within your overall account. Such developers can create requests for certificates, which the Team Agent can approve or reject.    </p>\n    <p>A development certificate attests to the identity of the developer building the app. Each developer on your team could have their own certificate, enabling each of them to build a test version of your app. When you publish, the Team Agent will create the final certificate and other requirements.    </p>\n    <p>To create a developer&apos;s certificate:    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a>.    </p>\n</li><li class=\" \">    <p>Click the link under <strong class=\" \">Certificates, Identifiers &amp; Profiles</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Certificates</strong>, then click the plus sign (+) button near the top-right corner.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">iOS App Development</strong>, click the <strong class=\" \">Worldwide Developer Relations Certificate Authority</strong> link to download the WWDR certificate, then click <strong class=\" \">Continue</strong><strong class=\" \">.</strong>    </p>\n</li><li class=\" \">    <p>Follow the directions to create a Certificate Signing Request (CSR). Click <strong class=\" \">Continue</strong><strong class=\" \">.</strong>    </p>\n</li><li class=\" \">    <p>Upload your CSR and click <strong class=\" \">Generate</strong>.    </p>\n</li><li class=\" \">    <p>If you are the Team Agent, you will be returned to the Certificates page with the status listed as Pending. Wait a moment then refresh the page in your browser. You should get a Download link at that point. If you are a developer on the team, the Team Agent will receive notification to approve or reject your request. When he or she approves your request, continue with the steps that follow.    </p>\n</li><li class=\" \">    <p>Download the development certificate (.cer) file to your computer.    </p>\n</li><li class=\" \">    <p>Double-click the file to install it to your keychain.    </p>\n</li></ol>    <p>In addition to your developer certificate, you will need to download and install the WWDR Intermediate Certificate, provided by Apple. You can download this file from the iOS Certificates, Identifiers &amp; Profiles page during the first step when you created a certificate. Double-click the resulting file to install it to your keychain.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <h6 id=\"src-27595262_DeployingtoiOSdevices-BackUpYourPrivateKey\" class=\"heading \"><span>Back Up Your Private Key</span></h6>\n    <p class=\"p1\">    <span style=\"color: #3e3e3e;\">\nIt is critical that you save your private key somewhere safe in the event that you need to develop on multiple computers or decide to reinstall your system OS. Without your private key, you will be unable to sign binaries and test your application on any Apple device.    <span style=\"color: #3e3e3e;\">\n The private key was generated by the Keychain application when you created the Certificate Signing Request (CSR). It has the same name as the     </span>\n<strong class=\" \">Common Name</strong>    <span style=\"color: #3e3e3e;\">\n field when you generated the CSR.    </span>\n    </span>\n    </p>\n<ol class=\" \"><li class=\"p1 \">    <p>To export your private key, open up the Keychain Access Application and select <strong class=\" \">login</strong> under Keychains and <strong class=\" \">Keys</strong> under Category.    </p>\n</li><li class=\"p1 \">    <p>Highlight the private key associated with your     <span style=\"color: #3e3e3e;\">\niOS Development Certificate.    </span>\n    </p>\n</li><li class=\"p1 \">    <p>From the menu bar, select <strong class=\" \">File &gt; </strong><strong class=\" \">Export Items...</strong>. Save your key in the Personal Information Exchange (.p12) file format.    </p>\n</li><li class=\"p1 \">    <p>You will be prompted to create a password which will be used when you attempt to import this key on another computer.    </p>\n</li><li class=\"p1 \">    <p>You can now transfer this .p12 file between systems. Double-click on the .p12 file to install it on a system. You will be prompted for the password you entered above.    </p>\n</li></ol>    </div>\n        </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-Registeryourtestdevices\">\n        <h3 class=\"heading \"><span>Register your test devices</span></h3>\n    <p>Apple limits you to testing your app on up to 100 devices per year. You must register each of those devices in the iOS Certificates, Identifiers &amp; Profiles page. You cannot remove a device once it&apos;s been defined (such as to replace it with someone else&apos;s device). So, use care when registering your devices so that you do not run out of permitted devices.    </p>\n    <p>At the time of this writing, you must identify devices by their UDID (Unique Device ID). Apple has announced that the UDID is deprecated as of iOS 5. It is unclear at this time how they will identify devices on the iOS Certificates, Identifiers &amp; Profiles page once that change is widely implemented. For now, you must obtain the UDID using either iTunes or Xcode.    </p>\n    <p>Using iTunes to determine the UDID:    </p>\n<ol class=\" \"><li class=\" \">    <p>Connect the device to your computer.    </p>\n</li><li class=\" \">    <p>Open iTunes, if it doesn&apos;t open automatically.    </p>\n</li><li class=\" \">    <p>Select the device in the left pane.    </p>\n</li><li class=\" \">    <p>In the middle pane, click on the Serial Number. This changes to show the Identifier (UDID). Press Command-C to copy the UDID. (You don&apos;t need to drag to select first.)    </p>\n</li><li class=\" \">    <p>You might want to paste that someplace, such as a text file or email message to save it for later.    </p>\n</li></ol>    <p>Using Xcode 6 and later to determine the UDID:    </p>\n<ol class=\" \"><li class=\" \">    <p>Connect the device to your computer.    </p>\n</li><li class=\" \">    <p>Launch Xcode.    </p>\n</li><li class=\" \">    <p>Open the <strong class=\" \">Devices</strong> window.  From the menu bar, select <strong class=\" \">Window </strong>&gt; <strong class=\" \">Devices</strong>.    </p>\n</li><li class=\" \">    <p>Select your device from the left bar.    </p>\n</li><li class=\" \">    <p>Select the value in the <strong class=\" \">Identifier</strong> field, right-click and choose <strong class=\" \">Copy</strong>.    </p>\n</li><li class=\" \">    <p>You might want to paste that someplace, such as a text file or email message to save it for later.    </p>\n</li></ol>    <p>Using Xcode 5 and older to determine the UDID:    </p>\n<ol class=\" \"><li class=\" \">    <p>Connect the device to your computer.    </p>\n</li><li class=\" \">    <p>Launch Xcode.    </p>\n</li><li class=\" \">    <p>Open the <strong class=\" \">Organizer</strong> window. From the menu bar, select <strong class=\" \">Window </strong>&gt; <strong class=\" \">Organizer</strong>.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Devices</strong>, if necessary.    </p>\n</li><li class=\" \">    <p>On the left, select your iOS device.    </p>\n</li><li class=\" \">    <p>Right-click the string of letters and numbers beside <strong class=\" \">Identifier</strong>, and choose <strong class=\" \">Copy</strong>.    </p>\n</li><li class=\" \">    <p>You might want to paste that someplace, such as a text file or email message to save it for later.    </p>\n</li></ol>    <p>To register your device:    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a> as the Team Admin or Agent.    </p>\n</li><li class=\" \">    <p>Click the link under <strong class=\" \">Certificates, Identifiers &amp; Profiles</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Devices</strong>, then click the plus sign (+) button near the top-right corner.    </p>\n</li><li class=\" \">    <p>Give your device a name (this is for your convenience) and paste in the UDID you copied from iTunes or Xcode.    </p>\n</li><li class=\" \">    <p>Click<strong class=\" \"> Continue</strong>.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-CreateanAppID\">\n        <h3 class=\"heading \"><span>Create an App ID</span></h3>\n    <p>An App ID is a unique identifier for your app. It is composed of two parts: the App ID Prefix and the App ID Suffix. The App ID Prefix is a 10-character hexadecimal string generated by the iOS Certificates, Identifiers &amp; Profiles page. It is unique to you and your developer account. The App ID Suffix is a name you enter called the Bundle Identifier.    </p>\n    <p>The Bundle Identifier can be explicit, meaning you enter a name on the iOS Certificates, Identifiers &amp; Profiles page and enter that exact same identifier as the App ID of your application. You can also create a wildcard Bundle Identifier. Wildcard Bundle IDs are great for quick development &#x2013; you do not have to create a new ID for each and every app you test. However, you cannot use some iOS features with a wildcard ID. You must create an explicit Bundle ID if you plan to use push notifications, iAd, or Game Center features.    </p>\n    <p>To create an App ID:    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a> as the Team Agent or Admin.    </p>\n</li><li class=\" \">    <p>Click the link under <strong class=\" \">Certificates, Identifiers &amp; Profiles</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Identifiers</strong>, then click the plus sign (+) button near the top-right corner.    </p>\n</li><li class=\" \">    <p>Enter a description, which cannot include special characters (including most punctuation).    </p>\n</li><li class=\" \">    <p>Select the services you want to enable for this application.  Note that you cannot use a wildcard ID if you enable certain services as previously mentioned.    </p>\n</li><li class=\" \">    <p>Select the App ID Prefix to use.    </p>\n</li><li class=\" \">    <p>Select the App ID Suffix.  Be sure to use a reverse-domain style:    </p>\n<ol class=\" \"><li class=\" \">    <p>Choose <strong class=\" \">Explicit App ID </strong>and enter the App ID in your tiapp.xml file as the Bundle ID (or set your App ID to this Bundle ID).  Use this options if you enabled the previously mentioned services.    </p>\n</li><li class=\" \">    <p>Choose <strong class=\" \">Wildcard App ID</strong> to use a single ID to match multiple applications. Enter an asterisk (*) as the last digit of the Bundle ID.    </p>\n</li></ol></li><li class=\" \">    <p>Click<strong class=\" \"> Continue</strong>.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-Createandinstalladevelopmentprovisioningprofile\">\n        <h3 class=\"heading \"><span>Create and install a development provisioning profile</span></h3>\n    <p>You are now ready to create the provisioning profile file, which gathers together your certificates, the list of permitted devices, and the App ID.    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a> as the Team Agent or Admin.    </p>\n</li><li class=\" \">    <p>Click the link under <strong class=\" \">Certificates, Identifiers &amp; Profiles</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Provisioning Profiles</strong>, then click the plus sign (+) button near the top-right corner.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">iOS App Development</strong>, then click <strong class=\" \">Continue</strong>.    </p>\n</li><li class=\" \">    <p>Select the App ID from the drop-down list, then click <strong class=\" \">Continue</strong>.    </p>\n</li><li class=\" \">    <p>Select the development certificates to include, then click <strong class=\" \">Continue</strong>.    </p>\n</li><li class=\" \">    <p>Select the devices you want to be able to run the app on, then click <strong class=\" \">Continue</strong>    <span style=\"color: #000000;\">\n.    </span>\n    </p>\n</li><li class=\" \">    <p>Enter a name for your provisioning profile, then click <strong class=\" \">Generate</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Download </strong>to save your provisioning profile file (.mobileprovision) to your computer, then click <strong class=\" \">Done</strong>.    </p>\n</li><li class=\" \">    <p>If you are the Team Agent creating this provisioning profile for a team member, email or distribute it to him or her.    </p>\n</li></ol>    <p>You have two options to install the provisioning profile file onto your development computer. You can drag the file and drop it on the Xcode icon, or you can install it from Studio by following the steps in the following section. Either way, installing the provisioning profile is a one-time operation (on each computer, until it expires).    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_safe-id-RGVwbG95aW5ndG9pT1NkZXZpY2VzLUJ1aWxkeW91cmFwcCxlbWJlZGRpbmd0aGVwcm9maWxld2l0aGludGhlYXBwJ3NidW5kbGU\">\n        <h3 class=\"heading \"><span>Build your app, embedding the profile within the app&apos;s bundle</span></h3>\n    <p>Once you are done with the preceding steps, Studio makes it easy to build and install your app to a locally connected device.    </p>\n    <p>    <img src=\"images/download/attachments/27595262/RuniOSDevice.png\" alt=\"images/download/attachments/27595262/RuniOSDevice.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>To launch a project in run mode, first select the project in the <strong class=\" \">Project Explorer</strong> view, then in the global tool bar, select <strong class=\" \">Run</strong> from the <strong class=\" \">Launch Mode </strong>drop-down list.  In the <strong class=\" \">Target</strong> drop-down list, select <strong class=\" \">iOS Device</strong>, then either select a device to directly install your application to it or <strong class=\" \">iTune Sync</strong> to install it to iTune so it can be installed to a device later. If the <strong class=\" \">Launch Automatically</strong> option is enabled under the <strong class=\" \">Target</strong> drop-down list, the application will be automatically launched after the device is selected.  If not, you need to click the <strong class=\" \">Launch</strong> button to start the build process.    </p>\n    <p>If you have not previously installed your app to a local device, you will see the following wizard dialog box. The wizard walks you through the necessary steps to build and install your app.    </p>\n    <p>On the <strong class=\" \">General</strong> page, ensure the requirements have been satisfied and select the desired SDK version, then click <strong class=\" \">Next</strong>.    </p>\n    <p>    <img src=\"images/download/attachments/27595262/First_Time_Wizard_General.png\" alt=\"images/download/attachments/27595262/First_Time_Wizard_General.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"300\">\n        </img></p>\n    <p>On the <strong class=\" \">Certificates</strong> page, choose your developer certificate, then click <strong class=\" \">Next</strong>.<br>    <img src=\"images/download/attachments/27595262/First_Time_Wizard_Certificates.png\" alt=\"images/download/attachments/27595262/First_Time_Wizard_Certificates.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"300\">\n        </img></br></p>\n    <p>On the last page, provisioning profiles are specified. To install the provisioning profile, click the <strong class=\" \">Browse...</strong> button, locate your .mobileprovision file, and click <strong class=\" \">Open</strong> to install that profile into Xcode. If you have installed more than one provisioning profile, make sure to choose the one that corresponds to your app and your developer certificate. Make sure your device is connected via USB and click <strong class=\" \">Finish</strong>.    </p>\n    <p>    <img src=\"images/download/attachments/27595262/First_Time_Wizard_Provisioning.png\" alt=\"images/download/attachments/27595262/First_Time_Wizard_Provisioning.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"300\">\n        </img></p>\n    <p>If you chose <strong class=\" \">iTunes Sync</strong> as your device, Studio builds your app and installs it to iTunes.  You will need to sync your device to install the application.  If not, it will be installed directly to the device.    </p>\n    <p>If you get errors, the most likely source of trouble is that you did not select the correct developer certificate or provisioning profile.    </p>\n    <p>The next time you execute the run on iOS device action, you will see a more simplified wizard where you specify the certificate, provisioning profile, and iOS SDK. You can navigate to the iOS Platform preference page to view and modify current iOS platform settings using the <strong class=\" \">Manage settings</strong> link    </p>\n    <p>    <img src=\"images/download/attachments/27595262/Simple_Wizard.png\" alt=\"images/download/attachments/27595262/Simple_Wizard.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"200\">\n     <img src=\"images/download/attachments/27595262/iOS_Platform_Preference_Page.png\" alt=\"images/download/attachments/27595262/iOS_Platform_Preference_Page.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"300\">\n    </img></img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-BuildingyourappwiththeCLI\">\n        <h3 class=\"heading \"><span>Building your app with the CLI</span></h3>\n    <p>To build your application using the Titanium CLI, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc run -p ios -T device  -C &lt;DEVICE_UDID&gt; [-V </code><code class=\"string\">&quot;&lt;DEVELOPER_CERTIFICATE_NAME&gt;&quot;</code><code class=\"plain\">  -P &lt;PROVISIONING_PROFILE_UUID&gt;]</code></div>\n</div>\n    </div>\n    <p>If you omit any of the optional parameters, the CLI will prompt you for the information and provide you with available options.  You can also retrieve the information from Xcode&apos;s Devices window (or Organizer window for Xcode 5.x and older) or using the following CLI command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc ti info -t ios</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-Installingappstoremotedevices\">\n        <h3 class=\"heading \"><span>Installing apps to remote devices</span></h3>\n    <p>You have various options for installing apps on remote devices. Of course, you will need to have gathered the UUIDs for each of those devices and used them when creating the provisioning profile. Your options include:    </p>\n<ul class=\" \"><li class=\" \">    <p>Email the .mobileprovision and IPA files to the user. He or she can drag &amp; drop those files into iTunes and then sync their device.    </p>\n</li><li class=\" \">    <p>Post those files on a web or FTP site accessible to your testing users. Because the files can be installed only onto devices whose UUIDs you have registered, you don&apos;t need to worry about unauthorized people accessing your app.    </p>\n</li><li class=\" \">    <p>Use an &quot;over the air&quot; distribution system, such as TestFlight App, DIAWI, AppSendr, or HockeyKit. The first three are services you can subscribe to. The last is an open-source system that you can install on your own web server.    </p>\n</li></ul>    <p>You upload the .mobileprovision and IPA files to the OTA system. Your registered users receive a notification by email (in some cases, users install a small app published by the OTA provider and receive notifications via that app). They&apos;re provided a download link, which installs the app onto their device. When you publish updates, users receive new notifications to download the new version.    </p>\n    <p>Some of these systems enable you to gather user feedback, crash logs, and similar data from testers. There are free modules that help you integrate TestFlight App&apos;s data collection routines into your app.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-AddingiTunesArtwork\">\n        <h3 class=\"heading \"><span>Adding iTunes Artwork</span></h3>\n    <p>Adding iTunes artwork to your project gives your app a polished look when you are testing or deploying to test users. In order to get your application&apos;s icon to appear in iTunes, follow these steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Create a 512 x 512 version of your applications icon in PNG format.    </p>\n</li><li class=\" \">    <p>Save the PNG file to your application <tt class=\" \">Resources</tt> folder as <tt class=\" \">iTunesArtwork</tt> (without an extension).    </p>\n</li><li class=\" \">    <p>Clean and build your project for device.    </p>\n</li></ol>    <p>Your application icon should now appear in iTunes.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-27595262_DeployingtoiOSdevices-References\">\n        <h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://developer.apple.com\" target=\"_blank\">Apple&apos;s Developer Center</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-27595262_DeployingtoiOSdevices-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this chapter, you learned that Apple&apos;s policies and procedures are involved but not impossible. You have to work with the iOS Developers program&apos;s systems to install apps onto your own device, and those of your testers. Studio automates the steps of the program that it can. The rest you must perform at the iOS Certificates, Identifiers &amp; Profiles page.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595262\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Deploying to iOS devices"});