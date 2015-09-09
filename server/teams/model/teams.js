Teams = new Mongo.Collection("teams");

Teams.allow({
    insert: function (userId, team) {
        return userId && team.owner === userId;
    },
    update: function (userId, team, fields, modifier) {
        return userId && team.owner === userId;
    },
    remove: function (userId, team) {
        return userId && team.owner === userId;
    }
});
