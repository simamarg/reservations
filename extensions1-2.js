// Intro to Objects lesson
// Extension 1

var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = "";

var claimReservation = function() {
  name = document.getElementById("userInput").value;
  var lowerCaseName = name.toLowerCase();
  var nameInReservations = Object.keys(reservations).filter(function(element) {return element.toLowerCase() === lowerCaseName});
  if (nameInReservations.length !== 0) {
    if (reservations[nameInReservations[0]].claimed) {
      document.getElementById("message").innerHTML = "Hello " + name + ", your reservation is already claimed";
    } else {
      document.getElementById("message").innerHTML = "Hello " + name;
    }
  } else {
    document.getElementById("message").innerHTML = "Sorry " + name + ", we can seem to find a reservation under your name";
    reservations[name] = {};
    reservations[name].claimed = true;
    document.getElementById("message").innerHTML = "Hello " + name + "! You now have a reservation. Take a seat";
  }
  printReservationsList();
};

// Extension 2
var printReservationsList = function() {
  var keys = Object.keys(reservations);
  var values = Object.values(reservations);
  var list = "";
  for (var i=0; i < keys.length; i++) {
    if (values[i].claimed) {
      list += keys[i] + " has a reservations and it's claimed<br>";
    } else {
      list += keys[i] + " has a reservations and it's not claimed<br>";
    }
  }
  document.getElementById("reservations-list").innerHTML = list;
};

printReservationsList();