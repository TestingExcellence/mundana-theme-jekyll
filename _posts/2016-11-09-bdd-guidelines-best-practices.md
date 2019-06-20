---
layout: post
title: "BDD Guidelines and Best Practices"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## BDD Best Practices

![bdd-best-practices](http://69.164.212.71/wp-content/uploads/2014/12/bdd-best-practices-e1433515152640.png)

### **BDD Introduction**

BDD (Behaviour Driven Development) is a methodology for developing software through continuous **example-based** communication between developers, QAs and BAs. In this article we discuss some BDD Best Practices to get the most benefit.

More than anything else, the primary purpose of BDD methodology is to encourage communication amongst the stakeholders of the project so that the context of each feature is correctly understood by all members of the team (i.e. shared understanding), before development work starts. This helps in identifying key scenarios for each story and also eradicate ambiguities from requirements.

In BDD, Examples are called Scenarios. Scenarios are structured around the _Context-Action-Outcome_ pattern and are written in a special format called **_Gherkin_**.

The scenarios are a way of explaining (in plain english) how a given feature should behave in different situations or with different input parameters.

Because Gherkin is structural, it serves both as a specification and input into automated tests, hence the name “Executable Specifications”.

### **What is a feature file and what does it contain**

Feature files are text files with **.feature** extension, which can be opened by any text editor as well as readable by any BDD-aware tool, such as Cucumber, JBehave or Behat.

Feature files should start with the context of the feature (which is essentially the story), followed by at least one scenario in the following format

**Feature:** Some terse yet descriptive text of what is desired

In order to realize a named business value  
As an explicit system actor  
I want to gain some beneficial outcome which furthers the goal

**Scenario:** Some determinable business situation

Given some precondition  
And some other precondition  
When some action by the actor  
And some other action  
And yet another action  
Then some testable outcome is achieved  
And something else we can check happens too

Scenarios in feature files should focus on the “what” rather than the “how”. The scenarios should be concise and to the point, so that the reader can quickly grasp the intent of the test without having to read a lot of irrelevant steps.

### **Why should we write feature files**

As mentioned before, the primary aim of the BDD methodology is to encourage communication amongst the delivery team. The aim of the feature files is to document the scenarios talked through in order to give an indication of how much work is involved in delivering the feature. The feature files are also the drivers for the automated tests. Feature files also serve as a definition of done (DoD), meaning that when all the scenarios have been implemented and tested successfully, we can mark the story as done.

### **Who should write feature files**

It doesn’t really matter who actually writes/types the feature files, it could be any member of the delivery team, however, the contents (scenarios) which are discussed by a trio of Dev-QA-BA are the essential part of feature files. Getting the shared common understanding of the feature is the key element.

### **When should feature files be written**

Feature files should be written during the story grooming sessions where the details of each story is discussed. Feature files containing scenarios should be written before development starts so that developers as well as QA have a clear understanding of the intent of the story. There should be a shared understanding of the story. The scenarios serve as requirements to development.

### **Where should feature files be kept**

There should be one source of truth serving both as specification and automated execution, therefore should be kept somewhere where every member of the team has easy access.

Having said that, because the feature files are the drivers of the automated tests, they should ideally be kept in source control system (GitHub) so that any updates to the feature files is immediately reflected on to the tests.

For non-technical members who have no experience with Git, we can always execute a dry-run of the feature files which will then output the list of all existing scenarios without actually exercising the feature files.

### **How should we write feature files**

There are generally two ways of writing feature files - Imperative and Declarative

**Imperative** style of writing a feature file, is very verbose, contains low level details and too much information.

Pros: person reading the feature file can follow the step-by-step

Cons: Because of too much detail, the reader can lose the point of the story and the tests. The feature file becomes too big, difficult to maintain and likely to fail due to UI updates.

**Declarative** style of writing a feature file is concise and to the point, contains only relevant information about the story.

Pros: The declarative style is more readable as it contains less steps in the scenario. The reader can easily understand the scope of the test and quickly identify if any key elements are missing.