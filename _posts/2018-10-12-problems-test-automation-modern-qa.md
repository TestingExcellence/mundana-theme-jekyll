---
layout: post
title: "Problems with Test Automation and Modern QA"
author: Amir
categories: [ software testing ]
tags: [ modern testing, test automation, featured]
image: assets/images/problems-with-test-automation.jpg
---

What are some common problems with test automation in agile and DevOps? Modern Software Development and QA focus too much on test automation and not enough on exploratory testing.

Are we releasing better quality software with more automated tests?

I think not!

I recently came across a post on a social media network that said

> _What I see in most testing and QA events today is mostly DevOps, Continuous Integration and Test Automation._
> 
> _Although that is all very nice, I see a lot of crappy test cases being automated._
> 
> _I see few bugs reported during integration tests and functional tests although they are all automated._
> 
> _In UAT the users are finding more and more bugs because the test teams fail to identify them in previous phases._
> 
> _If we do not teach people how to write good test cases we will end up with fully automated ..._

And my interpretation of ... is "crap". :-)

Anyways, let's see what _**is really**_ happening in the world of Modern QA and Test Automation.

## Problems with Modern QA

Most of the “Test Automation” within the agile development is in a dire state. The software industry is pouring in huge sums of money to hire “Test Automation Experts” mostly to gain a sense of confidence that the software they’re building is of high quality. Yet, noticeable bugs and/or other issues are found during UAT or slip through into production environments. So, what’s going on?

_**N.B.** By Test Automation, I am mostly referring to UI Test Automation._

Automated testing is now at the heart of any modern software development process. Its purpose is to _help_ deliver high-quality software on a repeatable basis, but is it really?

### Do Testers Still Test?

The truth of the matter is that in most agile teams, testers are not testing anymore.

Manual testing has lost its virtue, thanks to development practices and cultures such as agile and **[DevOps](https://www.testingexcellence.com/testing-in-devops/)**, which have created a divide in the QA space - those who can code and those who can’t.

You’d often hear things like, “I’m a 100% automation engineer”, or “80% automation 20% manual”, or even worse, “I hate manual testing”. Shocking!

In DevOps, we are led to believe that everything should be automated. There is no place for manual intervention, e.g. manual testing.

Nowadays, most testers in an agile team struggle to keep up with the "Test Automation" demand. There is pressure to automate every story in the sprint, and there is not enough time for thorough exploratory testing.

The problem, especially in Agile development, is that QAs take a user story and automate its acceptance criteria. While doing so, their main and only focus is to wrestle with their limited coding skills just to get the test passing.

Naturally, this creates a narrow focus when you're only interested in automating the test and see it passing in the build pipeline. This only proves what was in the acceptance criteria - right or wrong - is working and you tend to forget about the big picture.

### The Decline in Manual Testing

More and more “traditional testers” are [transitioning](https://www.testingexcellence.com/transitioning-waterfall-agile-testing/) to “agile testing” by taking some coding lessons and becoming more technical.

Don’t get me wrong; this is all good. I believe as testers, we should always strive to learn new and emerging technologies to stay resourceful. We should understand the tech stack if we want to test a system to a high degree of quality.

However, the real reason why most manual testers take these initiatives is that there is a common belief that "automated testing" is superior to manual testing and hey, coding is fun, right?

**Note** By manual testing, I am **NOT** referring to the old school way of following a script and executing the steps. I am referring to the so-called “exploratory testers” - those who do the real testing and are curious to examine the system’s behavior by exercising interesting and thoughtful scenarios.

Unfortunately, there seems to be a big decline in the market for exploratory testers. This is quite evident. Just run a couple of search queries for “manual tester” and “automation tester” in any IT job site, and see the result for yourselves.

## Problems with Test Automation

Now, let's see why most of the test automation effort is not delivering any value.

Common mistakes I see happening repeatedly:

* Having a wrong expectation of automated tests
* Automating tests at the wrong layer, at the wrong time and using wrong tools
* Automating useless tests
* Neglecting important areas
* Missing key scenarios

### Wrong Expectations

A while back I wrote a blog post on [why would you want to automate a test](https://www.testingexcellence.com/why-would-you-want-to-automate-a-test/)? If you haven't read it, it's worth a read.

The summary of that article is that you automate tests which you want to run on a regular basis. By definition, these are your regression tests which confirm the system is still functioning.

However, if automated checks do find a lot of regression issues, I would question the skills of the developers and the development process. UI Automated Tests should not be [held at the expense of] or [compensated] for lousy coding.

### Wrong Layer, Wrong Tools and Wrong Time

Majority of "Test Automation Engineers" in agile teams, look at a user story and automate it's acceptance criteria. Most of the time this is done by a combination of [Selenium and Cucumber](https://www.testingexcellence.com/selenium-and-cucumber-ui-automation-challenges/).

Modern web applications are now clearly divided between backend and frontend. The backend is mostly composed of a number of REST web services or APIs with easily accessible end-points.

The application's logic can be tested at the API layer. However, most test automation engineers resort to validating functionality at the UI layer which is at best cumbersome.

There are testing tools out there, such as [Karate](https://www.testingexcellence.com/automated-api-testing-made-easy-karate/) and Rest-Assured, that simplify API testing. We should be making use of these tools during development. Sadly, some test automation engineers don't even know the [basics of HTTP](https://www.testingexcellence.com/http-basics/), let alone be able to write API test scenarios.

As for UI tests automation, [Cypress](https://www.cypress.io/) is a great tool. It is more like a TDD tool for the front-end developers. The developers get a very quick feedback on the behavior of the new UI components.

Both Karate and Cypress serve as "development test tools", i.e. tools that guide and support development. Both are lightweight, easy to integrate and can provide **confidence in development**.

We can then use Selenium or repurpose Cypress to design only a handful of scenarios that exercise the system end-to-end. These scenarios form our light-weight regression pack and provide **confidence in business continuity**.

Quite often I hear things like, "we wait until the feature is fully developed and stable, before automating tests". Any conscious tester knows that the new-feature bugs outnumber regression bugs. There is a higher chance of finding issues with the current developing feature, than a stable feature.

If you are going to spend time automating tests, do them in parallel with development when they can provide more value.

### Automating Useless Tests

Don't automate every "test" just for the sake of it. Put some thinking process into the game. Study the high-level and low-level architectural diagrams. Ask what can possibly go wrong. Examine the integration points and look for potential failure points.

Take a risk-based approach in automation as you would (hopefully) do with your overall testing approach. What is the likelihood of something failing, and what is the impact of the failure? If the answer is high, then those scenarios should be automated and executed on every build.

In each sprint, we often end up writing automated tests around user stories for that sprint and forget about integration with other features. There are either weak or no integration tests.

Remember automating "tests" takes time. Do also bear in mind that by automating a test, you are not really testing, you're only merely checking that the feature in question is satisfying some acceptance criteria.

You **cannot** automate testing, but you can automate the checking of known facts.

Therefore, every time you spend automating a "test", think about the time you are wasting by not testing!

### Neglecting Important Areas

I see more and more of this negligence since the birth of the DevOps culture.

In DevOps, the [delivery pipeline](https://www.testingexcellence.com/delivery-pipeline-agile-project/), along with the deployment scripts are the spine of the software development and delivery, yet they hardly ever get tested.

In the past few years, I could easily say, that I have seen a lot more "environmental issues" than functional bugs. Environment issues such as problems with the CI server, the deployment scripts, the test environments, and so on.

Environment issues have a serious impact on the development and testing effort. They consume a lot of developer and DevOps time and massively slow down the deployment process, yet there is no consideration for testing and thus preventing these issues.

We just accept them as part of the modern software delivery.

We spend a lot of effort automating functional behavior and completely disregard the "things" that matter the most. Even worse is having to rely on Selenium tests to indicate if deployments are working or not!

### Missing Key Scenarios

Scenarios are king! After all, it is the scenarios that reveal bugs.

Quite often, a serious issue leaks into production because no one thought about that particular scenario. The number of executed automated tests doesn't matter. If a scenario was not thought of or tested, sod's law tells us there is a bug in there.

Unfortunately, in most agile development environments, not enough dedication is given to this all important "Scenario Workshop" activity.

## Problems with the Process

Let's see how the above problems manifest themselves in a typical development scenario:

* Product owner writes user stories with either no or minimum acceptance criteria.
* Not enough time dedicated to story refinement sessions to discuss various scenarios for a user story.
* Acceptance criteria are interpreted as acceptance tests - Yes, [there is a difference between the two](https://www.testingexcellence.com/acceptance-criteria-vs-acceptance-tests/)!
* Testers only automate the acceptance criteria in the user stories mostly using Selenium and/or Cucumber.
* Automated testing is almost always the responsibility of “automation testers”.
* Developers have no idea what is covered in the test packs or don’t even know how to execute the automated tests.
* The automated tests are added to an ever-expanding “regression pack” therefore taking longer and longer to run each time.
* The UI automated functional tests are integrated into the build pipeline, which is good but…

A developer pushes a simple change and has to wait 30 minutes for the automated tests to go green before the new feature or bug fix can be deployed to production. The 30 minutes wait is only if the tests pass the first time. If they fail due to some test or environment issues, it can take longer.

As the automated tests are running and the QA is investigating random failures, the developer and/or the product owner have verified the new implementation and are happy to release, but they can’t because the build is not green.

After a while, either the build goes green or the management becomes frustrated with the failing tests and makes a decision to release anyway. Then, BOOM, after a few minutes in production, there is a spike in 500 server errors.

### Infrastructure Failures

The failures seem to show a similar pattern

* Failure in integration points.
* Failure in communicating with 3rd party apps.
* Web services not being “up” and requests to the API endpoints failing.
* A wrong configuration on one of the VMs or nodes, thus resulting in intermittent issues.

And yet, there is no process in place for checking these issues as part of the development or delivery process.

The focus of the test automation engineers is to automate functional tests. There is no focus on performance, security or resiliency. And there is certainly no testing of the infrastructure!

## Summary:

Time has come to shift our focus from automating functional tests that have little chance of catching functional issues to the more serious and common environmental issues that plague development.

Test Automation, _if done wrong or with no thought process_, is a waste of time and provides no value to anyone. Crappy automated tests can incur huge maintenance costs and impede development. In the end, the only solution is to bin the tests.

In the modern software development, most of the effort of the "Test Automation Engineers" is spent battling with automation code and getting the "tests" to work rather than focusing on proper testing and exploring the system.

There is literally not enough time to write automation code **and** perform exploratory testing. We automate story after story and forget about integration tests, forget about the big picture.

Often we end up executing tons of automated tests, yet exploratory testing finds the majority of bugs. Then retrospectively, we write an automated test for the bugs that were found by exploratory testing, to catch regression bugs.

We should be selective on what to automate and judge our decision based on risk. What can go wrong, what is the likelihood of it going wrong and what will be the impact on the user or the business if it did go wrong?

If you are in the business of "Test Automation" then please don't use Selenium to test the functionality of APIs or UI components. Instead, use Selenium to automate only a handful of useful and business-critical scenarios to provide confidence in business continuity before each release.

And lastly, every time you spend automating a "test", think about the time you are wasting by not testing!

**Further Reading:**

*   [Common myths of test automation](https://www.testingexcellence.com/common-myths-test-automation/)
*   [Where to start with test automation for an existing website?](https://www.testingexcellence.com/start-test-automation-existing-website/)
*   [Test automation strategy for Agile projects](https://www.testingexcellence.com/test-automation-strategy-agile-projects/)
*   [Why is it so hard to hire SDETs](https://www.testingexcellence.com/sdet-hiring-software-developers-in-test/)
