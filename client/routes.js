angular.module('fooforms').run(['$rootScope', '$location', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, next, previous, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === 'AUTH_REQUIRED') {
            $state.go('/');
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
                    "currentUser": ['$meteor', function ($meteor) {
                        return $meteor.requireUser();
                    }]
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'client/users/views/login.ng.html',
                controller: 'LoginCtrl',
                controllerAs: 'lc'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'client/users/views/register.ng.html',
                controller: 'RegisterCtrl',
                controllerAs: 'rc'
            })
            .state('resetpw', {
                url: '/resetpw',
                templateUrl: 'client/users/views/reset-password.ng.html',
                controller: 'ResetCtrl',
                controllerAs: 'rpc'
            })
            .state('logout', {
                url: '/logout',
                resolve: {
                    "logout": ['$meteor', '$state', function ($meteor, $state) {
                        return $meteor.logout().then(function () {
                            $state.go('site');
                        }, function (err) {
                            console.log('logout error - ', err);
                        });
                    }]
                }
            })
            .state('verify', {
                url: '/verify-email/:token',
                templateUrl: 'client/users/views/email-verification.ng.html',
                controller: 'EmailVerificationCtrl',
                controllerAs: 'evc'
            })
            .state('emailVerificationSent', {
                url: '/verification-sent',
                templateUrl: 'client/users/views/email-verification-sent.ng.html'
            })
            .state('emailVerified', {
                url: '/verified',
                templateUrl: 'client/users/views/email-verified.ng.html',
                controller: 'EmailVerificationCtrl',
                controllerAs: 'evdc'
            })
            .state('emailNotVerified', {
                url: '/not-verified',
                params: {'message': ''},
                templateUrl: 'client/users/views/email-not-verified.ng.html',
                controller: 'EmailNotVerifiedCtrl',
                controllerAs: 'envc'
            });

        $urlRouterProvider.otherwise('/');
    }]);
