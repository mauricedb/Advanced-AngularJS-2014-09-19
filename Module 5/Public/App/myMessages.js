(function (angular) {
    "use strict";

    var mod = angular.module("myMessages", []);

    mod.factory("myMessage", function() {
        return{
            info: function (msg) {
                toastr.info(msg);
            }
        }
    });

}(window.angular));
