describe('Test Suite', function() {
    it('Verify Title of the Page', function() {
        cy.visit('https://www.emag.ro/')
        cy.title().should('eq','eMAG.ro - Libertate în fiecare zi')
    })

    it('Verify Title of the Page', function() {
        cy.visit('https://www.emag.ro/')
        cy.title().should('eq','eMAG.ro')
    })
})