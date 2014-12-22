'use strict';
var app = angular.module('suzanneioApp')
  .controller('MenuCtrl', function ($scope, UI) {
    $scope.isMenuOpen = UI.menu.status;
    $scope.isMenuHovered = false;
    $scope.toggleMenu = function() {
      $scope.isMenuOpen = !$scope.isMenuOpen;
      UI.menu.status = $scope.isMenuOpen;
    };

    $scope.menuHover = function() {
      console.log('hovered');
      $scope.isMenuHovered = !$scope.isMenuHovered;
    };

  });

app.factory('Navigation', function(){
  var Navigation = {};
  Navigation.menu = {
    status: false,
  };

  return Navigation;

});
// app.service('myService', function($q) {
//     var self = this,
//         defer = $q.defer();

//     this.foo = 0;

//     this.observeFoo = function() {
//         return defer.promise;
//     }

//     this.setFoo = function(foo) {
//         self.foo = foo;
//         defer.notify(self.foo);
//     }
// })