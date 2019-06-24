---
layout: post
title: "How to Resize Browser Window in WebDriver"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

How to resize browser window with Selenium WebDriver? Here, we look at three different ways we can resize browser window in WebDriver.

Whenever WebDriver starts the browser, it starts it with default settings. Sometimes it is required to resize the browser window, particularly when we are testing for **[responsive web design](http://www.testingexcellence.com/how-to-test-responsive-web-design/) **because we need to check to see how the different elements on the page render when we resize the browser window.

Webdriver has convenient methods and different ways that can allow us to resize the browser window.

https://www.testingexcellence.com/webdriver-headless-mode-chrome-driver/

## Resize Browser Window in WebDriver

**Java** using Dimension

    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.firefox.FirefoxDriver;
    import org.openqa.selenium.Dimension;

    public class BrowserOperations {
        WebDriver driver;

        //this will open browser with default size
        public void launchBrowser() {
            driver = new FirefoxDriver();
        }

        public void resizeBrowser() {
            Dimension d = new Dimension(800,480);
    //Resize current window to the set dimension
            driver.manage().window().setSize(d);
        }
    }

**Java** using Chrome options

    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.chrome.ChromeDriver;
    import org.openqa.selenium.chrome.ChromeOptions;
    import org.openqa.selenium.remote.DesiredCapabilities;

    public class BrowserOperations {
        public static void main(String[] args) {
            System.setProperty("webdriver.chrome.driver";,
            "/path/to/chromedriver");

            ChromeOptions options = new ChromeOptions();
            options.addArguments("window-size=800,480");

            DesiredCapabilities cap = DesiredCapabilities.chrome();
            cap.setCapability(ChromeOptions.CAPABILITY, options);

            //this will open chrome with set size
            WebDriver driver = new ChromeDriver(capabilities);

            driver.get("https://www.testingexcellence.com/");
        }
    }

If you want to maximize the browser window to the maximum width and height of the screen, you can just call the maximize() method

    Webdriver driver = new FirefoxDriver();
    driver.manage().window().maximize();