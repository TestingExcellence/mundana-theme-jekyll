---
layout: post
title: "HTTP Basics for Software Testers"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

If you are a technical tester or you are involved in testing APIs then you need to be familiar with the HTTP basics and terminologies. Without knowing the basics of HTTP, you cannot develop good API tests. In this article, we’ll examine some of the most common HTTP terminologies and their meanings for API testing.

## What is HTTP?

HTTP stands for Hypertext Transfer Protocol.

It is a communications protocol and is used to send and receive web pages and files over the internet.

HTTP works by using a user agent (e.g. a browser) to connect to a server. The server must be located using a URL or URI. This always contains `http://` at the start. It normally connects to port 80 on a computer.

## What is HTTPS?

HTTPS stands for Hypertext Transfer Protocol Secure. This is a more secure version of HTTP and starts with `https://` at the beginning of the URL. It encrypts all the information that is sent and received. This can stop malicious users such as hackers from stealing the information and is often used on payment websites. HTTPS uses port **443** for communication instead of port 80.

## What is an HTTP Request?

HTTP stands for Hypertext Transfer Protocol and is a way of sending messages from one computer to another computer over the internet.

An HTTP request is sent to a specific URL and consists of a VERB, a set of HTTP Headers and a Body or Payload.

An example HTTP request is:

    GET https://www.testingexcellence.com/ HTTP/1.1
    Accept-Encoding: gzip,deflate
    Content-Type: text/plain
    Host: testingexcellence.com
    User-Agent: Apache-HttpClient/4.5.4 (Java/1.8.0_144)
    Accept: text/html,application/xhtml+xml

### URL

URL is a Uniform Resource Locator and is the address we use to access websites and web applications. URLs occur most commonly to reference web pages (http), but are also used for file transfer (ftp), email (mailto), and other applications.

Most web browsers display the URL of a web page above the page in an address bar. A typical URL could have the form [https://www.testingexcellence.com/index.html](https://www.testingexcellence.com), which indicates a protocol `http`, a hostname [www.testingexcellence.com](https://www.testingexcellence.com/), and a file name `index.html`.

### Request Verbs

Request VERB specifies the type of request e.g. GET, POST, PUT, DELETE.

A Web Browser will usually make GET requests and POST requests, whereas when working with HTTP APIs the typical HTTP Verbs used are: GET, POST, PUT, DELETE.

**GET** request, as the name suggests, asks for a resource or to read information from the server e.g. clicking on a link. GET requests are visible in the browser’s address bar.

**POST** request, on the other hand, supply information to the server e.g. submitting a login or registration form. To create an entity, we would use POST requests. Also, POST requests are not visible in the browser’s address bar.

**PUT** request is used to update information on the server. For example, an existing user wishes to update his password, then a PUT request is used.

**DELETE** request deletes information on the server.

Both POST and PUT requests would usually have a request body. GET and DELETE would not.

### Request Headers

Request headers specify information such as the type of Browser, type of content in the message, and what type of response is accepted in return.

Example Request headers:

    Content-Type: text/plain
    User-Agent: Apache-HttpClient/4.5.4 (Java/1.8.0_144)

### Request Body / Payload

A Payload is the body of the HTTP request or response.

A request body can be plain text, HTML, XML, JSON, Javascript, or a set of key-value pairs as form-data.

When browsing the Web, the Browser usually receives an HTML payload. This is the web page that you see rendered in the Browser.

Typically when working with an HTTP API we will send and receive JSON or XML payloads.

Not all HTTP messages can have payloads: POST and PUT can have payloads, GET and DELETE can not.

## What is an HTTP Response?

When a request is sent to a server, the server returns a response. The response from the server tells you if your request was successful, or if there was a problem.

An HTTP response method is made up of three components: Response status code, response headers, response body.

Example response:

    HTTP/1.1 200 OK
    Content-Length: 859
    Content-Type: text/html; charset=utf-8
    Date: Fri, 23 Feb 2018 14:38:21 GMT
    Server: Werkzeug/0.14.1 Python/3.6.3

Line 1 is the status code and response message, lines 2-5 are response headers and the XML is the response body.

### Response Status Codes

*   **2xx** for Success, the most common one is 200 which means “OK”.
*   **3xx** for Redirection, the most common ones are 301 and 303 which mean “Permanent Redirect” and “Redirect for Undefined Reason”, respectively.
*   **4xx** for Application Error, the most common ones are 403 and 404 which mean “Forbidden” and “Not Found”, respectively.
*   **5xx** for Server Error, the most common one is 500 which means “Server Error”.

## What is an API?

An API is an Application Programming Interface. This is an interface to an application designed for other computer systems to use. As opposed to a Graphical User Interface (GUI) which is designed for humans to use.

Most modern APIs are HTTP based and are used to access Web Applications which are deployed to Servers accessible over the Internet.

## What is a Web Service?

Applications which are accessed via HTTP APIs are often called Web Services. In other words, a web service is a function that can be accessed by other programs over the web (HTTP).

**[Read more on basics of Web Services](https://www.testingexcellence.com/what-is-a-web-service/)**

## What is JSON?

JSON stands for JavaScript Object Notation and is a text representation that is also valid JavaScript code.

    {
       "employers":{
          "employee":[
             {
                "id":1,
                "name":"Dan Brown",
                "position":"Director",
                "status":"active",
             }
          ]
       }
    }

JSON can be thought of as a hierarchical set of key/value pairs where the value can be:

*   Object - delimited by { and }
*   Array - delimited by [ and ]
*   String - delimited by " and "
*   Integer

An array is a list of objects or key/value pairs. The keys are String values e.g. “employee”, “id”, “name”, etc.

**Further Reading:**

*   **[HTTP Status Codes With Explanations](https://www.testingexcellence.com/http-status-codes/)**
*   **[How to get Response Status Code with Selenium WebDriver](https://www.testingexcellence.com/how-to-get-response-status-code-with-selenium-webdriver/)**
*   **[Difference Between PUT and PATCH Requests](https://www.testingexcellence.com/difference-put-patch-requests/)**