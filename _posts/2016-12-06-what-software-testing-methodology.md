---
layout: post
title: "What is Software Testing Methodology?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Choosing a Testing Methodology

[caption id="attachment_10195" align="aligncenter" width="517"]![testing-methodology](http://69.164.212.71/wp-content/uploads/2009/11/testing-methodology.png) testing-methodology[/caption]

**Testing methodologies** are approaches to testing, from unit testing through system testing and beyond. There is no formally recognized body of testing methodologies, and very rarely will you ever find a unified set of definitions. But here are some common methodologies:

### **Unit testing**

The act of testing software at the most basic (object) level. Generally performed by developers, run in "friend classes" with code-level access to read and manipulate objects.

### **Acceptance testing**

Also known as acceptance tests, build verification tests, basic verification tests, these are rudimentary tests which prove whether or not a given build is worth deeper testing. The term "smoke test" is a colloquial term -- when machines are built, engineers will power them up and just let them run, looking for smoke as a sign of serious problems.

### **Functional testing**

Functional testing takes a user story or a product feature and tests all of the functionality contained within that feature. For example, in a photo application like Photoshop, functional testing would cover all the functionality contained within a feature like opening files (resolving file paths, determining appropriate format filters, passing the file path off to the filter) as well as handling errors within that functionality.

### **System testing**

Testing the project as a collective system. For the Photoshop application, an example would be to open a file in a given format, manipulate that file in various ways, and then output the file. System testing generally combines multiple features into an end-to-end process or scenario.

### **Performance testing**

Tests an application's performance characteristics, be it file size, concurrent users, or mean-time-to-failure. Performance Testing can give us a measure of how the application responds to requests and how the application behaves under load.

### **Security testing**

A collection of tests focused on probing an application's security, or its ability to protect user assets.

Other people consider approaches to testing to be testing methodologies. For instance, boundary testing (finding the limits of a feature, then testing at that limit, below the limit, and above the limit); pairwise or combinatorial testing, wherein a tester takes a very scientific approach to testing combinations of input variables, etc.

Two fantastic sources for learning more about testing methodologies are Cem Kaner's Testing Computer Software (very formal, organized approach to testing) and Lessons Learned in Software Testing by Kaner, Bach, Pettichord, which is less formal, but full of interesting tips on software testing technique.