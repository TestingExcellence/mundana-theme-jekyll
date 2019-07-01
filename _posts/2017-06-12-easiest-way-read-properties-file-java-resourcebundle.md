---
layout: post
title: "Easiest Way to Read Properties File in Java With ResourceBundle"
author: Amir
categories: [ Java ]
image: assets/images/java-read-properties-file.jpg
---

There are a number of ways to load and read properties file from Java, but the easiest and most straightforward is using the ResourceBundle class.

First, you need to create a properties file under resources folder. In a typical Maven project, this looks like the following

[![resourcebundle properties file](/assets/images/java-read-properties-file.png)](/assets/images/java-read-properties-file.png)

 In this example, the properties file is called `config.properties`

The content of the properties file is in the format of name=value

Example:

```shell
browser=chrome
```
In a Java class, we can use the ResourceBundle class to read from the properties file:

```java
    public class ReadPropertiesFile {

        private static ResourceBundle rb = ResourceBundle.getBundle("config");

        public static void main(String[] args) {
            String browser = rb.getString("browser");
            System.out.println(browser);
        }
    }
```

Output:

```shell
chrome
```

**Further reading**

* [How to Convert Java Map to JSON](/how-to-convert-java-map-to-json/)
* [How to Generate Random Numbers in Java](/java-random-number/)
* [How to Loop Over ArrayList in Java](/java-loop-arraylist/)