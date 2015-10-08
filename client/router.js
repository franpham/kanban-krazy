"use strict";

Router.configure({
  layoutTemplate : 'AppLayout',   // default layout always rendered;
  before : function () {
    if (!Meteor.user()) {
      if (Meteor.loggingIn()) {
        // do nothing, just call this.next();
        this.next();
      }
      else {
        this.render('Login');
      }
    }
    else {
      this.redirect('/Dashboard');
    }
  },
  after : function () {
    if (!Meteor.user()) {
      this.redirect('/Login');
    }
  }
});



// By default the router will render the capitalized name of the template, with punctuations removed.
Router.route('/login');
Router.route('/dashboard');
Router.route('/profile/edit');