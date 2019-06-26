---
layout: post
title: "Should Test Automation be Done by Separate Dedicated Team?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

What are the advantages and disadvantages of having a dedicated team focusing only on test automation?

When there are multiple agile teams in an organization, should each team take care of their own test automation efforts or should test automation be the responsibility of a separate team?

As an Agile Tester in an Agile Team, you often don't have enough time to test the new features and at the same time automate them. You might get time to either test the new features manually or spend time writing automated tests but it can be tricky to do both.

So, wouldn't it be ideal if test automation was done by a separate team?

One of the roles I held during my career was a Test Automation Manager and was faced with a similar situation as described above.

We had multiple Scrum Teams with each having a dedicated QA member who was not necessarily technical, so their tasks were mostly focused on testing new features manually.

In addition to the Scrum Teams, we also had a separate team of "Test Automation Engineers" whose tasks were to automate stories for the multiple Scrum Teams.

This team of Test Automation Engineers, were technically very strong, but not necessarily a strong testing mindset, quite the opposite to the "Manual QAs" in the Scrum Teams, so at each sprint the manual QAs would list down the stories that they wanted to be automated and hand them over to the Test Automation team for scripting.

https://www.testingexcellence.com/there-is-no-qa-team-in-agile/

This setup did have some advantages, but at the same time had major drawbacks. I will list the advantages and disadvantages of the above team structure and what we did to resolve the issues, but first, let's see why the test automation team was created in the first place.

*   The test automation engineers were initially embedded in the Scrum team and were seen as the QA resource but there were few problems with this setup:
*   Test automation engineers embedded within the scrum teams had a narrow focus and only automated stories related to their area that they were working on. There was no one with a full knowledge of the system to be able to create scenario tests or end-to-end tests that exercised the whole application stack.
*   As it happens, it is quite a common trait amongst most test automation engineers, that they want to create their own little frameworks and build it from scratch. The downside to this is you will end up with many frameworks, each with different designs and a lot of duplications, both in terms of code and effort.
*   Because the test automation engineers were seen as a QA resource, they were also involved in manual testing particularly when the deadlines were tight, only to test the stories and get them out of the door. This meant that they would lose time to **[automate the tests during the sprint.](http://www.testingexcellence.com/automate-stories-during-sprint/)**

After reviewing these problems, it was decided to liberate the test automation engineers from the Scrum teams and form a separate "Test Automation Team" to address the above issues.

https://www.testingexcellence.com/can-testers-add-value-agile-projects/

## Advantages of Separate Test Automation Team

Having a separate dedicated test automation team had the following advantages:

*   The team was able to share knowledge among themselves on updates to the framework code and review of new tools and libraries
*   Because the team shared their knowledge, there was little duplicate code and many core modules were reused and shared for different tests
*   The team used one single test automation framework which they all contributed to
*   Team members were able to work in isolation without any of the daily clutter of the scrum teams and fully focused only on automation work
*   Although each team member was assigned to a Scrum team, they were able to help each other out when there were complex stories to automate
*   There were two senior members who focused on updating and refactoring the framework to facilitate and simplify the scripting of test code

## Disadvantages of Separate Test Automation Team

In contrast to the above benefits, there were some clear disadvantages of separating test automation from the Scrum teams:

*   The team was disengaged from all the discussions and communications that were happening in the Scrum teams. This created a feeling of separation and isolation which had a negative impact.
*   Because the team was so focused on automating stories that were given to them by the Scrum teams, they rarely checked the quality of the tests or scenarios that was given to them.
*   Created a clear divide between "manual testers" and "automation testers":
    *   Test automation team members often felt inferior to the QAs in the Scrum teams with regards to testing knowledge and even domain knowledge.
    *   Likewise, the QAs in the Scrum teams felt that the test automation team were superior because they had the technical knowledge.
*   The team was somewhat spoon-fed by manual QAs from the Scrum teams with little or no collaboration and discussion around what was deemed suitable and worthwhile for automation.

## Embedding Test Automation in Scrum Teams

There were both advantages and disadvantages in having a separate and dedicated test automation team responsible for automating tests and tasks for the Scrum teams.

After letting the above setup to run for a number of months, we decided to reshuffle the test automation team members and once again embed them within the Scrum team, but this time, we also introduced another team called the "Test Architecture Group" to prevent the problems faced initially when the test automation engineers were part of the Scrum teams.

This team had members with deep knowledge of the domain and members with technical expertise. While the test automation engineers and QAs worked side-by-side in each Scrum team, the domain experts from the test architecture group had a high-level overview across the Scrum teams so were able to digest each story and create end-to-end scenarios.

The technical experts of the TAG group were responsible to review each test automation engineer's code for compliance with standards and best practices and also contribute to the unified framework development. In other words, they facilitated tools and framework for the test automation engineers across the Scrum teams, so they could focus on delivering automated tests within the sprint.

This setup worked quite well for the organization and over time there was a better quality of automated tests and more collaboration amongst all teams.