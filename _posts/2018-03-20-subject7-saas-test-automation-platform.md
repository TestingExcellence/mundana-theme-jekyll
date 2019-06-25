---
layout: post
title: "Subject7 - A Cloud-Based SaaS Test Automation Platform"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

Two of the most common challenges QAs face in an agile team, is keeping up with the developers to automate new functionality, and the other is to have decent technical skills to be able to write good automation code.

Majority of test automation engineers, including myself, are fond of being very hands-on and most of the time opt to code the automated scripts in their preferred programming language.

This is yet another common problem, in that if the delivery team is mostly C# developers and automated tests are written in Java by the QAs, then only team members with Java knowledge can contribute and maintain the framework.

Meet **[Subject7](http://www.subject-7.com/why-use-subject7-1/)**, a true script-free and cloud-based SaaS test automation platform which is designed to help non-technical testers as well as test automation engineers to expedite the creation of end-to-end automated tests.

Using Subject7's highly intuitive UI, you can create complex automated test scenarios in no time and most importantly it is language agnostic and anyone can contribute.

Here is a quick overview of some of the useful features of this powerful test automation platform:

*   Test repository for all your automated and manual test cases.
*   Supports API Testing, Browser Testing, Native Mobile App Testing, Sikuli Tests and more.
*   On-the-fly test creation and execution
*   Parameterization and Data Driven Testing
*   Modularizing Test steps
*   Cloud Run, Scheduled executions and Alerts
*   Test Reporting and Archiving – Video recording

**Related:**

*   **[Creating and Running Automated Tests with Subject7](https://www.testingexcellence.com/creating-running-automated-tests-subject7/)**
*   [**Tips for Effective UI Test Automation**](https://www.testingexcellence.com/tips-effective-ui-test-automation/)

## Test Library

You can organize your tests in a hierarchical manner, with folders to separate projects. In each folder, you can create test suites to hold a collection of related test scenarios, and in each test suite, you can create test cases.

One of the cool features of the Subject7 tool is that it can also act as your test repository for your manual tests as well as automated tests. When you create a test case, you can choose if the test is manual or automated.

[![](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.10.22-1024x669.png)](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.10.22.png)

## Wizard

At the heart of the Subject7 test automation platform is an intelligent wizard that assists you in creating all sorts of actions. With over 70 options, this wizard can create Selenium WebDriver tests, Appium Tests, API tests, and even Sikuli tests, conditional branches, loops, and database queries! All without writing any single line of code.

The wizard can also create element locators automatically with their proprietary XPath generation algorithm. Very powerful indeed!

[![](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.32.11-1024x606.png)](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.32.11.png)

## On-the-fly Test Creation

Another powerful and indeed very useful feature of the tool is that you can add test steps as the test case is executing. You can imagine that when executing a long test case, if something fails, or you had coded a locator incorrectly, you have to start all over again.

With this ability to create test step as the test is executing, you can cut down on debugging time and essentially test your step as you create them. This ensures that when you actually come to execute the tests as a set of large regression pack, then there are at least no script failures.

## Parameterizing and Data Driven Testing

A good practice in any automated test script is to externalize your test data so that you can easily modify them without having to change your scripts.

Also, there are times when you need to run your test cases with a large set of data, also known as Data Driven Testing. Subject7 beautifully supports both of these features by its built-in Data Templates and Data Sets features, respectively.

You can either upload a CSV format file for test data or create the test data directly on the tool itself. You can bind your test data to any test case.

This feature is very handy when for example you want to run your tests on dev, staging and/or pre-prod environments. You can parameterize and define the environments in the Data Templates and then call them in the test steps.

[![](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.38.29-1024x517.png)](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.38.29.png)

## Groupings of Test Steps

As you build up a test suite with many test cases, chances are some of the test steps are duplicates, where they are repeated in many test scenarios.

Subject7 allows you to create functions by grouping a set of test steps which can be reused in other scripts, thus reducing rework and enhancing readability.

## Local Run and Cloud Run

When you develop your test scenarios, you typically choose the local run to test and debug your own test steps. This is limited to a single thread execution running on the local host machine and the chosen browser.

Like most modern PaaS providers, Subject7 also supports cloud execution and this is where things get really exciting.

Using the cloud run, you can parallelize multiple test executions and have your test cases executed on multiple VMs on multiple browsers.

Test executions can be scheduled to run at a specific time, e.g. every day at 5 pm. You have the ability to monitor live status as the tests are being executed and also get notified on any event (e.g. failures or timeouts).

Cloud run does not mean that you don’t see the tests being executed! After a test case has finished, you can simply hit the video button on the test status row and see the execution of the tests as it happened on the VM. This is particularly useful  
when a test fails and you want to include the evidence in a bug report.

[![](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.53.58-1024x601.png)](https://www.testingexcellence.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-19-at-23.53.58.png)

There is a slight learning curve on using **[subject7](http://www.subject-7.com/learn-more/)** to create automated tests, however, once the initial hurdle is passed, large test packs can be created relatively quickly and are easy to maintain.