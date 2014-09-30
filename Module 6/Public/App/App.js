var app = angular.module("myApp", []);

app.controller("demoCtrl", function ($scope, $sce) {
    console.log($scope);

    $scope.snippet = $sce.trustAsHtml("<div>Data</div>");
});


app.directive("myDirective1", function () {
    return {
        scope: {},
        link: function () {
            console.log("myDirective1");
        }
    }
})

app.directive("myDirective2", function () {
    return {
        scope: {},
        link: function () {
            console.log("myDirective2");
        }
    }
})


//var o = { x: 1 };


//var watches = [
//    {
//        oldValue: undefined,
//        watch: function () {
//            return o.x;
//        }
//    }
//];

//function digest() {
//    watches.forEach(function(watch) {
//        var current = watch.watch();
//        if (current !== watch.oldValue) {
//            console.log(watch.oldValue, current);
//            watch.oldValue = current;
//        }
//    })
//}


////Object.observe(o, function(e) {
////    console.log(e);
////});

//digest();
//o.x = 2;
//digest();
//o.y = 3;
//digest();
