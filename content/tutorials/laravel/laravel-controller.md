+++
title = "Controller Laravel"
description = "Mengenal Controller laravel"
type = ["tutorials","tutorial"]
status = "draft"
tags = [
    "php",
    "laravel",
]
date = "2019-09-15"
tutorials = [
    "laravel",
]
series = "Laravel 101"
shortcode = "Controller"
url = "/laravel-controller/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

### Pendahuluan
Dibandingkan dengan mengatur `logic` pada closure (fungsi pada route), mungkin kamu akan lebih berharap untuk bisa mengaturnya pada `Controller`. Controller dapat mengelompokkan `logic` yang kita inginkan hanya dalam satu *class*. Logic sederhana yang sering digunakan contohnya adalah **CRUD**(Create, Read, Update, Delete). Controller secara default terletak `app/Http/Controllers`.

### Penggunaan

#### Membuat Controller
`php artisan make:controller UserController`
Menggunakan `php artisan`, kamu akan dihindarkan untuk menulis template Controller secara manual. Cukup satu perintah, dan Laravel akan membuatkan file Controller. File Controller terletak pada direktori default untuk Controller.

#### Mendefiniskan pada Route
`Route::get('user/{id}', 'UserController@show');`
Pada Route, parameter kedua adalah nama controller beserta method yang digunakan.