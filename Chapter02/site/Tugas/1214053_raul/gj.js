function PushButton() {
  nama = document.getElementById("nama").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  country = document.getElementById("country").value;
  city = document.getElementById("city").value;
  PostSignUp(nama, email, password, country, city);
}

function PostSignUp(nama, email, password, country, city) {
  var myHeaders = new Headers();
  myHeaders.append("Login", "jasmine");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    nama: nama,
    email: email,
    password: password,
    country: country,
    city: city,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://eog2uruv03k3hv5.m.pipedream.net", requestOptions)
    .then((response) => response.text())
    .then((result) => GetResponse(result))
    .catch((error) => console.log("error", error));
}

function GetResponse(result) {
  document.getElementById("formsignup").innerHTML = result;
}
