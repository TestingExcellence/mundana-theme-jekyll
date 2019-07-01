---
layout: post
title: "Ethical Hacking and Penetration Testing Fundamentals"
author: Amir
categories: [ cybersecurity ]
tags: [ ceh, hacking, featured ]
image: assets/images/ethical-hacking-penetration-testing.jpg
---

This blog post is an introduction to Penetration Testing and Ethical Hacking. We'll cover the basics of Pen testing and explain why penetration testing is important to organizations.

<!--more-->

We will also cover the stages of penetration testing and explain what happens at each phase.

Finally, we'll take a look at some of the tools commonly used in Penetration Testing.

## Penetration Testing - Ethical Hacking Basics

### What is Ethical Hacking?

When we think of Hacking, we often associate it with illegal or criminal activity. When a hacker attacks a system, they do so without the knowledge and consent of the owner of the system. Put simply, it is like entering someone's house without the owner's full permission and prior agreement.

Ethical hacking, on the other hand, is still hacking. It involves gathering information about a system, finding loopholes and gaining access. However, in ethical hacking, the pen tester has_** the full consent and permission**_ of the system owner. Therefore, the activity becomes ethical, i.e. done with good intentions.

Customers employ ethical hackers to improve security.

### What is Penetration Testing?

Penetration testing involves simulating real attacks to assess the risk associated with potential security breaches.

During pen testing, testers use various tools and methodologies to find vulnerabilities. They will then try to exploit the vulnerabilities to assess what attackers might gain after successful exploitation.

### Why Penetration Testing is Necessary?

Over the years, there has been a constant rise in the number of cyber threats and criminal activities involving Information Technology. Businesses need to undertake regular vulnerability assessment and penetration testing to identify weaknesses in their systems. They can then use effective measures to protect their systems against malicious hackers.

### Who Performs a Pen Test?

Ethical hackers are the people who normally carry out Penetration Testing.

In order to catch a thief, you have to think like one.

The same is true in Ethical hacking.

In order to find and fix security holes in a computer system, you have to think like a malicious hacker. You would use the same tactics, tools, and processes they might employ.

An ethical hacker employs the same tools and techniques a criminal might use. _**But**_ they do so with the customer’s full support and approval, in order to help secure a network or system.

### Penetration Testing vs Vulnerability Assessment

Vulnerability assessment examines the exposed assets (network, server, applications) for vulnerabilities. The downside of a vulnerability scan is that it frequently reports false positives. False positives may be a sign that an existing control is not fully effective.

Penetration testing goes one step further and looks at vulnerabilities and will try and exploit them.

## Types of Penetration Testing

### Black Box Penetration Testing

In black-box penetration testing, the tester has no prior knowledge about the target. This closely simulates the real-world attacks and reduces false positives.

This type of testing requires extensive research and information gathering on the target system/network. It typically consumes more time, effort, and cost to perform a black box penetration test.

### Gray-Box Penetration Testing

In gray-box penetration testing, the tester has limited or partial knowledge about the target infrastructure. They have some knowledge of security mechanisms in place.

This simulates an attack by an insider or an external hacker who has **_some_** knowledge or privileges on the target system.

### White-Box Penetration Testing

In white-box penetration testing, the testers have complete in-depth knowledge about the target infrastructure. They know about the security mechanisms in place.
This makes the test much quicker, easier, and less expensive.

This simulates an attack which could happen by an insider who has full knowledge and privileges on the target system.

### Announced Testing

In this type of testing, everyone is aware when the testing will be initiated. The IT staff the network team, and the management team all have prior knowledge of the pen testing activity.

### Unannounced Testing

In this type of testing, IT staff and support teams don't have the prior knowledge of the pen testing activity.

Only the top management is aware of the test schedule. Such testing helps determine the responsiveness of the IT and support staff in case of a security attack.

### Automated Penetration Testing

Because penetration testing involves many tasks and the attack surface area is also complex at times, it is sometimes necessary to use tools to automate many of the tasks.

The tool will run against an infrastructure at regular intervals and then share the reports with concerned teams to address the issues.

The downside of using automated tools is that they will only check for predefined vulnerabilities thus reporting false positives.

It also cannot review architecture and system integration from a security perspective. However, it is suitable for scanning multiple targets repeatedly and to complement manual testing.

### Manual Penetration Testing

In manual testing, the tester uses his own expertise and skills in order to penetrate the target system. The tester can also perform reviews of architecture and other procedural aspects in consultation with respective teams. For holistic security testing, it is best to use a combination of automated and manual testing.

## Stages of Penetration Testing

Pen testing begins with the pre-engagement phase. This involves talking to the client about their goals for the pen test and mapping out the scope of the test.

The client and the pen tester as questions and set expectations.

Some clients put boundaries on the scope of activities.

For example, the client grants permission to the tester to find vulnerabilities of a database, but not to fetch sensitive data.

The pre-engagement phase also covers other details, such as the testing window, contact information, and payment terms.

### Information Gathering

In the information-gathering phase, the pen testers search for publicly available information about the client and identify potential ways to connect to the client's systems.

The testers begin to use tools such as port scanners to get an idea of what systems are out there on the internal network as well as what software is running.

### Threat Modelling

In the threat-modeling phase, the testers use information gathered in the previous phase to determine the value of each finding and the impact on the client if the finding permitted an attacker to break into a system.

This evaluation allows the pentester to develop an action plan and methods of attack.

### Vulnerability Analysis

Before the Pen Testers can start attacking a system, they perform a vulnerability analysis. Here, Pen Testers attempt to discover weaknesses in the systems that can be taken advantage of in the next phase.

### Exploitation

In the exploitation phase, Pen Testers begin their exploit against the target system. They use previously discovered vulnerabilities in an attempt to access a client’s systems. They will try various tools and method in order to penetrate the system.

### Post Exploitation

In post-exploitation, testers evaluate the extent of damage that can be done via a particular exploit. In other words, they assess the risks.

For example, during the pen test, the testers compromised the client's system. Does that intrusion really mean anything to the client?

If you broke into a system that doesn't reveal any vital information of interest to an attacker, then so what? That vulnerability’s risk is significantly lower than if you were able to exploit a client’s development system.

### Reporting

The final phase of penetration testing is reporting. In this phase, the Pen Testers convey their findings to the customer in a meaningful way. The report informs the client what they’re doing correctly and where they need to improve their security posture.

The report may include details of each exploit and measures to correct them.

## Common Tools Used for Penetration Testing

Two of the most common tools used during pen testing are [Nmap](https://nmap.org/) and [Metasploit](https://www.metasploit.com/).

Both tools can provide a wealth of information on a target system.

Kali Linux from offensive security includes many other [tools](https://tools.kali.org/tools-listing) used in various stages of testing.

**Further reading**

[Confidentiality, Integrity, and Availability](https://www.testingexcellence.com/confidentiality-integrity-availability/)