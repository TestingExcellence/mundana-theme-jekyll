---
layout: post
title: "Regression Testing Best Practices"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Regression Testing Best Practices

<span style="font-size: 1em;">Maintenance of Regression Testing can be a very daunting exercise. These Regression Testing Best Practices and tips can help you create maintainable and useful regression pack.</span>

It is a common practice that when a defect is fixed, two forms of testing are done on the fixed code. The first is confirmation testing to verify that the fix has actually fixed the defect and the second is regression testing to ensure that the fix hasn't broken existing functionality.

It is important to note that the same principle applies when a new feature or functionality is added to the existing application. In the case of new functionality being added, tests can verify that the new features work as per the requirement and design specifications while regression testing can show that the new code hasn't broken any existing functionality.

It is possible that a new version of the application will have fixed previously reported defects as well as having new functionality. For the ‘fixes’ we would normally have a set of Defect Test Scripts (DTS) which are run to confirm the fixes, while for the new functionalities we would have a set of Release Specific Test Scripts that test the Change Control Notices (CCNs).

Overtime, as the software application becomes bigger and bigger in terms of new functionality and more components added, a regression pack, which is a bank of test cases, is developed to be run as each new version of the application is released.

### **Selecting Tests for Regression Testing**

As explained earlier, for each new release of software application, three sets of test suites are executed; Regression Tests, Release Specific Tests and Defect Test Scripts. Choosing test cases for regression packs is not a trivial exercise. Careful thoughts and attention need to be paid on choosing the sets of tests to include in the regression packs.

One would expect that as each new test case written for Release Specific Tests, they will become part of the regression pack to be executed after the next version of the code is arrived. So, in other words, the regression pack becomes bigger and bigger as more and more new versions of the code is developed.

If we **[automate regression testing](http://www.testingexcellence.com/test-automation-tips-best-practices/)**, this should not be a problem, but for a manual execution of large regression packs, this can cause time constraints and the new functionalities may not be tested due to lack of time.

These regression packs often contain tests that cover the core functionality that will stay the same throughout the evolution of the application. Having said that, some of the old test cases may not be applicable anymore as those functionalities may have been removed and replaced by new functionality. Therefore, the regression test packs need to be updated regularly to reflect changes to the application.

The regression packs are a combination of scripted tests that have been derived from the requirement specifications for previous versions of the software as well as random or ad-hoc tests.

A regression test pack should, at a minimum, cover the basic workflow of typical use case scenarios.

“Most Important Tests” i.e. tests which are important to the application domain should always be included in the regression packs. For example, a banking application should contain tests which exercise the application’s security robustness while a web application for a high traffic website should most definitely contain performance related test cases.

Successful test cases, i.e. tests which have revealed defects in the previous versions of the application are also a good candidate to be included in the regression packs.

### **Automated Regression Testing**

Where possible, regression tests must be automated. Running the same tests over and over again, with the same variables and conditions would not yield any new defects. Repetitive work causes a loss of interest and a lack of concentration for the person executing the tests who may potentially miss any new defects while executing the regression tests.

Also another advantage of automating the regression tests is that more test cases can be added to the regression packs without much impact on the time. An automated regression pack can be run overnight or in parallel with the manual tests and would free up the resource.