---
layout: post
title: "Is it Possible to Automate Stories During the Sprint?"
author: Amir
tags: [ agile, qa ]
image: assets/images/automate-stories-during-sprint.jpg
---

### Test Automation During Sprint

**Question**

My team uses Scrum to develop a web application. As an Automation Tester in the team, I’m often asked to automate the stories within the sprint, even when the developer hasn’t even finished the story.

If it’s at the beginning of the sprint, I have time to automate the story during the sprint, but towards the end of the sprint, I don’t get enough time to automate the last stories.

Any suggestions on how I can complete the automation of the stories within the current sprint?

**Answer**

The automated task for every story should be the story’s definition of done. Ideally you should aim to automate the stories within the current sprint.

The way to do this is to have an automation framework which speeds up writing automated scripts, so that you just focus on the scenarios rather than spending time creating functions.

In your test automation framework, you need to separate the layers. The base layer should be your application framework code that talks to the automation tool, such as WebDriver.

The next layer up is your page objects which model your applications. In these classes or page objects you need to write many functions to full control over writing user scenarios. This is where the magic happens and how things are done.

The last layer is your scenarios. These should just call the functions in your page objects. You only need to define what needs to be done and the page objects should take care of it.

In this way even when you have a short time at the end of the sprint, you can quickly create automated scenarios if you have a solid foundation.

Automating regression tests during the sprint requires discipline.

The scope of the regression tests increases and so the maintenance also increases. You need to be aware that [not all tests require to be automated](/why-would-you-want-to-automate-a-test/).

You should only automate the tests that provide value for the business.
