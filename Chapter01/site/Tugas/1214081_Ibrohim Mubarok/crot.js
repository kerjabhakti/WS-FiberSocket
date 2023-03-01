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

fetch("https://cdn.statically.io/gh/lakuapik/jadwalsholatorg/master/adzan/semarang/2019/12.json", requestOptions)

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
    const imsyak = "Imsyak:"
    const shubuh = "Subuh:"
    const dzuhur = "Dzuhur:"
    const tanggal = "Tanggal:"
    const terbit = "Terbit:"
    const magrib = "Magrib:"
    const isya = "Isya:"
    const dhuha = "Dhuha:"
    const ashr = "Ashr:"
    const pembatas = "--------------------------------------------------------------------------------------------------------------"
      txt= txt+trnyatabel.replace("#TEXT#",imsyak+value.imsyak+"");
      txt= txt+trnyatabel.replace("#TEXT#",shubuh+value.shubuh+"");
      txt= txt+trnyatabel.replace("#TEXT#",dzuhur+value.dzuhur+"");
      txt= txt+trnyatabel.replace("#TEXT#",tanggal+value.tanggal+"");
      txt= txt+trnyatabel.replace("#TEXT#",terbit+value.terbit+"");
      txt= txt+trnyatabel.replace("#TEXT#",magrib+value.magrib+"");
      txt= txt+trnyatabel.replace("#TEXT#",isya+value.isya+"");
      txt= txt+trnyatabel.replace("#TEXT#",dhuha+value.dhuha+"");
      txt= txt+trnyatabel.replace("#TEXT#",ashr+value.ashr+"");
      txt= txt+trnyatabel.replace("#TEXT#",pembatas);
      
      
    document.getElementById("konten").innerHTML=txt;
    }
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
    