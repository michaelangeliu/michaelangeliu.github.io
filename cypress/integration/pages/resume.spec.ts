describe('Resume Page Content', () => {
	before(() => {
		cy.visit('/resume');
	});

	it('should display my name in the header', () => {
		cy.get('header').contains('Michael Liu');
	});

	it('should display my contact information in the footer', () => {
		cy.get('footer').contains('contact@michaelangeliu.com');
		cy.get('footer').contains('michaelangeliu.com');
	});
});
