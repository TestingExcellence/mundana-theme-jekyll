---
layout: post
title: "Automated Testing – Setting the Right Expectations"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In this WebDriver tutorial, we take a look at how to wait for a page to complete loading before doing other actions. Two examples in Java on wait for page to load in WebDriver.

### Wait For Page To Load - Method #1

    import org.openqa.selenium.JavascriptExecutor;
    import org.openqa.selenium.WebDriver;

    import org.openqa.selenium.firefox.FirefoxDriver;
    import org.openqa.selenium.support.ui.ExpectedCondition;
    import org.openqa.selenium.support.ui.WebDriverWait;
    import org.testng.Assert;

    public class Tutorials {

        WebDriver driver = new FirefoxDriver();

        public void waitForPageLoaded() {
            ExpectedCondition<Boolean> expectation = new
                    ExpectedCondition<Boolean>() {
                        public Boolean apply(WebDriver driver) {
                            return ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete");
                        }
                    };
            try {
                Thread.sleep(1000);
                WebDriverWait wait = new WebDriverWait(driver, 30);
                wait.until(expectation);
            } catch (Throwable error) {
                Assert.fail("Timeout waiting for Page Load Request to complete.");
            }
        }
    }

### Wait For Page To Load Method #2

    import org.openqa.selenium.JavascriptExecutor;
    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.support.ui.ExpectedCondition;
    import org.openqa.selenium.support.ui.WebDriverWait;

    public class Tutorials {

        public void waitForLoad(WebDriver driver) {
            ExpectedCondition<Boolean> pageLoadCondition = new
                    ExpectedCondition<Boolean>() {
                        public Boolean apply(WebDriver driver) {
                            return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
                        }
                    };
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(pageLoadCondition);
        }
    }