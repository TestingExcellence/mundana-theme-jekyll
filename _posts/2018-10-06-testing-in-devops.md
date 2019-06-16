---
layout: post
title: "Testing in DevOps World"
author: Amir
categories: [ software testing ]
tags: [ modern testing, test automation, devops, featured]
image: assets/images/testing-in-devops.png
---

DevOps is an amalgamation of the Development and Operations practices for Software development and Delivery.

Testers who are involved in the DevOps delivery model start asking questions like:

* _Where does testing fit in a DevOps model?_
* _How is testing and QA in DevOps different than testing in Agile and waterfall models?_
* _As a QA, what additional skills am I expected to know?_

This post discusses the tools, strategies, and practices we need to implement to test effectively in a DevOps world, embracing automation and continuous testing in DevOps.

## QA and Testing in DevOps

How has testing evolved from waterfall to agile to DevOps?

### Waterfall Model

Testing and Quality Assurance practices have seen a considerable shift from the days of the waterfall, Agile and now DevOps. In the waterfall model, testing was seen as a phase in the software development lifecycle. Testers and testing effort were very much siloed where testers used to be part of a testing team and often separate from the development team.

Testers owned the [testing strategy](https://www.testingexcellence.com/test-strategy-and-test-plan/) and were seen as the gatekeepers of quality. Testing was largely manual and used to happen after the software was fully developed and just before releasing to production.

Likewise, software used to take a long time to deliver. A separate operations team were responsible for releasing the software to production which, at best, happened every few months. There was no or low level of communication/collaboration between the Ops team and the Dev team.

### Agile Model

Agile model created a shift in the development and testing space as well as the release frequency. Software was developed iteratively and incrementally. Scrum, which is a methodology in the Agile delivery model, quickly became very popular.

https://www.testingexcellence.com/iterative-incremental-development-agile/

Development effort was broken down into a series of short iterations, typically lasting 2-4 weeks. Each iteration would create a potentially shippable software by adding new or enhancing existing features.

[Testers became part of the development team](https://www.testingexcellence.com/there-is-no-qa-team-in-agile/) and testing became a parallel activity to software development, rather than a phase at the end of SDLC. The testing activity became a shared responsibility and quality was owned by the development team.

The Agile model fused the development and testing practices and paved the way for a faster delivery of software, however, the actual deployment to production was still done by a separate TechOps team.

While TechOps team would have knowledge of servers, networks, and deployment, they were normally oblivious to the details of each release. Feedback to the development team was slow. If a bug existed in the release, it would normally take few hours for the development team to become aware of the issue.

### DevOps Model

DevOps takes the Agile model a step further by bringing closer the release and deployment activities to those of development and testing. This means that an agile team on its own is responsible for the development, testing and release of the software they create.

## DevOps Testing Strategy

Testing in DevOps spans the whole software development and delivery lifecycle. Testers are no longer just focusing on functional testing and feature verification.

As testers, we should also be involved in operations testing, performance testing, basic security testing, as well as being able to monitor and analyze production data and logs.

Dan Ashby has an [excellent post](https://danashby.co.uk/2016/10/19/continuous-testing-in-devops/) about testing in DevOps in which he describes

> You can see why people struggle to understand where testing fits in a model that doesn’t mention it at all. For me, testing fits at each and every single point in this model.
> 
> [![testing in devops](https://www.testingexcellence.com/wp-content/uploads/2017/08/testing-in-devops-1024x624.jpg)](https://www.testingexcellence.com/wp-content/uploads/2017/08/testing-in-devops.jpg)

Indeed, testing can and should happen at each stage in a DevOps model. In the [Agile Test Strategy post](https://www.testingexcellence.com/agile-test-strategy-example-template/), we described how testing fits into the Agile model.

DevOps testing strategy can extend that by adding following sections:

### Test Automation and Continuous Testing in DevOps

Choice of tools and technologies become ever so important in the DevOps model. The choice of tools allows an organization’s ability to deliver applications and services at high velocity.

There is a greater emphasis on automated testing in DevOps as we want to create a culture where we can push code down the systems quickly and with confidence.

As well as automated functional tests, we should also have a set of performance tests as well as security/resilience tests in the delivery pipeline.

Needless to say, before being able to implement any of the above automated tests, first and foremost is building an [automated build and delivery pipeline](https://www.testingexcellence.com/delivery-pipeline-agile-project/) in a Continuous Integration tool, such as Jenkins.

### Testing in Production

Testing in production doesn't necessarily mean executing your functional / performance testing scripts against a live system where users are using the application.

We can start by analyzing the trends in A/B or multivariant tests. We can also monitor servers for any strange behavior, such as memory leaks, high CPU usage, etc.

## Impact of DevOps on Testing

How has all of this changed the role of testers and testing in DevOps?

Testers are now expected to have at least the following knowledge and skills to be able to effectively carry out testing activities

*   Basic networking knowledge
*   Basic Unix/Shell scripting, e.g. bash, python
*   Continous Integration/Continuous Delivery e.g. Jenkins,
*   Performance testing tools such as JMeter or Gatling
*   Ready for Operations and Resilience Testing
*   Knowledge of containers, Docker, Kubernetes
*   Querying monitoring tools such as Splunk
*   Clouds services, e.g. AWS, Azure