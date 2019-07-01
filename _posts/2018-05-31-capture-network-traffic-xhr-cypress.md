---
layout: post
title: "How to Capture Browser Network Traffic (XHR) with Cypress"
author: Amir
tags: [ automated testing, cypress, javascript ]
image: assets/images/cypress-automation-tool.png
---

Cypress is a next generation front-end testing tool built for the modern web. Cypress has a lot of nice features to facilitate browser automation. One of those features is the ability to capture network traffic. This post gives an example of how to capture XHR network traffic while submitting a form.

### Capture Network Traffic (XHR) with Cypress

```javascript
describe('Capture browser network traffic', function () {
  context('Login functionality', () => {
    it('Dscro should be able to login', () => {
      cy.server()

      //This is the post call we are interested in capturing
      cy.route('POST', 'https://loginservice.example.net/login/json/authenticate').as('login')

      cy.visit('https://example.net/login')

      cy.get('#email').type('tester@gmail.com')
      cy.get('#password').type('Passw0rd1')
      cy.get('button[type=submit]').click()
      cy.wait('@login')

      //Assert on XHR
      cy.get('@login').then(function (xhr) {
        expect(xhr.status).to.eq(200)
        expect(xhr.requestHeaders).to.have.property('Content-Type')
        expect(xhr.requestHeaders).to.have.property('X-Password', 'Passw0rd1')
        expect(xhr.method).to.eq('POST')
        expect(xhr.responseBody).to.have.property('tokenId')
      })
    })
  })
})
```

Read more on Cypress [Cypress](https://docs.cypress.io/guides/overview/key-differences.html#)