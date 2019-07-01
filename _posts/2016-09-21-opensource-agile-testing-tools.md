---
layout: post
title: "9 Useful Open Source Testing Tools for Agile Testers"
author: Amir
categories: [ software testing ]
tags: [ test tools, agile]
image: assets/images/open-source-tools-for-testers.jpg
---

If you are a technical tester in an agile project, most likely you will be using various testing tools to verify the functionality of the application you are testing. We have compiled a list of useful tools to help your testing activities in agile projects.

All the tools and libraries listed here are open source.

### Selenium WebDriver

Selenium WebDriver is the most widely used test tool for browser test automation. By running automated tests on the UI, we can simulate what the user sees when they interact with the web application. Remember, Selenium is only used for web application automation and not desktop automation.

One of the main advantages of using Selenium WebDriver over other UI automation tools is that you can write your automated tests in a variety of supported programming languages, such as Java, C#, Ruby, Python, and PHP.

Selenium is often used in Agile projects because there is a heavy emphasis on automated testing and that the whole team can contribute to automated tests.

While Selenium can provide benefit to the agile team, you need to be careful not to get carried away and [automate every test](/why-would-you-want-to-automate-a-test/) because potentially you could reach a point where you are spending more time on [dealing with issues rather than be productive](/is-automated-testing-on-the-ui-worth-the-effort/).

### Jmeter

Jmeter is an opensource performance testing tool written entirely in Java. It can be used to load test websites (HTTP, HTTPS) as well as [Web Services](/what-is-a-web-service/) (SOAP and REST) and Databases.

The HTTP(S) Test Script Recorder can be used to record and replay requests.

Jmeter can be [extended by plugins](http://jmeter-plugins.org/) to support further functionalities and there is also a [Jenkins plugin](https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin) which means you can run performance tests as part of the delivery pipeline.

### SoapUI

SoapUI tool is primarily used for functional testing of Web Services. In its early days, it only supported SOAP (XML) but now also supports REST (JSON) formats.

The tool is relatively easy to use and you can create tests for web services in just a few minutes. You can execute tests and analyze the reports all inside SoapUI GUI.

A nice feature of SoapUI is its ability to create mock web services which is handy when you are creating tests for a web service which is not yet developed.

### WireMock

Testing Web Services can sometimes be a challenge, particularly when the web service is not available or is down. In these cases, we can use a mock service. This is where WireMock comes into play.

It is a flexible library for stubbing and mocking web services. Unlike general purpose mocking tools, it works by creating an actual HTTP server that your code under test can connect to as it would a real web service.

It supports HTTP response stubbing, request verification, proxy/intercept, record/playback of stubs and fault injection, and can be used from within a unit test or deployed into a test environment.

### VirtualBox

These days, most applications need to be tested against multiple browsers and operating systems. Instead of having physical servers with different operating systems and browsers, VirtualBox provides an easy solution to create virtual machines with different configurations.

You can run VirtualBox on any operating system to create virtual machines and you can even have multiple virtual machines with different operating systems on the same box.

### Selenium Grid

Selenium tests can take a long time to run particularly when you have too many of them running regularly or as part of a release. As such the feedback loop can be very slow

Thankfully, we have Selenium Grid which can execute Selenium tests in parallel. This is very useful in cases when you need to run the same tests on multiple browsers and/or against different operating systems.

### Appium

Nowadays many websites are accessed via mobile or tablet devices. This means that we need to test web applications on mobile devices.

Appium is an open source test automation framework for use with native and mobile web apps. It drives iOS and Android apps using the WebDriver protocol.

Appium is “cross-platform” which means it allows you to write tests against multiple platforms (iOS, Android), using the same API. This enables code reuse between iOS and Android test suites.

### XMind

XMind in the most popular and feature-rich mind mapping tool. You can use it to create stunning mind maps to highlight the features of a website, or to create a [user journey](/can-you-really-automate-a-user-journey/) flow through the application.

Mind maps have become very popular in the world of software testing because they provide nice visuals and can be of great help when designing test cases.

### Cucumber

If you are doing [Behaviour Driven Development](/bdd-guidelines-best-practices/), whereby there is close collaboration between the business, the customer, and the technology team, then you need a way to specify the requirements which is in plain English that can be understood by all interested stakeholders.

The Cucumber tool takes the specifications and binds them to automated tests, effectively creating live executable documentation. It also aids the collaboration between team members in specifying requirements, guides development, drives automated tests and describes the system.