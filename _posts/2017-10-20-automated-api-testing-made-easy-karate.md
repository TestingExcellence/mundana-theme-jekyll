---
layout: post
title: "Automated API Testing Made Easy With Karate"
author: Amir
tags: [ api testing, karate]
image: assets/images/karate-automated-api-testing.png
---

If you would like to get involved in Automated API Testing, but don't have the programming background, then you might want to give Karate a go!

Karate was released as an open-source tool by [Intuit](https://github.com/intuit/karate). The tool is designed to be used for automated API testing and has all the required features to make API testing a breeze and actually enjoyable.

Unlike other automated API testing tools which require a fair amount of coding, even just to do basic stuff, Karate works out of the box. You can construct the most complex request-response operations with no knowledge of any programming language. All you have to do is to write the feature file using plain text Gherkin style.

Because Karate is a complete DSL and sits on top of [Cucumber-JVM](https://github.com/cucumber/cucumber-jvm), you can run tests and generate reports like any standard Java project, but instead of writing Java code, you write the tests in a language designed to make dealing with HTTP, JSON or XML easy and simple.

Although there are no pre-requisites to use Karate, it helps if you have the basic understanding of HTTP, JSON, XML, JsonPath and XPath and JavaScript.

In this post, we take a look at some typical operations you would normally perform in Automated API Testing, but first, a quick guide on setting up your environment for Karate.

### Maven

If you are using Maven, you need the two following dependencies

```maven
<dependency>
    <groupId>com.intuit.karate</groupId>
    <artifactId>karate-apache</artifactId>
    <version>0.6.0</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>com.intuit.karate</groupId>
    <artifactId>karate-junit4</artifactId>
    <version>0.6.0</version>
    <scope>test</scope>
</dependency>
```

### Gradle

Alternatively, if you are using Gradle, you need

```gradle
testCompile 'com.intuit.karate:karate-junit4:0.6.0'
testCompile 'com.intuit.karate:karate-apache:0.6.0'
```
### Folder Structure

A Karate test script has the file extension `.feature` which is the standard followed by Cucumber. You are free to organize your files using regular Java package conventions.

The Maven tradition is to have non-Java source files in a separate `src/test/resources` folder structure - but the creators of the Karate tool recommend that you keep them side-by-side with your `*.java` files.

[![Karate Api Testing Tool - folder structure](/assets/images/karate-api-testing.png)](/assets/images/karate-api-testing.png)

Like Cucumber, you need to have a "Runner" class which runs the feature file(s). Unlike Cucumber, however, there are no step definitions! And this is the magic of Karate.

To use the TestRunner.java class to execute the feature file, you need to have the build section in the pom.xml file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>Tutorials</groupId>
    <artifactId>Karate</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>com.intuit.karate</groupId>
            <artifactId>karate-apache</artifactId>
            <version>0.6.0.4</version>
        </dependency>
        <dependency>
            <groupId>com.intuit.karate</groupId>
            <artifactId>karate-junit4</artifactId>
            <version>0.6.0.4</version>
        </dependency>
    </dependencies>
    <build>
        <testResources>
            <testResource>
                <directory>src/test/java</directory>
                <excludes>
                    <exclude>**/*.java</exclude>
                </excludes>
            </testResource>
        </testResources>
    </build>
</project>
```

And your TestRunner.java class would look like

```java
package com.tutorials.karate;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

@RunWith(Karate.class)
public class TestRunner {

}
```

## Simple Automated API Testing with Karate

Suppose you are testing an API (https://some-api.com/api/users) which returns a list of users in JSON format

```json
[
    {
        "id": 1,
        "name": "FirstUser",
        "password": "User1Pass"
    },
    {
        "id": 2,
        "name": "SecondUser",
        "password": "User2Pass"
    }
]
```

Your Karate feature file will look like:

```gherkin
Feature: Test User API
    Scenario: Fetch all users
    Given url 'https://some-api.com/api/users'
    When method GET
    Then status 200
    And assert response.length == 2
    And match response[0].name == 'FirstUser'
```

And that's it - very concise and to the point and most importantly, no code!

Karate comes with a very rich set of useful features which enables you to perform Automated API Testing very easily and quickly. In future posts, we delve more into this amazing tool and give examples on how to do just about anything you need when testing APIs!