---
layout: post
title: "7 Deadly Sins of Test Automation"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## 7 Deadly Sins of Test Automation

![7-deadly-sins-of-automated-testing](http://69.164.212.71/wp-content/uploads/2012/09/7-deadly-sins-of-automated-testing-e1426551933291.png "7-deadly-sins-of-automated-testing")

Automated Testing is great. You can run hundreds of tests with a click of a button and get a quick feedback on the health of the system. You can find regression issues relatively quickly and stop a serious defect getting shipped into production.

However, senior management often view automated testing as a silver bullet in reducing testing effort/costs and increasing delivery speed, but it should be noted that not all approaches to automated testing are equal and there are some pitfalls that should be avoided.

In this article, Adrian Smith of **[Agile Engineering Design](http://www.agileengineeringdesign.com/ "Agile Engineering Design")** takes a look at the 7 deadly sins of test automation:

### **1\. Envy**

**Flawed comparison between manual testing and automation**

Automated tests are not a replacement for manual exploratory testing. A mixture of testing types and levels is needed to achieve the desired quality mitigate the risk associated with defects.

This is because testing is not merely a sequence of repeatable actions. The automated testing triangle originally described by Mike Cohn explains the investment profile in tests should focus at the unit level and then reduce up through the application layers.

### **2\. Gluttony**

**Over indulging on commercial testing tools**

Many commercial testing tools provide simple features for automating the capture and replay of manual test cases. While this approach seems sound, it encourages testing through the user-interface and results in inherently brittle and difficult to maintain tests.

Additionally, the cost and restrictions that licensed tools place on who can access the test cases is an overhead that tends to prevent collaboration and team work. Furthermore, storing test cases outside the version control system creates unnecessary complexity.

As an alternative, open source test tools can usually solve most automated testing problems and the test cases can be easily included in the version control system.

### **3\. Lust**

**Loving the UI so much that all tests are executed through the UI**

Although automated UI tests provide a high level of confidence, they are expensive to build, slow to execute and fragile to maintain.

Testing at the lowest possible level is a practice that encourages collaboration between developers and testers, increases the execution speed for tests and reduces the test implementation costs.

Automated unit tests should be doing a majority of the test effort followed by integration, functional, system and acceptance tests.

UI based tests should only be used when the UI is actually being tested or there is no practical alternative.

### **4\. Pride**

**Too proud to collaborate when creating tests**

**[Test driven development](http://en.wikipedia.org/wiki/Test-driven_development "Test-driven development")** is an approach to development that is as much a design activity as it is a testing practice. The process of defining test cases (or executable specifications) is an excellent way ensuring that there is a shared understanding between all involved as to the actual requirement being developed and tested. The practice is often associated with unit testing but can be equally applied to other test types including acceptance testing.

### **5\. Sloth**

**Too lazy to maintain automated tests**

The cost and rapid feedback benefits of automated tests are best realised when the tests are regularly executed. This has the effect of highlighting failures and providing continuous feedback about the health of the system.

If your automated tests are initiated manually rather than through the CI **[continuous integration](http://en.wikipedia.org/wiki/Continuous_integration "continuous integration")** system then there is significant risk that they are not being run regularly and therefore may in fact be failing. Make the effort to ensure automated tests are executed through the CI system.

### **6\. Rage**

**Frustration with slow, brittle or unreliable tests**

Unreliable tests are a major cause for teams ignoring or losing confidence in automated tests. Once confidence is lost the value initially invested in automated tests is dramatically reduced. Fixing failing tests and resolving issues associated with brittle tests should be a priority to eliminate false positives.

### **7\. Avarice (Greed)**

**Trying to cut costs through automation**

Testing tool vendors often try to calculate a Return-on-Investment based purely on labour savings. This analysis is unreliable and under values the importance of testing, the investment required to adopt automation practices and the ongoing maintenance costs.