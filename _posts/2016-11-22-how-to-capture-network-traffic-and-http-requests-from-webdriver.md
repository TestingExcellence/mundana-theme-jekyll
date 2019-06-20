---
layout: post
title: "How to Capture Network Traffic and Http Requests From WebDriver"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Selenium 1 has a built-in mechanism to record network traffic and http requests by setting the <span class="lang:java decode:true crayon-inline ">selenium.start("captureNetworkTraffic=true");</span>

Unfortunately, this solution is not available "out of the box" in Selenium 2 or WebDriver.

You can capture network traffic using a proxy, such as the BrowserMob Proxy (http://proxy.browsermob.com)

To configure the use of the proxy with a webdriver instance, set the CapabilityName.PROXY value to a org.openqa.selenium.Proxy instance:

    public void proxy {
            Proxy proxy = new Proxy();
            // The URL here is the URL that the browsermob proxy is using
            proxy.setHttpProxy("localhost:9100");

            DesiredCapabilities capabilities = DesiredCapabilities.firefox();
            capabilities.setCapability(CapabilityType.PROXY, proxy);

            WebDriver driver = new FirefoxDriver(capabilities);
        }

Once the test is finished, you can extract the data from the browsermob proxy using the mechanisms it provides.

Note: "new Proxy()" - Needs `org.openqa.selenium.Proxy`