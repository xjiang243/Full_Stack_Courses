'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
              this.getDishes = function(){
                    return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    };
             this.getPromotions = function(){
                return $resource(baseURL+"promotions/:id",null, {'update':{method:'PUT' }});  
             };
            
             this.getLeadership = function(){
                 return $resource(baseURL+"leadership/:id",null, {'update':{method:'PUT' }});
             };
            
             this.getFeedback = function(){
                 return $resource(baseURL+"feedback",null, {'update':{method:'POST' }});
             }
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            var corpfac = {};
     
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
           
          corpfac.getLeaders = function(){
              
              return $resource(baseURL+"leadership/:id", null, {'update': {method:'PUT'}});
              
          };
          
          return corpfac;
        }]);
