(function(){
    "use strict";
    
    var module = angular.module("psMovies");
    
    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        controller: function(){
            var model = this;
            var panels = [];
            
            model.selectPanel = function(panel){
                for(var i in panels) {
                    if(panel == panels[i]) {
                        panels[i].turnOn();
                    }
                    else
                    {
                        panels[i].turnOff();
                    }
                }  
            };
            
            model.addPanel = function(panel){
                panels.push(panel);
                if(panels.length > 0){
                    panels[0].turnOn();
                }
            };
        }
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