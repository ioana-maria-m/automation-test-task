/// <reference types="cypress" />

import { elementsFinder } from "../../support/page_objects/elements_finder"

describe('Navigation page', () => {

    before('Visit main page', () => {
        cy.visit('./')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('Should navigate to react example page from the main page', () => {
        elementsFinder.findReactPage().click({ force: true })
        cy.url().should('contain', '/examples/react/#/')
    })
})