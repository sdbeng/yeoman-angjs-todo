'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Go to San Jose',
      'Buy a mbpro in San Francisco',
      'Fix bank accounts',
      'Pay rent'
    ];
    $scope.addTodo = function() {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    //add some logic for removing todo items to our controller
    $scope.removeTodo = function(index) {
    	//removes 1 todo item from items array using the splice() method at the given $index value.
    	$scope.todos.splice(index, 1);
    };
  });
