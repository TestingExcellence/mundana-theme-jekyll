---
layout: post
title: "Can You Really Automate a User Journey?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

[caption id="attachment_10071" align="aligncenter" width="600"]![automating-user-journey](http://69.164.212.71/wp-content/uploads/2015/02/automating-user-journey.jpg) automating-user-journey[/caption]

Automating user journeys is an important activity during the development of a system because as the system evolves, we need to ensure that core business functionality is not broken as changes to the system is made. It is no surprise then that many companies have a large set of automated user journeys at the layer that the customer interacts with the system.

These automated tests are are typically end-to-end and are usually automated through the user interface using tools such as selenium webdriver.

**But are these automated tests, really test a user journey?**

### First, let's see What is a User Journey?

A user journey is a series of steps which represent a scenario in which a user might interact with a system. Typically, a user journey has a starting point, i.e. an entry point into the system, a series of **[transitions from one state to another](http://www.testingexcellence.com/state-transition-testing/ "state transition testing")** and a set of triggers which cause the transitions.

User journeys can help you identify customer behavior and how the users use the system or how they could potentially use the system.

When we are creating user journeys, we need to be thinking about:

*   _Context_ – Where is the user? What is around them? Are there any external factors which may be distracting them?
*   _Progression_ – How does each step enable them to get to the next?
*   _Devices_ – what device are they using?Are they a novice or expert? What features does the device have?
*   _Functionality_ – What type of functionality are they expecting? Is it achievable?
*   _Emotion_ – What is their emotional state in each step? Are they engaged, bored, annoyed? **[Read more about mapping emotion to user journeys](http://theuxreview.co.uk/driving-more-valuable-customer-journeys-with-emotion-mapping-part-1/ "Driving more valuable customer journeys with emotion mapping – Part 1")**

The important part here, is that a User Journey is a_“mental_” and _“lived”_ experience. The journey is deeply linked to_“emotions”_ and these emotions usually have a bearing on the users perception of quality.

Whilst some of the above factors can be accounted for when writing automated tests, we certainly cannot know about user's emotions, **[it is for this reason you cannot automate a user journey](https://tobythetesterblog.wordpress.com/2015/02/17/you-cannot-automate-a-user-journey-test/ "you cannot automate a user journey").**

### So, if by definition, we cannot automate user journeys, then what can we automate?

Well, we can at least check that the system functions as we expect it under certain conditions. That is, we can start mapping out the most common paths through the system and think about how users would interact with the system in each flow.

That way, we can at least ensure that users don't hit blank pages along the way, that correct and relevant information is displayed to the user and that it is possible to complete a flow or path through the system.

This form of testing is quite different to functional testing as I don't believe we should be testing the functionality through the interface. This "application path testing" doesn't really verify functionality but focuses on transitions from one state to another and verifies whether these transitions are actually possible and make sense for the user.