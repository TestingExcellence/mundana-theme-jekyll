---
layout: post
title: "Run All Test Classes in a Package from testng.xml Suite"
author: Amir
tags: [ testng ]
image: assets/images/testng.png
---

```xml
<suite name="Suite1" verbose="1">
    <test name="all-tests">
        <packages>
            <package name="com.testingexcellence.tests.ui"/>
        </packages>
    </test>
</suite>
```

If you need to run all tests from multiple packages, you can use:

```xml
<suite name="Suite2" verbose="1">
    <test name="all-tests">
        <packages>
            <package name="com.testingexcellence.tests.ui"/>
            <package name="com.testingexcellence.tests.api"/>
        </packages>
    </test>
</suite>
```

If there are many packages with tests that all need to be executed, rather than listing all package names individually, we can use regular expression to include all packages, such as:

```xml
<suite name="Suite-3" verbose="1">
    <test name="all-packages">
    <packages>
        <package name=".*" />
    </packages>
    </test>
</suite>
```
Note, there is a "." before the * in the package name, which indicates all package names.