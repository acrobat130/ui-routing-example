angular.module('uiRoutingExample', [
	// add dependencies here
	'ui.router',
	'uiRoutingExample.view1',
	'uiRoutingExample.nestedView1',
	'uiRoutingExample.nestedView2'

	])

// config adds states that correspond with templates, urls, and controllers for each view1
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	// default route goes to index
	$urlRouterProvider.otherwise('/');

	// list url, template, and controller for each state
	$stateProvider
		.state('view1', {
			url: '/view1',
			templateUrl: 'view1.html',
			controller: 'View1Controller'
		})
		.state('view1.nestedView1', {
			url: '/nestedView1',
			templateUrl: 'nestedView1.html',
			controller: 'NestedView1Controller'
		})
		.state('view1.nestedView1.nestedView2', {
			url: '/nestedView2',
			templateUrl: 'nestedView2.html',
			controller: 'NestedView2Controller'
		})

}])







