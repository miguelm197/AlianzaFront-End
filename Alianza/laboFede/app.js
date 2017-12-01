var app = angular.module("miApp",['ngRoute','ngCookies','angular-md5','angular.filter','ngFileUpload']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider
    .when('/inicio', {
        templateUrl: './inicio/inicio.html',
        controller: 'inicioController'
    })
      .when('/listausuarios',{
        templateUrl: './usuarios/listausuarios.html',
        controller: 'usuarioController'
    })
    ///.when('/listaverduras',{
    //    templateUrl: './productos/listaverduras.html',
   //     controller: 'verduraController'
    //})
    .when('/registro', {
        templateUrl: './usuarios/registro.html',
        controller: 'usuarioController'
    })
    .when('/login', {
        templateUrl: './home/login.html',
        controller: 'homeController'
    })
    .when('/dashboard', {
        templateUrl: './views/dashboard.html'
        //controller: 'homeController',
    })
    .when('/dashboard/usuarios', {
        templateUrl: './usuarios/listausuarios.html',
        controller: 'usuarioController'
    })
    .when('/dashboard/productos', {
        templateUrl: './productos/listaverduras.html',
        controller: 'verduraController'
    })
    .when('/dashboard/ofertas', {
        templateUrl: './ofertas/listaofertas.html',
        controller: 'ofertaController'
    })
    .when('/dashboard/categorias', {
        templateUrl: './categorias/listacategorias.html',
        controller: 'categoriaController'
    })
    .otherwise( { redirectTo: "/inicio" });
    
    
    //$locationProvider.html5Mode(true);

}]); 


//Autenticacaion
app.run(['$rootScope', '$location', '$cookies', '$http',function ($rootScope, $location, $cookies, $http) {
    // mantenerse logueado luego de resfrescar la pagina
    $rootScope.globals = $cookies.getObject('globals') || false;//Obtengo los valore de las cookies si hay
    $rootScope.loggedIn = false;
    $rootScope.muestraEsto = true;


    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.loggedInOk = $rootScope.globals ? true : false;
    

    console.log($rootScope.globals.currentUser);

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect a la pagina de login sino no hay usuario logueado
        //if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
        //    $location.path('/registro');
        //}
        
          // redirect a la pagina de login sino no hay usuario logueado y no tiene acceso a determinadas paginas
        var restrictedPage = $.inArray($location.path(), ['/inicio', '/login', '/registro']) === -1;
        var loggedIn = $rootScope.globals ? $rootScope.globals.currentUser : false;
        var userRole = $rootScope.globals ? $rootScope.globals.currentUser.userRole : false;
        
        var muestraMenu = [false, false, false, false, false, false];
        //                 inicio, misCompras, nada, dashboard, login, registrarse

 

        if (restrictedPage){
            if (loggedIn && userRole == "admin"){

            }else{
                $location.path('/login')
            }
        }else{
            //if ($location.path() == $location.path('/misCompras')){
           //     $location.path('/login')
           //    }
        }




          //debugger;
        //  $rootScope.loggedInOk = $rootScope.globals ? true : false;
        //$scope.userRoleS = userRole;

        //$rootScope.userAdmin = false;
        //$rootScope.muestraEsto = true;
 
       // if (restrictedPage && $rootScope.loggedIn) {     // pagina de admin
            //console.log("pagina restringida y no logueo");
            //$location.path('/');
       // }else{
       
         // if (userRole == 'admin' && $rootScope.loggedIn) {          // usuario admin y ya logueado
         //   $rootScope.userAdmin = true;
         //   $rootScope.muestraEsto = false;
            //console.log("paso1")
            //$location.path('/dashboard');
         // }else{
            //$rootScope.muestraEsto = true;
           // $location.path('/');
            //console.log("paso2")
         // }}
  
          console.log('usuario: ' + $rootScope.userAdmin);
          console.log('mostrar:' + $rootScope.muestraEsto);
          console.log('login:' + $rootScope.loggedIn);
          

         //$('#menuTmp').removeClass('ng-hide');
        //  if (userRole == 'public' && loggedIn) {        // usuario general y ya logueado
        //    $location.path('/');
        //    }
        //solo podra acceder al resto de las vistas si hay usuario logueado sino solo vera registro y login.
    });

}]);
