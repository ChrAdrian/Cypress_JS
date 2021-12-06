describe('Test Suite', function() {
    it('Verify Title of the Page - Positive', function() {
        cy.visit('https://www.emag.ro/')
        cy.title().should('eq','eMAG.ro - Libertate în fiecare zi')
    })

    it('Verify Title of the Page - Negative', function() {
        cy.visit('https://www.emag.ro/')
        cy.title().should('eq','eMAG.ro')
    })
})