/// <reference types="cypress" />

class HomePage
{

clearCookies()
{
    cy.clearCookies()
}

viewPort()
{
    cy.viewport('iphone-x')
}

visit()
{
    cy.visit("https://m.aboutyou.de"),
    {
        onBeforeLoad: (win) => {
        Object.defineProperty(win.navigator, 'userAgent', {
            value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1',
        })}
    }
}

cookiesOK()
{
    cy.get('#onetrust-accept-btn-handler')
    .click()
}

selectCountryRO()
{
    cy.get('.sc-1431pqc-0-span > .sc-122ag38-1')
    .click()
}

openSearchBar()
{
    cy.get('.sc-eqdo26-1 > .sc-su7zgx-0')
    .should("be.visible")
    .click()
}

typeIntoSearchBar(value)
{
    const field = cy.get('.sc-eqdo26-0')
    field.clear()
    field.type(value)
    .should('have.value', value)
    field.type("{enter}")
    return this
}

fillEmail(value)
{
    const field = cy.get('[id=Email]')
    field.clear()
    field.type(value)
    return this
}

fillPassword(value)
{
    const field = cy.get('[id=Password]')
    field.clear()
    field.type(value)
    return this
}

submit()
{
    const button = cy.get('.button-1')
    button.click()
}
}

export default HomePage