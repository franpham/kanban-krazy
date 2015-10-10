"use strict";

Template.ProfileEdit.rendered = function(){

};

Template.ProfileEdit.created = function(){

};

Template.ProfileEdit.destroyed = function(){

};

Template.ProfileEdit.helpers({   // declare variables used by Spacebar;

});

// "this" refers Taskboard, which is a form;
Template.Taskboard.events({
  'submit #AddTaskForm' : function (event) {
    event.preventDefault();
    Meteor.users.insert({ 'userId': Meteor.userId(), 'username': Meteor.user().username, $currentDate: { modifiedAt: true },
                          'title': event.target.addTaskTitle.value, 'body': event.target.addTaskBody.value });
    Router.go('/taskboard');
  }
});

// "this" refers Taskboard, which is a form;
Template.Taskboard.events({
  'submit #EditTaskForm' : function (event) {
    event.preventDefault();

    Meteor.users.update({ '_id': event.target.editTaskId.value }, { $set :{ $currentDate: { modifiedAt: true },
                          'title': event.target.editTaskTitle.value, 'body': event.target.editTaskBody.value }});
    Router.go('/taskboard');
  }
});

// "this" refers Taskboard, which is a form;
Template.Taskboard.events({
  'submit #deleteTask' : function (event) {
    event.preventDefault();
    Meteor.users.remove({'_id': event.target.deleteTaskId.value});
  }
});

Template.Taskboard.helpers({
  todoTasks: function(){
      return Tasks.find({status: 'todo'});
    }
});

Template.Taskboard.helpers({
  progressTasks: function(){
    if(Router.current().route.getName() === 'Taskboard'){
      return Tasks.find({userId: Meteor.userId(), status: 'inProgress'});
    }else if(Router.current().route.getName() === 'globaltaskboard'){
      return Tasks.find({status: 'inProgress' , privacy: 'public'});
    }
  }
});
Template.Taskboard.helpers({
  doneTasks: function(){
    if(Router.current().route.getName() === 'Taskboard'){
      return Tasks.find({userId: Meteor.userId(), status: 'done'});
    }else if(Router.current().route.getName() === 'globaltaskboard'){
      return Tasks.find({status: 'done' , privacy: 'public'});
    }
  }
});
