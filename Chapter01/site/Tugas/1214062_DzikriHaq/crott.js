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

fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty", requestOptions)

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
    const arti = "arti : "
    const asma = "asma : "
    const audio = "audio : "
    const ayat = "ayat : "
    const keterangan = "keterangan : "
    const nama = "nama : "
    const nomor = "nomor : "
    const rukuk = "rukuk : "
    const type = "type : "
    const urut = "urut : "
    const pembatas = "================"
    

    txt= txt+trnyatabel.replace("#TEXT#","\n arti : "+value.arti);
    txt= txt+trnyatabel.replace("#TEXT#",asma+value.asma+"");
    txt= txt+trnyatabel.replace("#TEXT#",audio+value.audio+"");
    txt= txt+trnyatabel.replace("#TEXT#",ayat+value.ayat+"");
    txt= txt+trnyatabel.replace("#TEXT#",keterangan+value.keterangan+"");
    txt= txt+trnyatabel.replace("#TEXT#",nama+value.nama+"");
    txt= txt+trnyatabel.replace("#TEXT#",nomor+value.nomor+"");
    txt= txt+trnyatabel.replace("#TEXT#",rukuk+value.rukuk+"");
    txt= txt+trnyatabel.replace("#TEXT#",type+value.type+"");
    txt= txt+trnyatabel.replace("#TEXT#",urut+value.urut+"");
    txt= txt+trnyatabel.replace("#TEXT#",pembatas);
      
    document.getElementById("konten").innerHTML=txt;
    }
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
    