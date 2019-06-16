---
layout: post
title: "How Much Testing Is Enough?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

It is possible to do enough testing but determining the how much is enough is difficult. Simply doing what is planned is not sufficient since it leaves the question as to how much should be planned.

What is enough testing can only be confirmed by assessing the results of testing. If lots of faults are found with a set of planned tests it is likely that more tests will be required to assure that the required level of software quality is achieved.

On the other hand, if very few faults are found with the planned set of tests, then (providing the planned tests can be confirmed as being of good quality) no more tests will be required.

Saying that enough testing is done when the customers or end-users are happy is a bit late, even though it is a good measure of the success of testing. However, this may not be the best test stopping criteria to use if you have very demanding end-users who are never happy!

Why not stop testing when you have proved that the system works? It is not possible to prove that a system works without exhaustive testing (which is totally impractical for real systems).

Have you tested enough when you are confident that the system works correctly? This may be a reasonable test stopping criterion, but we need to understand how well justified that confidence is. It is easy to give yourself false confidence in the quality of a system if you do not do good testing.

It is not uncommon to have one Master Test Plan which is a common document for the test phases and each test phase have their own Test Plan documents.

Ultimately, the answer to "How much testing is enough?" is "It depends!" (this was first pointed out by Bill Hetzel in his book "The Complete Guide to Software Testing"). It depends on risk, the risk of missing faults, of incurring high failure costs, of losing creditability and market share. All of these suggest that more testing is better. However, it also depends on the risk of missing a market window and the risk of over-testing (doing ineffective testing) which suggest that less testing may be better.

We should use risk to determine where to place the emphasis when testing by prioritizing our test cases. Different criteria can be used to prioritize testing including complexity, criticality, visibility and reliability.