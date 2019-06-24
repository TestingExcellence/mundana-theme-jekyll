---
layout: post
title: "How to Test Carousel Rotation with Selenium Webdriver"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

Some websites have carousel with rotating items in the list. In this webdriver tutorial we look at how to test and verify carousel rotation with webdriver.

For this tutorial, we are going to use amazon.com to demonstrate the testing of carousel.

![carousel-test-webdriver](http://69.164.212.71/wp-content/uploads/2015/09/carousel-test-webdriver-e1442166899361.png)

when we inspect the elements in carousel, the structure is like:

![carousel-test-webdriver-2](http://69.164.212.71/wp-content/uploads/2015/09/carousel-test-webdriver-2-e1442168891770.png)

When we click on the arrows, the content of the carousel changes and then we can verify that the text of the items have changed.

Each `<li>` element is an item of the carousel, so we need to get the text (item's name) of each item.

    public class CarouselTest {

        public void test() {

            //This will get the number of items in the carousel
            String selector = "li[class^=a-carousel-card]";
            ArrayList items = driver.findElements(By.cssSelector(selector));

            ArrayList list1 = new ArrayList();
            String name;

            for (int i = 0; i < items; i++) {
                int index = i + 1;

                //This will get the name of each item in carousel
                name = driver.findElement(By.cssSelector(selector + "[" + index + "]")).getText();
                list1.add(name);
            }

            //Next we click on the arrow of the carousel
            driver.findElement(By.cssSelector("div[class^=a-carousel-col] a")).click();

            //Then we new items are loaded in the carousel following the click,
            //we get the names again

            ArrayList nextItems = driver.findElements(By.cssSelector(selector));

            ArrayList list2 = new ArrayList();

            String newName;

            for (int i = 0; i < nextItems; i++) {
                int index = i + 1;

                //This will get the name of each item in carousel
                newName = driver.findElement(By.cssSelector(selector + "[" + index + "]")).getText();
                list2.add(newName);
            }

            //Then we compare the two arrayLists are not the same
            ArrayList commonList = CollectionUtils.retainAll(list1, list2);

            Assert.assertTrue(commonList.size() == 0);
        }
    }