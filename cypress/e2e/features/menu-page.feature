Feature: Menu Page

Scenario: Verify the page title on the screen and the title should be tested with specific words
    When I visit the menu Page
    Then I should see the page title 'Shri Durga Darshini: Menu' on menu screen

Scenario: Verify the navigation bar's visibility on the screen
    When I visit the menu Page
    Then I should see the navigation bar on every screen

Scenario: Verify that hero section is visble on the screen
    When I visit the menu Page
    Then I should see the hero section

Scenario: Verify the explore button functionality on the screen
    When I visit the menu Page
    Then I should click on explore to check its functionality

Scenario: Verify that the footer and its content on the screen
    When I visit the menu Page
    Then I should see the footer and its content

Scenario: Verify that back to top button on the screen
    When I visit the menu Page
    Then I should see the back to top button

Scenario: Verify no of images for every section
    When I visit the menu Page
    Then I should see 4 images of breakfast in Menu
    Then I should see 6 images in breakfast all day
    Then I should see 2 images in meals
    Then I should see 2 images in sweets
    Then I should see 6 images in beverages

Scenario: Verify all headings in menu Page
    When I visit the menu Page
    Then I should see all the headings