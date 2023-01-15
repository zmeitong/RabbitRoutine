var interfaceDisplays = document.getElementsByClassName("speechbox")

function displayHome(){
    var x = document.getElementById("homepage");
    if (x.style.zIndex == 0) {
          for (var i = 0; i < interfaceDisplays.length; i++){
            interfaceDisplays[i].style.zIndex=0;};
         x.style.zIndex = 1;
    }
    console.log("homepage", x.style.zIndex)
 
}

function create_Course(){
    var x = document.getElementById("newCoursePage");
    if (x.style.zIndex == 0) {
      for (var i = 0; i < interfaceDisplays.length; i++){
        interfaceDisplays[i].style.zIndex=0;};
     x.style.zIndex = 1;
    }
    console.log("create course page", x.style.zIndex)
}

function displayCourse(){
    var x = document.getElementById("courseresults");
    if (x.style.zIndex == 0) {
      for (var i = 0; i < interfaceDisplays.length; i++){
        interfaceDisplays[i].style.zIndex=0;};
     x.style.zIndex = 1;
    }
    console.log("course results page", x.style.zIndex)
}

function create_Event(){
    var x = document.getElementById("newEventPage");
    if (x.style.zIndex == 0) {
          for (var i = 0; i < interfaceDisplays.length; i++){
            interfaceDisplays[i].style.zIndex=0;};
         x.style.zIndex = 1;
    }
  console.log("new event page", x.style.zIndex)
}
