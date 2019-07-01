---
layout: post
title:  "Java Random Number Generation"
author: Amir
categories: [ java ]
image: assets/images/java-random-number-generation.jpg
---

Generating random numbers in Java is a common task. For example, you might want to execute tests with random values each time. In this post, we look at different ways we can generate random numbers in Java.

<!--more-->

## Random Number Generation

In Java, we can generate random numbers by using the `java.util.Random` class.

Once we import the Random class, we can create an object from it which gives us the ability to use random numbers.

For example, methods `nextInt()` and `nextLong()` will return a number that is within the range of values (negative and positive) of the int and long data types respectively.

### Generating random Int, Long, and Boolean

```java
package com.testingexcellence.tutorials;

import java.util.Random;

public class GenerateRandomNumbers {

    static Random rand;

    public static void main(String[] args) {
        rand = new Random();
        System.out.println("Random integer: " + rand.nextInt());
        System.out.println("Random long:    " + rand.nextLong());
        System.out.println("Random boolean: " + rand.nextBoolean());
    }
}
```

### Generating Random Numbers in a Range

Sometimes, we want random numbers to be generated from a certain range, e.g. between 1 and 50.

To do this, we can provide an integer parameter to the `nextInt()` method. This parameter defines the upper limit for the range.

One thing to note here is that the upper limit number is not included as one of the numbers that are generated. For example, `nextInt(5)`generates numbers from `0` to `4` inclusive.

If we also wish `5` to be in the list of the random numbers, we need to use `nextInt(5)+1`

```java
package com.testingexcellence.tutorials;

import java.util.Random;

public class GenerateRandomNumbers {

    static Random rand;

    public static void main(String[] args) {
        rand = new Random();
        int randInt = rand.nextInt(5) + 1;
        System.out.println("Random integer: " + randInt);
    }
}
```

### Generating Secure Random Numbers in Java

The Random class generates random numbers in a deterministic way. The algorithm that produces the randomness is based on a number called a seed. If the seed number is known then it's possible to figure out the numbers that are going to be produced from the algorithm.

The goal of the `SecureRandom` Class is to generate cryptographically strong random numbers.

The `SecureRandom` must produce non-deterministic output. Therefore any seed material passed to a `SecureRandom` object must be unpredictable.

Below is an example usage of the `SecureRandom` class to generate random numbers in Java

```java
package com.testingexcellence.tutorials;

import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.SecureRandom;

public class GenerateRandomNumbers {

    static SecureRandom secureRandomGenerator;

    public static void main(String[] args) {
        
        try {
            secureRandomGenerator = SecureRandom.getInstance("SHA1PRNG", "SUN");
        } 
        catch (NoSuchAlgorithmException | NoSuchProviderException e) {
        }

        //Get random integer in range
        int randInRange = secureRandomGenerator.nextInt(499);
        System.out.println(randInRange);
    }
}
```

The above examples illustrate how to generate random numbers in Java.

Reference: [Secure Random Number Generation](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)

**Further reading**

*   [How to Convert Java Map to JSON](https://www.testingexcellence.com/how-to-convert-java-map-to-json/)
*   [Convert List to Array in Java](https://www.testingexcellence.com/convert-list-to-array-in-java/)
*   [Easiest Way to Reverse a String in Java](https://www.testingexcellence.com/reverse-string-java/)