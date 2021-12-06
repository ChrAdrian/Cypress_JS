/// <reference types="cypress" />       // for autosuggestions

describe("Locating elements", function(){
    it("Verify types of locators", function()
    {
        cy.visit("https://www.emag.ro/")     // open the URL

        cy.get("#searchboxTrigger").type("DVD").clear().type("Playstation 5")       // type a product name in the search field

        cy.get("#masthead > div > div > div.navbar-searchbox > div > form > div.input-group.searchbox-input > div.input-group-btn > button.btn.btn-default.searchbox-submit-button > i").click()      // click on search button

        cy.get('.yeahIWantThisProduct[data-offer-id="77531692"]').click()

        cy.wait(3000)

        cy.get('.btn-block[data-dismiss="modal"]').click()

        cy.get("#vendorsContainer > div > div.cart-widget.cart-line > div > div.main-product-details-container.emg-right > div.line-item.line-item-main > div.line-price-container.emg-right > div > p.product-new-price > span.money-int").contains("5.189")      // validation point

        cy.get("#vendorsContainer > div > div.cart-widget.cart-line > div > div.main-product-details-container.emg-right > div.line-item.line-item-main > div.line-price-container.emg-right > div > p.product-new-price > sup").contains("99")    
    })
})