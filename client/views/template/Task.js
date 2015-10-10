"use strict";

Template.Task.helpers({   // declare variables used by Task {{ }}
  modifiedDate: function() {
    var date = new Date(this.modifiedAt.toString());
    return date.toLocaleDateString() + ', ' + date.toLocaleTimeString();
  }
});
