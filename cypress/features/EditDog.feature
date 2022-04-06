Feature: Edit Dog

    Background: Test Precondition
        Given User is on Home page
        And Table of Dogs is empty
        When User fills Add form with parameters:
            | field | value                                                                                         |
            | Breed | Beagle                                                                                        |
            | Nick  | Lucky                                                                                         |
            | Price | 300                                                                                           |
            | Image | https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Beagle_600.jpg/440px-Beagle_600.jpg |
        And Add button is pressed
        Then Dog is saved with expected details and table size is 1

    Scenario: Successfully Edit dog
        When Edit button is pressed
        And User fills Edit form with parameters:
            | field | value                                                                    |
            | Breed | Still Beagle                                                             |
            | Nick  | Lucky                                                                    |
            | Price | 500                                                                      |
            | Image | https://dogtime.com/assets/uploads/2011/01/file_23012_beagle-460x290.jpg |
        And Update button is pressed
        Then Dog is saved with expected details and table size is 1

    Scenario: Edit Dog form and Cancel
        When Edit button is pressed
        And Edit dog form is present with folowing fields:
            | Breed  |
            | Nick   |
            | Price  |
            | Image  |
            | Update |
            | Cancel |
        And User fills Edit and Cancel form with parameters:
            | field | value                                                                    |
            | Breed | Still Beagle                                                             |
            | Nick  | Lucky                                                                    |
            | Price | 500                                                                      |
            | Image | https://dogtime.com/assets/uploads/2011/01/file_23012_beagle-460x290.jpg |
        And Cancel button is pressed
        Then Dog is saved with expected details and table size is 1