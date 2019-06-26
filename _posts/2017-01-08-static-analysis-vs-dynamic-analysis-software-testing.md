---
layout: post
title: "Static Analysis vs Dynamic Analysis in Software Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## ![static analysis vs dynamic analysis](http://69.164.212.71/wp-content/uploads/2016/03/static-analysis-vs-dynamic-analysis.jpeg)

## What is Static Analysis?

Static analysis involves no dynamic execution of the software under test and can detect possible defects in an early stage, before running the program.

Static analysis is done after coding and before executing unit tests.

Static analysis can be done by a machine to automatically “walk through” the source code and detect noncomplying rules. The classic example is a compiler which finds lexical, syntactic and even some semantic mistakes.

Static analysis can also be performed by a person who would review the code to ensure proper coding standards and conventions are used to construct the program. This is often called Code Review and is done by a peer developer, someone other than the developer who wrote the code.

Static analysis is also used to force developers to not use risky or buggy parts of the programming language by setting rules that must not be used.

When developers performs code analysis, they usually look for

*   Lines of code
*   Comment frequency
*   Proper nesting
*   Number of function calls
*   Cyclomatic complexity
*   Can also check for unit tests

Quality attributes that can be the focus of static analysis:

*   Reliability
*   Maintainability
*   Testability
*   Re-usability
*   Portability
*   Efficiency

## What are the Advantages of Static Analysis?

The main advantage of static analysis is that it finds issues with the code before it is ready for integration and further testing.

**Static code analysis advantages:**

*   It can find weaknesses in the code at the exact location.
*   It can be conducted by trained software assurance developers who fully understand the code.
*   Source code can be easily understood by other or future developers
*   It allows a quicker turn around for fixes
*   Weaknesses are found earlier in the development life cycle, reducing the cost to fix.
*   Less defects in later tests
*   Unique defects are detected that cannot or hardly be detected using dynamic tests
    *   Unreachable code
    *   Variable use (undeclared, unused)
    *   Uncalled functions
    *   Boundary value violations

**Static code analysis limitations:**

*   It is time consuming if conducted manually.
*   Automated tools produce false positives and false negatives.
*   There are not enough trained personnel to thoroughly conduct static code analysis.
*   Automated tools can provide a false sense of security that everything is being addressed.
*   Automated tools only as good as the rules they are using to scan with.
*   It does not find vulnerabilities introduced in the runtime environment.

## What is Dynamic Analysis?

In contrast to Static Analysis, where code is not executed, dynamic analysis is based on the **system execution**, often using tools.

From Wikipedia's [definition of dynamic program analysis](http://en.wikipedia.org/wiki/Dynamic_program_analysis):

> Dynamic program analysis is the analysis of computer software that is performed with executing programs built from that software on a real or virtual processor (analysis performed without executing programs is known as static code analysis). Dynamic program analysis tools may require loading of special libraries or even recompilation of program code.

The most common dynamic analysis practice is executing Unit Tests against the code to find any errors in code.

**Dynamic code analysis advantages:**

*   It identifies vulnerabilities in a runtime environment.
*   It allows for analysis of applications in which you do not have access to the actual code.
*   It identifies vulnerabilities that might have been false negatives in the static code analysis.
*   It permits you to validate static code analysis findings.
*   It can be conducted against any application.

**Dynamic code analysis limitations:**

*   Automated tools provide a false sense of security that everything is being addressed.
*   Cannot guarantee the full test coverage of the source code
*   Automated tools produce false positives and false negatives.
*   Automated tools are only as good as the rules they are using to scan with.
*   It is more difficult to trace the vulnerability back to the exact location in the code, taking longer to fix the problem.