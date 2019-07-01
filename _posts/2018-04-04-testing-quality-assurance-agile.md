---
layout: post
title: "Testing and Quality Assurance in Agile"
author: Amir
categories: [ Agile ]
tags: [ QA ]
image: assets/images/testing-qa-agile.jpg
---

What does testing and quality assurance look like in an agile environment? How can we ensure that during the limited time that we have in a sprint we can deliver software that is functionally correct and fit for purpose and delivers value for customers? In this article, [Liz Porritt](https://www.linkedin.com/in/lizporritt/) shares her experience as a QA manager.

Considering it has been 17 years since the Agile Manifesto was published it is surprising to me that we still haven't quite got to grips with how we fit testers into the process. Everywhere I have worked I have seen different attitudes to testing. Some have the testers running a sprint behind, some have a testing story on the backlog, some have SDETs and some have manual only testers - and everything that fits in between. All that I have seen have had quality issues - huge bug backlogs or, worse, just chaos. Of course, I only see the not so great, otherwise, they wouldn't be bringing me in.

* [How to Write an Agile Test Strategy](/agile-test-strategy-example-template/)
* [How does Testing fit in an Agile Model? ](/how-does-testing-fit-within-agile-development/)
* [Agile Tester vs. Traditional Tester](/traditional-tester-vs-agile-tester-differences/)

## Testing in an Agile World

Almost everyone agrees that quality plays an integral part in Agile, you just can't be agile when you are dealing with bugs as often as you are building new features. When quality is an accepted and supported part of the development process the team is free to play with new ideas, to roll out a new feature and see how it feels in the wild, and to know that the user response is to the feature and not clouded by bugs or performance.

But how do we get to that utopia of clean, efficient code that doesn't take weeks to write and test?

We have all the pieces in place - we know the [whole team is responsible for quality](/whole-team-approach-agile-testing/) and that anyone who is able can test. We know about TDD, BDD, peer reviews, automated functional, non-functional, system and system integration tests and we know that manual testing still plays a big role too. And, we have DevOps - this is a big part of making sure we have quality code.

So, who does all of this? SDETs, Developers, manual testers or just throw it out for the team to pick up?

## Technical Testing

Testing is a profession and a [good, experienced tester](/what-makes-good-agile-tester/) should be the coordinator of all of the above, much like the senior developer is holding the development process together. The two working closely together, with respect for each other's work is a good place to start. [Building test frameworks](/develop-test-automation-framework-scratch/) takes time and experience that the development team don't always have and that test code is as valuable, if not more valuable than the application source code.

If the company loses the source code they can rewrite it using the tests, if the company loses the tests they have lost not just the tests but a lot of the documentation for the code.

Someone must have responsibility for the creation, maintenance and the addition to the test framework and source code. It is valuable stuff.

Writing tests themselves should be easy, and yes, devs can do that alongside the testers, but it is only easy if the test framework is solid and the [tests are run automatically in a good DevOps pipeline](/automated-ui-tests-run-ci-pipeline/). We need a test professional to work within the DevOps team to make sure the right tests get executed at the correct points of the pipeline. The tester will be responsible for making sure that these tests are efficient and don't hold up the process and have ideas of how to bring out the longer, more complicated test suites to run less often, overnight for example.

There are usually many people in the team who have ideas, not just the testers, and these ideas are great, but if we try to coordinate everything without a tester and rely only on devs or ops then the work becomes too burdensome on top of everything else. For something so high on the list of priorities, surely quality needs a dedicated professional?

### Automated and Manual Testing

So far, I have only been thinking about the automated tests - manual testing can't be forgotten. Automated tests will not tell us if we have built the right thing (only that we built it right). I am a big fan of [Jonathan Bach's session-based exploratory testing.](http://www.satisfice.com/sbtm/) This is an excellent way for testers to really focus on what matters and to use their expertise to sniff out trouble. I really don't like formal script testing at all, I think that is such a terrible waste of time and resource. Writing those tests is time spent away from the application and executing them is so mindless and demoralizing. They are less likely to find issues than automated tests as we are basically turning our tester into a machine in the way we are expecting her to work and the point of manual testing is to look at the application from the eyes of a human being.

[Product Owners](/roles-responsibilities-product-owner-agile/) are great people to get involved in manual testing, in fact, I would argue that their job description should include it as standard. The PO is going to see if their idea on paper really works as they expected. The professional tester is going to see if unexpected user behavior will cause problems. The PO and tester relationship is also essential when designing the requirements themselves in order to ensure that they are testable. BDD is my personal favorite approach for this - but that is for another article.

So, yes, the whole team is involved and committed to quality, but the Quality Assurance role is a vital one, we can't expect to deliver efficiently without an excellent, well-designed testing platform and this requires expertise and as much investment as the product itself if we want that product to thrive.

As a side note, while Googling for images for manual testing I saw a lot that were designed around Manual v Automated testing - this makes me so very sad. I hope it is just a legacy of a passing fad that has well and truly passed. There is not a competition here - both are vital.