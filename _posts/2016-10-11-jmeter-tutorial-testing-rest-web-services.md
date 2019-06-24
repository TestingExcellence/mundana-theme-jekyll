---
layout: post
title: "JMeter Tutorial: Testing REST Web Services"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In this Jmeter Tutorial, we look at how we can test a REST API or Web Service using Jmeter tool.

We can use Jmeter to send Json request to a RESTful Web Service and also parse the Json response.

### Test Plan for REST Web Service

*   **Thread Group**
*   **HTTP Request**

Like with any Jmeter tests, we first need to create a Thread Group along with a HTTP Request Sampler.

![testing-rest-jmeter-1](https://www.testingexcellence.com/wp-content/uploads/2015/06/testing-rest-jmeter-1-e1435670874538.png)

If you now run the test, you may get an error with a response code of 415 and a response message "Unsupported Media Type".

This is because the REST API might expects "Content-Type" and "Access" parameters in the header request.

![testing-rest-jmeter-7](https://www.testingexcellence.com/wp-content/uploads/2015/06/testing-rest-jmeter-7-e1435675938326.png)

*   **HTTP Header Manager**

Next we need to add a HTTP Header Manager to send parameters in the header of the request. We need to send "Content-Type" and "Access" variables as request headers.

![testing-rest-jmeter-3](https://www.testingexcellence.com/wp-content/uploads/2015/06/testing-rest-jmeter-3-e1435673656227.png)

![testing-rest-jmeter-4](https://www.testingexcellence.com/wp-content/uploads/2015/06/testing-rest-jmeter-4-e1435673821450.png)

Most probably, you need to register your application via an API key. This needs to be sent as a POST method to the REST API in the **body of the request**.

*   **POST data in the Body of Request**

![testing-rest-jmeter-8](https://www.testingexcellence.com/wp-content/uploads/2015/06/testing-rest-jmeter-8-e1435676316351.png)

And the response in Json format

![testing-rest-jmeter-9](https://www.testingexcellence.com/wp-content/uploads/2015/06/testing-rest-jmeter-9-e1435676394650.png)

Next is to extract or parse the Json Response.

*   **Extract Json Response**

Jmeter has a handy **[plugin called JsonPath](https://jmeter-plugins.org/wiki/JSONPathExtractor/)** which can be used to parse Json responses. This plugin is in the **[Extras with Libs Set](http://jmeter-plugins.org/wiki/ExtrasWithLibsSet/).**

Once you have installed the above plugin, we can use the Json Path Extractor as a post processor

![testing-json-path-extractor](https://www.testingexcellence.com/wp-content/uploads/2015/06/testing-json-path-extractor-e1435676822457.png)

Once we have added Json Path Extractor to our test plan, we can use the dot notation to reference the Json elements.

In this example, we want to extract the value of the "client_id":

![json-path-extractor](https://www.testingexcellence.com/wp-content/uploads/2015/06/json-path-extractor-e1435677117569.png)

The value of the "client_id" will be saved in the variable named "client_id_value". You can give any meaningful name you wish.

Once the value is saved in the variable name, we can recall the value by using that variable name in the format ${client_id_value}

![jmeter-rest-testing](https://www.testingexcellence.com/wp-content/uploads/2015/06/jmeter-rest-testing-e1435677599237.png)