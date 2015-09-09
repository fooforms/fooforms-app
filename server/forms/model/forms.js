Forms = new Mongo.Collection("forms");

Forms.allow({
    insert: function (userId, form) {
        return userId && form.owner === userId;
    },
    update: function (userId, form, fields, modifier) {
        return userId && form.owner === userId;
    },
    remove: function (userId, form) {
        return userId && form.owner === userId;
    }
});
