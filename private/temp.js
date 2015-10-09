"use strict";

Meteor.users.allow({ update: function() {return true; }});

"use strict";

Router.configure({
  layoutTemplate : 'AppLayout',   // default layout always rendered;
  before : function () {
    if (!Meteor.user()) {
      if (Meteor.loggingIn()) {
        // just wait if logging in;
      } else {
        this.render('Login');
      }
    } else if (Router.current().route.getName() === 'login') {  // else user is loggedIn;
      this.redirect('/Dashboard');
    }
    this.next();    // must call next() to get the Router to continue executing;
  },
  after : function () {
    if (!Meteor.user()) {
      this.redirect('/Login');
    }
  }
});

Router.route('/', { template: 'Dashboard' });
Router.route('/login');
Router.route('/dashboard');
Router.route('/profile/edit', { name: 'profile.edit' });
// By default the router will render the capitalized name of the template, with punctuations removed and next letter capped.


// -------------------------------------------------------


// "this" refers ProfileEdit, which is a form;
Template.ProfileEdit.events({
  'submit #ProfileEdit' : function (event) {
    event.preventDefault();
    var user = Meteor.user();
    if (!user.profile)
      user.profile = {};
    user.profile.bday = event.target.bday.value;
    user.profile.tel  = event.target.tel.value;
    Meteor.users.update({ '_id': Meteor.userId() }, { $set :{ 'profile': user.profile }});
    Router.go('/dashboard');    // users are allowed to edit profile by default;
  }
});
