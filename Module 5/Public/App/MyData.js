/// <reference path="../../Scripts/angular.js" />

(function (angular) {
    "use strict";
    var app = angular.module("myData", ["ngResource"]);

    app.factory("Movie", ['$resource',
      function ($resource) {
          return $resource("/api/movies/:id", { id: '@id' }, {
              save: {
                  method: "PUT"
              }
          });
      }]);

    app.factory("Country", ['$resource',
      function ($resource) {
          return $resource("/api/countries");
      }]);

    app.factory("Director", ['$resource',
      function ($resource) {
          return $resource("/api/directors");
      }]);
}(window.angular));

