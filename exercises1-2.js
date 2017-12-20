// Intro to Objects lesson
// Exercises 1 + 2

var reservations = {
    'Bob': { claimed: false },
    'Ted': { claimed: true }
  }
  
  var name = prompt('Please enter the name for your reservation');
  
  var claimReservation = function() {
    var lowerCaseName = name.toLowerCase();
    var nameInReservations = Object.keys(reservations).filter(function(element) {return element.toLowerCase() === lowerCaseName});
    if (nameInReservations.length) {
      if (reservations[nameInReservations[0]].claimed) {
        alert("Hello " + name + ", your reservation is already claimed");
      } else {
        alert("Hello " + name);
      }
    } else {
      // alert("Sorry " + name + ", we can seem to find a reservation under your name");
      reservations[name] = {};
      reservations[name].claimed = true;
      alert("Hello " + name + "! You now have a reservation. Take a seat");
    }
  };
  
  claimReservation();