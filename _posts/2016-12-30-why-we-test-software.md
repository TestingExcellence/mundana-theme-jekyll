---
layout: post
title: "Why We Test Software"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

### Why is software testing necessary?

Software Testing is necessary because the existence of faults in software is inevitable. Beyond fault-detection, the modern view of testing holds that fault-prevention (e.g. early fault detection/removal from requirements, designs etc. through static tests) is at least as important as detecting faults in software by executing dynamic tests.

### What are errors, faults and failures?

**An error is** a human action producing an incorrect result.  
The error is the activity undertaken by an analyst, designer, developer, or tester whose outcome is a fault in the deliverable being produced.

When programmers make errors, they introduce faults to program code. We usually think of programmers when we mention errors, but any person involved in the development activities can make the error, which injects a fault into a deliverable.

**A fault is** a manifestation of human error in software.  
A fault in software is caused by an unintentional action by someone building a deliverable. We normally think of programmers when we talk about software faults and human error.

Human error causes faults in any project deliverable. Faults may be caused by requirements, design or coding errors.

All software development activities are prone to error. Faults may occur in all software deliverables when they are first being written or when they are being maintained.

**A failure is** a deviation of the software from its expected delivery or service.  
Software fails when it behaves in a different way that we expect or require. If we use the software properly and enter data correctly into the software but it behaves in an unexpected way, we say it fails. Software faults cause software failures when the program is executed with a set of inputs that expose the fault.

It is very important to note that not all software faults cause failures and many faults in the software can go unnoticed for a long period of time and may never be found. On the other hand, defect clustering is a characteristic of testing a large software application.

You cannot tell whether software fails unless you know how the software is meant to behave. This might be explicitly stated in requirements or you might have a sensible expectation that the software should not ‘crash’.

