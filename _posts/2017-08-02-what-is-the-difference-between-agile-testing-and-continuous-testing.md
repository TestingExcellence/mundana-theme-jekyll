---
layout: post
title: "What is the Difference Between Agile Testing and Continuous Testing?"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

**Question:**

> What is the main difference between Agile Testing and Continuous Testing?
> 
> In my opinion, Agile Testing ties into the Agile effort development teams are moving towards, and how testing teams can keep up with the increase in the speed and amount of code being developed. Whereas Continuous Testing talks about the continuous ability to test code being developed.
> 
> What are testing teams trying to achieve? Are Agile Testing and Continuous Testing one in the same thing, or are there differences between the two approaches?

* * *

**Answer:**

You are looking at two problems at the same time, how to test in agile teams and how to achieve continuous delivery and in effect continuous testing.

For start, **[there is no testing team in agile!](https://www.testingexcellence.com/there-is-no-qa-team-in-agile/)**

IMO, the main difference being Frequent Interval vs. Continuous Automation. Considering that in an Agile approach you aim to release your software on (usually) bi-weekly basis, I don’t see any difference among the two, being a constant and continuous testing a must have, at any testing level.

In other words, the whole team (not only the Engineers) has to figure out a way to test the new code locally, the integration of it in the new branch, the non-regression of old functionalities and the definitely the new version itself.

https://www.testingexcellence.com/difference-between-greenblue-deployments-ab-testing-and-canary-releases/

A best practice I recommend is to start testing even before starting coding (e.g. requirements analysis), with QA Engineers working very closely with Product Managers and User Designers.

Agile testing may or may not be continuous as in nightly build validation but rather an overall paradigm. Agile testing is validating new deliveries while Continuous Automation for example on a nightly basis may also validate environment changes, etc. which may be outside the scope of the project.

In similar terms, you can have continuous delivery/testing even if you don’t use Agile principles for software development. Continuous testing is more defined and more in focus as new “buzz word” in testing, as more people in the organization are interested to ensure testing happens – at a particular time, within a timeframe and with some expected quality of automation.

**Agile Testing:**  
to ensure delivering the business value desired by the customer at frequent intervals, working at a sustainable pace.

**Continuous Testing:**  
A process of executing automated tests as part of the software delivery pipeline to obtain immediate feedback on the business risks associated with a software release candidate.

So, it’s more of what software development process you follow and how you want to deliver that’s going to impact your choice in “whether to have Agile testing?” i.e. “Do we need agile development?” And “Do we need Continuous Testing?” i.e. “Do we need continuous Delivery?”