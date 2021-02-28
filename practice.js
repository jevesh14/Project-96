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
  
  function addUser(){
    user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "addinng user"
     });
}