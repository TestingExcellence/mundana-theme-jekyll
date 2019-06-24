---
layout: post
title: "Software Testing - Ask the Questions!"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

![Are-you-asking-the-right-questions-software-testing](http://69.164.212.71/wp-content/uploads/2015/07/Are-you-asking-the-right-questions-software-testing.jpg)

After almost 6 years of working in software quality assurance, if someone asks me what makes a good QA resource, I would probably sum it up in 1 line. For good testing practice the most important task is to ask the right questions, at the right time and to the right audience.

In practice, the sooner a QA is involved in the SDLC of a new system or an enhancement of an existing one, lesser will be the chances of running into catastrophic bugs at the time of actual testing.

In order to start planning, a test analyst should ask as many questions right from the requirement understanding phase so as to uncover the hidden assumptions, incomplete/contradicting requirements, test environments and impact on interfaces or supporting systems.

Cross team communication from the very start of a project is the key to effective and timely test execution. A good test analyst would never hesitate to cross question on a requirement that hasn’t been detailed enough or if there is a lack of clarity on the language being used.

A requirement can be stated differently in terms of business, technical, functional and lay man user terminology, and this is where the QA resource can play a role to ensure that a requirement is drafted in a way that it can be comprehended easily by everyone.

Participation of a QA during requirement analysis can help in producing a comprehensive requirement doc without any gaps. Representation of testing team from the beginning of a project can actually bridge the requirement understanding gap between the project, technical and business teams.

In my experience, I have always noticed that documents do not state everything, and making assumptions during impact assessment is the worst mistake a test analyst can make. Analysis of the requirements document or a functional specification can arise n number of queries. These need to be categorized depending on the teams who can address them.

Questions can also be classified depending on what area they fall in. It could be related to technical specification or customer impact or interface impact or risks & project planning. An efficient QA is always interested in the bigger picture then be it knowing the objective that drives a project/enhancement or keeping oneself proactively informed of planning & timelines. Being aware of these helps the testers plan their work more effectively.

**Categorize the queries on the basis of who can answer what:**

*   **Project Sponsor/Project Manager** – Anything related to vision behind the new development is something that the sponsor or PM would know. For example - What is the objective of constructing a new product or making changes to an existing system? What purpose shall it serve? What benefit does the change hold for the users? Anything related to overall project plan as well sits with the person heading the change.

*   **Actual User community/Teams dealing with actual users** – It may not be possible to talk to the actual user community in all circumstances but anything regarding user experience can always be put forth to the teams that deal with them. A test analyst must know what is most important for the actual user in order to design the right scenarios. What are the areas of a system that are most critical to the customer, what are the problems that refrains the customer to use a system? Answers to these can facilitate in producing a comprehensive test design.

*   **Test Manager/Lead** – In a large teams, a test analyst may not have direct access to all the information. In such a scenario he/she can also have questions for the test lead. Test environments, test management and automation tools, reporting procedures, test evidence, test cycles etc needs to be agreed as part of test planning.

*   **Development Team** – Anything that is technical or relating to a specific area of code lies with the developers. For example – What part of the code is changing? What is the impact of introducing a new field on a web form? Such information helps a tester in determining and limiting the regression test suite.

*   **Solution Architect** – Who knows a system better than a person that builds the end to end architectural design for a problem. Any questions regarding component interactions, middle-ware, web services, databases should ideally be for the person who converts the functional requirements into design artifacts that are in turn used by the development team to build the code.

*   **Support Team** – When a change is done to an existing solution which is used by a wide user community, inputs from the help-desk team also prove valuable. They know what problems a customer faces while using a system.

Transparent communication channel between cross functional teams ensure consistency between business requirements and actual proposed solution. It helps in identifying non-testable requirements, environmental limitations and scope of testing very early in the life-cycle.

Something that may look like a minor change on the UI may actually have a wider impact on other components; a QA has to be aware of this so as to ensure maximum test coverage. Questions like - How does a UI change on one page of the website affects the parameters on a connecting page, what is the impact of “a new field in a form” on rest of the interfaces that may use various modes to transfer the data to other components(these modes of transfer could be XMLs, messages,  data base tables etc).

What is the error messaging text, what is the font & formatting scheme followed throughout applications/websites/ products and is it consistent with the branding of the product/website/application, what is valid data for a field on a web page, how does access rights work? These may look very basic but is often information missing from the specifications.

It is not unusual that competence of QA resources is often being measured against developers. The comparison, however, is irrelevant and unfair. Each has its own value add in the construction of a product/website/application. Both parties are required to work as a team to deliver successful software release and possess a skill set unique to them self.  As a software test analyst it is important to break a system by putting the most innovative scenarios to test. And that requires a questioning mind, so don’t shy away from giving way to your curiosity. Ask the Questions.