+++
title = "Install Laravel"
description = "Menginstall laravel"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "php",
    "laravel",
]
date = "2019-08-28"
tutorials = [
    "laravel",
]
series = "Laravel 101"
shortcode = "Installasi"
url = "/laravel-install/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

## Server Requirements
Framework Laravel memiliki beberapa *system requirement* yang direkomendasikan untuk kamu penuhi. Walaupun pada dasarnya jika kamu menggunakan XAMPP, *system requirement* pada Laravel sudah tercukupi. Berikut beberapa *system requirement* pada Laravel:

```
PHP >= 7.1.3
BCMath PHP Extension
Ctype PHP Extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP Extension
```

## Instalasi Composer
Laravel menggunakan Composer untuk mengatur *dependency* nya. Jadi sebelum menginstal Laravel, pastikan [Composer](https://getcomposer.org/) terinstall di komputermu. Ikuti link [ini](https://getcomposer.org/), jika kamu memerlukan panduan untuk menginstall Composer.

## Instalasi Laravel
Ada beberapa cara untuk menggunakan Laravel

### Via Laravel installer
Download laravel menggunakan Composer :
```php
composer global require laravel/installer
```
Cara ini akan membuat `syntax` laravel dapat digunakan pada `Terminal` atau `CMD` yang kamu gunakan. Setelah terinstal, perintah `laravel new anbidev` akan secara otomatis membuat folder `anbidev` dan sekaligus menginstal laravel beserta *dependency* pendukungnya yang terbaru sesuai versi *composer* yang kamu instal. 
```php
laravel new anbidev
```

### Via Create-Project
Alternatif lain yang bisa kamu coba adalah menggunakan Composer `create-project` pada `Terminal` atau `CMD` mu.
```php
composer create-project --prefer-dist laravel/laravel anbidev
```

Prosesnya sama saja, aku sendiri menggunakan yang pertama. Selain karena faktor penyesuaian dengan developer Laravel lain di tempat kerja, cara pertama memuat lebih sedikit perintah yang perlu ditulis.

## Local Development Server
Jika kamu telah menginstall PHP pada komputer yang kamu gunakan dan kamu ingin menjalankannya tanpa menggunakan aplikasi web server, maka kamu bisa mencoba perintah `serve` milik `artisan`. 

```php
php artisan serve
```

Secara default, perintah ini akan membuat aplikasimu berjalan di server `http://localhost:8000`. 

> Lalu bagaimana caranya agar tidak berjalan di port 8000?