app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/states');
    
    $stateProvider
        .state('states', {
            url: '/states',
            controller: 'StatesController',
            templateUrl: '/app/components/states/states.html'
        })
        .state('state', {
            url: '/states/:stateName',
            controller: 'StateController',
            templateUrl: '/app/components/states/state.html',
            // resolve: {
            //     USState: function($stateParams, StatesService){
                    
            //     }
            // }
        })
    
})