package struck

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
		Nama:         "ujang",
		Phone_number: "6284564562",
		Jabatan:      "tukang sapu",
	}
	hasil := InsertPresensi(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "6811110023231"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}
