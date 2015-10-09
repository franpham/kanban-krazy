if (Tasks.find().count() === 0) {
    var toDoNames = [
                  {title: "Get better",
                  author: "The Doctor",
                  date: "09/20/15",
                  body: "Whatever is plagueing Anna's body seriously needs to fuck off"
                  },
                  {title: "Have you thought about using FOUNDATION?!?!",
                  author: "Joe",
                  date: "09/26/15",
                  body: "HMMMMMMM"
                  },
                  {title: "Become as good at coding as Francis!",
                  author: "Anna",
                  date: "10/9/15",
                  body: "I mean I get that he's amazing, but I got this, right?"
                  },
                  {title: "So what are you going to do next?",
                  author: "Joe",
                  date: "08/31/15",
                  body: "HMMMMMMM"
                  },
                  {title: "Stop drawing dicks on the white board",
                  author: "Jason",
                  date: "10/08/15",
                  body: ".....this seems self explanatory"
                  },
                  {title: "I think I see the problem there",
                  author: "Joe",
                  date: "09/15/15",
                  body: "HMMMMMMM"
                  },
            ];
    for (var i = 0; i < toDoNames.length; i++){
      Tasks.insert({title: toDoNames[i].title, author: toDoNames[i].author, date: toDoNames[i].date, body: toDoNames[i].body});
    }
}