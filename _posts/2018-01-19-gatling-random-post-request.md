---
layout: post
title: "Gatling - How to Send Post Request in StringBody() With Random Data"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

In this Gatling tutorial, we show how to send post requests which contain random data in the `StringBody()`.

In most performance testing scenarios, you want to randomize the data that is sent as post request to simulate different sessions. For this, we can make use of feeders which read data from CSV files or plain text.

If you haven't setup Gatling on your machine yet, you can read the post that explains **[how to setup Gatling as a Maven project.](https://www.testingexcellence.com/performance-testing-gatling-maven-scala/)**

### Scala Random String Generator

First, we need a method which generates a random string in Scala:

    object randomStringGenerator {
        def randomString(length: Int) = scala.util.Random.alphanumeric.filter(_.isLetter).take(length).mkString
    }

### XML Request as Post Body

In this example, we are sending an XML post request. This contains a log_session_id parameter which needs to be different in each request:

    val req = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                  "<gpOBJECT>\n" +
                    "<gpPARAM name=\"auth_method\">3</gpPARAM>\n" +
                    "<gpPARAM name=\"app_url\">MY_APP</gpPARAM>\n" +
                    "<gpPARAM name=\"log_session_id\">0000000000</gpPARAM>\n" +
                    "<gpPARAM name=\"device_id\">b02edd23,ClientIP=10.211.55.3</gpPARAM>\n" +
                    "<gpPARAM name=\"service\">ACTIVATION</gpPARAM>\n" +
                  "</gpOBJECT>"

We need to have a way of sending the above XML request as a post in the `StringBody()` in Gatling, but in each request, the `log_session_id` value should be a random string.

For this, we need to make use of feeders.

### Feeder in StringBody()

    var randomSession = Iterator.continually(Map("randsession" -> ( req.replace("0000000000", randomStringGenerator.randomString(10)))))

    val scn = scenario("Activate")
        .feed(randomSession)
        .exec(http("activate request")
        .post("/login/activate")
        .body(StringBody("""${randsession}"""))

The full script to send random post request in `StringBody()` in Gatling:

    package com.testingexcellence.scala.examples

    import io.gatling.core.Predef._
    import io.gatling.http.Predef._
    import io.gatling.http.config.HttpProtocolBuilder.toHttpProtocol
    import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

    class Activate extends Simulation {

      object randomStringGenerator {
        def randomString(length: Int) = scala.util.Random.alphanumeric.filter(_.isLetter).take(length).mkString
      }

      val req = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                  "<gpOBJECT>\n" +
                    "<gpPARAM name=\"auth_method\">3</gpPARAM>\n" +
                    "<gpPARAM name=\"app_url\">MY_APP</gpPARAM>\n" +
                    "<gpPARAM name=\"log_session_id\">0000000000</gpPARAM>\n" +
                    "<gpPARAM name=\"device_id\">b02edd23,ClientIP=10.211.55.3</gpPARAM>\n" +
                    "<gpPARAM name=\"service\">ACTIVATION</gpPARAM>\n" +
                  "</gpOBJECT>"

      var randomSession = Iterator.continually(Map("randsession" -> ( req.replace("0000000000", randomStringGenerator.randomString(10)))))

      val httpConf = http
        .baseURL("http://localhost:5000")
        .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
        .userAgentHeader("Mozilla/4.0(compatible;IE;GACv10\. 0\. 0\. 1)")

      val scn = scenario("Activate")
        .feed(randomSession)
        .exec(http("activate request")
        .post("/login/activate")
        .body(StringBody("""${randsession}"""))
        .check(status.is(200)))
        .pause(5)

      setUp(
        scn.inject(atOnceUsers(5))
      ).protocols(httpConf)
    }