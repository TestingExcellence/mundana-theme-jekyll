---
layout: post
title: "Q: Are we not testers? A: We are QA!"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

[caption id="attachment_10135" align="aligncenter" width="520"]![qa-vs-testing](http://69.164.212.71/wp-content/uploads/2015/03/qa-vs-testing.png) qa-vs-testing[/caption]

With the advances being made in technology project management and delivery, and the ongoing adoption of Agile development methodologies, the role of true QA professionals has never been more important. But as the playing field of technology is shifting, it is apparent that QA and Testing are very different games, and that the distinction between the two really should be a lot clearer. The business of testing has come a long way in the last ten years, and there have been many improvements and reinventions along the way.

Back in the day, QA as a function didn’t really exist. Development was carried out Waterfall style, and finished code was dropped on testers infrequently. While the developers put together their interpretation of what the business had asked for, testers would be using the same business case to document exactly how they were going to test that code in chapter and verse. The mantra from test teams across the world was ‘You must write test scripts that anyone can run’.

Because that’s pretty much what a tester was – any old geek off the street who could use a PC, write and / or follow a step-by-step script, and tick a box. Indeed, that’s still how parts of the tech world still see QA – unskilled nit-pickers that somehow have the audacity to tell developers what they’ve done wrong. A constraint, a box to be checked on the way to production.

But today, to call a QA professional a tester is a slap in the face. It is a gross undervaluation of the skills and the mindset required to be effective in the field, and the clue is in the modern job title. A QA professional is not just a tester. A QA professional is the guardian of the production codebase, and a provider of an assurance that the applications and platforms that our departments release will not compromise our business.

We're not the last point on a checklist. A QA professional is a skilled asset to the development team, and is involved from the moment the business team approaches technology with something they’d like to see implemented. They are vital to the prevention of (rather than detection of) defects, and understand that this is the only viable approach in modern software development.

We are not mindless. **[Exploratory Testing](http://www.testingexcellence.com/exploratory-testing/ "Exploratory Testing")** is a real skill, and will be the future of Manual QA. But robust automation is required to release your manual QA Engineers from the shackles of repetitive testing, and a working knowledge of **[automated testing](http://www.testingexcellence.com/test-automation-tips-best-practices/ "Automated Testing Tips and Best Practices")** is an essential skill for a QA professional. If it feels robotic, make a robot do it so your human testers can be human.

We are not obsessed with documentation, or bound by **[Test Management tools](http://www.testingexcellence.com/testing-tools/test-management-tools/ "Test Management Tools")**. Agile methodologies & shorter SDLCs = No documentation beyond user stories. Everything moves faster, meaning shorter feedback loops, and a shorter time to market.

And most importantly, Release Testing is not **[Regression Testing](http://www.testingexcellence.com/regression-testing/ "Regression Testing")**.

But... but... all your teams have completed their development for this release cycle, and all of your apps have been signed off. You've got a production candidate release all set up, and it gets deployed to your pre-production environment for regression testing, right?

No, no, a thousand times no. Because if your teams have signed off, it's too late for regression testing.

The sign off (and it should be a team sign off - the quality of the codebase isn't just the responsibility of QA, even if they are its guardians) is the team's assurance that the code committed will not adversely affect the overall code base, and a declaration of adherance to a 'do no harm' rule. If you haven't carried out regression testing before signing off, you're giving a false statement of confidence.

ISTQB defines the purpose of regression testing as:

> "to verify that modifications in the software or the environment have not caused any unintended adverse side effects and that the system still meets its requirements."

Your release testers are not bug catchers. They aren't a safety net, or a last line of defence against functional defects, and they shouldnt be treated as such. And by the way, if your release testers are finding functional defects, some stern words need to be had with the QAs in your development teams.

Your release test team are integration testers, so their chief role should be non-functional testing - studying the behaviour of your system end-to-end, checking the interactions of your APIs with the use of automated integrity checks, and deep exploratory testing based around any improvements and new features, all carried out with the kind of expert knowledge that is only carried by folks who know the software inside out. I spoke in more a little more detail about exploratory testing and how it should be directed in my article '**[There's no such thing as Negative Testing](http://www.testingexcellence.com/no-thing-negative-testing/ "No such thing as negative testing")**'.

It kills me to see smart, creative folks used to run the same series of tests from a spreadsheet week in and week out. The repetitive grunt work should be automated as much as possible - that's the main purpose of automation, after all - giving the manual testers the best possible opportunity to carry out exploratory testing around new features, and generally making things more interesting than just running a test script from top to bottom.

So as I mentioned earlier, if it feels mechanical, get something mechanical to do it. Then use that mechanisation to improve your efficiency, and either increase the time your manual testers have for exploratory testing, or to reduce the overall time your release spends in pre-production. As soon as your release is available, kick off your automated smoke tests.

If your release manager is an amenable sort and they have their scheduling sorted out, have them schedule the release so that it finishes with just enough time to run your automated smoke pack before your release testers arrive at work. That way, as soon as they're at their desks, they either have a green light to begin manual testing, or an alert indicating any problems (which will also have been sent to your ops team), meaning ops could potentially start looking into issues before the release testers have even had a chance to pester them.

Then, as the levels of automation for release testing are increased, the manual testing carried out becomes proportionately more exploratory, allowing your release testers to really dedicate themselves to sniffing out and hunting down integration issues like a pack of mad dogs. They will exist solely to try to break things in the most interesting ways possible. And that sounds a lot more interesting than the robotic execution of the same set of test scripts in every single release, right?