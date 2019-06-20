---
layout: post
title: "5 Reasons Why Automated Tests Fail to Find Regression Bugs"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

It is widely believed that the purpose of automated tests is not to find new defects but rather find regression bugs as new features are developed. But even so, there are many occasions where regression bugs slip through that end up in production and really should have been caught by the automated regression tests.

Let's examine the reasons why automated tests failed to find the regression bugs:

##### 1 - The Scenario Was Not Though Of

Automated Tests are as good as the person who designed the tests. Automated Tests are a set of instructions that are executed against the target application. First, test analysts design test cases and come up with a list of scenarios. The scenarios are then scripted in a programming language to execute the scenarios automatically. Therefore, if a particular scenario was not thought of, it wouldn't have been scripted to run as automated test.

##### 2 - The Scenario Was Thought Of But Was Not Scripted

It takes time to automate tests. Depending on the complexity of the tests, test engineers coding skills, flexibility of test automation tools and frameworks, some tests take a long time to automate and hence miss the chance to find regression bugs as new features are developed.

##### 3 - There is a Bug in the Test Code Itself

There are situations where the automated tests do not really run against the tester's intentions or assumptions. In other words the automation engineers made a mistake in coding the tests or did not insert verification points in correct places.

##### 4 - The Automated Tests Couldn't Execute due to Environment Issues

This is particularly true when running System Tests via application UI, e.g. launching the application in browser. In such cases there are many dependencies on other applications, 3rd party or downstream systems, and if any of these are down or not responding or respond intermittently, the automated tests could not execute successfully and hence could not verify correctness of a particular test.

##### 5 - Poor Analysis of Test Reports

After automated tests have executed, when there are failed tests, analysis is required to see the reason for the failed cases. This can take quite some time to analyze all the failed cases (many of which can be false positive). The analysis part is normally done manually and if the analysis is not done correctly, there could be genuine failures that are overlooked or masked by other issues.

Can you think of other issues why automated tests miss defects?