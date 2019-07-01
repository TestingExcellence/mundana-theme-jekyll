---
layout: post
title: "Fundamental Test Process"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/fundamental-test-process.png
---

## What is the Fundamental Test Process?

In order to gain the most of the testing activities, a defined process must be followed. But before any testing activity begins, much of the effort should be spent on producing a good test plan. A good test plan goes a long way in ensuring that the testing activities are adhered to what the testing is trying to achieve.

This is a test process that is documented in the standard BS7925-2 Software Component Testing. It therefore relates most closely to component testing but is considered general enough to apply to all levels of testing (i.e. component, integration in the small, system, integration in the large, and acceptance testing).

It is perhaps most applicable to a fairly formal testing environment (such as mission critical). Most commercial organisations have less rigorous testing processes. However, any testing effort can use these steps in some form.

The Fundamental Test Process comprises five activities:

* Planning
* Specification
* Execution
* Recording
* Checking for Test Completion

The test process always begins with Test Planning and ends with Checking for Test Completion.

Any and all of the activities may be repeated (or at least revisited) since a number of iterations may be required before the completion criteria defined during the Test Planning activity are met.

One activity does not have to be finished before another is started; later activities for one test case may occur before earlier activities for another. During this cycle of activities, all the while, the progress of activities need to be monitored and controlled so that we stay in line with the test plan.

The five activities are described in more detail below.

## **1\. Test Planning**

The basic philosophy is to plan well. All good testing is based upon good test planning. There should already be an overall test strategy and possibly a project test plan in place. This Test Planning activity produces a test plan specific to a level of testing (e.g. system testing).

These test level specific test plans should state how the test strategy and project test plan apply to that level of testing and state any exceptions to them.

When producing a test plan, clearly define the scope of the testing and state all the assumptions being made. Identify any other software required before testing can commence (e.g. stubs & drivers, word processor, spreadsheet package or other 3rd party software) and state the completion criteria to be used to determine when this level of testing is complete.

Example completion criteria are (some are better than others and using a combination of criteria is usually better than using just one):

* 100% statement coverage;
* 100% requirement coverage;
* all screens I dialogue boxes I error messages seen;
* 100% of test cases have been run;
* 100% of high severity faults fixed;
* 80% of low & medium severity faults fixed;
* maximum of 50 known faults remain;
* maximum of 10 high severity faults predicted;
* time has run out;
* testing budget is used up.

## **2\. Test Specification**

The fundamental test process describes this activity as designing the test cases using the techniques selected during planning. For each test case, specify its objective, the initial state of the software, the input sequence and the expected outcome.

Since this is a little vague we have broken down the Test Specification activity into three distinct tasks to provide a more helpful explanation. (Note that this more detailed explanation of the Test Specification is not a part of the Foundation syllabus.)

Specification can be considered as three separate tasks:

* Identify test conditions
* Design test cases - determine ‘how’ the identified test conditions are going to be exercised;
* Build test cases - implementation of the test cases (scripts, data, etc.).

## **3\. Test Execution**

The purpose of this activity is to execute all of the test cases (though not necessarily all in one go). This can be done either manually or with the use of a test execution automation tool (providing the test cases have been designed and built as automated test cases in the previous stage).

The order in which the test cases are executed is significant. The most important test cases should be executed first. In general, the most important test cases are the ones that are most likely to find the most serious faults but may also be those that concentrate on the most important parts of the system.

There are a few situations in which we may not wish to execute all of the test cases. When testing just fault fixes we may select a subset of test cases that focus on the fix and any likely impacted areas (most likely all the test cases will have been run in a previous test effort).

If too many faults are found by the first few tests we may decide that it is not worth executing the rest of them (at least until the faults found so far have been fixed). In practice time pressures may mean that there is time to execute only a subset of the specified test cases. In this case it is particularly important to have prioritised the test cases to ensure that at least the most important ones are executed.

If any other ideas for test conditions or test cases occur they should be documented where they can be considered for inclusion.

## **4\. Recording**

In practice the Test Recording activity is done in parallel with Test Execution. To start with we need to record the versions of the software under test and the test specification being used. Then for each test case we should record the actual outcome and the test coverage levels achieved for those measures specified as test completion criteria in the test plan.

In this way we will be marking off our progress. The test record is also referred to as the “test log”, but “test record” is the terminology in the syllabus. Note that this has nothing to do with the recording or capturing of test inputs that some test tools perform!

The actual outcome should be compared against the expected outcome and any discrepancy found logged and analysed in order to establish where the fault lies. It may be that the test case was not executed correctly in which case it should be repeated. The fault may lie in the environment set-up or be the result of using the wrong version of software under test.

The fault may also lie in the specification of the test case: for example, the expected outcome could be wrong. Of course the fault may also be in the software under test! In these cases the fault should be fixed and the test case executed again.

The records made should be detailed enough to provide an unambiguous account of the testing carried out. They may be used to establish that the testing was carried out according to the plan.

## **5\. Checking for Completion**

This activity has the purpose of checking the records against the completion criteria specified in the test plan. If these criteria are not met, it will be necessary to go back to the specification stage to specify more test cases to meet the completion criteria. There are many different types of coverage measure and different coverage measures apply to different levels of testing.

## **Comparison of the five activities**

Comparing these five activities of the Fundamental Test Process it is easy to see that the first two activities (Test Planning and Test Specification) are intellectually challenging. Planning how much testing to do, determining appropriate completion criteria, etc. requires careful analysis and thought.

Similarly, specifying test cases (identifying the most important test conditions and designing good test cases) requires a good understanding of all the issues involved and skill in balancing them. It is these intellectual tasks that govern the quality of test cases.

The next two activities (Test Execution and Test Recording) involve predominantly clerical tasks. Furthermore, executing and recording are activities that are repeated many times whereas the first two activities, Test Planning and Test Specification are performed only once (they may be revisited if the completion criteria are not met the first time around but they are not repeated from scratch).

The Test Execution and Test Recording activities can be largely automated and there are significant benefits in doing so.

