---
layout: post
title: "Is Automated Testing on the UI Worth the Effort?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Automated UI Testing

Is it really worth it to spend time and effort on Automated UI Testing?

I'm using Selenium WebDriver to automate my testing of a web application, which is an e-commerce application.

When I run my automated tests, there are always many failures related to UI changes, slowness of the application or problems with third-party services.

Our web application communicates with at least 7 different third-party web services. In most cases the, selenium automated scripts face intermittent failures.

It is very annoying as one time it passes and next time it fails. It is not possible to get a green build that I can rely on consistently.

So, given all the problems I face during automated UI testing, are they really worth the effort?

Automated Testing whether on UI or otherwise should provide value to be worthwhile.

If you find yourself spending more time fixing broken tests and maintaining scripts than writing meaningful tests, then you need to change your strategy in how you automate and run your tests.

*   **[Test Automation Strategy](https://www.testingexcellence.com/test-automation-strategy-agile-projects/)**
*   **[Can you really automate a user journey?](https://www.testingexcellence.com/can-you-really-automate-a-user-journey/)**
*   [**Can agile succeed without automated testing?**](https://www.testingexcellence.com/can-agile-succeed-without-automated-testing/)

Many agile teams seem to prefer UI level automation or think that such level of testing is necessary to prove the required business functionality.

However, within six to nine months after starting this effort, they will soon realize that the cost of maintaining UI level tests is higher than the benefit they bring.

Many have thrown away the tests at that point and effectively lost all the effort they put into them.

We should either avoid UI level test automation or at least keep them to the bare minimum. But if you really _have to do_ significant Automated UI Testing, then here is how to do it right to keep the cost of maintenance low.

### **Three Levels of Automated UI Testing**

A very good idea when designing UI level functional tests is to think about describing the test at these three levels:

*   **Business rule/functionality level**: what is this test demonstrating or exercising? For example, free delivery is offered to customers who order two or more books.

*   **User interface workflow level:** how does a user interact with the UI, on a higher activity level? For example, put two books in a shopping cart, enter address details, verify that delivery options include free delivery.

*   **Technical activity level:** what are the technical steps required to exercise the functionality? For example, open the shop homepage, log in with “test_user” and “test_password”, go to the “/book” page, click on the first image with the “book” CSS class, wait for the relative page to load, click on the “Buy now” link… and so on.

**[Why would you automate a test?](https://www.testingexcellence.com/why-would-you-want-to-automate-a-test/)**

### **Test Automation Pyramid**

I would use the “Inversion of the test automation pyramid” principle, where you focus the majority of your tests at the unit layer.

If you have **[web services](https://www.testingexcellence.com/what-is-a-web-service/)** you can test the application logic at that layer. Then, there would only be a handful of automated end-to-end tests on the UI.

That way you have the majority of your tests automated with minimum maintenance as there is no UI involved and they run much quicker.

*   [**Test Automation Tips and Best Practices**](https://www.testingexcellence.com/test-automation-tips-best-practices/)

The problem with running automated tests through the UI is you have to wait for the browser to launch.

Secondly, most modern web applications have third-party tracking tags which could slow down the page load.

The aim of automated UI tests is to find major application issues quickly. But because they take a long time to complete, we may not get quick feedback. In most cases, major issues are spotted straight away by someone manually testing. We don't have to wait for automated tests to tell us something is wrong when we could see the issue straight away.