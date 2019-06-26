---
layout: post
title: "Testing Microservices - A Beginner's Guide"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

Testing Microservices are becoming more and more important as many of the new applications are being built using Microservices architecture.

Before we are able to see how to test microservices, we first need to understand what they are.

## What Are Microservices?

Microservice is defined as an architectural style, an approach to developing a single application as a suite of services. Each service is defined by its characteristics some of which are:

*   Running in its process.
*   Communicating with a lightweight mechanism often with an HTTP resource API.
*   Independently deployable by a fully automated machinery.
*   Using different programming languages/technologies/DB.
*   Is using different data storage technologies.

https://www.testingexcellence.com/http-basics/

The microservice architectural style involves developing single applications that can work together as a suite of small services, each running in its individual process and communicating with lightweight mechanisms such as an HTTP resource API. These services require bare minimum centralized management, use different data storage technologies, and can be written in different programming languages. These services, built around business capabilities, can also be deployed independently by machinery that supports fully automated deployment.

Microservices characteristics:

*   Organized around business capability,
*   Automated deployment,
*   Intelligence in the endpoints rather than in service bus,
*   Decentralized control of languages and data.

## How Are Microservices Different to SOA

*   [Service-oriented architecture](https://www.google.com/url?cad=rja&cd=2&ei=lK2mVebMONbVoATZu5-QAQ&esrc=s&q=&rct=j&sa=t&sig2=_KOGOF7b1rSUs2z2tp-X4Q&source=web&uact=8&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FService-oriented_architecture&usg=AFQjCNFsplk-0iL7kL9ZH1GmrTtkoxYJdw&ved=0CCIQFjABahUKEwjm5pbx6N3GAhXWKogKHdndBxI)(SOA): an architectural pattern in computer software design in which application components provide services to other components via a communications protocol, typically over a network.
*   [Microservices](https://www.google.com/url?cad=rja&cd=2&ei=4q2mVbPNB8PooATrzrbQAw&esrc=s&q=&rct=j&sa=t&sig2=lLIdau8wZ2vfvtjI00vczA&source=web&uact=8&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMicroservices&usg=AFQjCNHQptqemmuXl_mDHLJK2pBkbvozKQ&ved=0CCEQFjABahUKEwizxv6V6d3GAhVDNIgKHWunDTo):  a software architecture style in which complex applications are composed of small, independent processes communicating with each other using language-agnostic APIs

**Example:**

If Uber were built with an SOA, their services might be:

*   GetPaymentsAndDriverInformationAndMappingDataAPI
*   AuthenticateUsersAndDriversAPI

If Uber were built with microservices, their APIs might be more like:

*   SubmitPaymentsService
*   GetDriverInfoService
*   GetMappingDataService
*   AuthenticateUserService
*   AuthenticateDriverService

More APIs, smaller sets of responsibilities.

https://www.testingexcellence.com/automated-api-testing-made-easy-karate/

## How to test Microservices

### **Unit Tests**

Unit tests exercise the small pieces of software such as a function in the application to determine whether they produce the desired output given a set of known inputs.

_It is worth noting that unit testing alone doesn't provide guarantees about the behavior of the system. We need other types of testing for microservices._

### **Component Tests**

Once we have carried out unit testing of all functions within a microservice, then we need to test the microservice itself in isolation.

Typically, an application would be composed of a number of microservices, so in order to test in isolation, we need to mock the other microservices.

Component tests will also test the interaction of microservice with its dependencies such as a database, all as one unit.

### **Integration Tests**

After we have verified the functionality of each microservice, then we need to test the inter-service communications. _An integration test verifies the communication paths and interactions between components to detect interface defects_

Service calls must be made with integration to external services, which should include error and success cases, hence, integration testing validates that the system is working together seamlessly and that the dependencies between the services are present as expected.

### **Contract Tests**

Contract tests verify interactions at the boundary of an external service asserting that it meets the contract expected by a consuming service.

This type of testing should treat each service as a black box and all the services must be called independently and their responses must be verified.

A “contract” is how a service call (where a specific result or output is expected for certain inputs) is referred to by the consumer contract testing. Every consumer must receive the same results from a service over time, even if the service changes. There should be the flexibility to add more functionality as required to the Responses later on. However, these additions must not break the service functionality.

### **End-To-End Tests**

The role of end-to-end tests is to make sure everything ties together and there are no high-level disagreements between the microservices.

End-to-end tests verify that a system meets external requirements and achieves its goals, testing the entire system, from end to end.

The tests also verify that the entire process and user flows work correctly, including all service and DB integration. Thorough testing of operations that affect multiple services ensures that the system works together as a whole and satisfies all requirements.

https://www.testingexcellence.com/automated-ui-testing-worth/

## Example of Testing Microservices

Let's take a microservice **A** that depends on two other services **B** & **C**. You need to establish an isolated environment where the state of **A**, **B** and **C** is well defined and can be repeatedly set-up. For example, state/storage of **B** and **C** should be pre-initialised. After that, you just run a set of tests testing APIs of microservice **A** using usual REST/WebService set of test tools, e.g. <span class="qlink_container">[SOAPUI](https://www.soapui.org/)</span> or <span class="qlink_container">[Chakram](http://dareid.github.io/chakram/)</span> or simple xUnit alternative for your programming language.

Mock any peer services the API depends on using restito. Other alternatives include rest-driver, WireMock, and Mochito.

The obvious challenge is the mocking/faking 3rd party APIs when doing integration testing of microservices. You can use any of the mocking tools mentioned above, just treat the mocks as part of our test fixture and make sure you are up to date with new API releases.
