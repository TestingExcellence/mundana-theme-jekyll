---
layout: post
title: "Pros and Cons of Test Driven Development"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

![pros_cons_tdd](http://www.testingexcellence.com/wp-content/uploads/2016/11/pros_cons_tdd-300x178.jpeg)

What are pros and cons of Test Driven Development (TDD)?

Test Driven Development is a software development methodology whereby you write and _run_ a set of tests before you write code.

The idea is that those tests will fail at first and then you start to write enough code to try to get all the tests to pass. Having all the tests pass could be a measure of the done criteria (dev-done) and also increases confidence in the quality of the code.

That said, like any other development methodologies there are some pros and cons associated with TDD. Here, we list some of them, but before that, best to clarify couple of points:

*   Doing unit tests doesn't mean doing TDD. You can do the first without the second. In fact, you can do TDD without unit testings (but most people do), in this case, people complement generally unit testing with others flavors of tests. What you need for sure is automatic testing, whatever they are.
*   You can perform TDD for white box testing, to test your code. But you can also perform TDD for black box testing, something often called Behavior Driven Development.

Traditionally, the process was to code a lot of modules and then write unit tests to verify the code. This is code-first, test later method. But if after coding there is no time or you're pushed for release, then the whole exercise of unit testing gets skipped, or at best done retrospectively.

Now, on to the pros and cons of TDD:

## Pros of Test Driven Development

*   Because you are writing small tests at a time, it forces your code to be more modular (otherwise they'd be hard to test against). TDD helps you learn, understand, and internalise the key principles of good modular design.
*   TDD also forces good architecture. In order to make your code unit-testable, it must be properly modularized. Writing the tests first, various architectural problems tend to surface earlier.
*   Documents your code better than documentation (it doesn't go out of date since you're running it all the time).
*   Makes code easier to maintain and refactor. TDD helps to provide clarity during the implementation process and provides a safety-net when you want to refactor the code you've just written.
*   Makes collaboration easier and more efficient, team members can edit each others code with confidence because the tests will inform them if the changes are making the code behave in unexpected ways.
*   Because TDD essentially forces you to write unit tests before writing implementation code, refactoring of code becomes easier and faster. Refactoring code written two years ago is _hard_. If that code is backed up by a set of good unit tests, the process is made so much easier.
*   Helps prevents defects - well, at least it helps you find design or requirement issues right at the beginning. TDD provides early warning to design problems (when they are easier to fix).
*   Helps programmers really understand their code.
*   Creates an automated regression test suite, basically for free. i.e. you don't need to spend time afterwards writing unit tests to test the implementation code.
*   It encourages small steps and improves the design because it makes you cut the unnecessary dependencies to facilitate the setup.
*   It helps to clarify requirements because you have to figure out concretely what inputs you have to feed and what outputs you expect.
*   Unit tests are especially valuable as a safety net when the code needs to be changed to either add new features or fix an existing bug. Since maintenance accounts for between 60 and 90% of the software life cycle, it's hard to overstate how the time taken up front to create a decent set of unit tests can pay for itself over and over again over the lifetime of the project.
*   Testing while writing also forces you to try to make your interfaces clean enough to be tested. It's sometimes hard to see the advantage of this until you work on a body of code where it wasn't done, and the only way to exercise and focus on a given piece of code is to run the whole system and set a break-point.
*   "Stupid" mistakes are caught almost immediately. It helps developers find mistakes that would waste everyone's time if they were found in QA.

## Cons of Test Driven Development

*   The test suite itself has to be maintained; tests may not be completely deterministic (i.e. reliant on external dependencies).
*   The tests may be hard to write, esp. beyond the unit testing level.
*   Initially, it slows down development; for rapidly iterative startup environments the implementation code may not be ready for some time due to spending time writing tests first. (But in the long run, it actually speeds up development)
*   Like any programming, there is a big difference between doing it and doing it well.  Writing good unit tests is an art form. This aspect of TDD is often not discussed, many managers tend to focus on metrics like code coverage; those metrics tell you nothing about the _quality_ of the unit tests.
*   Unit testing is something the whole team has to buy into.
*   A challenge to learn. It can be intimidating and not easy for anyone to learn at first, especially trying to learn it on your own. It requires a lot of dedication (discipline, practice, persistence) and you have to have the goal that you want to continually get better at it.
*   Hard to apply to existing legacy code.
*   Lot's of misconceptions that keep programmers from learning it.
*   Hard to start working this way. Especially if you have many many years of working the other way.
*   You sometimes have to mock a lot of things or things that are difficult to mock. It's beneficial in the long term, but painful right now.
*   You have to perform housekeeping continually. Because booking more and more tests make your build longer and longer, it's necessary to refine those tests to make them running more quickly or to remove redundant tests.
*   Like any good technique, unit testing can be carried to an extreme. The biggest benefits come from a moderate effort, with the tests always exercising the code in the simplest way possible.  If you find yourself frequently refactoring your tests, there's a good chance you're spending too much time on the test suite.
*   It can be easy to get distracted by "fluff" or fancy features in the unit testing framework. We should remember that simple tests are the fastest to create and the easiest to manage.
*   Although it is absolutely necessary, creating tests for failures can be tedious, but it pays off big time in the end.
*   Early stage refactoring requires refactoring test classes as well.
*   Unless everyone on the team correctly maintains their tests, the whole system can quickly degrade.