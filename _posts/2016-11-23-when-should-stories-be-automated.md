---
layout: post
title: "When to Automate User Stories"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

If you have worked in an agile environment as a QA role, most probably you would have come across some sort of test automation. I don't mean unit test automation which is typically a developer centric activity, but functional acceptance test automation which is normally done by QA or the new fancy role of Software Developer in Test.

First, lets take a look at some criteria and reasons for having test automation which should answer the question of "Why Tests Should/Should Not be Automated"

##### Repeatability:

the automated tests should be repeatable and the output should be consistent in each run so that developers can rely on the outcome of the tests. This also means that we would not normally automate a test if it's going to be run only once; the only exception to this is if you are running a test against a very large number of data, such as checking a link redirection script with many links.

##### Reliability:

the automated tests should really be checking verifications correctly and be able to determine actual results against valid expected results. This also means that if the results cannot be determined easily or automated tests are subject to environment issues which can cause false positives in the test results, then the tests cannot be reliable.

##### Time:

the automated tests should also save us time. If a simple test takes 10 minutes to complete but the same result can be determined in 1 minute manually, then it is best to not automate such tests.

##### Safety net:

the automated tests should provide a safety net for developers so that any deviation from a good working code, as a result of changes to the code base, is quickly highlighted and reported to the developers.

##### When Should Stories be Automated?

In a typical sprint, say there are 7 stories that are committed to a sprint out of which 5 are good candidates to be automated based on the above criteria. But when is the best time to automate these stories? Should we write the automated tests as the features are being developed? Should we wait till a feature is developed and then write the automated tests? Shall we wait till the end of the sprint and then automate the stories?

In some cases when stories are bug fixes or slight modification or enhancement to an existing feature, then it makes all the sense to write the automated tests as the feature is being modified by developers. There may even be an existing automated test for the feature being modified in which you just need to tweak the script to accommodate the new changes.

In other cases, when the story is about implementing a new feature to the application, how do we know what the end product will look like to be able to write tests in advance? Here, I'm not talking about feature files which describe the acceptance tests in advance, but the actual fixtures or selenium tests (the implementation of tests) that run against the delivered code.

The bottom line is - any test which is going to be done more than once should be automated. And which tests are we going to execute more than once? Regression Tests. And what are regression tests? Tests that determine whether the application has regressed in functionality as a result of the new modifications and features.

But, you can only write good automated regression tests against a system which is stable, well understood and deterministic in terms of behaviour with known inputs and outputs.

The problem with trying to write automated tests against a feature as it is being developed is you could potentially spend a long time and a lot of effort writing automated scripts against something which is volatile and subject to constant change during the sprint. Moreover, how many times have we seen a story being committed to a sprint and then later being pulled out of sprint? Then we have wasted time scripting something which didn't make it into the system.

Some organizations even impose a strict rule that a story is not "done" until it is fully automated! Are we going to stop an important feature to be released because the QA didn't or couldn't provide automation in time due to various reasons? Or a story is not "done" because we don't have an automated script to check the existence of a button on a page. Seriously?

The best purpose of automation testing is regression testing and regression tests are always run against a known state and deterministic system to be able to detect changes in the baseline, and to get a meaningful result from an automated test, is only when the test has run and passed manually at least once, so you can compare the results of the automated run against the manual execution.

By this definition, the stories should be automated (the implementation) within sprint and only when the feature is fully verified manually. Once the story is complete and it is verified manually first, then it is a reliable feature and a stable system which you can then design and write automate tests against. Once the automated test is implemented, it is then added to the regression test suite to monitor and detect regression defects as next features are being developed.