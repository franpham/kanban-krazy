"use strict";

if (Tasks.find().count() === 0) {
    var toDoNames = [
                  {title: "Get better",
                  userId: "",
                  username: "The Doctor",
                  modifiedAt: "09/20/15",
                  body: "Whatever is plagueing Anna's body seriously needs to fuck off",
                  status: "todo"
                  },
                  {title: "Have you thought about using FOUNDATION?!?!",
                  userId: "",
                  username: "Joe",
                  modifiedAt: "09/26/15",
                  body: "HMMMMMMM",
                  status: "todo"
                  },
                  {title: "Become as good at coding as Francis!",
                  userId: "",
                  username: "Anna",
                  modifiedAt: "10/9/15",
                  body: "I mean I get that he's amazing, but I got this, right?",
                  status: "todo"
                  },
                  {title: "So what are you going to do next?",
                  userId: "",
                  username: "Joe",
                  modifiedAt: "08/31/15",
                  body: "HMMMMMMM",
                  status: "todo"
                  },
                  {title: "Stop drawing dicks on the white board",
                  userId: "",
                  username: "Jason",
                  modifiedAt: "10/08/15",
                  body: ".....this seems self explanatory",
                  status: "todo"
                  },
                  {title: "I think I see the problem there",
                  userId: "",
                  username: "Joe",
                  modifiedAt: "09/15/15",
                  body: "HMMMMMMM",
                  status: "todo"
                  }
    ];
    for (var i = 0; i < toDoNames.length; i++){
      Tasks.insert({title: toDoNames[i].title, userId: toDoNames[i].userId, username: toDoNames[i].username,
        modifiedAt: toDoNames[i].modifiedAt, body: toDoNames[i].body, status: toDoNames[i].status});
    }
};