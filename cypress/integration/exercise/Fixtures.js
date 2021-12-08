/// <reference types="cypress" />

describe("Fixtures", function()
{
    before(function(){
        // save what we have in the fixture in data variable
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })

        it('Fixtures', function()
        {
            cy.visit('https://admin-demo.nopcommerce.com/login')
            cy.get('input[name=Email]').clear().type(this.data.email)
            cy.get('input[name=Password]').clear().type(this.data.password)
            cy.get('.button-1').click()
        })
    })