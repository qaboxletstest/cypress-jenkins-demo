/// <reference types="cypress" />


import login from 'Pages/Login-Page/Login'

describe('POM', () => {

    it('Test', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=bvwtci')
        login.Email.type('test')
        login.Password.type('test')
        login.Submit.click()
    });


});