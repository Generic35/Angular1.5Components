(function(){
    "use strict";
    
    var module = angular.module("psMovies");
    
    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>"
    });
                        
    module.component("accordionPanel", {
        bindings: {
            "heading": "@"
        },
        transclude: true,
        controllerAs: "model",
        template:   "<div class='panel panel-default'>" +
                        "<div class='panel-heading'> " +
                            "<h4 class='panel-title'>{{ model.heading }}</h4>" +
                        "</div>" +
                        "<div class='panel-body' ng-transclude>" +
                        "</div>" +
                    "</div>"
    });
})();