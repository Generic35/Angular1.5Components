(function() {
    "use strict";
    
    //creating psMovie module
    var module = angular.module("psMovies", ["ngComponentRouter"]);

    module.value("$routerRootComponent", "movieApp");

    module.component("appAbout", { template: "this is the about page"});
}());