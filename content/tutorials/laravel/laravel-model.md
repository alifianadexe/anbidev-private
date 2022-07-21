+++
title = "Model pada Laravel"
description = "Mengenal Model pada Laravel"
type = ["tutorials","tutorial"]
status = "draft"
tags = [
    "php",
    "laravel",
]
date = "2019-10-17"
tutorials = [
    "laravel"
]
series = "Laravel 101"
shortcode = "Model"
url = "/laravel-model/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

Model mewakili struktur data yang akan digunakan oleh aplikasi. Disini hubungan dengan database didefinisikan. Direktori awal dari model ada pada folder `app`. Pada installasi awal, telah dibuatkan model untuk mengatur `User`, isinya seperti berikut (Aku hapus isinya, agar tidak terlalu banyak yang pelru aku tulis, pada kode aslinya tidak aku hapus)

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    
}
```

Kenapa tidak dikelompokkan pada satu direktori seperti Controller? Alasannya adalah `user`, beberapa user merasa tidak nyaman atas penempatan direktori dari model. Akhirnya, penempatan model diserahkan kepada masing-masing user laravel. 

#### Membuat Model
```php
php artisan make:model UserPhoto
```

Menggunakan php artisan, akan dibuatkan file UserPhoto pada direktori `app`. Jika kamu tidak ingin menaruh model pada dorektori `app`, maka kamu bisa melakukan ini untuk menaruh file pada direktori Model.

```php
php artisan make:model Model/UserPhoto
```

