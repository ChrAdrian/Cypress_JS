/// <reference types="cypress" />

class ItemPage
{

    selectSizeXSx34()
{
    const size = cy.get('[data-testid="sizeFlyoutOpener"]')
    size.should("be.visible")
    .click()
    cy.get('[data-testid="sizeOption_38367310_active"] > .sc-1rstdue-8')
    .should("be.visible")
    .click()
    cy.get('[data-testid="sizeSelectorSizeSelectedTextLabel"]')
    .should("include.text", "XS x 34")
    .should("be.visible")
    cy.get('[data-testid="addToBasketButton"]')
    .should("include.text", "XS x 34")
    .should("be.visible")
    return this
}

    addToCart()
{
    cy.get('[data-testid="addToBasketButton"]')
    .should("be.visible")
    .click()
}

    continueShopping()
{
    cy.get('[data-testid="continueShoppingButton"]')
    .should("be.visible")
    .click()
}

    checkEmptyShoppingCart()
{
    cy.get('[data-basket-amount="false"]')
    .should("be.visible")
    .should('exist')
}

    checkItemInShoppingCart()
{
    cy.get('.basketIcon--lefgx')
    .should("be.visible")
    .should("have.attr", "data-basket-amount", "1")
}

    goToBasket()
{
    cy.get('[data-testid="goToBasketButton"]')
    .should("be.visible")
    .click()
}

}

export default ItemPage