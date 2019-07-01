---
layout: post
title: "Why Selenium and Cucumber Should Not Be Used Together"
author: Amir
tags: [ selenium, cucumber, automation ]
image: assets/images/coming-soon.jpg
---

In this post, I will explain why I believe it is a bad idea to write UI automated tests with Selenium and Cucumber.

The title of the post mentions Selenium and Cucumber because they are the most popular browser automation and BDD tools respectively, however, the context of this article applies to any UI automation tool in combination with any BDD tool.

Before I dig deeper, let's review some background information.

### What is Selenium?

**[Selenium](http://www.seleniumhq.org/)** is a browser automation testing tool which is capable of interacting with the HTML elements of a web application to simulate user activity.

In Selenium WebDriver, we can write scripts in a number of programming languages and can be a great asset for multiple OS and cross-browser testing.

### What is Cucumber?

**[Cucumber](https://cucumber.io/)** was created to drive Behaviour Driven Development (BDD) process, such that the customer can describe their requirements as a series of examples called scenarios, in plain text files using the Gherkin language in the Given When Then format.

In Cucumber world, these files are called feature files which are reviewed by the **[Scrum team](/overview-of-scrum-agile-development-methodology/) to get a clear understanding of the requirements before starting the actual development.

Once development is underway, the developers and/or QA will write Step Definitions which are essentially snippets of code which bind the scenarios from the feature files to the test code which execute actions against the application under test.

### Selenium and Cucumber

Both Selenium and Cucumber are great tools for their own purposes but when used together, things don't marry up nicely! Let's see why.

Stories are generally written from a user's perspective, for example:

> **Feature:** Login functionality
> 
> As a user of website abc.com
> 
> I want customers to be able to login to the site
> 
> So that they can view their account information.

In turn, Scenarios in the feature files are written in a way which describes the behavior of the feature when a user interacts with the _application_. For example:

> **Scenario 1: **Valid login
> 
> Given I am on abc.com Login page
> 
> When I enter valid credentials
> 
> Then I am redirected to My Account page

And so you can add more scenarios to test different data combinations.

Because both the story and the feature file are written from a high-level point of view, and because we want to automate the scenarios, it only seems natural to start writing step definitions in Cucumber which call Selenium to drive the application, do the actions and verify the outcome.

But, this is where the problem occurs; when we start combining Selenium with Cucumber to write automated UI tests.

In all fairness, in simple cases like the Login scenario above, things fit nicely together and the approach seems plausible, and in fact, most examples that you see on the internet, demonstrating the use of Selenium and Cucumber, seem to limit themselves to the famous Login example.

The readers of such blogs would assume that they can take the simple Login scenario and apply the same principle to a wider context of an application.

Don't be fooled though, as things can get very sour with Selenium and Cucumber when applied to a real-world large web-based application.

Let's take an example of a search results page of a typical [e-commerce application](/testing-e-commerce-websites/) which sells products online. Normally the search results page is full of features, such as filters, sorts, list of products, ability to change search, ability to paginate or auto-load on scrolling, etc, as can be seen in the screenshot below:

![selenium-cucumber-example](http://69.164.212.71/wp-content/uploads/2016/01/Screen-Shot-2016-01-21-at-21.50.07-e1453413098934.png)

I'm going to assume that each feature on the search results page, was added to the site on an incremental basis using agile development.

Applying the same principle of our simple Login example, as each feature is developed we would have a respective feature file filled with lots of different scenarios. For example:

In iteration 1 of the development, "Filter by Price" is developed, so we would have a feature file for it with its own scenarios related to the price filter.

In iteration 2 of the development, "Filter by Star Rating" is developed, so we would have a feature file for it with its own scenarios related to the star rating filter, and so on for each new feature.

_It is important to note that the scenarios in each feature file are only specific to their respective feature. In fact, this is why they are called **feature files** because the focus is on **individual features**._

As mentioned earlier, when the application is simple, we can survive the challenge of automating the scenarios on UI with Selenium and Cucumber. However, as the application grows and new features are added, complexity arises as there could be dependencies between different features.

For instance, I could first filter my search results by price then apply another filter for the star rating. Ah...we now have a problem!

Which feature file should this scenario now go? In "Filter by Star Rating" file or "Filter by Price" file? How about if I now add a scenario to apply a sort to my filtered results to sort by highest votes?

If a stakeholder wishes to see what our test coverage is, which of the feature files should he look into? Will he get the full picture of scenario coverage by reading just one of the feature files or would he need to read all feature files?

At the time of development, when each feature is developed one by one in each iteration, the feature files would be focused on the feature itself, so at some point, when we have multiple features, we need to start thinking about testing these, not only in isolation but also creative scenarios where we combine different features.

And in fact, this is what real users of the application will do. They will first enter their search criteria, once on the search results page, they would possibly paginate, then filter, then sort, then go back, and so on, and they can do these actions in any order. There won't be a prescribed order of events. This is a [real user journey](/can-you-really-automate-a-user-journey/) and a real test of the system!

Majority of the bugs in an application are exposed when either a feature itself is buggy or when two features that work perfectly well in isolation, don't work together. This is what the [Pairwise Testing Model](/all-pairs-testing-technique/) is based upon.

### So, what's the big deal with using Selenium and Cucumber together?

Where at all possible, we should not use the web GUI for functional verification. The functionality of a feature should be tested at the API layer by integration tests.

UI should only be reserved for checking the user flows through the application, or end-to-end tests and making sure relevant expected modules or widgets are present on the page as the user navigates from one page to another.

A typical user journey would entail:

1 - Navigate to the homepage of abc.com website

2 - Search for a product from the homepage

3 - Browse through the list of search results

4 - Apply filter and/or sort

5 - Read product details

6 - Add the product to basket

7 - Continue to check out...

Selenium is excellent in automating these scenarios and checking for various elements on each page and as I mentioned above, that's what we should focus on when testing at UI layer, and testing the different [states transitions](/state-transition-testing/).

As can be seen, each user journey through the application touches on many pages and potentially interacts with multiple features on each and every page, and we would be verifying various things at each step throughout the journey, so using a **"feature file"** to document these scenarios makes absolute no sense whatsoever, because we're not testing a feature, we're testing the integrated system.

Things really go pear-shaped when we attempt to write the end-to-end scenarios in a Given-When-Then format. How many Givens are we going to have? How many Thens are we going to have?

One could argue that for end-to-end tests we could just use Selenium on its own without the Cucumber and have separate automated tests for each feature using Selenium and Cucumber. Again, I don't recommend this approach as you will possibly have duplicate tests and we know how slow and brittle UI tests are, so we should aim to have less of them not more! Moreover, you will still have to deal with feature dependencies tests.

**To summarise:**

Cucumber is a great tool in checking the behavior of a feature at the API layer with integration tests where each feature can be thoroughly tested. This tool should be used for Story Testing.

Selenium is a great tool for automating user scenarios at the UI layer and checking the behavior of the system as a whole. This tool should be used for [User Journey Testing](/can-you-really-automate-a-user-journey/), encompassing many user stories.

When we get to System Integration Testing or UI Testing, it is best to use Selenium without the underlying Cucumber framework as trying to write Cucumber feature files for user journeys, can get very cumbersome and would not serve the purpose the tool is built for.

My article is based on deducing facts!

*   If there is any value in using cucumber, it is at the feature level.
*   Checking functionality of a feature is best done outside of UI, e.g. API tests.
*   Even at API layer tests, cucumber fails miserably.
*   UI Tests should cover user/business scenarios and not single features.

Cucumber works beautifully with a simplistic and naive view of tests and scenarios, such as everyone’s favorite login functionality.

Given I am on the login page  
When I enter valid credentials  
Then I should see my account

But any savvy tester knows that even a simple login functionality has many many checks. Try converting those checks in cucumber.

This is just for login; try writing an end-to-end test in cucumber!

UI tests should be covering user journeys which are typically end-to-end and exercise multiple features of an application.

There is a lot that goes on in a single user journey across the application.

Cucumber is definitely NOT the right tool for user/business scenario testing.