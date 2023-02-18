# Pengenalan API dan Tools
Disini akan digunakan beberapa tools

# git scm
Download git-scm dari https://git-scm.com/downloads

## Get SSH Key 
to get ssh key in your computer, and put in your github or gitlab ssh key setting.

```sh
cat ~/.ssh/id_rsa.pub
```
if there is no key appears, plese generate the key also set global config of git in next section and please add the public key to your github profile.

## Generate RSA Key
Just One time for first instalation of git scm, 
```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## Set config global
Just One time for first instalation of git scm, 

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

# Postman

1. Install postman. Pilih salah satu dari sini https://github.com/public-apis/public-apis. 
2. lakukan request ke public api dengan postman contoh : https://alexwohlbruck.github.io/cat-facts/docs/
![image](https://user-images.githubusercontent.com/11188109/218394186-d8621df9-9e04-4e7e-9d5f-bb6e84032db1.png)
3. Pilih menu </> atau code pilih javascript fetch
![image](https://user-images.githubusercontent.com/11188109/218394378-778f0deb-f3fd-4d3b-a276-1987c16bc76b.png)

# Tailwind

Untuk membuat antarmuka menggunakan komponen tailwind contoh :https://tailwindcomponents.com/component/multi-line-table

lakukan download. fork repo ini. kemudian open with code. taruh file htmlnya di folder di dalam folder site

![image](https://user-images.githubusercontent.com/11188109/218395570-c0c5b05f-27ff-44d8-8bf5-4c898f363e38.png)

fork repo

![image](https://user-images.githubusercontent.com/11188109/218396020-b9138cfb-3ffe-4998-85d3-a1a8c274e634.png)

lakukan clone repo yang di fork

![image](https://user-images.githubusercontent.com/11188109/218396201-b906ff2c-af14-4d65-b9c1-bc9f52882fe7.png)


install plugin live server
![image](https://user-images.githubusercontent.com/11188109/218396548-483f109a-c88c-4bc6-96d0-5d784a447556.png)




# Menghubungkan situs dengan Public API

1. Buat folder NPM di dalam folder site
2. Buat template tailwindcss simpan sebagai index.html
3. buat file js dengan nama croot.js panggil di bawah dengan script, sebelum tag </body>
    ```html
    <script src="./croot.js"></script>
    ```
4. Buka dengan live server, inspect lihat di console.

    ![image](https://user-images.githubusercontent.com/11188109/218408763-7514c229-ce10-4a48-b275-ebf23ddbf782.png)

6. Isi dari script croot.js contoh :
    ```js
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    hasil=""

    fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
      .then(response => response.text())
      .then(result => tampilkan(result))
      .catch(error => console.log('error', error));

    function tampilkan(result){
      console.log(result);
      hasil=JSON.parse(result);

      //document.getElementById("nama").innerHTML(result);
    }
    ```
    
    akan terlihat variabel hasil di console log
    
    ![image](https://user-images.githubusercontent.com/11188109/218419862-983ddbba-a445-41a5-a703-f2d56829888a.png)
    
    untuk akses variabel global hasil kita pakai console log
    
    ![image](https://user-images.githubusercontent.com/11188109/218420311-3aa5700f-f6ec-4d5a-82d3-2000fdb24df6.png)
    
    kemudian tambahkan ramuan looping untuk mengeluarkan semuanya
    
    ![image](https://user-images.githubusercontent.com/11188109/218428781-5b8a7467-b027-48e6-aaf2-8437be0ec8c8.png)

## Tugas

1. Buat folder NPM di dalam folder site di dalam folder chapter01. Pilih Public API

2. Ada dua file yang dibuat yaitu index.html dan croot.js. Men

3. Buat html bisa membaca semua data dari API, pastikan setiap orang berbeda, tidak boleh sama API nya.
    ![image](https://user-images.githubusercontent.com/11188109/218429415-dc895212-8982-4d73-9010-32cf5e72906f.png)

4. Pull Request Dengan Subjek : 1-KELAS-NPM-NAMA , 
5. Description : please include your screenshoot of your application and attach your javascript certificate.
    * Take course from [mygreatlearning](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-javascript) or from [LinkedIn](https://www.linkedin.com/learning/javascript-for-web-designers-3)
    * Take Javascript Learning from [Google](https://learndigital.withgoogle.com/digitalgarage/course/learn-programming-with-javascript) for next class meeting.
6. After Approved you might go home


