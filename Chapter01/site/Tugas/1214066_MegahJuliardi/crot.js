var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
 
hasil=""
txt=""
txt1=""

fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then(response => response.text())
    .then(result => tampilkan(result))
    .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
    txt= txt+trnyatabel.replace("#TEXT#","Name: "+value.name);
    txt= txt+trnyatabel.replace("#TEXT#","Email: "+value.email+"");
    txt= txt+trnyatabel.replace("#TEXT#","Website: "+value.website+"");
    txt= txt+trnyatabel.replace("#TEXT#","Phone: "+value.phone+"");
    txt= txt+trnyatabel.replace("#TEXT#","Username: "+value.username+"");
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `