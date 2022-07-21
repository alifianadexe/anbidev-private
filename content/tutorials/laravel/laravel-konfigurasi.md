+++
title = "Konfigurasi Dasar pada Laravel"
description = "Konfigurasi Laravel"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "php",
    "laravel",
]
date = "2019-08-29"
tutorials = [
    "laravel"
]
series = "Laravel 101"
shortcode = "Konfigurasi"
url = "/laravel-konfigurasi/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

## Konfigurasi Dasar
Setelah menginstall seperti artikel yang lalu, sekarang aku akan mengajari cara melakukan konfigurasi dasar pada Laravel. Ada beberapa konfigurasi yang perlu dilakukan seperti berikut ini:

## Public Directory
Dalam sebuah kondisi tertentu, kamu mengembangkan aplikasi Laravel pada sebuah `virtual server`. Kamu diminta agar user bisa mengakses aplikasimu pada lewat protokol http, `port 80` alih-alih harus masuk ke `port 8080`. Maka kamu harus mengatur *web server's document* atau *web root* ke directory `public`. Didalam direktori ini, terdapat file `index.php` yang menangani semua request awal pada aplikasi mu.

```
../public/index.php
```

## Configuration Files
Semua file konfiguarsi laravel terletak pada direktori `config`. Semua bagiannya memiliki dokumetasi pada komentar yang ada, jadi kamu bisa secara leluasa melihat contoh penerapan konfigurasinya. Dua file yang paling sering dikonfigurasi di awal adalah `database.php` dan `app.php`. Akan aku bahas pada artikel lainnya.

## Directory Permisions
Setelah menginstall Laravel, kamu perlu mengkonfigurasi *permisions*. Direktori didalam `storage` dan `bootstrap/cache` harus *writeable* pada web server mu. Jika menggunakan Linux, gunakan perintah `chmod`.

## Application Key
Langkah selanjutnya adalah mengatur `application key` dengan *random string*. Jika kamu menginstall Laravel menggunakan *Composer* atau *laravel Installer*, maka `application key` sudah secara otomatis dibuatkan. Tapi jika tidak *(Dalam beberapa kasus kamu menginstall larael menggunakan metode clone dari repository milik orang lain)*, maka kamu perlu menjalankan perintah berikut
```php
php artisan key:generate
```

Secara teknis, *string* harus berisi sepanjang 32 karakter. `Application Key` dapat diatur pada file `.env`. Jika kamu belum membuat file ini, maka hal yang perlu kamu lakukan adalah menduplikat file `.env.example` dan berikan nama `.env`. 

> *If the application key is not set, your user sessions and other encrypted data will not be secure!*