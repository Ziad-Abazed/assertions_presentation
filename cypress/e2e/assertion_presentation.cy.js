/// <reference types="cypress"/>



Cypress.Commands.add("VisitAlmosafer", () => {
  cy.visit("https://global.almosafer.com/ar")
  cy.get('.cta__saudi').click()
});
describe('almosafer tests', () => {

  it('sure that the default currency is SAR', () => {
    cy.VisitAlmosafer()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke("text").should("include","SAR")
  });

  it('sure that the default langauge is Arabic', () => {
    cy.VisitAlmosafer()
    cy.get('[data-testid="Header__LanguageSwitch"]').invoke("text").should("include","English")
    
  });

  it('sure that the flight tab is clicked by default', () => {
    cy.VisitAlmosafer()
    cy.get('#uncontrolled-tab-example-tab-flights').invoke('attr', 'aria-selected').should('eq', 'true')
    
  });
  
});
