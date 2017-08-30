Ext.data.JsonP['PyDev_Unittest_integration']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Unittest integration</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083055\" class=\"content\">\n                        <h1>PyDev Unittest integration</h1>\n    <div class=\"section section-2 \" id=\"src-30083055_PyDevUnittestintegration-Unittestintegration\">\n        <h2 class=\"heading \"><span>Unittest integration</span></h2>\n    <p>On PyDev 1.6.4, an improved unittest support was introduced. It allows using different test runners (the default PyDev test runner, nose or py.test) and allows seeing the results in a view (PyUnit view) with a red/green bar which also allows re-running tests.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083055_PyDevUnittestintegration-Configuringtestrunners\">\n        <h2 class=\"heading \"><span>Configuring test runners</span></h2>\n    <p>The preferences page to configure the test runner is accessible from the PyUnit view at the dropdown menu &gt; configure test runner preferences (or at window &gt; preferences &gt; PyDev &gt; PyUnit)    </p>\n    <p>    <img src=\"images/pydev.org/images/py_unit/py_unit_preferences.png\" alt=\"images/pydev.org/images/py_unit/py_unit_preferences.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br><strong class=\" \">Note</strong>: the flags to choose the tests in the test runner should not be specified (they are properly managed by PyDev in each test run)    </br></img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083055_PyDevUnittestintegration-ConfiguringthePyDevtestrunner\">\n        <h2 class=\"heading \"><span>Configuring the PyDev test runner</span></h2>\n    <p>The options that the PyDev unittest accepts are:    </p>\n    <p><strong class=\" \">--verbosity=number</strong><br>Sets the verbosity level for the run    </br></p>\n    <p><strong class=\" \">--jobs=number</strong><br>The number of processes to be used to run the tests    </br></p>\n    <p><strong class=\" \">--split_jobs=tests|module</strong><br>if <strong class=\" \">tests</strong> is passed (default), the tests will be split independently to each process<br>if <strong class=\" \">module</strong> is passed, a given job will always receive all the tests from a module    </br></br></p>\n    <p>An example of options that can be set in the preferences would be:    </p>\n    <p><strong class=\" \">--verbosity=1 --jobs=2 --split_jobs=module</strong>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083055_PyDevUnittestintegration-ConfiguringtheNosetestrunner\">\n        <h2 class=\"heading \"><span>Configuring the Nose test runner</span></h2>\n    <p>Note: the integration was tested with version 1.0    </p>\n    <p>The options that the nose test runner accepts can be found at <a class=\"external-link external-link\" href=\"http://somethingaboutorange.com/mrl/projects/nose\" target=\"_blank\">http://somethingaboutorange.com/mrl/projects/nose</a>    </p>\n    <p>An example of options that can be set in the preferences would be:    </p>\n    <p><strong class=\" \">--verbosity=2 --processes=2</strong>    </p>\n    <p>--verbosity=2 (set the verbosity level to 2)    </p>\n    <p>--processes=2 (use 2 processes to run the tests)    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083055_PyDevUnittestintegration-ConfiguringthePy.testtestrunner\">\n        <h2 class=\"heading \"><span>Configuring the Py.test test runner</span></h2>\n    <p>Note: the integration was tested with version 2.0    </p>\n    <p>The options that the py.test test runner accepts can be found at <a class=\"external-link external-link\" href=\"http://pytest.org\" target=\"_blank\">http://pytest.org</a>    </p>\n    <p>An example of options that can be set in the preferences would be:    </p>\n    <p><strong class=\" \">-maxfail=2 --tb=native</strong>    </p>\n    <p>-maxfail=2 (stop at 2nd failure)    </p>\n    <p>--tb=native (will show tracebacks in the default standard library formatting)    </p>\n    <p><strong class=\" \">Note</strong>: currently when using the xdist plugin, the results won&apos;t be properly shown in the PyUnit view.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083055_PyDevUnittestintegration-PyUnitview\">\n        <h2 class=\"heading \"><span>PyUnit view</span></h2>\n    <p>The PyUnit view may be used to see the results of tests being run, their output, time, re-running tests, among others.    </p>\n    <p>    <img src=\"images/pydev.org/images/py_unit/py_unit_view.png\" alt=\"images/pydev.org/images/py_unit/py_unit_view.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>The most interesting features related to seeing the tests are:    </br></img></p>\n<ul class=\"alternate \"><li class=\" \">    <p>The results of tests are shown, along with a green/red bar depending whether all the tests succeeded or not (or if you&apos;re with Aptana Studio, following the color theme)    </p>\n</li><li class=\" \">    <p>The time a test took to run is shown (and may be used to sort the tree)    </p>\n</li><li class=\" \">    <p>The errors/output are shown by selecting the test run or just hovering over the items    </p>\n</li><li class=\" \">    <p>A filter to show only errors is available    </p>\n</li></ul>    <p>And the most interesting actions are:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>A test session can be rerun    </p>\n</li><li class=\" \">    <p>A new test session can be created to rerun only the errors of the current run    </p>\n</li><li class=\" \">    <p>The test session can be stopped    </p>\n</li><li class=\" \">    <p>The results of a previously run test session can be seen again    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083055_PyDevUnittestintegration-RunningandshowingresultsinthePyUnitview\">\n        <h2 class=\"heading \"><span>Running and showing results in the PyUnit view</span></h2>\n    <p>To show the results in the PyUnit view, a <strong class=\" \">unittest run</strong> must be done. If running the tests when editing a module, <strong class=\" \">Ctrl+F9</strong> may be used to run the tests in that mode (and choosing which tests should be run), otherwise, right-click a folder or python file and choose <strong class=\" \">Run as &gt; Python Unittest</strong>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083055\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"PyDev Unittest integration"});