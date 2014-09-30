(function () {


    var childModule = angular.module("childModule", []);
    childModule.factory("worker", function ($q) {
        return {
            doAsyncWork: function () {
                var defer = $q.defer();

                setTimeout(function () {
                    defer.resolve("Done");
                }, 2000);

                return defer.promise;

            }
        }
    });

    var mainModule = angular.module("mainModule", ["childModule"]);

    mainModule.config(function($provide) {
        $provide.decorator("$log", function($delegate) {
            return {
                warn:function(msg) {
                    console.log("The wrapped ", msg);
                    $delegate.warn(msg);
                }
            }
        })
    });

    mainModule.controller("demoCtrl", function ($scope, worker, $log) {



        $scope.doWork = function () {

            worker.doAsyncWork().then(function (e) {
                $scope.result = e;
                $log.warn(e);
            });

            //setTimeout(function() {
            //    $scope.result = "Done";
            //}, 2000);
        }


    });

}());