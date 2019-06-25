---
layout: post
title: "Karate API Testing Tool Cheat Sheet"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

Karate is an opensource API testing tool developed by[ Peter Thomas from Intuit.](https://github.com/intuit/karate) Karate is built on top of HttpClient and Cucumber and has its own DSL to make API testing very easy. Although been around for almost a year, it has matured very quickly and has all the capabilities expected from an API testing tool.

Because Karate sits on top of cucumber, it inherits all the functionalities of cucumber, so you can write your API tests in simple Given When Then format and utilize all the cucumber keywords such as Feature, Scenario Outline, Scenario, Examples, Feature tagging.

I've created this cheat sheet to help anyone who is involved in testing APIs, giving examples of how to use the Karate tool.

**Please note**, this cheat sheet is just the tip of the iceberg. Karate has many other features that are not mentioned here. This list is just the most common operations typically used when testing APIs.

### Add the dependencies (pom.xml)

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.plugin>3.7.0</maven.compiler.plugin>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <java.version>1.8</java.version>
        <karate.version>0.8.0.RC4</karate.version>
        <cucumber.reporting.version>3.13.0</cucumber.reporting.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.intuit.karate</groupId>
            <artifactId>karate-core</artifactId>
            <version>${karate.version}</version>
        </dependency>
        <dependency>
            <groupId>com.intuit.karate</groupId>
            <artifactId>karate-apache</artifactId>
            <version>${karate.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.intuit.karate</groupId>
            <artifactId>karate-testng</artifactId>
            <version>${karate.version}</version>
        </dependency>
        <dependency>
            <groupId>net.masterthought</groupId>
            <artifactId>cucumber-reporting</artifactId>
            <version>${cucumber.reporting.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

### Project Structure

You can organize and structure your maven project like this:

[![](https://www.testingexcellence.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-30-at-23.34.57.png)](https://www.testingexcellence.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-30-at-23.34.57.png)

### karate-config.js

This is where you can create variables which have a global scope. Karate reads this file before executing any scenario. This comes in very handy when switching environments which specific variables are used for different environments

    function() {
      var env = karate.env; // get java system property 'karate.env'

      karate.log('karate.env selected environment was:', env);
      karate.configure("ssl", true)

      if (!env) {
        env = 'dev'; //env can be anything: dev, qa, staging, etc.
      }

      var config = {
        env: env,

        AM_USERNAME: 'devuser',
        AM_PASSWORD: 'devpass',
        AM_HOST: 'https://am.'+env+'.example.net',
        AM_AUTHENTICATE_PATH: '/am/json/realms/root/authenticate',

        IDM_USERNAME: 'devuser',
        IDM_PASSWORD: 'devpass',
        IDM_HOST: 'https://idm.'+env+'.example.net',
        IDM_MANAGED_USER_PATH: '/idm/managed/user',
      };

      if(env == 'qa') {
        config.AM_USERNAME: 'myUserName'
        config.AM_PASSWORD: 'myPa55word'
      }

      if(env == 'live') {
         config.AM_USERNAME: 'admin'
         config.AM_PASSWORD: 'secret'
      }

      karate.log('OpenAM Host:', config.AM_HOST);

      karate.configure('connectTimeout', 60000);
      karate.configure('readTimeout', 60000);

      return config;
    }

### How to send an HTTP Request (Get, Post, Put, Delete, Patch)

    @FR
    Feature: AM Admin Login

      Scenario: Login as Admin to AM and get token
        Given header X-OpenAM-Username = AM_USERNAME
        Given header X-OpenAM-Password = AM_PASSWORD
        Given url AM_HOST + AM_AUTHENTICATE_PATH
        And request ''
        When method POST
        Then status 200

        * assert response.tokenId != null
        * def tokenId = response.tokenId

In the above example, AM_USERNAME, AM_PASSWORD, AM_HOST, and AM_AUTHENTICATE_PATH come from the karate-config.js file.

'*****' can be interpreted as any of Given, When, Then, And, but when an action doesn't serve a context, we can use '*'.

'**+**' acts as a concatenate operator

The above example sends an empty post body request. We can just use ' '

The method can be any valid HTTP verb (Get, Post, Put, Patch, Delete)

'**def**' is used to store a value in a variable.

**header**, **url**, **request**, **method**, **status**, **response** are all karate's keywords forming the DSL. For the full list of keywords, visit Intuit.

In the above example, the response is JSON format, so we can use karate's builtin JsonPath notation to parse the response.

### Request Chaining with multiple API calls

    Feature: request chaining with multiple api calls

    Scenario: chain request demo

        * json req = read('classpath:com/example/templates/idm/create-user-template.json')
        * def user = req.givenName

        Given header X-Username = 'anonymous'
        Given header X-Password = 'anonymous'
        Given url AM_HOST + '/some/endpoint
        And request ''
        When method POST

        * def authId = response.authId

        * def payload1 =
        """
        {"authId":"${authId}","callbacks":[{"type":"NameCallback","output":[{"name":"prompt","value":"Email Address"}],"input":[{"name":"IDToken0","value":"${user}@putsbox.com"}]}]}
        """

        * replace payload1
        | token     | value  |
        | ${authId} | authId |
        | ${user}   | user   |

        * json mypayload1 = payload1

        Given header X-Username = 'anonymous'
        Given header X-Password = 'anonymous'
        Given url AM_HOST + '/openam/some-other-endpoint
        And request mypayload1
        When method POST

In the above example, the first call is made and the authId is parsed from the response and saved in a variable called authId. We then replace the second payload with the authId retrieved in the first call. We then use the new payload to send to the next API call.

### How to read request templates and call other feature files

We can make our scenarios reusable and call them from other feature files. In this example, we can create a "generic" create-user.feature file where we can send the create user request but with a different request body

    Feature: Create User in IDM

      Scenario: Create user in IDM with given guid

        Given header X-Requested-With = 'Swagger-UI'
        Given header X-OpenIDM-Username = IDM_USERNAME
        Given header X-OpenIDM-Password = IDM_PASSWORD
        Given url IDM_HOST + IDM_MANAGED_USER_PATH
        And request __arg
        When method POST
        Then status 201

Note, in the above example, we are using '__arg' as the post body request.

We can then call the above feature file and pass in the required post body, which in turn we can read from a template

    Feature: Create a user

      Scenario: Create user in IDM 

        * json myReq = read('classpath:com/example/templates/idm/idm-create-user-template.json')
        * call read('classpath:com/example/idm/idm-create-user.feature') myReq

The above code reads a template which is in location `com/example/templates/idm/idm-create-user-template.json` and stores it as a JSON variable called myReq

Then we can send the JSON variable to the other feature file using the call method.

The template looks like

    {
      "mail" : "david@putsbox.com",
      "givenName" : "david",
      "sn" : "putsbox",
      "jobRole" : "developer",
      "telephoneNumber" : "91234567890",
      "dob" : "01/02/2010",
    }

### How to read other feature files - example 2

We can read a specific variable in the called feature file which is passed from a calling feature file

    Feature: Create User in IDM

      Scenario: Create user in IDM with given guid

        Given header X-Requested-With = 'Swagger-UI'
        Given header X-OpenIDM-Username = IDM_USERNAME
        Given header X-OpenIDM-Password = IDM_PASSWORD
        Given url IDM_HOST + IDM_MANAGED_USER_PATH
        And request __arg.emailAddress
        When method POST
        Then status 201

Note, in the above example, we are using '__arg.emailAddress' as the post body request. We are only interested in sending the email address as the request

We can then call the above feature file and pass in the required post body, which in turn we can read from a template

    Feature: Create a user

      Scenario: Create user in IDM 

        * json myReq = read('classpath:com/example/templates/idm/idm-create-user-template.json')
        * json emailAddress = '{"emailAddress": "' +myReq.mail+ '"}'
        * call read('classpath:com/example/fr/idm/idm-create-user.feature') emailAddress

The above code extracts the mail field from the JSON template. When we pass a variable to another feature file, it must be of type JSON, so the variable emailAddress must be a valid JSON.

Then we can send the JSON variable to the other feature file using the call method and be sending the JSON variable, in this case, `emailAddress`.

### Create a Test Runner class

We can execute the scenarios in the feature file using maven (which is useful to run the tests in a CI environment)

    import com.intuit.karate.cucumber.CucumberRunner;
    import com.intuit.karate.cucumber.KarateStats;
    import cucumber.api.CucumberOptions;
    import net.masterthought.cucumber.Configuration;
    import net.masterthought.cucumber.ReportBuilder;
    import org.apache.commons.io.FileUtils;
    import org.testng.annotations.Test;

    import java.io.File;
    import java.util.ArrayList;
    import java.util.Collection;
    import java.util.List;

    import static org.testng.AssertJUnit.assertTrue;

    @CucumberOptions(tags = {"@FR", "~@ignore"})
    public class TestRunner_FR {

        @Test
        public void testParallel() {
            String karateOutputPath = "target/cucumber-html-reports";
            KarateStats stats = CucumberRunner.parallel(getClass(), 1, karateOutputPath);
            generateReport(karateOutputPath);
            assertTrue("there are scenario failures", stats.getFailCount() == 0);
        }

        private static void generateReport(String karateOutputPath) {
            Collection jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[] {"json"}, true);
            List jsonPaths = new ArrayList(jsonFiles.size());
            for (File file : jsonFiles) {
                jsonPaths.add(file.getAbsolutePath());
            }
            Configuration config = new Configuration(new File("target"), "YOUR PROJECT NAME");
            config.addClassifications("Environment", System.getProperty("karate.env"));
            ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
            reportBuilder.generateReports();
        }
    }

The above code runs all the feature files which are tagged as "@FR" but ignores all the tests which are tagged as "@ignore".

It also creates a cucumber report for visualizing the results of the test runs.

### Run the tests from a command line or CI

    mvn clean test -DargLine="-Dkarate.env=staging" -Dtest=TestRunner_FR

Here, we are running the TestRunner_FR class and setting the environment as staging.

### Execute JavaScript in the Feature file

In a feature file, we have the capability to execute javascript as well

    Feature: Generate a random session id

      Scenario: generate random session id
        * def random_string =
        """
        function(s) {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < s; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
        }
        """
        * def sessionId =  random_string(10)

The above code generates a random string of length 10 and saves it in a variable called sessionId.

### Data Driven Tests

Since Karate sits on top of cucumber, data-driven testing comes as default

    Feature: Data driven testing example

    Scenario Outline: An 'Invalid input request' error is returned if required parameters have incorrect values.

        * def attribute_name = '<name_attribute>'
        * xml malformed_request = <method_call>
        * json activate_request = malformed_request

        * def activate_response = call read('activate.feature') activate_request

        * match activate_response.contentType == 'text/xml;charset=ISO-8859-1'
        * match activate_response.gas_version == '5.2.7'
        * match activate_response.error_code == '1000'

        Examples:
          | name_attribute  | method_call                                                                        |
          | auth_method     | Java.type('com.example.StringUtil').removeNodeByAttribute(xml_req, attribute_name) |
          | app_url         | Java.type('com.example.StringUtil').removeNodeByAttribute(xml_req, attribute_name) |

The example above utilizes Cucumber's Scenario Outline and Examples keywords to create data-driven tests. To read each parameter, we use the angle brackets <>

### Call Java from a feature file

    package com.example;

    public class StringUtil {

        public static String getNumberFromString(String text) {
            return text.replaceAll("\\D+", "");
        }
    }

    Feature: Call java demo

    Scenario: Get number from text

        Given url 'https://preview.putsbox.com/p/david/last.json'
        When method GET
        * def emailText = response.text
        * def otpCode = Java.type('com.example.StringUtil').getNumberFromString(emailText)
        * print otpCode

The above feature file calls a Java method in the class called StringUtil. Then saves the response of that call to otpCode variable.

https://www.testingexcellence.com/set-multiple-headers-http-request-karate/