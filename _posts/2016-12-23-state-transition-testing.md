---
layout: post
title: "State Transition Testing"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## State Transition Testing Technique

[caption id="attachment_10168" align="aligncenter" width="682"]![state-transition-digram](http://69.164.212.71/wp-content/uploads/2008/11/state-transition-digram.jpg) state-transition-digram[/caption]

State transition testing is a **[black box testing technique](http://www.testingexcellence.com/black-box-testing)** and is used where some aspect of the system can be described in what is called a “finite state machine”. This simply means that the system can be in a (finite) number of different states, and the transitions from one state to another are determined by the rules of the “machine”.

This is the model on which the system and the tests are based. Any system where you get a different output for the same input, depending on what has happened before, is a finite state system.

### State Transition Testing Examples

If you request to withdraw £100 from a bank ATM, you may be given cash. Later you may make exactly the same request but be refused the money (because your balance is insufficient).

This later refusal is because the state of your bank account had changed from having sufficient funds to cover the withdrawal to having insufficient funds.The transaction that caused your account to change its state was probably the earlier withdrawal.

Another example is a word processor. If a document is open, you are able to Close it. If no document is open, then “Close” is not available. After you choose “Close” once, you cannot choose it again for the same document unless you open that document. A document thus has two states: open and closed.

A state transition model has four basic parts:

*   The states that the software may occupy (open/closed or funded/insufficient funds);

*   The transitions from one state to another (not all transitions are allowed);

*   The events that cause a transition (withdrawing money, closing a file);

*   The actions that result from a transition (an error message, or being given your cash).

Note that a transition does not need to change to a different state; it could stay in the same state. In fact, trying to input an invalid input would be likely to produce an error message as the action, but the transition would be back to the same state the system was in before.

Deriving test cases from the state transition model is a black box approach. Measuring how much you have tested (covered) is getting close to a white box perspective. However, state transition testing is generally regarded as a black box technique.

You can design tests to test every transition shown in the model. If every (valid) transition is tested, this is known as “0-switch” coverage.

You could also test a series of transitions through more than one state. If you covered all of the pairs of two valid transitions, you would have “1-switch” coverage, covering the sets of 3 transitions would give “2-switch” coverage, etc.

However, deriving tests only from the model may omit the negative tests, where we could try to generate invalid transitions. In order to see the total number of combinations of states and transitions, both valid and invalid, a state table can be used.