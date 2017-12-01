//ASYNCRONICO
app.factory('verduraService',["$http","$q",function($http,$q){
    return{
        dbGetVerdura: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'http://localhost:3000/verduras'}).then(function (response) {
                //success
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },
        
        dbGetVerduraPorNombre: function(username){
            var deferred = $q.defer();
            
            $http({method: 'GET', url: 'http://localhost:3000/verduras/?username='+username}).then(function (response) {
                //success
                //debugger;
                deferred.resolve(response.data);
                
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },
        
        dbPostVerdura: function(nuevoVerdura){
            var deferred = $q.defer();
            $http.post("http://localhost:3000/verduras",nuevoVerdura).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                debugger;
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },
        dbBorrarVerdura: function(deletedVerdura){
            var deferred = $q.defer();
            $http.delete("http://localhost:3000/verduras/"+deletedVerdura.id).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },
        dbPutVerdura: function(editedVerdura){
            var deferred = $q.defer();
            $http.put("http://localhost:3000/verduras/"+editedVerdura.id,editedVerdura).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    deferred.reject(response); 
                  }
              );
            return deferred.promise;;
        }
    }
}]);