---
layout: post
title:  "Convert String to Int in Java With Examples"
author: Amir
categories: [ java ]
image: assets/images/convert-string-int-java.jpg
---

How to convert a String to an Int in Java? If the String contains only numbers, then the best way to convert the String to Int is by using `Integer.parseInt()` or `Integer.valueOf()`.

If the String contains both numbers and characters, then we have to use [regular expressions to extract numbers](https://www.testingexcellence.com/extract-numbers-string-java-regular-expressions/) from the string and then convert the resulting String it to Int.

One thing to note is that `parseInt(String)` returns a primitive int, whereas `valueOf(String)` returns an Integer() object.

## Convert String to Int in Java

### Using Integer.parseInt()

```java
package com.testingexcellence.tutorials;

public class ConvertStringToInt {

    public static void main(String[] args) {
        String stringNumber = "1234";
        int number = convertStringToInt(stringNumber);
        System.out.println(number);
    }

    private static int convertStringToInt(String number) {
        return Integer.parseInt(number);
    }
}
```

Output:

```bash
1234
```

### Using Integer.valueOf()

```java
package com.testingexcellence.tutorials;

public class ConvertStringToInt {

    public static void main(String[] args) {
        String stringNumber = "1234";
        int number = convertStringToInt(stringNumber);
        System.out.println(number);
    }

    private static int convertStringToInt(String number) {
        return Integer.valueOf(number);
    }
}
```

Output:

```bash
1234
```

It is important to note that if the String contains characters and numbers such as "1234abcd" then the Integer parser throws NumberFormatException as stated in [Javadoc](http://docs.oracle.com/javase/6/docs/api/java/lang/Integer.html#parseInt%28java.lang.String%29).

### Using Integer.decode()

We can also use `Integer.decode()`. An interesting feature of `decode` is that it can convert to other bases, such as `base 10`, `base 16`, etc...

```java
package com.testingexcellence.tutorials;

public class ConvertStringToInt {

    public static void main(String[] args) {
        String stringNumber = "1234";
        int number = convertStringToInt(stringNumber);
        System.out.println(number);
    }

    private static int convertStringToInt(String number) {
        return Integer.decode(number);
    }
}
```

Output:

```bash
1234
```

### Apache Commons NumberUtils Class

Last but not least, we can use Apache Commons NumberUtils class to convert String to Int in Java.

All you need to do is to have the following dependency in your `pom.xml` file

```xml
<dependency>
    <groupId>commons-lang</groupId>
    <artifactId>commons-lang</artifactId>
    <version>2.6</version>
</dependency>
```

Then, you can use:

```java
package com.testingexcellence.tutorials;

import org.apache.commons.lang.math.NumberUtils;

public class ConvertStringToInt {

    public static void main(String[] args) {
        String stringNumber = "1234";
        int number = convertStringToInt(stringNumber);
        System.out.println(number);
    }

    private static int convertStringToInt(String number) {
        return NumberUtils.toInt(number);
    }
}
```

Output:

```bash
1234
```