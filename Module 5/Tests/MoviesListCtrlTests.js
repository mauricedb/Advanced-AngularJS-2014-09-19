describe("The MoviesListCtrl", function () {
    var ctrl, scope;

    beforeEach(module("myApp"));

    beforeEach(inject(function ($controller) {
        scope = {};
        ctrl = $controller("MoviesListCtrl", {
            $scope: scope,
            movies: []
        });

    }));

    it("can be creates", function () {
        expect(ctrl).toBeDefined();
    });

});


describe("The innerText directive", function () {
    var element, scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        var html = "<div inner-text='Some text'></div>";
        element = angular.element(html);
        var linkFn = $compile(element);
        linkFn(scope);
    }));

    it("should add the inner text", function () {
        scope.$apply();
        var text = element.text();
        expect(text).toBe("Some text");
    });

});
