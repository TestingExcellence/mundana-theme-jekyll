---
layout: post
title: "WebDriver Wait for AJAX Call to Complete"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

### How to wait for an AJAX call to complete in WebDriver

Many web applications built on Web 2.0 technology, contain [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming) "AJAX") calls. AJAX calls don't refresh the whole page, only a certain part of a page is refreshed. When an AJAX call is made, while the page is waiting for a response from the server, a waiting icon appears on the page to inform the user, the page is waiting for information, this could be either a rotating circle, or a loading horizontal bar, etc...

WebDriver is clever enough to wait for the whole page to load before doing any action and without the user having to specify a wait for page to load. However, in case of AJAX calls, because the whole page is not refreshed, WebDriver has no way of knowing something is happening.

In normal cases, the waiting icon has a css style attribute such as

    <div class="rotating-icon"; style="display: none"></div>

for when the AJAX call is not started or already completed, and

    <div class="rotating-icon"; style="display: block"></div>

when the section is waiting for response from the server. When the display is block the user sees the waiting icon on the page.

The css attribute changes dynamically when the user sends a request and when the request-response is completed. Luckily in WebDriver we can get the value of a tag attribute and check against an expected value. e.g.

    driver.findElement(By.cssSelector(".rotating-icon")).getAttribute();

This would either output "block" or "none" depending on the state of the request.

Before we can verify an automated check, we have to wait for the AJAX call to complete, therefore we need to have a waiting mechanism to check when the css attribute of a web element changes, before we start our verifications, otherwise the checks would fail.

The code snippets below shows how to Wait while the element contains a certain attribute value

    public void waitWhileElementHasAttributeValue(String locator,
                                                      String attribute, String value) {
            while(driver.findElement(LocatorStrategy.getLocatorMethod(locator)).getAttribute(attribute).contains(value)) {
                int timeout = 10;
                if(timeout > 0) {
                    timeout--;
                    try {
                        System.out.println(attribute + "t" + value);
                        Thread.sleep(1000);
                    } catch(Exception e) {

                    }
                }
            }
        }

The above function will wait while the element contains the attribute value. It checks the page every second and once the value of the attribute changes, it breaks out of the while loop or throws an exception if it times out, in this case 10 seconds.

The LocatorStrategy class is a custom class that determines the By type of an element when we send the locator as string:

    public final class LocatorStrategy {

        public static By getLocatorMethod(String locatorMethod) {
            String locator = locatorMethod.split("=")[1];

            if (locatorMethod.startsWith("id")) {
                return By.id(locator);
            } else if (locatorMethod.startsWith("name")) {
                return By.name(locator);
            } else if (locatorMethod.startsWith("css")) {
                return By.cssSelector(locator);
            } else if (locatorMethod.startsWith("xpath")) {
                return By.xpath(locator);
            } else if (locatorMethod.startsWith("class")) {
                return By.className(locator);
            } else if (locatorMethod.startsWith("linkText")) {
                return By.linkText(locator);
            } else if (locatorMethod.startsWith("partialLinkText")) {
                return By.partialLinkText(locator);
            } else if (locatorMethod.startsWith("tagName")) {
                return By.tagName(locator);
            } else {
                return null;
            }
        }
    }

When we send an AJAX request, the attribute value of style changes from "none" to "block", therefore we have to wait while the element contains the attribute value "block" and then continue with our verification.

Using the above methods, we can simply call

    waitWhileElementHasAttributeValue("css=div.rotating-icon", "style", "block")