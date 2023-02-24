import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the Home Page", () => {
  cy.visit("/");
  });

When("I visit the menu Page", () => {
  cy.visit("/resources/pages/menu.html");
  cy.url().should("contain", "/resources/pages/menu.html");
  });

When("I visit the contact page", () => {
  cy.visit("/resources/pages/contact.html");
  cy.url().should("contain", "/resources/pages/contact.html");
});

When("I visit the gallery page", () => {
  cy.visit("/resources/pages/gallery.html");
cy.url().should("contain", "/resources/pages/gallery.html");
});

When("I visit the about page", () => {
  cy.visit("/resources/pages/about.html");
cy.url().should("contain", "/resources/pages/about.html");
});

Then("I should see the navigation bar on every screen", () => {
    cy.get(".nav").should("be.visible");
});

Then("I should see the hero section", () => {
    cy.get(".hero").should("be.visible");
});

Then("I should click on explore to check its functionality", () => {
    cy.get("a").eq(6).click()
  .should("have.attr", "href");

});

Then("I should see the footer and its content", () => {
    cy.get("footer").should("be.visible");
    cy.get(".footer-content-about").should("have.css", "opacity", "0");
    cy.get(".footer-content-divider").should("have.css", "opacity", "0");
    cy.get(".fas");
    cy.get(".fab")
    cy.get("h4");
});

Then("I should see the back to top button", () => {
    cy.get(".back-to-top").click().get("#hero");
});

Then("I should see {int} images of breakfast in Menu", (number: string) => {
  cy.get(".restaurant-info").eq(1).should("be.visible");
  cy.get(".image-group").eq(0).should("have.css", "opacity", "0").
  find("img").should("have.length", number);
});
