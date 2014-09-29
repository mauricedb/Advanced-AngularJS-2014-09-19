(function () {
    var app = angular.module("demoApp", []);


    app.controller("movieCtrl", function ($scope) {

        $scope.directors = window.directors;
        $scope.countries = window.countries;

        $scope.movie = {
            "id": 7,
            "title": "The Adventures of Robin Hood",
            "description": "This 1985 animated adaptation of the classic legend follows the brave exploits of Robin Hood, a noble thief (and an ace with a bow and arrow) who steals from the rich to give to the poor. Dwelling deep within the glades of Sherwood Forest, Robin and his band of merry men elude the Sheriff of Nottingham, rescue Maid Marion and thwart wretched Prince John to preserve the throne for England's true king, Richard the Lionhearted.",
            "year": 1938,
            "rating": "NR",
            "directorID": 6,
            "countryID": 2,
            "posterName": "TheAdventuresofRobinHood.jpg"
        };

        $scope.save = function () {
            if ($scope.frm.$valid) {
                alert("Saving: " + $scope.movie.title);
            } else {
                alert("Invalid data");
            }
            console.log($scope.frm);
        }
    });


}());