Ext.data.JsonP['Installing_the_iOS_SDK']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Installing the iOS SDK</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-29004875\" class=\"content\">\n                        <h1>Installing the iOS SDK</h1>\n    <div class=\"section section-2 \" id=\"src-29004875_InstallingtheiOSSDK-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-CompatibilityandDownload\">Compatibility and Download</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-Xcode\">Xcode</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_safe-id-SW5zdGFsbGluZ3RoZWlPU1NESy1JbnN0YWxsYXRpb24oaU9TLW9ubHkp\">Installation (iOS-only)</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-InstallXcode\">Install Xcode</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-LaunchXcode\">Launch Xcode</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-UpdateXcodeusingXcodeInstaller\">Update Xcode using Xcode Installer</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-InstalltheCommandLineToolsandPreviousSimulators\">Install the Command Line Tools and Previous Simulators</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-SelecttheActiveXcodeVersion\">Select the Active Xcode Version</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-ConfigureStudioortheCLI\">Configure Studio or the CLI</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_iOS_SDK-section-src-29004875_InstallingtheiOSSDK-NoteforMavericks\">Note for Mavericks</a>    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Due to Apple&apos;s terms and conditions, the iOS SDK may only be installed on Apple products, hence only instructions for installing to Apple&apos;s OS X operating system are provided here.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-29004875_InstallingtheiOSSDK-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>This guide describes where to obtain and how to install the Xcode suite of developer tools including iOS SDKs.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004875_InstallingtheiOSSDK-CompatibilityandDownload\">\n        <h2 class=\"heading \"><span>Compatibility and Download</span></h2>\n    <p>Titanium requires Xcode to be installed in order for you to develop iOS applications.    </p>\n    <p>    <img src=\"images/download/attachments/29004836/download_05.png\" alt=\"images/download/attachments/29004836/download_05.png\" class=\"confluence-embedded-image image-center\" width=\"64\">\n        </img></p>\n    <p>There are two ways to obtain Xcode, the application that installs and manages iOS SDKs:    </p>\n<ol class=\" \"><li class=\" \">    <p>Launch the <i class=\" \">App Store</i> application, found in the <tt class=\" \">Applications</tt> folder, and search for and install &quot;xcode&quot; (includes only currently-supported iOS SDKs).    </p>\n</li><li class=\" \">    <p>Enroll with the Apple Developer website and browse the <a class=\"external-link external-link\" href=\"https://developer.apple.com/devcenter/ios/index.action#downloads\" target=\"_blank\">iOS Dev Center</a> page to manually download the installer application (includes all previously-released iOS SDKs, new and old).    </p>\n</li></ol>    <p>Both of the above options are currently free of charge, although may require credit card details to be entered. If you wish to test your applications on a device, however, you will need to become a member of the <i class=\" \">iOS Developer Program</i>, by way of an annual subscription charge of $99 at the time of writing.    </p>\n    <div class=\"section section-3 \" id=\"src-29004875_InstallingtheiOSSDK-Xcode\">\n        <h3 class=\"heading \"><span>Xcode</span></h3>\n    <p>To develop for iOS, Titanium requires Apple&apos;s Xcode suite of tools.    </p>\n    <p>Each Titanium SDK supports a specific range of Xcode versions, shown in the table below.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium SDK Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Min Xcode Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Max Xcode Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Notes    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.5.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.4.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.0 - 5.3.1    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.0 - 4.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.4.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.4.0 - 3.5.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.2.2 - 3.3.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.2.0 - 3.2.1    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.3    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>This release only supports Xcode 5.0 and not any of the 5.0.x versions.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.0 - 3.1.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.3    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.6    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>As of Release 3.1.0, the Titanium SDK no longer supports iOS development for ARMv6 devices, which includes the iPhone 2G/3G and iPod Touch 1G/2G.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.1.3 - 3.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.6    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>To build the Titanium SDK 3.0.x with Xcode 4.2, use the legacy Titanium command-line tool. See <a class=\"external-link external-link\" href=\"#!/guide/Legacy_Command-Line_Interface\">Legacy Command-Line Interface</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.1.0 - 2.1.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.4    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.3    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.8.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.7.1+    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.2.6    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>Deploying for iOS 8.0 requires Xcode 6.0, and Mac OS X 10.9.4 and later.    </p>\n    <p>Deploying for iOS 9.x requires Xcode 7.x, and Mac OS X 10.11 and later.    </p>\n    <p>Deploying for iOS 10.x requires Xcode 8.x, and Mac OS X 10.11.5 and later.    </p>\n    <p>Deploying for iOS 11.x requires Xcode 9.x, and Mac OS X 10.11.5 and later.    </p>\n    <p>    <span style=\"color: #2b4771;\">\niOS SDK / Target iOS Platform    </span>\n    </p>\n    <p>Each Titanium SDK supports a specific range of iOS base SDKs and deployment targets. To build an application for a specific iOS target version, you must have the appropriate iOS SDK installed.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium SDK version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Minimum SDK version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Maximum SDK version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Minimum target iOS version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Maximum target iOS version    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.0.0 - latest    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>10.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>10.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.0 - 5.5.1    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>9.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>9.3.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.0 - 4.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.4.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.4.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.4.0 - 3.5.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.2.2 - 3.3.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.1.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.3 - 3.2.1    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.0.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.1 - 3.1.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.0    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.3.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.1.3 - 3.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>6.1.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.1.0 - 2.1.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.1.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.1.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.1.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.8.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>4.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.7.1+    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3.1.2    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.x    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004875_safe-id-SW5zdGFsbGluZ3RoZWlPU1NESy1JbnN0YWxsYXRpb24oaU9TLW9ubHkp\">\n        <h2 class=\"heading \"><span>Installation (iOS-only)</span></h2>\n    <p>Note that the typical filesystem location of this software can be found in the <a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-OSXSoftwareLocations\">OS X Software Locations</a> section of these guides.    </p>\n    <div class=\"section section-3 \" id=\"src-29004875_InstallingtheiOSSDK-InstallXcode\">\n        <h3 class=\"heading \"><span>Install Xcode</span></h3>\n    <p><strong class=\" \">To install the current version of Xcode</strong>, use the Mac App Store:    </p>\n<ol class=\" \"><li class=\" \">    <p>Launch the <strong class=\" \">App Store</strong> application from the <i class=\" \">Applications</i> folder    </p>\n</li><li class=\" \">    <p>Search for &quot;Xcode&quot;    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Free</strong> button, then <strong class=\" \">Install App</strong> button    </p>\n</li></ol>    <p>The App Store starts the download and installation process.    </p>\n    <p><strong class=\" \">To install previous versions of Xcode</strong>, download and run the installer application from <a class=\"external-link external-link\" href=\"https://developer.apple.com/downloads/\" target=\"_blank\">iOS Dev Center: Downloads for Apple Developers</a>.    </p>\n<ol class=\" \"><li class=\" \">    <p>Go to <a class=\"external-link external-link\" href=\"https://developer.apple.com/downloads/\" target=\"_blank\">https://developer.apple.com/downloads/</a> (Requires an Apple Developer account)    </p>\n</li><li class=\" \">    <p>Search for &quot;Xcode&quot;    </p>\n</li><li class=\" \">    <p>Locate the Xcode version you want to install and click the link to start downloading it.    </p>\n</li><li class=\" \">    <p>Once the download completes, launch the installer application and follow the directions.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-29004875_InstallingtheiOSSDK-LaunchXcode\">\n        <h3 class=\"heading \"><span>Launch Xcode</span></h3>\n    <p>To confirm that Xcode has been installed correctly, launch it from <i class=\" \">Applications.</i>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004875_InstallingtheiOSSDK-UpdateXcodeusingXcodeInstaller\">\n        <h3 class=\"heading \"><span>Update Xcode using Xcode Installer</span></h3>\n    <p>When new versions of the SDK are released, launch the <i class=\" \">App Store</i> and click the <strong class=\" \">Updates </strong>icon.  If Xcode appears, click the <strong class=\" \">Update</strong> button.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004875_InstallingtheiOSSDK-InstalltheCommandLineToolsandPreviousSimulators\">\n        <h2 class=\"heading \"><span>Install the Command Line Tools and Previous Simulators</span></h2>\n    <p>The Xcode command-line tools are required for native add-on module development and recommended to be installed for mobile application development.  You can either install the command-line tools from Xcode or by running the xcode-select command from a terminal.    </p>\n    <p>To install the command-line tools or older simulator from Xcode:    </p>\n<ol class=\" \"><li class=\" \">    <p>Launch Xcode.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Xcode </strong>&gt; <strong class=\" \">Preferences.</strong>    </p>\n</li><li class=\" \">    <p>Select the <strong class=\" \">Download</strong> icon and click the <strong class=\" \">Install </strong>button next to the Command Line Tools item.    </p>\n</li><li class=\" \">    <p>If desired, you can install older simulators.    </p>\n</li></ol>    <p>To install the command-line tools from a terminal, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">sudo xcode-select --install</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004875_InstallingtheiOSSDK-SelecttheActiveXcodeVersion\">\n        <h2 class=\"heading \"><span>Select the Active Xcode Version</span></h2>\n    <p>For systems with multiple Xcode versions installed, the current version can be selected by running <tt class=\" \">sudo xcode-select</tt> at the command-line.    </p>\n    <p>For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">sudo xcode-select -</code><code class=\"keyword\">switch</code><code class=\"plain\"> /Applications/Xcode.app/Contents/Developer/</code></div>\n</div>\n    </div>\n    <p>If you are using Studio, you need to restart Studio for your changes to take effect.    </p>\n    <p>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004875_InstallingtheiOSSDK-ConfigureStudioortheCLI\">\n        <h2 class=\"heading \"><span>Configure Studio or the CLI</span></h2>\n    <p>    <span style=\"color: #333333;\">\nBoth Studio and the CLI use the <tt class=\" \">xcode-select</tt> command to obtain the location of the Xcode tool to use when building your iOS applications.  Neither tool requires any additional configuration.    </span>\n    </p>\n    <p>For Studio 3.1.0 and later, you can select a default iOS simulator type to launch after building your application.  Open the <strong class=\" \">Preferences</strong> dialog by selecting <strong class=\" \">Appcelerator Studio </strong>&gt; <strong class=\" \">Preference</strong> from the menu bar, then  navigate to <strong class=\" \"> Studio &gt; Platforms &gt; iOS</strong> and select a simulator type from the  <strong class=\" \">Default Display</strong>  drop-down menu.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004875_InstallingtheiOSSDK-NoteforMavericks\">\n        <h2 class=\"heading \"><span>Note for Mavericks</span></h2>\n    <p>If you are using Mac OS X 10.9 (Mavericks) and packaging an iOS application to the iTune Stores, after the Xcode Organizer is launched, a dialog from OS X may open stating, &apos;UI element scripting is not enabled. Check &quot;Enable access for assitive devices&quot;&apos;.    </p>\n    <p>    <img src=\"images/download/attachments/29004875/Screen_Shot_2013-12-03_at_9.38.50_AM.png\" alt=\"images/download/attachments/29004875/Screen_Shot_2013-12-03_at_9.38.50_AM.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>This message is misleading as this was the name of the setting in previous versions of Mac OS X, which is already enabled by default on the older versions.    </p>\n    <p>On Mavericks, to fix this issue:    </p>\n<ol class=\" \"><li class=\" \">    <p>Open <strong class=\" \">System Preferences</strong> from the Apple Menu.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Security &amp; Privacy</strong>.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Privacy</strong> tab.    </p>\n</li><li class=\" \">    <p>If the dialog is locked (bottom-left corner), unlock it.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Accessibility</strong> from the left list.    </p>\n</li><li class=\" \">    <p>Enable either <strong class=\" \">Terminal</strong> (if you are using the Titanium CLI),<strong class=\" \"> </strong><strong class=\" \">TitaniumStudio</strong> or <strong class=\" \">AppceleratorStudio</strong>.    </p>\n</li><li class=\" \">    <p>Close the <strong class=\" \">System Preferences</strong>.    </p>\n</li></ol>    <p>    <img src=\"images/download/attachments/29004875/Screen_Shot_2016-10-27_at_14.38.14.png\" alt=\"images/download/attachments/29004875/Screen_Shot_2016-10-27_at_14.38.14.png\" class=\"confluence-embedded-image\" width=\"782\">\n        </img></p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004875\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Installing the iOS SDK"});