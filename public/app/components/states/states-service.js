app.service('StatesService', function($http){
    //HOW DO SERVICES WORK???
    this.getStates = function(){
        return $http.get('/states');
    }    
    
});