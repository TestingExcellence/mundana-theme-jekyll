---
layout: post
title:  "Easiest Way to Reverse a String in Java"
author: Amir
categories: [ java ]
image: assets/images/java-reverse-string.jpg
---

Reversing a string is one of the most frequently asked questions in a Java technical interview. The Interviewers may ask you to write different ways to reverse a string, or they may ask you to reverse a string without using in-built methods, or they may even ask you to reverse a string using recursion.

Below are various methods you can use to reverse a string in Java.

## Reverse String in Java, Easiest Way

The easiest way to reverse a string in Java is to use the built-in `reverse()` function of the `StringBuilder` class.

Example:

```java
package com.testingexcellence.tutorials;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ReverseString {

    String reverse(String inputString) {
        return new StringBuilder(inputString).reverse().toString();
    }

    @Test
    public void testAWord() {
        assertEquals("tobor", new ReverseString().reverse("robot"));
    }
}
```

## Reverse String using Recursion

Another way to reverse a string in java is to use recursion and utilizing the `charAt()` method of the `String` class

Example:

```java
package com.testingexcellence.tutorials;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ReverseString {

    String reverse(String inputString) {

        StringBuilder reverseStringBuilder = new StringBuilder();

        for(int i = inputString.length() - 1; i>=0; i--){
            reverseStringBuilder.append(inputString.charAt(i));
        }

        return reverseStringBuilder.toString();
    }

    @Test
    public void testAWord() {
        assertEquals("tobor", new ReverseString().reverse("robot"));
    }
}
```

A variation of the above is to use the `toCharArray()` and loop over the characters, for example:

```java
package com.testingexcellence.tutorials;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ReverseString {

    String reverse(String inputString) {
        String outString = "";
        for(char c : inputString.toCharArray()) {
            outString = c + outString;
        }
        return outString;
    }

    @Test
    public void testAWord() {
        assertEquals("tobor", new ReverseString().reverse("robot"));
    }
}
```

## Reverse String in Java 8

```java
package com.testingexcellence.tutorials;

import org.junit.jupiter.api.Test;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ReverseString {

    String reverse(String inputString) {
        return IntStream.range(0, inputString.length())
            .mapToObj(x-> inputString.charAt((inputString.length()-1) - x))
            .map(character -> String.valueOf(character))
            .collect(Collectors.joining(""));
    }

    @Test
    public void testAWord() {
        assertEquals("tobor", new ReverseString().reverse("robot"));
    }
}
```

**Further reading**

*   [How to Loop Over ArrayList in Java](https://www.testingexcellence.com/java-loop-arraylist/)
*   [Purpose of Overriding toString() in Java](https://www.testingexcellence.com/overriding-tostring-java-class/)
*   [Convert List to Array in Java](https://www.testingexcellence.com/convert-list-to-array-in-java/)