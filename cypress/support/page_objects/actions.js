import { ElementsFinder } from "./elements_finder"

export class Actions extends ElementsFinder {

    inputItemName(itemName) {
        return super.findInputItem().type(itemName)
    }

    createItem(itemName) {
        return super.findInputItem().type(itemName).type('{enter}')
    }

    filterItemsByAll() {
        return cy.get('li a').filter(':contains("All")').click()
    }

    filterItemsByActive() {
        return cy.get('li a').filter(':contains("Active")').click()
    }

    filterItemsByCompleted() {
        return cy.get('li a').filter(':contains("Completed")').click()
    }

    clearCompletedItems() {
        return cy.get('[class="clear-completed"]').click()
    }
}

export const actions = new Actions()