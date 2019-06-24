---
layout: post
title: "Different Ways to Iterate Through a Map in Java"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Looping over a Map in Java. In this post, we look at four different ways we can iterate through a map in Java. As of Java 8, we can use the forEach method as well as the iterator class to loop over a map.

### Method #1: Iterating over entries using For-Each loop

    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
        System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
    }

### Method #2: Iterating over keys or values using For-Each loop

    Map<Integer, Integer> map = new HashMap<Integer, Integer>();

    //iterating over keys only
    for (Integer key : map.keySet()) {
        System.out.println("Key = " + key);
    }

    //iterating over values only
    for (Integer value : map.values()) {
        System.out.println("Value = " + value);
    }

### Method #3: Iterating using Iterator.

Using Generics:

    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    Iterator<Map.Entry<Integer, Integer>> entries = map.entrySet().iterator();
    while (entries.hasNext()) {
        Map.Entry<Integer, Integer> entry = entries.next();
        System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
    }

Without Generics:

    Map map = new HashMap();
    Iterator entries = map.entrySet().iterator();
    while (entries.hasNext()) {
        Map.Entry entry = (Map.Entry) entries.next();
        Integer key = (Integer)entry.getKey();
        Integer value = (Integer)entry.getValue();
        System.out.println("Key = " + key + ", Value = " + value);
    }

### Method #4: Iterating over keys and searching for values

    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (Integer key : map.keySet()) {
        Integer value = map.get(key);
        System.out.println("Key = " + key + ", Value = " + value);
    }

### Using Java 8 ForEach

    Map<String, Integer> items = new HashMap<>();
            items.put("key 1", 1);
            items.put("key 2", 2);
            items.put("key 3", 3);

            items.forEach((k,v)->System.out.println("Item : " + k + " Count : " + v));

**Related:**

*   **[Loop over ArrayList in Java](https://www.testingexcellence.com/java-loop-arraylist/)**
*   **[Convert List to Array in Java](https://www.testingexcellence.com/convert-list-to-array-in-java/)**
*   **[Parse JSON in Java](https://www.testingexcellence.com/how-to-parse-json-in-java/)**