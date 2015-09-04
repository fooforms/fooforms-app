angular.module('fooforms').run(['$rootScope', '$location', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, next, previous, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === 'AUTH_REQUIRED') {
            $state.go('');
        }
    });
}]);

angular.module('fooforms').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('site', {
                url: '/',
                templateUrl: 'client/site/views/site.ng.html',
                controller: 'SiteController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'client/dashboard/views/dashboard.ng.html',
                controller: 'DashboardController',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                        return $meteor.requireUser();
                    }]
                }
            });

        $urlRouterProvider.otherwise('/');
    }]);
