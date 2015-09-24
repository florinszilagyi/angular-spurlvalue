##SP URL Value Directive for AngularJS
Angular directive for displaying SharePoint URL Fields


## Install via Bower
```
bower install angular-spurlvalue
```

## API
The directive supports 2 modes, URL and Image Mode
```
<div sp-url-value image="isImage" ngModel="fieldValue"></div>
```

#### The link text and title text and target can be changed, and also the container class that wraps the directive
```
<div sp-url-value ngModel="fieldValue" link-text="Enter the URL: " title-text="Enter the site title: " container-class="myCssClass" target="_blank"></div>
```
##### In readonly mode the directive is rendered as a anchor tag (link) is mode is URL or as the image otherwise
##### The style can be customized
```
<style type='text/css'>
	.myCssClass .angular-spurl-editor input { /* Modify the inputs */
		width: 150px;
	}
	
	.myCssClass .angular-spurl-editor label { /* Modify the label */
		color: red;
	}
	
	.myCssClass .angular-spurl-viewer a:hover { /* Modify the anchor tag */
		text-decoration: underline;
	}
	
	.myCssClass .angular-spurl-viewer img { /* Image */
		width: 250px;
	}
</style>
```

### Demo
[GitHub](http://florinszilagyi.github.io/angular-spurlvalue/)