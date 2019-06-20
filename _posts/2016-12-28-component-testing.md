---
layout: post
title: "Component Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Component Testing

**Component Testing** as defined by** [BS7925-1](http://en.wikipedia.org/wiki/BS_7925-1)** is “A minimal software item for which a separate specification is available”.

Components are relatively small pieces of software that are, in effect the building blocks from which the system is formed. They may also be referred to as modules, units or programs and so this level of testing may also be known as module, unit or program testing. For some organizations a component can be just a few lines of source code while for others it can be a small program.

Component testing then is the lowest level of testing (i.e. it is at the bottom on the **[V-Model software development](http://www.testingexcellence.com/v-model-in-software-testing/ "V Model")** life cycle). It is the first level of testing to start executing test cases (but should be the last to specify test cases). It is the opportunity to test the software in isolation and therefore in the greatest detail, looking at its functionality and structure, error handling and interfaces.

In component testing, because it is just a component being tested, it is often necessary to have a test harness or driver to form an executable program that can be executed. This will usually have to be developed in parallel with the component or may be created by adapting a driver for another component.

This should be kept as simple as possible to reduce the risk of faults in the driver obscuring faults in the component being tested. Typically, drivers need to provide a means of taking test input from the tester or a file, passing it on to the component, receiving the output from the component and presenting it to the tester for comparison with the expected outcome.

The programmer who wrote the code most often performs component testing. This is sensible because it is the most economic approach. A programmer who executes test cases on his or her own code can usually track down and fix any faults that may be revealed by the tests relatively quickly.

If someone else were to execute the test cases they may have to document each failure. Eventually the programmer would come to investigate each of the fault reports, perhaps having to reproduce them in order to determine their causes.

Once fixed, the fixed software would then be re-tested by this other person to confirm each fault had indeed been fixed. This amounts to more effort and yet the same outcome: faults fixed. Of course it is important that some independence is brought into the test specification activity. The programmer should not be the only person to specify test cases.

Both functional and structural test case design techniques are appropriate in component testing, though the extent to which they are used should be defined during the test planning activity. This will depend on the risks involved, for example, how important, critical or complex they are.