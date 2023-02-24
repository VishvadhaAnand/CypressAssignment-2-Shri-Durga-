///   <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the page title {string} on the screen",()=>{
    cy.get("title").eq(0).should("have.css","display","none");
});
  
Then("I should see About in Home Page", () => {
    cy.get(".nav-link").eq(4).click();
    cy.url().should("contains", "about");
});

Then("I should see Menu in Home Page", () => {
    cy.get(".nav-link").eq(1).click();
    cy.url().should("contains", "menu");
});

Then("I should see Contact in Home Page", () => {
    cy.get(".nav-link").eq(3).click();
    cy.url().should("contains", "contact");
});

Then("I should see {int} images in Party order", (number: string) => {
    cy.get(".restaurant-info").eq(2).should("be.visible");
    cy.get(".image-group").eq(1).should("have.css", "opacity", "1").find("img").should("have.length", number);
});

Then("I should click About Us to navigate to other screen", () => {
    cy.get(".btn").eq(1).click();
    cy.url().should("contains", "about");
});

Then("I should click View The Full Menu to navigate to other screen", () => {
    cy.visit("/");
    cy.get(".btn").eq(2).click();
    cy.url().should("contains", "menu");
});

Then("I should click Get The Quote to navigate to other screen", () => {
    cy.visit("/");
    cy.get(".btn").eq(3).click();
    cy.url().should("contains", "contact");
});