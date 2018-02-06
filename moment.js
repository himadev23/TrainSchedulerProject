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
  var trainName = "";
  var destination = "";
  var trainTime = "";
  var frequency = 0;
  var nextTrain;
  var currentTime = moment().format('HH:MM');
  //console.log(currentTime);
  var timeAway;

  $('#submit-button').on('click', function() {
      event.preventDefault();

      trainName = $('#Train-input').val().trim();
      destination = $('#destination-input').val().trim();
      trainTime = $('#trainTime').val().split(':').join('');
      trainTime=moment(trainTime,'hmm').format('hh:mm a');
      //console.log('train time '+typeof(trainTime));
     // trainTime = JSON.parse(trainTime);
      //console.log(trainTime + typeof(trainTime));
      currentTime = currentTime.split(':').join('');
      //console.log(currentTime);
      currentTime = JSON.parse(currentTime);
      /*for (var i = trainTime; i < currentTime; i + frequency) {
          trainTime = trainTime + frequency;
          console.log(trainTime);
      }*/

      frequency = $('#frequency-input').val().trim();
      nextTrain = moment().add(frequency, 'm');
      nextTrain = moment(nextTrain).format('hh:mm a');
      //console.log(nextTrain);
      var a = moment(currentTime, 'hh:mm a');
      var b = moment(nextTrain, 'hh:mm a');
      var duration = moment.duration(b.diff(a));
      timeAway = parseInt(duration.asMinutes());

      database.ref().push({
          name: trainName,
          dest: destination,
          //time: trainTime,
          freq: frequency,
          nexttrain: nextTrain,
          away: timeAway
      });

      //$('form').reset();

  });


  database.ref().on("child_added", function(snapshot) {
      var addRow = snapshot.val();

      var tableData = $('.table-body')
      tableData.append('<tr><td>' + addRow.name + '</td><td>' + addRow.dest + '</td><td>' + addRow.freq + '</td><td>' + addRow.nexttrain + '</td><td>' + addRow.away + '</td></tr>');

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