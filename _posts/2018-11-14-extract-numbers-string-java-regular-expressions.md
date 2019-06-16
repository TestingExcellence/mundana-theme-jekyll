---
layout: post
title:  "Extract Numbers From String Using Java Regular Expressions"
author: Amir
categories: [ java ]
image: assets/images/java-string-int-regex.png
---

The following are examples which show how to extract numbers from a string using regular expressions in Java.

Being able to parse strings and extract information from it is a key skill that every tester should have. This is particularly useful when testing APIs and you need to [parse a JSON](https://www.testingexcellence.com/how-to-parse-json-in-java/) or XML response.

The following Java Regular Expression examples focus on extracting numbers or digits from a String.

### Extract All Numbers from a String

```java
package com.testingexcellence.tutorials;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExamples {
    public static void main(String[]args) {
        Pattern p = Pattern.compile("\\d+");
        Matcher m = p.matcher("string1234more567string890");
        while(m.find()) {
            System.out.println(m.group());
        }
    }
}
```

Output:

```bash
1234
567
890
```

### Extract nth Digit from a String

If you want to extract only certain numbers from a string you can provide an index to the `group()` function.

For example, if we wanted to only extract the second set of digits from the string `string1234more567string890`, i.e. `567` then we can use:

```java
package com.testingexcellence.tutorials;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExamples {
    private static final Pattern p = Pattern.compile("[^\\d]*[\\d]+[^\\d]+([\\d]+)");
    public static void main(String[] args) {
        // create matcher for pattern p and given string
        Matcher m = p.matcher("string1234more567string890");

        // if an occurrence if a pattern was found in a given string...
        if (m.find()) {
            System.out.println(m.group(1)); // second matched digits
        }
    }
}
```

Output:

```bash
567
```

Explanation of the Pattern `[^\d]*[\d]+[^\d]+([\d]+)`

*   ignore any non-digit
*   ignore any digit (first number)
*   again ignore any non-digit
*   capture the second number

### Extract Number from a Tag Attribute

When dealing with XML or HTML tags, sometimes there is a need to extract a value from an attribute. For example, consider the following tag

`<result name="response" numFound="9999" start="0">`

To extract number `9999` we can use the following code:

```java
package com.testingexcellence.tutorials;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExamples {
    public static void main(String[]args) {
        Pattern pattern = Pattern.compile("numFound=\"([0-9]+)\"");
        Matcher matcher = pattern.matcher("");

        if (matcher.find()) {
            System.out.println(matcher.group(1));
        }
    }
}
```

Output:

```bash
9999
```

### Extract a String Containing digits and Characters

You can use Java regular expressions to extract a part of a String which contains digits and characters. Suppose we have this string `Sample_data = YOUR SET ADDRESS IS 6B1BC0 TEXT` and we want to extract `6B1BC0` which is **6 characters long**, we can use:

```java
package com.testingexcellence.tutorials;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExamples {
    public static void main (String[] args) {
        Pattern p = Pattern.compile("YOUR SET ADDRESS IS\\s+([A-Z0-9]{6})");
        Matcher n = p.matcher("YOUR SET ADDRESS IS 6B1BC0 TEXT");
        if (n.find()) {
            System.out.println(n.group(1)); // Prints 123456
        }
    }
}
```

Output:

```bash
6B1BC0
```

### Extract Key-Value Pairs With Regular Expressions

Let's suppose we have a string of this format  
`bookname=testing&bookid=123456&bookprice=123.45`  
and we want to extract the key-value pair `bookid=123456` we would use:

```java
package com.testingexcellence.tutorials;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExamples {
    public static void main(String[] args) {
        String s = "bookname=cooking&bookid=123456&bookprice=123.45";
        Pattern p = Pattern.compile("(?<=bookid=)\\d+");
        Matcher m = p.matcher(s);
        if (m.find()) {
            System.out.println(m.group());
        }
    }
}
```

Output:

```bash
123456
```