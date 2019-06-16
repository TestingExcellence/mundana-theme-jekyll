---
layout: post
title:  "How to Submit Form Data With REST-assured Post Request"
author: Amir
categories: [ technical testing ]
tags: [ rest-assured, api testing ]
image: assets/images/rest-assured-post-request.png
---

How to send a POST request with REST-assured. HTML Forms use POST request to submit form data and in this tutorial, we use REST-assured to submit a form.

A POST request has four elements:

**URL**: This is the location of the resource we submit data to, e.g. `www.example.com/login`

**VERB**: when submitting data, we use the POST request.

**HEADERS**: these are request headers, such as Accept or Content-Type.

**BODY**: body contains the data which we submit as a post request. For example, when submitting a form, form data are sent in the body of the request.

## REST-assured POST request

The sample code below shows how to submit form data as a POST request with REST-assured, [version 3.2.0](https://mvnrepository.com/artifact/io.rest-assured/rest-assured/3.2.0).

```xml
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>3.2.0</version>
    <scope>test</scope>
</dependency>
```

```java
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.Test;

import static io.restassured.RestAssured.given;

public class restAssuredPostRequest {

    @Test
    public void submitForm() {
        RestAssured.baseURI = "https://www.example.com";
        given().urlEncodingEnabled(true)
            .param("username", "user@site.com")
            .param("password", "Pas54321")
            .header("Accept", ContentType.JSON.getAcceptHeader())
            .post("/login")
            .then().statusCode(200);
    }
}
```

## REST-assured POST JSON Payload

Other than submitting Form data, you can also use REST-assured POST request to send JSON payload to some resource. Here is an example:

```java

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

public class PostJsonPayload {

    private static String payload = "{\n" +
        "  \"description\": \"Some Description\",\n" +
        "  \"id\": \"Some id\",\n" +
        "  \"name\": \"Some name\"\n" +
        "}";

    public static Response postJsonPayload() {

        return
            given()
            .contentType(ContentType.JSON)
            .body(payload)
            .post("/some/resource")
            .then()
            .statusCode(200)
            .extract()
            .response();
    }
}
```

**Further Reading:**

*   [How to Parse JSON Response with REST-assured](https://www.testingexcellence.com/parse-json-response-rest-assured/)
*   [HTTP Basics for Software Testers](https://www.testingexcellence.com/http-basics/)