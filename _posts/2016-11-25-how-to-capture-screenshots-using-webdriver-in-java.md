---
layout: post
title: "How to Capture Screenshots Using WebDriver in Java"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Selenium 2 (or WebDriver) has come up with some great new functionality that makes website testing much easier. This is because of the webdriver architecture allows interaction outside of javascript sandbox.

One of the new useful functionality is being able to take screenshots from WebDriver. You can take screenshots at any stage of the test, but mostly, it is used for when a test fails and taking screenshots helps the analysis so we can see what went wrong during a test failure.

To take a screenshot in WebDriver, you would use the following code

    File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);

    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.firefox.FirefoxDriver;
    import org.openqa.selenium.By;
    import org.openqa.selenium.OutputType;
    import org.openqa.selenium.TakesScreenshot;
    import java.io.File;
    import org.apache.commons.io.FileUtils;

    import org.testng.annotations.Test;         

    public class webDriverTakeScreenshot {
        public WebDriver driver;               

        @Test
        public void runDummyTest() throws Exception {
            driver = new FirefoxDriver();
            driver.get("http://www.testingexcellence.com");

            try {
                driver.findElement(By.id("dummyId")).click();
            }
            catch(Exception e) {
                System.out.println("Element Not Found");
                takeScreenshot();
            }
        }

        public void takeScreenshot() throws Exception {
            File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(scrFile, new File("C:\testresults\failed-test.png"));
        }
    }