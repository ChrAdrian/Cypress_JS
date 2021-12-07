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

        cy.title().should('eq', 'Swag Labs')
    })

    it("Verify Radio Buttons Functioality and Visibility", function()
    {
        cy.visit("http://test.rubywatir.com/radios.php")
        cy.url().should("include", "test")

        cy.get('input[value="Radio1"]').should('be.visible').should('be.checked')
        cy.get('#radioId').should('be.visible').should('not.be.checked')
    })

    it("Verify Check Box Functioality", function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html")

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('[type=checkbox').check(['Movies', 'Hockey'])
    })

    it("Verify Skills Drop Down Functioality", function()
    {
        cy.get('#Skills').select('Android').should('have.value', 'Android')
    })

    it("Verify Language Multi Select Functioality", function()
    {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
        cy.get('#basicBootstrapForm > div:nth-child(7) > label').click()
    })

    it("Select country searchable drop down", function()
    {
        cy.get('[role=combobox]').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')
    })
})