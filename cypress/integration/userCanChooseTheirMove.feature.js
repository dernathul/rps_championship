describe('User can see their chances', () => {
	it('user can see rock paper scissors game', () => {
		cy.visit('http://localhost:3001')
	})
})
describe('User can choose a move', () => {
	it('user choose a move', () => {
		cy.visit('http://localhost:3001')
        cy.contains('Make your move')
        cy.contains('#Rock').click()
	})
})
// describe("page can show results", () => {
// 	beforeEach('round', () => {
// 		cy.visit("http://localhost:3001")
// 		cy.get('#r').click();
// 	})
// 	describe("the game is a tie", () => {
// 		beforeEach("round")
// 	})
// })