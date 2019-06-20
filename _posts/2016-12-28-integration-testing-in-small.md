---
layout: post
title: "Integration Testing in Small"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## What is Integration Testing in Small?

Integration testing in small is bringing together individual components (modules/units) that have already been tested in isolation. The objective is to test that the ‘set’ of components function together correctly by concentrating on the interfaces between the components. We are trying to find faults that couldn’t be found at an individual component testing level.

Although the interfaces should have been tested in component testing, integration testing in the small makes sure that the things that are communicated are correct from both sides, not just from one side of the interface. This is an important level of testing but one that is sadly often overlooked.

As more and more components are combined together then a subsystem may be formed which has more system-like functionality that can be tested. At this stage it may also be useful to test non­functional aspects such as performance.

For integration testing in the small there are two choices that have to be made:

How many components to combine in one go?  
In what order to combine components.

The decision over which choices to make are what is called the ‘integration strategy’. There are two main integration strategies: Big Bang and incremental. These are described in separate sections below.

### Big Bang Integration

“Big Bang” integration means putting together all of the components in one go. The philosophy is that we have already tested all of the components so why not just throw them all in together and test the lot? The reason normally given for this approach is that it saves time - or does it?

If we encounter a problem it tends to be harder to locate and fix the faults. If the fault is found and fixed then re-testing usually takes a lot longer. In the end, the Big Bang strategy does not work - it actually takes longer this way. This approach is based on the [mistaken] assumption that there will be no faults.

### Incremental Integration

Incremental integration is where a small number of components are combined at once. At a minimum, only one new component would be added to the baseline at each integration step. This has the advantage of much easier fault location and fixing, as well as faster and easier recovery if things do go badly wrong. (The finger of suspicion would point to the most recent addition to the baseline.)

However, having decided to use an incremental approach to integration testing we have to make a second choice: in what order to combine the components. This decision leads to three different incremental integration strategies: top-down, bottom-up and functional incrementation.

### Top-down Integration and Stubs

As its name implies, top-down integration combines components starting with the highest levels of a hierarchy. Applying this strategy strictly, all components at a given level would be integrated before any at the next level down would be added.

Because it starts from the top, there will be missing pieces of the hierarchy that have not yet been integrated into a baseline. In order to test the partial system that comprises the baseline, stubs are used to substitute for the missing components.

A stub replaces a called component in integration testing in the small. It is a small self-contained program that may do no more than display its own name and then return. It is a good idea to keep stubs as simple as possible; otherwise they may end up being as complex as the components they are replacing.

As with all integration in the small strategies, there are advantages and disadvantages to the approach. One advantage is that we are working to the same structure as the overall system and this will be tested most often as we build each baseline. Senior Managers tend to like this approach because the system can be demonstrated early (but beware that this can often paint a false impression of the system’s readiness). There are some disadvantages. Stubs are needed (as in all incremental integration strategies but this perhaps needs more of them). Creating stubs means extra work though it should save more effort in the long run. The details of the system are not tested until last and yet these may be the most important parts of the software.

### Bottom-up Integration and Drivers

Bottom-up integration is the opposite of top-down. Applying it strictly, all components at the lowest levels of the hierarchy would be integrated before any of the higher level ones.

Because the calling structure is missing, this strategy requires a way of activating the baseline, e.g. by calling the component at the top of a baseline. These small programs are called “drivers” because they drive the baseline. Drivers are also known as test harnesses or scaffolding. They are usually specifically written for each baseline though there are a few tools on the market which provide some ‘general purpose’ support. Bottom-up integration may still need stubs as well though it is likely to use fewer of them.

### Integration Guidelines

You will need to balance the advantages gained from adding small increments to your baselines with the effort needed to make that approach work well. For example, if you are spending more time writing stubs and drivers than you would have spent locating faults in a larger baseline, and then you should consider having larger increments. However, for critical components, adding only one component at a time would probably be best.

Keep stubs and drivers as simple as possible. If they are not written correctly they could invalidate the testing performed.

If the planning for integration testing in the small is done at the right place in the life cycle, i.e. on the left-hand side of the V-model before any code has been written, then the integration order determines the order in which the components should be written by developers. This can save significant time.