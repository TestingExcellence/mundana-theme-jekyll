---
layout: post
title: "Web Testing Tips - How to Test Web Applications"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Web Testing Guidelines

![web-testing-guidelines](http://69.164.212.71/wp-content/uploads/2015/05/web-testing-guidelines.jpg)

**Web Testing** is different to desktop application testing. In Web Application Testing, we are typically using a browser (the client) to request a website from a web server by communicating with the server over HTTP or HTTPS.

It is important that, as testers, when we are involved in Web Testing, we should be familiar with the basics of HTTP to get a good understanding of how web applications work.

In Web Testing, apart from functional testing of individual and integrated components, some of the testing types such as Performance, Security, Cross-browser and Responsiveness which are not necessarily needed in desktop application testing, become of high importance in Web Application Testing. This is because Web Applications are open to a lot of audience so performance has to be accounted for.

In addition Web Applications are more susceptible to security attacks such as DDos and SQL Injection, and if a website is targeted, the downtime can be very costly, so great emphasis should also be put on security testing.

### Web Services Testing

More websites are being built using web services. These provide an opportunity for testers to test the web application in isolated components rather than a full blown integrated web application.

The benefits of testing web services in isolation are:

*   **No browser involved** - We can directly communicate with a web service as long as we know its end-point and what parameters to send.

*   **Much faster** - As we are targeting isolated web service, there is no images, javascript or css to load, so the response is much quicker.

*   **Easier debugging** - when testing a web service, if we encounter an issue, it is much easier to locate the cause of the issue and so debugging becomes less of a pain.

*   **More control** - we have direct control over what request we submit to the web service, so we can use all sorts of data for **[negative testing](http://www.testingexcellence.com/no-thing-negative-testing/)** of web services

We can use [**SopaUI tool**](http://www.soapui.org/about-soapui/what-is-soapui-.html) to test a web service or a browser plugin such as **[REST Client for Firefox](https://addons.mozilla.org/en-US/firefox/addon/restclient/)** or **[Advanced REST Client for Chrome](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo)**

### Performance Testing

Performance Testing is particularly important in Web Testing as the web application is exposed to potentially large number of audience.

When testing web applications, not only do we have to ensure functionally the website is stable, we also have to make sure the application doesn't crash when subjected to a large load on the server.

Unfortunately, most people forget about performance testing of the web application, or postpone the testing just before release which is too late. If there is something fundamentally wrong in the design or code that could impact performance, we would not know about it till it's too late.

Best approach is to run a performance check as often as the functional regression tests so we have confidence that the performance has not regressed as part of the changes to the code base.

**[Jmeter](http://jmeter.apache.org/)** is a popular opensource load testing tool that can be used to check for a site's performance. It can also be integrated in a CI server.

### Cross-browser Web Testing

As there are different number of browsers, we need to ensure our web application works as expected on all of them (at least the major ones, i.e. Google Chrome, Mozilla Firefox and Microsoft Internet Explorer), not to forget Opera and Safari.

As with all testing, we need to know which browsers and their versions the application supports and then plan the testing accordingly.

Testing everything on every browser can be very time consuming, hence we can use automated tools to verify functionality on different browsers.

Moreover, there are online cross browser testing tools which make life easier for testers to execute their tests on different browsers.

Speaking from personal experience, the number of browser-related issues are very few and mostly related to very old versions of browsers or the CSS doesn't render properly giving layout issues.

Therefore it may not be necessary to run all test cases in all browsers as it can be very time consuming (even when automated) for very little gain, and chance of something not working in very low.

The best approach is to run all the test cases in one major browser, and then select a handful of most important scenarios and run them on the rest of the browsers.

### Test Automation

Majority of companies developing Web Applications work in an agile development model with frequent releases, hence a need for frequent testing. In Web Testing, Test Automation can be of great benefit because it removes the burden of repetitive work.

As well as verifying functionality, we can also use automated scripts to generate test data that we need during Web Testing.

Another way automation can help in manual testing is tools such as **[Selenium WebDriver](http://www.seleniumhq.org/download/)** can take screenshots of the actual browser page. If we need to visually check for a large number of pages, e.g. we want to know how the localized text renders on different webpages, we can use the tool to go through the pages and take screenshots and then quickly verify visually.

For more information, please refer to **[Test Automation Tips and Best Practices](http://www.testingexcellence.com/test-automation-tips-best-practices/)**

### Analyzing HTTP Traffic

Quite often there is a need to analyse the HTTP traffic from the browser to the downstream servers. By analyzing the web traffic we can dig down to the details of each request and response.

In Web Testing, analyzing HTTP traffic  is particularly useful when testing third party tracking tags, such as Google Analytics tags or omniture tags on webpages.

Not only can we verify the tags hold correct values, we can actually test that the requests are fired off to the appropriate third party systems and that we get a valid response, usually 200 OK response code.

In order to be able to visualize and record HTTP traffic we have to use an appropriate tool that acts as a proxy and can listen to the requests and responses between the client, usually a browser, and the servers.

Here are some of the most popular tools we can use to analyze HTTP traffic:

**[Wireshark](http://www.wireshark.org/)** if you want to see everything going on in the network.

**[Fiddler](http://fiddler2.com/)** if you want to just monitor HTTP/s traffic.

**[Live HTTP Headers](https://addons.mozilla.org/en-US/firefox/addon/live-http-headers/)** if you're in Firefox and want a quick plugin just to see the headers.

**[FireBug](http://getfirebug.com/)** can get you that information too and provides a nice interface when your working on a single page during development. I've used it to monitor AJAX transactions.

**[BrowserMob Proxy](http://www.testingexcellence.com/how-to-capture-network-traffic-and-http-requests-from-webdriver/)** is also a very nice tool that can hook with Selenium WebDriver when running automated tests.

### Responsive Websites and Mobile Testing

More people are **[accessing websites from their mobile phones](http://www.smartinsights.com/mobile-marketing/mobile-marketing-analytics/mobile-marketing-statistics/)** than their desktop computers. This means that Web Testing is no longer restricted to browsers on desktops. We now have to test web applications on mobile platforms as well as desktops.

There are two types of web applications for mobile devices, ones which are purposely developed for mobile platforms, and ones which are "responsive", i.e. there is only one version of the web application built for desktop and mobile devices but the application renders and is displayed differently depending on the size of the device.

Both types require testing on mobile devices and/or simulators.

For more information on Web Testing on Mobiles read **[How to Test Responsive Web Design](http://www.testingexcellence.com/how-to-test-responsive-web-design/)**

### Other Important elements for Web Testing

During Web Testing, as well as functional testing, we also need to check for and not limited to:

*   Javascript
*   CSS
*   Cookies
*   Accessibility
*   Dead-links
*   UX and Layout
*   HTML Validity
*   Security
*   Browser Refresh
*   Window Resizing