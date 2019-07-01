---
layout: post
title: "Software Testing Interview Questions and Answers - Ultimate List"
author: Amir
tags: [ interview questions ]
image: assets/images/software-testing-interview-questions.jpg
---

This post is a large collection of Software Testing Interview Questions and Answers. The list covers foundations of Software Testing, Technical Testing, Test Automation, API Testing, Agile Testing, Web Testing and Selenium WebDriver Interview Questions and Answers.

You can click on the links below to read the interview questions and answers for your area of interest.

*   [Selenium WebDriver](#selenium_interview_questions)
*   [Software Testing](#software_testing_interview_questions)
*   [API Testing](#api_testing_interview_questions)
*   [Agile Testing](#agile_testing_interview_questions)
*   [Test Automation](#test_automation_interview_questions)
*   [Web Testing](#web_testing_interview_questions)

## Software Testing Interview Questions and Answers

In this section, we will look at some common Software Testing Interview Questions that you may be asked when you attend a Software Testing Interview.

The answers to these interview questions are for guidance only. You may want to expand on the answers at the interview if you are asked any of these Software Testing Interview Questions.

If you are preparing for a Software Testing Interview, or you are interviewing candidates for QA roles, you will find this mind map very useful: [30+ Essential Software Testing Questions to Prepare for Interview](/software-testing-interview-questions-preparation-checklist/)

### What is Exploratory Testing and when should it be performed?

The definition of Exploratory Testing is “simultaneous test design and execution” against an application. This means that the tester uses her domain knowledge and testing experience to predict where and under what conditions the system might behave unexpectedly. As the tester starts exploring the system, new test design ideas are thought of on the fly and executed against the software under test.

On an exploratory testing session, the tester executes a chain of actions against the system, each action depends on the result of the previous action, hence the outcome of the result of the actions could influence what the tester does next, therefore the test sessions are not identical.

This is in contrast to Scripted Testing where tests are designed beforehand using the requirements or design documents, usually before the system is ready and execute those exact same steps against the system in another time.

Exploratory Testing is usually performed as the product is evolving (agile) or as a final check before the software is released. It is a complementary activity to automated regression testing.

### What Test Techniques are there and what is their purpose?

Test Techniques are primarily used for two purposes: a) To help identify defects, b) To reduce the number of test cases.

*   [Equivalence partitioning](/equivalence-partitioning/) is mainly used to reduce the number of test cases by identifying different sets of data that are not the same and only executing one test from each set of data
*   [Boundary Value Analysis](/boundary-value-analysis/) is used to check the behavior of the system at the boundaries of allowed data.
*   [State Transition Testing](/state-transition-testing/) is used to validate allowed and disallowed states and transitions from one state to another by various input data
*   Pair-wise or All-Pairs Testing is a very powerful test technique and is mainly used to reduce the number of test cases while increasing the coverage of feature combinations.

### Why is Testing Necessary?

Testing is necessary in order to identify any defects that are present in software which can cause harm. Without proper testing, we could potentially release a software which could malfunction and cause serious injuries.

Examples can be:

*   Software in a life support machine which can cause serious harm to a patient;
*   Software in a nuclear plant which monitors nuclear activity can cause harm to the environment
*   Banking or financial application which calculates exchange rates can cause financial loss to a business

### What is the difference between a Bug, Defect, Error, Failure, Fault, and Mistake?

Error and Mistake are the same things. Bug, Defect, and Fault are the same thing.

In general, a human being can make a mistake (error) which produces a defect (bug, fault) in a software application which may cause a failure.

Defects occur because human beings are prone to make mistakes, also a software application can be very complex so the integration of different components can cause odd behaviors.

### How much testing is enough?

There is no definitive answer to this question. Testing is not absolute and has no limits. However, we can use risk metrics (risk-based testing) to identify the likely scenarios that can cause the most harm or the sections of the software that is mostly used so that we focus our time and effort to the sections that are most important.

Testing should provide enough information about the status or health of an application, so the stakeholders can make an informed decision on whether to release the software or spend more time on testing.

The following questions contain short answers to provide quick hints to some ISTQB Interview Questions.

### What are the Seven Testing Principles?

1.  Testing shows the presence of defects
2.  Exhaustive testing is impossible
3.  Early testing
4.  Defect clustering
5.  Pesticide Paradox
6.  Testing is context dependent

[Read more on seven principles of testing](/seven-principles-of-software-testing/)

### What is the Fundamental Test Process?

*   Test planning and control
*   Test analysis and design
*   Test implementation and execution
*   Evaluating exit criteria and reporting
*   Test closure activities

[Read more about fundamental test process](/fundamental-test-process-software-testing/)

### What are the different Test Levels?

*   Component Testing
*   Integration Testing
*   System Testing
*   Acceptance Testing

### What are the different black box testing techniques?

*   Equivalence Partitioning
*   Boundary Value Analysis
*   Decision Table Testing
*   State Transition Testing
*   Use Case Testing

### What are the different Test Planning activities?

*   Determining the scope and objectives of testing
*   Defining the overall approach of testing, defining entry and exit criteria
*   Making decisions about what to test and who will test which part of the application
*   Scheduling test design sessions
*   Assigning resources for different testing activities
*   Deciding which tools to use for testing
*   Reporting on the progress of testing
*   Producing exit reports

### What information should be included in a defect or bug report?

*   A brief summary of the defect
*   A full description of the defect including steps to reproduce
*   Screenshot attachments if required
*   Date the defect was found and raised
*   Who reported the defect
*   Severity and/or Priority of the defect
*   Which component is the defect assigned

## Agile Testing Interview Questions and Answers

Agile Testing Interview Questions are designed to test your knowledge of agile principles and testing practices.

### What is Agile Testing and how is it different to the traditional waterfall or the V model?

Agile Testing is testing practice that follows the principles of agile software development. Agile testing involves all members of an agile team with special skills and expertise to ensure business value is delivered at frequent intervals.

The big difference is that in an agile environment, testing is not a phase, it is an activity parallel to development.

In an agile environment, small features of the software are delivered frequently, so testing activity should be parallel to development activity. Testing time is short as we are only testing small features.

In the waterfall model, there is a testing phase at the end of the development so, testing is a big effort done after the whole application is developed. Testing time is long as we have to test the whole application.

### What is your approach when requirements change continuously?

This question can be asked if you are interviewed for an agile QA position where requirements are likely to change frequently during development. Although a complete change in requirement is possible, most of the time, it is the technical details that are subject to change. e.g. the intent of the requirement or behavior of the feature is the same but implementation details can change

Some possible answers can be:

*   Write generic test plans and test cases which focus on the intent of the requirement rather than its exact details
*   Work very closely with the product owners or business analysts to understand the scope of change so testing can be updated
*   Make sure the team understands the risks involved in changing requirements especially towards the end of the sprint
*   If you’re going to automate this feature, it is best to wait until the feature is stable and requirements are finalized
*   Negotiate to see if the changes can be kept to a minimum and/or implement the changes in next sprint

### What are good characteristics of an Agile Tester / QA?

When attending an Agile Testing Interview, questions can be asked to find out what you really understand from an Agile Tester or Agile QA role and how you will fit with the rest of the team.

Some good characteristics of an Agile Tester are:

*   Good communicator – In agile teams, there is an increased level of communication with the Devs, QAs, and BAs
*   Priorities change frequently in agile projects, so the Agile QA should be able to prioritize the tasks accordingly
*   Should not be afraid of change
*   Ideally, Agile Testers should be multi-skilled and technical or at least understand the technical terminology so that they don’t feel alienated from the rest of the team when developers talk in technical terms
*   Should understand Agile concepts and principles
*   Participate in daily sprint planning, stand-ups, retrospectives. Note the word Participate, meaning to actually talk and take part in discussions rather than just attending the meetings

### What are the two key factors when working as a QA in an Agile team?

QAs can add a lot of value to an agile team because of the different mindset. Testers can and should think about the different possible scenarios to test a story. However, the most important asset that they can bring is:

*   To prevent defect. QA should advocate best practices along the way to prevent defects from entering the system in the first place.
*   To provide fast feedback. It is important for developers to know if the new functionality works as expected and if regression tests pass, and they need that feedback quite quickly. QA should provide the results of the tests to developers as soon as possible.

### What are the three main roles in Scrum?

The Scrum team consists of three main roles:

*   **Product Owner:** Manages the product backlog. PO is the voice of the business and creates new features to be developed for the application.
*   **Scrum Master:** Responsible for managing the sprint, remove any impediments and keeps track of the progress of the project.
*   **Scrum Team itself:** Composed of developers, designers, and QA. This forms the team which is responsible for delivering high-quality software.

## Test Automation Interview Questions and Answers

This section focuses on Test Automation Interview Questions and Answers. Rather than being tool specific, e.g. QTP or Selenium, WebDriver, the questions are more about the approach to test automation.

### What criteria do you consider for automating a test?

I would consider the following points to help me decide if a test should be automated:

*   How often does the test need to be executed? i.e. is that going to be a regression test? Sometimes the test will need to be executed once, but with a large set of data.
*   How much time does automating this test will save me so that I can use my time in exploratory testing.
*   How important is the test to the business; i.e. is the test scenario a typical user journey through the application.
*   How complex is it to automate the test and how likely is it that the complexity doesn’t cause many false positives which increases results analysis time?
*   How likely is it that this test catches a defect?
*   How likely is it that a feature or functionality will break and what is the impact of it on the business? If it is high impact, then it should be automated to ensure it passes from release to release

### What kind of tests should NOT be automated?

This interview question is similar to the previous question but focuses on which tests Not to be automated and left for manual testing. Possible answers can be:

*   Usability Testing – at times this can be an impossible task to perform by automation as the computer cannot efficiently judge if the system is of any use to its users.
*   Tests that only need to be executed once – unless the same test needs to be executed for a large dataset then it makes sense to automate.
*   Tests without predictable results – test automation should give us confidence in the results of the tests. If there are intermittent failures then the tests cannot be reliable and cannot be dependent on.
*   Tests that need to be verified visually.
*   Tests that need to be executed quickly. At first, writing an automated test takes longer. If we want a quick check, we should test manually, however, if that test is a good one which should be run regularly, then it should be automated in time

### What are Pros and Cons of automating tests at UI layer?

Pros:

*   UI automated tests execute in a way that simulates a user interacting with the system. So it is very good for validating user journeys and flows
*   Can cover end-to-end flows that communicate with 3rd party systems
*   Because tests are run against the system, they can be shown to the customer who can understand what tests are run
*   Can catch high severity or showstopper bugs
*   Can check UI functionality where it is not possible to test otherwise

Cons:

*   UI automated tests can be very brittle (i.e. fail due to UI changes even though functionality hasn’t changed).
*   Slow feedback to the team. Execution is slow as you have to wait for the system to launch and connections with 3rd party system can take a long time.
*   Limitation on what can be checked from the UI. There is some information that is not present from the UI.
*   Because tests are slow from UI, we can’t have a lot of tests running against the UI.
*   Can be time-consuming to construct automated test scripts for the UI.
*   Usually, have to depend on a 3rd party tool or vendor for UI testing

### Why would you want to automate a test? Is it to:

*   Increase test coverage?
*   Improve quality?
*   Save time for exploratory testing?
*   Find more bugs?
*   Replace manual testers?

This is a common test automation interview question and answer to this is quite straightforward. Although some of the above reasons seem plausible, the **main reason** why you would want to automate a test is that you want to [**repeat the same test many times**](/why-would-you-want-to-automate-a-test/ "Why Would You Want To Automate a Test?").  

<a id="web_testing_interview_questions"></a>

## Web Testing Interview Questions

In this section, we discuss some common Web Testing Interview Questions and Answers. These questions are specific to [web testing](/web-testing-tips-how-to-test-web-applications/).

### How do you test the login feature of a web application?

This is a very common software testing interview question and the aim is to see how broad you can think about the feature. Most interviewees start with the obvious answer of checking input fields with positive and negative values, invalid email, valid email but incorrect password, SQL injection, etc. But most of these tests can be done and should be done by the developers as part of integration testing.

Here the focus is on testing at the system level, tests which cannot be done without a fully integrated system.

Possible answers to this testing interview question can be:

*   Sign in with valid login, Close browser and reopen and see whether you are still logged in or not.
*   Session management is important – how do we keep track of logged in users, is it via cookies or web sessions?
*   Sign in, then log out and then go back to the login page to see if you are truly logged out.
*   Log in, then go back to the same page, do you see the login screen again?
*   Sign in with one browser, then open another browser to see if you need to sign in again?
*   Log in, change the password, and then log out, then see if you can log in again with the old password.

### What Types of Testing is Specifically Important for Web Testing?

This is also an important Software Testing interview question for web application testing roles. Note, this question is asking about the _**types**_ of testing.

Although you would do functional testing, usability testing, accessibility testing, etc, these are all also applicable to desktop application testing. The question is asking specifically for web testing.

Two types of testing which are very important for testing web applications are Performance Testing and Security Testing. The difference between a web application and desktop application is that web applications are open to the world, with potentially many users accessing the application simultaneously at various times, so load testing and stress testing are important.

Web applications are also vulnerable to all forms of attacks, mostly DDOS, so security testing is also very important to consider when [testing web applications](/web-testing-tips-how-to-test-web-applications/).

### How do You Verify the Results of Your Search on Search Results Page?

This is another common Software Testing Interview Question for [e-commerce testing](/testing-e-commerce-websites/) roles. This question refers to verifying the results are what we expect to see.

Suppose you search for a product on Amazon.com website. On the search results page, you will see a list of items related to your search. How can you verify that the results that you see are really the ones that you are supposed to see?

The answer to this question is rather simple. At first instance, we need to know where the data is coming from. Are they coming from a database? Or some XML files from 3rd party websites?

Once we have this information, we can start comparing the results we see on the result page with the results from the source, e.g. database.

Another option is to use mocks to generate the data that we need so we can fully control the data that we see on the search results page.

### How is Web Application Testing different to Desktop Application Testing?

Web Applications are typically hosted on a server which we can access via a web browser, whereas desktop applications are installed on the client’s machine.

This setup opens a lot of new testing challenges: Performance and Security testing become important as the application is open to a wide audience. Good design and usability are also important.

Other important factors that come to play are testing on multiple browsers, multiple devices, redirection, and responsiveness.

Also, we should not forget about Javascript, CSS, Cookies, W3C standards, traffic monitoring, third-party tags testing, all of which are important in Web Application Testing.

### How would you Test a Service Oriented Architecture (SOA) Web Application?

The testing of web applications that communicate with a web service can be broken down into two parts:

*   **Testing of the Web Service in isolation.** Each web service has one or more functions which can be tested by sending appropriate requests and analyzing the response and verifying correct data is returned in the response. We can use tools such as [SoapUI](http://www.soapui.org/) to test a Soap Service or Rest Client to test a RESTful web service.
*   **Integration Testing of Web Service with the Front End.** The integration testing is also important as it can highlight issues with data in the request and display of the response.

The reason for this separation is to be able to identify issues in the web service much quicker and easier to debug.

### There is a login form which is connected to an Authentication Web Service. What tests would you perform at which layer?

*   All the input/output validation should be tested at the API layer calling the Authentication Web Service. Tests such as valid/invalid username/password combinations as well as verifying correct error messages.
*   The location of the display of error messages, their color and font should be tested at login web page. Also, if applicable, Javascript and Cookie tests needs to be tested at front-end login page.

### There are many ways to test a website and there could be lots of test cases to execute, how can you make sure the web application is fit for release?

*   We can Automate majority of test cases, but most importantly we can use test techniques such as Pair-wise testing to reduce combinations and/or model-based testing to plan user journeys to ensure major functionality of web application works.
*   We can also use analytics to gain insight into what users do on the website, which page is most popular and which feature is most used by users.

## API Testing Interview Questions and Answers

Many of the new modern web applications are built using web-services, micro-services, and APIs. As testers, we should be knowledgeable and experienced in testing APIs and Web Services.

Here are some fundamental API Testing Interview Questions mainly aimed at software testers.

### What is the difference between API Testing and Unit Testing?

API testing and unit testing are not the same things, although they are similar. Unit testing is done by the development team to make sure that a particular unit of software functions as required; since it is not black-box testing, it can’t accurately reflect the use of that software in the field.

To put it bluntly, developers know their software too well, so they’re likely to miss something which may be blindingly obvious to a tester who is not acquainted with the software’s internal workings.

The job of the API tester is to test the software knowing only what a user is likely to know. API testing also tests the unit as part of a system, while unit testing typically tests the unit in relative isolation from the rest of the system.

Real web API testing requires an internet connection since communication to the Web API is done over the web. Unit testing is done on a local machine and requires no internet connection.

### Unit Testing

*   Developers perform it
*   Small units are tested in isolation
*   The developer can access the source code
*   Aims to find programmer errors and code coverage
*   Limited in scope
*   Usually ran before check-in

### API Testing

*   Testers perform it
*   Are a means of end-to-end testing
*   Testers treat API as black-box
*   Multiple functionalities can be checked
*   Performance testing can also be done
*   All functional issues are tested
*   Broader in scope
*   Ran after build is created

### What’s the difference between UI level testing and API level testing?

With API testing, we can hit the API endpoint directly and have control of what data we send to the API for testing purposes. e.g. invalid data, malformed requests, etc.

In UI level testing, we don’t have that level of flexibility because we are bound by the constraints of the UI.

Also in terms of the response of API, there could be a lot of information which is not presented in the UI layer, but only available when analyzing the response body.

UI level tests are inherently slow to execute, whereas API level tests are a lot quicker. As a result, API tests provide a much quicker feedback.

### How to perform API Testing? What to check for?

In API Testing, we make a request to the API with known data and we then analyze the response for validation. Typically, the things which we should check for are:

*   Data accuracy
*   Data validations, data type, data order, data completeness
*   Error codes if API returns
*   Schema validation
*   Authorization checks
*   HTTP status codes
*   Response timeout implementation
*   Non-functional Testing such as Security and Performance Testing

### What tools are typically used for API Testing?

[Postman](https://www.getpostman.com/) is a rest client that started off as a Chrome browser plugin but recently came out with native versions for both Mac and Windows.

*   Can be used for both automated and exploratory testing
*   Can be run on Mac, Windows, Linux &Chrome Apps
*   Has a bunch of integrations like support for Swagger & RAML formats
*   Has Run, Test, Document and Monitoring Features
*   Doesn’t require learning a new language

[SoapUI](https://www.soapui.org/)is a headless functional testing tool from SmartBear software. It comes in two flavors: Free open source version and Pro Version.

*   Can easily create custom code using Groovy
*   Drag and Drop Test Creating
*   Can create complex scenarios
*   Asynchronous Testing
*   SoapUI’s Mock Service lets you mimic web services before they are implemented

[Rest-Assured](http://rest-assured.io/) is an open-source Java Domain-specific language (DSL) that makes testing REST service simple. It simplifies things by eliminating the need to use boiler-plate code to test and validate complex responses. It also supports XML and JSON Request/Responses.

*   Removes need to create boilerplate code required to interact with a rest service
*   Support BDD Given/When/Then syntax
*   Integrated seamlessly with Java projects

### What are HTTP Request and HTTP Response?

An HTTP **request** method is made up of four components:

*   **Request Method** – Get, Post, Put, Delete (these are the common ones)
*   **Request URI** – the URL of the resource
*   **Request Header** – Accept-Language, Accept-Encoding, User-Agent, Host
*   **Request Body** – this is the data to be sent to the resource

An HTTP **response** method is made up of three components:

*   **Response Status Code** – 200, 301, 404, 500 (these are the most common ones)
*   **Response Header Fields** – Date, Server, Last-Modified, Content-Type
*   **Response Body** – this is the data that comes back to the client from the server

## Selenium WebDriver Interview Questions and Answers

Here, we will cover some common selenium interview questions. Selenium WebDriver is a very popular browser automation testing tool and is used by many companies.

When you apply for a job as an automation tester, you are most likely be expected to have experience working with Selenium WebDriver, so there will be questions at the interview to assess your knowledge of the selenium tool.

Previously, we covered some [Test Automation Interview Questions](https://www.testingexcellence.com/test-automation-interview-questions-and-answers/) **which are focused on the approach to test automation, here the main focus is on selenium tool and what questions you are likely to be asked at an interview.

These selenium interview questions are based on the **[selenium tutorials.](https://www.testingexcellence.com/selenium-webdriver-tutorials/)**

### What is Selenium?

Selenium is a browser-based functional test automation tool. It is basically a library which you can use in your program to test a web application. It is important to note that selenium is mainly used for browser automation. It is NOT used for unit testing or API testing.

Selenium Webdriver has many language bindings, which means you can write your tests in your favorite programming language and using the respective selenium bindings.

### In Selenium WebDriver, how do you select an item from a drop-down menu?

A: We can select an item from the drop-down menu by Value, by Index or by Visible Text.

Example:


    <select id="cars">
        <option value="vo">Volvo</option>
        <option value="sa">Saab</option>
        <option value="me">Mercedes</option>
        <option value="au">Audi</option>
    </select>

    WebElement cars = driver.findElement(By.id("cars"));

    Select car = new Select(cars)

    //select by value
    car.selectByValue("vo"); //this will select Volvo from drop-down

    //select by index
    car.selectByIndex(2); //this will select Saab

    //select by visible text
    car.selectByVisibleText("Audi") //this will select Audi

### What is the difference between `driver.get()` and `driver.navigate.to()`

You can use both methods to navigate to a URL.

Because navigating to a URL is very common, then `driver.get()` is a convenient way. However, it does the same function as the `driver.navigate().to(“url”)`

The `driver.navigate()` also has other functions, such as

`driver.navigate().back()`  
`driver.navigate().forward()`  
`driver.navigate().refresh()`

### **What is the difference between implicit wait and explicit wait in Selenium WebDriver?**

This question is asked in almost all selenium interview questions because many web applications use AJAX.

Selenium Webdriver introduces the concept of waits for AJAX-based applications. There are two waiting methods, implicit wait, and explicit wait

Implicit wait:

When an implicit wait is implemented in tests, if WebDriver cannot find an element in the Document Object Model (DOM), it will wait for a defined amount of time for the element to appear in the DOM. In other terms, an implicit wait polls the DOM for a certain amount of time when trying to find an element or elements if they are not immediately available.

Implicit waits can slow down your tests because once set, the implicit wait is set for the life of the WebDriver object’s instance. This means that when an application responds normally, it will still wait for each element to appear in the DOM which increases the overall execution time.

Another downside is if for example you set the waiting limit to be 5 seconds and the elements appears in the DOM in 6 seconds, your tests will fail because you told it to wait a maximum of 5 seconds.

An example of an implicit wait is:

    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

Explicit wait:

Explicit waits are better than implicit wait. Unlike an implicit wait, you can write custom code or conditions for a wait before proceeding further in the code.

An explicit wait can be used where synchronization is needed, for example, the page is loaded but we are still waiting for a call to complete and an element to appear.

Selenium WebDriver provides WebDriverWait and ExpectedCondition classes for implementing an explicit wait. The ExpectedCondition class provides a set of predefined conditions to wait before proceeding further in the code.

An example of an explicit wait is:

    WebDriverWait wait = new WebDriverWait(driver, 10);

    wait.until(ExpectedConditions.titleContains("selenium"));

To summarize:

Implicit wait time is applied to all elements in your script and Explicit wait time is applied only for a particular specified element.

### How would you count the number of elements on a page?

This is a common selenium interview question because in many cases you want to click on an item from a list. So it is important to know how to count the elements and select the correct one from the list.

We first need to locate the node element where the items are listed. For example, in the HTML code below:

    <ul id="movies">
        <li>movie title 1</li>
        <li>movie title 2</li>
        .
        .
        .
        <li>movie title 50</li>
    </ul>

The root element can be located using

    List<WebElement> movies = driver.findElements(By.cssSelector(ul#movies li));

Then we can use the `.size()` to get the number of `<li>` elements

    int numberOfMovies = movies.size();

### How can you check if a checkbox or a radio button is selected?

We can use the `.isSelected()` method, e.g.

    driver.FindElement(By.id("id_of_checkbox")).isSelected();

### Is there a way to do drag and drop in Selenium WebDriver?

Yes, we can use the following code to do drag and drop

    Actions action = new Actions(driver);
    WebElement start = driver.findElement(By.cssSelector(“div.source”));
    WebElement end = driver.findElement(By.cssSelector(“div.target”));
    action.dragAndDrop(start,end).perform();

### How would you check if an element is visible on the page?

We can use `isDisplayed()` method. The return type of the method is boolean. So if it returns true then the element is visible otherwise it is not.

    driver.findElement(By.id(“id_of_element”)).isDisplayed();

### How to check if a button is enabled page?

We can Use `isEnabled()` method. The return type of the method is boolean. So if it returns true then the button is enabled else not enabled.

    driver.findElement(By.id(“id_of_element”)).isEnabled();

Now that you have gone through these selenium interview questions, it is time to take a short **[selenium WebDriver quiz](https://www.testingexcellence.com/istqb-quiz/selenium-webdriver-quiz/)**.