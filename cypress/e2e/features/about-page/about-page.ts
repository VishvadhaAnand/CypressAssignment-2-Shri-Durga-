///   <reference types="cypress" />

import { Then} from "@badeball/cypress-cucumber-preprocessor";
  
Then("I should see the page title {string} on about screen", ()=> {
   cy.get("title").eq(0).should("have.css","display","none");
});