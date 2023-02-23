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

fetch("https://indonesia-public-static-api.vercel.app/api/heroes", requestOptions)

// fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi/32", requestOptions)

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
    const deskripsi = "deskripsi:"
    const birth_year = "tahun lahir:"
    const death_year = "tahun meninggal:"
    txt= txt+trnyatabel.replace("#TEXT#","\nnama:"+value.name);
      txt= txt+trnyatabel.replace("#TEXT#",deskripsi+value.description+"");
      txt= txt+trnyatabel.replace("#TEXT#",birth_year+value.birth_year+"");
      txt= txt+trnyatabel.replace("#TEXT#",death_year+value.death_year+"");
      
      
    document.getElementById("konten").innerHTML=txt;
    }
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
    