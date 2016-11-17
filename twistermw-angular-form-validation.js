(function(){
    'use strict';

    angular
        .module('App.formValidation')
        .directive('formValidationControl', formValidationControl);

    function formValidationControl(){
        var BASE_URL = 'app/components/views/directives/';

        return {
            restrict: 'E',
            templateUrl: BASE_URL + 'formValidation-directive-tpl.html',
            scope: {
                inputName: '=',
                errorMessagesUrl: '='
            },
            link: function(scope){
                console.log(scope);
            }
        }
    }

})();