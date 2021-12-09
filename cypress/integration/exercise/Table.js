/// <reference types = "cypress" />

describe('Table Tests', function() {
    
    it('Table Test', function()
    {
        
        cy.visit('http://testautomationpractice.blogspot.com/')

        //1) Check the presence in the whole table

        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

        //2) Check the presence in a certain position

        cy.get('#HTML1 > div.widget-content > table > tbody > tr:nth-child(5) > td:nth-child(3)').contains('td', 'Selenium').should('be.visible')

        //3) Search in the table for book named "Master In Java" whose author is Amod

        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($element, index) => 
        {
            const text = $element.text()
            if(text.includes("Amod"))
            {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bookname)
                {
                    const bname = bookname.text()
                    expect(bname).to.equal("Master In Java")
                })
            }

        })
    })
})