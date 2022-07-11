// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBId_IMHBJyakTOGxr4Ncv-Dxt3X2oHdIM",
    authDomain: "let-s-chat-web-app-72f49.firebaseapp.com",
    projectId: "let-s-chat-web-app-72f49",
    storageBucket: "let-s-chat-web-app-72f49.appspot.com",
    messagingSenderId: "22855841558",
    appId: "1:22855841558:web:af546d16d7bd4cbfb74237"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

  function addRoom() {
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
"<div> room_name.value </div>"
//End code
});});}
getData();

function redirect() {
  localStorage.setItem("room_name", room_name);
    window.location="kwitter_room.html";
}
