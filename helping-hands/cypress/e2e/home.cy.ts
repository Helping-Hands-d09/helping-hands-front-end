
describe('Home Page', () => {
    it('should navigate to the home page', () => {
    cy.visit('http://localhost:3000/')
    // cy.get('a[href*="About"]').click()
    cy.url().should('include', '/')
    cy.get('h1').contains('Welcome to Helping Hands')
    cy.get('p').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    cy.get('a').contains('Login')
    cy.get('a').contains('Register')
    })
})

// ---------------------------------------------------------------
export {}