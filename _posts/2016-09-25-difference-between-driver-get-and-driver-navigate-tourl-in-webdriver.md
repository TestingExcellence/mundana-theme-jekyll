---
layout: post
title: "What is the Difference Between driver.get() and driver.navigate().to(“url”) in Webdriver?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

What is the difference between using `driver.get()` method or `driver.navigate().to(“url”)` method in WebDriver? Is one faster than the other?

You can use both methods to navigate to a URL.

Because navigating to a URL is very common, then driver.get() is a convenient way. However, it does the same function as the `driver.navigate().to(“url”)`

The `driver.navigate()` also has other functions, such as

`driver.navigate().back()`  
`driver.navigate().forward()`  
`driver.navigate().refresh()`

**Related:**

*   **[WebDriver Wait For Page to Load Example in Java](https://www.testingexcellence.com/webdriver-wait-page-load-example-java/)**
*   **[WebDriver Implicit, Explicit and Fluent Wait Examples](https://www.testingexcellence.com/webdriver-explicit-implicit-fluent-wait/)**
*   **[WebDriver - How to Restore Cookies in New Browser Window](https://www.testingexcellence.com/webdriver-how-to-restore-cookies-in-new-browser-window/)**
*   **[WebDriver - How to Open New Browser Window With Javascript](https://www.testingexcellence.com/webdriver-how-to-open-new-browser-window-with-javascript/)**