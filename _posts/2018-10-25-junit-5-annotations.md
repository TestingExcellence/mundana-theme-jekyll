---
layout: post
title:  "JUnit 5 Annotations With Examples"
author: Amir
categories: [ java ]
image: assets/images/junit-5-tutorial.jpg
---

This tutorial explains the Junit 5's most common annotations with examples.

_JUnit 5_ is the next generation of JUnit.The goal is to create an up-to-date foundation for developer-side testing on the JVM. This includes focusing on Java 8 and above, as well as enabling many different styles of testing.

You can use both Maven and Gradle.

If you are using Maven, you need to add the following dependency to your `pom.xml` file:

```xml
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <version>5.3.1</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-params</artifactId>
        <version>5.3.1</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## @JUnit 5 Annotations

You will notice that in Junit 5, one of the most obvious changes is that test classes and methods do not have to be public anymore.

Now, let's go through the list of most common JUnit 5 Annotations.

### @Test

This annotation denotes that a method is a test method. Note this annotation does not take any attributes.

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class JUnit5Test {
        
    @Test
    void helloJUnit5() {
        assertEquals(10, 5+5);
    }
}
```

### @ParameterizedTest

Parameterized tests make it possible to run a test multiple times with different arguments. They are declared just like regular `@Test` methods but use the `@ParameterizedTest` annotation instead.

In addition, you must declare at least one source that will provide the arguments for each invocation and then consume the arguments in the test method.

For example, the following example demonstrates a parameterized test that uses the `@ValueSource` annotation to specify a String array as the source of arguments.

Example:

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertTrue;

class JUnit5Test {

    @ParameterizedTest
    @ValueSource(strings = { "cali", "bali", "dani" })
    void endsWithI(String str) {
        assertTrue(str.endsWith("i"));
    }
}
```

### @RepeatedTest

JUnit 5 has the ability to repeat a test a specified number of times simply by annotating a method with `@RepeatedTest` and specifying the total number of repetitions desired.

Each invocation of a repeated test behaves like the execution of a regular `@Test` method.

This is particularly useful in UI testing with Selenium.

```java
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.RepetitionInfo;
import org.junit.jupiter.api.TestInfo;

import static org.junit.jupiter.api.Assertions.assertEquals;

class JUnit5Test {
    
    @RepeatedTest(value = 5, name = "{displayName} {currentRepetition}/{totalRepetitions}")
    @DisplayName("RepeatingTest")
    void customDisplayName(RepetitionInfo repInfo, TestInfo testInfo) {
        int i = 3;
        System.out.println(testInfo.getDisplayName() + 
            "-->" + repInfo.getCurrentRepetition()
        );
        
        assertEquals(repInfo.getCurrentRepetition(), i);
    }
}
```

### [![junit-5 tutorial annotations example](https://www.testingexcellence.com/wp-content/uploads/2018/10/Screenshot-2018-10-25-at-00.49.01.png)](https://www.testingexcellence.com/wp-content/uploads/2018/10/Screenshot-2018-10-25-at-00.49.01.png)

As you can see from the result of the test, when `i==3`, the test passes, otherwise it fails.

### @DisplayName

Test classes and test methods can declare custom display names that will be displayed by test runners and test reports.

Example:

```java
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;

@DisplayName("DisplayName Demo")
class JUnit5Test {
    @Test
    @DisplayName("Custom test name")
    void testWithDisplayName() {
    }

    @Test
    @DisplayName("Print test name")
    void printDisplayName(TestInfo testInfo) {
        System.out.println(testInfo.getDisplayName());
    }
}
```

### @BeforeEach

The `@BeforeEach` annotation denotes that the annotated method should be executed before each test method, analogous to JUnit 4’s `@Before`.

Example:

```java
import org.junit.jupiter.api.*;

class JUnit5Test {
    @BeforeEach
    void init(TestInfo testInfo) {
        String callingTest = testInfo.getTestMethod().get().getName();
        System.out.println(callingTest);
    }

    @Test
    void firstTest() {
        System.out.println(1);
    }

    @Test
    void secondTest() {
        System.out.println(2);
    }
}
```
Output
```bash
firstTest
1
secondTest
2
```
### @AfterEach

This annotation denotes that the annotated method should be executed after each test method, analogous to JUnit 4’s `@After`. For example, if the tests need to reset a property after each test, we can annotate a method with `@AfterEach` for that task.

```java
import org.junit.jupiter.api.*;

class JUnit5Test {

    @Test
    void firstTest() {
        System.out.println(1);
    }
    @Test
    void secondTest() {
        System.out.println(2);
    }

    @AfterEach
    void after(TestInfo testInfo) {
        String callingTest = testInfo.getTestMethod().get().getName();
        System.out.println(callingTest);
    }
}
```
Output:

```bash
1
firstTest
2
secondTest
```

### @BeforeAll

This annotation executes a method before all tests. This is analogous to JUnit 4’s `@BeforeClass`. The `@BeforeAll` annotation is typically used to initialize various things for the tests.

Example:

```java
import org.junit.jupiter.api.*;

class JUnit5Test {

    @BeforeAll
    static void init() {
        System.out.println("Only run once before all tests");
    }

    @Test
    void firstTest() {
        System.out.println(1);
    }
    @Test
    void secondTest() {
        System.out.println(2);
    }
}
```
Output:

```bash
Only run once before all tests
1
2
```
### @AfterAll

The `@AfterAll` annotation is used to execute the annotated method, only after all tests have been executed. This is analogous to JUnit 4’s `@AfterClass`_._ We use this annotation to tear down or terminate all processes at the end of all tests.

Example:

```java
import org.junit.jupiter.api.*;

class JUnit5Test {

    @Test
    void firstTest() {
        System.out.println(1);
    }
    @Test
    void secondTest() {
        System.out.println(2);
    }

    @AfterAll
    static void after() {
        System.out.println("Only run once after all tests");
    }
}
```
Output:

```bash
1
2
Only run once after all tests
```
### @Tag

We can use this annotation to declare tags for filtering tests, either at the class or method level.

The `@Tag` annotation is useful when we want to create a test pack with selected tests.

Example:

```java
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

@Tag("smoke")
class JUnit5Test {

    @Test
    @Tag("login")
    void validLoginTest() {
    }

    @Test
    @Tag("search")
    void searchTest() {
    }
}
```

### @Disabled

The `@Disabled` annotation is used to disable or skip tests at class or method level. This is analogous to JUnit 4’s `@Ignore`.

When declared at class level, all `@test` methods are skipped. When we use `@Disabled` at the method level, only the annotated method is disabled.

Example:

`@Disabled` used to disable a test class:

```java
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

@Disabled
class DisabledClassDemo {

    @Test
    void testWillBeSkipped() {
    }
}
```

Example:

`@Disabled` annotation used to disable test method:

```java
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class DisabledTestsDemo {

    @Disabled
    @Test
    void testWillBeSkipped() {
    }

    @Test
    void testWillBeExecuted() {
    }
}
```
**Further reading:**

[Run All Test Classes in a Package from testng.xml Suite](https://www.testingexcellence.com/testng-run-all-test-classes-package-testngxml-suite/)