var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.zippopotam.us/us/33162", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
    function tampilkan(result){
      console.log(result);
      hasil=JSON.parse(result);
      txt=hasil.forEach(isitable);
    } 
    
    function isitabel(value){
      const cty = "post code:"
      const oke = "country:"
      txt= txt+trnyatabel.replace("#TEXT#","\npost code:"+value.post_code);
      txt= txt+trnyatabel.replace("#TEXT#",ya+value.country+"");
      document.getElementById("konten").innerHTML=txt;
    }
  
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `