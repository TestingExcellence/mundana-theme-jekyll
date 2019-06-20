---
layout: post
title: "Acceptance Criteria vs. Acceptance Tests"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

What is the difference between acceptance criteria and acceptance tests? Many organizations that follow agile methodology, especially in Behaviour Driven Development (BDD) use these two terms interchangeably.

When discussing the details of a story people tend to quickly jump in writing "Tests" in gherkin language to express their intent in terms of Given-When-Then scenarios when they should be focusing on the set of conditions that govern the behaviour of the story. In fact, Mike Cohn refers to these acceptance criteria as "Conditions of Satisfaction".

There is a subtle difference between acceptance criteria and acceptance tests. Acceptance criteria are a set of conditions that need to be met in order to accept the story as complete.

Acceptance tests, on the other hand, are scenarios which are derived from acceptance criteria. In other words, each acceptance criteria can have one or more acceptance tests. Acceptance tests can be written in gherkin language which can be used by BDD tools such as cucumber to automate the tests.

Acceptance criteria can be thought of as "what needs to be done" and acceptance tests as "how they should be done". You can use acceptance criteria to clarify the scope of each story, so the team is clear on what is expected to be done to deliver the story.

For this reason, it is best NOT to write acceptance criteria as gherkin for clarity and to separate the "what" from the "how". Acceptance criteria can be written as bullet points to highlight the intent of the story where each bullet point is a condition.

It is by means of conversations with stakeholders, developers and QA that the details of each acceptance criteria is fleshed out, e.g. in story workshops or story grooming sessions where different members of the team with different skills and knowledge and experience sit together and think about the scenarios to fulfil each criteria.

Acceptance criteria are usually initiated by Product Owner or BA but other team members can also participate in defining the acceptance criteria for each story. These obviously need to be written and agreed upon before development work starts. The acceptance tests in gherkin format or otherwise can be written before or in parallel to development. New acceptance tests can be added at any time.

**Further reading...**

[BDD Guidelines and Best Practices](http://www.testingexcellence.com/bdd-guidelines-best-practices/)

[When to write story tests](http://agilecoach.typepad.com/agile-coaching/2011/07/when-to-write-story-tests.html)

[Acceptance criteria vs. scenarios](http://lizkeogh.com/2011/06/20/acceptance-criteria-vs-scenarios/)