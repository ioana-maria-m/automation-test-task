/// <reference types="cypress" />

import { elementsFinder } from "../../support/page_objects/elements_finder"
import { actions } from "../../support/page_objects/actions"

describe('Complete items', () => {

    beforeEach('Visit react page', () => {
        cy.visit('/examples/react/#/')
        actions.createItem('Item 1')
        actions.createItem('Item 2')
    })

    it('Should mark an active item as completed when checkbox is clicked', () => {
        elementsFinder.findItemCheckboxList().first().check()
            .should('be.checked')
    })

    it('Should mark a completed item as active when checkbox is clicked', () => {
        elementsFinder.findItemCheckboxList().eq(1).check().click()
            .should('not.be.checked')
    })

    it('Should remove the item from the "Active" filter when is completed', () => {
        actions.filterItemsByActive()
        elementsFinder.findItemCheckboxList().first().check()
        elementsFinder.findRowsList().eq(0).should('have.text', 'Item 2')
        elementsFinder.findRowsList().should('have.length', 1)
    })

    it('Should remove the item from "Completed" filter when the completed item is unchecked', () => {
        elementsFinder.findItemCheckboxList().check()
        actions.filterItemsByCompleted()
        elementsFinder.findItemCheckboxList().eq(1).click()
        elementsFinder.findRowsList().should('have.length', 1)
    })

    it('Should list all active items as completed when "Toggle all" is clicked', () => {
        actions.filterItemsByCompleted()
        elementsFinder.findToggleAllButton().click()
        // Assert multiple elements from list but query only once
        elementsFinder.findRowsList().should(($items) => {
            expect($items).to.have.length(2)
            expect($items.eq(0)).to.contain('Item 1')
            expect($items.eq(1)).to.contain('Item 2')
        })
    })

    it('Should list all completed items as active when "Toggle all" is clicked', () => {
        elementsFinder.findItemCheckboxList().check()
        actions.filterItemsByActive()
        elementsFinder.findToggleAllButton().click()
        // Assert multiple elements from list but query only once
        elementsFinder.findRowsList().should(($items) => {
            expect($items).to.have.length(2)
            expect($items.eq(0)).to.contain('Item 1')
            expect($items.eq(1)).to.contain('Item 2')
        })
    })

    it('Should mark all items as completed when "Toggle all" is clicked', () => {
        elementsFinder.findToggleAllButton().click()
        elementsFinder.findItemCheckboxList().each((item, _) => {
            cy.wrap(item).should('be.checked')
        })
        cy.get('.footer').find('.todo-count')
            .should('have.text', '0 items left')
    })

    it('Should mark all items as active when "Toggle all" is clicked', () => {
        elementsFinder.findToggleAllButton().dbclick
        elementsFinder.findItemCheckboxList().each((item, _) => {
            cy.wrap(item).should('not.to.be.checked')
        })
    })
}) 