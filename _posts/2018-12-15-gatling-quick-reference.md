---
layout: post
title:  "Gatling Quick Reference - Common Gatling Functions"
author: Amir
categories: [ performance ]
tags: [ gatling ]
image: assets/images/gatling-quick-reference-guide.jpg
---

This post serves as a quick reference guide for Gatling tool for performance testing.

Previously, we saw how to [organize your Gatling project](https://www.testingexcellence.com/gatling-maven-performance-test-framework/) in a logical and easy to understand structure.

In this post, we look at some examples and usages of some common Gatling functions when creating performance test scripts.

Gatling examples covered in this post are:

*   [Simple simulation](#simple-simulation)
*   [Using HTTP proxy](#proxy)
*   [HTTP requests](#http-requests)
*   [Scenario](#scenario)
*   [Injection of virtual users](#virtual-users-injection)
*   [Loops](#loops)
*   [Checks and Assertions](#checks-assertions)
*   [Feeders](#feeders)

## Simple simulation

```scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class SimplestSimulation extends Simulation {
    setUp(scenario("Homepage")
    .exec(http("Home").get("https://www.testingexcellence.com"))
    .inject(atOnceUsers(1)))
}
```

## Using an HTTP Proxy

```scala
setUp(scenario("Proxy on")
    .exec(http("World").get("https://www.testingexcellence.com"))
    .inject(atOnceUsers(1)))
    .protocols(http.proxy(Proxy("proxy.company.net", 8080)))
}
```

In the above example, `proxy.company.net` is the proxy URL and `8080` is the proxy port.

## HTTP Requests

### GET Request

A simple GET request with query parameters

```scala
http("Get Gatling posts")
    .get("https://www.testingexcellence.com")
    .queryParam("post", "gatling")
    .queryParam("category", "performance testing")
    .header("Accept-Language", "en")
```

### POST Request

A sample POST request with form params, e.g. submitting a form:

```scala
http("POST with params")
    .post("https://www.example.com/login")
    .formParam("firstname", "David")
    .formParam("lastname", "Brown")
    .header("Accept-Language", "en")
```

A sample POST request with a file payload which must be in `src/test/resources/bodies`

```scala
http("Post with file payload")
    .post("https://example.com/users")
    .body(RawFileBody("bodyFileName.json")).asJSON
    .header("Content-type","application/json")
```

## Scenario

### Pauses

**Note:** In order to use the pause, you need to add this import  
`import scala.concurrent.duration.DurationInt`

```scala
scenario("with secode pause")
    // ...
    .pause(2, 3) // will make a random pause of 2-3 seconds
    .pause(2) // will make a fixed pause of 2 seconds

    scenario("millisecond pause")
    // ...
    .pause(200.milliseconds) // fixed pause of 0.2 second
```

## Loops

```scala
scenario("repeat")
    .repeat(3)( // repeat 3 times
        exec(http("google").get("https://www.example.com"))
    )
```

## Injection of virtual users

```scala
val scn=scenario("Virtual users")
setUp( 
    scn.inject( 
    nothingFor(4.seconds), 
    atOnceUsers(10), 
    rampUsers(10) over(5.seconds))
```

### Ramp up

```scala
rampUsers(10) over(5.seconds) 
    // linear rampup 
    // 10 users added over 5 seconds (1 extra user every 500 ms)

    constantUsersPerSec(10) during(5.seconds) 
    // adds 10 users every second
    // (so a total of 50 users after 5 seconds)
```
### At once

```scala
nothingFor(4.seconds)
// no new users added during 4 seconds

atOnceUsers(10)
// 10 users added immediately
// not really recommended since it can hammer down the tested server

heavisideUsers(10) over(2.seconds)
// better approximation of a peak of users
```

## Checks and Assertions

In Gatling, checks are usually used to check for status codes response bodies, whereas assertions are normally used to assert on timings of responses.

### Checks

Checking status and JSON data:

```scala
http("name").get("/path")
    .check(status.is(200))
    .check(jsonPath("$.name").is("some name"))
```

Saving response data to Gatling session

```scala
http("name").get("/path")
    .check(header("location").saveAs("newLocation"))
    .check(jsonPath("$.name").saveAs("name"))

    // You can now use $newLocation and $name in your requests :
    http("get home").get("/users/${name}")
```

### Assertions

```scala
setUp(scn).assertions( 
    global.responseTime.mean.lt(50), // mean resp time < 50 ms    
    forAll.failedRequests.percent.gt(5) // for each request, < 5% failure
)
```

## Feeders

### Basic usage

```scala
val feeder1 = Array( 
    Map("foo" -> "foo1", "bar" -> "bar1"), 
    Map("foo" -> "foo2", "bar" -> "bar2"), 
    Map("foo" -> "foo3", "bar" -> "bar3")
)

// repeating the values 
val feeder1a = feeder1.circular
val feeder1b = feeder1.random

// infinite entries with keys "value1", "value2"
val feeder2 = Iterator.continually(Map("value1" -> 100, "value2" -> "toto"))

// infinite random entries 
val feeder3 = Iterator.continually(Map(
    "value1" -> Random.nextInt(100),
    "value2" -> Random.alphanumeric.take(4))
)

// using the feeder to build the URLs
scenario("scenario name")
    .feed(feeder)
    .exec(http("request name")
    .get("/path/${value1}")
)
```

### Advanced usage

```scala
// reading a csv file to build a feeder
val feeder = csv("data.csv")
// the csv file must have a header row which defines the keys and be comma (,) separated

// filling a template file with the content of a feeder
scn.feed(feeder).exec(
    http("request name")
    .post("https://www.example.com")
    .body(ElFileBody("filename.xml")).asXML))
```