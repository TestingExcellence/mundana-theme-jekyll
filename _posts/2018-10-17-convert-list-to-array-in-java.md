---
layout: post
title:  "Convert List to Array in Java"
author: Amir
categories: [ java ]
image: assets/images/java-loop-arraylist.jpg
---

Converting between List and Array is a very common operation in Java.

The best and easiest way to convert a List into an Array in Java is to use the `.toArray()` method.

Likewise, we can convert back a List to Array using the `Arrays.asList()` method.

The examples below show how to convert List of String and List of Integers to their Array equivalents.


## Convert List<String> to Array of String

```java
package com.testingexcellence.tutorials;

import java.util.ArrayList;
import java.util.List;

public class ConvertArrayListToArray {
    public static void main(String[] args) {
        List<String> itemList = new ArrayList<String>();
        itemList.add("item1");
        itemList.add("item2");
        itemList.add("item3");

        String[] itemsArray = new String[itemList.size()];
        itemsArray = itemList.toArray(itemsArray);

        for(String s : itemsArray)
            System.out.println(s);
    }
}
```

We can use the same approach to convert List of Integers to Array of Integers, for example:

## Convert List<Integer> to Array of Integers

```java
package com.testingexcellence.tutorials;

import java.util.ArrayList;
import java.util.List;

public class ConvertArrayListToArray {
    public static void main(String[] args) {
        List<Integer> intList = new ArrayList<Integer>();
        intList.add(10);
        intList.add(20);
        intList.add(30);

        Integer[] intArray = new Integer[intList.size()];
        intArray = intList.toArray(intArray);

        for(Integer i : intArray)
            System.out.println(i);
    }
}
```

## Convert String Array to List<String>

You can also convert an Array back to a List. To do this, we use `Arrays.asList()`. For example:

```java
package com.testingexcellence.tutorials;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ConvertArrayToList {
    public static void main(String[] args) {
        String[] stringArray = {"item 1", "item 2", "item 3", "item 4"};
        List<String> stringList = new ArrayList(Arrays.asList(stringArray));

        for (String listItem : stringList) {
            System.out.println(listItem);
        }
    }
}
```

**Further Reading**

*   [How to Loop Over ArrayList in Java](https://www.testingexcellence.com/java-loop-arraylist/)
*   [Different Ways to Iterate Through a Map in Java](https://www.testingexcellence.com/4-different-ways-iterate-map-java/)