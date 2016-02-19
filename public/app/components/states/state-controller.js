app.controller('StateController', function($scope, $stateParams, StatesService){
    $scope.state = StatesService.getStateByName($stateParams.stateName);
});