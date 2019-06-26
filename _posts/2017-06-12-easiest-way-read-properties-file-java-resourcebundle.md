---
layout: post
title: "Easiest Way to Read Properties File in Java With ResourceBundle"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

There are a number of ways to load and read properties file from Java, but the easiest and most straightforward is using the ResourceBundle class.

First, you need to create a properties file under resources folder. In a typical Maven project, this looks like the following

[![resourcebundle properties file](http://www.testingexcellence.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-11-at-22.33.47-300x121.png)](http://www.testingexcellence.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-11-at-22.33.47.png)

 In this example, the properties file is called `config.properties`

The content of the properties file is in the format of name=value

Example:

    browser=chrome

In a Java class, we can use the ResourceBundle class to read from the properties file:

    public class ReadPropertiesFile {

        private static ResourceBundle rb = ResourceBundle.getBundle("config");

        public static void main(String[] args) {
            String browser = rb.getString("browser");
            System.out.println(browser);
        }
    }

Output:

    chrome

**Further reading**

*   **[How to Convert Java Map to JSON](https://www.testingexcellence.com/how-to-convert-java-map-to-json/)**
*   **[How to Generate Random Numbers in Java](https://www.testingexcellence.com/java-random-number/)**
*   **[How to Loop Over ArrayList in Java](https://www.testingexcellence.com/java-loop-arraylist/)**