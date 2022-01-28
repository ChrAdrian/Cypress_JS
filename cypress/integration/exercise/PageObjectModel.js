/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage"
import ResultsPage from "../PageObjects/ResultsPage"
import ItemPage from "../PageObjects/ItemPage"

describe('About You', function()
{
    it('E2E test', function()
    {
        const home_page = new HomePage()
        const results_page = new ResultsPage()
        const item_page = new ItemPage()
        home_page.clearCookies()
        // home_page.viewPort()
        home_page.visit()
        home_page.cookiesOK()
        home_page.selectCountryRO()
        // home_page.cookiesOK()
        cy.title().should('be.eq', 'Modă online de la mai mult de 1000 branduri de top | ABOUT YOU')
        home_page.openSearchBar()
        home_page.typeIntoSearchBar('jeans')
        results_page.selectItem()
        item_page.selectSizeXSx34()
        item_page.checkEmptyShoppingCart()
        item_page.addToCart()
        item_page.continueShopping()
        item_page.checkItemInShoppingCart()
    })
})