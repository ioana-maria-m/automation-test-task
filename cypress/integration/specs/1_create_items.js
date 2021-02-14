/// <reference types="cypress" />

import { elementsFinder } from "../../support/page_objects/elements_finder"
import { actions } from "../../support/page_objects/actions"

describe('Create items', () => {

    beforeEach('Visit react page', () => {
        cy.visit('/examples/react/#/')
    })

    it('Should display items when are created', () => {
        actions.createItem('Item_1')
        actions.createItem('2nd item')
        actions.createItem('Item3')
        // Assert multiple elements from list but query only once
        elementsFinder.findRowsList().should(($items) => {
            expect($items).to.have.length(3)
            expect($items.eq(0)).to.contain('Item_1')
            expect($items.eq(1)).to.contain('2nd item')
            expect($items.eq(2)).to.contain('Item3')
        })
    })

    it('Should have the input cleared after the item is created', () => {
        actions.createItem('Item 1')
        elementsFinder.findInputItem().should('have.value', '')
    })

    it('Should display the new item name after is edited', () => {
        actions.createItem('Item1 to edit')
        elementsFinder.findRowsList().first()
            .dblclick().type('{selectall}{backspace}').type('Edited item').type('{enter}')
            .should('contain', 'Edited item')
    })

    it('Should list the new created item when filter "Active" is selected', () => {
        actions.createItem('Item1')
        actions.filterItemsByActive()
        actions.createItem('Item2')
        elementsFinder.findRowsList().should('contain', 'Item2')
    })

    it('Should NOT list the created item when filter "Completed" is selected', () => {
        actions.createItem('ItemActive1')
        elementsFinder.findItemCheckboxList().first().check()
        actions.filterItemsByCompleted()
        actions.createItem('ItemActive2')
        elementsFinder.findRowsList().should('not.contain', 'Item2')
    })

    it('Should NOT create the item when the input text in blank', () => {
        actions.createItem('ItemText')
        actions.createItem(' ')
        elementsFinder.findRowsList().should('not.contain', ' ')
    })
})