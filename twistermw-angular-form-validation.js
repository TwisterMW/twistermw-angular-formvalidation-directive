(function(){
    'use strict';

    angular
        .module('App.formValidation')
        .directive('formValidationControl', formValidationControl);

    function formValidationControl(){
        return {
            restrict: 'E',
            templateUrl: 'twistermw-angular-form-validation-tpl.html',
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