app.factory('ofertaService',["$http","$q",function($http,$q){
    return{
        dbGetOferta: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'http://localhost:3000/Ofertas'}).then(function (response) {
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
        
       
        dbPostOferta: function(nuevoOferta){
            var deferred = $q.defer();
            $http.post("http://localhost:3000/Ofertas",nuevoOferta).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },
        dbBorrarOferta: function(deletedOferta){
            var deferred = $q.defer();
            
            $http.delete("http://localhost:3000/Ofertas/"+deletedOferta.id).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },

        dbPutOferta: function(editedOferta){
            var deferred = $q.defer();
            $http.put("http://localhost:3000/Ofertas/"+editedOferta.id,editedOferta).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    deferred.reject(response); 
                  }
              );
            return deferred.promise;;
        }
    
    }
}]);