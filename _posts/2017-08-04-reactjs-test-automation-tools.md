---
layout: post
title: "Test Automation Tools for Testing ReactJS Applications"
author: Amir
categories: [ software testing ]
image: assets/images/react-js-test-tools-automation.jpg
---

_I am planning to test a ReactJS application and wanted to find out what is the best tool out there in the market to carry out end-to-end tests? After doing a little research I found that there are many tools available to test ReactJS applications but what is the best one to use for end-to-end tests?_

**Answer:**

There is no concept of "best tool" when it comes to automated testing. It all depends on the context of your project and what you want to achieve from the tool.

I have tested both Angular and ReactJS applications and I only used **[Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/)** as the test automation tool to create end-to-end tests. However, there seems to be a growing number of JS based test automation tools and frameworks to test ReactJS applications. These tools seem to be very popular amongst "front-end" developers as they are based on the language developers are familiar with, JavaScript.

That means that not only testers can write automated end-to-end tests, but developers can also help when there is not enough time or resource.

**Related:**

*   **[Run automated mobile tests on multiple devices](https://www.testingexcellence.com/browsersynch-synchronize-mobile-testing-on-multiple-devices/)**
*   **[Useful tools to test websites on mobile devices](https://www.testingexcellence.com/useful-tools-for-testing-websites-on-mobile-devices/)**
*   **[Appium starter project](https://www.testingexcellence.com/appium-starter-project/)**

Below is a list of test automation tools and frameworks to test ReactJS application:

## Test Automation Tools for ReactJS

### WebDriver.io

WebdriverIO is an open source testing utility for _Node.js_. It makes it possible to write super easy selenium tests with Javascript in your favorite BDD or TDD test framework.

### Nightwatch.js

**Nightwatch.js** is an easy to use _Node.js_ based End-to-End (E2E) testing solution for browser-based apps and websites. It uses the powerful _[W3C WebDriver API](https://www.w3.org/TR/webdriver/)_ to perform commands and assertions on DOM elements.

### NightmareJS

Nightmare is a high-level browser automation library from [Segment](https://segment.com/).

Under the covers, it uses [Electron](http://electron.atom.io/), which is similar to [PhantomJS](http://phantomjs.org/) but roughly twice as fast and more modern.

[Niffy](https://github.com/segmentio/niffy) is a perceptual diffing tool built on Nightmare. It helps you detect UI changes and bugs across releases of your web app.

[Daydream](https://github.com/segmentio/daydream) is a complimentary chrome extension built by [@stevenmiller888](https://github.com/stevenmiller888) that generates Nightmare scripts for you while you browse.

### Jest

Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases. Jest also parallelizes test runs across workers to maximize performance.

### Mocha

While Jest is popular amongst Facebook developers to write automated tests for ReactJS applications, it has some issues (slow, mocking is confusing). Mocha has become a popular alternative. It's more painful to set up but may be worth a look. I expect it to become more popular in the future unless Jest overcomes some of those main issues. See [Testing React Web Apps with Mocha](http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/) to get started.

### Protractor

For acceptance testing, you can consider Protector. It's primarily an Angular tool built on top of Selenium and it comes with a nicer API. Fortunately, it's possible to configure it to work with React. See [Testing React apps with Protractor](http://joelotter.com/2015/04/18/protractor-reactjs.html). The nice thing about this approach is that this will allow you to test your application against a wide variety of browsers.

### Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. Originally developed by Airbnb, is getting more and more popular. You can use it with any test runner (mocha, jasmine,...) and there is a helpful [chai-enzyme](https://github.com/producthunt/chai-enzyme) plugin.

Enzyme + Mocha seems to be the best combination to test web applications written in ReactJS. It is relatively easy to learn, even for someone new to ReactJS and Mocha can easily cope with these tools in a short time.