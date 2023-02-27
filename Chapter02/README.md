# HTTP Header and Body Capture

## Syarat Umum

* Memiliki akun requestcatcher.com atau webhook.site atau pipedream.com
* Coba melakukan method post dengan Postman dengan header token
  ![image](https://user-images.githubusercontent.com/11188109/220023489-ebb8d666-f099-4384-b2d4-0d165f402ab6.png)
* Lihat hasilnya di web, terlihat ada token disana
  ![image](https://user-images.githubusercontent.com/11188109/220023734-cf442863-7ec4-40eb-abfc-4058f0ca8380.png)
* Setting Repo untuk Github Pages
  ![image](https://user-images.githubusercontent.com/11188109/220018093-6ac9f3ea-af03-47b9-a038-76a2f5a295a2.png)
* Ingat selalu inspect console untuk melihat error javascript, jika terjadi error CORS Police, maka ganti ke pipedream.com
  
## Setting Endpoint di Pipedream

Pipedream merupakan endpoint testing API, untuk membaca header dan body(raw message) dari http client yang kita request. Http client request bisa dari postman maupun kode javascript kita. Pada langkah ini kita akan melakukan:
1. Membuat Akun pipedream
2. Testing Endpoint menggunakan Postman
3. Membangun HTML Form dengan Tailwind CSS Component
4. Membuat file js untuk mengirimkan data form ke endpoint pipedream
5. Melihat hasilnya di dashboard pipedream
6. Production mode menggunakan github pages

Disini kita akan melakukan request dengan menggunakan javascript fetch.

### Membuat Akun

* Kunjungi pipedream.com , terus klik Sign Up Free! 

  ![image](https://user-images.githubusercontent.com/11188109/220200037-5f556ae6-3bd6-4aa3-9869-00c1d119bb51.png)
  
* Klik sign up with github

  ![image](https://user-images.githubusercontent.com/11188109/220200140-783f1a04-e00b-425b-a5b2-b43f546b022c.png)
  
* Authorize

  ![image](https://user-images.githubusercontent.com/11188109/220200197-98f46bc2-2217-4697-9e54-9034e864d4cd.png)
  
* Pilih Nama Workspace yang tersedia, ditandai dengan tanda centang hijau, kemudian klik Continue

  ![image](https://user-images.githubusercontent.com/11188109/220200320-707ff8e0-cc32-4196-ad3a-8cfa083b2d11.png)
* Opsional membagikan link workspace seperti ini, https://pipedream.com/@bukupedia/invite?token=4adefabe60301ac06b000ee620533e73 . Lanjutkan dengan menekan tombol Skip.
  ![image](https://user-images.githubusercontent.com/11188109/220201017-bf5ac24b-78fc-4195-a507-8a7f4b1a1d09.png)
* Klik New HTTP / Webhook REquest
  ![image](https://user-images.githubusercontent.com/11188109/220201239-3a98da54-3349-4cc6-be73-cce215681da1.png)
* Pilih Event Data : Raw REquest, HTTP Response : 200 OK . Kemudian klik Save and Continue
  ![image](https://user-images.githubusercontent.com/11188109/220201352-08e86d50-0b57-4bb9-98f5-b6ff3d09d420.png)
* Akan keluar unique URL untuk endpoint : https://eol0j1lmdtbpzp.m.pipedream.net . Kemudian kita coba dengan postman dahulu
  ![image](https://user-images.githubusercontent.com/11188109/220201459-1d403095-0585-40d3-b478-e33d0d510ce2.png)

### Melakukan Testing Endpoint

Disini kita akan membuka Postman untuk melakukan testing endpoint dahulu, dengan contoh :
* Method POST Headers kita isi dengan Key : Login , Value : Bebas. Pada bagian body isi dengan data json .Kemudian klik Send
  ![image](https://user-images.githubusercontent.com/11188109/220201693-d5189d91-116b-42cf-9632-b553822a0327.png)
  ![image](https://user-images.githubusercontent.com/11188109/220203247-7803df47-029c-4bd9-9233-ef2540d9bca7.png)
* Dashboard Pipedream akan muncul 1 New Event, kita buka event tersebut.
  ![image](https://user-images.githubusercontent.com/11188109/220201839-cf090239-88eb-4506-8d4c-a0e57b68b4f6.png)
  ![image](https://user-images.githubusercontent.com/11188109/220201921-6e223896-90cf-4442-b242-7eba8b433aab.png)
* Disana akan terlihat pada bagian headers ada Login yang kita masukkan dan pada bagian body ada json yang kita masukkan ke postman. Artinya endpoint dan http request bekerja dengan baik untuk menangkap header dan body yang dikirimkan.
  ![image](https://user-images.githubusercontent.com/11188109/220203550-fc55f7f9-886c-4fdf-9beb-3fcf884b94f0.png)
* Simpan kode javascript yang dibuat oleh postman dengan menekan tanda </> dibagian pojok kanan atas, kemudian pilih javascipt - Fetch
  ![image](https://user-images.githubusercontent.com/11188109/220203396-5b64b9f1-b0a9-41b4-853e-6de1addb0767.png)
  ```javascript
  var myHeaders = new Headers();
  myHeaders.append("Login", "rollygantengsekali");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "uuid": "sadsadsad",
    "phonenumber": "6281312000300",
    "delay": 1
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://eol0j1lmdtbpzp.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  ```


### Membuat Form Pendaftaran

* Kita cari dulu di google dengan keyword sign up form tailwind component free. Contoh : https://tailwindcomponents.com/component/simple-registersign-up-form/landing
  ![image](https://user-images.githubusercontent.com/11188109/220203961-34229f29-9cce-4352-b158-bcf7ad55b6bc.png)
* Kita unduh kodenya untuk kita pakai ditaruh di repo kita dan coba kita live server dari vscode.
  ![image](https://user-images.githubusercontent.com/11188109/220204497-5616ba02-aa69-4126-bec0-6dba44c676be.png)
  ![image](https://user-images.githubusercontent.com/11188109/220204556-19245b9f-6f50-47fb-a29c-700e17196bf9.png)
* Cari element dari input dan buttonnya kemudian kita beri id
  ![image](https://user-images.githubusercontent.com/11188109/220205296-cdc9453b-58dd-4727-9d77-c5c250d3bb00.png) 
  ![image](https://user-images.githubusercontent.com/11188109/220205510-205c1381-073b-451f-b29c-ede13072c333.png)
* Buat file js kita masukkan dahulu javascript yang didapatkan dari postman ke js tersebut, kemudian panggil pada bagian bawah sebelum tag penutup body

  ![image](https://user-images.githubusercontent.com/11188109/220205858-d311831a-d9d6-4cad-b8ea-94dca460121c.png)
  ```html
  <script src="croot.js"></script>
  ```


### Membuat Fungsi Javascript

Pada bagian ini kita akan membuat fungsi-fungsi di javascript untuk mengirimkan data dari html menuju endpoint pipedream yang kita buat. Kenapa harus dibuat fungsi? agar kode program javascript tetap rapih dan mudah terbaca.
1. Membuat fungsi PostSignUp() yang berfungsi untuk melakukan Post Form Data Sign Up. Fungsi ini diambil dari postman, yang kita modif data inputan dari id form html.
   ```javascript
    function PostSignUp(namadepan,namabelakang,email,password){
          var myHeaders = new Headers();
          myHeaders.append("Login", "rollygantengsekali");
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
              "namadepan": namadepan,
              "namabelakang": namabelakang,
              "email": email,
              "password": password
          });

          var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
          };

          fetch("https://eol0j1lmdtbpzp.m.pipedream.net", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
    }
   ```
3. Membuat fungsi PushButton() untuk melakukan aksi setelah menekan tombol, pada bagian html button tambahkan atribut onclick.

   ![image](https://user-images.githubusercontent.com/11188109/220208507-0d5cb2cc-4979-410c-a3e0-a804caa732c4.png)
   ```javascript
    function PushButton(){
          namadepan=document.getElementById("namadepan").value;
          namabelakang=document.getElementById("namabelakang").value;
          email=document.getElementById("email").value;
          password=document.getElementById("password").value;
          PostSignUp(namadepan,namabelakang,email,password);
    }
   ```
4. Kita test dengan klik kanan Open with live server, kita isi form nya sambil inspect console lalu klik button yang kita buat. Terlihat dari console data success dikirim. kemudian kita lihat pada dashboard pipedream data sudah diterima dengan baik oleh endpoint baik itu header maupun body.
   ![image](https://user-images.githubusercontent.com/11188109/220209051-34a4982b-9a50-4e7f-8283-760948abfc15.png)
   ![image](https://user-images.githubusercontent.com/11188109/220209136-5e2ec6fa-12c0-450f-b417-91b50cd4110a.png)
   ![image](https://user-images.githubusercontent.com/11188109/220209218-73348bb6-6d29-47f5-8988-675b6c85eac0.png)

### Tambahan Estetika UX

Pasti merasa aneh bukan setelah menekan tombol, tapi tampilan tidak berubah sama sekali seolah tidak terjadi apa-apa. Disini kita akan coba untuk mengubah tampilan jika tombol di klik, maka form akan disembunyikan dan menampilkan data yang diterima dari endpoint pipedream. Oke kita cukup menambahkan satu fungsi lagi dan memodifikasi fungsi PostSignUp() khususnya dibagian result then fetch nya. Langkahnya sebagai berikut :

* Pertama kita cari dulu element yang akan kita hidden, bisa menggunakan inspect elemetns untuk identifikasinya, kemudian kita kasih id
  ![image](https://user-images.githubusercontent.com/11188109/220210224-290cb494-de07-4eb4-b403-5c21204f3a7a.png)
  ![image](https://user-images.githubusercontent.com/11188109/220210342-a81493b4-453b-4cd1-a526-3ca1092f6ebc.png)
* Kita coba script style display pada bagian console dengan menggunakan id yang sudah kita buat, style display mana yang bisa menghilangkan formsignup apakah block atau none. Terlihat di gambar none bisa mengilangkan element formsignup, kita **mungkin** akan pakai script ini di fungsi kita yang akan datang. Dari sini kita paham bagaimana menyembunyikan element dengan js.
  ![image](https://user-images.githubusercontent.com/11188109/220210618-3961fe64-a413-4320-86e7-cdfafe640c50.png)
  ```javascript
    document.getElementById("formsignup").style.display = 'none';
    document.getElementById("formsignup").style.display = 'block';
  ```
* Tambahkan fungsi GetResponse() di file js kita yang sudah dibuat sebelumnya, dan melakukan modifikasi dari fungsi PostSignUp pada bagian then result.
  ```javascript
    function GetResponse(result){
          document.getElementById("formsignup").innerHTML = result;
    }
  ```
  ![image](https://user-images.githubusercontent.com/11188109/220211123-eb372a58-7507-4bd8-b54f-2f18f50d5dd9.png)
* Kita ujicoba dengan mengisi form dan klik tombol submit, maka form kita sudah berhasil.
  ![image](https://user-images.githubusercontent.com/11188109/220211272-70eaa594-504c-40f9-9b96-633bf9f9e676.png)
* Setting pages pilih deployment from branch pilih main. Maka form kita bisa diakses dari menjadi github pages. Alamat github pages biasanya sub domain dari github.io. Kita juga bisa menggunakan custom domain kita sendiri, Contoh : https://universitas.bukupedia.co.id/ws/Chapter02/A/NPM/

## Kerjakan

* Buatlah form sign up yang melakukan POST ke pipedream.com ketika klik button.
* Buat Folder NPM didalam Chapter02/A yang berisi 2 file minimal js dan html, dengan nama index.html, croot.js. Boleh menambahkan file css atau favicon.
* file croot.js minimal berisi 3 fungsi, tidak boleh ada kode js diluar dari fungsi, semua harus masuk ke dalam fungsi js.
* Form dibangun dengan menggunakan CSS tailwind, desain html tidak boleh sama, harus berbeda satu sama lain.
* Pull Request dengan nama 2-Kelas-NPM-NAMA di folder Chapter02/A/NPM, dengan deskripsi disertakan di bawah ini.
* Sertakan skrinsutan dari live server aplikasi dan pipedream.com
* Sertakan link Github Pages Sudah jalan di repo masing-masing
* Sertakan skinsutan juga sertifikat 4 sertifikasi berikut:
  * https://www.mygreatlearning.com/academy/learn-for-free/courses/go-programming-language 
  * https://www.mindluster.com/certificate/3394
  * https://www.codecademy.com/learn/learn-go
  * https://www.coursera.org/specializations/google-golang



