/*
TODO: Make entries editable
TODO: Turn display into nice card things
TODO: local storage???
TODO: general styling
*/

//<!-- Back End -->
function Location(place, landmarks, date) {
  this.place=place;
  this.landmarks=landmarks;
  this.year=date[0];
  this.month=date[1];
}

Location.prototype.findSeason = function(){
  switch(this.month){
    case "01":
    case "02":
    case "12":
      this.season = "Winter";
      break;
    case "03":
    case "04":
    case "05":
      this.season = "Spring";
      break;
    case "06":
    case "07":
    case "08":
      this.season = "Summer";
      break;
    case "09":
    case "10":
    case "11":
      this.season = "Autumn";
      break;
  }
  return this.season;
}

//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var myLocation = new Location($("#place-input").val(), $("#landmark-input").val().split(","), $("#year-input").val().split("-"), $("#season-input").val());
    $("#result ul").append("<li>"+ myLocation.place + "</li>");
    $("form#inputForm")[0].reset();
    $("ul li").last().click(function(){
      var displayString = "<h1>"+myLocation.place + "</h1><h2>" + myLocation.findSeason() + " " + myLocation.year + "</h2><ul>";
      myLocation.landmarks.forEach(function(landmark){
        displayString+="<li>" + landmark + "</li>";
      });
      displayString+="</ul>";
      $("#display").html(displayString);
    });
  });
});
