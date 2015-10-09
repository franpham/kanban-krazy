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
    Router.go('/dashboard');
  }
});