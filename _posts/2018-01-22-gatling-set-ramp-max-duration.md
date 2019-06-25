---
layout: post
title: "Gatling - How to Set Ramp-up and Max Duration"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

In Gatling, you can set the ramp-up period and the maximum duration of the load testing. You can define the values in seconds or minutes. You might get a "Cannot resolve symbol minutes" or "Cannot resolve symbol seconds". In order to resolve this issue, you need to import Gatling package `scala.concurrent.duration._.`

    import scala.concurrent.duration._
    setUp(scn.inject(rampUsers(10) over(2 seconds))).maxDuration(5 minutes).protocols(httpConf)

**Related:**

*   **[Performance Testing with Gatling, Maven and Scala](https://www.testingexcellence.com/performance-testing-gatling-maven-scala/)**
*   **[Gatling - How to Save Response Body](https://www.testingexcellence.com/gatling-save-response-body/)**
*   **[Soak Testing With Gatling Example](https://www.testingexcellence.com/soak-testing-gatling-example/)**