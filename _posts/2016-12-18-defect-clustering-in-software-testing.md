---
layout: post
title: "Defect Clustering in Software Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

[caption id="attachment_10047" align="aligncenter" width="493"]![defect-clustering-istqb](http://69.164.212.71/wp-content/uploads/2008/11/defect-clustering-software-testing1.jpg) defect-clustering-istqb[/caption]

## What is Defect Clustering in Software Testing?

Defect Clustering in Software Testing is one of the **[seven principles of ISEB Software Testing](http://www.testingexcellence.com/seven-principles-of-software-testing/ "seven principles of software testing").**

During software testing, as defects are found, analysis of defects can give surprising results!

Defect Clustering in Software Testing means that the majority of the defects are caused by a small number of modules, i.e. the distribution of defects are not across the application but rather centralized in limited sections of the application.

This is particularly true for large systems where the complexity, size, change and developer mistakes can impact the quality of the system and affect particular modules.

Defect Clustering in Software Testing is based on the Pareto principle, also known as the 80-20 rule, where it is stated that approximately 80% of the problems are caused by 20% of the modules.

In this image the principle of defect clustering in software testing can be seen that most of the defects are clustered in particular sections of the application of an application e.g. Product Details, Reviews and Search Results Page for an e-commerce website and the remaining defects in other areas.

This can give a good indication that when a defect is found in one area of the application, chances are there are more defects in that particular area, so it is worth investing more time to test that particular area of the application to find as many defects as possible. However, testers should not ignore to test the rest of application as well as there may be other defects scattered around.

Defect aggregation or defect clustering in software testing can also indicate which area of the application needs more **[regression testing](http://www.testingexcellence.com/best-practices-for-regression-testing/)** to ensure related features are not broken.

Analysis of test execution reports and grouping of the defects by features of the application produces a histogram which proves the principle of defect clustering in software testing. This helps with understanding of the defects better and also help with test case prioritization **[when there is not enough time to execute all the tests](http://www.testingexcellence.com/what-if-there-isnt-enough-time-for-thorough-testing/)**.