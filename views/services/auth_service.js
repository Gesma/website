app.factory('authService', ['$http', '$cookies', function ($http, $cookies) {
    var service = {
        errors: {
            INCORRECT_PASSWORD: "Incorrect password.",
            EMAIL_NOT_REGISTERED: "Email not registered.",
            MISSING_EMAIL: "Missing parameter: email.",
            MISSING_PASSWORD: "Missing parameter: password.",
            INTERNAL_SERVER_ERROR: "Internal server error"
        }
    };

    var isLogged = false;
    var isAdmin = false;

    service.login = function (email, password, keepLogged,  callback) {

        callback = typeof callback === "function" ? callback : function () {};

        $http.post('/api/authenticate', {
            username : email,
            password : password
        }).then(
            function (response) {
                if(response.data.success == true){
                    saveToken(response.data.token, keepLogged);
                    isAdmin = false;
                    callback();
                }else{
                    console.log("Not logged in");
                }
            },
            function (response) {
                if(response.status === 401){
                    callback({message: response.data.message});
                }else if(response.status === 422){
                    callback({message: response.data.message});
                }else if(response.status === 500){
                    callback({message: service.errors.INTERNAL_SERVER_ERROR});
                }
            }
        );
    };

    service.loginAdmin = function (email, password, keepLogged,  callback) {

        callback = typeof callback === "function" ? callback : function () {};

        $http.post('/api/admin/authenticate', {
            email : email,
            password : password
        }).then(
            function (response) {
                if(response.data.success == true){
                    saveToken(response.data.token, keepLogged);
                    isAdmin = true;
                    callback();
                }else{
                    console.log("Not logged in");
                    isAdmin = false;
                }
            },
            function (response) {
                isAdmin = false;
                if(response.status === 401){
                    callback({message: response.data.message});
                }else if(response.status === 422){
                    callback({message: response.data.message});
                }else if(response.status === 500){
                    callback({message: service.errors.INTERNAL_SERVER_ERROR});
                }
            }
        );
    };

    service.isLogged = function () {
        console.log($cookies.get("token"));
        if($cookies.get("token")){
            return true;
        }
        return false;
    };

    service.isAdmin = function(){
      return isAdmin;
    };

    service.logout = function () {
      $cookies.remove('token');
      isAdmin = false;
    };

   function saveToken (token, keepLogged) {
       console.log("saving token");
       $cookies.put("token", token, [{secure : true}]);
       /*if(!keepLogged) {
           window.onbeforeunload(function () {
               service.logout();
               return " ";
           });
       }*/
   }

    return service;
}]);
