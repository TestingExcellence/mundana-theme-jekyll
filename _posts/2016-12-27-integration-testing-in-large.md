---
layout: post
title: "Integration Testing in Large"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## What is Integration Testing in Large?

This stage of testing is concerned with the testing of the system with other systems and networks. There is an analogy of building a house - our finished house (system) now needs to talk with the outside world:  
Our house needs electricity, gas, water, communications, TV etc to function properly. So too does our system - it needs to interface with different networks and operating systems and communications middleware.

Our house needs to co-exist with other houses and blend in with the community - so too does our system - it needs to sit alongside other systems such as billing, stock, personnel systems etc;

Our new system may need information from outside the organization such as interest rates, foreign exchange etc and this is obtained via external data interchange (EDI). A good example of EDI is the way in which our wages are transferred to our Bank Accounts. Our house receives things from outside organizations such as the Post Office or delivery trucks;

Our new system may be required to work with different 3rd Party Packages - not directly involved with the System under Test.

Different faults will be found during this level of testing and we must be prepared to plan and execute such tests if they are considered vital for the success of our business. In reality this level of testing will probably be done in conjunction with system testing rather than as a separate testing stage. However it is now a visible testing stage and integration testing in the large is an explicit testing phase in the syllabus.

In terms of planning - it should be planned the same way as Integration testing in the small (i.e. testing interfaces/connections one at a time). This will reduce the risk of not being able to locate the faults quickly. Like all testing stages we must identify the risks during the planning phase - which areas would cause most severity if they were not to work? Perhaps we are developing a piece of software that is to be used at a number of different locations throughout the world - then testing the system within a Local Area Network (LAN) and comparing with the response over a Wide Area Network (WAN) is essential.

When we plan Integration Testing in the Large there are a number of resources we might need, such as different operating systems, different machine configurations and different network configurations. These must all be thought through before the testing actually commences. We must consider what machines we will need and it might be worthwhile talking to some of the hardware manufacturers as they sometimes offer test sites with different machine configurations set up.