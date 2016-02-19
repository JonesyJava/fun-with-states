app.controller('StatesController', function($scope, StatesService){
    
    StatesService.getStates()    
        .success(function(res){
            $scope.states = res;
        })    
    
});