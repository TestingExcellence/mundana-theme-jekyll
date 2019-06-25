---
layout: post
title: "Difference Between Green/Blue Deployments, A/B Testing and Canary Releases"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

This article describes the differences between Green/Blue deployments, A/B testing and Canary releases.

Article was originally written by Christian Posta

## Blue-green Deployments, A/B Testing, and Canary Releases

A lot of teams I talk to recently are very interested in “DevOps” (whatever that means… seems to mean different things to different people?) and when we sit down and talk about what that really means, the direction of the conversation can go down many interesting paths. And some times, the path it goes down makes people feel **very uncomfortable**. I was talking with a team a while back about deployment best practices, hot deployments, rollbacks etc and when I mentioned [blue-green deployments](http://martinfowler.com/bliki/BlueGreenDeployment.html), they became a bit queasy. Another team couldn’t understand why doing something they’ve always done [was not such a very good thing](http://blog.christianposta.com/immutable/immutable-infrastructure-and-the-jvm-part-i/).

[blue-green deployments](http://martinfowler.com/bliki/BlueGreenDeployment.html) have been practiced at places like Amazon for 10+ years. They’re a safe, proven, method. Now, blue-green deployments are not a silver bullet, but there’s an element of usefulness to them. But what about A/B testing then? Or even Canary testing? With all of the #microservices, DevOps, and cloud-native talk, there’s a lot of discussion about them, but I wanted to clarify their differences.

https://www.testingexcellence.com/what-is-the-difference-between-agile-testing-and-continuous-testing/

## Blue Green Deployments

Please see [Martin Fowler’s link about blue-green deployments](http://martinfowler.com/bliki/BlueGreenDeployment.html). It gives the overall gist. It’s basically a technique for _releasing your application in a predictable_ manner with a goal of _reducing any downtime associated with a release_. It’s a quick way to prime your app before releasing, and also quickly roll back if you find issues.

Simply, you have two identical environments (infrastructure) with the “green” environment hosting the current production apps (app1 version1, app2 version1, app3 version1 for example):

![green deployment](http://blog.christianposta.com/images/greendeployment.png)

Now, when you’re ready to make a change to app2 for example and upgrade it to v2, you’d do so in the “blue environment”. In that environment you deploy the new version of the app, run smoke tests, and any other tests (including those to exercise/prime the OS, cache, CPU, etc). When things look good, you change the load-balancer/reverse proxy/router to point to the blue environment:

![green deployment](http://blog.christianposta.com/images/bluedeployment.png)

You monitor for any failures or exceptions because of the release. If everything looks good, you can eventually shut down the green environment and use it to stage any new releases. If not, you can quickly rollback to the green environment by pointing the loadbalancer back.

Sounds good in theory. But there are things to watch out for.

*   Long running transactions in the green environment. When you switch over to blue, you have to gracefully handle those outstanding transactions as well as the new ones. This also can become troublesome if your DB backends cannot handle this (see below)
*   Enterprise deployments are not typically amenable to “microservice” style deployments – that is, you may have a hybrid of microservice style apps, and some traditional, difficult-to-change-apps working together. Coordinating between the two for a blue-green deployment can still lead to downtime
*   Database migrations can get really tricky and would have to be migrated/rolledback alongside the app deployments. There are good tools and techniques for doing this, but in an environment with traditional RDBMS, NoSQL, and file-system backed DBs, these things really need to be thought through ahead of time; blindly saying you’re doing Blue Green deployments doesn’t help anything – actually could hurt.
*   You need to have the infrastructure to do this
*   If you try to do this on non-isolated infrastructure (VMs, Docker, etc), you run the risk of destroying your blue AND green environments

As I’ve said, there are good techniques to overcome these challenges and make this deployment style work out very nicely, including plugging into a continuous deployment pipeline, but don’t jump into it trivially.

## A/B Testing

A/B testing is NOT blue-green deployments. I’ve run into groups that mistake this. A/B testing is a way of _testing features in your application_ for various reasons like usability, popularity, noticeability, etc, and how those factors influence the bottom line. It’s usually associated with UI parts of the app, but of course, the backend services need to be available to do this. You can implement this with application-level switches (ie, smart logic that knows when to display certain UI controls), static switches (in the application), and also use Canary releases (as discussed below).

![green deployment](http://blog.christianposta.com/images/abtesting.png)

The difference between blue-green deployments and A/B testing is A/B testing is for measuring functionality in the app. Blue-green deployments are about releasing new software safely and rolling back predictably. You can obviously combine them: use blue-green deployments to deploy new features in an app that can be used for A/B testing.

## Canary releases

Lastly, Canary releases are a way of sending out a new version of your app into production that plays the role of a “canary” to get an idea of how it will perform (integrate with other apps, CPU, memory, disk usage, etc). It’s another release strategy that can mitigate the fact that regardless of the immense level of testing you do in lower environments you will still have some bugs in production. Canary releases let you test the waters before pulling the trigger on a full release.

![green deployment](http://blog.christianposta.com/images/canarydeployment.png)

The faster feedback you get, the faster you can fail the deployment, or proceed cautiously. For some of the same reasons as the blue-green deployments, be careful of things above to watch out for; ie, database changes can still trip you up.

**Further information:**

### Are there scenarios where canary release is preferred over blue/green deployments, and vice versa?

Blue-green releasing is simpler and faster.

You _can_ do a blue-green release if you've tested the new version in a testing environment and are very certain that the new version will function correctly in production. Always using [feature toggles](http://martinfowler.com/bliki/FeatureToggle.html) is a good way to increase your confidence in a new version, since the new version functions exactly like the old until someone flips a feature toggle. Breaking your application into small, independently releasable services is another since there is less to test and less that can break.

You _need to_ do a canary release if you're not completely certain that the new version will function correctly in production. Even if you are a thorough tester, the Internet is a large and complex place and is always coming up with unexpected challenges. Even if you use feature toggles, one might be implemented incorrectly.

Deployment automation takes effort, so most organizations will plan to use one strategy or the other every time.

So do blue-green deployment if you're committed to practices that allow you to be confident in doing so. Otherwise, send out the canary.

The essence of blue-green is deploying all at once and the essence of canary deployment is deploying incrementally, so given a single pool of users I can't think of a process that I would describe as doing both at the same time. If you had multiple independent pools of users, e.g. using different regional data centers, you could do blue-green within each data center and canary across data centers. Although if you didn't need canary deployment within a data center, you probably wouldn't need it across data centers.