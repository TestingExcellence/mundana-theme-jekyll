---
layout: post
title: "How to Create, Update and Delete Cookies in WebDriver"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Almost all websites use cookies in one form or another. **[Cookies](http://en.wikipedia.org/wiki/HTTP_cookie)** are a way of remembering users and their interaction with the site by storing information in the cookie file as key-value pairs.

When testing a website with Selenium WebDriver, sometimes it is necessary to handle cookies, such as creating new cookies, updating existing cookies with new information or deleting cookies.

In this WebDriver tutorial, we look at handling cookies in WebDriver. Java code examples of how to create, update and delete cookies using Selenium WebDriver.

https://www.testingexcellence.com/cookies-selenium-webdriver-rest-assured/

To use any of the cookie handling methods in WebDriver, we first need to import the Cookie class. To do that, we use

    import org.openqa.selenium.Cookie;

### Retrieve All Cookies

    //This method gets all the cookies
    public Set<Cookie> getAllCookies() {
            return driver.manage().getCookies();
            }

### Retrieve a named cookie

    //This method gets a specified cookie
    public Cookie getCookieNamed(String name) {
            return driver.manage().getCookieNamed(name);
            }

### Retrieve the value of a cookie

    //This method gets the value of a specified cookie
    public String getValueOfCookieNamed(String name) {
            return driver.manage().getCookieNamed(name).getValue();
            }

### Add a Cookie

    //This method adds or creates a cookie
    public void addCookie(String name, String value, String domain, String path, Date expiry) {
            driver.manage().addCookie(
            new Cookie(name, value, domain, path, expiry));
            }

### Add a set of cookies

    //This method adds set of cookies for a domain
    public void addCookiesToBrowser(Set<Cookie> cookies, String domain) {
            for (Cookie c : cookies) {
                if (c != null) {
                    if (c.getDomain().contains(domain)){
                        driver.manage().addCookie(
                        new Cookie(name, value, domain, path, expiry));
                    }
                }
            }
            driver.navigate().refresh();
    }

### Delete a specific Cookie

    //This method deletes a specific cookie
    public void deleteCookieNamed(String name) {
            driver.manage().deleteCookieNamed(name);
            }

### Delete all Cookies

    //This method deletes all cookies
    public void deleteAllCookies() {
            driver.manage().deleteAllCookies();
            }