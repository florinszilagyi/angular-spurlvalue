angular.module('angular-spurlvalue').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/js/angular-spurlvalue.tpl.html',
    "<div class=\"{{containerClass}}\"><div class=\"angular-spurl-editor\" ng-show=\"!readonly\"><div class=\"col-md-12\" ng-hide=\"readonly\"><div class=\"row\"><label for=\"link\">{{linkText}}</label><input name=\"link\" placeholder=\"http://\" ng-model=\"link\"></div><div class=\"row\"><label>{{titleText}}</label><input placeholder=\"Link\" ng-model=\"title\"></div></div></div><div class=\"angular-spurl-viewer\" ng-show=\"readonly\"><div ng-show=\"!!image\"><img class=\"img-responsive\" src=\"{{link}}\" alt=\"{{title}}\"></div><div ng-show=\"!image\"><a ng-href=\"{{link}}\" target=\"{{target}}\">{{title}}</a></div></div></div>"
  );

}]);
