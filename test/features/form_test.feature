Feature: CBT Feature

  Scenario Outline: Testing correct filled form
    Given I go to the user_phone input
    When I start typing "<text>"

    Examples:
        | text   |                          
        | dsfsdf |


