---
layout: post
title: "30+ Essential Software Testing Questions to Prepare for Interview"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Whether you are preparing for a Software Testing Interview or you are interviewing candidates for a QA role, this mind map will help you with the preparation and to remember the main essential topics on Software Testing.

Here is a checklist of 30+ Essential Software Testing Interview Questions which you can revise and **[download](https://www.testingexcellence.com/wp-content/uploads/2016/03/Interview-Questions-For-Testers.png)** for reference.

[![Interview Questions For Testers](https://www.testingexcellence.com/wp-content/uploads/2016/03/Interview-Questions-For-Testers.png "Interview Questions For Testers")](https://www.testingexcellence.com/wp-content/uploads/2016/03/Interview-Questions-For-Testers.png)

Where applicable, I have given some suggestions or quick hints and links to useful material for further reading, but purposely, I have left out the answers, so you can go and hunt for the relevant information yourself. Of course, you should mostly rely on your experience at first instance.

**[Download Interview Questions mind map](https://www.testingexcellence.com/wp-content/uploads/2016/03/Interview-Questions-For-Testers.png)**

### Introduction

The introduction part of the interview is mainly finding out about your current and past experiences, what interests you, how you got into the world of Software Testing and what motivates you to stay as a tester.

*   Current and past workplace experience
*   How did you get into testing?
*   What are your career aspirations

### Testing knowledge

Most likely, you will be asked to provide definitions for Software Testing and Quality, in the form of what is Software Testing or what does Quality mean to you? These are broad subjects, so you need to come up with the definition that you think is the best.

There are many **[definitions of Software Testing](http://www.testingexcellence.com/software-testing-definitions/) **which you can review and pick the appropriate ones. Also, Quality means different things to different people as everyone has a different perception of quality.

*   What is Software Testing?
*   What is Quality?
*   What is a defect or a bug?
*   Risk Based Testing
*   Session Based Testing
*   Test Charters
*   Rapid Software Testing
*   Context Driven Testing

**Defect**

This is an interesting question, as surprisingly, there seems to be a lot of disagreement on what a defect is.

In short, a defect is if:

1.  The team knew what it was supposed to do
2.  And it doesn't do that thing
3.  And the team said they were done

Basically, when a feature of an application doesn't behave the way it is meant to behave, then that is a defect, a deviation from expected results.

Of course much of the expected results come from the requirements or acceptance criteria, so if a desired behaviour of a feature wasn't requested in the first place, then technically that's not a software defect, it's a form of communication defect.

**Risk Based Testing**

I believe all software testing activities is and should be risk based. The problem is that we would never have enough time to test an application to its full extent because there are just too many combinations / scenarios to cover. For this reason, we have to prioritize testing of features and functions in the applications, based on the risk of failure, their importance and likelihood or impact of failure.

*   Likelihood of a failure occurring
*   Impact of the failure if it occurs

The aim is to identify high risk areas in the application and have enough test coverage around those areas to boost the confidence in workability of the application before releasing it to the public. Once the risk identification exercise is done, then we can prioritize the testing effort, starting with testing the high risk areas first and then if we still have time, test other parts of the application.

**[Why Risk Based Testing is Important in Agile Projects](http://www.testingexcellence.com/risk-based-testing-agile/)**

**Exploratory Testing**

Exploratory Testing, as the name suggests, is about exploring or finding out about the software, by designing and executing tests simultaneously. Exploratory Testing is very closely associated with [James Bach](http://www.satisfice.com/articles/what_is_et.shtml) who first described the technique in early 2000.

Exploratory Testing is opposite of scripted testing where test scenarios are thought of and documented before executing the software. With scripted testing the expected behaviour is also specified with each test case, whereas in Exploratory Testing we may not know how the system would behave, therefore it is also a learning exercise.

### Testing Misconceptions

*   Testing vs Checking
*   Exploratory vs Adhoc
*   Automation vs Manual
*   BDD (Feature Files) vs TDD
*   Documenting Exploratory Testing

There is a famous post on **[Testing vs Checking](http://www.developsense.com/blog/2009/08/testing-vs-checking/)** and I urge you to read it if you already haven't. Checking can be done manually or automated, whereas Testing is done manually.

**BDD**

A lot of people mistake Behaviour Driven Development, (BDD), with Test Driven Development or Test Driven Design, (TDD). BDD is not the next level up from TDD. The main aspect of BDD is collaboration between all the stakeholders that are involved in the project, i.e. the business and the tech teams so that everyone is aware of the context of each feature before starting with the development work.

TDD on the other hand is a technical exercise and its scope is only within the development team. Developers write tests to drive their design and development.

Both BDD and TDD are "Test First" Development methodologies. However, BDD can be thought of as "outside-in-development" and TDD as "inside-out-development".

**[BDD Guidelines and Best Practices](http://www.testingexcellence.com/bdd-guidelines-best-practices/)**

**Document Exploratory Testing**

By definition, you don't really document Exploratory Testing; i.e. you don't read from a test script and follow the test steps in the document to execute tests. Exploratory Testing is more about exploring the system without the confinement of a pre-written test conditions. The only thing you might document is the summary of the areas of the application that was covered in the Exploratory Testing session.

### Agile Experience

As more companies are implementing an agile development practice, it is expected that the QAs have knowledge of **[Agile Terminologies](http://www.testingexcellence.com/agile-terminologies-definitions-complete-glossary/)** and experience in working as an "Agile Tester".

Some essential Agile knowledge that you need to have:

*   Scrum
*   Kanban
*   Agile Methodologies
*   As a tester when do you get involved in testing?
*   How is testing in Agile different to waterfall?
*   Agile Manifesto

You can also read the **[Agile Testing Interview Questions and Answers](http://www.testingexcellence.com/agile-testing-interview-questions/)**

Scrum is an Agile framework for completing projects. The Product Owner creates and maintains a backlog of stories which will be developed in succession periods called Sprints. The team then do a planning meeting and decide which stories will be developed in the next Sprint.

During the Sprint, the team have **[daily stand-up](http://www.testingexcellence.com/what-is-daily-stand-up-in-scrum/)** meetings and at the end of the Sprint there is a showcase and a retrospective.

**[Read more on Scrum](http://www.testingexcellence.com/overview-of-scrum-agile-development-methodology/)**

**Kanban**

Kanban, like Scrum is another framework used to implement agile, but unlike Scrum, there is no fixed-length iterations.

A kanban team is only focused on the work that's actively in progress. Once the team completes a work item, they take the next work item from the product backlog.

The product owner is free to re-prioritize work in the backlog to keep the most important work items on top of the backlog so that the development team is assured they are delivering maximum value back to the business.

**As a tester when do you get involved**

This is an interesting agile testing question because it shows whether the tester has grasped the principles of agile development or not. Basically, testers should get involved from the very start of the project. They need to be involved in Story writing, making sure each story has meaningful **[acceptance criteria](http://www.testingexcellence.com/acceptance-criteria-vs-acceptance-tests/) **before development starts.

**How is testing in agile different to waterfall**

In Agile, the level of documentation is far less than the traditional waterfall model. There are no requirement documents and no extensive test case documents. For this reason, the testers may feel a bit lost and without reference. Instead, in Agile there is heavy emphasis on communication and collaboration between team members to flesh out the requirements.

Throughout the Sprint, the QA need to be involved in testing the features as soon as they are ready, i.e. testing should be inline with development, not left towards the end of the Sprint. Quick feedback to the development team is necessary.

### Remaining Relevant

The remaining relevant section is usually about finding out if you really are interested in software testing and are keeping up with the industry by attending conferences or meet-ups, as well as following high profile professional testers on Twitter and blogging your own ideas on software testing topics.

At the interview you most likely be asked any of the following questions

*   Last conference or meet-up attended
*   Personal blog or publications
*   **[Favourite testing blog or book](http://www.testingexcellence.com/top-10-books-every-agile-tester-should-read/)**
*   How do you keep up with the industry?

### Test Automation

**[Test Automation](http://www.testingexcellence.com/category/automation-testing/)** is a hot topic and you need to know both the theory and practical aspect of automated testing. Some interesting interview questions on Test Automation:

*   **[Why would you automate a test?](http://www.testingexcellence.com/why-would-you-want-to-automate-a-test/)**
*   How do you choose which tests to automate?
*   What tests can't you automate?
*   **[Advantages and Disadvantages of Automated Testing](http://www.testingexcellence.com/test-automation-advantages-and-disadvantages/)**
*   Test automation pyramid

### Other Testing Questions

*   **[What do you include in a bug report?](http://www.testingexcellence.com/elements-of-a-bug-report/)**
*   Pairing with devs / teamwork
*   Do you need requirements to start testing?
*   What do you enjoy about testing?
*   SDLC vs STLC

Are there any other areas which you think should be included in this Software Testing Interview Questions mind map for interview preparation?