Feature: CBT Feature

  Scenario Outline: Click on the links
    Given I go to web site
    When I find the button "<button>"
    Then I should go to "<link>"

   ## Examples:
       ## | button                  | link                  |
       ## | header__logo-container  | https://www.epam.com/ |
       ## | cta-button-ui cta-button--envelope header__control      | https://www.epam.com/ |
       ## | rollover-tiles__link      | https://www.epam.com/ |


