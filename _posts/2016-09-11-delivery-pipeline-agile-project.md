---
layout: post
title: "Delivery Pipeline For Agile Projects"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

### What is a Delivery Pipeline?

A delivery pipeline which is also known as a deployment or build pipeline, is how a story from a product backlog makes its way through to development, testing and deployment to production.

In this post, I will provide a sample Delivery Pipeline for an agile project with details for each step.

At the bottom of the post, you can download the full delivery pipeline diagram.

### Delivery Pipeline Step 1

### Dev Local

![delivery_pipeline_agile_1](https://www.testingexcellence.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-17-at-22.46.46-e1455749394517.png)

Developer writes code and fixes bugs. The coding activities can be reviewed by a peer developer which is called peer reviews or done by two developers working together also known as Pair Programming.

Developer also writes unit tests and integration tests or API tests. In case of "front-end" developers, there will be Javascript unit tests or JSUnit tests. Any new code which contains logic should be unit tested.

The above testing activities can also be supported by testers where they can help with reviewing the test cases in particular integration and API tests.

Because unit tests are very quick to run and that we want to only commit good code to the repository, unit tests and JSUnit tests are run on the developer's local environment.

Once the unit tests have been reviewed and passed on the developer's machine, the developer commits the code to the repository.

### QA Local

![delivery_pipeline_agile_qa](https://www.testingexcellence.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-12.24.44-e1455884761388.png "delivery_pipeline_agile_qa")

As developers are building new features, QA or Testers work in parallel to write the automated acceptance tests for the new features. Here, dev can also participate and help the non-technical testers to write automated checks.

### Delivery Pipeline Step 2

### CI Server

![delivery_pipeline_jenkins](https://www.testingexcellence.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-12.39.54-e1455885714650.png "delivery_pipeline_jenkins")

Once the developers commit their code to the repository, (remember there are multiple developers working on one or more project) the commit will trigger an automated build where the project is built and artifacts are created.

First unit tests are run. Once all unit tests are passed, then integration tests are run.

It is often the case that integration or API tests require custom data from different sources, such as databases and/or 3rd party APIs. For this reason, it is best to mock any external connections so that we could be free from any downtime or unavailable services and fully focus on the tests.

### Delivery Pipeline Step 3

### Integration

![delivery_pipeline_integration](https://www.testingexcellence.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-12.42.34-e1455885829932.png)

Once all the unit tests and integration / API tests have passed in Jenkins build, and **automated** deployment job is kicked off to deploy the latest artifacts into an integration environment.

In the integration environment, the new code is integrated with existing production code, hence the name integration. When multiple teams exist, it is important that each team have their own integration environment so that the execution of the automated checks are not affected by other teams' deployments.

Once the deployment job is complete and the application is deployed, first an automated smoke test pack is run to make sure the application is up and running and can be accessed, then if everything is OK, we run a full suite of automated acceptance tests for the new functionality and existing functionality, i.e. new and regression.

In integration environment, the application points to real data and services and we will run a mixture of API and UI automated tests against the application.

### Delivery Pipeline Step 4

### QA

![delivery_pipeline_agile_5](https://www.testingexcellence.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-11.27.40-e1455881441786.png "delivery_pipeline_agile_5")

The next step in this delivery pipeline is a manual deployment to "QA" environment.

As mentioned before, when there are multiple agile teams, each will have their own integration environment. So when we want to deploy different features from multiple teams into production, then we will do a manual deploy to the QA environment to test the different features together.

Similar to the integration environment, the QA environment also point so production data and has the latest stable production code plus the new features.

Once the manual deployment to QA environment is complete, the automated smoke tests are run to make sure application is up and running and can be accessed.

Also on the QA environment, we would run manual/exploratory tests, and the product owners, BAs and designers can run User Acceptance Tests and make sure the new features are fit for purpose.

**The QA environment will only contain the tested code that we're about to deploy to production.**

### Delivery Pipeline Step 5

### Stage

![delivery_pipeline_agile_6](https://www.testingexcellence.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-12.17.44-e1455884336580.png "delivery_pipeline_agile_6")

Once everyone is happy with their testing efforts of new features and regression tests, we could deploy straight to production. However, it is best to have a "rehearsal" deployment to production by deploying to a "production like" environment which in this case is called Stage.

Stage environment is our last chance of checking things are in good order before finally pushing to live.

Stage is not and should not be used for heavy testing and checking because we have already gone through rigorous testing in previous steps, therefore, a quick sanity check and the automated some test will suffice.

### Delivery Pipeline Step 6

### Going Live

![delivery_pipeline_agile_7](https://www.testingexcellence.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-12.21.45-e1455884576384.png "delivery_pipeline_agile_7")

The final step in the delivery pipeline is "push to production" and we would just execute the automated smoke regression pack.

When we put all the pieces of the above delivery pipeline steps together, we will end up with the following delivery pipeline diagram:

[caption id="attachment_11960" align="aligncenter" width="700"][![delivery_pipeline_agile](https://www.testingexcellence.com/wp-content/uploads/2016/02/delivery_pipeline_agile-e1455885415696.png "delivery_pipeline_agile")](https://www.testingexcellence.com/wp-content/uploads/2016/02/delivery_pipeline_agile-e1455885415696.png) delivery_pipeline_agile[/caption]

**[Download delivery pipeline diagram](https://www.testingexcellence.com/wp-content/uploads/2016/02/delivery_pipeline_agile-e1455885415696.png)**