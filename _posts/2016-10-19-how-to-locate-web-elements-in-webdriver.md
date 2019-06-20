---
layout: post
title: "How to Locate Web Elements in WebDriver"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

One of the most important skills of a test automation engineer working with Selenium WebDriver is to be able to use appropriate methods to locate elements on a page.

As a user, the first thing you do when opening a web page is to try to find the part of the page you’re interested in. This could be clicking on a link, verifying a message is displayed or clicking a button to submit a form. As such, WebDriver provides a wide variety of methods to locate elements on a page.

Without the ability to find those elements, it’s not possible to do any interaction with the page. This makes the techniques necessary to do so incredibly important.

This tutorial covers all the main methods for locating elements on a page.

## What is a search context?

WebDriver users the `SearchContext` interface to locate elements on any page. The `SearchContext` interface has two methods:

    public interface SearchContext {
        List findElements(By by);
        WebElement findElement(By by);
    }

This interface provides two methods. The first method finds all the elements that match an instance of what is known as a locator, and the second method finds the first element that matches or throws a `NoSuchElementException` if it is not found.

That means the `findElements` method is useful for finding elements when you’re not sure if they will be on the page, or if you want to make sure they’re **not** on the page.

## What is a locator?

A locator describes what you want to find on a page. In Java, we create a locator by using the `By` class.

For example, if we wanted to find an `h1` heading element on a page, we would write

    WebElement h1Element = driver.findElement(By.tagName("h1"));

Or, if we wanted to find all the paragraph elements on a page, we would use

    List pElements = driver.findElements(By.tagName("p"));

### By link text

This method locates elements by the exact text it displays. This method is normally the preferred locator for links on a page.

For example, suppose we have this link on a page:

    <a href="#" id="change-password" class="btn" >Forgotten Password</a>

Then, the link can be located using:

    driver.findElement(By.linkText("Forgotten Password"));

### By partial link text

When we are not sure of the exact wording of the link text but want to find a link or links that **contains** a given text, we can use

    driver.findElement(By.partialLinkText("Forgotten "));

or

    driver.findElement(By.partialLinkText("Password"));

You should be careful when using `findElement` with this locator as there could be other elements that contain the same partial text, so this should not be used to locate a single element on its own. It is best to use it to locate a group of elements using the `findElements`method.

### By class attribute

This locates elements by the value of the class attribute. This can be used only for those elements having a class attribute, but it is not a good selector to use with the `findElement` method.

The class attribute is used for styling pages, and so chances are that many elements are likely to have the same class. As `findElement` always returns the first element it finds, if the element you want is not in the first place, you won’t be able to use this to locate it.

Using the same example above with the link, the “Forgotten Password” link has one CSS class: `btn` which can be used to locate it

    <a id="change-password" class="btn" href="#">Forgotten Password</a>

Then, the link can be located using:

    driver.findElement(By.className("btn"));

### By id

Locates elements by the value of their id attribute. The link in the above example has an id that we can use:

    <a id="change-password" class="btn" href="#">Forgotten Password</a>

Then, the link can be located using:

    driver.findElement(By.id("change-password"));

If ID is available, then it should be used as the first preferred choice.

### By name

Locates elements by the value of their name attribute. Normally it can only be used to locate form elements built using: `<input>` , `<button>` , `<select>` , and `<textarea>` .

On a typical login page, you have input fields which could be like:

    <input class="form-control" name="email" type="text" placeholder="Email" />

We can then locate the email field by the input name attribute

    driver.findElement(By.name("email"));

### By tag name

This locator finds elements by their HTML tag name. Since there are often many repeating uses of most tags, it is not often possible to use this method to locate a single element. But it can be combined with other locators to effectively locate elements. One time you will find it useful is for locating the page’s heading, as there is usually only one of these:

    <h1>Welcome to SDET World!</h1>

We can then locate the email field by the input name attribute

    driver.findElement(By.tagName("h1"));

### By Css selectors

Locates elements via the driver’s underlying W3 CSS Selector engine. CSS selector locator is powerful as it can be used to locate any element on a page.

    <a id="change-password" class="btn" href="./some-link">Forgotten Password</a>

We can then locate the email field by the input name attribute

    driver.findElement(By.cssSelector("#change-password"));

Here, `#` represents id of the element. And the `.` notation represents the class attribute of an element.

For example:

    driver.findElement(By.cssSelector(".btn"));

### By XPath

XPath locators are the most complex selector to use. It requires knowledge in XPath query language, so if you’re not fluent in that query language, you will find it difficult to find elements using XPath queries.

Let’s look at an example usage of an XPath for this HTML:

    <a id="change-password" href="#">Change Password</a>

We can then locate the email field by the input name attribute

    driver.findElement(By.xpath("//a[@id='change-password']"));