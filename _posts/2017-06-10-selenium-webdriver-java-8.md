---
layout: post
title: "Selenium WebDriver With Java 8 - Lambda Expressions and Collections Stream"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

From Selenium 3.0, minimum [Java version is 8](https://raw.githubusercontent.com/SeleniumHQ/selenium/master/java/CHANGELOG). In this article, we illustrate how to use Java 8 features like **Lambda expression** and **Collections Stream** to simplify Selenium WebDriver code.

### Lambda Expression

Java lambda expressions are Java’s first step into functional programming. A Java lambda expression is thus a function which can be created without belonging to any class. A lambda expression can be passed around as if it was an object and executed on demand.

*   **[How to read properties file in Java](https://www.testingexcellence.com/easiest-way-read-properties-file-java-resourcebundle/)**
*   **[4 different ways to iterate through a map in Java](https://www.testingexcellence.com/4-different-ways-iterate-map-java/)**
*   **[How to get the current working directory in Java](https://www.testingexcellence.com/get-current-working-directory-java/)**

Let’s say you have an ArrayList and you want to print all its elements. Without lambda expressions, you would use:

    List<String> list=new ArrayList();

    list.add("Apple");
    list.add("Orange");
    list.add("Grape");

    for(String item:list){
      System.out.println(item);
    }

Using Lambda expression in Java 8, we can rewrite the same loop using forEach

    list.forEach(item -> System.out.println(item));

### Collections Stream

Collections Stream is a new feature in Java 8\. A stream represents a sequence of elements and supports different kind of operations from a collection.

So, let’s say you want to check whether an option is available or not in a drop-down list:

    Select select=new Select(driver.findElement(By.id("selectId")));

    //Validating drop-down option without For Loop
    select.getOptions().stream().anyMatch(item->item.getText().equals("Option1"))

### Filtering WebElements Using Regular Expression

    List<WebElement> elements=driver.findElements( By.xpath("//input[@type='checkbox']"));

    elements.stream()
         .filter(element->Pattern.compile("check_(\\d+)_box").matcher(element.getAttribute("id")).matches())
         .forEach(element->element.click());

https://www.testingexcellence.com/webdriver-explicit-implicit-fluent-wait/