app.config(function ($translateProvider){
    $translateProvider.translations('pt_br', translations_pt_br);
    $translateProvider.translations('en_us', translations_en_us);
    $translateProvider.preferredLanguage('en_us');

    $translateProvider.useSanitizeValueStrategy('escape');
});



app.filter('getLangWithCod', function() {
    return function(lang, cod) {
        var len = lang.length;
        for ( var i = 0 ; i < len ; i++) {
            if(lang[i].codigo == cod) {
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

app.controller('TranslateCtrl', ['$scope', '$translate', '$filter', function ($scope, $translate, $filter) {
    $scope.linguagens = [
        {
            nome:"Português Brasileiro",
            codigo:"pt_br",
            selected: true
        },
        {
            nome:"English",
            codigo: "en_us",
        }
    ];

    $scope.changeLanguage = function (key) {
        var lang = $filter('getLangWithCod')($scope.linguagens, key);
        if(lang != null){
            $filter('resetLang')($scope.linguagens);
            $translate.use(key);
            lang.selected = true;
        }
        console.log($scope.linguagens);
    };
}]);
