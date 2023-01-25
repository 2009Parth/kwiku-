function addUser()
{
    UserName = document.getElementById("user_name").value;
    localStorage.setItem("UserName" , UserName);

    window.location = "kwiku_room.html" ;
}
