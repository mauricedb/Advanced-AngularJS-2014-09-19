(function() {
    var app = angular.module("demoApp", []);

    app.controller("demoCtrl", function($scope) {

    });


    app.directive("myFocus", function() {

        return {
            scope: true,
            link: function(scope, element) {
                element[0].focus();

                element.bind("click", function()
                {});

                element.on("$destroy", function() {
                    element.unbind("click");
                });
            }
        }
    })


    app.directive("myTemplate", function() {

        return {
            template: "<span>A new span<span ng-transclude=true></span></span>",
            replace: true,
            transclude: true,
            require:"?ngModel",
            link:function(scope, element) {
                console.log(scope.n)

                if (scope.n % 2 == 0) {
                    element.addClass("even");
                }
            }
        }
    });
}());