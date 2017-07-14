/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('pizza').controller('SprintController', ['$scope', 'BoardService', 'BoardDataFactory', function ($scope, BoardService, BoardDataFactory) {

  $scope.sprintBoard = BoardService.sprintBoard(BoardDataFactory.sprint);

  $scope.sprintSortOptions = {

    //restrict move across backlogs. move only within backlog.
    accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
      return sourceItemHandleScope.itemScope.sortableScope.$parent.$parent.backlog.$$hashKey === destSortableScope.$parent.$parent.backlog.$$hashKey && destSortableScope.modelValue.length < 2;
    },
    itemMoved: function (event) {
    },
    orderChanged: function (event) {
    },
    containment: '#board'
  };
  $scope.allItemsChecked = function (card) {
    return card.items.every(function (item) {
      return item.checked;
    })
  }
}]);
