---
layout: post
title:  "Gatling - How to Save Response Body"
author: Amir
categories: [ performance ]
tags: [ gatling ]
image: assets/images/gatling-save-response.png
---

How to save response body in Gatling?

When we do API performance testing, we may need to build a chain of requests. For example, we make a call to an API, save the response and pass the response to another API call.

This is called request-response chaining and is a common activity when testing APIs.

Gatling provides a way of saving the whole response or part of a response.

The examples below illustrate how to save response data in Gatling.

## Gatling Save Response Body

### Save the Whole Response Body

```scala
val authRequest = exec(http("Auth Request")
    .post(base_url + "/login/auth")
    .body(ElFileBody("payload.json"))
    .check(bodyString.saveAs("Auth_Response"))
    .check(status is 200))
```

We save the full response of the above API call in a variable called `Auth_Response`.

Then we can use that variable, which contains the response, to pass as a body or payload to another request, such as:

```scala
val validateRequest = exec(http("Validate Request")
    .post(base_url + "/login/validate")
    .body(StringBody("${Auth_Response}"))
    .check(bodyString.saveAs("Validate_Response"))
    .check(status is 200)
)
```

### Extract Element From Response Body and Save

In Gatling, we can also parse a response, for example with JsonPath, extract a value and save it as a variable. Like above, we can then pass that variable in the next API call.

```scala
val loginRequest: HttpRequestBuilder = http("Login Request")
    .post(base_url + "/login")
    .header(ContentType, ApplicationJson)
    .header(Accept, ApplicationJson)
    .body(StringBody(""))
    .check(status is 200)
    .check(jsonPath("$.tokenId").saveAs("tokenId"))
```

In the above request, we parse the JSON Response and extract the value for the parameter `tokenId` and save its value as `tokenId`.

We can then reference the variable using `${tokenId}`

**Further Reading:**

*   [Create Gatling Maven Project From Scratch](https://www.testingexcellence.com/structure-gatling-maven-project-scratch/)
*   [How to Parameterize Gatling Variables](https://www.testingexcellence.com/parameterize-gatling-variables/)
*   [Send Random Post Request in Gatling](https://www.testingexcellence.com/gatling-random-post-request/)
*   [Soak Testing with Gatling](https://www.testingexcellence.com/soak-testing-gatling-example/)