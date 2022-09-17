describe('footer', () => {
  it('footer base url  ', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/')
  })
})

describe('footer', () => {
  it('footer logo  ', () => {
    const nav = cy.get('nav')
    nav.find('div').find('a').find('img')
  })
})


describe('footer', () => {
  it('footer second div container  ', () => {
    const div = cy.get("div[class='flex md:order-2']")
    div.find('button')
  })
})


describe('footer', () => {
  it('footer terms and conditions', () => {
    const h2 = cy.get("h2[class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white']")
    h2.should('contain', 'Legal')

    const ul = cy.get("ul[class='text-gray-600 dark:text-gray-400']")
    ul.find('li')

    ul.get('li').get("a[class='hover:underline']").should('contain', 'Privacy Policy')
    ul.get('li').get("a[class='hover:underline']").should('contain', 'Terms & Conditions')
  })
})


describe('footer', () => {
  it('footer copy right', () => {
    const span = cy.get("span[class='text-sm text-gray-500 sm:text-center dark:text-gray-400']")
    span.should('contain', '© 2022')

    span.should('contain', '. All Rights Reserved.')

    span.get("a[class='hover:underline']").should('contain', 'Helping Hands™')

  })
})

describe('footer', () => {
  it('footer social icons', () => {
    const div = cy.get("div[class='flex mt-4 space-x-6 sm:justify-center sm:mt-0']")

    const link = div.find("a[class='text-gray-500 hover:text-gray-900 dark:hover:text-white']")
    const span = link.get("span[class='sr-only']")

    span.should('contain', 'Facebook page')
    span.should('contain', 'Instagram page')
    span.should('contain', 'Twitter page')
    span.should('contain', 'GitHub account')

  })
})

