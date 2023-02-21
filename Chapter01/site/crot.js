var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  hasil=""
  txt=""
  txt1=""
  
  fetch("https://indonesia-public-static-api.vercel.app/api/heroes", requestOptions)
    .then(response => response.text())
    //.then(result => console.log(result))
    .then(result => tampilkan(result))
    .catch(error => console.log('error', error));
  
    function tampilkan(result){
      console.log(result);
      hasil=JSON.parse(result);
      txt=hasil.forEach(isikantabel);
    } 
    
    function isikantabel(value){
      const ya = "deathyear:"
      txt= txt+trnyatabel.replace("#TEXT#","\nnama:"+value.name);
      txt= txt+trnyatabel.replace("#TEXT#",ya+value.death_year+"");
      document.getElementById("konten").innerHTML=txt;
  
    }
  
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `