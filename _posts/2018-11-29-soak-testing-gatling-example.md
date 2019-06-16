---
layout: post
title:  "Soak Testing With Gatling Example"
author: Amir
categories: [ performance ]
tags: [ gatling ]
image: assets/images/soak-testing-gatling.jpg
---

How to perform Soak Testing with Gatling?

Soak Testing involves running one or more scenarios for a long duration, e.g. 24 hours, to find memory leaks in an application.

Some applications, when subjected to a constant load for a long time, could exhibit performance degradation. This is usually due to consuming too much memory and over a long period, the application could crash.

[Gatling tool](https://gatling.io/) provides a number of ways we can configure scenarios to run for long durations to simulate soak testing.

The **Loop** feature within Gatling has the following methods:

*   repeat
*   during
*   asLongAs
*   foreach
*   doWhile
*   asLongAsDuring
*   doWhileDuring
*   forever

In this tutorial, we will look at how to use the `during` method to perform a soak test with Gatling.

## Soak Testing With Gatling

Previously, we discussed the best way to [organize and structure a Gatling project](https://www.testingexcellence.com/gatling-maven-performance-test-framework/). In this example, we will modify the `CreateUserScenario` object to introduce a duration of 12 hours.

```scala

import com.amido.gatling.demo.requests.{CreateUserRequest, GetTokenRequest}
import io.gatling.core.Predef._
import scala.concurrent.duration._

object CreateUserScenario {
    val createUserScenario = scenario("Create User Scenario Soak Test")
    .during(12 hours, "Soak Test") {
        exec(GetTokenRequest.get_token)
        .exec(CreateUserRequest.create_user)
    }
}
```

We can then use the above scenario in our Simulation class. You can even [parameterize the duration](https://www.testingexcellence.com/parameterize-gatling-variables/) of the soak test.

**Further Reading:**

*   [Performance Testing Framework with Gatling and Maven](https://www.testingexcellence.com/gatling-maven-performance-test-framework/)
*   [How to Parameterize Gatling Variables](https://www.testingexcellence.com/parameterize-gatling-variables/)
*   [Gatling - How to Save Response Body](https://www.testingexcellence.com/gatling-save-response-body/)
*   [Gatling Quick Reference: Usage of Common Gatling Functions](https://www.testingexcellence.com/gatling-quick-reference/)