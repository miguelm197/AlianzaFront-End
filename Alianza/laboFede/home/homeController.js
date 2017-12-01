app.controller("homeController",["$scope","$location", "AuthenticationService","md5","$rootScope",function($scope, $location, AuthenticationService,md5,$rootScope){



    $scope.$watch("globals",function() {
        $scope.displayLogout = $rootScope.globals?true:false;
    });
    

    $scope.login = function() {
        $scope.dataLoading = true;
        var md5UserPassword= md5.createHash($scope.password);   // Encripta contraseña para chequear con BD
        AuthenticationService.Login($scope.username, md5UserPassword, function (response) {
            if (response.success) {
                console.log("logueado ok");
                AuthenticationService.SetCredentials($scope.username, md5UserPassword, response.userRole);
                if  (response.userRole=="admin"){
                    $rootScope.userAdmin = true;
                    $rootScope.muestraEsto = false;
                    $location.path('/dashboard');
                }else{
                    $rootScope.userAdmin = false;
                    $rootScope.muestraEsto = true;
                    $location.path('/inicio');
                }
            } else {
                $scope.dataLoading = false;
                console.log("Error:"+response.message);
            }
        });
    };

    $scope.logout = function() {
        AuthenticationService.ClearCredentials();   
        $location.path('/inicio');
    }


}]);