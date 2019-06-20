---
layout: post
title: "Black Box Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## What is Black Box Testing?

In Black Box Testing, the tester tests an application without knowledge of the internal workings of the application being tested. Data are entered into the application and the outcome is compared with the expected results; what the program does with the input data or how the program arrives at the output data is not a concern for the tester performing black box testing. All that is tested is the behavior of the functions being tested.

This is why black box testing is also known as functional testing which tests the functionality of a program. Note we can also have non-functional black box testing, such as performance testing which is a type of black box testing but instead of verifying the behavior of the system, it tests how long it takes for a function to respond to user's inputs and how long it takes to process the data and generate outputs.

Because black box testing is not concerned with the underlying code, then the techniques can be derived from the requirement documents or design specifications and hence testing can start as soon as the requirements are written.

Some Black Box Testing Techniques are:

*   **[Equivalence Partitioning](http://testingexcellence.com/equivalence-partitioning)**

*   **[Boundary Value Analysis](http://testingexcellence.com/boundary-value-analysis)**

*   **[State Transition Testing](http://testingexcellence.com/state-transition-testing)**

*   Cause / Effect Graphing

*   Classification Tree Method

**Advantages of Black Box Testing are:**

*   The test is unbiased because the designer and the tester are independent of each other

*   The tester does not need knowledge of any specific programming languages

*   The test is done from the point of view of the user, not the designer

*   Test cases can be designed as soon as the specifications are complete

**Disadvantages of Black Box Testing are:**

*   The test can be redundant if the software designer has already run a test case

*   The test cases are difficult to design

*   Testing every possible input stream is unrealistic because it would take a inordinate amount of time; therefore, many program paths will go untested