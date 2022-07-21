+++
authors = "adexe"
tutorials = ["php"]
cover = "/post/web-php2.jpg"
date = 2021-01-16T00:00:00Z
description = "Mari belajar membuat sebuah form login dan registrasi menggunakan PHP dan MySQL "
series = "PHP Basic"
shortcode = "Login & Sign Up Part 2"
status = "publish"
sumber = []
tags = ["php", "mysql", "crud"]
title = "Membuat Form Login dan Registrasi Dengan PHP MySQL : Part 2"
type = ["tutorials", "tutorial"]
url = "/php-membangun-form-login-signup-2/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Kemarin pada bagian pertama [Membuat Form Login dan Registrasi Dengan PHP MySQL : Part 1](https://anbidev.com/php-membangun-form-login-signup) kita sudah belajar cara membuat form sederhana menggunakan HTML dan CSS. Lalu membuat request POST dan menerimanya dengan PHP.

Sekarang mari kita lanjutkan menghubungkan form yang telah kita buat dengan sebuah database. Sehingga nanti data pendaftaran yang diinput akan tersimpan kedalam database. Dan nantinya, autentikasi login juga akan menggunakan data dari database.

<br>

## Perkenalan

<hr>

**Database** adalah sebuah sistem yang berisi kumpulan data yang dikelola sedemikian rupa dan diorganisir dengan ketentuan tertentu dalam satu penyimpanan.

Data pada database dapat dilakukan manipulasi seperti penambahan, pengubahan dan penghapusan serta dapat dilihat dengan menggunakan teknik tertentu untuk menghasilkan informasi yang lebih bermakna.

Sekarang anbi mau mengajarkan ke kalian bagaimana cara membuat database menggunakan MySQL dengan bantuan phpMyAdmin. Apa itu MySQL dan phpMyAdmin?

- **MySQL** : adalah sebuah sistem manajemen database yang menggunakan perintah - perintah SQL (_Structured Query Language_) untuk mengelola data yang disimpan.

- **phpMyAdmin** : adalah sebuah software berbasis PHP yang bertujuan untuk memudahkan kita mengelola database MySQL.

_"Kenapa kita mengelola database dengan **phpMyAdmin**? Kenapa tidak langsung saja menggunakan **MySQL**?"_

Dengan **phpMyAdmin**, kalian tidak perlu menggunakan **_terminal_** untuk mengelola data dalam database, karena phpMyAdmin memiliki tampilan GUI (_Graphic User Interface_) sehingga mudah digunakan.

> Ibarat **MySQL** adalah **cangkul** untuk membajak sawah, **phpMyAdmin** adalah **traktor**.

<br>

## Membuat Database

<hr>

Sekarang kita akan membuat database untuk menyimpan inputan data dari form yang telah kita buat.

1. Pertama, pastikan server dan database local pada XAMPP sudah aktif.
   !["Apache Server dan Database MySQL"](/post/php-membangun-form-login-daftar-01.png "Apache Server dan Database MySQL")
2. Buka **browser**, dan akses link [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/) untuk membuka tampilan dashboard phpMyAdmin.
   !["Tampilan Dashboard phpMyAdmin"](/post/php-membangun-form-login-daftar-2-01.png "Tampilan Dashboard phpMyAdmin")
3. Pada bagian pojok kiri navigasi, paling atas terdapat tombol **New** untuk membuat database, dan isikan nama database pada kolom `database name`.
   !["Klik New > Isi Nama Database"](/post/php-membangun-form-login-daftar-2-02.png "Klik New > Isi Nama Database")
4. Kita beri nama database ini **`db_user`**. Lalu klik tombol **create**, dan akan muncul tampilan untuk membuat **table**.
   !["Setelah berhasil membuat database"](/post/php-membangun-form-login-daftar-2-03.png "Setelah berhasil membuat database")

<br>

## Membuat Table

<hr>

**Table** merupakan bagian dari database yang dapat memiliki relasi satu sama lain, tabel sendiri terdiri dari **baris** dan **kolom**. Jika database adalah ibunya maka tabel adalah anak - anaknya.

!["Ilustrasi Database dan Tabel"](/post/php-membangun-form-login-daftar-2-12.jpg "Ilustrasi Database dan Tabel")

Disini kita akan membuat tabel yang akan menampung data input dari form registrasi yang kita buat kemarin. Nah, untuk itu kita akan membuat **table** bernama **`tbl_pendaftaran`** dengan isi 4 kolom yaitu :

- id
- username
- password
- email

Jika nanti sudah berisi data, Kurang lebih gambarannya seperti ini :

**tbl_pendaftaran**

| Id  | Username | Password  | Email           |
| --- | -------- | --------- | --------------- |
| 1   | anbi     | 123asd456 | anbi@sayang.com |
| 2   | adeulfi  | sayang123 | adeul@gmail.com |
| 3   | adexes   | juanda123 | adexe@email.com |

Setelah tadi kita selesai membuat database. Sekarang bagaimana cara membuat tabel? Berikut langkah - langkahnya.

1. Masukkan nama tabel didalam kolom input *create table*. Kita beri nama **`tbl_pendaftaran`** dengan jumlah 4 kolom seperti yang kita bahas tadi.
   !["Input nama tabel > masukkan jumlah kolom > go"](/post/php-membangun-form-login-daftar-2-04.png "Input nama tabel > masukkan jumlah kolom > go")

2. Lalu akan muncul tampilan beberapa *field input* yang digunakan untuk mendeskripsikan kolom yang akan kita buat. Untuk membuat kolom kita perlu mendefinisikan ***name*** , ***type*** dan ***length/values*** kolom :

   !["Definisikan nama, tipe dan panjang kolom"](/post/php-membangun-form-login-daftar-2-05.png "Definisika nama, tipe dan panjang kolom")
 
   - **VARCHAR** adalah tipe data String, cocok digunakan untuk menyimpan kata dan kalimat.
   - **INT** adalah tipe data Number, cocok digunakan unutk menyimpan angka.

   > Usahakan dalam penamaan kolom **jangan ada spasi**. Sebaiknya gunakan `_` atau `camelCase`. Contoh : "nama_depan" atau "namaBelakang"
3. Khusus untuk kolom **Id** , perlu kita jadikan sebagai **`primary key`** dan diberikan fungsi ***auto increment***. Tujuannya agar setiap data yang diinput memiliki nilai yang *uniqe*. 

   1. Pada bagian **id** centang kolom bernama **A.I** 
      
      !["Centang Bagian A.I"](/post/php-membangun-form-login-daftar-2-06.png "Centang Bagian A.I")

   2. Lalu akan muncul dialog box seperti ini, Langsung **GO** aja. 
      
      !["Dialog Box Primary"](/post/php-membangun-form-login-daftar-2-07.png "Dialog Box Primary")

4. Setelah semuanya terisi, tekan **save** dan jadilah tabel **tbl_pendaftaran**!
   !["Jadilah tbl_pendaftaran"](/post/php-membangun-form-login-daftar-2-08.png "Jadilah Tabel Pendaftaran")


<br>

## Koneksi Dengan Database

<hr>

Database sudah kita siapkan, sekarang waktunya kita koneksikan dengan form yang sudah kita buat. Didalam `index.php`, kita tambahkan kode PHP untuk mengkoneksikan dengan database.

```php
<?php
/* nama server kita */
$servername = "localhost";

/* nama database kita */
$database = "db_user"; 

/* nama user yang terdaftar pada database (default: root) */
$username = "root";

/* password yang terdaftar pada database (default : "") */ 
$password = ""; 

/* membuat koneksi */
$conn = mysqli_connect($servername, $username, $password, $database);

/* mengecek koneksi */
if (!$conn) {
    die("Maaf koneksi anda gagal : " . mysqli_connect_error());
}else{
   echo "<h1>Yes! Koneksi Berhasil..</h1>";
}


/* ============================
      NANTI KODE NYA DISINI 
   ============================*/
   

/* menutup koneksi */
mysqli_close($conn);
?>
```

Jika koneksi berhasil, ketika kita mencoba login atau daftar akan muncul output :

```
Yes! Koneksi Berhasil..
```

Jika gagal, akan muncul output :

```
Maaf koneksi anda gagal : *penyebab koneksi gagal*
```

!["Contoh Koneksi Berhasil"](/post/php-membangun-form-login-daftar-2-09.gif "Contoh Koneksi Berhasil")



<br>

## Menyimpan Hasil Pendaftaran

<hr>

Sekarang mari kita belajar cara menyimpan hasil input data form pendaftaran kedalam tabel **`tbl_pendaftaran`** di database **`db_user`**.

Kita kemarin belajar cara mengambil input data form dengan menggunakan `$_POST`. Sekarang kita akan menyimpan setiap data pada form dengan memanggil data menggunakan `$_POST`.

```php
<?php
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];

$query_sql = "INSERT INTO tbl_pendaftaran (username, password, email) 
                                    VALUES ('$username', '$password', '$email')";

if (mysqli_query($conn, $query_sql)) {
      echo "<h1>Username $username berhasil terdaftar</h1>
            <a href='pages/login.php'>Kembali Login</h1>
         ";
} else {
      echo "Pendaftaran Gagal : " . mysqli_error($conn);
}
?>
```

### Penjelasan Garis Besar

- **Query SQL**

   yaitu sintaks atau perintah yang dipakai untuk mengakses, memanipulasi dan menampilkan data pada sistem database SQL.


   ```php
   <?php
   $query_sql = "INSERT INTO tbl_pendaftaran (username, password, email) 
                                       VALUES ('$username', '$password', '$email')";
   ?>
   ```

   
   Pada query diatas, bermaksud untuk menginput *`username`*, *`password`*, dan *`email`* kedalam tabel **`tbl_pendaftaran`** di database.

- **Eksekusi Query**
   
   ```php
   <?php
   mysqli_query($conn, $query_sql)
   ?>
   ```

   Dalam kode diatas, digunakan untuk mengeksekusi Query SQL pada variabel `$query_sql` dalam database yang terkoneksi pada variabel `$conn`.

!["Contoh Eksekusi Form Pendaftaran"](/post/php-membangun-form-login-daftar-2-10.gif "Contoh Eksekusi Form Pendaftaran")

Jika kita berhasil mendaftar maka data tersebut sudah tersimpan di database. Coba kita lihat di **phpMyAdmin** > **`db_user`** > **`tbl_pendaftaran`** akan terlihat data kita yang tersimpan.

!["Data Tersimpan Di tbl_pendaftaran"](/post/php-membangun-form-login-daftar-2-11.png "Data tersimpan di tbl_pendaftaran")


<br>

## Autentikasi Login Dengan Data Database

<hr>

Kita sudah dapat menyimpan data pada saat mendaftar dengan form registrasi, sekarang kita akan membuat autentikasi login menggunakan username dan password yang sudah kita daftarkan.

Mudahnya, kita mengambil data yang ada pada database dengan parameter data username dan password yang diinput pada form login. 

!["Ilustrasi Algoritma Autentikasi Login"](/post/php-membangun-form-login-daftar-2-13.jpg "Ilustrasi Algoritma Autentikasi Login")

Jika datanya ada maka ***"Login Berhasil"***, jika tidak maka ***"Login Gagal"***. Langsung saja kita buat kodenya.

```php
<?php
$username = $_POST["username"];
$password = $_POST["password"];

$query_sql = "SELECT * FROM tbl_pendaftaran 
                        WHERE username = '$username' AND password = '$password'";

$result = mysqli_query($conn, $query_sql);

if(mysqli_num_rows($result) > 0){
      echo "<h1>Selamat Datang, ".$username."!</h1>";
}else{
      echo "<h2>Username atau Password Salah!</h2>";
}
?>
```

### Penjelasan Secara Garis Besar

* **Query Select**

```php
<?php
$query_sql = "SELECT * FROM tbl_pendaftaran 
                        WHERE username = '$username' AND password = '$password'";
?>
```

Query diatas digunakan untuk mengambil data pada tabel **tbl_pendaftaran** , dimana ia akan mencari `username` dan `password` yang sama dengan yang dikirimkan pada form login.

* **Menghitung Jumlah Data**

```php
<?php
mysqli_num_rows($result)
>
```

Kode diatas digunakan untuk menghitung jumlah data pada hasil eksekusi query.Nah, disitu terdapat kondisi yang membandingkan dengan **> 0**, yang berarti jika ada datanya maka berhasil login, jika tidak ada maka login gagal.

!["Contoh Eksekusi Login"](/post/php-membangun-form-login-daftar-2-14.gif "Contoh Eksekusi Login")


<center> . . . </center>

Nah itu kan masih ada output buat cek koneksi tadi, kalian bisa menghapus kode tersebut.

Gimana paham gak dengan penjelasan diatas, mungkin agak ribet yak, jika kalian masih bingung bisa tanya dikolom komentar dibawah. Untuk **full codenya** kalian bisa akses di github [AnbiDev](https://github.com/AnbiDev/).

:octopus: [https://github.com/AnbiDev/php-login-daftar](https://github.com/AnbiDev/php-login-daftar)

Oke itulah full tutorial dari [Membuat Form Login dan Registrasi Dengan PHP MySQL](https://anbidev.com/buat-form-login-signup). Semoga bermanfaat dan sampai jumpa!

> Happy Coding