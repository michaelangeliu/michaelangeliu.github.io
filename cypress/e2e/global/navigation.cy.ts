describe('Navigation', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should navigate to the certification page', () => {
		cy.get('a[href*="certifications"]').click();

		cy.url().should('include', '/certifications');
	});

	it('should open to the resume page in a new window', () => {
		cy.get('a[href*="resume"]').should('have.attr', 'target', '_blank');
	});
});

// Prevent TypeScript from reading file as legacy script
export {};
