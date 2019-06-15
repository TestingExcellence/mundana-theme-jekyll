---
layout: post
title:  "Java Create File Examples"
author: Amir
categories: [ java ]
image: assets/images/java-create-file-examples.jpg
---

In this post, we will look at four different ways to create files in Java.

Creating files in Java is easy. All we need to do is import the relevant package in our class file and use relevant methods.

The examples below make use of `java.io.file`, `java.io.fileOutputStream`, and `java.nio` package. These classes are provided out of the box in Java API. We also look at creating a file with Apache Commons.

## Create File with java.io.file class

In the first example, we will use `createNewFile()` method from the `java.io.file` class. This method returns a boolean value. It returns false if the file already exists, or true if created.

```java
package com.testingexcellence.tutorials;

import java.io.File;
import java.io.IOException;

public class CreateFileJavaExamples {

    public static void main(String[] args) {
        File file = new File("c://examples//newFile.txt");

        try {
            if (file.createNewFile()) {
                System.out.println("File create");
            } else {
                System.out.println("File already exists!");
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
```
**NOTE:** The above example creates an empty file in the provided location.

## Using java.io.fileOutputStream

The next example uses `fileOutputStream`. It's important to note that this is mostly used to create a file and write content to it in one go.

```java
package com.testingexcellence.tutorials;

import java.io.FileOutputStream;

public class CreateFileJavaExamples {

    public static void main(String[] args) {
        try {
            new FileOutputStream("newFile.txt", true);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
```

If the file doesn't exist, the above method will create it. If  the file exists, passing `true` will just append content to it.

**NOTE:** Be careful when using `fileOutputStream`. If the file exists with content, if we pass `false` as the parameter to the `fileOutputStream` method, it will overwrite the file and the content will be lost!

## Create File with java.nio Package

In the following example, we will use `java.nio` package which was introduced in JDK 7.

In order to create a file with the `nio` package, we first need to set the path and then use the `createFile()` method from `Files` class. Creating files via the new `nio` package is the preferred option as the API is more intuitive.

```java
package com.testingexcellence.tutorials;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class CreateFileJavaExamples {

    public static void main(String[] args) {
        try {
            Path newFilePath = Paths.get("src/test/resources/newFile.txt");
            Files.createFile(newFilePath);
        }
        catch (IOException e) {

        }
    }
}
```

The above code example assumes the path `src/test/resources` already exists.

## Apache Commons FileUtils

If you don't want to use standard libraries provided out of the box from Java, you can use `FileUtils` class from [Apache Commons](https://commons.apache.org/proper/commons-io/)

```java
package com.testingexcellence.tutorials;

import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

public class CreateFileJavaExamples {

    public static void main(String[] args) {
        File myFile = new File("src/test/resources/newFile.txt");
        
        try {
            FileUtils.touch(myFile);
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

In the above example, we use the `touch` method to create a file.

### Conclusion

In this tutorial, you learned different ways you can create files in Java.

**Further reading**

*   [Extract Numbers From String Using Java Regular Expressions](https://www.testingexcellence.com/extract-numbers-string-java-regular-expressions/)
*   [Easiest Way to Read Properties File in Java With ResourceBundle](https://www.testingexcellence.com/easiest-way-read-properties-file-java-resourcebundle/)
*   [Easiest Way to Reverse a String in Java](https://www.testingexcellence.com/reverse-string-java/)
*   [How to Loop Over ArrayList in Java](https://www.testingexcellence.com/java-loop-arraylist/)