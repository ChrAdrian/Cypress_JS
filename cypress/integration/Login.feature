Feature: Login
    I want to log into Conduit

    @smoke
    Scenario: Page Login     
        Given I open login page
        When I type in username and password
        And I click on Sign in button
        Then Your Feed should be shown