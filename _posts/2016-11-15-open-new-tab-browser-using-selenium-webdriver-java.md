---
layout: post
title: "How to Open a New Tab in Browser Using Selenium WebDriver with Java"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Quite often you may want to open a new tab in the same browser window that is running your Selenium WebDriver tests. Instead of opening a new browser, you can simply use the code below to open a new tab in the same browser:

    driver.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL +"t");

Then when you open a new tab, you have to switch to it to be able to work with the newly opened tab:

    ArrayList<String> tabs = new ArrayList<String> (driver.getWindowHandles());
    driver.switchTo().window(tabs.get(0));

The above code works for Firefox Browser.