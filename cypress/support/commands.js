Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Polan')
    cy.get('#lastName').type('Rutyna')
    cy.get('#email').type('polanrutyna@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})