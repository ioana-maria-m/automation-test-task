/// <reference types="cypress" />

import { elementsFinder } from "../../support/page_objects/elements_finder"
import { actions } from "../../support/page_objects/actions"

describe('Filter items', () => {

    beforeEach('Visit react page', () => {
        cy.visit('/examples/react/#/')
        actions.createItem('Complete Task')
        actions.createItem('Active Task')
        elementsFinder.findItemCheckboxList().first().check()
    })

    it('Should list all items when filter "All" is selected', () => {
        actions.filterItemsByAll().should('have.class', 'selected')
        elementsFinder.findRowsList().should('have.class', 'completed')
    })

    it('Should list active items when filter "Active" is selected', () => {
        actions.filterItemsByActive().should('have.class', 'selected')
        elementsFinder.findRowsList().should('not.have.class', 'completed')
    })

    it('Should list completed items when filter "Completed" is selected', () => {
        actions.filterItemsByCompleted().should('have.class', 'selected')
        elementsFinder.findRowsList().should('have.class', 'completed')
    })
})