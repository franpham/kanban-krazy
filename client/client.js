"use strict";

// $(document).foundation() must be called AFTER HTML has loaded (in AppLayout);
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Tasks.allow({
  // check if user is logged in & owns the doc;
  'insert': function (userId, doc) {
    return userId && userId === doc.userId;
  },
  'update': function (userId, doc) {
    return userId && userId === doc.userId;
  },
  'remove': function (userId, doc) {
    return userId && userId === doc.userId;
  },
  fetch: ['userId']
});
