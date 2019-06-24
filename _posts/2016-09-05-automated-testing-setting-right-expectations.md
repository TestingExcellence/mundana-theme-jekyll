---
layout: post
title: "Automated Testing – Setting the Right Expectations"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

How to set the right expectations in test automation so that you get the most out of your automated tests and you don't get disappointed by your efforts. This post looks at the myths and realities on automated testing.

I want everything to run at the click of a button – Does this statement sound familiar? Well, am sure most of the automation test engineers can relate to this statement.  Everyone loves automation.  Its fast, reliable, makes optimal use of the resources by running overnight and doesn’t need human intervention. For management, they have finally found a solution that reduces testing effort and is more efficient when compared to a manual tester.

But does it really happen that way? Not really. Here are some of the key points to consider when automating an application and what to expect as an output.

**[Common Myths of Test Automation](http://www.testingexcellence.com/common-myths-test-automation/)**

**<u>Myth #1:</u>** There is no need to invest time in the studying the existing framework or the test cases when automating a new application.

**<u>Reality:</u>** Automation takes time - Automation when used in the right way and with the right set of expectations can help the organization in a big way. But for that to happen, we need to invest time, money and most importantly patience.  Building automated scripts requires testers to understand the domain, the test cases to be automated and then choosing a framework accordingly. It is like setting your foundation strong.

Automation is similar to application development which needs to be tested as well.  Scripts developed through automation must be tested thoroughly with all set of possible test data as well as negative testing.  Not doing a proper testing and handing over a partly tested tool results in failure of automated scripts during execution, thus eventually leading to losing confidence in the tool.

**<u>Solution:</u>**

*   Spend initial time and effort in understanding the application to be automated. When setting the timeline for automating the scripts, one need to factor in the time needed for requirement gathering, design, coding and testing.

*   To do a proper feasibility study in order to avoid rework during actual implementation.

*   **Discuss with the manual team/developers on what are the key areas to be automated** and then decide on the suitable framework and automation tools needed for developing it.

**[Test Automation Interview Questions and Answers](http://www.testingexcellence.com/test-automation-interview-questions-and-answers/)**

<span style="text-decoration: underline;">**Myth #2:**</span> Automation can replace manual testers.

<span style="text-decoration: underline;">**Reality:**</span> Once the scripts are developed,  the common misconception is that we can immediately replace manual testers doing this job. This is only partly true. Automation is a program written to test the flow of the system. Even a small bug might go unnoticed during execution if it’s not programmed to look for it, but a manual tester might have easily detected it during his/her execution.  Also, in most cases the application under goes changes frequently which might results in automation missing out on the coverage and also in the failure of the scripts. In such a case, a manual tester is needed to keep testing the changes while the scripts are being updated.

Even though automation might take over some of the testing done by manual testers, one needs to spend time in analyzing the test results and make sure that the automation has not missed out on any critical issues.

<span style="text-decoration: underline;">**Solution:**</span>

*   To think that the machines will take over testing is an unrealistic expectation. Just like robots cannot take over the humans, the same applies for testing as well. We need a human brain that can analyze the test results rather than just relying on a program.

*   For applications that are frequently changing, **automation results must be used only as a reference and not as a replacement for manual tester.**

*   Automation must be replaced for manual testers only in those applications which are static, independent of other modules and needs to be checked during regression testing.

**<span style="text-decoration: underline;">Myth #3:</span>** Automation gives faster execution when compared to manual testing

**<span style="text-decoration: underline;">Reality:</span>** <span style="font-family: Calibri; font-size: medium;"> </span>Yes, automation runs faster when compared to manual testing, but it some cases it takes more time in identifying objects when the properties involved for the object are not straight forward. For example, if there are number of headers in a page, and if the properties of those objects are similar, then automation might take more time to identify those headers than a manual tester who will be doing an eyeball check for its existence.

Also in situations which involve preparation of data beforehand, a manual tester might be faster in doing it as they know which data to choose/reuse for executing these test cases. Whereas in automated testing, we need to write the logic to prepare /search the test data which might increase the execution speed.

In applications which involve communicating with multiple systems, the executing time is same as a manual testing due to the dependency on external system. Automation also requires the same wait time as in manual testing.

**<span style="text-decoration: underline;">Solution:</span>**

*   During requirement analysis, take into account the time needed for execution, the complexity of the system involved and also number of external system involved. Do a feasibility study on the time taken for execution and the effort incurred in automating an application.

*   Give a clear visibility to the stakeholders on what to expect in automating such an application and the effort involved.

*   **The effort estimation must be calculated after taking into factors such as complexity of the objects, flow of the system, time needed for building the scripts and lastly the execution time of automated scripts versus manual testing.**

**[Test Automation Tips and Best Practices](http://www.testingexcellence.com/test-automation-tips-best-practices/)**

<span style="text-decoration: underline;">**Myth #4:**</span> End users of automated scripts just need to click one button to execute the test cases

**<span style="text-decoration: underline;">Reality:</span>** When the automating is completed and handed over to the end users (typically manual testers, developers for doing unit testing), they assume that the scripts can be executed without any changes in test data. It is a rare situation that we come across an application where we just have to execute the scripts without any test data.

Hence it comes as a rude shock to them when they have to spend their time in preparing the test cases for execution.  This is because they consider executing scripts as an add-on job and not as a primary one. Executing scripts requires end users to understand the flow of test case, keywords used and also what data needs to be given.

**<span style="text-decoration: underline;">Solution:</span>**

*   Have periodic discussion with the end users during the scripting stage informing them about the test case flow, test data etc. so as to avoid any wrong expectation.

*   **Take into account which data are used as input and which can be constant. By doing so, you will minimize the number of data inputs needed for each test case.**

**[Test Automation Advantages and Disadvantages](http://www.testingexcellence.com/test-automation-advantages-and-disadvantages/)**

**<span style="text-decoration: underline;">Myth  #5:</span>** Expecting 100% automation execution during test execution without any failures.

**<span style="text-decoration: underline;">Reality:</span>** Automation is like software development which again has its own set of issues and limitations. To execute all the scripts without failure is practically impossible. There can be number of reasons why scripts fail and not all may be due to automation. It can due to slowness in the system, environment down, data issues, changes in UI and so on.  This is especially true in case of application which is constantly changing.

**<span style="text-decoration: underline;">Solution:</span>**

*   It is important for the end users to understand the reason behind the failure and do a bit of troubleshooting before passing it to the automation team. By doing so, the end users can familiarize themselves with the flow of the execution and the inputs needed for it rather than depending on automation team  to investigate for every single issue.

*   Automation must be done only for stable systems or which the development is completed.

*   Make sure all the test cases are updated on the latest test data and there is no external factor affecting the system during the execution of the scripts.

**<u>Conclusion</u>**

Automation testing can deliver benefits in the long term but may not provide immediate results as the scripts need to be constantly updated and maintained. Instead of thinking of automation as a magic tool in meeting your deadlines for execution, we must understand its limitations and use it accordingly to get the desired output.

**[Test Automation Strategy for Agile Projects](http://www.testingexcellence.com/test-automation-strategy-for-agile-projects/)**