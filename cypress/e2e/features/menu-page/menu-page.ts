///   <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the page title {string} on menu screen",()=>{
    cy.get("title").eq(0).should("have.css","display","none");
});

Then("I should see {int} images in breakfast all day", (number: string) => {
    cy.get(".breakfast-always").should("be.visible");
    cy.get(".image-group").eq(1).should("have.css", "opacity", "0").
    find("img").should("have.length", number);
});

Then("I should see {int} images in meals", (number: string) => {
    cy.get(".meals").should("be.visible");
    cy.get(".image-group").eq(2).should("have.css", "opacity", "0").
    find("img").should("have.length", number);
});

Then("I should see {int} images in sweets", (number: string) => {
    cy.get(".sweets").should("be.visible");
    cy.get(".image-group").eq(3).should("have.css", "opacity", "0").
    find("img").should("have.length", number);
});

Then("I should see {int} images in beverages", (number: string) => {
    cy.get(".drinks").should("be.visible");
    cy.get(".image-group").eq(4).should("have.css", "opacity", "0").
    find("img").should("have.length", number);
});

Then("I should see all the headings", ()=> {
    cy.get("h2").should("be.visible");
});