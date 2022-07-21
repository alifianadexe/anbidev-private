+++
authors = "adexe"
tutorials = ["php"]
cover = "/post/web-php1.jpg"
date = 2021-01-09T00:00:00Z
description = "Mari belajar membuat sebuah form login dan registrasi menggunakan PHP dan MySQL "
series = "PHP Basic"
shortcode = "Login & Sign Up Part 1"
status = "publish"
sumber = []
tags = ["php", "mysql", "crud"]
title = "Membuat Form Login dan Registrasi Dengan PHP MySQL : Part 1"
type = ["tutorials", "tutorial"]
url = "/php-membangun-form-login-signup/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Sekarang kita akan membuat sebuah **form login** dan **pendaftaraan** dengan menggunakan PHP dan MySQL. Nah, kalian yang mungkin pertama kali belajar membuat web santai saja, disini anbi bakal bahas langkah per langkah.

<br>

## Persiapan

<hr>

Nah apa saja yang perlu kita persiapkan nih? Berikut ini yang perlu kalian persiapan :

### **Visual Studio Code**  


Buat apa **Visual Studio Code**? VS Code (***Visual Studio Code***) sebuah teks editor ringan dan handal yang dibuat oleh Microsoft untuk sistem operasi multiplatform, artinya tersedia juga untuk versi Linux, Mac, dan Windows.

[Download Disini](https://code.visualstudio.com/)

Kalau selesai download, waktu installasi itu *option* dibawah dicentang semua yaa, supaya mempermudah kita dalam mengakses *Visual Studio Code*.

!["Centang Semua Optionnya"](/post/php-membangun-form-login-daftar-03.png "Centang Semua Optionnya")

<br>

### **XAMPP**    

Lalu apa itu **XAMPP**? XAMPP merupakan paket alat untuk menjalankan web server dan database di **localhost** komputer. Itu artinya kalau kalian sudah punya website online, XAMPP membantumu membuat versi offline dari website tersebut.

[Download Disini](https://www.apachefriends.org/)

Setelah selesai menginstall jangan lupa untuk mengaktifkan server **Apache** dan database **MySQL** pada XAMPP terlebih dahulu.

!["Apache Server dan Database MySQL"](/post/php-membangun-form-login-daftar-01.png "Apache Server dan Database MySQL")


<br>

## Buat Struktur Folder

<hr>

Setelah selesai menginstall kedua aplikasi tersebut, mari kita lanjut membuat struktur folder untuk web ini. 

- Sekarang arahkan ke folder **htdocs** dan buat folder baru bernama **login-signup** caranya :
    - Akses pada **C:\xampp\htdocs**
    - Buat disana buat folder bernama **login-signup**.
    !["Folder login-signup"](/post/php-membangun-form-login-daftar-02.png "Folder login-signup")

- Lalu didalam folder **login-signup** kita buat file PHP bernama `index.php` serta buat juga file stylesheet css bernama `style.css` dan juga folder lagi bernama **pages**.

- Didalam folder **pages** buat file bernama `login.php` dan `daftar.php`.

- Coba buka folder **login-signup** dengan menggunakan Visual Studio Code. Caranya hanya dengan klik kanan dan pilih *"Open With Code"*.

!["Nih kayak gini Open With Code"](/post/php-membangun-form-login-daftar-04.gif "Nih kayak gini Open With Code")


**Penjelasan Struktur Kode**

Jika kalian membuat folder beserta filenya dengan baik, hasilnya akan seperti ini :

!["Struktur Web Folder"](/post/php-membangun-form-login-daftar-06.png "Struktur Web Folder")

- Folder **pages** berisi file `login.php` dan `daftar.php`.

    - **`login.php`** , file ini nantinya akan berisi tampilan form login, dengan input **username** dan **password**.

    - **`daftar.php`**, file ini nantinya akan berisi tampilan form daftar dengan input ***username*** , ***email*** dan ***password***.

- **`index.php`**, file ini akan kita isi dengan kode PHP dimana ia akan menampilkan hasil `POST` pada halaman **login** dan **daftar**.

- **`style.css`** , file ini akan menampung kode stylesheet untuk menghias web kita dengan CSS agar lebih menarik.


<br>

## Form Login 

<hr>

Setelah membuat struktur folder dengan baik, mari kita membuat halaman form login terlebih dahulu. Kode yang kita buat akan disimpan di **login.php**, dan kode lengkap nya seperti ini :

```php
<!DOCTYPE HTML>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" href="../style.css">
    </head>
    <body>
        <div class="container">
          <h1>Login</h1>
            <form method="POST" action="../index.php">

                <!-- tipe hidden tidak akan tampil pada website --> 
                <input name="tujuan" type="hidden" value="LOGIN" >

                <label>Username</label>
                <br>
                <input name="username" type="text">
                <br>
                <label>Password</label>
                <br>
                <input name="password" type="password">
                <br>

                <button>Log In</button>
                
                <p> Belum punya akun?
                  <a href="daftar.php">Daftar di sini</a>
                </p>
            </form>
        </div>
    </body>
</html>
```

Coba kita lihat hasilnya, dengan mengakses link berikut [http://localhost/login-signup/pages/login.php](http://localhost/login-signup/pages/login.php.
)

***"Sebentar, Kenapa linknya aksesnya seperti itu?"*** 

!["Ini penjelasannya"](/post/php-membangun-form-login-daftar-12.jpg "Ini Penjelasannya")


Nih hasilnya :smile:

!["Hasil Tampilan Login"](/post/php-membangun-form-login-daftar-07.png "Hasil Tampilan Login")



<br>

### **Penjelasan Garis Besar Kode**

- `<form>` Action

```php
<form method="POST" action="../index.php">
```

Kode diatas untuk memberi tahu kemana data pada form ini akan dikirim? disana anbi mengarahkan ke file `index.php` dengan menggunakan method `POST`. Apa itu method `POST`? bisa kalian lihat disini.

- *Data yang dikirim*

```php
<input name="username" type="text">
<input name="password" type="password">
```

Kedua baris kode diatas adalah tempat data yang akan dikirim. Attribute `name` digunakan sebagai identitas dari data yang dikirim, sehingga server dapat mengenali data tersebut berdasarkan nama yang kita berikan.

Jadi misal `name = "username"` nanti ketika dikirim kita bisa menggunakan kode PHP untuk memanggil data yang dia input di *textbox* dengan kode `$_POST["username"]`.

- *Hidden Input*

```php
<input name="tujuan" type="hidden" value="LOGIN" >
```

Kode diatas nantinya akan sebagai penanda bahwa data yang dikirim ke `index.php` adalah dari form Login. Kita juga akan membuat hal yang sama pada form pendaftaran. 

Perhatikan *attribute*  `value`, *value* ini digunakan untuk mendefinisikan nilai *default*. 

- Pindah Halaman

```php
<a href="daftar.php">Daftar di sini</a>
```

Untuk kode diatas digunakan untuk pindah ke halaman daftar.

<br>

##  Form Daftar

<hr>

Lalu kita lanjut membuat tampilan form pada file **daftar.php**. Kode nya hampir sama dengan yang tadi, tetapi ada sedikit perubahan dan tambahan menjadi seperti ini :

```php
<!DOCTYPE HTML>
<html>
    <head>
        <title>Halaman Login</title>
        <link rel="stylesheet" href="../style.css">
    </head>
    <body>
        <div class="container">
          <h1>Daftar</h1>
            <form method="POST" action="../index.php">

                <input type="hidden" name="tujuan" value="DAFTAR">

                <label>Username</label>
                <br>
                <input name="username" type="text">
                <br>
                <label>Email</label>
                <br>
                <input name="email" type="text">
                <br>
                <label>Password</label>
                <br>
                <input name="password" type="password">
                <br>
                <button>Daftar</button>
                <p> Sudah punya akun?
                  <a href="login.php">Login di sini</a>
                </p>
            </form>
        </div>
    </body>
</html>
```

Coba kita lihat hasilnya dengan mengakses link berikut ini [http://localhost/login-signup/pages/daftar.php](http://localhost/login-signup/pages/daftar.php). 

!["Hasil Tampilan Daftar"](/post/php-membangun-form-login-daftar-08.png "Hasil Tampilan Daftar")


<br>

### **Penjelasan Garis Besar Kode**

Sebagian besar kode yang digunakan hampir sama seperti  form login, tetapi disini nilai untuk *Hidden Input* diubah menjadi <span style="color:#ff9c36">"DAFTAR"</span> dan input data tambahan bernama <span style="color:#ff9c36">"email"</span>.

<br>

## Mari Hias Dengan CSS!

<hr>

Nah, sentuhan terakhir agar form web kita terlihat elok nan cantik, perlu kita hias menggunakan CSS. Jika kalian lihat pada kode diatas, terdapat satu baris kode :

```php
<link rel="stylesheet" href="../style.css">
```

Yang berarti semua kode CSS pada file `style.css` akan diimport kedalam file HTML yang memiliki baris kode tersebut. Gampangnya, baris kode itu menghubungkan file PHP HTML kita dengan file CSS.

Nah sekarang mari kita masukkan kode CSS kedalam file `style.css`.

```css
*{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
}
body{
    height: 100vh;
    background-color: #242424;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
p {
  color: rgb(26, 25, 25);
  font-family: 'Open Sans', sans-serif;
  padding-top: 10px;
}

h1 {
  text-align: center;
  padding-bottom: 20px;
}

a {
  color: #752BEA;
  font-family: 'Open Sans', sans-serif;
}

.container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 20px 25px;
    width: 300px;

    background-color: rgba(255, 255, 255, .9);
    box-shadow: 0 0 10px rgba(255,255,255,.3);
}
.container h1{
    text-align: left;
    color: #1d1d1d;
    margin-bottom: 30px;
    border-bottom: 5px solid#1d1d1d;
}
.container label{
    text-align: left;
    color: #1d1d1d;
}
.container form input{
    width: calc(100% - 20px);
    padding: 8px 10px;
    margin-bottom: 15px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #1d1d1d;
    color: #1d1d1d;
    font-size: 20px;
}
.container form button{
    width: 100%;
    height: 40px;
    padding: 5px 0;
    border: none;
    background-color:#752BEA;
    font-size: 18px;
    color: #fafafa;
    border-radius: 20px;
}
```

Setelah kita hias dengan kode diatas, anbi harap tampilan kedua form akan menjadi seperti ini.


!["Hasil Tampilan Login Dengan CSS"](/post/php-membangun-form-login-daftar-09.png "Hasil Tampilan Login Dengan CSS")

!["Hasil Tampilan Daftar Dengan CSS"](/post/php-membangun-form-login-daftar-10.png "Hasil Tampilan Daftar Dengan CSS")

<br>

## Halaman Index!

<hr>

Terakhir kita akan membuat halaman **index**. Nantinya, halaman ini akan menjadi target data form kita dikirim. Sehingga data yang kita masukkan pada form login atau daftar akan diproses disini.

Kode pada halaman index berisi seperti ini :

```php
<?php 
    if(isset($_POST["tujuan"])){

        $tujuan = $_POST["tujuan"];
        
        if($tujuan == "LOGIN"){
            $username = $_POST["username"];
            $password = $_POST["password"];
            
            /* logika sederhana admin */
            if($username == "admin" && $password == "admin"){
                echo "<h1>Selamat Datang, ".$username."!</h1>";
            }else{
                echo "<h2>Username atau Password Salah!</h2>";
            }
    
        }else{
            $username = $_POST["username"];
            $password = $_POST["password"];
            $email = $_POST["email"];
    
            echo "<h1>Anda sudah terdaftar sebagai ".$username."!</h1>";
            
        }
    }   
?>
```

<br>

**Penjelasan Garis Besar Kode**

- **Cek Request POST** 

```php
<?php
if(isset($_POST["tujuan"]))
?>
```

Kode diatas bertujuan untuk mengetahui *"apakah terdapat request POST yang masuk?"*. Maksud variabel `$_POST["tujuan"]` adalah data dari `<input name="tujuan">` yang dikirim melalui form ke `index.php`.


```php
<?php
$tujuan = $_POST["tujuan"];
?>
```

Jika terdapat request POST dari *hidden* input <span style="color:#ff9c36">"tujuan"</span> maka nilai akan disimpan divariabel `$tujuan`.


- **Bagian Login**

```php
<?php
if($tujuan == "LOGIN"){
    $username = $_POST["username"];
    $password = $_POST["password"];
}
?>
```

Nah, jika nilai variabel `$tujuan` bernilai <span style="color:#ff9c36">"LOGIN"</span> maka ia akan mengambil data form input <span style="color:#ff9c36">"username"</span> dan <span style="color:#ff9c36">"password"</span> yang dikirim. Kedua data tersebut akan disimpan di variabel `$username` dan `$password`.

```php
<?php
/* logika sederhana admin */
if($username == "admin" && $password == "admin"){
    echo "<h1>Selamat Datang, ".$username."!</h1>";
}else{
    echo "<h2>Username atau Password Salah!</h2>";
}
?>
```

Disini anbi membuat kondisi simulasi login pada umumnya. Jika nilai Username dan Password adalah <span style="color:#ff9c36">"admin"</span>, maka halaman `index.php` akan mengatakan *"Selamat Datang, Admin!"*. Jika tidak makan halaman `index.php` akan mengatakan *Username atau Password Salah!"*


* **Bagian Daftar**

```php
<?php
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];

echo "<h1>Anda sudah terdaftar sebagai ".$username."!</h1>";
?>
```

Selanjutnya adalah bagian daftar, disini kita mengambil nilai dari data form input <span style="color:#ff9c36">"username"</span>, <span style="color:#ff9c36">"password"</span>, <span style="color:#ff9c36">"email"</span> dan menampilkan nilai `$username`.

<br>

Ketika semua langkah - langkah diatas sudah kita implementasikan, maka web akan berjalan seperti ini.

!["Hasil Login dan Daftar!"](/post/php-membangun-form-login-daftar-11.gif "Hasil Login dan Daftar!")

<center> . . . </center>

Gimana paham gak dengan penjelasan diatas, mungkin agak ribet yak, jika kalian masih bingung bisa tanya dikolom komentar dibawah. Untuk **full codenya** kalian bisa akses di github [AnbiDev](https://github.com/AnbiDev/).

:octopus: [https://github.com/AnbiDev/php-login-daftar](https://github.com/AnbiDev/php-login-daftar)

Oke sekian dari Anbi, sampai ketemu di artikel selanjutnya

> Happy Coding