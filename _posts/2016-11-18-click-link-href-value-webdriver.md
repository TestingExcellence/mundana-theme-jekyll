---
layout: post
title: "How to Click a Link by href value in WebDriver"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In Selenium WebDriver, there are a number of ways we can interact with web elements, such as by element's ID, XPath, CSS, etc...

We can also click links by **linkText** or **partialLinkText**. These methods are good if we know the expected text between the <a></a> tags. However when we do localization or internationalization testing, the text is translated accordingly and we are no longer able to use linkText or partialLinkText, especially if the anchor tags don't contain any ID or class.

Suppose we want to click a link which points to profile.html,

e.g.

    <a href="http://www.abc.com/account/profile.html">View Profile</a>

As mentioned earlier, we can use

    driver.findElement(By.linkText("View Profile")).click()

and that will work, as long as we are on a page with English language.

When we change the language to German, for example, our link now displays

    <a href="http://www.abc.com/account/profile.html">Profil ansehen</a>

Now, the line

    driver.findElement(By.linkText("View Profile")).click()

would fail because there is no link on the profile page with that text.

One way to overcome this is to click a link by its href value, because even when the language of the site changes the href link should still point to the same location. In other words, internationalization shouldn't impact the href of the links.

WebDriver doesn't have a standalone and direct way of clicking a link by its href value. Instead, we need to get all the links in the page, extract the href attribute and then compare the href values with what we expect.

https://www.testingexcellence.com/webdriver-explicit-implicit-fluent-wait/

### **Click Link By href**

Suppose we have the following links and we want to click on the profile link

    <a href="http://abc.com/account/profile.html">View Profile</a>

    <a href="http://abc.com/account/transactions.html">Transactions</a>

    public void clickLinkByHref(String href) {
            List<WebElement> anchors = driver.findElements(By.tagName("a");
            Iterator<WebElement> i = anchors.iterator();

            while(i.hasNext()) {
                WebElement anchor = i.next();
                if(anchor.getAttribute("href").contains(href)) {
                    anchor.click();
                    break;
                }
            }
        }

Then we can use `clickLinkByHref("Profile")`

and then the above function will get all the links on the page and iterate through them and when it finds a link which contains profile, WebDriver will click the link.

Note, if we have several links with the word profile in them, the above function will always click the first link containing the word profile. We can modify the above code to include which of the links we want to click:

    public void clickLinkByHref(String href, int position) {
            List<WebElement> anchors = driver.findElements(By.tagName("a");
            Iterator<WebElement> i = anchors.iterator();

            int j = 0;
            while(i.hasNext()) {
                WebElement anchor = i.next();

                if(anchor.getAttribute("href").contains(href)) {
                    j++;
                }

                if(anchor.getAttribute("href").contains(href)
                        && j == position) {
                    anchor.click();
                    break;
                }
            }
        }