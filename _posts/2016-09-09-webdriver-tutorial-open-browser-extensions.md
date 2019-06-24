---
layout: post
title: "WebDriver Tutorial - How to Open a Browser With Extensions"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In this WebDriver tutorial we look at how we can use WebDriver to open Chrome and FireFox browsers with extensions using ChromeOptions and FirefoxProfile.

### Open Chrome Browser With Extensions

    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.chrome.ChromeDriver;
    import org.openqa.selenium.chrome.ChromeOptions;

    import java.io.File;

    public class Tutorials {

        WebDriver driver;

        public void openChromwWithExtensions() {
            ChromeOptions options = new ChromeOptions();
            options.addExtensions(new File("src\test\resources\extensions\extension.crx"));
            driver = new ChromeDriver(options);
        }
    }

This will open a Chrome browser with the specified extension.

### Open FireFox Browser with Extensions

    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.firefox.FirefoxDriver;
    import org.openqa.selenium.firefox.FirefoxProfile;

    import java.io.File;
    import java.io.IOException;

    public class Tutorials {

        WebDriver driver;

        public void openFireFoxWithFirebug() {
            String firebugFilePath = "C:\FF_addons\firebug.xpi";
            FirefoxProfile profile = new FirefoxProfile();
            try {
                profile.addExtension(new File(firebugFilePath));
    // Add more FF addons if required
            } catch (IOException err) {

            }
            driver = new FirefoxDriver(profile);
        }
    }

This will open FireFox Browser with Firebug addon.