+++
title = "Routing pada Laravel"
description = "Basic Routing pada Laravel"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "php",
    "laravel",
]
date = "2019-09-12"
tutorials = [
    "laravel"
]
series = "Laravel 101"
shortcode = "Routing"
url = "/laravel-routing/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

## Mengenal Routing

Pada framework yang menganut design pattern MVC, kita akan menemukan isitilah `route`. Dalam istilah manusia, route dapat diartikan sebagai rute, jalan dan arah. Dalam Web Progamming, route dapat diasumsikan sebagai alamat yang akan diakses oleh user. Alamat yang aku maksud bukan seperti [https://anbidev.tech](https://anbidev.tech) secara mendasar, tetapi seperti [https://anbidev.tech/about/](https://anbidev.tech/about/). Keberadaan `/about` disini merupakan route yang memiliki arah ke Halaman Tentang. Ya [https://anbidev.tech/](https://anbidev.tech/) merupakan sebuah route `/`, walaupun _slash_ dibelakang biasanya akan secara otomatis tidak ditampakkan oleh web browser.

### Konfigurasi Routing

Pada instalasi awal, route pada laravel tersimpan dalam folder route. Disini, ada beberapa file yang mengatur route, entah itu menggunakan API atau tidak. Untuk saat ini aku akan menggunakan file `web.php`.

```php
// file web.php

Route::get('/', function () {
    return view('welcome');
});
```

Disini bisa dilihat ada sebuah contoh penggunaan Route yang mengarah ke halaman utama atau root karena menggunakan `/`. Route ini berisi Closure(Fungsi tanpa Nama), yang mengarah ke `view` yang berisi parameter string welcome. Hal ini berarti, jika kamu mengakses web utamanya (/), maka akan diarahkan ke file view, `welcome.blade.php`. Apa maksudnya? Penjelasan tentang view akan aku bahas di artikel [ini](https://anbidev.com/tutorials/laravel/laravel-view/).

Didalam Closure, coba kamu ganti bagian return, hapus kode `view('welcome')`, dan ganti dengan string `anbidev`.

```php
//file  web.php

Route::get('/', function () {
    return 'anbidev';
});
```

Disini aku merubah perintah yang 'mengarahkan ke view', menjadi 'menampilkan string `anbidev`. Contohnya seperti pada gambar, kamu bisa menyesuaikan dengan keinginanmu, aku sudah memperbesar layar kerjaku sehingga mungkin akan ada perbedaan ukuran dengan milikmu.

![Tampilan Route Pada Laravel](/post/tampilan_route_pada_laravel-01.jpg)

Sekian dulu pembahasan tentang _Dasar Routing pada Laravel_. Semoga bermanfaat!
