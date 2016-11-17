(function(){
    'use strict';

    angular
        .module('App.formValidation', [])
        .directive('formValidationControl', ['$compile', formValidationControl]);

    function formValidationControl($compile){
        var BASE_URL = "bower_components/twistermw-angular-formvalidation-directive/";

        return {
            restrict: 'E',
            scope: {
                inputName: '=',
                errorMessagesUrl: '=',
                templateUrl: '='
            },
            templateUrl: function(elem, attrs){
                var tpl = (attrs.templateUrl !== undefined)
                    ? attrs.templateUrl
                    : BASE_URL + 'twistermw-angular-form-validation-tpl.html';

                return tpl;
            }
        }
    }

})();