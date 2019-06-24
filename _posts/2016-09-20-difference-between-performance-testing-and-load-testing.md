---
layout: post
title: "Difference Between Performance Testing and Load Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

![performance-load-stress-testing](https://www.testingexcellence.com/wp-content/uploads/2016/01/Website-Performance-Testing-e1452938279979.jpg)

What is the difference between performance testing, load testing, and stress testing?

### **Performance Testing**

Performance Testing measures the response time of an application with an expected number of users. The aim of this is to get a baseline and an indication of how an application behaves under normal conditions. Does it meet the required response time?

### **Load Testing**

Load Testing is measuring the response time when the application is subjected to more than the usual number of users.  
The response time will increase, i.e. the application will be slower under heavy load, but the aim of load testing is to see whether the application can sustain the increased load on the server or will it crash and kill the servers.

Load testing is usually started as low numbers and gradually increased over a given period of time until it reaches the desired load on the system and then it ramps down.

### **Stress Testing or Soak Testing**

Stress Testing or Soak Testing is like load testing but we resume the load on the server for a long period, say 1 hour.

The aim of stress testing is to ensure that under a constant load for a long duration, the servers don’t crash, albeit responding slowly.  
Stress testing starts of the same as load testing, e.g. gradually increasing the load on the servers, but once this load is reached, we resume the same load on the server for a given duration and then measure the response times.

### **Break Point**

If we keep increasing the load on the server, there comes a point when the server cannot handle any more requests and it crashes, most probably starting to give an HTTP error 500 response code.

Once this happens, we get an indication of the capacity of the application, i.e. how many users can the application handle.