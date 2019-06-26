---
layout: post
title: "Performance Testing Terminologies"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

Below are a list of common performance testing terminologies:

### Baselines

Creating a _baseline_ is the process of running a set of tests to capture performance metric data for the purpose of evaluating the effectiveness of subsequent performance-improving changes to the system or application.

### Benchmarking

_Benchmarking_ is the process of comparing your system’s performance against a baseline that you have created internally or against an industry standard endorsed by some other organization.

### Capacity Test

The _capacity_ of a system is the total workload it can handle without violating predetermined key performance acceptance criteria.

A _capacity test_ complements load testing by determining your server’s ultimate failure point, whereas load testing monitors results at various levels of load and traffic patterns.

You perform capacity testing in conjunction with capacity planning, which you use to plan for future growth, such as an increased user base or increased volume of data. For example, to accommodate future loads, you need to know how many additional resources (such as processor capacity, memory usage, disk capacity, or network bandwidth) are necessary to support future usage levels.

Capacity testing helps you to identify a scaling strategy in order to determine whether you should scale up or scale out.

### Endurance Test

An _endurance test_ is a type of performance test focused on determining or validating performance characteristics of the product under test when subjected to workload models and load volumes anticipated during production operations over an extended period of time. Endurance testing is a subset of load testing.

### Investigation

_Investigation_ is an activity based on collecting information related to the speed, scalability, and/or stability characteristics of the product under test that may have value in determining or improving product quality. Investigation is frequently employed to prove or disprove hypotheses regarding the root cause of one or more observed performance issues.

### Latency

_Latency_ is a measure of responsiveness that represents the time it takes to complete the execution of a request. Latency may also represent the sum of several latencies or subtasks.

### Metrics

_Metrics_ are measurements obtained by running performance tests as expressed on a commonly understood scale. Some metrics commonly obtained through performance tests include processor utilization over time and memory usage by load.

### Performance Test

_Performance_ refers to information regarding your application’s response times, throughput, and resource utilization levels.

A _performance test_ is a technical investigation done to determine or validate the speed, scalability, and/or stability characteristics of the product under test. Performance testing is the superset containing all other subcategories of performance testing described in this chapter.

### Performance Thresholds

_Performance thresholds_ are the maximum acceptable values for the metrics identified for your project, usually specified in terms of response time, throughput (transactions per second), and resource-utilization levels. Resource-utilization levels include the amount of processor capacity, memory, disk I/O, and network I/O that your application consumes. Performance thresholds typically equate to requirements.

### Response Time

_Response time_ is a measure of how responsive an application or subsystem is to a client request.

### Saturation

_Saturation_ refers to the point at which a resource has reached full utilization.

### Scalability Testing

_Scalability_ refers to an application’s ability to handle additional workload, without adversely affecting performance, by adding resources such as processor, memory, and storage capacity.

### Scenarios

In the context of performance testing, a _scenario_ is a sequence of steps in your application. A scenario can represent a use case or a business function such as searching a product catalog, adding an item to a shopping cart, or placing an order.

### Smoke Test

A _smoke test_ is the initial run of a performance test to see if your application can perform its operations under a normal load.

### Spike Test

A _spike test_ is a type of performance test focused on determining or validating performance characteristics of the product under test when subjected to workload models and load volumes that repeatedly increase beyond anticipated production operations for short periods of time. Spike testing is a subset of stress testing.

### Stability

In the context of performance testing, _stability_ refers to the overall reliability, robustness, functional and data integrity, availability, and/or consistency of responsiveness for your system under a variety conditions.

### Stress Test

A _stress test_ is a type of performance test designed to evaluate an application’s behavior when it is pushed beyond normal or peak load conditions. The goal of stress testing is to reveal application bugs that surface only under high load conditions. These bugs can include such things as synchronization issues, race conditions, and memory leaks.

Stress testing enables you to identify your application’s weak points, and shows how the application behaves under extreme load conditions.

### Throughput

_Throughput_ is the number of units of work that can be handled per unit of time; for instance, requests per second, calls per day, hits per second, reports per year, etc.

### Workload

Workload is the stimulus applied to a system, application, or component to simulate a usage pattern, in regard to concurrency and/or data inputs. The workload includes the total number of users, concurrent active users, data volumes, and transaction volumes, along with the transaction mix. For performance modeling, you associate a workload with an individual scenario.

What is the difference between **Performance Testing**, **Load Testing** and **Stress Testing?**

Performance, load, and stress tests are subcategories of performance testing, each intended for a different purpose.

*   **Performance testing.** This type of testing determines or validates the speed, scalability, and/or stability characteristics of the system or application under test. Performance is concerned with achieving response times, throughput, and resource-utilization levels that meet the performance objectives for the project or product. In this guide, performance testing represents the superset of all of the other subcategories of performance-related testing.

*   **Load testing.** This subcategory of performance testing is focused on determining or validating performance characteristics of the system or application under test when subjected to workloads and load volumes anticipated during production operations.

*   **Stress testing.** This subcategory of performance testing is focused on determining or validating performance characteristics of the system or application under test when subjected to conditions beyond those anticipated during production operations. Stress tests may also include tests focused on determining or validating performance characteristics of the system or application under test when subjected to other stressful conditions, such as limited memory, insufficient disk space, or server failure. These tests are designed to determine under what conditions an application will fail, how it will fail, and what indicators can be monitored to warn of an impending failure.