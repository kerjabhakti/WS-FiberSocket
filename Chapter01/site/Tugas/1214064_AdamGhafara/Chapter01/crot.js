var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

hasil="";
txt="";
txt1="";

fetch("https://animechan.vercel.app/api/quotes", requestOptions)
    .then(response => response.text())
    .then(result => tampilkan(result))
    .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
  const ani = "Anime Name:"
  const cha = "Character:"
  const des = "Quote:"
  const pag = "* * * * * * * * * * * *"
    txt= txt+trnyatabel.replace("#TEXT#",ani+value.anime + "");
    txt= txt+trnyatabel.replace("#TEXT#",cha+value.character + "");
    txt= txt+trnyatabel.replace("#TEXT#",des+value.quote + "");
    txt= txt+trnyatabel.replace("#TEXT#",pag);
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `