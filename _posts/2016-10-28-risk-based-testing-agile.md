---
layout: post
title: "Why Risk Based Testing is Important in Agile Projects"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Risk Based Testing in Agile

[caption id="attachment_10242" align="aligncenter" width="624"]![risk-based-testing](http://69.164.212.71/wp-content/uploads/2015/03/risk-based-testing-e1426010478184.jpg) risk-based-testing[/caption]

In previous article, we looked at **[Why Exploratory Testing is Important in Agile Projects](http://www.testingexcellence.com/exploratory-testing-important-agile-projects/ "Why Exploratory Testing is Important in Agile Projects").**

In this article, Dave Higgins explains why short SDLCs in agile software development require a risk based testing from QA - and why it's nothing to be scared of.

As a QA professional, one of your biggest fears will always be allowing something big to get past you. You miss something that ends up with your company directors being dragged out of bed in the middle of the night, and requires diversion to a shunt page or honest-to-goodness downtime for your site to get fixed. That will inevitably end up with all those awkward questions being asked about why this issue was missed in testing.

I don't have an immediate answer to those questions, and your mileage may vary depending on the scale of your issue and the reason behind it, but I'd strongly advise against saying 'Hey, it's not like QA put the bug in there in the first place!' and throwing your developers under the bus unless you want to completely alienate yourself within your technology team.

In short, if you've missed a P1 shipstopper issue you're in trouble, so prepare to suck it up. But how can you make sure that this never happens to you?

You can't. And that's okay.

We've all heard the trite saying about the one thing that you don't test being the one thing that will break production. But to me, that particular pearl of wisdom can be lumped into the same category as your keys always being in the last place you look. By definition, edge case issues occur in areas that you'd never dream of testing, or involve steps that you'd never believe that anyone would actually take.

So even if, for some insane reason, you've opted to attempt 100% test coverage, and you've decided to test every user situation that you can think of, you cannot and will not cover everything. Taking zero issues to production is an utterly impractical goal that will only lead to frustration and disappointment when it is inevitably not met.

Most folks in modern technology organisations understand that shorter SDLCs come with risks, so in these environments, QA's function is not to catch everything, but to keep the risk of issues making it to production to a minimum. Sadly, not all business stakeholders see things that way, and it's down to technology directors to make them understand that going faster comes at a price, and as per **[Brooks's Law](http://en.wikipedia.org/wiki/Brooks%27s_law "Brooks's Law")**, throwing more people at QA will only muddy the waters. So it's important that QA thinks carefully about their priorities when testing at speed.

Of course, it's vital that you ensure that requirements have been met, and that your software does what it has been designed to do (according to the precise needs of the business, not your interpretation or your development team's interpretation of those needs - if your sprint planning sessions are done right, you've already nailed this). But that isn't the be-all and end-all of your testing scope, and of course, just testing the happy path is a recipe for disaster.

As a QA professional you know what the software is supposed to do in detail, but end users haven't read the user stories, and they inevitably wander off and do stuff they're not supposed to. So once you've established the software's fitness for purpose, **[exploratory testing](http://www.testingexcellence.com/exploratory-testing-important-agile-projects/ "Why Exploratory Testing is Important in Agile Projects")** is necessary to ensure your technology director doesn't get that 3am phone call from the company president telling him that his latest release is causing satellites to drop out of the sky. But how far down the exploratory testing rabbit hole do you go?

There's an old joke that goes something like this:

A QA Engineer walks into a bar.  
He orders a beer.  
He orders 3 beers.  
He orders 2976412836 beers.  
He orders 0 beers.  
He orders -1 beer.  
He orders q beers.  
He orders nothing.  
Él ordena una cerveza.  
He orders a deer.  
He tries to leave without paying.  
He starts ordering a beer, then throws himself through the window half way through.  
He orders a beer, gets his receipt, then tries to go back.  
He orders a beer, goes to the door of the bar, throws a handful of cookies into the street, then goes back to the bar to see if the barmaid still recognises him.  
He orders a beer, and watches very carefully while the barmaid puts his order into the till to make sure nothing in his request got lost along the way.  
He starts ordering a beer, and tries to talk the barmaid into handing over her personal details.  
He orders a beer, sneaks into the back, turns off the power to the till, and waits to see how the barmaid reacts, and what she says to him.  
He orders a beer while calling in thousands of robots to order a beer at exactly the same time.

### **Risk Based Testing**

With a bit more time than I'm willing to put into it, that list could go on and on, and in the same way, you could easily overdo exploratory testing. So you must properly identify the areas that your software touches on and flows through, and the situations which are most likely to occur on a regular basis to reduce the time the software spends in test, and to help in speeding up your development cycle.

And that's the thinking behind risk based testing. In a world where short SDLCs and being first to production, or at least the fastest of followers, is business critical, this is the only feasible approach for QA.

The idea is that you pinpoint the essential function of the change, determine the scope for testing in and around that change, analyse the associated risks, then plan and **[prioritise your testing](http://www.testingexcellence.com/should-you-prioritise-your-software-testing/ "Should You Prioritise Your Software Testing?")** accordingly.

So, you start by making sure the change is fit for purpose and, just as importantly, does no harm. This is non-negotiable, and you can't sign off without giving this assurance. That should be followed by smart, correctly prioritised exploratory testing of the areas which are next most likely to cause problems, as determined by your intimate knowledge of the system under test.

You'd be forgiven for missing an edge case that only happens at 23:15 on one day of the year on the Kenyan version of your software when it is accessed via IE6\. But a quick study of your application's user metrics will allow you to properly assess which points of sale, browsers, devices etc., are the most popular with your users, and that will allow you to properly prioritise which access points you use while testing.

Because that's the real key to using risk based testing properly - strong knowledge of your systems and architecture, and a good understanding of the paths your users will take. As a QA Engineer, you should be familiar with all the touch points around the functions you are responsible for testing, how they interact with each another as well as other applications in your overall architecture, and all the paths the user will take into, through, and out of your area. This will allow you to easily identify and isolate the important areas for any given change, and allow you to test just around those areas.

Do you cover everything? No, absolutely not. Like I said before, that's an unrealistic expectation. But properly planned and executed risk based testing will allow you to go faster AND stop phones from ringing in the middle of the night.

Unless, of course, you're testing software to automate alarm calls. Then that's WAD.