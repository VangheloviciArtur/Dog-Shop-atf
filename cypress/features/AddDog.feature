Feature: Add Dog

    Background: Test Precondition
        Given User is on Home page
        And Add dog form is present with folowing fields:
            | Breed |
            | Nick  |
            | Price |
            | Image |
            | Add   |
        And Table of Dogs is empty

    Scenario: Successfully Add dog with all fields
        When User fills Add form with parameters:
            | field | value                                                                                         |
            | Breed | Beagle                                                                                        |
            | Nick  | Lucky                                                                                         |
            | Price | 300                                                                                           |
            | Image | https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Beagle_600.jpg/440px-Beagle_600.jpg |
        And Add button is pressed
        Then Dog is saved with expected details and table size is 1

    Scenario: Successfully Add dog with only mandatory fields
        When User fills Add form with parameters:
            | field | value   |
            | Breed | Pitbull |
            | Nick  | Pablo   |
            | Price | 560     |
        And Add button is pressed
        Then Dog is saved with expected details and table size is 1

    Scenario: Add dog duplicate
        When User fills Add form with parameters:
            | field | value                                                                                         |
            | Breed | Beagle                                                                                        |
            | Nick  | Lucky                                                                                         |
            | Price | 300                                                                                           |
            | Image | https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Beagle_600.jpg/440px-Beagle_600.jpg |
        And Add button is pressed
        Then Dog is saved with expected details and table size is 1
        When User fills Add form with the same parameters
        And Add button is pressed
        Then Dog is saved with expected details and table size is 2