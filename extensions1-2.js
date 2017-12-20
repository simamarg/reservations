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
  if (nameInReservations.length) {
    if (reservations[nameInReservations[0]].claimed) {
      document.getElementById("message").innerHTML = "Hello " + name + ", your reservation is already claimed";
    } else {
      document.getElementById("message").innerHTML = "Hello " + name;
    }
  } else {
    reservations[name] = {};
    reservations[name].claimed = true;
    document.getElementById("message").innerHTML = "Hello " + name + "! You now have a reservation. Take a seat";
  }
  printReservationsList();
};

// Extension 2
var printReservationsList = function() {
  var list = "";
  for (var key in reservations) {
    if (reservations[key].claimed) {
      list += key + " has a reservations and it's claimed<br>";
    } else {
      list += key + " has a reservations and it's not claimed<br>";
    }
  }
  document.getElementById("reservations-list").innerHTML = list;
};

printReservationsList();