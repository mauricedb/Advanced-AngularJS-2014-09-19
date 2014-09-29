(function () {
    'use strict';

    var mod = angular.module("mainModule", [""]);

    mod.controller("demoCtrl", function ($scope, $rootScope) {

        $scope.clickMe = function () {

            //$scope.$emit("SomeEvent");
            $rootScope.$broadcast("SomeEvent", {});
            $scope.$root.$broadcast("SomeEvent");
        }

    });


    mod.controller("demo2Ctrl", function ($scope) {

        $scope.$on("SomeEvent", function (e) {
            console.log("SomeEvent just fired", e);
        });
    });


}());

