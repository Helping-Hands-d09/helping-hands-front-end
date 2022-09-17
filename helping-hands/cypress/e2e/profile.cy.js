describe('Profile page', () => {
  it('profile url ', () => {
    cy.visit('http://localhost:3000/HomePage#')
    cy.url().should('include', '/')
  })
})


describe('Profile page', () => {
  it('profile a tags  ', () => {
    const div3 = cy.get("div[class='flex flex-col w-64 py-4 pr-3']")
    div3.get("a[class='px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300']").should('contain', 'Home')
    div3.get("a[class='px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300']").should('contain', 'Campaigns')
    div3.get("a[class='px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300']").should('contain', 'Profile')
  })
})


describe('Profile page', () => {
  it('profile buttons tags  ', () => {
    const btn = cy.get("button[class='flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400']")
    btn.should('contain', 'Create Post')
    btn.should('contain', 'Create Campaign')
  })
})


describe('Profile page', () => {
  it('profile /feed tags ', () => {
    const div = cy.get("div[class='flex w-full p-8 border-b border-gray-300']")
    const span = div.find("span[class='flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full']")
    span.should('contain', '')

    const innerDiv =  cy.get("div[class='flex flex-col flex-grow ml-4']")
    innerDiv.find("div[class='flex']")    
  })
})


describe('Profile page', () => {
  it('profile /feed buttons tags  ', () => {

    cy.get("button[class='text-sm font-semibold']").should('contain', 'Like')
    const btn = cy.get("button[class='ml-2 text-sm font-semibold']")
    btn.should('contain', 'Reply')
    btn.should('contain', 'Share')
  })
})





