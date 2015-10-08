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
  'submit profile.edit' : function (event) {
    event.preventDefault();
    var user = Meteor.user();
    if (!user.profile)
      user.profile = {};
    user.profile.bday = event.target.bday.value;
    user.profile.tel  = event.target.tel.value;
    Router.go('/dashboard');
  }
});