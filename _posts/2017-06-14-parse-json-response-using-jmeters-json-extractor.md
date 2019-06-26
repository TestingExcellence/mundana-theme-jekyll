---
layout: post
title: "How to Parse a JSON Response Using JMeter's JSON Extractor"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---
As of JMeter 3.0, it’s far easier to extract data from JSON responses using the JSON variable extractor. JSON is an extremely simple data format which has taken over XML a few years ago.

An increasing number of REST APIs and servers, are using JSON as their primary data exchange format. Here, we will use JMeter to parse the JSON response.

If you don't have JMeter installed, read this article which explains [**how to install JMeter on Mac OS**](https://www.testingexcellence.com/install-jmeter-extra-plugins-mac-os-using-homebrew/).

**Related:**

*   **[How to Pass Variables Between Thread Groups](https://www.testingexcellence.com/jmeter-pass-variables-between-thread-groups/)**
*   **[How to Send a JSON File as Request in Body](https://www.testingexcellence.com/jmeter-tutorial-how-to-send-a-json-file-as-request-in-body/)**

Suppose we have a JSON response as follows:

    {
        "store": {
            "book": [
                {
                    "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95
                },
                {
                    "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99
                }
            ],
            "bicycle": {
                "color": "red",
                "price": 19.95
            }
        },
        "expensive": 10
    }

To parse the above JSON with JMeter, we need to add the JSON Extractor to our test plan.

Right click on Test Plan --> Add --> Post Processors --> JSON Extractor

[![jmeter json extractor parser](https://www.testingexcellence.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-14-at-11.34.27-300x143.png)](https://www.testingexcellence.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-14-at-11.34.27.png)

Now, we should see the following view:

[![json extractor jmeter](https://www.testingexcellence.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-14-at-11.38.32-300x122.png)](https://www.testingexcellence.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-14-at-11.38.32.png)

In the JSON Path expressions field, we can insert our JSON path to parse the JSON response

Here are some example Json Path expressions that can be used to extract data from the Json document exposed above:

<table>

<thead>

<tr>

<th align="left">JsonPath</th>

<th align="left">Result</th>

</tr>

</thead>

<tbody>

<tr>

<td align="left">$.store.book[*].author</td>

<td align="left">The authors of all books</td>

</tr>

<tr>

<td align="left">$..author</td>

<td align="left">All authors</td>

</tr>

<tr>

<td align="left">$.store.*</td>

<td align="left">All things, both books and bicycles</td>

</tr>

<tr>

<td align="left">$.store..price</td>

<td align="left">The price of everything</td>

</tr>

<tr>

<td align="left">$..book[0,1]</td>

<td align="left">The first two books</td>

</tr>

<tr>

<td align="left">$..book[:2]</td>

<td align="left">All books from index 0 (inclusive) until index 2 (exclusive)</td>

</tr>

<tr>

<td align="left">$..book[2:]</td>

<td align="left">Book number two from tail</td>

</tr>

<tr>

<td align="left">$..book[?(@.isbn)]</td>

<td align="left">All books with an ISBN number</td>

</tr>

<tr>

<td align="left">$.store.book[?(@.price < 10)]</td>

<td align="left">All books in store cheaper than 10</td>

</tr>

<tr>

<td align="left">$..book[?(@.price <= $[‘expensive’])]</td>

<td align="left">All books in store that are not “expensive”</td>

</tr>

<tr>

<td align="left">$..book[?(@.author =~ /.*REES/i)]</td>

<td align="left">All books matching regex (ignore case)</td>

</tr>

<tr>

<td align="left">$..*</td>

<td align="left">Give me every thing</td>

</tr>

<tr>

<td align="left">$..book.length()</td>

<td align="left">The number of books</td>

</tr>

</tbody>

</table>