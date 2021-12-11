Given('I open login page', () =>
{
    cy.visit("https://admin-demo.nopcommerce.com/login")
});

When('I type in username and password', () =>
{
    cy.get('input[type="email"]').clear().type('admin@yourstore.com')
    cy.get('input[type="password"]').clear().type('admin')
});

When('I click on Sign in button', () =>
{
    cy.get('.button-1').should('be.visible').click()
});

Then('Your Feed should be shown', () =>
{
    cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
});