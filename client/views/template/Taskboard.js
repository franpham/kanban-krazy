"use strict";

var TODO = 0;
var PROGRESS = 1;
var DONE = 2;
var entry = {};   // if an empty object, nothing was selected or it was deleted;

Template.Taskboard.rendered = function(){

};
Template.Taskboard.created = function(){

};
Template.Taskboard.destroyed = function(){

};
Template.Taskboard.helpers({   // declare variables used by Taskboard {{ }}
  todoTasks: function() {
    return Tasks.find({ status: TODO });
  },
  progressTasks: function() {
    return Tasks.find({ status: PROGRESS });
  },
  doneTasks: function() {
    return Tasks.find({ status: DONE });
  },
  selected: function() {    // helpers must be functions;
    return entry;
  }
});

// "this" refers to AddTaskForm, which is a form;
Template.Taskboard.events({
  'submit #AddTaskForm' : function (event) {
    event.preventDefault();
    if (Meteor.userId()) {
      Tasks.insert({ 'userId': Meteor.userId(), 'username': Meteor.user().username, $currentDate: { modifiedAt: true },
                            'title': event.target.addTaskTitle.value, 'body': event.target.addTaskBody.value });
    }
  }
});

// "this" refers to EditTaskForm, which is a form;
Template.Taskboard.events({
  'submit #EditTaskForm' : function (event) {
    event.preventDefault();
    if (Meteor.userId() === event.target.editTaskUserId.value) {
      Tasks.update({ '_id': event.target.editTaskId.value }, { $set: { $currentDate: { modifiedAt: true },
                            'title': event.target.editTaskTitle.value, 'body': event.target.editTaskBody.value }});
    }
  }
});

// "this" refers to moveLink, which is a link;
Template.Taskboard.events({
  'click .moveLink' : function (event) {
    event.preventDefault();
    var target = $(event.target).parent();  // child link is clicked;
    if (entry.userId && Meteor.userId() === entry.userId) {
      var status = target.prop('id') === 'todo' ? 0 : (target.prop('id') === 'progress' ? 1 : 2);
      Tasks.update({ '_id': entry.taskId }, { $set: { 'status': status }});
      $(entry.taskId).toggleClass('highlight');
    }
  }
});

// "this" refers to deleteTask, which is a link;
Template.Taskboard.events({
  'click #deleteTask' : function (event) {
    event.preventDefault();
    if (Meteor.userId() === entry.userId) {
      Tasks.remove({ '_id': entry.taskId });
      $(entry.taskId).toggleClass('highlight');
      entry = {};   // reset the selection;
    }
  }
});

// "this" refers to editTask, which is a link;
Template.Taskboard.events({
  'click #editTask' : function (event) {
    event.preventDefault();
    $(entry.taskId).toggleClass('highlight');
    // enable/ disable EditTaskForm, which submits the changes;
    var disabled = entry.userId && Meteor.userId() !== entry.userId;
    $('#editTaskSubmit').prop('disabled', disabled);
  }
});

// "this" refers to Task, which is a div;
Template.Taskboard.events({
  'click .task' : function (event) {
    event.preventDefault();
    var target = $(event.target).parent();  // child divs are clicked;
    target.toggleClass('highlight');
    entry.taskId = target.prop('id');
    entry.userId = target.children('.taskUserId').text();
    entry.title  = target.children('.taskTitle').text();
    entry.body = target.children('.taskBody').text();
  }
});
