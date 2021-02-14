/// <reference types="cypress" />

import { elementsFinder } from "../../support/page_objects/elements_finder"
import { actions } from "../../support/page_objects/actions"

describe('Delete items', () => {

    beforeEach('Visit react page', () => {
        cy.visit('/examples/react/#/')
        actions.createItem('Complete item')
        actions.createItem('Active item')
    })

    it('Should delete an item when click on "X" button and "Clear completed" button dissapear', () => {
        elementsFinder.findDeleteButton().first().click({ force: true })
        elementsFinder.findRowsList().should('have.length', 1)
        elementsFinder.findClearCompletedButton().should('not.exist')
    })

    it('Should delete all items when click on "Clear completed" button', () => {
        elementsFinder.findToggleAllButton().click()
        actions.clearCompletedItems()
        elementsFinder.findRowsList().should('have.length', 0)
    })

    it('Should appear the "Clear completed" button when a task is marked as Completed', () => {
        elementsFinder.findItemCheckboxList().first().check()
        elementsFinder.findClearCompletedButton().should('exist')
    })
})