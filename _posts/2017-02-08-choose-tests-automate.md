---
layout: post
title: "TestLodge - a Test Case Management Tool"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

How do you choose which tests to automate and which tests to leave for manual testing?

Before you start automating a test, you need to see what benefits you get by automating the test after you factor in the time, effort and resource invested in test automation.

Below are some factors to consider to help identify which manual tests should or should not be automated. As the old saying goes, just because you can automate something doesn’t necessarily mean that you should.

Here are some guidelines to help identify good candidates for test automation:

## **Tests that should be automated:**

*   Business critical paths - the features or user flows that if they fail, cause a considerable damage to the business.
*   Tests that need to be run against every build/release of the application, such as smoke test, sanity test and regression test.
*   Tests that need to run against multiple configurations — different OS & Browser combinations.
*   Tests that execute the same workflow but use different data for its inputs for each test run e.g. data-driven.
*   Tests that involve inputting large volumes of data, such as filling up very long forms.
*   Tests that can be used for performance testing, like stress and load tests.
*   Tests that take a long time to perform and may need to be run during breaks or overnight.
*   Tests during which images must be captured to prove that the application behaved as expected, or to check that a multitude of web pages looks the same on multiple browsers.

_Generally speaking, the more repetitive the test run, the better it is for automation._

_Also remember that tests are not the only candidates for automation. **Tasks** such as setting up or creating test data for manual exploratory testing are also great candidates for automation._

## **Tests that should not be automated:**

*   Tests that you will only run only once. The only exception to this rule is that if you want to execute a test with a very large set of data, even if it's only once, then it makes sense to automate it.
*   User experience tests for usability (tests that require a user to respond as to how easy the app is to use).
*   Tests that need to be run ASAP. Usually, a new feature which is developed requires a quick feedback so testing it manually at first
*   Tests that require ad hoc/random testing based on domain knowledge/expertise - Exploratory Testing.
*   Intermittent tests. Tests without predictable results cause more noise that value. To get the best value out of automation the tests must produce predictable and reliable results in order to produce pass and fail conditions.
*   Tests that require visual confirmation, however, we can capture page images during automated testing and then have a manual check of the images.
*   Test that cannot be 100% automated should not be automated at all, unless doing so will save a considerable amount of time.

Can you think of any other candidates for automating (or not automating) a test?