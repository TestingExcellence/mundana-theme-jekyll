---
layout: post
title: "Jmeter Tutorial: How to Send a JSON File as Request in Body"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In this JMeter Tutorial, we explain how to send one or multiple JSON files in the body of the HTTP request.

When testing a RESTful API, we normally send a POST request to the REST API in JSON format. The request parameters in JSON format needs to be sent in the body of the HTTP request.

First, you will need a text file with the JSON request. We will use this file to send to our REST API in the body of the POST request.

Suppose, the file is located in /Users/testing-excellence/Perf/blog/json_request.txt

![jmeter-json-request-post](https://www.testingexcellence.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-30-at-13.47.16-e1451483336190.png)

Our JMeter script will look something like this:

![jmeter-post-request-json](https://www.testingexcellence.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-30-at-13.53.03-e1451483679864.png)

In other words, we need to select the Body Data in the HTTP Sampler and insert the following line of code

    ${__FileToString(/Users/testing-excellence/Perf/blog/${__eval(${json_file})}.txt,,)}

Obviously, the path will be different on your machine.

The above line takes the contents of the file named json_file.txt and sends the contents in the body of the request to the REST API.

As JMeter is mainly used for performance and load testing, we can load test our REST API by sending multiple JSON requests.

To do that we make use of the JMeter's CVS Data Set Config element.

In the CSV file, we have a column with the names of the JSON request files. This CSV file serves as a reference to the JSON files.

Suppose we have 10 JSON files, with filenames 100.txt, 101.txt, 103.txt....110.txt

![jmeter-post-json-request](https://www.testingexcellence.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-30-at-14.07.49-e1451484542580.png)

And the CSV file will look like:

![jmeter-csv-json-request](https://www.testingexcellence.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-30-at-14.09.30-e1451484659219.png)

Then in JMeter, we add the CSV Data Set Config element to our test plan

![json-csv-request-post-jmeter](https://www.testingexcellence.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-30-at-14.13.31-e1451484866110.png)

The variable is JSON_FILE which takes the values of 100, 101, 102, etc... from the CSV file.

Then we need to reference this variable in our <span class="lang:sh decode:true crayon-inline ">__FileToString()</span>  JMeter function, i.e.

![jmeter-json-file-csv-request](https://www.testingexcellence.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-30-at-14.17.17-e1451485112792.png)

When we execute this JMeter test, it will loop through the CVS, taking each file name and extract the contents of each file to send as a JSON in the body of the request.