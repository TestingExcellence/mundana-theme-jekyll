---
layout: post
title: "Bad Requirements – A Software Tester’s Nightmare!"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

The real world is never an “ideal” place, and the same applies to so many assignments that one might work on. Numerous times in the past, as a quality professional I have been caught up in testing projects that are “not so ideal” and lack the basic documents and governance. The worst form being the one’s that either “lack” documented requirements or have some “loosely written” documents. Working on such projects literally gives me jitters and at times even sleepless nights. (It isn’t an exaggeration, the thought of making sense out of disjoint pieces of information looms in your mind all the time.) But accept it or not, projects like these are a reality and mostly one has no option but to work on them.

A Bad requirement itself is a very broad term and can be one of the following –

*   **Missing Requirements** –A functionality that is totally missing from the documentation. For example, “Error messaging” in case of data validation or other forms of failure not being considered and documented or not detailing the need for a certain link available as per the access rules on an application.

*   **Conflicting Requirements** – When two or more requirements expect the system to do different things that can’t possibly be done at the same time. They need to be identified as early in the lifecycle as possible to avoid rework.

*   **Incomplete/Unclear Requirements** – Requirements that lack all the necessary information constitute this lot. Most of the times requirements are elicited in business terms and which is nowhere close to what it demands at a granular level. For example – “The system should have the capability to filter search results” is incomplete. The details around filter criteria is not been provided and thus raises unnecessary queries.

*   **Ambiguous Requirements** – A requirement statement that can be interpreted in different ways by different people is an example of this.

Howsoever, a test analyst might crib about the quality of requirement documentation, at the end he/she can always build a test pack by using some alternative sources of information and the following practices–

*   **Explore & Discover** – If it is an existing system that is being rebuilt or new functions are being added to it, explore its test environment. Exploratory testing comes handy when you are trying to figure out on how something works. If there is a regression test suite available it will make the task easier and even if not just try out all the links/buttons/try different things and document as much as you can. With a basic level of what the new changes are and a fair understanding of the existing system, a tester can start designing some test cases. Of course there will be doubts and queries which can then be directed to relevant teams.

*   **Use Common Sense & Experience** – A test analyst who has worked in the same domain as the system under test can help. A lot of missing links in the requirements can be identified through common knowledge that comes from experience For example, someone who has worked on a Travel based application testing would know the fundamental tests needed. Also, think from the user’s perspective, what is it that would matter to a user?

*   **Use HTML Designs/Wireframes** – HTML Designs and wireframes can act as an alternative to a requirement specification. Make use of these as visual representation of what is expected of a system/application that you are going to test. A working wireframe can also help the tester understand a basic flow, however, with static HTMLs try to build a journey through pages. However, there will be a need to get this understanding signed off by business users and development teams.

*   **Discussions, Emails and Meeting Notes** – When the requirements are flaky, notes from all of these can assist in joining the missing links. Testers should proactively involve themselves in any such discussions and meetings. They are a good platform to raise questions. But don’t forget to document the outcomes from any of these. Tools like [IBM’s Rational](http://www-01.ibm.com/software/uk/rational/), [Atlassian’s Confluence](https://www.atlassian.com/software/confluence) etc can help in building a central repository for these.

*   **Query Log and Workshops with Stakeholders** - Having gathered all the information that one could, it is important to collate them in a query log and share with all the stake holders. This could as well be a starting point for getting into some workshops that may help in filling the missing blanks. As a result of these workshops, it is important to update whatever documents are available. Even though the ownership of doing this does not lie with the test team, there is no harm in keeping a local copy and making changes as & when some updates happen. Again various tools can be used to track the trail of queries and comments.

*   **Peer Reviews** - With all of the above, a tester would definitely reach a point where he/she can start scripting the scenarios and test cases. In projects with dodgy requirements, it is good practice to get the high level scenarios reviewed by the business teams so as to ensure nothing that’s critical to the user is being missed.

*   **Change Management** – Doing all of the above in parallel to writing the test scenarios would require some change management. Keeping track of any new information fed into the project or any changes in draft requirements is a key task. More importantly to implement these in the working documents (specific to testing) play an important role for an effective test plan and design.

The not so perfect projects can be an opportunity for a tester to do something outside of their usual domain and learn. It is challenging to be testing with poorly documented requirements but it is in challenges that great things lie. So connect the loose threads and test. Happy Testing!