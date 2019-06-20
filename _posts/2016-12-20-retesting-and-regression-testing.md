---
layout: post
title: "Retesting and Regression Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Difference Between Retesting and Regression Testing

### ![retesting-regression-testing](http://69.164.212.71/wp-content/uploads/2008/11/retesting-regression-testing.jpg)

### **What is Retesting**

When a test fails and we determine the cause of the failure is a software fault, the fault is reported, we can expect a new version of the software that has had the fault fixed. In this case we will need to execute the test again to confirm that the fault has indeed been fixed. This is known as re-testing. Some people also refer to this as confirmation testing.

When retesting, it is important to ensure that the test is executed in exactly the same way as it was the first time, using the same inputs, data and environment. If the test now passes does this mean that the software is now correct? Well, we now know that at least one part of the software is correct — where the fault was. But this is not enough. The fix may have introduced a different fault elsewhere in the software. The way to detect these “unexpected side-effects” of fixes is to do regression testing.

### **What is Regression Testing**

Like retesting, regression testing involves executing test cases that have been executed before. The difference is that for regression testing the test cases probably passed the last time they were executed (compare this with the test cases executed when re-testing - they failed the last time).

In other words, we are executing tests with the intent of checking that the system has not regressed (that is, it does not now have more faults in it as a result of some change). More specifically, the purpose of regression testing is to verify that modifications in the software or the environment have not caused unintended adverse side effects and that the system still meets it requirements.

It is common for organizations to have what is usually called a regression test suite or regression test pack. This is a set of test cases that is specifically used for regression testing. They are designed to collectively exercise most functions (certainly the most important ones) in a system but not test any one in detail. It is appropriate to have a regression test suite at every level of testing (component testing, integration testing, system testing, etc.).

All of the test cases in a regression test suite would be executed every time a new version of software is produced and this makes them ideal candidates for automation. If the regression test suite is very large it may be more appropriate to select a subset for execution.

Regression tests are executed whenever the software changes, either as a result of fault fixes or new or changed functionality. It is also a good idea to execute them when some aspect of the environment changes, for example when a new version of a database management system is introduced or a new version of a source code compiler is used.

Maintenance of a regression test suite should be carried out so it evolves over time in line with the software. As new functionality is added to a system new regression tests should be added and as old functionality is changed or removed so too should regression tests be changed or removed. As new tests are added a regression test suite may become very large. If all the tests have to be executed manually it may not be possible to execute them all every time the regression suite is used. In this case a subset of the test cases has to be chosen.

This selection should be made in light of the latest changes that have been made to the software. Sometimes a regression test suite of automated tests can become so large that it is not always possible to execute them all. It may be possible and desirable to eliminate some test cases from a large regression test suite for example if they are repetitive (tests which exercise the same conditions) or can be combined (if they are always run together). Another approach is to eliminate test cases that have not found a fault for a long time (though this approach should be used with some care!).