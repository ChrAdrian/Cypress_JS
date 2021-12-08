/// <reference types="cypress" />

describe("Hooks", function()
{
    before(function(){
        // runs at the beggining of the test suite once
        cy.log('SETUP block - suite setup')
    })

    after(function(){
        // runs at the end of the test suite once
        cy.log('TEARDOWN block - suite teardown')
    })

    beforeEach(function(){
        // runs at the beggining of each test case
        cy.log('TEST SETUP block - test setup')
    })

    afterEach(function(){
        // runs at the end of each test case
        cy.log('TEST TEARDOWN block - test teardown')
    })

        it('searching test', function()
        {
            cy.log('Search Test')
        })

        it('advanced searching test', function()
        {
            cy.log('Advanced Search Test')
        })

        it('list products', function()
        {
            cy.log('List Products')
        })
})