function PushButton(){
    firstName=document.getElementById("firstName").value;
    lastName=document.getElementById("lastName").value;
    email=document.getElementById("email").value;
    PostSignUp(firstName,lastName,email);
  }
  
  function PostSignUp(firstName,lastName,email){
    var myHeaders = new Headers();
myHeaders.append("Login", "asalasallogin");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "uuid": firstName,
  "phonenumber": lastName,
  "delay": email
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eox1ckqqavwawx.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}