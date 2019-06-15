---
layout: post
title:  "How to Convert Java Map to JSON"
author: Amir
categories: [ java ]
tags: [ json ]
image: assets/images/convert-java-map-json.jpg
---

There are a number of ways to convert a Java Map into JSON. It is quite common to convert Java Arrays and Maps into JSON and vice versa.

In this post, we look at 3 different examples to convert Java Map to JSON. We will be using Jackson, Gson and org.json libraries.

## Java Map to JSON using Jackson

The following example uses Jackson Core and Jackson Binding to convert Java Map to JSON.

In order to use the Jackson libraries, we first need to add them to our `pom.xml` file:

```xml
<dependencies>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
         <artifactId>jackson-core</artifactId>
        <version>2.9.8</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.9.8</version>
    </dependency>
</dependencies>
```

Then:

```java
package com.testingexcellence.tutorials;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

public class ConvertJavaMapToJson {

    @Test
    public void convertMapToJson() {
        Map<String, String> elements = new HashMap();
        elements.put("Key1", "Value1");
        elements.put("Key2", "Value2");
        elements.put("Key3", "Value3");

        ObjectMapper objectMapper = new ObjectMapper();

        try {
            String json = objectMapper.writeValueAsString(elements);
            System.out.println("json = " + json);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}
```

Output:

```json
json = {"Key2":"Value2","Key1":"Value1","Key3":"Value3"}
```

As can be seen from the output, the order of the elements in the JSON are not the same as the order we added them to the map.

To retain the order, we need to use `SortedMap` instead.

e.g.

```java
SortedMap<String, String> elements = new TreeMap();
```

Output:

```json
json = {"Key1":"Value1","Key2":"Value2","Key3":"Value3"}
```

## Java Map to JSON using Gson

The following example uses Gson library to convert Java Map to JSON, but first, we need to add Gson as a dependency to `pom.xml` file.

```xml
<dependencies>
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.8.5</version>
    </dependency>
</dependencies>
```

Then:

```java
package com.testingexcellence.tutorials;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.SortedMap;
import java.util.TreeMap;

public class ConvertJavaMapToJson {

    @Test
    public void convertMapToJson() {
        SortedMap<String, String> elements = new TreeMap();
        elements.put("Key1", "Value1");
        elements.put("Key2", "Value2");
        elements.put("Key3", "Value3");

        Gson gson = new Gson();
        Type gsonType = new TypeToken<HashMap>(){}.getType();
        String gsonString = gson.toJson(elements,gsonType);
        System.out.println(gsonString);
    }
}
```

Output:

```json
    json = {"Key1":"Value1","Key2":"Value2","Key3":"Value3"}
```

## Java Map to JSON using org.json

The following example uses org.json library to convert Java Map to JSON, but first, we need to add org.json as a dependency to `pom.xml` file.

```xml
<dependencies>
    <dependency>
        <groupId>org.json</groupId>
        <artifactId>json</artifactId>
        <version>20180813</version>
    </dependency>
</dependencies>
```

Then:

```java
package com.testingexcellence.tutorials;

import org.json.JSONObject;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

public class ConvertJavaMapToJson {

    @Test
    public void convertMapToJson() {
        Map<String, String> elements = new HashMap<>();
        elements.put("Key1", "Value1");
        elements.put("Key2", "Value2");
        elements.put("Key3", "Value3");

        JSONObject json = new JSONObject(elements);

        System.out.println(json);
    }
}
```

Output:

```json
    json = {"Key2":"Value2","Key1":"Value1","Key3":"Value3"}
```

**Further reading**

*   [Convert List to Array in Java](https://www.testingexcellence.com/convert-list-to-array-in-java/)
*   [Convert String to Int in Java With Examples](https://www.testingexcellence.com/convert-string-to-int-java-examples/)