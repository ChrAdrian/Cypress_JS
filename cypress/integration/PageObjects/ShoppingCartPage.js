/// <reference types="cypress" />

class ShoppingCartPage
{
   
    openShoppingCart()        
{
    cy.get('[data-testid="HeaderBasket"]')
    .should("be.visible")
    .click()
}

    deleteSingleItem()
{
    cy.get('[data-testid="delete"]')
    .should("be.visible")
    .click()
}

    confirmDeleteItem()
{
    cy.get('[data-testid="confirm_delete"]')
    .should("be.visible")
    .click()
}

    goToCheckout()
{
    cy.get('[data-testid="CheckoutButton"]')
    .should("be.visible")
    .click()
}

}

export default ShoppingCartPage