---
layout: post
title: "Testing in Agile: The Sprint Is Too Short!"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

While many developers love Agile, testers... not so much. "It's not possible to finish all the testing in one sprint", "the sprint is too short, let's add a week", "we need two or three weeks to complete the regression"... Have you ever heard any of these? I hear them all the time.

Agile changed our approach to development but testing sometimes still comes as an afterthought. In some ways testing became even more challenging. Here's a short list, to mention just a few issues typically experienced by testers in Agile environment:

*   Testing in the midst of code changes makes it hard to establish a baseline.
*   Development drops late in the sprint cycle don't leave enough time for testing.
*   Infrequent builds/deployments create delays and downtime.
*   Not enough testers to plan, document and execute the test cases.
*   Not enough time to go through functional, integration, regression, usability, security and other testing.
*   No time to review, fix and retest defects found late in the cycle.
*   Lack of knowledge and communication across testers, developers, SMEs and other specialists.

But if we read this list carefully, we'll notice that none of these issues are really caused by the length of the sprint. Three or even four weeks instead of two wouldn't make a difference when it comes to the lack of communication or knowledge, amount of manual testing, delays caused by manual or infrequent builds, late drops, and defects found on the last day of the sprint.

> The challenges of Agile testing are not caused by the sprint length.

So what do we do?

We split the testing into two parts: tests directly related to the user stories developed during the sprint, and everything else. Then we defer the "everything else" to the end of the release, which happens every several months.

Here's the truth: all we can do during the sprint is pretty much just the functional testing. We're not doing much of the integration, regression or performance testing until right before the release. We call this final system test a "regression sprint" or "hardening sprint". Sounds familiar? If you nod in agreement, don't worry, you're not alone. This is a very typical Agile implementation across the industry.

Unfortunately, it's a BAD idea.

<div class="slate-resizable-image-embed slate-image-embed__resize-full-width" data-imgsrc="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAjMAAAAJGY2ZjIzNGJmLTRmNjEtNGYyYi1iMjVjLWI1YzA1ZDU0MTU3Ng.jpg">![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAjMAAAAJGY2ZjIzNGJmLTRmNjEtNGYyYi1iMjVjLWI1YzA1ZDU0MTU3Ng.jpg)</div>

We say we try to mitigate the issues and challenges of Agile testing, but we don't really solve the problem. By pushing the major testing effort to the very end of the release we increase the risk, compromise quality and don't use the main advantage of Agile - ability to deliver value to the customers often in small increments.

So, adding the hardening sprint doesn't really help with the problem of sprints being too short.

> The sprint is too short only if you planned more than you could realistically deliver

The real goal should be to eliminate the hardening sprint and to complete all types of testing during the sprint, however short or long it is. This way every sprint would end with a set of fully tested features that could potentially be deployed to Production or shipped to the customer. There would be no need for the context switch at the end of the release, no last minute defects and costly delays.

<div class="slate-resizable-image-embed slate-image-embed__resize-full-width" data-imgsrc="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAd_AAAAJGI5ZjQwMTUyLWQ5ZjItNGE1Ni04NWI4LTY2NTIzYmFlZDdkZQ.jpg">![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAd_AAAAJGI5ZjQwMTUyLWQ5ZjItNGE1Ni04NWI4LTY2NTIzYmFlZDdkZQ.jpg)</div>

Do you still have hardening sprints? Do you feel like your sprint is too short?

## **Then join me on this journey and make 2017 a year of high quality and true agility.**

Let's start the new year with some important decisions and pledge to make our solutions truly agile. Let's improve our quality and deliver software updates to the customers when they need them. Let's stop complaining about sprints being short and start being realistic about our planning. Let's eliminate manual builds, deployments and tests where possible, automate regression tests and run them on daily basis during the sprint. Let's update our definition of "Done" to include all types of testing.

Let's get rid of the "hardening" cycle.

## Let's complete all of our tests within the sprint!

Here's a practical guide to testing without feeling that the sprint is "too short":

<div class="slate-resizable-image-embed slate-image-embed__resize-full-width" data-imgsrc="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAgzAAAAJGJhMGM1ODdmLWRjODgtNDQyNy04MWRmLWYzYTg1ZDNiNTE5Yw.jpg">![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAgzAAAAJGJhMGM1ODdmLWRjODgtNDQyNy04MWRmLWYzYTg1ZDNiNTE5Yw.jpg)</div>

<div class="slate-resizable-image-embed slate-image-embed__resize-full-width" data-imgsrc="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAgzAAAAJGJhMGM1ODdmLWRjODgtNDQyNy04MWRmLWYzYTg1ZDNiNTE5Yw.jpg">Article published by [Katy Sherman](https://www.linkedin.com/in/katy-sherman-practical-agile)</div>