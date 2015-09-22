(function() {
    "use strict";
    /**
     * @ngdoc object 
     * @name Angular SP URL VAlue
     * 
     **/
    var app = angular.module("angular-spurlvalue", []);
    app.directive("spUrlValue", function() {
        return {
            restrict: 'EA',
            require: '^ngModel',
            templateUrl: 'angular-spurlvalue.tpl.html',
            replace: true,
            scope: {
                ngDisabled: '=',
                image: '=',
                linkText: '@',
                titleText: '@',
                containerClass: '@'
            },
            link: function(scope, element, attrs, ngModel) {
                scope.readonly = scope.ngDisabled || scope.$eval(attrs.disabled) || scope.$eval(attrs.readonly);
                scope.linkText = scope.linkText || 'Link';
                scope.titleText = scope.titleText || 'Title';
                ngModel.$formatters.push(function(modelValue) {
                    if (!modelValue) {
                        return {
                            link: '',
                            title: ''
                        };
                    }

                    var splitted = modelValue.split(';#');
                    if (splitted.length > 0) {
                        scope.link = splitted[0];
                        scope.title = splitted[splitted.length - 1];
                        return {
                            link: scope.link,
                            title: scope.title
                        };
                    }
                });

                ngModel.$parsers.push(function(viewValue) {
                    if (viewValue.link && viewValue.link.length > 0) {
                        var title = viewValue.title || 'Link';
                        var link = viewValue.link || 'http://';
                        return link + ';#' + title;
                    }

                    return '';
                });

                scope.$watch('link', function(newV) {
                    ngModel.$setViewValue({
                        title: scope.title,
                        link: newV
                    });
                });

                scope.$watch('title', function(newV) {
                    ngModel.$setViewValue({
                        link: scope.link,
                        title: newV
                    });
                });
            }
        };
    });

})();
