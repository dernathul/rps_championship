describe('Game interface', () => {
    it('successfully renders',() => {
      cy.visit('http://localhost:3000');
      cy.get('#home').should('contain', 'Rock, Paper, Scissors Championship');
      cy.get('#footer').should('contain', 'Made with React 16.12.0');
    })
  })