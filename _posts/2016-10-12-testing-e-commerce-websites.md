---
layout: post
title: "Testing E-commerce Websites"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Guidelines for Testing E-commerce Websites

Testing E-commerce Websites requires knowledge of web testing techniques and the e-commerce domain.

Most E-commerce Websites share a general common theme and structure, e.g:

*   Homepage
*   Search Results Page
*   Product Details Page
*   Order Form Page
*   Order Confirmation Page
*   Login Form Page and Accounts Pages

Of course, there are many other pages on a typical e-commerce website, but the main core user journey would entail touching the above pages and that's where testing e-commerce websites should focus on: **The Checkout Journey.**

These "front-end" pages most likely communicate with "back-end" web services, such as Product Search Service, Content Service, Booking Engine, Payment Services, Accounts Services, etc. Therefore, it is important when testing e-commerce websites that we test individual services in isolation as well as integrated as a whole system.

A typical **[user journey flow](https://www.testingexcellence.com/can-you-really-automate-a-user-journey/)** would start at the homepage, or a product landing page, searching for a product, reviewing the product, adding product(s) to the shopping cart, fill in order details and payment details and submitting the order.

## Ideas for Testing E-commerce Websites

We have already discussed **[tips and guidelines for testing web applications](https://www.testingexcellence.com/web-testing-tips-how-to-test-web-applications/)** and common test methods and test techniques for web application testing which are also applicable to testing e-commerce websites.

In this article, we examine some common test cases which are specific for testing e-commerce websites. The ideas presented here are some generic high-level test cases which are applicable to most e-commerce websites, and you can use this guide to get started with testing e-commerce websites.

### **Testing Shopping Cart**

Shopping carts are one of the main features of an e-commerce website and thus form the centerpiece of testing e-commerce websites. It allows for customers to select and store multiple items in the cart and purchase them all at once.

Nowadays, shopping carts have become "intelligent" in a sense that they remember what items you store in them so you can retrieve them at a later date or even from another device.

In most cases, cookies are used to store cart data or if the user has an active account and is logged in, a session id can be stored against the user in the database. Either way, there are some key test cases which should be part of testing a shopping cart.

**Add one item to the cart** - the cart should be updated with the item with correct name, image, and price.

**Increase the quantity of the item from the cart** - the price should be updated to reflect the correct figure.

**Add the same item multiple times** - there should be one item in the cart, but the quantity should reflect the number of additions and the total price should reflect the sum of the price of each item.

**Add multiple items of different types** - For each item added, we should see a corresponding name, image, and price and total price of all items.

**Remove some items from the cart** - the cart should update showing the existing items in the cart, total price should reflect the new sum.

**Remove all items from the cart** - cart balance should be zero, no items should be displayed in the cart.

**Click on an item in the cart** - we should be able to see more information about the product we just clicked either as a popup or redirecting to the product page.

**Add item(s) to the cart, close the browser and reopen the same site** - ideally, the cart should still hold your items. N.B this particularly depends on the requirements on how the cart should behave.

**Coupons** - need to check that the price of the cart is discounted when we apply a coupon and not discounted when we apply an invalid or expired coupon.

### **Search Form, Sorting, Filtering, Pagination**

The search form is usually present on multiple pages to allow users to search for products wherever they are on the site. Therefore, it is important that the search feature is tested on applicable pages.

Most probably the code for the search module is reused in multiple pages or templates, or it could be part of the header section which is displayed across the whole site. If this is the case, the behavior of the search feature should be the same wherever it occurs and running all test cases on all pages is a waste of exercise.

Testing e-commerce websites wouldn't be fun without testing the most feature rich page on the site, the Search Results Page.

When we search for a product, we get redirected to the Search Results Page (SRP) with all the relevant items we searched for. There are many things to check for and many features to test, but the three features that are of most important and relevant specifically to SRP are sorting, filtering and pagination.

**Relevant products** - check that the products displayed are related to what was searched for.

**Product information** - the products should display an image, name, price and maybe customer ratings and number of reviews.

**The number of products per page** - check that the number of products per page matches the requirement.

**Pagination** - check that all items on next page are different to the previous page, i.e. no duplicates

**Sorting** - there could be four to five options to select from a drop-down menu. Sorting is usually single-select, i.e. you can sort by one parameter only.

**Sorting and Pagination** - when there are products in multiple pages when you sort by a parameter, the sort order should remain as you paginate, or more products loaded (if it is an Ajax load)

**Filtering** - unlike sort option, filter options are multi-select, that is you can filter by multiple parameters. It is a good idea to explore single filters and multi-filter options.

**Filtering and Pagination** - Again, this is important, when we filter in one page, ideally, as we paginate we would want the filter to be applied throughout.

**Sorting and Filtering** - an important test case is mixing the sorting and filtering options together, e.g. filter by price and then sort by price high-to-low, or the other way round. Whilst the individual features on their own might work correctly, when combined with another feature, the functionality of one or both features might break, so it is essential that we check the results when combining filtering with sorting.

**Sorting, Filtering, and Pagination** - this is checking that when both sort and filter have been applied, they remain as we paginate or more products are loaded.

### **Create Account and Login**

Some e-commerce websites allow you to purchase an item as a guest, i.e. without the need to create an account, and then an optional step to create an account when an order is placed.

When an account is created, the user can log in at any stage during a purchasing journey. It is important that we test all these variations along the user journey when testing e-commerce websites.

**Purchase an item as a guest** - If the site permits, test that you can purchase an item without having to create an account.

**Existing and new accounts** - purchase an item with an existing account and with a newly created account.

**Create an account and log in before purchase** - this is to test that the item you purchase gets added and connected to the correct account. Also, you should not be prompted to log in again once you have already been logged in.

**Login redirects** - check the behavior of login feature on different pages. Some sites redirect the user back to the same page where they clicked the login link and some sites redirect the user to the accounts pages. This should be tested thoroughly.

**Login session** - when you log in check that you stay logged in as you browse products. Also, you need to test the behavior when the user doesn't interact with the site for some time. Will the session expire after a period of time? Make sure the user has actually been logged out after the session times out.

**Login and Logout** - when you are logged in, log out and make sure you are logged out and that you cannot access any of the accounts pages.

### **Payments**

Payments are an essential part of testing e-commerce websites. After all, this is what allows users to purchase their items without the need to call a number to place their order.

**Payment types** - Different payment types should all be tested, e.g. Credit Card, Paypal, Bank Transfers, Instalments, etc

**Card Details Storage** - does the site store customer's credit card details? If so are they securely stored? Is it [**PCI compliant**](https://www.pcisecuritystandards.org/)?

### **Post-Purchase Test**

When we place an order, there are many actions that users can do related to their purchase. Testing the post-purchase functionality is also an important aspect of testing e-commerce websites. These could be:

*   Cancel the order or change the quantity of the order
*   Review your recent order and history of purchased items
*   Changes to the account, such as billing address, shipping address, password, profile information such as name, email address and even deleting an account.

No doubt that testing e-commerce websites is challenging and requires a lot of skill. This article is just the tip of the iceberg of all the relevant test cases that can be executed when testing e-commerce websites and it can be used as a starting point.

There are a lot more functionalities to be tested as part of testing e-commerce websites such as:

*   Product carousels and recommended products.
*   Correct display of information on the Product Details Page which is usually content heavy.
*   Database of product - how is the data modified after an item is purchased?
*   Warehouse System - how is the warehouse or third-party gets notified when an order is placed?
*   Contacting the customer, confirmation emails, contents of the email, returns, complaints, etc...

What's most important when testing e-commerce websites, is to make sure that each feature has correctly implemented its requirements.