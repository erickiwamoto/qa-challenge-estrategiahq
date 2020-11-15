Feature: Search and View

    Search and View courses details

    Background: Access home page
        * Access home page

    Scenario Outline: Search by teacher
        Given That the search for a teacher
        When I select the teacher <teacherName>
        And I select the course <courseName>
        And I selec
        Then I check the installment amount of the course matches the total amount of the course
        Examples:
            | teacherName  | courseName                                                                                       |
            | "Ena Loiola" | "Conhecimentos Específicos p/ Prefeitura Araçariguama-SP (Professor PEB II - Inglês) Pós-Edital" |

    Scenario Outline: Search by exam
        Given That the search for a exam
        When I select the exame <examName>
        And I select the course <courseName>
        Then I check the installment amount of the course matches the total amount of the course
        Examples:
            | examName                                    | coursename                                                            |
            | "Agência Brasileira de Inteligência (ABIN)" | "Ciências Humanas p/ ABIN (Agente de Inteligência) 2020 - Pré-Edital" |

    Scenario Outline: Search by subject
        Given That the search for a subject
        When I select the subject <subjectName>
        And I select the course <courseName>
        Then I check the installment amount of the course matches the total amount of the course
        Examples:
            | subjectName                           | courseName                                                                                             |
            | "Administração de Recursos Materiais" | "Administração de Recursos Humanos p/ TRT 8ª Região (Analista Judiciário - Área Administrativa) -2020" |

    Scenario Outline: Search by region
        Given That the search for a region
        When I select the region <regionName>
        And I select the exame <examName>
        And I select the course <courseName>
        Then I check the installment amount of the course matches the total amount of the course
        Examples:
            | regionName         | examName                                    | courseName                                                                  |
            | "Distrito Federal" | "Agência Brasileira de Inteligência (ABIN)" | "Direito Administrativo p/ ABIN (Agente de Inteligência) 2020 - Pré-Edital" |  