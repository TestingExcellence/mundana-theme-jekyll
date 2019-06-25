---
layout: post
title: "Performance Testing with Gatling, Maven and Scala"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

This post shows how to set up a Gatling simulation test using Maven and Scala on IntelliJ IDE.

If you don't already have Scala plugin for IntelliJ IDE, you can install it from the plugins section under preference:

[![scala plugin for intellij](https://www.testingexcellence.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-18-at-16.31.17-1024x512.png)](https://www.testingexcellence.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-18-at-16.31.17.png)

Once the Scala plugin is installed, then you need to create a Maven project and choose a Scala archetype

[![scala-archetype-intellij](https://www.testingexcellence.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-18-at-16.24.29-1024x788.png)](https://www.testingexcellence.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-18-at-16.24.29.png)

If the desired archetype is not listed, you can click the "Add archetype" button and add the following details

    <groupId>net.alchim31.maven</groupId>
    <artifactId>scala-archetype-simple</artifactId>
    <version>1.6</version>

Next, add the following section to the pom file which indicates which version of libraries we will be using

    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <encoding>UTF-8</encoding>
        <scala.version>2.11.7</scala.version>
        <scala.compat.version>2.11</scala.compat.version>
    </properties>

Then, add the required Scala and Gatling dependencies in the pom file

    <dependencies>
        <dependency>
          <groupId>org.scala-lang</groupId>
          <artifactId>scala-library</artifactId>
          <version>${scala.version}</version>
        </dependency>
        <dependency>
          <groupId>io.gatling.highcharts</groupId>
          <artifactId>gatling-charts-highcharts</artifactId>
          <version>${gatling.version}</version>
          <scope>test</scope>
        </dependency>
     </dependencies>

And finally, add the build section in the pom file

    <build>
        <sourceDirectory>src/main/scala</sourceDirectory>
        <testSourceDirectory>src/test/scala</testSourceDirectory>
        <plugins>
          <!-- Gatling Maven plugin that runs the load-simulation. -->
          <plugin>
            <groupId>io.gatling</groupId>
            <artifactId>gatling-maven-plugin</artifactId>
            <version>${gatling-plugin.version}</version>
            <configuration>
              <simulationClass>com.example.perf.simulations.HttpSimulation</simulationClass>
            </configuration>
          </plugin>
        </plugins>
      </build>

Once all the sections in the pom file have been updated, we are now ready to create a Gatling simulation class in Scala.

*   In src/test/scala, create a package named com.example.gatling.simulations.
*   In this package, create a Scala class named HttpSimulation with the following implementation.

    package com.example.gatling.simulations

    import io.gatling.core.Predef._
    import io.gatling.http.Predef._
    import io.gatling.http.config.HttpProtocolBuilder.toHttpProtocol
    import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

    /**
      * Example Gatling load test that sends two HTTP requests to the same URL.
      */
    class HttpSimulation extends Simulation {

        val theHttpProtocolBuilder = http
            .baseURL("https://computer-database.gatling.io")

        val theScenarioBuilder = scenario("Scenario1")
            .exec(
                http("myRequest1").get("/")
            )

        setUp(
            theScenarioBuilder.inject(atOnceUsers(1))
        ).protocols(theHttpProtocolBuilder)
    }

To execute your test, just run

    mvn gatling:execute