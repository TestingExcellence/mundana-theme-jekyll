---
layout: post
title: "How Does Testing Fit Within Agile Development?"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

**Question:**

> I’m just wondering how you carry out testing activities in an agile environment? What processes, tools, and techniques are used in agile testing?

* * *

**Answer:**

Testing in agile is not just the testing activities typically carried out in the traditional model, but rather spans the full spectrum of quality assurance practices. In fact, this is why testers in agile are normally referred to as QAs. In agile, testing supports development in parallel.

Testing in agile is embedded within the development work. i.e. we test as we build, rather than having a phase of testing activities.

Testing in agile has two primary goals:

*   a – defect prevention rather than defect detection
*   b – providing fast feedback to the team by means of automated tests

Testing in agile differs from traditional methods in that there is no time to write test cases and test plans ahead of the sprint, therefore, exploratory testing (mind maps, **[heuristics, and oracles](https://www.testingexcellence.com/test-oracles-test-heuristics/)**), risk based testing and automated regression testing prevail.

Typically testers get involved from the very beginning of development, starting from reviewing user stories to ensure they adhere to the [INVEST](https://www.agilealliance.org/glossary/invest/#q=~(filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'invest))~searchTerm~'~sort~false~sortDirection~'asc~page~1)) principle. Participate in 3-amigos session to flesh out the details of the stories and acceptance criteria. If the organization is implementing BDD, scenarios can be written in Gherkin language to then be hooked with step definitions (using cucumber or similar tool) which exercise the system under test.

The automated tests (unit/api) are run in a **[CI/CD pipeline](https://www.testingexcellence.com/delivery-pipeline-agile-project/)** as part of every new build.  
UI automated tests can also be part of the build in CI/CD pipeline as long as they run relatively quick.