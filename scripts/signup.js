document.getElementById("signup").addEventListener("click",myfun);
var UserData=JSON.parse(localStorage.getItem("SignUpData"))||[];
function myfun(){
    let Fname=document.getElementById("Fname").value;
    let Lname=document.getElementById("Lname").value;
    let Email=document.getElementById("Email").value;
    let Password=document.getElementById("Password").value;

    var obj={
          FirstName:Fname,
          LastName:Lname,
          userId:Email,
          userPd:Password
    }
     UserData.push(obj);
     localStorage.setItem("SignUpData",JSON.stringify(UserData));
}