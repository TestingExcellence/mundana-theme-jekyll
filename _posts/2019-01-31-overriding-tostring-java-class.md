---
layout: post
title:  "Purpose of Overriding toString() Method in Java"
author: Amir
categories: [ java ]
image: assets/images/java-override-tostring-example.jpg
---

What is the purpose of `toString()` method in Java?

If we want to represent an object of a class as a String, then we can use the `toString()` method which returns a textual representation of the object.

When you print an object, by default the Java compiler invokes the `toString()` method on the object. So by overriding the `toString()` method, we can provide meaningful output.

Let's see this concept in the following example:

## Overriding toString() Method

```java
package com.testingexcellence.tutorials;

public class ToStringExample {

    private String firstName;
    private String lastName;
    private String email;

    public ToStringExample() {

    }
    
    public String getFirstName() {
        return firstName;
    }
        
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
        
    public String getLastName() {
        return lastName;
    }
        
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
        
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("First name : ").append(this.firstName).append("\n");
        sb.append("Last name : ").append(this.lastName).append("\n");
        sb.append("Email : ").append(this.email).append("\n");
        return sb.toString();
    }

    public static void main(String args[]) {
        ToStringExample example = new ToStringExample();
        example.setFirstName("Testing");
        example.setLastName("Excellence");
        example.setEmail("testing@excellence.com");

        System.out.println(example);
    }
}
```

The above code outputs the following:

```bash
First name : Testing
Last name : Excellence
Email : testing@excellence.com
```

If we didn't override the `toString()` method, the output would have been

```bash
com.testingexcellence.tutorials.ToStringExample@60e53b93
```

As can be seen, by overriding the `toString()` method, we can output meaningful presentation of the object.

**Further reading**

*   [How to Loop Over ArrayList in Java](https://www.testingexcellence.com/java-loop-arraylist/)
*   [How to Parse JSON in Java](https://www.testingexcellence.com/how-to-parse-json-in-java/)
*   [Easiest Way to Reverse a String in Java](https://www.testingexcellence.com/reverse-string-java/)