---
layout: post
title: "No Such Thing As Negative Testing?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

[caption id="attachment_10084" align="aligncenter" width="640"]![what-is-negative-testing](http://69.164.212.71/wp-content/uploads/2015/02/what-is-negative-testing.jpg) what-is-negative-testing[/caption]

## "What is Negative Testing?"

This is a question I like to ask all the candidates I interview for QA positions.

The answer I'm usually given is that it's checking a piece of software doesn't do what it's not supposed to do, along with the textbook example of putting a numerical value in a text field and getting an appropriate error message.

But I challenge that line of thinking. By definition, a text field will not accept numerical input, and the error message is therefore expected behaviour. That's what the software is supposed to do, and you're testing to make sure it does it. So doesn't that mean that this is a positive test for an error scenario rather than a negative test? And if that's the case, is there really such a thing as negative testing?

There is, at least according to the standard definition. And it's something that any QA department worth their salt is already doing to some degree. But, just to make things even more confusing, we call it something else.

The only testing discipline that can really be considered negative by the textbook definition is exploratory testing. Shining a light into the dark corners of your software, doing odd stuff that's not even in the same postcode as the Happy Path - that really is the art of making sure the software doesn't do things it's not supposed to.

I know there are those who believe exploratory testing is a bit wishy-washy. That it's just aimless prodding in the hope of finding something, and something to fill time until the next iteration of code is available. Some even consider it a flimsy justification for the existence of manual QA in an increasingly automated world. But as automation takes the strain and ramps up the potential speed of software development, exploratory QA has become a highly skilled position.

Yes, automation is quite clearly the wave of the future, and efficient automation is compulsory for anyone who wants to be either a market leader or a fast follower in software development. But smart exploratory testing is the next evolution of manual QA.

Knowing what to prod, when to prod it, and what to prod it with are enormously important in preventing manual QA from becoming a bottleneck. It is required to maintain efficiency in agile software development teams, while still being able to give a confident assurance of quality for the code that's being progressed to production.

And most importantly, it's something that can't be automated. Robots can deal with the repetitive stuff with greater efficiency than a manual tester ever could by testing in parallel, running multiple threads in pairwise testing and so on.

But in the same way a skilled engineer can hear a single bearing that's out of kilter and will eventually grind an entire device to a halt long before any warning systems throw up an alert, a manual QA should know precisely how the latest addition to their area of the code base is likely to affect the overall system. Automation is carpet bombing. Exploratory testing is a series of targeted strikes.

A manual QA should therefore know exactly where to focus their exploratory testing, the precise moment where they should stray from the happy path, and how far into negative territory they need to wander. It's just not the negative territory that you think it is.