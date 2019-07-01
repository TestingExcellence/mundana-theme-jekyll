---
layout: post
title: "How to Overcome Agile Testing Challenges"
author: Amir
tags: [ featured, qa, agile ]
image: assets/images/agile-testing-challenges.png
---

What are the most common agile testing challenges faced by software testers or QA in agile projects? What is it like to be a QA in a [scrum team](/overview-of-scrum-agile-development-methodology/)?

Ever since agile development methodologies were introduced in software development, the role of QA in agile projects has changed considerably. There is [no longer a team of QA](/there-is-no-qa-team-in-agile/) sitting in a corner, away from the developers and designers, waiting for the development team to handover a piece of work for testing.

One of the most important elements for QA in agile projects is having a good understanding of the agile development methodologies and processes. Many agile companies follow the Scrum framework for delivering quality software, so ensure you are familiar with [Scrum](/overview-of-scrum-agile-development-methodology/).

### Agile Testing Challenges

The very essence of agile development is [delivering working software frequently](/best-practices-for-continuous-testing-in-agile/), each time adding or enhancing a small feature which is of value to the customer. That itself poses a lot of challenge not only for testers but also developers and anyone else involved in the delivery of application.

In this article I list some of the most common agile testing challenges for QA in agile projects and how to overcome them.

### Changing Requirements / Last Minute Changes

Changing requirements or dropping stories mid-sprint is not uncommon in agile projects. This can be a nightmare for the whole team as it means that the work already carried out might be scrapped completely or changes should be made to what's already half done.

These requirement changes and last minute requests can affect the scope of testing which can frustrate testers.

**How to overcome:**

Testers should be able to respond to change, knowing that in agile projects, change is inevitable. When requirements change especially towards the end of the sprint [when there is not enough time to test adequately](/what-if-there-isnt-enough-time-for-thorough-testing/), testers should provide as much information as possible about what tests have been run and which part of the application hasn't been tested well so that the team can make an informed decision (possibly based on risk) whether to release the feature or not.

Try getting the developers involved in testing as well, as testing and quality should be the whole team responsibility.

### Not Enough Information on the Story

There will be times when a product owner who writes user stories, has some idea about a new feature but doesn't have all the details to write a good set of [acceptance criteria](/acceptance-criteria-vs-acceptance-tests/) to fully define the behaviour of the feature. They ask the development team to create a [prototype](/prototyping-model-software-development/) so they can get more ideas about the functionality and behaviour of the feature.

This creates a challenge for testers because there is a lack of understanding and requirements, so proper test cases can't be constructed.

**How to overcome:**

You don't need very detailed requirements to start testing, so start by thinking about high level scenarios that test the concept of the story, rather than waiting to get full clarification about the feature. By drafting high level test scenarios, even when the details change, the context should still be the same.

### Continuous Testing

In agile, testing is not a phase, it's an activity. Testing starts from the very beginning, even before the development starts.

In order to have a smooth ride during the sprint, the stories in the backlog should have been elaborated during the story grooming sessions. This means the QA should collaborate with product owners to learn the details of the story and then help write good acceptance criteria.

Providing early feedback to developers is crucial and challenging for testers. As testers, not only we have to make sure that the new feature works as specified according to its acceptance criteria, we have to also make sure that the new code hasn't broken existing functionality, i.e. we haven't regressed, and we have to provide this information quickly.

**How to overcome:**

Ensure each story has adequate acceptance criteria and that the context of the story is well understood by everyone before starting work on development.

Start creating tests (automated or manual) as soon as possible so that when the feature is available for testing you can begin straight away.

Testers should encourage developers to give early visibility to the feature by deploying regularly to a test environment where testers and/or product owners can run their tests, rather than waiting for the feature to be complete before testing.

Automate regression tests to alleviate some of the testing effort and liberate your time for exploratory testing.

### Technical Skills / Test Automation

Working in an agile environment, means that the testers should be technically competent to help the developers with Integration Testing and API Testing, as well as scripting UI automation checks with Selenium or similar tool.

If the testers come from a purely manual or exploratory background, they will find it difficult to keep-up with the pace of delivery as they need to test on a continuous testing.

Performance testing is also important particularly for web based applications, to ensure the application can sustain high load during peak times. If your company doesn't have a dedicated performance tester, it is expected the functional testers to also be involved in performance testing.

**How to overcome:**

Start by learning couple of scripting or programming languages, such as Ruby and Java - these are the most popular languages within the technical testing community.

If you already are familiar with programming and you get stuck, get help from developers.

Selenium tool is the most popular browser automation testing tool, so if the project is web based, having a good knowledge of the tool is a great asset.

Jmeter is also another great tool to have knowledge of. It is an open source performance testing tool and relatively easy to learn, so download it and start playing around with some of its features.

You can read more about the [tools useful for technical testers](/opensource-tools-for-technical-testers-in-agile-projects/).

### Multiple Browsers / Multiple Devices

Nowadays, the architecture of many websites consists of a "back-end" and a "front-end". The front-end piece is largely based on JavaScript and CSS which could potentially behave differently when viewed from different browsers or devices.

Ensuring that a website functions as expected in all major browsers and popular mobile devices or tablets is indeed a top challenge for testers in agile projects.

**How to overcome:**

Automation is key here. Writing a test and running it on multiple browsers is what automation does best.

You can use Selenium Grid with [Docker](http://www.docker.com) to manage and run your automated tests in parallel on multiple browsers.

Another great tool out there for multi-browser testing is [BrowserSync](https://www.browsersync.io/).

### Communication

No matter how good the process is or how well the above items are carried out, if there is a lack of communication amongst the team members or with product owners, designers, etc, nothing will work.

**How to overcome:**

Make sure there is effective communication amongst the team. Engage with developers and product owners on a continuous basis.

Ensure there is a process in place and that each team member adheres to that process. Quite often, major issues or bugs are not identified early because the process was not followed and the team failed to communicate with each other.