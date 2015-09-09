angular.module('fooforms').controller('EmailNotVerifiedCtrl',
    ['$meteor', '$stateParams', '$state',
        function ($meteor, $stateParams, $state) {
            var vm = this;

            vm.message = $stateParams.message;
            vm.verification = {
                sent: false
            };

            vm.sendVerification = function () {
                console.log('test');
                $meteor.call('resendVerification', vm.verification.email).finally(
                    function () {
                        vm.verification.sent = true;
                        $state.go('emailVerificationSent');
                    }
                );
            };

        }
    ]);
