var mod = angular.module("filterApp", []);

mod.controller("moviesCtrl", function($scope) {
    $scope.searchText = "";

    $scope.movies = movies;

})