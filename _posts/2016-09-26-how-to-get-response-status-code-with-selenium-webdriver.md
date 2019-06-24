---
layout: post
title: "How to get Response Status Code with Selenium WebDriver"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Quite often when you are running automated checks with Selenium WebDriver, you also want to check the response status code for a resource, such as a web service or other web pages on the site. You can also check for broken links on the site as you are executing Selenium WebDriver scripts.

Let's review the different HTTP status codes:

2xx - OK  
3xx - Redirection  
4xx - Resource not found  
5xx - Server error

In Selenium WebDriver there is no direct method to check the response status code, so we have to use another library for this. We can use [Apache HttpClient](https://hc.apache.org/httpcomponents-client-ga/) or I prefer to use [REST-assured library from Jayway](https://github.com/jayway/rest-assured)

https://www.testingexcellence.com/webdriver-headless-mode-chrome-driver/

To get the response code using REST-assured we can use:

    import io.restassured.RestAssured;

    public class HttpResponseCode {

        public int httpResponseCodeViaGet(String url) {
                return RestAssured.get(url).statusCode();
        }

        public int httpResponseCodeViaPost(String url) {
            return RestAssured.post(url).statusCode();
        }

        public static void main(String args[]) {
            new HttpResponseCode().httpResponseCodeViaGet("http://www.google.com");
        }
    }

Output: 200

To check for broken links on the page while executing Selenium WebDriver tests, we can use:

    import org.openqa.selenium.By;
    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.WebElement;
    import org.openqa.selenium.firefox.FirefoxDriver;

    import java.util.List;

    public class HttpResponseCode {

        WebDriver driver;
        int statusCode

        public void checkBrokenLinks() {
            driver = new FirefoxDriver();
            driver.get("http://www.testingexcellence.com");

    //Get all the links on the page
            List<WebElement> links = driver.findElements(By.cssSelector("a"));

            String href;

            for(WebElement link : links) {
                href = link.getAttribute("href");
                statusCode = new HttpResponseCode().httpResponseCodeViaGet(href);

                if(200 != statusCode) {
                    System.out.println(href + " gave a response code of " + statusCode);
                }
            }
        }

        public static void main(String args[]) {
            new HttpResponseCode().checkBrokenLinks();
        }
    }

https://www.testingexcellence.com/capture-network-traffic-xhr-cypress/