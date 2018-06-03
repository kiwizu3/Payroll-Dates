/// <reference types="Cypress" />

context('Home Page', function() {
	context('Location Buttons', function() {
		var locationButtonsArray = ['Southwestern University', 'Stanford University', 'University of Central Florida', 'Villanova University', 'Bermuda', 'Canada', 'Hong Kong', 'Italy', 'Netherlands', 'Philippines', 'Singapore'];
		
		before(function() {
			cy.visit('https://qln-supercamp.github.io/Payroll-Dates/');
		});		
		
		locationButtonsArray.forEach(function(site) {
			context(site, function() {
				it('should have the logo visible');
				it('should scroll to the ' + site + ' section when clicked');
			});
		});
	});
});