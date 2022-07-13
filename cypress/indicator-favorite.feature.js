import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
const HOME_PAGE = "http://localhost:300)"

Given('Visit to Home Page', () => {
    cy.visit(HOME_PAGE)

})
When('I click  nav link to go to Albums', () => {
    cy.get(" .link .link--albums").click()
})
And('I choose some album', () => {
    cy.get('button.list-group-item.list-group-item-action"').contains("quidem molestiae enim").click()
})
And('I click apply filter', () => {
    cy.get('svg.bi.bi-star').click()
})
Then('Favorite Indicator stand fill', () => {
    expect(cy.get('svg.bi.bi-star-fill')).to.exist()
})