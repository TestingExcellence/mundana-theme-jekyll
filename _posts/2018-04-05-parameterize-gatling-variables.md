---
layout: post
title: "How to Parameterize Gatling Variables"
author: Amir
tags: [ performance testing, gatling ]
image: assets/images/gatling-parameterize-variables.png
---

How can we parameterize Gatling variables and pass parameters from the command line to Gatling? On most occasions, when you create a performance script, you want to run the simulation with a different set of parameters, such as users, ramp-up time and duration, or even different environment.

In this Gatling tutorial, we will be using Maven as the build tool and show how to parameterize the test so that we can pass different values from command line or a CI tool such as Jenkins to our simulation class.

* [Create a Gatling project with Maven](/performance-testing-gatling-maven-scala/)
* [How to send post request in Gatling](/gatling-random-post-request/)

## Parameterize Gatling Variables

First, we have to have the following in the build section of the pom.xml file

```xml
<build>
  <plugins>
    <!-- Gatling Maven plugin that runs the load-simulation. -->
    <plugin>
      <groupId>io.gatling</groupId>
      <artifactId>gatling-maven-plugin</artifactId>
      <version>${gatling-plugin.version}</version>
      <configuration>
        <simulationClass>simulations.LoginSimulation</simulationClass>
        <jvmArgs>
          <jvmArg>-Denv=stable</jvmArg>
          <jvmArg>-Dusers=${users}</jvmArg>
          <jvmArg>-Drampup=${rampup}</jvmArg>
          <jvmArg>-Dduration=${duration}</jvmArg>
          <jvmArg>-Dthroughput=${throughput}</jvmArg>
          <jvmArg>-Xms2g</jvmArg>
          <jvmArg>-Xmx5g</jvmArg>
        </jvmArgs>
        <!--<fork>true</fork>-->
        <propagateSystemProperties>true</propagateSystemProperties>
      </configuration>
    </plugin>
  </plugins>
</build>
```

Then in a Configuration object, we can reference the above variables to inject values passed from the command line:

```scala
object Configuration {

  val t_concurrency = Integer.getInteger("users", 10).toInt
  val t_rampUp = Integer.getInteger("rampup", 1).toInt
  val t_holdFor = Integer.getInteger("duration", 60).toInt
  val t_throughput = Integer.getInteger("throughput", 100).toInt

}
```

If the user doesn’t provide any value for the variables, then default values are used. For example, the default value for users is 10.

Once we have the above setup, we can then use the command line or from a CI tool to pass in parameters to the pom.xml file which in turn injects them into the simulation class.

```bash
mvn clean gatling:execute -Dusers=20 -Drampup=2 -Dduration=60 -Dthroughput=100
```