var interfaceDisplays = document.getElementsByClassName("speechbox")

function displayHome(){
    var x = document.getElementById("homepage");
   document.getElementById("rabbit").src= 'https://i.imgur.com/iPrbaod.png';
  
    if (x.style.zIndex == 0) {
          for (var i = 0; i < interfaceDisplays.length; i++){
            interfaceDisplays[i].style.zIndex=0;};
         x.style.zIndex = 1;
    }
    
}

function share_Schedule(){
    var x = document.getElementById("schedule");
   document.getElementById("rabbit").src= 'https://i.imgur.com/iPrbaod.png';
  
    if (x.style.zIndex == 0) {
          for (var i = 0; i < interfaceDisplays.length; i++){
            interfaceDisplays[i].style.zIndex=0;};
         x.style.zIndex = 1;
    }
    
}


function create_Course(){
    var x = document.getElementById("newCoursePage");
     document.getElementById("rabbit").src= 'https://i.imgur.com/iPrbaod.png';
    if (x.style.zIndex == 0) {
      for (var i = 0; i < interfaceDisplays.length; i++){
        interfaceDisplays[i].style.zIndex=0;};
     x.style.zIndex = 1;
    }
}

function displayCourse(){
    var x = document.getElementById("courseresults");
    document.getElementById("rabbit").src= 'https://i.imgur.com/KvtfXtt.png';
    if (x.style.zIndex == 0) {
      for (var i = 0; i < interfaceDisplays.length; i++){
        interfaceDisplays[i].style.zIndex=0;};
     x.style.zIndex = 1;
    }
}

function create_Event(){
    var x = document.getElementById("newEventPage");
    document.getElementById("rabbit").src= 'https://i.imgur.com/iPrbaod.png';
    if (x.style.zIndex == 0) {
          for (var i = 0; i < interfaceDisplays.length; i++){
            interfaceDisplays[i].style.zIndex=0;};
         x.style.zIndex = 1;
    }
}
