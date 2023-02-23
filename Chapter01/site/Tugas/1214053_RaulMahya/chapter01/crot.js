var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

hasil=""
txt=""
txt1=""

fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result){
  console.log(result);
  hasil=JSON.parse(result);
  txt=hasil.forEach(isitabel);
//   document.getElementById("nama").innerHTML(result);
}

function isitabel(value){
    const oke = "cat:"
    const texr = "source:"
    const user = "user"
    const ter = "updatedAt:"
    const delet = "delete:"
    const used = "user:"
    txt= txt+trnyatabel.replace("#TEXT#","\nnama:"+value._id);
    txt= txt+trnyatabel.replace("#TEXT#",oke+value.text+"");
    txt= txt+trnyatabel.replace("#TEXT#",texr+value.source+"");
    txt= txt+trnyatabel.replace("#TEXT#",ter+value.source+"");
    txt= txt+trnyatabel.replace("#TEXT#",user+value.user+"");
    txt= txt+trnyatabel.replace("#TEXT#",delet+value.user+"");
    txt= txt+trnyatabel.replace("#TEXT#",used+value.used+"");

    document.getElementById("konten").innerHTML=txt;
    }
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
    