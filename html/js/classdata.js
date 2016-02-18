//array of all the classes in the system and a link to them
var classes = {
    classArray : []
};

//add some data so the poor thing isn't completely empty :)
classes.classArray.push({
  "classname": "Computer Science 20",
  "crn": 12345,
  "chatUrl": "computerScience20",
  "channel": "cs20"
});


classes.classArray.push({
  "classname": "Discreet Math",
  "crn": 12346,
  "chatUrl": "discreetmath10",
  "channel": "math10"
});

classes.classArray.push({
  "classname": "Anthropology 1",
  "crn": 12346,
  "chatUrl": "anthropology1",
  "channel": "anthr1"
});

classes.classArray.push({
  "classname": "Calculus 2",
  "crn": 12346,
  "chatUrl": "calculus2",
  "channel": "calc2"
});

classes.classArray.push({
  "classname": "Native American History",
  "crn": 12346,
  "chatUrl": "nahistory",
  "channel": "nahistory"
});


// just a quick search function to get objects out of the arrays with the channel name
function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].channel === nameKey) {
            return myArray[i];
        }
    }
}

function populateListAndChat(currentChannel){
  var index;
  for (index = 0; index < classes.classArray.length; ++index) {
      console.log(classes.classArray[index]);
      var toAppend = '<a onclick="location.reload()" href="#' + classes.classArray[index].channel + '" class="list-group-item">'+ classes.classArray[index].classname +" crn: " + classes.classArray[index].crn +'</a>';
      $("#classlist").append(toAppend);
  }
  
  var current = search(currentChannel, classes.classArray);
  console.log(current);
  toAppend = '<div id="tlkio" data-channel="'+ current.chatUrl +'" style="width:100%;height:88%;"></div> <script async src="https://tlk.io/embed.js" type="text/javascript"></script>';
  $("#chatdiv").append(toAppend);
  $("#livechattitle").append('<h2>' + current.classname + ' Video Chat</h2>');
}


$(document).ready(function() {
    //window.setTimeout(callback, 100);
    changeFragment()
});

function changeFragment(){
    var hash = window.location.hash;
    hash = hash.slice(1);
    populateListAndChat(hash);
}