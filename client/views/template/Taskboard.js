"use strict";

Template.Taskboard.rendered = function(){

};
Template.Taskboard.created = function(){

};
Template.Taskboard.destroyed = function(){

};
Template.Taskboard.helpers({   // declare variables used by Taskboard {{ }}
  modifiedDate: function() {
    var date = this.modifiedAt;
    return date.toLocaleDateString() + ', ' + date.toLocaleTimeString();
  },
  todoTasks: function() {
    return Tasks.find({ status: 'todo' });
  },
  progressTasks: function() {
    return Tasks.find({ status: 'progress' });
  },
  doneTasks: function() {
    return Tasks.find({ status: 'done' });
  }
});

// "this" refers to AddTaskForm, which is a form;
Template.Taskboard.events({
  'submit #AddTaskForm' : function (event) {
    event.preventDefault();
    if (Meteor.userId()) {
      Meteor.users.insert({ 'userId': Meteor.userId(), 'username': Meteor.user().username, $currentDate: { modifiedAt: true },
                            'title': event.target.addTaskTitle.value, 'body': event.target.addTaskBody.value });
    }
    Router.go('/taskboard');
  }
});

// "this" refers to EditTaskForm, which is a form;
Template.Taskboard.events({
  'submit #EditTaskForm' : function (event) {
    event.preventDefault();
    if (Meteor.userId() === event.target.editTaskUserId.value) {
      Meteor.users.update({ '_id': event.target.editTaskId.value }, { $set :{ $currentDate: { modifiedAt: true },
                            'title': event.target.editTaskTitle.value, 'body': event.target.editTaskBody.value }});
    }
    Router.go('/taskboard');
  }
});

// "this" refers to deleteTask, which is a link;
Template.Taskboard.events({
  'click #deleteTask' : function (event) {
    event.preventDefault();
    if (Meteor.userId() === event.target.data.userId) {
      Meteor.users.remove({ '_id': event.target.data.taskId });
    }
  }
});

// "this" refers to Task, which is a div;
Template.Taskboard.events({
  'click .task' : function (event) {
    event.preventDefault();
    var task = $('#deleteTask');
    task.data('taskId', event.target.id);
    task.data('userId', event.target.data.userId);
    task.toggleClass('highlight');
  } // set the taskId && userId of the selected Task to enable deletion;
});
