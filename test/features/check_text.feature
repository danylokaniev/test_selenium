Feature: CBT Feature

  Scenario Outline: Test text
    Given I go to the web site
    When I find the div with classname "<classname>"
    Then I should check text "<text>"

    Examples:
        | classname                             | text                  |
        | infochart-cell__short-description     | Of Southwest Flyers Felt Digital Wayfinding Improved Navigation |


