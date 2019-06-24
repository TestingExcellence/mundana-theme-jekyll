---
layout: post
title: "What is a Web Service?"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

A Web Service is a program that can be accessed by other programs over the web (http). For example, let's assume that you have a function that prints a text in HTML format. The application's target is the web browser which renders the output and a human being can easily read the text on the page.

On the other hand, a web service's target audience is other programs or other web services which consume the data served by the web service. The output is normally in a standard language which can be understood by other programs. Take the above example, if the web service outputs the text in say XML format, then other web services which can read or understand XML, can use the output.

The main advantage of a Web Service is that applications can be written in any language, but they can communicate and exchange data with each other through a Web Service. Software applications written in various programming languages and running on various platforms can use web services to exchange data over the internet (HTTP). This interoperability (e.g., between Java and Python, or Windows and Linux applications) is due to the use of open standards (XML, SOAP, HTTP).

*   SOAP (Simple Object Access Protocol)
*   UDDI (Universal Description, Discovery and Integration)
*   WSDL (Web Services Description Language)

### How many different kinds of Web Services are there?

Primarily, there are two types of Web Services, Simple Object Access Protocol (SOAP) and Representational State Transfer (REST).

A SOAP Web Service, accepts a request in XML format and generates an output in XML format.

A REST Web Service is more versatile and can accept XML as well as JSON as request and generates an output in XML as well as JSON, or even HTML