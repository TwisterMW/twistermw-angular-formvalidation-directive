(function(){
    'use strict';

    angular
        .module('App.formValidation')
        .directive('formValidationControl', formValidationControl);

    function formValidationControl(){
        var BASE_URL = "bower_components/twistermw-angular-formvalidation-directive/";

        return {
            restrict: 'E',
            templateUrl: BASE_URL + 'twistermw-angular-form-validation-tpl.html',
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