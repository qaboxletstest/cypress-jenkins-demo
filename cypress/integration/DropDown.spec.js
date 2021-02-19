describe('XPath', () => {
    it('testautomationpractice select drop down', () => {
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('select#files').select('PDF file')
    });

    it('Google Auto Completion', () => {
        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('javascript')
        cy.get('li.sbct span').contains('javascript compiler').click({ force: true })
    });

    it('automationpractice Auto Completion', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('input#search_query_top').type('dress')
        cy.get('div.ac_results li').contains('Printed Chiffon').click()
    });
});