---
layout: post
title: "Continuous Testing - What Does it Mean?"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

## What is Continuous Testing?

In a world of Agile Development where frequent releases are the norm, how can we ensure that we release to production with no major bugs and keep the business functioning?

Continuous Testing is the answer - but what exactly is Continuous Testing and how do we go about attaining such a state in our development strategy?

In the **[Agile Test Strategy](http://www.testingexcellence.com/agile-test-strategy-example-template/)**, we based our model on two fundamental principles

*   **Defect Prevention rather than Defect Detection**
*   **Quick Feedback Loop**

Let's explore these two points and see how they are related to Continuous Testing.

If we assume that the end goal of software delivery is that of the Continuous Delivery model, then we cannot afford to make big mistakes.

Our aim is to be able to release software continuously and smoothly without having to go back and forth multiple times to fix issues.

We all know that the cost of fixing defects increases as we progress through the **[delivery pipeline](http://www.testingexcellence.com/delivery-pipeline-agile-project/)**. There will be a lot of time wasted investigating the issue(s) and trying to work out the root cause of a failure.

Therefore, it is essential to ensure that we build the _right product_ and _build it right _from the beginning.

This means that when we pick up a user story or a sub-task to work on in a sprint, we should have a clear understanding of its intended benefit(s). The story should be well groomed with all the **[acceptance criteria](http://www.testingexcellence.com/acceptance-criteria-vs-acceptance-tests/)** and everyone should have the same understanding of how the feature should behave.

We also need to have a quick feedback mechanism in place, so that if there are any issues with the new build, we get to know about it and fix it immediately. This is usually done via automated checks along the delivery pipeline.

One thing to bear in mind is that Continuous Testing is NOT about test automation.

## Continuous Testing in Agile

Let's break down the stages of developing a new feature and releasing it to production. We need this in order to see at which stage we need to test and what type of test is required.

**Story Grooming**

This is the first stage where defects can be introduced. As a minimum, we need to ensure **[user stories are testable](http://www.testingexcellence.com/definitive-guide-writing-good-agile-user-stories/)** and contain a good set of acceptance criteria. This is normally done via the Three Amigos (Dev, QA, PO) meeting where the details of the user stories are fleshed out.

**Design**

We can test the design/architecture and ask questions. Testing the design of the software is exploratory in nature. It can still be risk-based, as we use the risks as heuristics to focus our investigation.

As we question the design, it will help us uncover more information. Information that will help us refactor the design (or plan) to make it better. You don't want to build a feature and then later find out that it has serious performance issues!

**Branching**

When we start working on a new story, we typically create a new branch off the main master branch. This can get quite complex and easy to make serious mistakes when multiple developers create multiple branches and then all need to merge their branches to the master.

Watch out for any merge conflicts. When several developers work together to deliver a feature, there is a risk of merge conflicts. We can test our branching strategy to ensure we don't encounter any issues or merge conflicts.

**Code**

There are many ways we can check the code. TDD, pair programming, peer code reviews, unit tests are all activities with the aim of preventing defects getting into the system. Testing at this stage gives the highest ROI since unit tests are fast to execute and if there are any errors, they can be fixed immediately.

It is interesting to note that defects which are found later in the development pipeline, are open for debate and most of the time, the not so serious issues will either get accepted and forgotten about or placed in the backlog to be fixed in future sprints. However, at the coding stage, even a single failed unit test, will cause the build to fail, so it has to be fixed there and then to be able to continue.

**Build**

When a new build is created, first we can check whether it was successfully built and deployed to a testing or staging environment. Automated functional regression checks of existing functionality should be part of the build process to give us the confidence that things are still in good order.

**[Automated functional regression checks](http://www.testingexcellence.com/test-automation-tips-best-practices/)** of existing functionality should be part of the build process to give us the confidence that things are still in good order.

Integration testing, End-to-end testing and Exploratory testing of new features are all essential activities and all have different purposes.

Continuous testing and Continuous Improvement go hand-in-hand. With the above activities, we start to understand the product better, to design better test cases and to learn about the risky areas of the application so that we can inform of potential risk in future developments,

**Release**

Release to production should be smooth and no new surprises should be seen, however, we can verify the release by running some sanity checks to ensure we actually released what we intended to release. Not only that, we should also monitor to see if there are any alerts in the monitoring tools and if there are any new errors reported since the release.

**Conclusion**

As you can see, in order to move fast and deliver continuously, we need to test alongside development. We need to ensure that we are building the right product from the onset. It is never enough to retrospectively test a finished product as bugs found later in the pipeline can be very costly to fix. Instead, we should embrace continuous testing.

Continuous testing gives us confidence that at each stage, we are looking good. Testing at each stage serves a different purpose, so we can get a holistic view of the quality of the product.