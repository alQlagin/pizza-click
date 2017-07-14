/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('pizza').service('BoardDataFactory', function () {

  return {
    kanban: {
      "name": "Kanban Board",
      "numberOfColumns": 4,
      "columns": [
        {
          "name": "Ideas", "cards": [
            { "title": "Come up with a POC for new Project" },
            { "title": "Design new framework for reporting module" }
          ]
        },
        {
          "name": "Not started", "cards": [
            {
              "title": "Explore new IDE for Development",
              "details": "Testing Card Details"
            },
            {
              "title": "Get new resource for new Project",
              "details": "Testing Card Details"
            }
          ]
        },
        {
          "name": "In progress", "cards": [
            {
              "title": "Develop ui for tracker module",
              "details": "Testing Card Details"
            },
            {
              "title": "Develop backend for plan module",
              "details": "Testing Card Details"
            }
          ]
        },
        {
          "name": "Done", "cards": [
            {
              "title": "Test user module",
              "details": "Testing Card Details"
            },
            {
              "title": "End to End Testing for user group module",
              "details": "Testing Card Details"
            },
            {
              "title": "CI for user module",
              "details": "Testing Card Details"
            }
          ]
        }
      ]
    },
    sprint: {
      "name": "Sprint Board",
      "numberOfColumns": 5,
      "columns": [
        { "name": "Сборка" },
        { "name": "Духовка" },
        { "name": "Добавки" },
        { "name": "Упаковка" },
        { "name": "Отправка" },
      ],
      "backlogs": [
        {
          "title": "Заказ №1",
          "details": "backlog id 1",
          "phases": [
            {
              "name": "Сборка",
              "cards": [
                {
                  "title": "Explore new IDE for Development",
                  "details": "Testing Card Details",
                  "status": "Сборка",
                  "items": [
                    {
                      text: "тесто",
                      checked: false,
                    },
                    {
                      text: "coyc",
                      checked: false,
                    },
                    {
                      text: "сыр",
                      checked: false,
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    block: {
      "columns": [
        {
          "name": "Ideas", "cards": [
            {
              "title": "Come up with a POC for new Project",
              "details": "Testing Card Details Testing Card Details Testing Card Details Testing Card Details"
            },
            {
              "title": "Design new framework for reporting module",
              "details": "Testing Card Details"
            },
            {
              "title": "Test user module",
              "details": "Testing Card Details"
            },
            {
              "title": "End to End Testing for user group module",
              "details": "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card Details" +
              "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card Details" +
              "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card Details"
            },
            {
              "title": "CI for user module",
              "details": "Testing Card Details Testing Card Details Testing Card Details"
            }
          ]
        },
        {
          "name": "Not started", "cards": [
            {
              "title": "Explore new IDE for Development",
              "details": "Testing Card Details Testing Card Details Testing Card Details"
            },
            {
              "title": "Get new resource for new Project",
              "details": "Testing Card Details"
            },
            {
              "title": "Develop ui for tracker module",
              "details": "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card" +
              "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card" +
              "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card" +
              "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card" +
              "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card"
            },
            {
              "title": "Develop backend for plan module",
              "details": "Testing Card Details"
            }
          ]
        }
      ]
    }
  };
});
