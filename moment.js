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
  var trainName="";
  var destination="";
  var trainTime="";
  var frequency=0;
  var currentHr=moment().format('h');
        currentHr=currentHr*60;
        currentHr=JSON.parse(currentHr)
        console.log("currentHr"+currentHr);
        //console.log(typeof(currentHr));
  var currentMinute=moment().format('m');
  currentMinute=JSON.parse(currentMinute);
  console.log("currentMinute"+currentMinute);
  var totalmins=currentMinute+currentHr;
  console.log("totalmins"+totalmins);
  totalmins=moment(totalmins).format('hh:mm');
  console.log("totaltotalmin"+totalmins);
    
    

  $('#submit-button').on('click',function(){
    event.preventDefault();

    trainName=$('#Train-input').val().trim();
    destination=$('#destination-input').val().trim();
    trainTime=$('#Train-Time').val().trim();
    frequency=$('#frequency-input').val().trim();
    //console.log(trainName + destination + trainTime +frequency);
    console.log("hello");
    database.ref().push({
      name:trainName,
      dest:destination,
      time:trainTime,
      freq:frequency
    });


  });

database.ref().on("child_added", function(snapshot) {
    var addRow = snapshot.val();

    console.log(addRow);
    totalmins=totalmins+addRow.freq;


    var tableData=$('.table-body')
    tableData.append('<tr><td>'+addRow.name+'</td><td>'+addRow.dest+'</td><td>'+addRow.freq+'</td></tr>');
        


    //$('.tbody').append;
  });


var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
  
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}





