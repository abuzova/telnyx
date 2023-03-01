// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.Commands.add('isElementVisible', (element) => {
    cy.get('body').then($body => {
        if ($body.find(element).length) {
            return true
        } else {
            return false
        }
    })
  })*/

  import { appData, credentials, webElements } from "../fixtures/fixtures.json"
const jsonAssertion = require("soft-assert")

Cypress.Commands.add('softAssert', (actual, expected, message) => {
    jsonAssertion.softAssert(actual, expected, message)
    if (jsonAssertion.jsonDiffArray.length) {
        jsonAssertion.jsonDiffArray.forEach(diff => {

            Cypress.log({
                name: 'Soft assertion error',
                displayName: 'softAssert',
                message: diff.error.message
            })

        })
    }
})

Cypress.Commands.add('softVisible', { prevSubject: true },
    (subject, expectedCondition, message) => {

        // translate expectedCondition to true/false
        const expected = expectedCondition === 'be.visible'
        const actual = subject.is(":visible")
        cy.softAssert(actual, expected, message)
    })

Cypress.Commands.add('softAssertAll', () => {
    jsonAssertion.softAssertAll()
    const testSoftAssertAll = () => jsonAssertion.softAssertAll()
    expect(testSoftAssertAll).not.throw()
})

Cypress.Commands.add('isTheElementPresent', (ele) => {
    cy.get('body').then($body => {
        if ($body.find(ele).length) return true
        else return false
    });
})

Cypress.Commands.add('waitUntilPageLoads', () => {
    window.onload = () => {
        cy.log('page is fully loaded');
    };
})

Cypress.Commands.add('waitUntilElementsLoad', (urlRequest) => {
    cy.intercept(urlRequest).as('elementsLoaded')
    cy.wait('@elementsLoaded')
})