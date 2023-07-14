describe('Home Page Content', () => {
	before(() => {
		cy.visit('/');
	});

	it('should display my name in the header', () => {
		cy.get('header').contains('Michael Liu');
	});

	it('should display my contact information in the footer', () => {
		cy.get('footer').contains('contact@michaelangeliu.com');
	});

	it('should display social media links in the footer', () => {
		cy.get('a[href*="linkedin"]').should('have.attr', 'target', '_blank');
		cy.get('a[href*="github"]').should('have.attr', 'target', '_blank');
		cy.get('a[href*="facebook"]').should('have.attr', 'target', '_blank');
		cy.get('a[href*="instagram"]').should('have.attr', 'target', '_blank');
		cy.get('a[href*="twitter"]').should('have.attr', 'target', '_blank');
	});
});
