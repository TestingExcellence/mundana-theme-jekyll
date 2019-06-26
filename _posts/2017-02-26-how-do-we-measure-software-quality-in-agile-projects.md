---
layout: post
title: "How do we Measure Software Quality in Agile Projects?"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

**Question**

In agile, what metrics should be used to measure the quality of software? I know quality is largely subjective and can mean different things to different people, but what KPIs should be chosen if we want to measure quality?

Of course, the ultimate indicator is the number of high priority defects leaked to production as a result of a release of new features and perhaps (if we are in an agile setup) the number of committed stories to actual delivered stories. But what other factors can be used to measure quality?

* * *

**Answer**

It's important to measure software quality but it's difficult to identify meaningful metrics. When no bugs have been identified does that mean the software is of the highest quality? On the other hand, when a large number of bugs have been created does that mean the QA team is doing a great job and the software is crap?

The value is determined by the quality of the bugs and the QA process but how is that measured? I guess the closest we can come to a meaningful software quality metric is the number of bugs that make their way to the customer and the impact those bugs have on the users of the software.

Another way of looking at it is that we develop software for a purpose, which is satisfying the need of a user. We deliver value, not quality, so the best thing to do it to make sure whatever you're doing delivers something valuable to your user. What _**is**_ important is how you deliver this value to your users and how quickly and how frequently. This is all related to the process and pipeline of software delivery.

Rather than trying to measure software quality via some metrics, why not focus on trying to create a perfect delivery model?

Within an agile context, you might want to take the following into account:

*   Ensure user stories have clear, concise and understandable **[acceptance criteria](http://www.testingexcellence.com/acceptance-criteria-vs-acceptance-tests/)**
*   Before development begins, ensure **[everyone in the team](http://www.testingexcellence.com/overview-of-scrum-agile-development-methodology/)** (developers, designers, testers) has the same understanding of the need of the user stories
*   Encourage 3 amigos meeting to flesh out the requirements and design decent scenarios
*   Test the stories as they are being developed - Code reviews, Unit tests, pairing to provide early feedback
*   Ensure you deliver what you commit to at the beginning of the sprint
*   Ensure you don't release high priority defects to production which have customer impact, easier said than done!
*   No rollbacks - this is easy to measure - number of rollbacks could indicate a very broken process

To create a "quality product", we need to have a quality process in place. By practising the above activities, it helps to create a smooth software **[delivery pipeline](http://www.testingexcellence.com/delivery-pipeline-agile-project/)** which provides value for the users.

Other metrics to consider are

*   Measuring Velocity over time including how many Story Points was committed to vs. how many was actually completed in a sprint (see if we're right sizing our stories/sprints and may show a scope issue).
*   Measuring the number of defects alongside velocity to see if there are any correlations with Velocity and number of defects per sprint.

In ISO 25010 standards, there are 8 leading factors, each having certain attributes that can be tested with different kinds of tests.

Generally, a high-quality software has great levels of

*   **Maintainability** (it is easy to maintain the code and add amendments)
*   **Portability** (Easy to install, replace, adapt to new environments)
*   **Functionality** (It does what it is intended to do)
*   **Performance** (it works quickly without using too many resources, even when many people access the software at the same time, across the globe)
*   **Compatibility** (the software is compatible with several components)
*   **Usability** (easy to use without needing instructions, even for people with disabilities)
*   **Reliability** (we can trust the software will work and overcome issues)
*   **Security** (important information cannot be extracted by hackers)

But, for each software, some of these will be more important than others, depending on for what and by whom the system will be used.