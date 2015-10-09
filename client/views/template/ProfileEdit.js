"use strict";

Template.ProfileEdit.rendered = function(){

};

Template.ProfileEdit.created = function(){

};

Template.ProfileEdit.destroyed = function(){

};

Template.ProfileEdit.helpers({   // declare variables used by Spacebar;

});

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