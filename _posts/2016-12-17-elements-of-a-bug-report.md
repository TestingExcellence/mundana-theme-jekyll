---
layout: post
title: "Elements of a Bug Report"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## How to Write a Good Bug Report

![bug-report-software-defect](http://69.164.212.71/wp-content/uploads/2008/11/bug-report-software-defect-e1433245296561.jpg)

Writing a good defect or bug report goes a long way in identifying and resolving the problems quickly. In here, I list the elements that are normally included in a bug report.

In no particular order:

### **Defect Identifier, ID**

The identifier is very important in being able to refer to the defect in the reports. If a defect reporting tool is used to log defects, the ID is normally a program generated unique number which increments per defect log.

### **Summary**

The summary is an overall high level description of the defect and the observed failure. This short summary should be a highlight of the defect as this is what the developers or reviewers first see in the bug report.

### **Description**

The nature of the defect must be clearly written. If a developer reviewing the defect cannot understand and cannot follow the details of the defect, then most probably the report will be bounced back to the tester asking for more explanation and more detail which causes delays in fixing the issue.

The description should explain exactly the steps to take to reproduce the defect, along with what the expected results were and what the outcome of the test step was. The report should say at what step the failure was observed.

### **Severity**

The severity of the defect shows how sever the defect is in terms of damaging to other systems, businesses, environment and lives of people, depending on the nature of the application system. The severities are normally ranked and categorized in 4 or 5 levels, depending on organization's definition.

*   S1 - Critical: This means the defect is a show stopper with high potential damages and has no workaround to avoid the defect. An example could be the application does not launch at all and causes the operating system to shut down. This requires immediate attention and action and fix.

*   S2 - Serious: This means that some major functionalities of the applications are either missing or do not work and there is no workaround. Example, an image viewing application cannot read some common image formats.

*   S3 - Normal: This means that some major functionality do not work, but, a workaround exists to be used as a temporary solution.

*   S4 - Cosmetic / Enhancement: This means that the failure causes inconvenience and annoyance. Example can be that there is a pop-up message every 15 minutes, or you always have to click twice on a GUI button to perform the action.

*   S5 - Suggestion: This is not normally a defect and a suggestion to improve a functionality. This can be GUI or viewing preferences.

### **Priority**

Once the severity is determine, next is to see how to prioritize the resolution. The priority determines how quickly the defect should be fixed. The priority normally concerns the business importance such as impact on the project and the likely success of the product in the marketplace. Like severity, priority is also categorized in to 4 or 5 levels.

*   P1 - Urgent: Means extremely urgent and requires immediate resolution

*   P2 - High: Resolution requirement for next external release

*   P3 - Medium: Resolution required for the first deployment (rather than all deployments)

*   P4 - Low: Resolution desired for the first deployment or subsequent future releases

*   P4 - Low: Resolution desired for the first deployment or subsequent future releases

**[Read more on Severity versus Priority](http://www.testingexcellence.com/severity-and-priority-difference/)**

It is important to note that a defect which has a high severity also bears a high priority, i.e. a severe defect will require a high priority to resolve the issue as quick as possible. There can never be a high severity and low priority defect. However, a defect can have a low severity but have a high priority.

An example might be a company name is misspelled on the splash screen as the application launches. This does not cause a severe damage to the environment or people's lives, but can have potential damages to company's reputation and can harm business profits.

### **Date and Time**

The date and time that the defect occurred or reported is also essential. This is normally useful when you want to search for defects that were identified for a particular release of software or from when the testing phase started.

### **Version and Build of the Software Under Test**

This is very important too. In most cases, there are many versions of software; each version has many fixes and more functionality and enhancements to the previous versions. Therefore, it is essential to note which version of the software exhibited the failure that we are reporting. We may always refer to that version of software to reproduce the failure.

### **Reported by**

Again, this is important, because if we may need to refer to the person who raised the defect, we have to know who to contact.

### **Related requirement**

Essentially, all features of a software application can be traced to respective requirements. Hence, when a failure is observed, we can see what requirements have been impacted. This can help in reducing duplicate defect reports in that if we can identify the source requirement, then if another defect is logged with the same requirement number, we may not need report it again, if the defects are of similar nature.

### **Attachments / Evidence**

Any evidence of the failure should be captured and submitted with the defect report. This is a visual explanation of the description of the defect and helps the reviewer, developer to better understand the defect.