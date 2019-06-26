---
layout: post
title: "Definitive Guide to Writing Good Agile User Stories"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

One of the first steps in delivering a quality product, is writing good user stories. A user story is a place to capture product functionality and as the name suggests, user stories describe how a customer or user will use the product.

In this post, we describe how to write good user stories and what should be included.

A user story represents a small piece of functionality which has a business value that a team can deliver in a sprint. The difference between a user story and a traditional requirement document is the level of detail.

Requirement documents tend to contain a lot of text and are very detailed, whereas user stories are mainly based around conversations.

We can break down the structure of a user story as:

*   The brief description of the need
*   The conversations that happen during backlog grooming and sprint planning to solidify the details
*   The acceptance tests that confirm the story's satisfactory completion

An important point to bear in mind when writing user stories is that they are written from the perspective of the user who will ultimately use the product, hence it is important that we clearly identify who the user is when writing user stories.

## How to Write Good User Stories

As a rule of thumb, a good user story should adhere to the INVEST acronym:

**I**ndependent - user stories should not depend on each other so they can be developed in any order.

**N**egotiable - Avoid too much detail; keep them flexible so the team can adjust how much of the story to implement.

**V**aluable - the story should provide some value to its users.

**E**stimable - the team must be able to estimate the story.

**S**mall - user stories should be small enough to fit in a sprint; large stories are hard to estimate and plan.

**T**estable - ensure what is being developed can be verified and tested adequately.

### What Format is Used to Write User Stories?

User stories generally have the following format:

_As a <user type>, I want to <feature> so that <benefit>._

Example: As a **customer** of abc.com, I want a **login** functionality so that I can **access my account details online**.

As mentioned earlier, pay particular attention to who the user of the product is and avoid the generic role of "User". If you don’t know who the users and customers are and why they would want to use the product, then you should **not** write any user stories.

**Narrative**

*   The first part of the user story is the Narrative. 2-3 sentences used to describe the intent of the story. It is just a summary of the intent.

**Conversations**

*   The most crucial aspect of a user story is the conversations that should happen continuously between the development team, customer, Product Owner and other stakeholders to solidify the details of the user story.

**Acceptance Criteria**

*   Acceptance criteria represent the conditions of satisfaction which are written as scenarios, usually in Gherkin (Given, When, Then) format. Acceptance criteria also provide the Definition of Done for the story.

### Who Should Write User Stories?

In most cases, user stories are written by a **[Product Owner](http://www.testingexcellence.com/roles-responsibilities-product-owner-agile/)** or Business Analyst and prioritized in the product backlog. However, that's not to say that it is the responsibility of only the Product Owner to write user stories. In fact, any team member can write user stories, but it is the Product Owner's responsibility to ensure a backlog of user stories exist and are prioritized.

What's important, is that user stories **should not** be treated like requirements document which when written will get handed off to development team for implementation.

User stories should be seen as a means of encouraging conversations between the Product Owner and the development team, and thus should be written collaboratively during the product backlog grooming sessions.

An advantage of involving the development team in writing user stories is that if there are any technical constraints, they can be highlighted well in advance. **[Testers can particularly add value](http://www.testingexcellence.com/can-testers-add-value-agile-projects/)** in constructing effective acceptance criteria and plan in advance on what needs to be tested and how.

### How Detailed Should User Stories Be?

User stories focus on customer value.

The basic difference between user stories and other forms of requirements specification is the level of detail. A user story is a metaphor for the work being done, not a full description of the work.  The actual work being done is fleshed out via collaboration revolving around the user story as system development progresses.

If the description becomes too lengthy (more than what will fit on an index card), you should revisit the user story. It is likely that you are trying to include too much detail.

Remember that the purpose of a user story is to encourage collaboration. It is not meant to document every aspect of the work, as it's normally the case in traditional requirements statements.

Moreover, too much information in the description can lead to missing information in acceptance criteria.

Before agreeing to work on a story, the team must understand the acceptance criteria. These are essential for knowing what needs to be done in order to satisfy the user story. Acceptance criteria should be detailed enough to define when the user story is satisfied, yet not so detailed as to quash collaboration.

### Common Mistakes When Writing User Stories

*   **Too formal or too much detail.** Product owners with good intentions often try to write extremely detailed user stories.  If a team sees a story at iteration planning that looks like an IEEE requirements document, they often assume that all the details are there and will skip the detailed conversation.

*   **Writing user stories for Technical tasks.** Much of the power of Agile comes from having a working increment of software at the end of each iteration.  If your stories are really just technical tasks, you often do not end up with working software at the end of each iteration, and you lose flexibility in prioritization.

*   **Skipping the conversation.** Stories are intentionally vague before iteration planning.  If you skip the acceptance criteria conversation, you risk moving in the wrong direction, missing edge cases or overlooking customer needs.

_Do you have any tips that can be added to the above information for writing good user stories? Feel free to put them in comments._