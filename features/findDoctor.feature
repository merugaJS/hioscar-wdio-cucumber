Feature: Find Doctor

  Scenario Outline: Verify Find Doctor, for type <type> and search key <searchKey> is valid <isSearchValid>

    Given I am on the landing page
    When I click on find doctor to search
      And I select a network for search criteria
        | year | access     | network | state      |
        | 2023 | Individual | Oscar   | New Jersey |
    Then I verify I land on Find care page
      And I verify <type> search key <searchKey> is <isSearchValid>

    Examples:
      | type       | searchKey | isSearchValid |
      | Providers  | Suja      | true          |
      | Facilities | RWJ       | true          |
      | Drugs      | liptor    | true          |
      | All        | @#$$      | false         |
