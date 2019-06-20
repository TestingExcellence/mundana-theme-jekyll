---
layout: post
title: "Severity and Priority - What is the Difference?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Severity and Priority

[caption id="attachment_10100" align="aligncenter" width="467"]![severity-vs-priority-testing](http://69.164.212.71/wp-content/uploads/2010/05/severity-vs-priority-testing-e1433244769589.jpg) severity-vs-priority-testing[/caption]

Both Severity and Priority are attributes of a defect and should be provided in the bug report. This information is used to determine how quickly a bug should be fixed.

Severity of a defect is related to how severe a bug is. Usually the severity is defined in terms of financial loss, damage to environment, company's reputation and loss of life.

Priority of a defect is related to how quickly a bug should be fixed and deployed to live servers. When a defect is of high severity, most likely it will also have a high priority. Likewise, a low severity defect will normally have a low priority as well.

Although it is recommended to provide both Severity and Priority when submitting a defect report, many companies will use just one, normally priority.

In the bug report, Severity and Priority are normally filled in by the person writing the bug report, but should be reviewed by the whole team.

### **High Severity - High Priority bug**

This is when major path through the application is broken, for example, on an eCommerce website, every customers get error message on the booking form and cannot place orders, or the product page throws a Error 500 response.

### **High Severity - Low Priority bug**

This happens when the bug causes major problems, but it only happens in very rare conditions or situations, for example, customers who use very old browsers cannot continue with their purchase of a product. Because the number of customers with very old browsers is very low, it is not a high priority to fix the issue.

### **High Priority - Low Severity bug**

This could happen when, for example, the logo or name of the company is not displayed on the website. It is important to fix the issue as soon as possible, although it may not cause a lot of damage.

### **Low Priority - Low Severity bug**

For cases where the bug doesn't cause disaster and only affects very small number of customers, both Severity and Priority are assigned low, for example, the privacy policy page take a long time to load. Not many people view the privacy policy page and slow loading doesn't affect the customers much.

The above are just examples. It is the team who should decide the Severity and Priority for each bug.

[More information on Software Defects](http://en.wikipedia.org/wiki/Software_bug)