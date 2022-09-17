
describe('Campagins page components', () => {
  it('Campagins Page/url', () => {
  cy.visit('http://localhost:3000/Campaigns')
  cy.url().should('include', '/')
  })
})

describe('Campagins page components', () => {
  it('Campagins Card/div', () => {
  cy.get("div[class='flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto']").get('a').get('h2').should('have.class', 'text-2xl font-bold tracking-normal text-gray-800')

  })
})


describe('Campagins page components', () => {
  it('Campagins card reach to the last html tag', () => {
  cy.visit('http://localhost:3000/Campaigns')
  cy.get('div').should('have.class', 'max-w-sm m-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700')

  })
})


describe('Campagins page components', () => {
  it('Campagins card button', () => {
  cy.get('section').should('have.class', 'px-4 py-2 mt-2')
  cy.get('button').should('have.class', 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800')
  cy.get('button').should('contain','Join')

  })
})


