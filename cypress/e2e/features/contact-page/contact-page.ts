///   <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the page title {string} on contact screen", () => {
    cy.get("title").eq(0).should("have.css","display","none");
});

Then("I should see the form is open", () => {
    cy.get(".contact-form").should("be.visible");
});

Then("I fill all the details in the form and submit", () => {
    cy.get('#name').type('Vishvadha Anand');
    cy.get('#number').type("9876543210");
    cy.get("#email").type('vish@gmail.com');
    cy.get('#address').type('hyderabad');
    cy.get('#reason').type('party');
    const dateAndTime = "2023-02-24T15:30"
    cy.get('input[type="datetime-local"]').type(dateAndTime);
    cy.get('input[type="datetime-local"]').should('have.value', dateAndTime);
    cy.get("#items").type("drinks");
    cy.get(".btn").eq(1).click();
});

Then("I should see the alert screen when the form is submitted", () => {
   cy.get(".btn").eq(1).click();
   cy.on('window:alert', (text) => {
    expect(text).to.equal('Website is not completed yet. Please try again later.')
});
});