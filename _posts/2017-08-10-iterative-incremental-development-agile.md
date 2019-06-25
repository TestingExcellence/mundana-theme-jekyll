---
layout: post
title: "Difference Between Iterative and Incremental Development in Agile"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---
In agile software development, what is the difference between iterative and incremental development? Are they the same thing? What is the distinction between these two words?

First, let's look at simple definitions of the two terms:

**Incremental -** adding new functionality in small chunks

**Iterative -** performing repeatedly, i.e. adding new functionality in a repetitive or cyclic manner

_From [Wikipedia](https://en.wikipedia.org/wiki/Iterative_and_incremental_development)**:**_

> Iterative development was created as a response to inefficiencies and problems found in the **[waterfall model](https://www.testingexcellence.com/waterfall-model/)**.
> 
> The basic idea behind this method is to develop a system through repeated cycles (iterative) and in smaller portions at a time (incremental), allowing software developers to take advantage of what was learned during the development of earlier parts or versions of the system. Learning comes from both the development and use of the system, where possible key steps in the process start with a simple implementation of a subset of the software requirements and iteratively enhance the evolving versions until the full system is implemented. At each iteration, design modifications are made and new functional capabilities are added.
> 
> In incremental development, system functionality is sliced into increments (portions), whereby in each increment, a slice of functionality is delivered.

The whole idea is to deliver a "working" version of a feature (however minimal) to the users so we can get feedback early in the process. Compare that with having to build a fully functional feature for few months, only to find out that what has been built doesn't meet the users' needs.

### **Iterative and Incremental Development Model Example**

Let's see an example of how iterative and incremental development and delivery works in an agile context.

Suppose you want to add a new login functionality to a website, and you decide you want to develop this using agile methodology, working in two-week delivery cycles (iterations).

**First iteration:**

The _minimum_ working version of the login functionality worth delivering to users would be

*   Create a web page where the users will see the login form
*   Add a login form with just two fields (username and password) and a login button, i.e. just a normal HTML form with _**no**_ styling or validation
*   Create a "welcome" page so when a users log in, they will see a message.

This is the first version (working but limited in functionality) of the software delivered in iteration one. This basic login feature went through design, development, and testing and delivered at the end of the iteration.

**Second iteration:**

In next iteration, we want to enhance the login functionality of what was built in the last iteration. We may decide to do

*   Build validation rules around input parameters
*   Add some CSS so the login form looks pretty
*   Display a message when user tries to login with invalid credentials

Now we have added new and enhanced existing functionality. In other words, we have _incremented_ the existing login functionality, and we did so in this iteration.

**Third iteration:**

In iteration three, we can yet again increment our login functionality, by adding

*   Forgotten password functionality
*   "Remember me" checkbox
*   Redirection mechanism to redirect to appropriate pages when users log in (rather than just a "welcome" page developed in the first iteration)

As you can see, in each iteration, we have incremented the login functionality by adding new useful features for the users. By doing so, we can get quick feedback from the users so we can add or enhance its functionality.

Over a number of iterations, we finally deliver the full solution.