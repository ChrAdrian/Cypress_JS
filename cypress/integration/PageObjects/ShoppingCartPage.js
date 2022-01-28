/// <reference types="cypress" />

class ShoppingCartPage
{
   
    openShoppingCart()        
{
    cy.get('[data-testid="productTile-4442482"]')
    .should("be.visible")
    .click()
}

}

export default ShoppingCartPage