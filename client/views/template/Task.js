"use strict";

Template.Task.helpers({   // declare variables used by Task {{ }}
  modifiedDate: function() {
    var date = this.modifiedAt;
    return date.toLocaleDateString() + ', ' + date.toLocaleTimeString();
  }
});
