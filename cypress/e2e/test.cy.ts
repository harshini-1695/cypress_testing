describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show an error message on submitting without a password', () => {
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('button').click();
    cy.get('.message').contains('Email and password fields are required').should('be.visible');
  });

  it('should show an error message on submitting without an email', () => {
    cy.get('input[type="password"]').type('123456');
    cy.get('button').click();
    cy.get('.message').contains('Email and password fields are required').should('be.visible');
  });

  it('should show a success message when both email and password are filled', () => {
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('input[type="password"]').type('123456');
    cy.get('button').click();
    cy.get('.message').contains('Successfully logged in').should('be.visible');
  });
});
