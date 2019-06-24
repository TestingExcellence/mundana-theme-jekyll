---
layout: post
title: "Can Agile Succeed Without Automated Testing?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Is Automated Testing really necessary in agile projects? Can we be agile without any automated testing?

When we talk about automated testing, we have to know which layer (unit, API, UI) we are talking about.

I have worked in many organisations which were agile, but the status of automated testing at all layers was so poor and ineffective that it was like non-existent, YET, they were releasing software every two weeks in production without much hiccup.

I’m not saying that automated testing is a waste of time, but I have seen people releasing software by just manual testing.

However, the problem with not having any automated tests is that whenever you want to release software to production you release with fear and no confidence that the software is robust, because there is only so much you can test manually.

I would say, you do need automated unit tests and automated integration/api tests, but maybe not necessary to have a full suite of long automated end-to-end tests through the UI, as they are slow to run and costly to maintain.

So, to conclude, automated testing helps agile projects deliver better quality code through continuous checking and providing fast feedback, so one would say it is an essential element of agile projects, however, it provides the most value when the whole team is responsible for test automation and that the tests are automated at unit and API layer.

Tests through the UI should only check user journeys rather than a full functional verification of every feature.