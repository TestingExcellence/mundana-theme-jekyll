---
layout: post
title:  "How to Parse JSON in Java"
author: Amir
categories: [ java ]
tags: [ json ]
image: assets/images/parse-json-java.jpg
---

JSON stands for JavaScript Object Notation, and it is based on a subset of JavaScript. As a data-exchange format, it is widely used in web programming. Here we show how to parse JSON in Java using the [`org.json`](https://github.com/stleary/JSON-java) library.

A JSON object is an unordered set of key/value pairs. A JSON array is an ordered collection of values. The values themselves could be objects or arrays.

We will be parsing this JSON as an example to retrieve values for `pageName`, `pagePic` and `post_id`

    {
       "pageInfo": {
             "pageName": "Homepage",
             "logo": "https://www.example.com/logo.jpg"
        },
        "posts": [
             {
                  "post_id": "0123456789",
                  "actor_id": "1001",
                  "author_name": "Jane Doe",
                  "post_title": "How to parse JSON in Java",
                  "comments": [],
                  "time_of_post": "1234567890"
             }
        ]
    }

## Parse JSON Using org.json

To use org.json to parse JSON in Java, you need to add the library as a dependency. This can be fetched from `http://mvnrepository.com/artifact/org.json/json`

```java
import org.json.JSONArray;
import org.json.JSONObject;

public class ParseJSON {
    static String json = "...";
    public static void main(String[] args) {
        JSONObject obj = new JSONObject(json);
        String pageName = obj.getJSONObject("pageInfo").getString("pageName");

        System.out.println(pageName);

        JSONArray arr = obj.getJSONArray("posts");
        for (int i = 0; i < arr.length(); i++) {
            String post_id = arr.getJSONObject(i).getString("post_id");
            System.out.println(post_id);
        }
    }
}
```

N.B. the `...` needs to be replaced by the JSON string. This has been omitted from the code above for clarity.

First, we need to convert the JSON string into a JSON Object, using JSONObject class.

Also, note that "pageInfo" is a JSON Object, so we use the getJSONObject method.

Likewise, "posts" is a JSON Array, so we need to use the getJSONArray method.

## Parse JSON Using Gson

In order to use Gson to parse JSON in Java, you need to add the library as a dependency. You can get the latest version from Maven repository: `http://mvnrepository.com/artifact/com.google.code.gson/gson`

The below example shows how to Parse the above JSON with Gson.

```java
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class ParseJSON {
    static String json = "...";
    public static void main(String[] args) {
        JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();

        String pageName = jsonObject.getAsJsonObject("pageInfo").get("pageName").getAsString();
        System.out.println(pageName);

        JsonArray arr = jsonObject.getAsJsonArray("posts");
        for (int i = 0; i < arr.size(); i++) {
            String post_id = arr.get(i).getAsJsonObject().get("post_id").getAsString();
            System.out.println(post_id);
        }
    }
}
```

Like the previous example, the `...` needs to be replaced by the JSON string.

## Parse JSON Using JsonPATH

The above two examples require a full deserialization of the JSON into a Java object before accessing the value in the property of interest. Another alternative, which does not go this route is to use [JsonPATH](http://goessner.net/articles/JsonPath/) which is like XPath for JSON and allows traversing of JSON objects.

Like before, you need to add JsonPATH as a dependency, which can be fetched from maven repository

`https://mvnrepository.com/artifact/com.jayway.jsonpath/json-path`

For example, to parse the above JSON we can use:

```java
import com.jayway.jsonpath.JsonPath;

public class ParseJSON {
    static String json = "...";
    public static void main(String[] args) {
        String pageName = JsonPath.read(json, "$.pageInfo.pageName");
        System.out.println(pageName);

        Integer posts = JsonPath.read(json, "$.posts.length()");

        for(int i=0; i < posts; i++) {
            String post_id = JsonPath.read(json, "$.posts[" + i + "].post_id");
            System.out.println(post_id);
        }
    }
}
```

**Related:**

*   [Purpose of overriding toString() method in Java](https://www.testingexcellence.com/overriding-tostring-java-class)
*   [Different ways to iterate through a map in Java](https://www.testingexcellence.com/4-different-ways-iterate-map-java/)
*   [How to get the current working directory in Java](https://www.testingexcellence.com/get-current-working-directory-java/)