var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
 
hasil=""
txt=""
txt1=""

fetch("https://jsonplaceholder.typicode.com/comments", requestOptions)
    .then(response => response.text())
    .then(result => tampilkan(result))
    .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value) {
    const postId = "Post ID:"
    const id = "ID:"
    const name = "Name"
    const email = "Email:"
    const body = "Body:"
    const garis = "=================================================="
  
    txt= txt+trnyatabel.replace("#TEXT#","Post ID: "+value.postId+"");
    txt= txt+trnyatabel.replace("#TEXT#","ID: "+value.id+"");
    txt= txt+trnyatabel.replace("#TEXT#","Name: "+value.name);
    txt= txt+trnyatabel.replace("#TEXT#","Email: "+value.email+"");
    txt = txt + trnyatabel.replace("#TEXT#", "Body: " + value.body + "");
    txt = txt + trnyatabel.replace("#TEXT#", garis);
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `