---
layout: post
title: "How To Run WebDriver in Headless Mode"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

How to run WebDriver in headless mode? This might be needed if your CI tool, for example, Jenkins doesn’t support UI.

Running WebDriver Automated Tests in headless mode provides advantages in terms of speed of execution of tests and easier integration into the CI pipeline.

In this tutorial, we will use PhantomJS and ChromeDriver to run Selenium WebDriver tests in headless mode.

https://www.testingexcellence.com/capture-network-traffic-xhr-cypress/

## PhantomJS

To run WebDriver tests in headless mode using PhantomJS, you first need to download the [PhantomJS executable file](http://phantomjs.org/download.html) and save it in a location, e.g. your project’s resources folder.

In the example below, I have put the PhantomJS executable in src/test/resources/phantomjs

You will also need the ghost driver dependency as well:

    <dependency>
        <groupId>com.github.detro.ghostdriver</groupId>
        <artifactId>phantomjsdriver</artifactId>
        <version>1.0.1</version>
    </dependency>

And your Java class:

    package com.sdetworld.tutorials.selenium

    import org.openqa.selenium.phantomjs.PhantomJSDriver;
    import org.openqa.selenium.phantomjs.PhantomJSDriverService;
    import org.openqa.selenium.remote.DesiredCapabilities;

    public class WebDriverBase {

      static protected WebDriver driver;

      public static void setup() {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setJavascriptEnabled(true); // not really needed: JS enabled by default
        caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, "src/test/resources/phantomjs");

        driver = new PhantomJSDriver(caps);
      }
      public static void main(String[] args) {
        WebDriverBase.setup();
        driver.get("https://www.testingexcellence.com");
      }
    }

## ChromeDriver

To run WebDriver tests in headless mode using ChromeDriver, you will need to add the relevant dependencies in your pom.xml file:

    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-chrome-driver</artifactId>
        <version>${selenium.version}</version>
    </dependency>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-server</artifactId>
        <version>${selenium.version}</version>
    </dependency>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>${selenium.version}</version>
    </dependency>
    <dependency>
        <groupId>io.github.bonigarcia</groupId>
        <artifactId>webdrivermanager</artifactId>
        <version>${webdrivermanager.version}</version>
    </dependency>

Next, we instruct the WebDriver manager to launch chrome driver in headless mode

    package com.sdetworld.tutorials.selenium

    import io.github.bonigarcia.wdm.ChromeDriverManager;
    import org.openqa.selenium.chrome.ChromeDriver;

    public class WebDriverBase {

      static protected WebDriver driver;

      public static void setup() {

        ChromeDriverManager.getInstance().setup();
        ChromeOptions chromeOptions = new ChromeOptions();

        chromeOptions.addArguments("--headless");
        driver = new ChromeDriver(chromeOptions);
      }

      public static void main(String[] args) {
        WebDriverBase.setup();
        driver.get("https://www.testingexcellence.com");
      }
    }