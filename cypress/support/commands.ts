/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    templateCommand(): Chainable<unknown>
  }
}
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('templateCommand', () => {
  cy.visit(`http://localhost:${Cypress.env('portEnv')}`).then(() => {

    cy.get('[data-test-id="template"]').type(Cypress.env('usernameEnv'))

  })

})
