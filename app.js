var config = {
    apiKey: "AIzaSyC-mUg8A6Dea1XyKLsnIAZFztYpW6j6CrQ",
    authDomain: "fir-project-84353.firebaseapp.com",
    databaseURL: "https://fir-project-84353.firebaseio.com",
    projectId: "fir-project-84353",
    storageBucket: "fir-project-84353.appspot.com",
    messagingSenderId: "1023129187127"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var employeeName = "";
  var employeeRole = "";
  var employeeStart = "";
  var employeeWorked = 0;
  var employeeRate = 0;
  var employeeBilled = 0;

$("#submit-button").on("click", function() {

    event.preventDefault();

    employeeName = $("#name-input").val().trim();
    employeeRole = $("#role-input").val().trim();
    employeeStart = $("#date-input").val().trim();
    employeeRate = $("#rate-input").val().trim();

console.log(employeeName);
console.log(employeeRole);
console.log(employeeStart);
console.log(employeeRate);

    database.ref().push({
        name: employeeName,
        role: employeeRole,
        start: employeeStart,
        rate: employeeRate
    })
});

var allEmployees = 

// for (var i = 0; i < )

database.ref().on("child_added", function(snapshot) {
    var addRow = snapshot.val();

    console.log(addRow);

    $("#employee-name").append(addRow.name);
    $("#employee-role").append(addRow.role);
    $("#employee-start").append(addRow.start);
    $("#employee-rate").append(addRow.rate);
  });


<button onclick = "googleSignin()">Google Signin</button>
<button onclick = "googleSignout()">Google Signout</button>