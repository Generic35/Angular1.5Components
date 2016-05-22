(function(){
    "use strict";
    
    var module = angular.module("psMovies");
    
    module.component("movieDetails", {
        controllerAs: "model",
        templateUrl: "/ps-movies/movie-details.component.html",
        $routeConfig: [
            { path:"/overview", component:"movieOverview", name:"Overview"},
            { path:"/cast", component:"movieCast", name:"Cast"},
            { path:"/director", component:"movieDirector", name:"Director"}
        ],
        controller: function(){
            var model = this;
            
            model.$routerOnActivate = function(next){
                model.id = next.params.id;
            };
        }
    });
    
    module.component("movieOverview", {
        template:"Hello from movie Overview"
    });
    
    module.component("movieDirector", {
        template:"Hello from movie Director"
    });
    
    module.component("movieCast", {
        template:"Hello from movie cast"
    });
})();