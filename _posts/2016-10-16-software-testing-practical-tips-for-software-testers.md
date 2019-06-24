---
layout: post
title: "Software Testing - Practical Tips for Software Testers"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

![software-testing-tips-guidelines](http://69.164.212.71/wp-content/uploads/2015/04/software-testing-tips-guidelines-e1430217537934.jpg "software-testing-tips-guidelines")

Below are a list of guidelines and tips for software testers and QA professionals when involved in testing applications. These software testing tips are collected from many years of experience in testing web applications in an agile environment. If you want to share your testing tips, then add it in the comments field.

### **Some guidelines for QAs when testing for story/bug**

*   Don’t leave any questions unanswered. The acceptance criteria must be complete in order to ensure you fully understand what the feature/story wants to achieve.

*   Ensure you know how to test the feature/story.

*   **[Consider the full end-to-end flows when thinking about test cases.](http://www.testingexcellence.com/can-you-really-automate-a-user-journey/)**

*   Consider all related error scenarios, e.g. web service connection down, invalid inputs, etc.

*   Consider different browsers – as per the supported browsers.

*   Consider mobile impact – mobile web and tablet – should any of the features behave differently when used on a touch device, compared to using a keyboard to navigate?

*   Consider basics of security testing, such as https both URL and resources for protected areas of the site.

*   Consider whether this story warrants being included in the automation test suite.  
    As a rough guide: only scenarios where its failure would result in a P1 or P2 in production will be automated. This also includes scenarios with a lot of data to be checked through, which would be very repetitive to do manually.

*   When you find bugs related to a story, raise them as bug-subtasks, to ensure the link to the story is kept.

*   When signing a story or bug off as testing complete, ensure a comment is added in Jira which includes the test environment and code version on which the tests were signed off.

*   If the story or bug can’t, or won’t be tested by a QA and will be tested by a developer instead, ensure you review the test approach and add a note in Jira that you approve of the dev’s test approach, ideally with a short description.  Ensure the dev adds which version is being signed off.

### **On Daily Tasks**

*   Understand the area of the application being modified by developers

*   What unit tests have been written by developers

*   What are the high priority stories and prioritise work depending on day of sprint

*   Get clarifications on stories that are vague

*   Review of the automated checks to see if there were any failures

### **On Sprint Planning**

*   Estimate testing for each story

*   Talk with PO to resolve any misunderstandings on new stories

*   Ensure the stories are testable

*   Be very proactive in the meeting by asking questions to get ideas for test

*   Start thinking about high level test scenarios

### **On Test Design in collaboration with Dev and PO**

*   Thinking of test cases to validate features, applying various test techniques, positive, negative, Boundary Values, Equivalent Partitions, etc

*   Use Mindmaps to assist with test scenarios and user journeys

*   Consider risks - provide more test conditions around a feature of high risk

*   Always think about "What if", "what else", "how else" when designing test cases

*   Think about integration tests, how is this feature affecting nearest-neighbour features

*   Really understand what is going on when interacting with a feature rather than just looking at if from a surface. Think about what back-end systems / DB / Web services are being touched

*   **[Candidates for automation - what test cases are best to be automated](http://www.testingexcellence.com/test-automation-tips-best-practices/)**

*   When there are a lot of combinations of data to test, how can the permutations be reduced without compromising quality / testing - e.g. using pair-wise test technique

*   Peer reviews of test conditions - discussing with developers what test cases have been designed

### **On Test Execution / Completion**

*   Test Environments / Prerequisite setup before execution

*   Test as soon as a feature is ready and available

*   Ensure quick feedback is provided to the developers

*   Review of the automated checks to see if there were an failures

*   Does the new developed feature make business sense

*   Talk to developers to improve testability of a feature

*   Ensure existing tests are updated if there is a change in the workflow

*   Maintain the test packs and ensure all tests are up to date

### **On Process Improvement / Self Development**

*   Learn about new developments in software testing

*   What are current issues with the QA process / How can current issues be solved, improved

*   Learn technical skills such as Databases, Coding, Web technologies to get a better understanding of what is happening when testing

*   Discuss with the team their thoughts about process improvements