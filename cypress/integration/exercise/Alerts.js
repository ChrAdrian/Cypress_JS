/// <reference types="cypress" />

describe("Alerts", function()
{
    it("Verify Credential Alert", function()
    {
        cy.visit("http://demo.automationtesting.in/Alerts.html")

        cy.get('[onclick="alertbox()"]').click()

        cy.on('window:alert', (str) =>
            {
                expect(str).to.equal('I am an alert box!')
            })
    })

    it("Verify Confirmation Alert", function()
    {
        cy.visit("http://testautomationpractice.blogspot.com/")

        cy.get('[onclick="myFunction()"]').click()

        cy.on('window:confirm', (str) =>
            {
                expect(str).to.equal('Press a button!')
            })
    })
})