---
layout: post
title: "How To Setup a QA Function From Scratch"
author: Amir
tags: [ featured, automation, agile]
image: assets/images/setup-qa-function-from-scratch.jpg
---

It is a usual scenario: a startup company has a new idea and hires a number of developers to build a working model of the idea.

Because of the nature of the startups, i.e. not much funding available with a short scale of time to develop the idea, the main effort is focused on building the new product to get it out to public to test the waters, and so naturally, testing and QA is not the top priority for the development team.

After it becomes evident that the idea has been a success, the company wants to expand on the idea and starts hiring more developers, but at the same time, they also want the product to be tested before it goes out to public.

For a while, testing is done by whoever is available in the company, and it is largely ad-hoc with no proper processes to follow.

Then there comes a point when the startup company decides to hire their first senior QA person to start implementing a new QA process for the development team.

_For the purpose of this article, I'm going to assume that the startup is a web based company, e.g. an e-commerce website._

## Implementing a QA Process

The main aim of having a Quality Assurance process is to ensure that the right product is built right, the first time. That means, we need to ensure that the requirements are correctly defined and the development team have a solid understanding of the functionality of new features before starting to code.

It is important to note that testing is not a phase, it's an activity and that testing starts from the very beginning of the development process, right from when the user stories are written.

Testing should support development and so testing activities are in parallel to the development activities, and at every stage of the development process we need to ensure that the code is thoroughly tested.

Before implementing a testing process, we need to know the current development methodology and process and if necessary make adjustments to improve the process.

### Regression Testing / Sprint Testing

As you start as the first QA person in the company, chances are that there is no regression testing in place and so as new features are developed, you have no idea if they adversely affect the current working website. Moreover, you need to keep up with the development team to test the new features to ensure they function properly and according to specifications.

There are at least two tasks in parallel: Testing of new stories in the sprint and performing some degree of regression testing.

Testing of the new features takes priority as there is more likelihood of finding bugs in new code than breaking the current working site. But, at the same time, Regression Testing is required to ensure that the existing application keeps functioning as we build new features.

A regression testing pack needs to be executed as soon as there is an update to the application, so development team can get **fast feedback** on the health of the application.

There is not enough time to write regression tests as well as keeping up with testing of new features. How can we break this cycle?

Usually, during the first few days of the sprint, developers are busy coding and so the new features won't be ready to test for a while. Here is a good chance to start working on the regression tests.

There are [best practices for regression testing](/best-practices-for-regression-testing/), but generally, the approach would be to identify the main core user journeys throughout the website, so that on each new release of the website, we can be confident that the application is still usable by majority of its users.

There doesn't need to be an exhaustive list of these scenarios, just the main and most important ones will be sufficient to start a small regression pack that can be executed on every build. Later, as the regression pack matures, we can begin to add more scenarios.

Most importantly, these regression scenarios should be automated.

### Automated Testing

In an agile project, where a sprint typically lasts about two weeks, there is not enough time to do all the testing manually. There is testing of new stories as well as regression testing. While it makes sense to do exploratory testing to test new features, regression tests should be automated to reduce the mundane task of repeatedly executing the same tests manually.

### Deployment / Build Pipeline

A deployment or build pipeline in an agile project defines how a story gets from product backlog to live production site. It defines a process and the activities that happen at each stage.

In order to implement a successful QA process that ensures we are frequently releasing quality code, the deployment pipeline must be defined and be adhered to by all stakeholders. The deployment pipeline is the spine of software delivery.

The pipeline should be based on best practices and encompass the activities that occur at each stage.

### Story Workshops

One of the most important activities in an agile project is frequent story workshop sessions. This is when the product owner, developers and testers gather in a room and start elaborating and fleshing out the details of the stories. This is important because everyone should have the same understanding of the story before starting the development work.

Quality Assurance is about defect prevention rather than detection and so in the story workshops, the team get the chance to ask questions about the details of the story, any technical or design constraints and any blockers to developing the stories.

Here is a great opportunity to start writing out the acceptance criteria for the stories. Everyone should contribute and start thinking about the possible scenarios for each story, as each one will have a different idea, so the more heads on the story, the more scenarios can be thought of and the higher chance of preventing defects getting live.

Once everyone is certain on the detail and scope of each story, development starts.

### Developer Testing / Testing During Development

Everyone should be responsible for quality of the product and not just testers. As such, there needs to be sufficient amount of "developer testing" to ensure that the code written is of high quality before being deployed to a test environment for further testing.

Certainly each new piece of functionality should be well unit tested. On top of that, there needs to be integration tests, API tests as well as UI tests.

Peer code reviews or "buddy testing" can put a second eye on the work of the developer. A tester can help in reviewing the unit tests and well as the API tests to ensure correct tests have been written, as well as helping to write the high-level automated UI tests.

Read more on [Best Practices for Continuous Testing](/best-practices-for-continuous-testing-in-agile/) in Agile projects.

### Continuous Integration / Test Environments

In order to effectively test new features, we need to ensure the code works not only on the developer's machine but also on other environments, and integrated with other developer's code.

Continuous Integration helps in identifying any build problems early on in the process, so that when the deployment fails we can start to look where the issue is coming from.

Test Environments give testers and other team members the chance to test the new features before going live.

### Non-Functional Testing

When required, we should also perform non-functional testing, such as performance, load and security testing. Quite often the focus is on ensuring the functionality works well, however non-functional testing should be given the same priority, especially for web applications as they could be subjected to heavy load and / or attacks.

By performing non-functional testing, we can be sure that our application can handle load during peak times and that is not open to security threats.

**Other points to consider for setting up a QA function from scratch:**

*   Cross-browser, Cross device testing
*   Mobile and Tablet Testing
*   Parallel execution of automated tests
*   Exploratory Testing
*   Tools, such as Jira, Jenkins, Selenium, etc...
*   Continuous Improvement
*   Recruitment of Testers