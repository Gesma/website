app.config(function ($translateProvider){
    $translateProvider.translations('pt_br', translations_pt_br);
    $translateProvider.translations('en_us', translations_en_us);
    $translateProvider.preferredLanguage('pt_br');

    $translateProvider.useSanitizeValueStrategy('escape');
});

app.filter('getLangWithCod', function() {
    return function(lang, cod) {
        var len = lang.length;
        for ( var i = 0 ; i < len ; i++) {
            if(lang[i].cod == cod) {
                return lang[i];
            }
        }
        return null;
    }
});

app.filter('resetLang', function() {
    return function(lang) {
        var len = lang.length;
        for ( var i = 0 ; i < len ; i++) {
            lang[i].selected = false;
        }
    }
});

app.controller('TranslateCtrl', ['$scope', '$translate', '$filter', '$cookies', function ($scope, $translate, $filter, $cookies, tmhDynamicLocale) {
    $scope.languages = [
        {
            name:"Português Brasileiro",
            cod:"pt_br",
            selected: true,
            icon: "/img/br-flag.png"
        },
        {
            name:"English",
            cod: "en_us",
            icon: "/img/us-flag.png"
        }
    ];

    $scope.changeLanguage = function (key) {
        var lang = $filter('getLangWithCod')($scope.languages, key);
        if(lang != null){
            $filter('resetLang')($scope.languages);
            $translate.use(key);
            lang.selected = true;
            $cookies.remove("lang");
            $cookies.put("lang", key);
        }
    };


    var key = $cookies.get("lang");

    if(key){
      $scope.changeLanguage(key);
    }
}]);
