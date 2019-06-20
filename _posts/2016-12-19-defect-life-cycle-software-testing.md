---
layout: post
title: "Defect Life Cycle in Software Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Defect Life Cycle is the stages that the defect or bug goes through from when it is first reported until it is fixed and confirmed.

### **Introduction**

Finding and reporting defects are core activities of the testing team. In this article I explain the Software Defect Life Cycle and the Defect Process in general. I will list all the activities for each stage of the process that are commonly performed in a typical software testing environment.

Also, in this article, I have assumed that the development team have developed a software application and is at least to a stage that is ready for testing.

The process is not leaning to any particular development model as I believe this generic process is suitable for any development model. In other words, the process in itself is generic for all development models; however, the amount of activities, required inputs and produced outputs will depend on the type and complexity of the application, organisation’s view on testing and the structure of the project.

### **Defect Life cycle**

Generally speaking, the defect life cycle is made up of four stages:

Stage 1, defects are found and reported.

Stage 2, defects are reviewed and delegated.

Stage 3, defects are debugged and removed.

Stage 4, removed defects are confirmed.

### **Stage 1: Defects are found and reported by the testing team**

After the development team have developed the software and is ready for testing, the software is then released to the testing team. Items released to testing generally include Software Requirement Specification (SRS), Software Design Specification (SDS), executable application and any third party libraries that may be required to make the application work.

Once the application is available to testing team, testing of the application starts based on the Test Procedures. The activities may include Functional Testing, Non-Functional Testing, Performance Testing, etc.

During testing, testers may find defects either in the application or in the documents e.g. test procedure.

If a defect is found, either in the application (source code) or in the document, a defect report form is filled and passed on to the test team lead or test manager for review.

Defect Status is: Open and Not Reviewed. This is the first stage of defect life cycle.

### **Stage 2: Defects are reviewed and delegated**

Defects get reviewed first by test team lead for any obvious mistakes by the testers, such as missing information on the defect form (see Defect Reporting) and then reported to software development manager for further review.

A meeting is scheduled which includes members of the development team and testing team to discuss the validity, severity and priority of the defects.  
At this stage, defects are categorised into three different states:

*   Not a defect

*   Defect will be fixed

*   Defect won’t be fixed in this release

Defect Status is: Reviewed and Assigned. This is the second stage of defect life cycle.

### **Stage 3: Defects are debugged and removed**

After the meeting and agreed actions, the software development manager delegates defects to different developers in the team.

For defects that are not going to be fixed in the current version of the software, an impact analysis must be performed to identify any potential failures that may occur as a result of the existing defects in the system.

Developers will analyse the source code to identify the root cause and ultimately remove the defect.

Defect Status is: Being Debugged. This is the third stage of defect life cycle

### **Stage 4: Removed defects are confirmed**

The “Fixed” version of the software will be released to the testing team and testers will start to test the “fixed” software. At this stage, two types of testing are performed by the testers: confirmation testing and regression testing.

Based on the outcome of the confirmation testing, the “fixed” defects are either confirmed as fixed (defect is removed) or not fixed (defect still exists).

For defects that are fixed, their status is changed to fixed and can be closed.

For defects that are not fixed, i.e. they still exist in the system, they go round the cycle again, i.e. are reported to the development team, gets reviewed by the development team, faults are removed, a new version of software is released to testing for confirmation + regression testing and so on.

This cycle is repeated until all the defects (that were decided to be fixed in the current version) are fixed and verified by testers.

Defect Status is Fixed & Closed. This is the fourth and last stage of defect life cycle.

The model explained above is a generic model explaining the defect life cycle. Defect management is an important aspect of software testing and if managed properly it should reduce a lot of overheads. Following a defined lifecycle can help in managing the defect process and increase the productivity of the testing team.