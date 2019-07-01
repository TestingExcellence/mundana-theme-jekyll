---
layout: post
title: "Is it Possible to do Sufficient Testing Without QA Resource?"
author: Amir
tags: [ qa, agile ]
image: assets/images/sufficient-testing-without-qa.jpg
---


A while back, Yahoo decided to **[get rid of their entire test and quality assurance team](http://spectrum.ieee.org/view-from-the-valley/computing/software/yahoos-engineers-move-to-coding-without-a-net)** and instead handing the responsibility of testing to the developers. The move was part of project Warp to move closer to continuous delivery model.

> The shift wasn't easy, Yahoo tech execs say, and required some "tough parenting." But the result has been fewer errors because "when you have humans everywhere, checking this, checking that, they add so much human error into the chain that, when you take them out, even if you fail sometimes, overall you are doing better." And the pain wasn't as great as expected. Yahoo's chief architect and SVP of science and technology discuss the transition.

Now the question that remains to be answered is, is it possible to do sufficient testing of software application with just the developers and BAs and no QA resource?

There are two schools of thoughts here:

One is the belief that all bugs are related to code and that if you have a very high percentage of test coverage for your code, then essentially you should have no bugs. As testers, we all know that this is not true!

The other belief is that you do sufficient unit testing and also do integration, system and user acceptance testing to ensure application is fit for purpose. While this seems a nice idea, it is not practical as developers need to get on coding new features!

Both of these beliefs are extreme.

Testing your own code can be effective, because as a developer you know which part of your code is complex and more likely to be buggy, so you would focus on that area. Also, knowing there is no more QA, you are forced to write quality code, as one developer puts it

> In my first job, I didn't have QA. It was up to me to make sure my own code was quality enough before releasing it, and that aspect terrified me enough that I did learn to write quality code (which basically means you are testing your own code thoroughly, doing your own QA).

### Is Developer Testing Enough?

I believe it is a good move to encourage software developers to take ownership of the quality of their own code, however when you test your own code, you're more than likely to miss an entire classes of bugs.

You can be very effective at catching the kinds of bugs you can think of, but those are always the easiest bugs to catch in the first place. The tests you write for yourself will never do a good job of catching errors in your assumptions about what the code should do, what kinds of inputs it needs to handle, etc. Catching those kinds of conceptual bugs really requires adversarial testing from somebody who isn't starting from the same set of assumptions.

> Working as an automation tester meant that I had to focus on testing and coding both at the same time, and I often struggled! When I was coding the tests, I just wanted to make sure the code executes and make the test pass, I wasn't too bothered about what the actual test was because my main focus was on coding. Soon I realised I was automating useless tests which provided no value.

Another important point to note is that unit testing only catches programmer errors in code, unit testing does not detect failures in the application, which means if you have 100% code coverage, that does not mean a bug free application.

> While it's always necessary to test your own code via unit tests before it's passed on, it's also important to have that second set of eyes on it from a behavioural standpoint. Often we're too close to the code to really beat it up properly and subject it to really weird edge cases, and good QA people are quite adept at doing that. Testing at the system level by another set of users such as testers can often reveal very interesting bugs.

Also, it's not all about functional testing. We have to care and worry about performance testing, security testing, usability testing, etc, which is required if we want to release a high quality software.

### Why we Still Need QA?

Testers are sometimes seen as bottleneck to the whole delivery pipeline. Would it not be so much better if everything was automated with no manual intervention and no testers raising bugs to stop the release?

Part of the problem when testers are seen as bottlenecks is because of lack of ownership of quality amongst developers. If everyone truly felt that they were responsible for the quality of the product (not just code) then developers and testers work towards the same goal.

Testers can pair with developers to write better unit tests and developers can help testers with writing automated checks and also educate testers about the architecture of the application so that they can design good tests to find the areas most likely to break during system testing.

In an ideal world, **testers should not find any defects,** or at least trivial defects. When there is a "team of QA" whose job is to find defects, it is tempting for developers to just rely on testers to find all the defects while the developers focus on development and coding.

While Yahoo's move in eliminating the QA and Testing department encourages developers to take ownership of the quality of the product, it is still not good enough to ensure a robust product. Having said that, even with a team of testers you still cannot guarantee a bug-free software, but what is important is making sure that the software is looked at from various points of views and from different perspectives and that's where the real benefit of having a good QA function (as opposed to QA team) comes.

Testers can ensure developers follow best quality assurance practices and assist with technical and business test designs to help identify the most critical bugs before releasing software.