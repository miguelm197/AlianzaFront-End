app.directive('modalDialog', function($window, $templateCache, $compile, $http) {
    return {
      restrict: 'EAC',
      templateUrl: "./home/login.html",
      scope: {
        //show: '='
        //modalUser: '=',
        //saveUser: '&',
        //templateUser: '@'
        
      },
      replace: true, // Replace with the template below
      //transclude: true, // we want to insert custom content inside the directive
      link: function(scope, element, attrs) {
  
        //$http.get(scope.templateUser, {cache: $templateCache}).success(function(tplContent){
         //         element.replaceWith($compile(tplContent)(scope));                
        //        });

        
        scope.dialogStyle = {};
        if (attrs.width) {
          scope.dialogStyle.width = attrs.width + '%';
          scope.dialogStyle.left = ( ( 100 - attrs.width ) / 2 ) + '%';
        }
        if (attrs.height) {
          scope.dialogStyle.height = attrs.height + '%';
          scope.dialogStyle.top = ( ( 100 - attrs.height ) / 2 ) + '%';
        }
          
        scope.hideModal = function() {
          scope.show = false;
        };
  
        scope.clone = function(obj) {
          if (obj === null || typeof obj !== 'object') {
              return obj;
          }
          var temp = obj.constructor(); // give temp the original obj's constructor
          for (var key in obj) {
              temp[key] = scope.clone(obj[key]);
          }
          return temp;
        };
/*  
        var tempUser = scope.clone(scope.modalUser);
        
        scope.save = function() {
          scope.saveUser(scope.modalUser);
          scope.show = false;
        };
        
        scope.cancel = function() {
          scope.modalUser = scope.clone(tempUser);
          scope.show = false;
        };
*/
      }
      //template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
      //templateUrl: 'my-customer.html'
      //templateUrl: scope.templateUser
    };
  });
  