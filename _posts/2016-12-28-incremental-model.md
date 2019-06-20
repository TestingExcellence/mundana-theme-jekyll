---
layout: post
title: "Incremental Model"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## What is the Incremental Model?

[caption id="attachment_10207" align="aligncenter" width="507"]![incremental-model](http://69.164.212.71/wp-content/uploads/2008/11/incremental-model-e1425812395282.jpg) incremental-model[/caption]

The incremental build model is a method of software development where the model is designed, implemented and tested incrementally (a little more is added each time) until the product is finished. It involves both development and maintenance. The product is defined as finished when it satisfies all of its requirements. This model combines the elements of the waterfall model with the iterative philosophy of prototyping.

The product is decomposed into a number of components, each of which are designed and built separately (termed as builds). Each component is delivered to the client when it is complete. This allows partial utilisation of product and avoids a long development time. It also creates a large initial capital outlay with the subsequent long wait avoided. This model of development also helps ease the traumatic effect of introducing completely new system all at once.

There are some problems with this model. One is that each new build must be integrated with previous builds and any existing systems. The task of decomposing product into builds not trivial either. If there are too few few builds and each build degenerates this turns into Build-And-Fix model. However if there are too many builds then there is little added utility from each build.

### What is the difference between Incremental Model and Iterative Model?

The **Incremental Approach** uses a set number of steps and development goes from start to finish in a linear path of progression.

Incremental development is done in steps from design, implementation, testing/verification, maintenance. These can be broken down further into sub-steps but most incremental models follow that same pattern. The **[Waterfall Model](http://en.wikipedia.org/wiki/Waterfall_model)** is a traditional incremental development approach.

The **Iterative Approach** has no set number of steps, rather development is done in cycles.

Iterative development is less concerned with tracking the progress of individual features. Instead, focus is put on creating a working prototype first and adding features in development cycles where the Increment Development steps are done for every cycle. **[Agile Modeling](http://en.wikipedia.org/wiki/Agile_Modeling)** is a typical iterative approach.

### **Advantages of Incremental Model**

*   Generates working software quickly and early during the software life cycle.
*   More flexible – less costly to change scope and requirements.
*   Easier to test and debug during a smaller iteration.
*   Easier to manage risk because risky pieces are identified and handled during its iteration.
*   Each iteration is an easily managed milestone.

### **Disadvantages of Incremental Model**

*   Each phase of an iteration is rigid and do not overlap each other.
*   Problems may arise pertaining to system architecture because not all requirements are gathered up front for the entire software life cycle.

### **When to use Incremental Model**

*   Such models are used where requirements are clear and can implement by phase wise. From the figure it’s clear that the requirements ® is divided into R1, R2……….Rn and delivered accordingly.
*   Mostly such model is used in web applications and product based companies.