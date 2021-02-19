class Login {
    get Email() {
        return cy.get('input[type="email"]')
    }
    get Password() {
        return cy.get('input[type="password"]')
    }
    get Submit() {
        return cy.get('button[type="submit"]')
    }
}

const login = new Login()

export default login