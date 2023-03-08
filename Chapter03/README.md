# Web Socket

# Dasar Cookie, Frontend dan Backend Package

Pada bagian ini dijelaskan bagaimana membangun otorisasi pada backend dan menggunakannya di frontend, beberapa langkah yang dilakukan :
* Bagaimana server mengenali siapa kita?
* Membuat front end dengan tailwind container
* Membuat database backend
* membuat package golang dan merilisnya

Pastikan github pages sudah jalan di repo masing-masing.

## Cookie

Server membutuhkan identifikasi dari browser bahwa yang mengakses adalah orang yang punya hak akses. Bagaimana caranya server mengenali user? Caranya adalah dengan menggunakan Value dari Cookie dengan Name/Key yang sudah diberikan dari server. Cookie merupakan tempat penyimpanan pada browser. Cookie di definisikan sebagai key dan value. sebagai contoh :

* Dosen Membuka situs shuffle.dev dan login pada chrome. Kemudian klik kanan inspect, pilih tab Application. Kemudian pada bagian kiri pilih Storage -> Cookies -> alamat web yagn dikunjungi. maka akan terlihat Name(Key) dan Value disana. Struktur data Cookie : Name, Value, Domain, Path, Expires. dll. 
  ![image](https://user-images.githubusercontent.com/11188109/221475714-3b632155-031c-40ec-a859-d8a8dbedf373.png)
* Dilihat dari gambar diatas ada Cookie bernama PHPSESSID. Cookie tersebut merupakan standar dari session PHP. Jadi apa itu session? Setelah user melakukan login. Server membuat kode hash dan disimpan sebagai file yang berisi informasi username dan role di folder tmp, kemudian kode hash tersebut diberikan kepada client melalui browser melalu Set-Header HTTP, berisi Name dan Value. Dimana Name adalah nama cookiesnya dan value adalah kode hash yang sebelumnya disimpan di server. Selama user menggunakan browser maka interaksi dengan server selalu menyertakan Cookie dalam setiap permintaannya sebagai header setiap request. Sehingga user akan dikenali sebagai username apa dan role nya apa.
* Sekarang mahasiswa coba buka browser pada komputer masing-masing, dan bukalah situs yang sama. Kemudian masukkan Name dan Value dari browser dosen. Disini dicontohkan PHPSESSID. Selah diinputkan. silahkan refresh website. Dan lihatlah apa yang terjadi
* Cobalah dengan website kampus dilanjut dengan youtube dan gmail.

## Membuat container berbasis tailwindcss

Sebelumnya pilih dahulu studi kasus pembuatan dashboard yang akan dibuat selama kuliah. Setiap orang tidak boleh sama, boleh sama topik tapi berbeda menu yang di develop. Pilihan topik dashboard :

* Proyek 1
* Proyek 2
* Proyek 3
* Intership 1
* Intership 2
* Tugas Akhir
* DHS
* Jadwal Kuliah
* Undangan Rapat
* Surat Menyurat
* Kuisoner
* Helpdesk
* Profile
* Point of Sales Kantin
* Presensi
* Perwalian
* Monitoring Orang Tua
* Tagihan
* Penerimaan Mahasiswa Baru
* Nilai
* BAP
* Penelitian
* Pengabdian Masyarakat
* Pengembangan Bahan Ajar
* Penggajihan dan Honor
* Kemahasiswaan
* elearning
* kurikulum RPS
* Luaran Dosen
* Laminfokom

![image](https://user-images.githubusercontent.com/11188109/221479972-18ff68c8-cd28-4f8a-88b3-6c499a1d4900.png)

CSS mendefinisikan wilayah untuk tata letak dengan nama container. Biasanya dibatasi dengan tag div. Silahkan membuat containernya dahulu dan simpan. Isi dengan studi kasus yang diberikan.

![image](https://user-images.githubusercontent.com/11188109/221481502-a6590b6d-f039-4883-a0e5-7b1e6ff6f189.png)

Tambahkan chart, resume dan tabel.

![image](https://user-images.githubusercontent.com/11188109/221483647-a4836c01-d913-4c04-8c18-d44fafe9c135.png)

## Basis data

Dalam memilih basis data skala enterprise harus mengacu pada hasil survey [Gartner](https://www.gartner.com/reviews/market/cloud-database-management-systems).Buatlah masing-masing basis data dari studi kasus yang dipilih :
* Jika belum punya akun silahkan buat akun menggunakan akun Github (sign in)
![image](https://user-images.githubusercontent.com/15622730/223630472-6876cfd3-0ed7-4fbd-b51c-f7fb62cb355a.png)
![image](https://user-images.githubusercontent.com/15622730/223630677-23c059d9-0236-4cc3-9d35-14e5724003ee.png)
![image](https://user-images.githubusercontent.com/15622730/223630763-a1fc6f61-61e4-4f2d-be1a-72212ce3420d.png)
![image](https://user-images.githubusercontent.com/15622730/223631022-4149c024-cce1-4bfa-95f6-bb5b37f2c0b5.png)
![image](https://user-images.githubusercontent.com/15622730/223631673-e509a334-363c-4d51-a287-4a8531d023f9.png)
![image](https://user-images.githubusercontent.com/15622730/223632150-14a16067-1664-4faa-bc06-616cd266ba26.png)
Buka Mongo DB Compas
![image](https://user-images.githubusercontent.com/15622730/223632076-d5690100-14ef-423e-9d97-cc2e62099eab.png)
Ganti Passwordnya dengan yang tadi sudah disimpan dan hapus kurung sikunya
![image](https://user-images.githubusercontent.com/15622730/223632419-2231f036-2aed-4304-93be-9ff40785ad3b.png)
Hasilnya seperti ini
![image](https://user-images.githubusercontent.com/15622730/223632785-a380ab91-ce4f-4842-89d1-6859fd6136ea.png)

* [MongoDB](https://www.mongodb.com/)
* MySQL : https://www.freemysqlhosting.net/, https://www.db4free.net/, https://remotemysql.com/

## Pengembangan Backend

Pada sesi ini pastikan anda sudah mendaftarkan diri ke heroku. Kemudian kita akan mencoba mengembangkan package golang. Langkah untuk membuat backend di golang :
* Instalasi golang
* Definisikan dahulu struct
* Buatlah package dan fungsi menggunakan struct tersebut
* Fungsi mengakses langsung database

### Struct di golang


Komunikasi di golang menggunakan json dipermudah dengan adanya struct type. Struct type ini akan mendefinisikan bagaimana bentuk json yang berkomunikasi dari frontend menuju backend. Sebelumnya inisiasi dulu package yang akan kita buat, masuk ke folder kerja kita dan lakukan inisialisasi package

```sh
go mod init github.com/USERNAME/ai/Chapter01/KELAS/NPM
```

Buat file type.go pada folder tersebut. Kemudian isilah dengan struct yang akan kita buat. Perlu digaris bawahi dan wajib ada atribut :
* bson : mendefinisikan nama field pada collection di database mongoDB
* json : mendefinisikan nama atribut pada pertukaran json melalui API
* omitempty : diperbolehkan tidak diisi / nullable
* [] menunjukan data array didalam array
* GMT +7 Jakarta

```go
package namapackage

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Karyawan struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Nama         string             `bson:"nama,omitempty" json:"nama,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Jabatan      string             `bson:"jabatan,omitempty" json:"jabatan,omitempty"`
	Jam_kerja    []JamKerja         `bson:"jam_kerja,omitempty" json:"jam_kerja,omitempty"`
	Hari_kerja   []string           `bson:"hari_kerja,omitempty" json:"hari_kerja,omitempty"`
}

type JamKerja struct {
	Durasi     int      `bson:"durasi,omitempty" json:"durasi,omitempty"`
	Jam_masuk  string   `bson:"jam_masuk,omitempty" json:"jam_masuk,omitempty"`
	Jam_keluar string   `bson:"jam_keluar,omitempty" json:"jam_keluar,omitempty"`
	Gmt        int      `bson:"gmt,omitempty" json:"gmt,omitempty"`
	Hari       []string `bson:"hari,omitempty" json:"hari,omitempty"`
	Shift      int      `bson:"shift,omitempty" json:"shift,omitempty"`
	Piket_tim  string   `bson:"piket_tim,omitempty" json:"piket_tim,omitempty"`
}

type Presensi struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Longitude    float64            `bson:"longitude,omitempty" json:"longitude,omitempty"`
	Latitude     float64            `bson:"latitude,omitempty" json:"latitude,omitempty"`
	Location     string             `bson:"location,omitempty" json:"location,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Datetime     primitive.DateTime `bson:"datetime,omitempty" json:"datetime,omitempty"`
	Checkin      string             `bson:"checkin,omitempty" json:"checkin,omitempty"`
	Biodata      Karyawan           `bson:"biodata,omitempty" json:"biodata,omitempty"`
}

type Lokasi struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Nama     string             `bson:"nama,omitempty" json:"nama,omitempty"`
	Batas    Geometry           `bson:"batas,omitempty" json:"batas,omitempty"`
	Kategori string             `bson:"kategori,omitempty" json:"kategori,omitempty"`
}

type Geometry struct {
	Type        string      `json:"type" bson:"type"`
	Coordinates interface{} `json:"coordinates" bson:"coordinates"`
}

```

Kompilasi dependensi dengan perintah

```sh
go mod tidy
```

### Fungsi di golang

Disini dipelajari bagaimana membuat fungsi dan menggunakan environment variabel di golang. Pertama simpang dahulu MONGOSTRING koneksi mongodb di environtment variabel windows atau sistem operasi.
Buat file namapackage.go yang berisi

```go
package namapackage

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var MongoString string = os.Getenv("MONGOSTRING")

func MongoConnect(dbname string) (db *mongo.Database) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(MongoString))
	if err != nil {
		fmt.Printf("MongoConnect: %v\n", err)
	}
	return client.Database(dbname)
}

func InsertOneDoc(db string, collection string, doc interface{}) (insertedID interface{}) {
	insertResult, err := MongoConnect(db).Collection(collection).InsertOne(context.TODO(), doc)
	if err != nil {
		fmt.Printf("InsertOneDoc: %v\n", err)
	}
	return insertResult.InsertedID
}

func InsertPresensi(long float64,lat float64, lokasi string, phonenumber string, checkin string, biodata Karyawan) (InsertedID interface{}) {
	var presensi Presensi
	presensi.Latitude = long
	presensi.Longitude = lat
	presensi.Location = lokasi
	presensi.Phone_number = phonenumber
	presensi.Datetime = primitive.NewDateTimeFromTime(time.Now().UTC())
	presensi.Checkin = checkin
	presensi.Biodata = biodata
	return helper.InsertOneDoc("adorable", "presensi", presensi)
}

func GetKaryawanFromPhoneNumber(phone_number string) (staf Presensi) {
	karyawan := MongoConnect("adorable").Collection("presensi")
	filter := bson.M{"phone_number": phone_number}
	err := karyawan.FindOne(context.TODO(), filter).Decode(&staf)
	if err != nil {
		fmt.Printf("getKaryawanFromPhoneNumber: %v\n", err)
	}
	return staf
}

```

rapihkan dependensi

```sh
go mod tidy
```


### Testing Fungsi

Koneksikan dengan Database : https://youtu.be/Kh6xGWSwQ5s

```go
package namapackage

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "rumah"
	phonenumber := "6811110023231"
	checkin := "masuk"
	biodata := Karyawan{
		Nama : "ujang",
		Phone_number : "6284564562",
		Jabatan : "tukang sapu",
	}
	hasil:=InsertPresensi(long ,lat , lokasi , phonenumber , checkin , biodata )
	fmt.Println(hasil)
	

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "6811110023231"
	biodata:=GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}


```

Jalankan testing

```sh
go test
```

### Publish Package

https://youtu.be/XLh7-D9bnTE

Setting dahulu environtment variabel di windows :
GOPROXY=proxy.golang.org

lakukan langkah berikut :

```sh
git tag
git tag v0.0.1
git push origin --tags
go list -m github.com/whatsauth/wasocket@v0.0.1
```

# Kerjakan

* Buatlah tampilan frontend sesuai studi kasus, masing-masing individu harus berbeda studi kasus taruh di dalam folder frontend. Frontend minimal memiliki 5 menu, dimana setiap menu menyajikan content/isi container yang berbeda.(nilai 10 per menu/content)
* Buatlah database mongodb atau MySQL online cloud.
* Buatlah akun heroku atau GCP atau AWS, gunakan bank digital untuk melakukan verifikasi pembayaran.
* Aktifkan [GitHub Student Developer Pack](https://education.github.com/pack).
* Buatlah struct, package, testing, dan publish package mengakses basis data yang sudah dibuat sebelumnya taruh di folder backend.(nilai 5 per type struct dan 5 per fungsi)
* Github Pages Sudah UP untuk frontend, contoh : 
* Pull Request dengan Judul : 3-KELAS-NPM-NAMA menyertakan
  * URL github pages, beserta skrinsutan
  * URL [pkg.go.dev](https://pkg.go.dev/), beserta skrinsutan
  * Skrinsutan isi mongodb dari mongocompass yang sudah berisi data kasus
  * Skrinsutasn isi mysql yang berisi dengan data kasus jika menggunakan mysql
  * File Frontend dalam folder KELAS/NPM/frontend yang bisa diakses dari github pages
  * File Backend dalam folder KELAS/NPM/backend yang sudah release versi awal di pkg.go.dev
