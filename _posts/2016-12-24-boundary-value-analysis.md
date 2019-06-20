---
layout: post
title: "Boundary Value Analysis"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Boundary Value Analysis Test Technique

[caption id="attachment_10165" align="aligncenter" width="532"]![boundary-value-analysis-test-technique](http://69.164.212.71/wp-content/uploads/2008/11/boundary-value-analysis.jpg) boundary-value-analysis-test-technique[/caption]

Boundary value analysis, BVA, tests the behavior of a program at the boundaries. When checking a range of values, after selecting the set of data that lie in the valid partitions, next is to check how the program behaves at the boundary values of the valid partitions. Boundary value analysis is most common when checking a range of numbers.

For each range, there are two boundaries, the lower boundary (start of the range) and the upper boundary (end of the range) and the boundaries are the beginning and end of each valid partition. We should design test cases which exercises the program functionality at the boundaries, and with values just inside and just outside the boundaries.

Here, the assumption is that if the program works correctly for these extreme cases, then it will work correctly for all values in between the valid partition. Testing has shown that defects that arise when checking a range of values the most defects are near or at the boundaries.

### Boundary Value Analysis Example

A program which accepts an integer in the range **-100** to **+100**, there would be three sets of valid equivalent partitions: these are -10 to -1, the negative range  
0, Zero and 1 to 10, the positive range.

For each range, there are minimum and maximum values at each boundary. For the negative range the lower boundary is -10 and the upper boundary is -1\. At each boundary, three conditions should be checked.

-101, **-100**, -99 … … … … … … -2, **-1**,

0, -1, **0**, +1

0, **1**, 2 … … … … … … 99, **100**, 101

You might have noticed that by selecting values at the boundaries for each partition there are some values that overlap. That is they would appear in our test conditions when we check the boundaries. We should of course make redundant those values that overlap to eliminate unnecessary test cases.

Another worthy note to consider is that because the range goes from -100 to +100, then effectively, the “boundary values” -2, -1 and -99 are considered as equivalent. That is, the behavior of the system is the same (or should be the same) when testing with values -99, -2 and -1.

However, because -99 is close to the upper limit boundary, and is most likely to reveal defects, we keep the value -99 in our test case and scrap conditions for -2 and -1\. The same applies to the positive range boundaries, that is, +1, +2 and +99 are expected to give the same behavior. However, because 99 is close to the upper range boundary, we keep 99 in our list of data to test and get rid of values 1 and 2.

Therefore, our list of data to check at the boundaries become

-101, **-100**, -99 … … … … … … 0 … … … … … … 99, **100**, 101

If our range of data was from 0 to +10 then the boundary value analysis would give us the following values to test:

-1, **0**, 1 … … … … … …9, **10**, 11

Here, 1 and 9 are both part of the test condition because each are at the boundary of the whole range and can reveal defects.

It is important to note that that boundary values analysis can be applied to float numbers as well as integers. The only difference is that when analyzing boundaries for float numbers, we should test to the closest decimal point.

Example, if we have a range from 5.5 to 9.9, then the set of data at boundaries becomes

5.4, **5.5**, 5.6 … … … … … … 9.8, **9.9**, 10.0

[Like Equivalence Partitioning Test Technique](http://www.testingexcellence.com/equivalence-partitioning/ "Equivalence Partitioning Test Technique"), Boundary Value Analysis is a common black box testing technique and is one which must be applied when checking a range of values. Together with equivalence partitioning and [negative testing](http://www.testingexcellence.com/no-thing-negative-testing/ "Negative Testing"), it can be a very powerful black box testing technique to find defects when testing a range of values.