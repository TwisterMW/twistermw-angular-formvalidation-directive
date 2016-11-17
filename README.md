<img src="https://camo.githubusercontent.com/06c5d22b7908c0c4928071ac314e75c3da29d750/687474703a2f2f62656e7363687761727a2e6769746875622e696f2f626f7765722d6261646765732f62616467654032782e706e67" width="130" height="30">

# twistermw-angular-formvalidation-directive
Angular JS Directive for forms validation. It uses ng-messages directive

# Requirements
- Node + NPM
- Bower

# Dependendes
- AngularJS
- Angular ngMessages
- Bootstrap

# Installation
```bower install -g twistermw-angular-formvalidation-directive```
or
```bower install -g twistermw-angular-formvalidation-directive --save``` if you want to save on your bower.json file

# Usage

First we include the library following angularjs dependency:

```js
    <script src="bower_components/angularjs/angular.min.js"></script>
    <script src="bower_components/angular-messages/angular-messages.min.js"></script>
    <script src="bower_components/twistermw-angular-form-validation/twistermw-angular-form-validation.js"></script>
```

You need also register the 'App.formValidation' angular module on your main application module or the parent module that will contain the form:

```js
    angular
        .module('App', [
            'ngMessages',
            'App.formValidation'
        ]);
```

The directive is invoked by that way:

```html
    <form-validation-control input-name="input-name" error-messages-url="form-validation-messages-template-url"></form-validation-control>
```

- The "input-name" references to the input that we want to validate.
- The "error-messages-url" references to the url of ngMessages html template (Explained below)

As you can see the second argument of the directive is a url of a ngMessages template, so we need to define a template.html file like this one:

```html
    <p class="text-danger" ng-message="required">This field is required</p>
    <p class="text-danger" ng-message="minlength">This field is too short</p>
    <p class="text-danger" ng-message="maxlength">This field is too long</p>
    <p class="text-danger" ng-message="required">This field is required</p>
    <p class="text-danger" ng-message="email">This needs to be a valid email</p>
```

We declare so many validations as we want and assign an ng-message for each one.

In the controller we can store the url of the template like this:

```js
    vm.formValidationErrorsUrl = 'your-path/your-ngMessages-template.html';
```

Then we can use the directive including it below of each input inside of a form:

```html
    <form name="mainForm" novalidate>
        <div class="col-md-12">
            <div class="padded-x-20">
                <label class="control-label">Email</label>
            </div>
            <div class="col-md-3 text-center">
                <div class="input-group" data-ng-class="vm.inputHasError(mainForm.email)">
                    <div class="input-group-addon">
                        <i class="glyphicon glyphicon-envelope"></i>
                    </div>
                    <input class="form-control" data-ng-model="vm.main.email" name="email" type="email" maxlength="30" minlength="5" required />
                </div>
            </div>
        </div>
        <form-validation-control input-name="mainForm.email" error-messages-url="vm.formValidationErrorsUrl"></form-validation-control>
    </form>      
```

- Note the argument novalidate at the form element
- Note that the input has an ngModel directive applied

On this line ```<div class="input-group" data-ng-class="vm.inputHasError(mainForm.email)">``` we put an ngClass that in the controller could be something like this:

```js
    vm.inputHasError = inputHasError;

    function inputHasError(input){ return (input.$touched && input.$invalid) ? 'has-error' : ''; }
```

Then the bootstrap class will be applied when the input has an error.

PD: If you are including that dependency by wiredep you need to add the proper override section on your bower.json like this:

```json
"overrides": {
    "twistermw-angular-formvalidation-directive": {
      "main": ["twistermw-angular-form-validation-app.module.js", "twistermw-angular-form-validation.js"]
    }
  }
```