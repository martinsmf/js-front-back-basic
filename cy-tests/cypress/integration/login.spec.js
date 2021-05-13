/// <reference types='Cypress'/>

describe('Login', () => {
    const urlLogin = Cypress.config('baseUrl')

    before(() => {
        cy.visit(`${urlLogin}/login`)
        cy.get('#login').should('be.visible')
    })

    it('quando submento minhas credenciasi', () => {
        cy.get('#userId').type('stark')
        cy.get('#passId').type('jarvis!')
        cy.get('.btn-login').click()
    })

    it('então devo ver a área logada', () => {
        cy.get('#flash').should('contain', 'Você acessou a área logada!')
    })
})