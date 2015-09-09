Accounts.onCreateUser(function (options, user) {
    user.profile = {};
    return user;
});

Accounts.validateLoginAttempt(function (attempt) {
    if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified) {
        console.log('email not verified');

        return false; // the login is aborted
    }
    return true;
});

Meteor.methods({
    resendVerification: function (email) {
        var userEmail;
        var user = Meteor.users.findOne({'emails.address': email});
        if (user) {
            userEmail = _.find(user.emails, function (email) {
                return email.address === email;
            });
            if (userEmail && !userEmail.verified) {
                Accounts.sendVerificationEmail(user._id, email);
            }
        }
    }
});
