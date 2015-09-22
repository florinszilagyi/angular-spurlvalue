angular.module('angular-spurlvalue.tpl.html').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/js/angular-spurlvalue.tpl.html',
    "<div><div ng-show=\"!image\" class=\"{{containerClass}}\"><div class=\"col-md-12\" ng-hide=\"readonly\"><div class=\"row\"><label for=\"link\">{{linkText}}</label><input name=\"link\" placeholder=\"http://\" ng-model=\"link\"></div><div class=\"row\"><label>{{titleText}}</label><input placeholder=\"Link\" ng-model=\"title\"></div></div><div class=\"col-md-12\" style=\"padding: 0\" ng-show=\"readonly && link\"><a href=\"{{link}}\" target=\"_blank\">{{title}}</a></div></div><div ng-show=\"!!image\"><img class=\"img-responsive\" src=\"{{link}}\" alt=\"{{title}}\"></div></div>"
  );

}]);
