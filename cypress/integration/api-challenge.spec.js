/// <reference types="cypress" />

describe('search and view for teacher', () => {

    it('register user', () => {
        cy.request({
            method: 'POST',
            url: 'http://54.207.100.192/auth/register',
            body: {
                name: 'Erick',
                email: 'erick.challenge@test.com',
                password: '123456'
            }
        }).its('body.token').should('not.be.empty')
    })

    it('Create a project', () => {
        cy.getToken('erick.challenge@test.com', '123456')
            .then((token, user_id) => {
                cy.request({
                    method: 'POST',
                    url: 'http://54.207.100.192/projects',
                    headers: { Authorization: `Bearer ${token}` },
                    body: {
                        title: 'Project challenge',
                        description: 'Project challenge QA',
                        tasks: [
                            {
                                name: 'Erick',
                                assignedTo: user_id
                            }
                        ]
                    }
                })
            }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.be.property('project')
        })
    })

    it('get a project', () => {
        cy.getToken('erick.challenge@test.com', '1234')
            .then((token) => {
                cy.request({
                    method: 'GET',
                    url: 'http://54.207.100.192/projects',
                    headers: { Authorization: `Bearer ${token}` }
                })
            }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.be.property('projects')

        })
    })
})