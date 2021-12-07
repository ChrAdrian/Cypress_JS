/// <reference types="cypress" />

describe("Handling UI elements", function()
{
    it("Verify Log In", function()
    {
        cy.visit("https://www.saucedemo.com/")
        cy.url().should("include", "demo")

        cy.get('#user-name').should('be.visible').should('be.enabled').type('standard_user')
        cy.get('#password').should('be.visible').should('be.enabled').type('secret_sauce')
        cy.get('#login-button').should('be.visible').should('be.enabled').click()
    })
})