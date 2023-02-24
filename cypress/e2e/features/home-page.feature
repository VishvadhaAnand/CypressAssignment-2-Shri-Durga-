Feature: Home Page

Scenario: Verify that hero section is visble on the screen
    When I visit the Home Page
    Then I should see the hero section

Scenario: Verify the explore button functionality on the screen
    When I visit the Home Page
    Then I should click on explore to check its functionality

Scenario: Verify that the footer and its content on the screen
    When I visit the Home Page
    Then I should see the footer and its content

Scenario: Verify that back to top button on the screen
    When I visit the Home Page
    Then I should see the back to top button

Scenario: Verify the page title on the screen and the title should be tested with specific words
    When I visit the Home Page
    Then I should see the page title 'Shri Durga Darshini' on the screen

Scenario: Verify the display of About, Menu and Contact link from Home Page
    When I visit the Home Page
    Then I should see About in Home Page
    Then I should see Menu in Home Page
    Then I should see Contact in Home Page

Scenario: Verify that Menu should have four images and Party order should have two images
    When I visit the Home Page
    Then I should see 4 images of breakfast in Menu
    Then I should see 2 images in Party order

Scenario: Verify that the navigation bar is visible and navigation to other screens from the home screen is working
    When I visit the Home Page
    Then I should see the navigation bar on every screen
    Then I should click About Us to navigate to other screen
    Then I should click View The Full Menu to navigate to other screen
    Then I should click Get The Quote to navigate to other screen