class CustomAssertions {

    static assertListSize(object, expectedSize) {
        cy.get(object).then(items => {
            cy.get(items).should('have.length', expectedSize)
        })
    }

    static assertElementContainsText(element, expectedText) {
        cy.get(element).should('have.text', expectedText)
    }
}

export default CustomAssertions