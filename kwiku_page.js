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




  



  user_name = localStorage.getItem("UserName");
  room_name = localStorage.getItem("room_name");
  




  function getData() 
  { 
        firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
         {
           firebase_message_id = childKey;
           message_data = childData;
  
           console.log(message_data);
           console.log(firebase_message_id);
  
           name = message_data['name'];
           message = message_data['message'];
           like = message_data['like'];
  
  
           name_with_tag = "<h4> " + name + "<img src='tick.png' class='user_tick'></h4>";
           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
           like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
  
           row = name_with_tag + message_with_tag + like_button + span_with_tag ;
  
           document.getElementById("output").innerHTML += row;
         }
        }); 
      }); 
  }
  
  
  
  
  
  
  
  getData();
  
  
  
  
  
  function updateLike(message_id)
  {
        console.log("clicked on the like button - " + message_id);
        button_id = message_id;
        likes = document.getElementById(button_id).value;
        update_likes = Number(likes) + 1 ;
        console.log(update_likes);
  
  
        firebase.database().ref(room_name).child(message_id).update({
              like : update_likes
        });
  
  }
  
  
  
  
  
  
  
  function send()
  {
     msg = document.getElementById("msg").value;
  
     firebase.database().ref(room_name).push({
        name : user_name ,
        message : msg ,
        like : 0
     });
  
     document.getElementById("msg").value = " " ;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  function logout()
  {
        localStorage.removeItem("UserName");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }