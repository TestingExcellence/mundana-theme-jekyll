---
layout: post
title: "Test Automation Tips and Best Practices"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Top Tips for Test Automation

![automated-testing-best-practices-agile](http://69.164.212.71/wp-content/uploads/2014/04/automated-testing-best-practices-agile.png)

Automated Testing is an important testing activity during the software development lifecycle because it can provide quick feedback to the team when a new feature has been developed. It also removes the burden from QA to repeatedly run regression tests which saves time for QA to focus on other testing activities.

Test Automation, when done right, can be very beneficial to the team. The tips below will help you get the most value from your automated testing process and activity and highlights pitfalls to avoid when starting to automate your tests.

### **Manual vs Automated - Testing vs Checking**

Avoid comparison between manual and automated testing. They are both needed as each serves a different purpose. Automated tests are a set of instructions written by a person to do a specific task. Every time an automated test is run, it will follow exactly the same steps as instructed and only check for things that are being asked to check.

On the other hand, during manual testing, tester's brain is engaged and can spot other failures in the system. The test steps may not necessarily be the same every time, as the tester can alter the flows during the testing; this is especially true in case of exploratory testing.

### **Automate Regression Tests**

**[The main reason you want to automate a test](http://www.testingexcellence.com/why-would-you-want-to-automate-a-test/ "Why Would You Want To Automate a Test?")** is that you want to execute the test repeatedly on every new release. If the test is required to be executed only once, then the effort to automate the test can outweigh the benefits.

Regression tests are required to be executed repeatedly as the software under test evolves. This can be very time consuming and a boring task for QA to have to run regression tests every day. Regression tests are good candidates for test automation.

### **Design Tests Before Automating Them**

It is always a good practice to create the test cases and scenarios before starting to automate the tests. It is the good test design that can help in identifying defects, automated tests only execute the test design.

The danger in jumping straight to automation is that you're only interested in making the script to work and usually only automate positive and happy flow scenarios rather than thinking about the other possible scenarios that can be tested.

Also, don't reduce the scope of testing just to make the test work or pass.

### **Remove Uncertainty from Automated Tests**

One of the key points of automated testing is the ability to give consistent results so that we can be certain that something has actually gone wrong when a test fails.

If an automated test passes in one run and fails in the next run, without any changes on the software under test, we cannot be certain if the failure is due to the application or due to other factors, such as test environment issues or problems in the test code itself.

When there are failures, we have to analyze the results to see what had gone wrong, and when we have lots of inconsistent or false positive results, it increases analysis time.

Don't be afraid to remove unstable tests from regression packs; instead, aim for consistent clean results that you can rely on.

### **Review Automated Tests for Validity**

You will be alarmed by the sheer number of automated tests that are outdated, just don't check for anything or are not checking the most important verifications!

This could be a symptom of jumping straight to automation without spending enough time beforehand planning on what needs to be done and designing good test scenarios.

Always have a colleague to review the automated tests for validity and sanity. Make sure tests are up to date.

### **Don't Automate Unstable Functionality**

As a new feature or functionality is being developed, many things can go wrong and even the feature may no longer be applicable because the business have changed their mind.

If you started automating tests as the feature was being developed, the tests need to be updated many times as the feature evolves and can be quite daunting trying to keep up with all the changes. And if the feature is no longer applicable, all that effort on test automation is wasted.

Therefore, it is always best to automate a feature once it has been stabilized and less subject to change.

### **Don't Expect Magic From Test Automation**

The primary reason for test automation is to free up QA time for interesting exploratory testing and to give confidence to the team that the application is still in good order as new changes are delivered.

**[Don't expect automation to find lots of bugs](http://www.testingexcellence.com/why-automated-tests-didnt-find-the-bug/)**. In fact, the number of bugs found by automation is always much less than manual and exploratory testing.

### **Don't Rely Solely on Automation - Beware of Passing Tests**

Automated regression tests can give a sense of confidence for the team because regression tests should still pass as new functionality is delivered.The team starts relying on the tests and having a good set of regression tests can act as a safety net.

However, note that not all tests are automated or can be automated, therefore always accompany automated tests with exploratory testing.

Sometimes a change in the software should fail a test; however, if all tests are passing that means the defect is missed and because there was no call to action, the defect went unnoticed.

### **Aim for Fast Feedback**

Quick feedback is one of the objectives of automated tests because developers are keen to know if what they have developed works and hasn't broken current functionality.

In order to get this quick feedback loop, the tests need to be automated at component or API layer without relying on the UI.

Tests run on UI are much slower and prone to error due to GUI changes. In other words, the functionality still works as expected but the tests fail due to changes in the UI. Therefore the tests can become unreliable.

### **Understand the Context**

Tests can be automated at any layer, Unit, API, Service, GUI. Each layer serves a different purpose for testing.  
Unit Tests ensure that the code works at the class level, that it compiles and the logic is as expected. Tests at this layer are more verification than validation.

API Tests or Integration Tests ensure a set of functions and classes can work together and data can be passed from one class to another.

GUI Tests on the other hand test user flows and journeys. Generally, we would not test for functionality from the UI. This should be done at lower layers.

The main purpose of UI tests is to ensure the whole system works as per some common user scenarios and use cases. Testing at this layer is more Validation rather than Verification

At UI level, we automate scenarios rather than stories.

### **Don't Automate Every Test**

100% Test Coverage is not possible since there can be millions of combinations. We always execute a subset of possible tests. The same principle applies to automated testing.

To create an automated script, it requires time and effort, and aiming for "Automating Every Test", we require a lot of resource and time, which in many cases is not possible.

Instead, use a Risk-based approach to determine which tests should be automated. To get the most value out of automation, only automate the most important business cases and scenarios.

Also, a high number of automated tests adds maintenance cost and difficult to maintain.

Another note to bear in mind is that not all tests can be automated. Some tests are very complex in nature and require many downstream system checking and can be inconsistent. In these cases, it is best to leave these checks for manual testing.

### **Use Test Techniques in Test Automation**

The test techniques that you learned in ISTQB, are not just for manual testing. They are also applicable to automated testing. Techniques such as Boundary Value Analysis, Equivalence Partitioning, State Transition Testing, Pairwise Testing can provide a lot of benefits in automated testing.

### **Don't Automate Chaos**

In order to get the most out of your automated testing, a good QA process should be in place. If the QA process is chaotic and we add automated testing to that chaos, all we get is faster chaos.

Try to answer questions like, What to automate, **[When to automate](http://www.testingexcellence.com/when-should-stories-be-automated/ "when should stories be automated")**, When to execute the automated tests, Who shall automate the tests, What tools should be used for test automation, etc...

These tips are gathered mostly from experience as an Automation Tester and some good practices followed by others.

Do you have any Test Automation Tips to be added to this list?