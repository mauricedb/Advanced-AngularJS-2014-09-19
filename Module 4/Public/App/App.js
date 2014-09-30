var app = angular.module("myApp", ["externals", "myApp.movies", "myApp.directors"]);


app.controller("indexCtrl", ["$scope", "movies", "directors", "$filter", "_",
    function ($scope, m, directors, $filter, _) {
        //$scope.now = new Date();

        var dateFilter = $filter("date");
        $scope.now = dateFilter(new Date());

        $scope.movies = m;

        $scope.directorName = function (directorId) {
            var director = _.find(directors, function (d) {
                return d.id === directorId;
            });

            if (director) {
                return director.name;
            } else {
                return "(Unkown)";
            }
        }
    }]);


app.controller("movieCtrl", function ($scope) {
    $scope.movie = {
        title: "About Schmidt",
        description: "When insurance actuary Warren Schmidt (Jack Nicholson) retires and his wife dies, he looks for life's meaning on a road trip to his daughter's (Hope Davis) upcoming wedding to a waterbed salesman (Dermot Mulroney). But Schmidt can't seem to get anything right. En route to the wedding, he shares his life through letters with a Tanzanian boy he's sponsoring for 73 cents a day -- and soon, Schmidt discovers renewed purpose."

    };

})