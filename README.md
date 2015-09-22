# angular-spurlvalue
Angular directive for displaying SharePoint URL Fields

##SP URL Value Directive for AngularJS
=========


## Install via Bower
```
bower install angular-spurlvalue
```

## API
=========
The directive supports 2 modes, URL and Image Mode
```
<div sp-url-value image="isImage" ngModel="fieldValue"></div>
```

For URL mode, the link text and title text can be changed, and also the container class that wraps the directive
```
<div sp-url-value ngModel="fieldValue" link-text="Enter the URL: " title-text="Enter the site title: " container-class="myCssClass"></div>
```

## Demo
[GitHub](http://florinszilagyi.github.io/angular-spurlvalue/)