---
layout: post
title: "Equivalence Partitioning"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Equivalence Partitioning Test Technique

The Equivalence Partitioning is a **[Black Box Test Technique](http://testingexcellence.com/black-box-testing)**. The idea behind the equivalence partitioning test technique is to eliminate the set of input data that make the system behave the same and yield the same result when testing a program.

Equivalence Partitioning is a common black box testing technique and aims to reduce the number of redundant test cases by eliminating those that generate the same output and do not necessarily reveal defects in a program functionality.

As the aim of testing is to find defects, then a successful test case is the one that does find a defect.

The process of equivalence partitioning technique involves identifying the set of data as an input condition that give the same result when executing a program and classifying them as a set of equivalent data (because they make the program behave in the same way and generate the same output) and partitioning them from another equivalent set of data.

Consider the example below:  
An application accepting integer values (that is whole number values) between -10,000 to +10,000 can be expected to be able to handle negative integers, zero and positive integers. Therefore, the set of input values can be divided into three partitions:

From -10,000 to -1, 0 and from 1 to 10,000

Moreover, it is expected that the system to behave the same for values inside each partition. i.e. the way the system handles -6391 will be the same as -9\. Likewise, positive integers, 5 and 3567 will be treated the same by the system. In this particular example, the value 0 is a single value partition. It is normally a good practice to have a special case for number zero.

It is important to note that this technique does not only apply to numbers. The technique can apply to any set of data that can be considered as an equivalent. E.g. an application that reads in images of only three types, .jpeg, .gif and .png, then three sets of valid equivalent classes can be identified.

An image with a .jpeg extension  
An image with a .gif extension  
An image with a .png extension

Now, opening a .jpeg file which is an image of the moon, will behave the same as a file with an image of a dog. Therefore, opening only one file of type .jpeg, will suffice the purpose of the test case. The assumption is that the system will behave the same for all jpeg files.

The same scenario applies to files with .gif and .png files. Likewise, if the application cannot open files other than the allowed and valid types, then trying to open a word document, the result will be the same as trying to open an excel spreadsheet or a text file. (Hopefully, the application has been designed well to cope with other file types and generates an appropriate message when attempting to open non-acceptable file types).

These would be classed as set of invalid equivalent data. Trying to open the application with non-acceptable or invalid file types is an example of negative testing, which is useful when combined with equivalence partitioning technique which partitions the set of equivalent acceptable and valid data.