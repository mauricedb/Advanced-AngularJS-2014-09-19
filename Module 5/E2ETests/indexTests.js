describe('The index page', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080');

    });

    it('should have a title', function () {

        expect(browser.getTitle()).toEqual('Movies');
    });


    it("can edit movies", function () {
        element(by.repeater("movie in movies")
                .row(5)
                .column("movie.title"))
            .click();

        var e = element(by.model("selectedMovie.title"));
        var title = e.getAttribute('value');
        expect(title).toBe("The Adjuster");

        e.sendKeys("Other text");

        var button = element(by.id("save"));
        //button.click();
    })
});