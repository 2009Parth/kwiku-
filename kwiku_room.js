// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgk8SXjivjxIRbgIEC7w6fnGr0uSifqdA",
    authDomain: "kwiku-e37e1.firebaseapp.com",
    databaseURL: "https://kwiku-e37e1-default-rtdb.firebaseio.com",
    projectId: "kwiku-e37e1",
    storageBucket: "kwiku-e37e1.appspot.com",
    messagingSenderId: "960157829705",
    appId: "1:960157829705:web:869d58154af0cd94b94d98"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);







  function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });
    });

}





getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwiku_page.html";
}







user_name = localStorage.getItem("UserName");
document.getElementById("user_name_h3").innerHTML = "Welcome  " + user_name + "!" ;

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwiku_page.html";
}








function logout()
{
  localStorage.removeItem("UserName");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}