/// <reference types="cypress" />


describe('search and view for teacher', () => {
    beforeEach(() => {
        cy.visit('https://www.estrategiaconcursos.com.br/')
    })
    it('search and view for teacher', () => {
        cy.get('[href="https://www.estrategiaconcursos.com.br/cursos/professor/"]').click()
        cy.get('.search > input').type('Ena Loiola{enter}')
        cy.get('.page-result-list > section > .card-prod-title > a').should('include.text', 'Ena Loiola').click()
        cy.get('.js-filter').type('Conhecimentos Específicos p/ Prefeitura Araçariguama-SP (Professor PEB II - Inglês) Pós-Edital')
        cy.get(':nth-child(18) > .card-prod-title > .js-card-prod-name')
            .should('include.text', 'Conhecimentos Específicos p/ Prefeitura Araçariguama-SP')
            .click()
        cy.get('.value').should('contain', '60')
    })

    it('search and view for subject', () => {
        cy.get('[href="https://www.estrategiaconcursos.com.br/cursos/materia/"]').click()
        cy.get('.search > input').type('Administração Financeira e Orçamentária{enter}')
        cy.get('.page-result-list > section > .card-prod-title > a').should('include.text', 'Administração Financeira e Orçamentária').click()
        cy.get('.js-filter').type('Administração Financeira e LRF p/ PREVIFOR-MG (Controlador Interno Previdenciário) Pós-Edital')
        cy.get(':nth-child(21) > .card-prod-title > .js-card-prod-name')
            .should('include.text', 'Administração Financeira e LRF p/ PREVIFOR-MG')
            .click()
        cy.get('.value').should('contain', '64')
    })

    it('search and view for region', () => {
        cy.get('[href="https://www.estrategiaconcursos.com.br/cursos/regiao/"]').click()
        cy.get('.regions-list > :nth-child(4) > ul > :nth-child(4) > a').should('include.text', 'São Paulo').click()
        cy.get('.search > input').type('ANVISA - Passo Estratégico')
        cy.get('.page-result-list > section > .card-prod-title > a').should('include.text', 'ANVISA').click()
        cy.get('[data-type="assinaturas"] > .js-card-prod-container > :nth-child(1) > .card-prod-title > .js-card-prod-name').click()
        cy.get('.value').should('contain', '2.398,80')
    })
})