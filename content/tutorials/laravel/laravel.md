+++
title = "Mengenal Framework Laravel"
description = "Pengantar untuk Belajar Framework Laravel"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "php",
    "laravel",
]
date = "2019-08-27"
tutorials = [
    "laravel"
]
series = "Laravel 101"
shortcode = "Pendahuluan"
url = "/laravel-intro/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

## Pengantar

Laravel pada tahun 2011, dikembangkan dengan tujuan untuk mengungguli salah satu Framework PHP lainnya yang cukup terkenal, Codeigniter. Aku tidak menggunakan Codeigniter, tapi bukan berarti aku tidak pernah mencobanya. Tapi menurutku, Laravel memiliki beberapa keunggulan yang tidak dimiliki Codeigniter.

## Kenapa Laravel?
Laravel memiliki pustaka dokumentasi yang lengkap. Dokumentasi resmi Laravel dapat dicari di [disini](https://laravel.com/docs/). Taylor Otwell percaya, dengan dokumentasi yang lengkap, maka frameworknya dapat dinikmati oleh developer dan programmer lain diluar sana. Laravel menitikberatkan pada proses pengembangan yang mudah dan nyaman untuk programmer yang bekerja sendirian ataupun bekerja dalam kelompok besar. Walau proses instalasinya sendiri agak membutuhkan waktu ekstra bagi pemula.

## Fitur Laravel
Fitur paling keren menurutku adalah migration. Migration memungkinkan para developer dan programmer dapat bertukar struktur database tanpa menyalin atau mengekspor struktur database nya. Table, field dan column semua dibuat pada migration, temanmu hanya perlu menjalankan perintah php artisan make:migration untuk menjalankan script yang akan membuat struktur database.

Laravel menggunakan metode MVC (Model-View-Controller). MVC adalah sebuah metode untuk membuat sebuah aplikasi dengan memisahkan data dari tampilan dan cara bagaimana memprosesnya. Dalam pengembangannya, kita hanya perlu menggunakan php artisan untuk membuat file Model atau Controller.

Composer sebagai packet manager. Dengan composer, menggunakan library PHP lainnya menjadi lebih mudah. Hanya perlu menggunakan perintah `composer require libraryname` maka library yang dibutuhkan akan dengan mudah dipasang di folder vendor dan tercatat di file `composer.json`. Jika menggunakan git, folder ini akan masuk ke `.gitignore`. Saat temanmu melakukan `clone`, cukup gunakan `composer install` maka library yang tercatat di `composer.json` akan otomatis diunduh oleh Composer.

Eloquent untuk menyederhanakan query database. Aku tidak terlalu paham MySQL, kebetulan ditempatku bekerja, atasanku yang bertanggung jawab untuk menyusun databasenya. Tapi dengan Eloquent, query dari MySQL dapat diambil dengan mudah. Hanya perlu memanggil Model, lalu titik dua, dua kali, lalu eloquentnya. `DBModel::all()`, memiliki persamaan `SELECT * FROM db_model`. Pada contoh, mungkin tidak terlalu jelas sederhananya dimana. Aku tidak akan membahas banyak disini, dan akan aku tulis pada artikel lainnya.

RESTful Resource Controller sebagai menyederhanaan HTTP request methods. Dengan menggunakan fungsi resource pada controller. Kita tidak perlu menjelaskan pada Route, HTTP request methods yang kita harapkan itu apa. Sudah dapat dipastikan, jika get akan memanggil method index, post akan memanggil method store, delete akan memanggil method destroy.

Sekian dulu yang bisa aku sampaikan. Sebenarnya masih banyak fitur dari laravel. Akan aku bahas pada artikel lainnya. Semoga bermanfaat.
