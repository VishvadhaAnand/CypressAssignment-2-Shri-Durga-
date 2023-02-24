Feature: About Page

Scenario: Verify the navigation bar's visibility on the screen
    When I visit the about page
    Then I should see the navigation bar on every screen

Scenario: Verify that hero section is visble on the screen
    When I visit the about page
    Then I should see the hero section

Scenario: Verify the explore button functionality on the screen
    When I visit the about page
    Then I should click on explore to check its functionality

Scenario: Verify that the footer and its content on the screen
    When I visit the about page
    Then I should see the footer and its content

Scenario: Verify that back to top button on the screen
    When I visit the about page
    Then I should see the back to top button

Scenario: Verify the page title on the screen and the title should be tested with specific words
    When I visit the about page
    Then I should see the page title 'Shri Durga Darshini: About' on about screen