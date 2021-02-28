//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyC5vcH8B8Z9rfrgkR5I0Hj-G2LhzpaJGT8",
      authDomain: "kwitter-60f15.firebaseapp.com",
      databaseURL: "https://kwitter-60f15-default-rtdb.firebaseio.com",
      projectId: "kwitter-60f15",
      storageBucket: "kwitter-60f15.appspot.com",
      messagingSenderId: "265693888424",
      appId: "1:265693888424:web:e8aa918f71b9a05036e79d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name ;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("room_name" + Room_names);
        // row = "<div class='room_name' id="+Room_names + "onclcick='redirctToroomname(this.id)' >#"+Room_names+"</div> <hr>";//
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

 function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_room.html";
 }
 function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }

