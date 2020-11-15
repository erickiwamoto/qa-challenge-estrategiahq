Feature: API Challenge

    Scenario: Register new user successfully
        Given I register a user with "username" and "passwod"
        When i POST to "/auth/register"
        Then i recive status code 200

    Scenario: Register with duplicate user
        Given I register a user with "username" and "passwod"
        When i POST to "/auth/register"
        Then i recive status code 409

    Scenario: Get user successfully
        Given I get a user with "username" and "passwod"
        When i POST to "/auth/authenticate"
        Then i recive status code 200
        And i recive token

    Scenario: Get non-existing user
        Given I get a user with "username" and "passwod"
        When i POST to "/auth/authenticate"
        Then i recive status code 400

    Scenario: Create new project successfully
        Given I create a new project
        When i POST to "/projects"
        Then i recive status code 200

    Scenario: Get all project successfully
        When i GET to "/projects"
        Then i recive status code 200
        And i recive all projects

    Scenario: Get one project successfully
        When i GET one project to "/projects/{id}"
        Then i recive status code 200
        And i recive one project

    Scenario: Edit project successfully
        When i PUT one project to "/projects/{id}"
        Then i recive status code 201

    Scenario: Delete project successfully
        When i DELETE one project to "/projects/{id}"
        Then i recive status code 204