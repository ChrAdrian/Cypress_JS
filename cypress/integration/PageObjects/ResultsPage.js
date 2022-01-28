/// <reference types="cypress" />

class ResultsPage
{
   
    selectItem()        // ToDO item should be randomly choosen from the grid, not hardcoded
{
    cy.get('[data-testid="productTile-4442482"]')
    .should("be.visible")
    .click()
}

}

export default ResultsPage