---
layout: post
title: "Prototyping"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## What is System Testing?

![system-testing](http://69.164.212.71/wp-content/uploads/2008/11/system-testing-1.png)

System testing has two important aspects, which are distinguished in the syllabus: functional system testing and non-functional system testing. The non-functional aspects are often as important as the functional, but are generally less well specified and may therefore be more difficult to test (but not impossible). If an organization has an independent test group, it is usually at this level, i.e. it performs system testing.

### **Functional System Testing**

Functional system testing gives us the first opportunity to test the system as a whole and is in a sense the final baseline of integration testing in the small. Typically we are looking at end to end functionality from two perspectives. One of these perspectives is based on the functional requirements and is called requirement-based testing.

The other perspective is based on the business process and is called business process-based testing.

### **Requirements-based Testing**

Requirements-based testing uses a specification of the functional requirements for the system as the basis for designing tests. A good way to start is to use the table of contents of the requirement specification as an initial test inventory or list of items to test (or not to test).

We should also prioritize the requirements based on risk criteria (if this is not already done in the specification) and use this to prioritize the tests. This will ensure that the most important and most critical tests are included in the system testing effort.

### **Business process-based Testing**

Business process-based testing uses knowledge of the business profiles (or expected business profiles). Business profiles describe the birth to death situations involved in the day to day business use of the system. For example, a personnel and payroll system may have a business profile along the lines of:

Someone joins company, he or she is paid on a regular basis, he or she leaves the company.

Another business process-based view is given by user profiles. User profiles describe how much time users spend in different parts of the system. For example, consider a simple bank system that has just three functions: account maintenance, account queries and report generation.

Users of this system might spend 50% of their time using this system performing account queries, 40% of their time performing account maintenance and 10% of their time generating reports. User profile testing would require that 50% of the testing effort is spent testing account queries, 40% is spent testing account maintenance and 10% is spent testing report generation.

Use cases are popular in object-oriented development. These are not the same as test cases, since they tend to be a bit “woolly” but they form a useful basis for test cases from a business perspective.

Note that we are still looking for faults in system testing, this time in end-to-end functionality and in things that the system as a whole can do that could not be done by only a partial baseline.