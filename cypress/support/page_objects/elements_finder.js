export class ElementsFinder {

    findInputItem() {
        return cy.get('.new-todo')
    }

    findReactPage() {
        return cy.get('[href="examples/react"]')
    }

    findItemCheckboxList() {
        return cy.get('.todo-list [type="checkbox"]')
    }

    findRowsList() {
        return cy.get('.todo-list li')
    }

    findToggleAllButton() {
        return cy.get('[for="toggle-all"]')
    }

    findDeleteButton() {
        return cy.get('[class="destroy"]')
    }

    findClearCompletedButton() {
        return cy.get('[class="clear-completed"]')
    }
}

export const elementsFinder = new ElementsFinder()