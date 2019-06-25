---
layout: post
title: "Should Automated UI Tests Run in CI Pipeline?"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

Should Automated UI Tests (e.g. Selenium Tests) be run as part of the **[continuous integration build pipeline](https://www.testingexcellence.com/delivery-pipeline-agile-project/)**? The problem with automated UI tests is that they are slow and brittle as they need to interact with a browser over HTTP. In this post, we examine a strategy for executing automated UI tests in CI/CD pipeline.

## Automated UI Tests in CI Pipeline

The reason for choosing to have automated UI tests is to ensure the application under test works correctly end-to-end. By running automated UI tests, we are effectively **[simulating user journeys](https://www.testingexcellence.com/can-you-really-automate-a-user-journey/)** through the system.

However, the problem with automated UI tests is that they are slow as they need to interact with a browser, even when running in headless mode, as they need to send and receive data over HTTP. Hence, the feedback loop is very slow.

*   **[Test Automation Strategy for Agile Projects](https://www.testingexcellence.com/test-automation-strategy-for-agile-projects/)**
*   **[How to set up a QA function from scratch](https://www.testingexcellence.com/how-to-setup-a-qa-function-from-scratch-for-agile-projects/)**

Another issue with automated UI tests is that they are quite often brittle, meaning that they could fail for a variety of reasons, sometimes due to valid failures which is good, but often due to false positives which makes it hard to get a Green build consistently.

### Why not have only unit tests in CI?

Unit tests are quick and provide a fast feedback, but while necessary to catch issues early on, are not sufficient to gauge the quality of a build. Remember, unit tests catch programmer errors, they don't reveal system failures.

End-to-End UI automated tests provide value and are great at highlighting system failures. Not including them in the CI pipeline, we risk of releasing software with potential bugs.

UI level tests validate the behavior of the system from the point of view of the user and ensure the application delivers the functionality promised in the user stories and user journeys.

### So what should be the strategy?

In an ideal case, we should have only a handful of end-to-end automated UI  tests and aim for verifying functionality at lower layers than the UI.

If the main problem of running automated UI tests as part of a build is time, then one solution is to run the tests in parallel e.g. Selenium Grid.

Another solution is to have only the main core user journey scenarios to run as part of the build pipeline, and then a bigger regression pack as a separate process.

Also, regression testing doesn't mean to run all the tests all the time.Running all your tests with every integration to main is not often the best solution.

You can have different suites of "regression packs" for the different parts of the application and only run the set that is needed.

This is nicely achieved by tagging different automated tests for various purposes. You can always mark automated tests as CI, nightly, hourly, pre-release etc if that works and run them accordingly.