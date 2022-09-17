
describe('Home Page', () => {
    it('Home page url', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/')
    })
})

describe('Home Page', () => {
    it('Home page tags', () => {
    cy.get('h1').contains('Welcome to Helping Hands')
    cy.get('p').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    })
})

describe('Home Page', () => {
    it('Home page buttons', () => {
    cy.get('a').contains('Login')
    cy.get('a').contains('Register')
    })
})
