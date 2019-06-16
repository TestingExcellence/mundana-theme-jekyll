---
layout: post
title:  "How to Loop Over ArrayList in Java"
author: Amir
categories: [ java ]
image: assets/images/java-loop-arraylist.jpg
---

Looping over an ArrayList in Java. In this tutorial, we look at five different ways we can iterate through an ArrayList in Java. As of Java 8, we can use the forEach method as well as the iterator class to loop over an ArrayList.

## Looping over an ArrayList

There are primarily 5 different ways to loop over an ArrayList

1.  Classic For Loop
2.  Advanced For Loop
3.  Iterator
4.  While Loop
5.  ForEach (Java 8)

First, let's create an ArrayList to use in the loop examples:

```java
package com.testingexcellence.tutorials;

import java.util.ArrayList;
import java.util.List;

public class LoopOverArrayExamples {

    private List fruitBasket = new ArrayList<>(0);

    public void addFruitsToBasket() {
        fruitBasket.add("Apple");
        fruitBasket.add("Banana");
        fruitBasket.add("Pear");
        fruitBasket.add("Mango");
    }
}
```

### Using Classic For Loop

```java
for (int i=0; i<fruitBasket.size(); i++) {
    System.out.println(fruitBasket.get(i));
}
```

### Advanced For Loop

```java
for(String fruit : fruitBasket) {
    System.out.println(fruit);
}
```

### Using Iterator

```java
Iterator fruitIterator = fruitBasket.iterator();
while (fruitIterator.hasNext()) {
    System.out.println(fruitIterator.next());
}
```

### Using While Loop

```java
int i = 0;
while (i < fruitBasket.size()) {
    System.out.println(fruitBasket.get(i));
    i++;
}
```

### ForEach (Java 8)

```java
fruitBasket.forEach( (fruit) ->
    System.out.println(fruit)
);
```