app.factory('categoriaService',["$http","$q",function($http,$q){
    return{
        dbGetCategoria: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'http://localhost:3000/Categorias'}).then(function (response) {
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
        
       
        dbPostCategoria: function(nuevaCategoria){
            var deferred = $q.defer();
            $http.post("http://localhost:3000/Categorias",nuevaCategoria).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },
        dbBorrarCategoria: function(deletedCategoria){
            var deferred = $q.defer();
            
            $http.delete("http://localhost:3000/Categorias/"+deletedCategoria.id).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    
                    deferred.reject(response); 
                  }
              );
            return  deferred.promise;
        },

        dbPutCategoria: function(editedCategoria){
            var deferred = $q.defer();
            $http.put("http://localhost:3000/Categorias/"+editedCategoria.id,editedCategoria).then(function (response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                    deferred.reject(response); 
                  }
              );
            return deferred.promise;;
        }
    
    }
}]);