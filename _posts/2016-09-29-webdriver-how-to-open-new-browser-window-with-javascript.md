---
layout: post
title: "WebDriver - How to Open New Browser Window With Javascript"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In previous WebDriver tutorial, we showed [**how to open a new browser tab in Selenium WebDriver**](http://www.testingexcellence.com/open-new-tab-browser-using-selenium-webdriver-java/).

In this tutorial, we take a look at how to open a new browser window using JavaScript in WebDriver.

First, let's see how to execute JavaScript code in Selenium WebDriver

    WebDriver driver = new FirefoxDriver();
            if (driver instanceof JavascriptExecutor) {
            ((JavascriptExecutor)driver).executeScript("javaScriptCode();");
            }

To open a new browser window by JavaScript in WebDriver, we can use the example below:

    WebDriver driver = new FirefoxDriver();
            if (driver instanceof JavascriptExecutor) {
            ((JavascriptExecutor)driver).executeScript("window.open();");
            }

Once the new browser window is opened, then we can navigate to it using:

    ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
            driver.switchTo().window(tabs.get(0));

You can find more documentation on this [here, in the documenation](http://seleniumhq.org/docs/03_webdriver.html#using-javascript), or, preferably, [in the JavaDocs of `JavascriptExecutor`](http://selenium.googlecode.com/svn/trunk/docs/api/java/org/openqa/selenium/JavascriptExecutor.html)
