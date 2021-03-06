Feature: Automate As an Engr. Candidate I need to automate http://www.way2automation.com/angularjs-protractor/webtables/ So I can show my automation capabilities


    Scenario Outline: Add a user and validate the user has been added to the table
        Given I open the site "www.way2automation.com/angularjs-protractor/webtables/"
        When I add  user with the following information <FirstName> <LastName> <username> <password> <Email> <CellPhone>
        Then I see user <username> added to the table
        Examples:
        |FirstName||LastName||username| |password||Email||CellPhone|
        |"TestFirstName"| |"TestLastName"| | "testusername" | |"test12345"||"testuser@testcompany.com"||"123-456-7890"|

   Scenario Outline: Delete user and validate user has been deleted

         When I delete <username>
         Then user <username> is deleted

         Examples:
         |username|
         | "Novak" |
