---
layout: post
title: "Automated Testing of Emails Using Karate"
author: Amir
categories: [ software testing ]
image: assets/images/karate-automated-api-testing.png
---

<div class="columnLayout single" data-layout="single">

<div class="cell normal" data-type="normal">

<div class="innerCell">

Automated Testing of emails can be a bit daunting as the majority of email providers are not built for testing purposes.

In the past, people have used Gmail and mailinator to create email addresses, send and read emails but they tend to have limitations and can block a user.

There is a web application [qamail.ala.se](http://qamail.ala.se/) which is very lightweight and is specifically built for testing purposes.

You can create email accounts (email addresses), list emails for an account, read an email and delete emails.

One of the great things about this is that you can use both the UI and/or its API which comes very handy for UI and API automated testing. For example, you can either use Selenium WebDriver or Rest-Assured or Karate to fetch emails.

In this page, I list examples of how to work with the API of the qamail application. The given examples are in **[Karate](https://www.testingexcellence.com/automated-api-testing-made-easy-karate/)**, but equally any API testing library can be used.

### Create Session

<pre class="EnlighterJSRAW" data-enlighter-language="null">#create-session-key.feature

Feature: Create a session key to use for email fetching

  Background:
    * def host = 'http://qamail.ala.se'
    * configure followRedirects = false

    Scenario: test session creation
      Given url host
      When method get
      * def redirect_address = responseHeaders['Location'][0]

      Given url redirect_address
      When method get
      * string cookies = responseHeaders['Set-Cookie']
      * string session_cookie = Java.type('com.testingexcellence.StringUtil').getCookieValue(cookies, 'session_key')</pre>

The above feature file calls a Java method to parse the cookies and extract the session_key cookie

<pre class="EnlighterJSRAW" data-enlighter-language="java">public static String getCookieValue(String cookieString, String cookieKey) {
    Pattern p = Pattern.compile("(\\w+)=\"*((?<=\")[^\"]+(?=\")|([^\\s]+))\"*");
    Matcher m = p.matcher(cookieString);
    String cookieValue = "";
    while(m.find()){
        if(m.group(1).contains(cookieKey)) {
            cookieValue = m.group(2);
        }
    }
    return cookieValue.replaceAll(";", "");
}</pre>

Once we obtain a session key, we can use it for various operations

### Create MailBox

<pre class="EnlighterJSRAW" data-enlighter-language="null">#create-mailbox.feature

Feature: create mailbox feature

  Background:
    * def create_session = callonce read('create-session-key.feature')
    * def session = create_session.session_cookie
    * def host = create_session.host

  Scenario: Create a mailbox
    * def create_mailbox_path = '/api/create_mailbox'
    Given url host + create_mailbox_path + '?session_key=' + session
    And request ''
    When method PUT
    Then status 200

    * def email_address = get response.mailbox.address</pre>

**Response**

<pre class="EnlighterJSRAW" data-enlighter-language="xml"><?xml version="1.0" encoding="UTF-8"?>
<mailbox>
 <address>zxe45oy@qamail.ala.se</address>
</mailbox></pre>

### List Email Boxes

<pre class="EnlighterJSRAW" data-enlighter-language="null">#list-mailboxes.feature

Feature: list mailboxes

  Background:
    * def create_session = callonce read('create-session-key.feature')
    * def session = create_session.session_cookie
    * def host = create_session.host

  Scenario: list mailoxes
    * def list_mailboxes_path = '/api/list_mailboxes'
    * def endpoint = host + list_mailboxes_path + '?session_key=' + session

    Given url endpoint
    When method GET
    Then status 200

    * def email_address = get response.session.mailbox.address</pre>

**Response**

<pre class="EnlighterJSRAW" data-enlighter-language="xml"><?xml version="1.0" encoding="UTF-8"?>
<session>
 <session_key>8ZFmjSmdI6tf496dGrsK5sN6</session_key>
 <mailbox>
 <address>t971kzb@qamail.ala.se</address>
 </mailbox>
</session></pre>

### List Emails for an Email Address

N.B: (only works when you send an email to the address) Values hardcoded for demo

<pre class="EnlighterJSRAW" data-enlighter-language="null">#show-emails.feature

Feature: show emails for an email address

  Background:
    * def result = call read('list-mailboxes.feature')
    * def email_address = result.email_address
    * def session = result.response.session.session_key
    * def host = result.host

  Scenario: show emails for a specific email address
    * def show_emails_path = '/api/show_mailbox_content'
    * def session = 'LFB2Ii0GT4NuZB7nqLljNT0W'
    * def email_address = 'h0qr0xd@qamail.ala.se'
    Given url host + show_emails_path + '?session_key=' + session + '&address=' + email_address
    When method GET
    Then status 200

    * def email_id = get response.mailbox.letter.id
    * def subject = get response.mailbox.letter.subject
    * def from = get response.mailbox.letter.from
    * def date = response.mailbox.letter.date</pre>

**Response**

<pre class="EnlighterJSRAW" data-enlighter-language="null"><?xml version="1.0" encoding="UTF-8"?>
<mailbox>
 <address>h0qr0xd@qamail.ala.se</address>
 <letter>
 <id>38989</id>
 <subject>Test mail</subject>
 <from>test@test.com</from>
 <date>2017-11-27 18:07:52 UTC</date>
 </letter>
</mailbox></pre>

### Show Email Content for a Specific Email

N.B: (only works when you send an email to the address) Values hardcoded for demo

<pre class="EnlighterJSRAW" data-enlighter-language="null">#read-email.feature

Feature: read an email

  Background:
    * def result = call read('show-emails.feature')
    * def email_address = result.email_address
    * def session = result.session
    * def host = result.host
    * def letter_id = result.letter_id

  Scenario: show emails for a specific email address
    * def show_email_content_path = '/api/show_rendered_letter'
    * def session = 'LFB2Ii0GT4NuZB7nqLljNT0W'
    * def email_address = 'h0qr0xd@qamail.ala.se'
    * def letter_id = 38989
    Given url host + show_email_content_path + '?session_key=' + session + '&address=' + email_address + '&letter_id=' + letter_id
    When method GET
    Then status 200</pre>

**Response**

The response is a dump of the body of an email. You have to use Regexp to extract what you want from the text of the email.

</div>

</div>

</div>