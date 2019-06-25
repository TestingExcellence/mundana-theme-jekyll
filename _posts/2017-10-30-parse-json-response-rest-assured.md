---
layout: post
title: "How to Parse JSON Response with REST-assured"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

In this API Testing tutorial, we take a look at how to parse JSON response and extract information using the REST-assured library.

When testing an API, you typically make a request to a resource, (e.g. via a GET or POST request). The server comes back with a response and then you do some assertions on the response.

**Related:**

**[How to send a POST request with REST-assured](https://www.testingexcellence.com/rest-assured-post-request/)**

## How to Parse JSON Response

For this tutorial, I will be using [JSONPlaceholder](https://jsonplaceholder.typicode.com/) which is a fake online REST API for Testing and Prototyping. JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.

More specifically, I will be using the users endpoint [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

*   **[How to set multiple Headers in Karate](https://www.testingexcellence.com/jmeter-tutorial-how-to-send-a-json-file-as-request-in-body/)**
*   [**HTTP Basics for Software Testers**](https://www.testingexcellence.com/http-basics/)
*   **[How to encode and decode JSON Byte Array](https://www.testingexcellence.com/encode-decode-json-byte-array/)**

### **Request and Response**

When we make a GET request to the above resource, we get a JSON response which contains a list of users. This list is represented as a JSON Array. Each array has a structure like this:

    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }

Therefore, in the full response, there will be ten records in the array, each having the same JSON structure, but with different values.

Now, let's start by parsing and extracting some values from the JSON.

The first test would typically be to count the number of records in the array, so let's start with that.

    import io.restassured.RestAssured;
    import io.restassured.http.ContentType;
    import io.restassured.parsing.Parser;
    import io.restassured.response.Response;

    import java.util.List;

    import static io.restassured.RestAssured.given;

    public class RestTest {

        public static Response doGetRequest(String endpoint) {
            RestAssured.defaultParser = Parser.JSON;

            return
                    given().headers("Content-Type", ContentType.JSON, "Accept", ContentType.JSON).
                            when().get(endpoint).
                            then().contentType(ContentType.JSON).extract().response();
        }

        public static void main(String[] args) {
            Response response = doGetRequest("https://jsonplaceholder.typicode.com/users");

            List<String> jsonResponse = response.jsonPath().getList("$");

            System.out.println(jsonResponse.size());

        }
    }

The result of the above call would print <span class="lang:default decode:true crayon-inline ">10</span>. Note the `$` notation which means the root element.

### **Parsing JSON Arrays and Lists**

In the above example, if we wanted to get the username of all entries, we could use

    String usernames = response.jsonPath().getString("username");
    System.out.println(usernames);

This would print the array like:

    [Bret, Antonette, Samantha, Karianne, Kamren, Leopoldo_Corkery, Elwyn.Skiles, Maxime_Nienow, Delphine, Moriah.Stanton]

If we then want to get the username of the first entry we could use

    String usernames = response.jsonPath().getString("username[0]");

This would print the first username: Bret

Using a List we can use

    List<String> jsonResponse = response.jsonPath().getList("username");
    System.out.println(jsonResponse.get(0));

This would print the first username: Bret

### **Parsing JSON ArrayList and HashMap**

Looking at the above JSON structure, the company is actually a map. If we only had one record, we could use

    Response response = doGetRequest("https://jsonplaceholder.typicode.com/users/1");

            Map<String, String> company = response.jsonPath().getMap("company");
            System.out.println(company.get("name"));

which would print Romaguera-Crona

But if the response returns an array and we want to extract the first company name, we could use:

    Response response = doGetRequest("https://jsonplaceholder.typicode.com/users/");

            Map<String, String> company = response.jsonPath().getMap("company[0]");
            System.out.println(company.get("name"));

Alternatively, we could use:

    Response response = doGetRequest("https://jsonplaceholder.typicode.com/users/");

            List<Map<String, String>> companies = response.jsonPath().getList("company");
            System.out.println(companies.get(0).get("name"));

both of which will print Romaguera-Crona.