
//server/security.js
Tasks.allow({
  'insert': function (userId,doc) {
    /* user and doc checks ,
    return true to allow insert */
    // return (userId === Meteor.userId);
    return true;
  },
  'update': function (userId,doc) {
    /* user and doc checks ,
    return true to allow update */
    // return (userId === Meteor.userId);
    return true;
  }
});
