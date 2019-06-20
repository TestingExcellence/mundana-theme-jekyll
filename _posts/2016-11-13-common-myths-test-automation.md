---
layout: post
title: "Common Myths of Test Automation"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

![myths-of-test-automation](http://69.164.212.71/wp-content/uploads/2014/08/myths-of-test-automation.jpg)

It is not difficult to imagine the benefits of having automated testing alongside product development – faster releases, increased test coverage, frequent test execution, faster feedback to the development team, just to name a few, yet many organizations have not made the move or are resistant in investing in test automation.

In this article, we shall examine some of the most common myths of test automation and how these prevent organizations from succeeding in test automation.

### Setting Realistic Expectations

Possibly the most difficult and challenging aspect of any test automation endeavor is to understand the limitations of automated testing and setting realistic goals and expectations to avoid disappointments. With that in mind, let’s see some of the most common misunderstandings and myths about test automation:

### Automated Testing is Better than Manual Testing

Referring to Michael Bolton’s blog post “**[Testing vs. Checking](http://www.developsense.com/blog/2009/08/testing-vs-checking/ "checking vs testing")**”, automated testing is not really testing. It is checking of facts. When we have an understanding of the system, we can enforce that understanding in forms of checks and then by running the automated checks, we confirm our understanding. Testing, on the other hand, is an investigation exercise where we aim to obtain new information about the system under test through exploration.

Testing requires a human to make a sound judgment on the usability of the system. We can spot anomalies when we were not anticipating. We should not be lenient towards one or the other, as both methods are required to get insight into the quality of the application.

### Achieving 100% Automated Testing

Just as there is no practical way of achieving 100% test coverage (due to endless possible permutations), the same applies to test automation. We can increase test coverage by running automated tests with more data, more configurations, covering a whole variety of operating systems, browsers, but achieving 100% is still an unrealistic goal. When it comes to automated testing, more tests do not necessarily mean better quality or better confidence. It all depends on how good a test is designed. Rather than aiming for full coverage instead, focus on the most important area of functionality which is crucial to the business.

### Quick ROI

When implementing a test automation solution, there are other interrelated development activities than just scripting test cases. Normally a framework needs to be developed that can support bespoke operations which are useful and meaningful for the business, such as test case selection, reporting, data-driven, etc.

The development of the framework is a project on its own and requires skilled developers and takes time to build. Even when a fully functional framework is in place, scripting automated checks initially takes longer than executing the same test manually. Therefore when we require quick feedback on the new feature that’s just developed, checking it manually is usually quicker than automating the test. However, the ROI is returned in the long run when we need to execute the same tests at regular intervals.

### Higher Rate of Defect Detection through Automated Checks

Although many of the vendor-supplied and home-brewed test automation solutions are very sophisticated and highly capable in performing complex operations, they will never be able to compete with the intelligence of a human tester who can spot unexpected anomalies in the application while exploring or executing a set of scripted tests against the system under test. Ironically, people expect automated testing to find lots of bugs because of allegedly increased test coverage, but in reality, this is not the case.

True, automated tests are good at catching regression issues – after a new feature has been added to existing code base, we need to ensure that we haven’t broken current functionality and we need that information fast – but, the number of regression issues, in most cases, tends to be far less than new functionality that’s being developed.

Another point to bear in mind is that the automated checks only check what they have been programmed to check by the person who wrote the script. The scripts are as good as the person who wrote them. All automated checks could happily pass but major flaws can go unnoticed which can give a false impression of the quality of the product. In essence, checking can prove the existence of defects, but it cannot prove their absence.

### We Only Require Unit Test Automation

So, if the likelihood of finding defects is greater in testing new features, why aren’t we running our automated tests against the new functionality as it is being developed? Well, this is somewhat the case for teams that practice **[TDD](http://en.wikipedia.org/wiki/Test-driven_development "Test Driven Development")**.

The developers write a unit test first, watch it fail and then write enough code to get the unit test pass and the cycle is repeated until the intended functionality is delivered. In essence, these automated unit tests are checking new functionality and over time they form the unit regression pack which is executed repeatedly as new functionality is delivered.

But, there is a caveat to this. While TDD is highly encouraged and is a strong development practice in building quality from the grounds up, unit tests are only good at finding programmer errors, not failures. There is a much larger aspect of testing that happens when all the components are tied together and form a system.

In fact, many organizations have the majority of their automated checks at the system UI layer. However, scripting automated checks for the UI or system, while the features are being developed is at best a daunting task, as the new functionality tends to be volatile (subject to many changes) during development. Also, the expected functionality might not be known until later, so spending time automating a changing functionality is not encouraged.

### We only Require System UI Automation

There are values in running automated checks at the UI and system level. We get to see what the user experiences when interacting with the application; we can test end-to-end flows and 3<sup>rd</sup> party integration when we could not test otherwise; we can also demo the tests to clients and end-users so they can get a feel of test coverage. However, relying solely on the automated checks at the UI layer has its own problems.

UI is constantly changing to enhance visual design and usability and having automated checks failing due to the UI changes and not changes in the functionality can give a false impression of the state of the application.

UI automated checks are also much slower in the speed of execution than at unit or API layer and because of this, the feedback loop to the team is slow. It might take a few hours before a defect is spotted and reported back to the developers. And when something does go wrong, the root cause analysis takes longer because it is not easily apparent where the bug is.

Understanding the context of each test and at which layer the test should be automated is important. Test automation should be part of the development activity, so the whole team is responsible for test automation, with developers writing executing unit tests, Software Developers in Test writing executing and maintaining acceptance tests at API and/or UI.

### Losing Faith and Trust in Test Automation

This last one is not a myth about test automation, but a side effect when test automation goes wrong. You spend many hours developing a perfect test automation solution, using the best tools and best practices, but if the automated checks do not help the team it is worthless.

If the team has no visibility or knowledge on what is automated and executing, they either release with fear of unknown or duplicate their regression testing efforts. If the automated checks are flaky, slow, give intermittent results then it can confuse the team more than providing a safety net and a confidence booster.

Don’t be afraid of removing automated checks that are always failing or give inconsistent results. Instead, aim for a clean and reliable suite of tests that can give correct indications of the health of the application.

### Conclusion

Test Automation is a long term investment. It will take time and expertise in developing and maintaining test automation frameworks and automated scripts. Test automation is not a one-off effort where you deliver a solution and let it run. It needs constant monitoring and updating.

Rather than aiming to replace manual QAs or expecting the automated checks to find lots of defects, we should instead embrace the advantages it brings to the team, such as liberating QA’s time for more exploratory testing where chances of revealing defects is maximized, or using automated scripts to create test data that can be used for manual testing.

Understanding the limitations and setting realistic expectations is important in overcoming these myths of test automation.

**Related:**

*   **[Why is it so hard to hire SDETs?](https://www.testingexcellence.com/sdet-hiring-software-developers-in-test/)**
*   **[Modern QA - Problems with test automation](https://www.testingexcellence.com/problems-test-automation-modern-qa/)**
*   [**How to choose which tests to automate?**](https://www.testingexcellence.com/choose-tests-automate/)