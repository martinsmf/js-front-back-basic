/// <reference types="Cypress" />

describe('TWP home page', () => {
    const url = Cypress.config('baseUrl')
    it("deve exibir o titulo da página", () => {
       cy.visit(url)
       cy.title().should('contain', 'Training Wheels Protocol')
    });
})