---
layout: post
title: "How to Set Multiple Headers in HTTP Request With Karate"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

How to set HTTP headers in Karate?

Karate is an API testing tool with a very comprehensive and easy to understand DSL.

In this post, we show how to set multiple headers in the header part of a request.

Examples include User-Agent, Content-Type, Accept-Encoding, Connection, etc.

**Related:**

*   **[Automated testing of emails with Karate](https://www.testingexcellence.com/automated-api-testing-emails-karate/)**
*   **[Automate your API testing with Karate](https://www.testingexcellence.com/automated-api-testing-made-easy-karate/)**
*   **[What are request headers?](https://www.testingexcellence.com/http-basics/)**

There are a number of ways you can set request headers in Karate:

### **Using header**

You can use the `header` keyword multiple times in the request

    Given header Content-Type = 'text/xml;charset=ISO-8859-1'
        And header Accept-Encoding = 'gzip,deflate'
        And header Connection = 'Keep-Alive'
        And header Expect = '100-continue'
        And header User-Agent = 'Mozilla/4.0(compatible;IE;GACv7\. 1\. 5192\. 22378)'
        And header Host = 'localhost'

        When url 'http://www.example.com'
        And request { some: 'data' }
        When method post
        Then status 200

### **Using headers**

You can also define multiple headers all in a variable and then use it in the `headers`  keyword to send all the request headers

    * def req_headers = {Content-Type: 'text/xml;charset=ISO-8859-1', Connection: 'Keep-Alive', User-Agent: 'Mozilla/4.0(compatible;IE;GACv7\. 1\. 5192\. 22378)'}

    Given headers req_headers
        And url 'http://www.example.com'
        And request { some: 'data' }
        When method post
        Then status 200

### **Using configure headers**

Another way of setting the request headers is to use `configure headers`

    * configure headers = {Content-Type: 'text/xml;charset=ISO-8859-1', Connection: 'Keep-Alive', User-Agent: 'Mozilla/4.0(compatible;IE;GACv7\. 1\. 5192\. 22378)'}
        Given url 'http://www.example.com'
        And request { some: 'data' }
        When method post
        Then status 200

https://www.testingexcellence.com/karate-api-testing-tool-cheat-sheet/

Learn more about [karate automated API testing tool](https://github.com/intuit/karate).