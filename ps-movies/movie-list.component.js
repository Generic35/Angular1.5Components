(function(){
    "use strict";
    
    var module = angular.module("psMovies");
    
    module.component("movieList", {
        templateUrl: "/ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: function(){
            this.message = "hello from the component's controller using model";
        }   
    });
})();