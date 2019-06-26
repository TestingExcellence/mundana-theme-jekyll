---
layout: post
title: "How to Get the Current Working Directory in Java"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

The current working directory means the root folder of your current Java project. We can get the current working directory in Java using the following system property function:

    String cwd = System.getProperty("user.dir");

Example:

    public class CurrentWorkingDirectory {

        public static void main (String args[]) {

            String cwd = System.getProperty("user.dir");
            System.out.println("Current working directory : " + cwd);

        }
    }

Output:  
`Current working directory: C:\workspace\Java4Testers`

**Further reading**

*   **[Convert List to Array in Java](https://www.testingexcellence.com/convert-list-to-array-in-java/)**
*   **[Extract Numbers From String Using Java Regular Expressions](https://www.testingexcellence.com/extract-numbers-string-java-regular-expressions/)**
*   **[Convert String to Int in Java With Examples](https://www.testingexcellence.com/convert-string-to-int-java-examples/)**
*   **[Purpose of Overriding toString() Method in Java](https://www.testingexcellence.com/overriding-tostring-java-class/)**
