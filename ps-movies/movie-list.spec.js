describe("The mvoieList component", function() {
    beforeEach(module("psMovies"));
    
    var moviesList;
    beforeEach(inject(function ($componentController) {
        moviesList = $componentController("movieList", {
            $scope: {}
        });        
    }));
    
    it("can be created successfully", function() {
        expect(moviesList).toBeDefined();
    });
    
     it("has a $onInit method implemented", function() {
        expect(moviesList.$onInit).toBeDefined();
    });
});
