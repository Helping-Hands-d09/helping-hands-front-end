describe('nav bar', () => {
  it('nav bar base url  ', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/')
  })
})

describe('nav bar', () => {
  it('nav bar logo  ', () => {
    const nav = cy.get('nav')
    nav.find('div').find('a').find('img')
  })
})


describe('nav bar', () => {
  it('nav bar second div container  ', () => {
    const div = cy.get("div[class='flex md:order-2']")
    div.find('button')
  })
})


describe('nav bar', () => {
  it('nav bar search bar elements   ', () => {
    const div = cy.get("div[class='hidden relative md:block']")
    const innerDiv = cy.get("div[class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none']")
    innerDiv.find('svg')
    innerDiv.get("span[class='sr-only']").should('contain','Search icon')
    div.get("input[class='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500']")
  })
})


describe('nav bar', () => {
  it('nav bar search bar elements   ', () => {
    const ul = cy.get("ul[class='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700']")
    ul.find('li')
    const link_home = cy.get('li').get("a[class='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white']") 
    link_home.should('contain', 'Home')
    const link_about =cy.get('li').get("a[class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700']") 
    link_about.should('contain', 'About')
    const link_campaigns = cy.get('li').get("a[class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700']") 
    link_campaigns.should('contain', 'Campaigns')
    const link_profile = cy.get('li').get("a[class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700']") 
    link_profile.should('contain', 'Profile')
  })
})

