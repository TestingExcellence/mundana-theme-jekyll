---
layout: post
title: "Exploratory Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## What is Exploratory Testing?

[caption id="attachment_10175" align="aligncenter" width="454"]![exploratory-testing-technique](http://69.164.212.71/wp-content/uploads/2008/11/exploratory-testing-technique.png) exploratory-testing-technique[/caption]

Have you ever tested a piece of software that you were not very familiar with? Also, you might not have had the luxury of ready-made test cases at hand and could not afford spending time to write them. Nevertheless you went ahead to test the product and did a quite a good job.

If you remember, it required a lot of logical thinking, formulating your thoughts into test cases in real time and concurrently executing them. The all-important question that arises here is- “Is this sort of testing justified and is it productive?” Both these queries were quite well answered when I stumbled on the form of testing called- exploratory testing. According to **Cem Kaner** who has coined the term “exploratory testing”, “most testers spend 25% of their time doing exploratory testing, with 25% creating and documenting new test cases and 50% doing regression testing (i.e. running old tests).”

Let us delve a little further into what exploratory testing is all about. Over the last few years exploratory testing has been recognized as a very powerful and interesting form of testing. Here a test case is designed and executed concurrently, unlike scripted testing (manual or automated), where you have your test cases created prior to actual testing. This from of testing does not really adhere to a pre-defined plan. Please don’t confuse this with “ad-hoc” testing, which is looking for defects randomly.

The most important distinction between “ad-hoc” testing and exploratory testing is that the former can be carried out by anyone but exploratory testing is a thoughtful approach to testing and driven by logic. It is an intellectually challenging process where one is limited only by ones own imagination and understanding of the software being tested. It provides enough scope to extend the reach of testing to certain areas that cannot be easily accommodated in a scripted test case. James Bach, whose contributions and research works have been instrumental in establishing exploratory testing as a useful test methodology, has identified five key elements that an exploratory tester should focus on:

**Product Exploration**  
As you discover a product, make a note of its functions, their purpose, types of data processed, and areas of potential instability. How well you comprehend the product, the underlying technologies and the time available will determine the effectiveness with which you perform exploration. As you explore, you should construct a mental-model of how the product works.

**Test Design**  
You should decide on strategies related to the way you will test the product, observe results, and make inferences.

**Test Execution**  
This involves testing the product and observing its behavior. The information gathered should be used to formulate hypotheses about the functionality of the product. It’s also beneficial to document test ideas that occur to you while testing.

**Heuristics**  
These are a set of rules that help you define what is to be tested and how.

**Reviewable Results**  
The intention of exploratory testing is to produce results. Once you have produced deliverables that meet the specified requirements you can say that it is complete. From a QA perspective, the deliverables must be reviewable and defensible for certification.

A good point to start exploratory testing is when we come across a new or unstable product or software that has not been tested. It is also useful if you are aiming for fast results, trying to reproduce a bug, simplify defect reports. As the stability of a product increases, it can be complemented by scripted testing- manual or automated.

While scripted tests give you a more detailed idea of the test coverage, especially during regression test cycles, exploratory can unearth new defects and extend your existing test cases. The knowledge gained during exploratory testing can be used to augment scripted testing by setting up a feedback mechanism to update existing test cases or create new ones. Despite the differences in the approaches both these forms of testing are perfectly compatible and go hand-in-hand.