
describe('About Page', () => {
  it('About page url', () => {
  cy.visit('http://localhost:3000/About')
  cy.url().should('include', '/')
  })
})


describe('About Page', () => {
  it('About page components', () => {
  cy.visit('http://localhost:3000/About')
  cy.url().should('include', '/')
  cy.get('h2').contains('Frequently asked questions')
  cy.get('h3').contains('What?')
  cy.get('p').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique nisi quis faucibus luctus. Cras tempus rutrum orci. Maecenas sed erat ut magna congue congue. Vestibulum vitae consequat erat. Etiam iaculis nisi nunc, at pellentesque mi porttitor placerat. Aenean sagittis tincidunt blandit. Sed mollis tincidunt faucibus.')
  })
})

