---
layout: post
title: "Iterative Model"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## What is the Iterative Model?

[caption id="attachment_10210" align="aligncenter" width="600"]![iterative-model](http://69.164.212.71/wp-content/uploads/2008/11/iterative-model.jpg) iterative-model[/caption]

An iterative life cycle model does not attempt to start with a full specification of requirements. Instead, development begins by specifying and implementing just part of the software, which can then be reviewed in order to identify further requirements. This process is then repeated, producing a new version of the software for each cycle of the model.

Consider an iterative life cycle model which consists of repeating the following four phases in sequence:

**A Requirements phase,** in which the requirements for the software are gathered and analysed. Iteration should eventually result in a requirements phase that produces a complete and final specification of requirements.

**A Design phase,** in which a software solution to meet the requirements is designed. This may be a new design, or an extension of an earlier design.

**An Implementation and Test phase,** when the software is coded, integrated and tested.

**A Review phase,** in which the software is evaluated, the current requirements are reviewed, and changes and additions to requirements proposed.

For each cycle of the model, a decision has to be made as to whether the software produced by the cycle will be discarded, or kept as a starting point for the next cycle (sometimes referred to as **[incremental prototyping](http://www.testingexcellence.com/incremental-model-2/ "Incremental Model")**). Eventually a point will be reached where the requirements are complete and the software can be delivered, or it becomes impossible to enhance the software as required, and a fresh start has to be made.

The iterative life cycle model can be likened to producing software by successive approximation. Drawing an analogy with mathematical methods that use successive approximation to arrive at a final solution, the benefit of such methods depends on how rapidly they converge on a solution.

The key to successful use of an iterative software development life cycle is rigorous validation of requirements, and verification (including testing) of each version of the software against those requirements within each cycle of the model.

The first three phases of the example iterative model is in fact an abbreviated form of a sequential **[V Model](http://www.testingexcellence.com/v-model/ "V Model")** or **[waterfall Model](http://www.testingexcellence.com/waterfall-model/ "Waterfall Model in Software Testing")** of development. Each cycle of the model produces software that requires testing at the unit level, for software integration, for system integration and for acceptance. As the software evolves through successive cycles, tests have to be repeated and extended to verify each version of the software.

### **Advantages of Iterative Model**

*   Generates working software quickly and early during the software life cycle.
*   More flexible – less costly to change scope and requirements.
*   Easier to test and debug during a smaller iteration.
*   Easier to manage risk because risky pieces are identified and handled during its iteration.
*   Each iteration is an easily managed milestone.

### **Disadvantages of Iterative Model**

*   Each phase of an iteration is rigid and do not overlap each other.
*   Problems may arise pertaining to system architecture because not all requirements are gathered up front for the entire software life cycle.