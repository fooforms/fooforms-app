Organisations = new Mongo.Collection("organisations");

Organisations.allow({
    insert: function (userId, organisation) {
        return userId && organisation.owner === userId;
    },
    update: function (userId, form, fields, modifier) {
        return userId && form.owner === userId;
    },
    remove: function (userId, form) {
        return userId && form.owner === userId;
    }
});
