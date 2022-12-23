// Open Browser and Direct to specific URL
describe('My First Test (Test Scenario)', () => {
    it('Verify Login Successfully', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        // Assert element atau text
        cy.contains('Customer Login')

        //Assert element atau text
        cy.contains('Experience the difference')

        //Input Username
        cy.get('#loginPanel > form > div:nth-child(2) > input')
            .type('nikolai')
            .should('have.value', 'nikolai')

        //Input password
        cy.get('#loginPanel > form > div:nth-child(4) > input')
            .type('binkowski')
            .should('have.value' , 'binkowski')

        //Click login
        cy.get('#loginPanel > form > div:nth-child(5) > input')
            .click()
    })

    it('Verify Forget Password Failed', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        //Assert element atau text
        cy.contains('Experience the difference')

        //Click forget password
        cy.get('#loginPanel > p:nth-child(2) > a')
            .click()

        //Assert URL
        cy.url().should('include', '/parabank/lookup.htm')

        //Input first name
        cy.get('#firstName').type('nikolai').should('have.value' , 'nikolai')

        //Input last name
        cy.get('#lastName').type('binkowski').should('have.value' , 'binkowski')

        //Input address
        cy.get('#lookupForm > table > tbody > tr:nth-child(3) > td:nth-child(2)').type('a')

        //Input city
        cy.get('#lookupForm > table > tbody > tr:nth-child(4)').type('b')

        //Input state
        cy.get('#lookupForm > table > tbody > tr:nth-child(5)').type('c')

        //Input zip code
        cy.get('#lookupForm > table > tbody > tr:nth-child(6)').type('1')

        //Input ssn
        cy.get('#ssn').type('000')

        //Click login
        cy.get('#lookupForm > table > tbody > tr:nth-child(8) > td:nth-child(2) > input')
            .click()

        //Assert successfully
        cy.contains('The customer information provided could not be found')
    })

    it('Verify Forget Password Successfully', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        // Assert element atau text
        cy.contains('Customer Login')

        //Assert element atau text
        cy.contains('Experience the difference')

        //Click forget password
        cy.get('#loginPanel > p:nth-child(2) > a')
            .click()

        //Assert URL
        cy.url().should('include', '/parabank/lookup.htm')

        //Assert element or text
        cy.contains('Customer Lookup')

        //Input first name
        cy.get('#firstName').type('a').should('have.value' , 'a')

        //Input last name
        cy.get('#lastName').type('b').should('have.value' , 'b')

        //Input address
        cy.get('#lookupForm > table > tbody > tr:nth-child(3) > td:nth-child(2)').type('c')

        //Input city
        cy.get('#lookupForm > table > tbody > tr:nth-child(4)').type('d')

        //Input state
        cy.get('#lookupForm > table > tbody > tr:nth-child(5)').type('e')

        //Input zip code
        cy.get('#lookupForm > table > tbody > tr:nth-child(6)').type('1')

        //Input ssn
        cy.get('#ssn').type('3')

        //Click login
        cy.get('#lookupForm > table > tbody > tr:nth-child(8) > td:nth-child(2) > input')
            .click()

        //Assert successfully
        cy.contains('Your login information was located successfully')
    })
})