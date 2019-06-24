---
layout: post
title: "CSS Selectors in Selenium WebDriver with Example"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## CSS Selectors Tutorial

How to use CSS selectors in Selenium WebDriver? This tutorial shows how to locate web elements using CSS selectors.

One of the most important aspects of test automation is to be able to identify different elements on the page to interact with. Locating elements by CSS is the preferred way as it is faster than XPath.

In WebDriver, in order to interact with a web element, such as clicking, or typing, we first need to locate the elements.

**[There are different ways we can locate elements in WebDriver.](http://www.testingexcellence.com/how-to-locate-web-elements-in-webdriver/) **In this tutorial, we look at how we can use CSS Selectors in detail with different examples to interact with web elements.

Using CSS selectors to locate elements has some benefits:

*   It’s faster
*   More readable
*   And used more often

https://www.testingexcellence.com/click-link-href-value-webdriver/

### **Locating Elements by Attribute**

Let's imagine we have a tag with the following attributes [id, class, name, value]

    <input type="text" id="fistname" name="first_name" class="myForm">

The generic way of locating elements by their attribute in CSS Selectors is

    css = element_name[<attribute_name>='<value>']

e.g. `css=input[name='first_name']`

We can use the same approach to locate by id and class attributes, however, there are short forms that we can use to make it more readable.

In CSS, we can use **#** notation to select the id:

    css="input#firstname" or just css="#firstname"

We can also use the **.** notation to select the class

    css="input.myForm" or just css=".myForm"

Take extra care when using the short form notations, especially the **.** class notation as there could be many web elements on the HTML source with the same class attribute.

https://www.testingexcellence.com/webdriver-explicit-implicit-fluent-wait/

### **Locating elements with More Than One Attribute**

Sometimes there is a need to be more specific with the selection criteria in order to locate the correct element.

Suppose you have an HTML snippet as below

    <div class="ajax_enabled" style="display:block">

The value of the display could either be "none" or "block" depending on the ajax call. In this situation, we have to locate the element by both class and style.

We could use

    css="div[class='ajax_enabled'] [style='display:block']"

### **Locating Child Element**

    <div id="child"><img src="./logo.png"></div>

To locate the image tag, we would use:

    css="div#child img"

There are occasions when there are multiple child elements within the same parent element such as list elements

    <ul id="fruit">
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
    </ul>

As can be seen, the individual list elements don't have any id associated with them. If we want to locate the element with text 'Orange', we have to use "nth-of-type"

    css="ul#fruit li:nth-of-type(2)"

Similarly, if we need to select the last child element, i.e. 'Banana', we can use

    css="ul#fruit li:last-child"

### **Strings and Randomly Generated Ids**

We can also use string matchers to locate elements. This is particularly useful when we want to find elements that start with a certain character(s), end with a certain character(s) or contain a particular character(s).

#### Starts with, Ends with and Contains

In this example, all the three div elements contain the word 'random'.

    <div id="123_randomId">
    <div id="randomId_456">
    <div id="123_pattern_randomId">

If we want to select the first div element, we would use **^=** which means 'starts with':

    css="div[id^='123']"

To select the second div element, we would use **$=** which means 'ends with':

    css="div[id$='456']"

And to select the last div element we would use ***=** which means 'sub-string'

    css="div[id*='_pattern_']"

We can also use the 'contains'

    css="div:contains(_pattern_)"

### **Attribute NOT contain a specific value**

In WebDriver, how do you find elements whose attribute contain values which you don't want to select? This CSS selector example shows how NOT to select by specific attribute value

Suppose you have many elements which share the same attribute and attribute value, but some of those elements have other variables appended to the value. e.g:

    <div class="day past calendar-day-2017-02-13 calendar-dow-1 unavailable">
    <div class="day today calendar-day-2017-02-14 calendar-dow-2 unavailable">
    <div class="day calendar-day-2017-02-15 calendar-dow-3">
    <div class="day calendar-day-2017-02-16 calendar-dow-4">

In the above snippet, we want to select an available day (i.e. the two last divs)

As can be seen, all four divs contain "calendar-day-" but the first two also contain "unavailable" which we don't want.

The CSS selector for Not selecting the first two divs is

    css = "div[class*=calendar-day-]:not([class*='unavailable'])"