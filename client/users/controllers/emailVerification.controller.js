angular.module('fooforms').controller('EmailVerificationCtrl',
    ['$meteor', '$state', '$stateParams',
        function ($meteor, $state, $stateParams) {
            var vm = this;

            vm.message = $stateParams.token;

            $meteor.verifyEmail($stateParams.token).then(function () {
                $state.go('emailVerified');
            }, function (err) {
                console.log(err);
                $state.go('emailNotVerified', {
                    message: 'The verification link is no longer valid. Would you like to' +
                    ' send the verification link again?'
                });
            });


        }
    ]);
