---
layout: post
title:  "Page Object Model Framework with Java and WebDriver"
author: Amir
categories: [ technical testing ]
tags: [ selenium ]
image: assets/images/page-objects-selenium-java.jpg
---



This tutorial is the second part of the [Test Automation Framework](https://www.testingexcellence.com/develop-test-automation-framework-scratch/) development. In the first part, we learned how to create the structure of the framework from scratch.

In this tutorial, we are going to create the base classes for the framework.

If you haven't read part 1 of this tutorial, please follow the instructions on [How to Create a Test Automation Framework from Scratch.](https://www.testingexcellence.com/develop-test-automation-framework-scratch/)

Alternatively, you can clone the base framework from my [GitHub repo](https://github.com/AmirGhahrai/Rima).

Once you have followed the instructions on part 1 of this tutorial or cloned the repo, you should have these four Maven modules:

*   **domain** - classes that describe the business model
*   **framework** - core classes that form the framework
*   **page-objects** - components and locators of each webpage
*   **regression-tests** - actual test classes that rely on page objects

Our framework will be based on the Page Object Model design pattern. We will also be using the WebDriver's [PageFactory](https://github.com/SeleniumHQ/selenium/wiki/PageFactory) class to initialize WebElements.

## Selenium Page Object Model

Ok, now that you have created the base structure, let's start by adding the base classes.

### BasePage.java

In the **framework** module, we create a class called BasePage.java. All page object classes will extend the BasePage, thus inheriting all the base methods.

Our BasePage class will have a constructor which takes a WebDriver object to initialize a WebDriverWait object. The constructor will also be responsible to initialize WebElements via PageFactory.

In addition, we will also have some utility wait methods to handle the various waits such as WaitForElementToAppear.

So, the BasePage class will look like:

```java
package rima.framework.core;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {

    private static final int TIMEOUT = 5;
    private static final int POLLING = 100;

    protected WebDriver driver;
    private WebDriverWait wait;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        wait = new WebDriverWait(driver, TIMEOUT, POLLING);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, TIMEOUT), this);
    }

    protected void waitForElementToAppear(By locator) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    protected void waitForElementToDisappear(By locator) {
        wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));
    }

    protected void waitForTextToDisappear(By locator, String text) {
        wait.until(ExpectedConditions.not(ExpectedConditions.textToBe(locator, text)));
    }
}
```

**Note** that in BasePage class, we don't initialize the WebDriver object. The initialization is done in BaseTest class.

### BaseTest.java

BaseTest class holds the methods to initialize and terminate the WebDriver object. Since all the Test classes will extend the BaseTest class, then the initialization is done implicitly. The Test classes will simply get the WebDriver object by calling the `getDriver()` method.

Also, as we are using TestNG, we can use the `@BeforeSuite` and `@AfterSuite` annotations, such as:

```java
package rima.framework.core;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

public class BaseTest {

    private WebDriver driver;

    @BeforeSuite
    public void beforeSuite() {
        System.setProperty("headless", "false"); // You can set this property elsewhere
        String headless = System.getProperty("headless");

        ChromeDriverManager.chromedriver();
        if("true".equals(headless)) {
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("--headless");
            driver = new ChromeDriver(chromeOptions);
        } else {
            driver = new ChromeDriver();
        }
    }

    @AfterSuite
    public void afterSuite() {
        if(null != driver) {
            driver.close();
            driver.quit();
        }
    }

    public WebDriver getDriver() {
        return driver;
    }
}
```

## Adding the Page Objects

Now, in the **page-objects** module, we create our first Page Object. For this tutorial, I will use the Google homepage.

```java
package rima.pageobjects.homepage;

import org.openqa.selenium.WebDriver;
import rima.framework.core.BasePage;

public class GoogleHomepage extends BasePage {

    public GoogleHomepage(WebDriver driver) {
        super(driver);
    }
}
```

As you can see, this page object doesn't do much. It only has a constructor which takes a WebDriver object and passes it on to its superclass constructor.

Again, note that none of the page objects nor the BasePage initialize the WebDriver Objects.

In Part 3 of this tutorial, we will add the methods to handle the search function of the Google homepage.

## Adding the Tests

We add the tests in the **regression-tests** module.

We create a test class called GoogleHomepageTests, with one test method which just instantiates our GoogleHomepage page object. For now, it doesn't do any other action.

In Part 3 of this tutorial, I will add the methods to search and verify the results.

```java
package rima.tests.homepage;

import org.testng.annotations.Test;
import rima.framework.core.BaseTest;
import rima.pageobjects.homepage.GoogleHomepage;

public class GoogleHomepageTests extends BaseTest {

    @Test
    public void homepageTests() {
        GoogleHomepage googleHomepage = new GoogleHomepage(getDriver());
    }
}
```

When you run the above test in your IDE, you should see a Google Chrome browser open and close.

Stay tuned for Part 3 of this tutorial where I will take the above example further by adding more components to extend the framework.

You can get all the above source code from the [GitHub repo](http://git@github.com:AmirGhahrai/Rima.git).

Hope you found the above WebDriver Framework tutorial useful.

**Further Reading:**

*   [How to Develop a Test Automation Framework From Scratch?](https://www.testingexcellence.com/develop-test-automation-framework-scratch/)
*   [Performance Testing Framework with Gatling and Maven](https://www.testingexcellence.com/gatling-maven-performance-test-framework/)
*   [Test Automation Tools for Testing ReactJS Applications](https://www.testingexcellence.com/reactjs-test-automation-tools/)