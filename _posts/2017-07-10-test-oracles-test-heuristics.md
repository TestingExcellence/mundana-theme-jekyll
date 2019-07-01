---
layout: post
title: "What are Test Oracles and Test Heuristics?"
author: Amir
categories: [ software testing ]
tags: [ exploratory testing ]
image: assets/images/oracles-heuristics.jpg
---

Within the world of testing and quality assurance, we often hear the words Test Oracles and Test Heuristics, but what are they and how we can implement them into our daily testing activities?

Let's see a very nice explanation of test oracles and test heuristics by [Katrina Clokie](http://katrinatester.blogspot.co.uk/2014/09/heuristics-and-oracles.html)

## Test Heuristics

Imagine that I want to eat a pickle. My pickles are stored in a large glass jar. In my household, the last person to eat a pickle was my husband. He has closed the jar tight. On my first attempt, I fail to open it.

What do I do next?

I check that I'm turning towards the left to loosen the lid and try again. Then I retrieve a tea towel to establish a better grip when twisting the lid of the jar. Finally, in some frustration, I go and locate my husband. He successfully opens the jar.

When faced with a jar that will not open there are a number of things that I know are worth trying. These are my jar opening heuristics. When I am instructed to test a software application there are a number of things that I know are worth trying. These are my test heuristics.

Heuristics are simply experience-based techniques for problem-solving, learning, and discovery. Where an exhaustive search is impractical, heuristic methods are used to speed up the process of finding a satisfactory solution. Examples of this method include using a rule of thumb, an educated guess, an intuitive judgment, or common sense.

Example:

Suppose you are testing an e-commerce website. Most e-commerce websites' search results page contains filters and sort functionalities. Through years of experience [testing e-commerce websites](/testing-e-commerce-websites/), I have come to learn that combining filters and sort options are likely to reveal interesting bugs, as this has been the case many times, therefore, on my next project, I intuitively will test some scenarios related to combining filters and sort options.

## Test Oracles

Imagine that I go to lunch with a friend. I enter a restaurant at 12 pm on Thursday. After an hour enjoying a meal, I leave the restaurant at 1 pm on Friday. Although I have experienced only one hour, the world around me has shifted by a day.

How do I know there's a problem here?

I may have several notifications on my mobile phone from friends and family wondering where I am. I may have a parking ticket. I may spot somebody reading a Friday newspaper.

There are a number of ways in which I might determine that I have skipped a day of my life. These are my time traveling oracles. There are a number of ways in which I might determine that I have discovered a bug in a software application. These are my test oracles.

Oracles are simply the principle or mechanism by which we recognize a problem. Test Oracles are basically your expected results.

Example:

Suppose you are testing the login functionality of a website. First, you might check with a valid username and valid password and _**expect **_to see either a redirect to my account page or redirect to the page prior to the login. However, after you attempt to login and you see an error 500 response, you _**know**_ that something has gone wrong.

### Oracles and Heuristics in Agile and Exploratory Testing

Both Test Oracles and Test Heuristics are vital when it comes to exploratory testing in an agile environment. When we don't have enough time to construct test cases and the product is continuously evolving, we can't just rely on pre-designed test scripts, we have to use our domain knowledge (Test Oracles) and previous testing experience (Test Heuristics) to be able to quickly design and execute tests simultaneously while also learning about the product.