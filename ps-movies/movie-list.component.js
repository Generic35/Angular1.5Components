(function(){
    "use strict";
    
    var module = angular.module("psMovies");
    
    function fetchMovies($http){
        return $http.get("movies.json")
            .then(function(response){ return response.data; });
    }
    
    function controller ($http){
        var model = this;
        this.movies = [];
        
        model.$onInit = function(){ 
            fetchMovies($http).then(function(movies){ model.movies = movies; }); 
        };   
    }   
    
    module.component("movieList", {
        templateUrl: "/ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });
})();