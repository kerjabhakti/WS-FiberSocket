function PushReg(){
    firstname=document.getElementById("firstname").value;
    lastname=document.getElementById("lastname").value;
    email=document.getElementById("email").value;
    password=document.getElementById("pass").value;
    PostSignUp(firstname,lastname,email,password);
}

function PostSignUp(firstname,lastname,email,pass){
var myHeaders = new Headers();
myHeaders.append("Logon", "QW84Y2H37F8CN32WIENKJSDCBN293WAAA");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "firstname": firstname,
  "lastname": lastname,
  "email": email,
  "password": pass
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eohcrhtutfyw0tw.m.pipedream.net?=", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  document.getElementById("formsignup").style.display = 'none';
  document.getElementById("formsignup").style.display = 'block';  
}

function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}