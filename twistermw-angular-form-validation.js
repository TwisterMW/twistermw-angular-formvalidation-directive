(function(){
    'use strict';

    angular
        .module('App.formValidation', [])
        .directive('formValidationControl', ['$compile', formValidationControl]);

    function formValidationControl($compile){
        var BASE_URL = "bower_components/twistermw-angular-formvalidation-directive/";

        return {
            restrict: 'E',
            require: [ 'inputName', 'errorMessagesUrl' ],
            scope: {
                inputName: '=',
                errorMessagesUrl: '=',
                templateUrl: '='
            },
            link: function(scope, element, attrs){
                console.log(attrs);
                var template = (attrs.templateUrl !== undefined)
                    ? attrs.template
                    : BASE_URL + 'twistermw-angular-form-validation-tpl.html';

                element.html(template).show();
                $compile(element.contents())(scope);
            }
        }
    }

})();