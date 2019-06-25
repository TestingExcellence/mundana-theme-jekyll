---
layout: post
title: "How To Pass Cookies From Selenium WebDriver To Rest-Assured"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

How to pass cookies from Selenium WebDriver to Rest-Assured? When you do automated testing at API and UI layer, there could be situations where you are doing both and that you need to pass properties from your API test to you UI test or vice versa.

In this example, we show how to pass cookies from Selenium WebDriver to Rest-Assured using Java.

*   **[WebDriver - How to restore cookies in a new browser window](https://www.testingexcellence.com/webdriver-how-to-restore-cookies-in-new-browser-window/)**
*   **[WebDriver - How to create, update and delete cookies](https://www.testingexcellence.com/how-to-create-update-and-delete-cookies-in-webdriver/)**

## Pass Cookies from Selenium to Rest-Assured

    import io.restassured.RestAssured;
    import io.restassured.http.Cookies;
    import org.openqa.selenium.Cookie;
    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.chrome.ChromeDriver;
    import org.testng.annotations.Test;

    import java.util.ArrayList;
    import java.util.List;
    import java.util.Set;

    import static io.restassured.RestAssured.given;

    public class RestAssuredWebDriverCookie {

        @Test
        public void cookieTest() {
            WebDriver driver = new ChromeDriver();

            driver.navigate().to("http://www.someurl.com");

            Set<Cookie> seleniumCookies = driver.manage().getCookies();

            // This is where the Cookies will live going forward
            List restAssuredCookies = new ArrayList();

            // Simply pull all the cookies into Rest-Assured
            for (org.openqa.selenium.Cookie cookie : seleniumCookies) {
                restAssuredCookies.add(new io.restassured.http.Cookie.Builder(cookie.getName(), cookie.getValue()).build());
            }

            // Pass them into the Rest-Assured Call
            given().spec(RestAssured.requestSpecification)
                    .basePath("/some-path")
                    .cookies(new Cookies(restAssuredCookies))
                    .queryParam("id", "1234")
                    .get()
                    .then().statusCode(200);
        }
    }