/// <reference types="cypress" />

describe("CustomCommand", function()
{
    it('LoginTest', function()
    {
        cy.DoLogin('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })
})