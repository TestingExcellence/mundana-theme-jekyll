---
layout: post
title: "Where to Start with Test Automation for an Existing Website?"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

**Andrew asks:**

> _I have recently joined a web based company as their first QA member. The website has been developed in the past five years and during this time, developers and other team members were doing the testing._
> 
> _There is no formal QA or testing process in place, so all the testing has been largely ad-hoc._
> 
> _Now my manager who is in charge of software delivery, wants me to create an automated regression testing pack which the team can execute whenever they develop new features._
> 
> _My question is: where shall I start with test automation to build this regression pack for a website which has been in operation for more than five years?_
> 
> _Any ideas/suggestions would be highly appreciated._

**My response:**

Once a website has been functioning and serving live customers for a number of years, then it is in a mature state. By mature, I mean there are (hopefully) no obvious serious bugs in the system and if any, they will be the subtle or edge case issues that are not easily spotted by everyone.

What we _**shouldn't**_ do, is to try to retrospectively write tests for all the stories that have already been developed and have become part of the system. However, what we want is a set of key scenarios that exercise the system end-to-end to ensure that future developments don't jeopardize the existing functionality.

Steps below are some guidelines that can be used for an existing and already established website in order to find the key scenarios and a method of expanding on these to create a functional regression pack.

**Related:**

*   [**Should Test Automation be done by a separate dedicated team?**](https://www.testingexcellence.com/test-automation-done-separate-dedicated-team/)
*   **[Pros and Cons of Test Driven Development](https://www.testingexcellence.com/pros-cons-test-driven-development/)**

### Explore

**Step 1:** First you need to familiarize yourself with the website and its features. Start with exploring the site and learn its behavior. While doing so, you can also create a mind map of the structure of the website, what pages there are and what features are there in each page.

Mind maps are a great way of getting a high-level snapshot and overview of the whole website. We can always refer to the mind maps to get an understanding of how the pages are connected.

### Gather Metrics

**Step 2:** Gather site usage metrics from the marketing and/or analytics team. Most businesses embed "tracking tags" such as Google Analytics on their website to be able to track how users use the site. There is a wealth of information about the user behavior and common **[user journeys](http://www.testingexcellence.com/can-you-really-automate-a-user-journey/)** that can be retrieved from these tracking systems.

The reason why we need to gather this information is to be able to prioritize what test scenarios to automate first so that we get the most value in the shortest possible time.

### Key Scenarios

**Step 3:** Start with automating the core end-to-end scenarios through the web application. This will form the basis of our "smoke regression pack". For example, for a typical **[e-commerce web application](http://www.testingexcellence.com/testing-e-commerce-websites/)**, the core end-to-end scenario is

Homepage --> Search results --> Product details  --> Customer login / Register --> Payment details --> Order confirmation

It is important to note that, to start with, we only need to ensure that we can get through the pages, starting from Homepage and reaching the order confirmation page. The aim is to check that the purchase flow is not broken, rather than checking each page's functionality in great detail.

Once we have the simplest and most common user flow covered, we can then look into more variations. Despite the numerous combinations of features and pages, one would notice that there are really only a handful of user journeys through the system that need to be considered.

Scrutinizing analytics data, you will probably find 80% of users would go through the same paths but with different data. Therefore, our smoke regression pack should be built based on these scenarios.

### Increase Coverage

_A note about coverage, here I'm not talking about test coverage; the focus is on **feature coverage**._

**Step 4:** Expand on the smoke regression pack to create a more extensive function regression pack by utilizing the mind maps and applying **[state transition testing technique](http://www.testingexcellence.com/state-transition-testing/)** to build the scenarios.

**Entry Points -** To begin with, we first need to find the entry points into the system. These entry points could be a user landing on the home page, a product details page, or a [SEM (Search Engine Marketing)](https://en.wikipedia.org/wiki/Search_engine_marketing) specific page.

Once we identify a particular landing page, we need to see what features there are on that page which the user can interact with. This is where mind maps become very useful. We have a high-level overview of the page and its features.

_Here, the meaning of feature is either a single component like a sort option drop-down box or filling up a user details form or as simple as clicking a link._

**Initial State -** When we first land on an entry point in the application, there will be a state associated with that page. We record that as the initial state of the application. Whenever we interact with any of the features on that page, we are most likely going to alter its initial state.

**Trigger -** Some features, when interacted with, will either load the same page (e.g. sort options will keep the same page, but data will be sorted) or transition to another page (e.g. submitting valid user credentials). The thing that causes this transition, either to the same page or to another page, is called the trigger, such as the submit button.

**Assertions -** Then there are the assertions. Whenever the state of the application is changed, by interacting with a feature, we need to make assertions to check the status of the new state. For example, when we submit a login form with valid user data, we need to assert that the user is now logged in.

We can continue with the same manner on the new transition, or go back to the initial state and interact with another feature until we cover all the important features of the mind maps.

Over time, the level of confidence in deploying new code increases as more scenarios are automated and run on a regular basis.