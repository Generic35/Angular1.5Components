(function(){
    "use strict";
    
    var module = angular.module("psMovies");
    
    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>"
    });
    
    module.component("accordionPanel", {
        transclude: true,
        template:   "<div class='panel panel-default'>" +
                        "<div class='panel-body' ng-transclude>" +
                        "</div>" +
                    "</div>"
    });
})();