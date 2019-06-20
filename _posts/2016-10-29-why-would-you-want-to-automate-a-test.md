---
layout: post
title: "Why Would You Want To Automate a Test?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

[caption id="attachment_10128" align="aligncenter" width="750"]![why-automate-testing](http://69.164.212.71/wp-content/uploads/2015/03/why-automate-testing.jpg) why-automate-testing[/caption]

Why would you automate a test? What benefits do we get with test automation?

Quite often when people get involved in automated testing, their main focus shifts from designing good tests to ensuring that the automated code can actually execute and run the test.

During the sprint when team members are under pressure to deliver the stories in a limited time frame, there is usually not enough time to test all the planned scenarios, let alone writing automated test scripts to test the new functionality.

We can get bogged down with the details of the work, coding, reviewing, executing and forget about the main reason _**why**_ we actually automate a test!

### **Why do we automate a test?**

This is one of the questions I ask when I interview candidates for a Test Automation role and to my surprise, many candidates seem to miss the main and most important reason to automate a test. Some of the answers I get from candidates are quite credible, but still not the answer that I'm looking for. Some of the answers I get to the above question are:

### Increase Test Coverage

This answer is quite valid, but how do we define coverage? If we have 100 tests, how can we measure the percentage coverage?

With a mature test automation practice in place, you could be running hundreds of tests in a relatively short period of time.

Because of this, we can create more test cases, more test scenarios and test with more input data for a given feature and thus gain more confidence that they system is working as expected.

However, in testing and especially test automation, more tests don't really mean better quality or more chance of finding bugs.

In a post by Martin Fowler, where he discuses **[Test Coverage](http://martinfowler.com/bliki/TestCoverage.html "Test Coverage")**, he mentions

> If you make a certain level of coverage a target, people will try to attain it. The trouble is that high coverage numbers are too easy to reach with low quality testing. At the most absurd level you have **[AssertionFreeTesting](http://martinfowler.com/bliki/AssertionFreeTesting.html)**. But even without that you get lots of tests looking for things that rarely go wrong distracting you from testing the things that really matter.

### Save Time

This answer is also true as you can spend valuable time doing interesting exploratory testing while the automated tests are running. However, for a brand new feature that has been developed, it could actually take longer to write automated scripts than to test the feature manually in the first instant.

So, it is important to note that to save time from automated tests, it requires an initial increased effort in scripting the automated tests, making sure they are code reviewed, and that there are no hiccups in the execution of automated tests.

### Find More Bugs

This answer worries me sometimes as I have never seen any metrics that suggests there were more bugs found by automation than manual / exploratory testing. Automated tests generally check for any regression in the system after new code has been implemented.

There is always more chance of finding bugs in new features than in existing functionality. Furthermore, there are other reasons [**why automated tests fail to find defects**.](http://www.testingexcellence.com/reasons-automated-tests-fail-to-find-regression-bugs/ "5 Reasons Why Automated Tests Fail to Find Regression Bugs")

### Replace Manual Testers

This is probably the worst answer I have heard in regards to why we automate a test. There is a clear distinction between what a manual tester does and what an automated test checks. Automated testing is not testing, it is checking of facts.

In order to be able to automate a test, we have to know the expected outcome so that we can check for the valid or invalid outcome. This is what gives us true or false, positive or negative, pass or fail.

Testing on the other hand is an investigation exercise, where we design and execute tests simultaneously. Many things can behave differently where only an observant human tester can notice.

Good manual testers will always be needed because of the different mindset and the ability to question the system.

### Improve Quality

Although automated tests are capable of giving us quick feedback and alert us about the health of an application, so that we can revert any code change that has broken the system, automated testing on its own does not improve quality. Just because we have a mature test automation in place does not guarantee that no bugs escape in to production.

We can improve quality by ensuring correct practices are followed from start to finish of a development cycle. Quality is not an afterthought; it should be baked in right from the beginning. It is not enough to rely on automated tests to get a picture of the quality of the product.

### **So, what is the main reason we automate a test?**

The short answer is _**repeatability. **_We automate a test because we need to execute the same tests over and over again. Would you want to automate a test if you were only going to run it once and forget about it? Of course not! The time and effort that you spend on automating the test, you could have executed it manually.

Now, by definition, we automate repeatable tests, i.e. regression tests, that we need to execute frequently.

So, next time, when you want to automate a test, take a step back and think how often are you likely to execute this test? Is it really worth the effort to automate the test?