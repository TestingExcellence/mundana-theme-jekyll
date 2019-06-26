---
layout: post
title: "What is the Difference Between Scrum, Kanban and XP?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In Agile Software Development Methodology, software is developed incrementally and iteratively and delivered bit by bit, rather than everything at once. Each iteration is time-boxed, around 2-4 weeks, and at the end of each iteration, a version of software is ready to be shipped.

In Agile Methodology, projects are broken down into chunks or little bits of user functionality called user stories. A **[Product Owner](http://www.testingexcellence.com/roles-responsibilities-product-owner-agile/)** is responsible for prioritizing these user stories in the backlog which are then continuously delivered in short two week cycles called Sprints or iterations.

In this article, we review the differences between Scrum, Kanban and XP.

At the high level, there are three flavours of Agile Methodology:

https://www.testingexcellence.com/testing-in-devops/

## Scrum

![Scrum Process](http://69.164.212.71/wp-content/uploads/2016/05/scrum-Process-300x160.png)

*   A prioritized wish list called a product backlog is created. A placeholder for all the future development stories.

*   During the planning phase, the team selects a small chunk from the top of that wish list and create what is called a sprint backlog, and decides how to implement those pieces.

*   The team is given a certain amount of time, called a sprint, to complete its work.

*   The team meet each day on a stand-up meeting to assess the progress.

*   At the end of the sprint—usually two to four weeks—the work should be ready to hand to a customer.

*   The sprint ends with a sprint review and a retrospective.

*   The next sprint then begins.

## Kanban

![kanban board](http://69.164.212.71/wp-content/uploads/2016/05/kanban-board-300x173.png)

_Kanban_ was first pioneered by Toyota engineers and the word Kanban in Japanese stands for “visual signal” or “card.” Kanban is adaptable to software and non-software development projects and its  principles are:

*   ****Visualize the workflow.****

This can be done by using a card wall, or a Kanban Board, with the columns on the board representing the states or steps in the workflow and the cards representing the work items.

*   ****Limit the works in progress.****

Limiting work in progress or WIP is the cornerstone of Kanban. For example, If the team was working on five items at a time and not making progress, then we should reduce that number to two or three so work can be managed and progress made. Select the most important, most valuable work items. Always be working on the next most important thing.

*   ****Manage flow.****

The whole point of implementing a Kanban system is to create positive change. Before you can create that change you have to know what to change. You figure that out by looking at how value is currently flowing through the system, analyzing problem areas in which value flow is stalled and defining, then implementing, changes. The flow of work through each state or step should be actively monitored, measured and reported in order to evaluate positive or negative effects of incremental and evolutionary changes.

*   ****Make process policies explicit.****

Ensure an explicit understanding of the mechanism of a process to achieve a rational, objective discussion of issues—and facilitate consensus around improvement suggestions. An example of a policy that you can make explicit is a definition of done. In fact, you can have a definition of done for each step in your workflow, meaning that before an item can be ready to pull forward, it has to meet certain criteria.

*   ****Improve collaboratively.****

To truly leverage Kanban, teams must collaborate. We should not forget that Kanban is like any other agile method in that the team can meet as a team to plan, meet daily for a stand-up, and can choose to do retrospectives to inspect and adapt their process. Aim for constant collaboration and continuous improvement. If you are not continually improving, but you are doing all of the other parts of the Kanban method, you are missing the point. Its a little like the concept of “doing” Agile but not being agile.

## Extreme Programming (XP)

![extreme programming](http://69.164.212.71/wp-content/uploads/2016/05/extreme-programming-300x300.jpg)

XP has five values that can be emphasized in non-software development projects: simplicity, communication, feedback, respect and courage. It focuses on test-driven development (TDD), small releases and a team structure that includes the customer.

Many of the rules for this agile methodology are designed specifically to address coding, designing and testing. Take planning, for example: A traditional project does planning up front; XP says to plan the release at a high level, but plan each iteration at its start (or every two weeks).

Extreme Programming is based on 12 principles:

*   **The Planning Process**

The desired features of the software, which are communicated by the customer, are combined with cost estimates provided by the programmers to determine what the most important factors of the software are. This stage is sometimes called the _Planning Game_.

*   **Small Releases**

The software is developed in small stages that are updated frequently, typically every two weeks.

*   **Metaphor**

All members on an XP team use common names and descriptions to guide development and communicate on common terms.

*   **Simple Design**

The software should include only the code that is necessary to achieve the desired results communicated by the customer at each stage in the process. The emphasis is not on building for future versions of the product.

*   **Testing**

Testing is done consistently throughout the process. Programmers design the tests first and then write the software to fulfill the requirements of the test. The customer also provides acceptance tests at each stage to ensure the desired results are achieved.

*   **Refactoring**

XP programmers improve the design of the software through every stage of development instead of waiting until the end of the development and going back to correct flaws.

*   **Pair Programming**

All code is written by a pair of programmers working at the same machine.

*   **Collective Ownership**

Every line of code belongs to every programmer working on the project, so there are no issues of proprietary authorship to slow the project down. Code is changed when it needs to be changed without delay.

*   **Continuous Integration**

The XP team integrates and builds the software system multiple times per day to keep all the programmers at the same stage of the development process at once.

*   **40-Hour Week**

The XP team does not work excessive overtime to ensure that the team remains well-rested, alert and effective.

*   **On-Site Customer**

The XP project is directed by the customer who is available all the time to answer questions, set priorities and determine requirements of the project.

*   **Coding Standard**

The programmers all write code in the same way. This allows them to work in pairs and to share ownership of the code.