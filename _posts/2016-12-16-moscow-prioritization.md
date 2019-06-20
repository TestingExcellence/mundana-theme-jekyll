---
layout: post
title: "MoSCoW Prioritization in Software Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Prioritization of Requirements

![moscow-prioritization-testing](http://69.164.212.71/wp-content/uploads/2008/11/moscow-prioritization-testing.jpg)

An important factor for the success of any project is ensuring that the requirements, are prioritized. In many cases this is not done leading to sure project failure. Sometimes it is the customers' fault who want the entire system to be delivered now. Other times it is the project manager's fault because they do not discuss the project with the customer. In either case prayers for miracles are often required if the project is to have any chance of being successful. In my experience miracles rarely happen on projects.

However prioritizing is not an easy process, and even less so when done using a number system. The trouble with number systems is that it appears logically to give the features a priority of 1, 2, 3 etc. However who wants a requirement to be a "2" or even a "3"? As a result all requirements become a "1", which is useless. This can lead to having to resort to additional systems such as giving "1*" and "1**" ratings to try to sort out what is really important. Even this is subject to prioritization drift - upwards.

Even more damaging with number systems is that features that will not be developed this time are left off the list, and are ultimately lost. This means that designers and developers are unaware of these future needs, and therefore cannot select solutions which will make it easier to accommodate them at a later date.

So effective prioritization is important but how can it be done if number systems are not effective?

## MoSCoW

A more successful method is to prioritize requirements by using words that have meaning. Several schemes exist but a method popularized by the DSDM community is the acronym MoSCoW. This stands for:

**M - MUST** have this.

**S - SHOULD** have this if at all possible.

**C - COULD** have this if it does not effect anything else.

**W - WON'T** have this time but would like in the future.

The two lower case "o" are there just to make the acronym work. The importance of this method is that when prioritising the words mean something and can be used to discuss what is important.

The "Must" requirements are non-negotiable, if they are not delivered then the project is a failure, therefore it is in everybody's interest to agree what can be delivered and will be useful. Nice to have features are classified in the other categories of "Should" and "Could.

"Must" requirements must form a coherent set. They cannot just be "cherry picked" from all the others. If they are then what happens is that by default all the other requirements automatically become "Must", and the entire exercise is wasted.

Requirements marked as "Won't" are potentially as important as the "Must" category. It is not immediately obvious why this is so, but it is one of the characteristics that makes MoSCoW such a powerful technique. Classifying something as "Won't" acknowledges that it is important, but can be left for a future release. In fact a great deal of time might be spent in trying to produce a good "Won't" list. This has three important effects:

*   Users do not have to fight to get something onto a requirements list

*   In thinking about what will be required later, affects what is asked for now.

*   The designers seeing the future trend can produce solutions that can accommodate these requirements in a future release.