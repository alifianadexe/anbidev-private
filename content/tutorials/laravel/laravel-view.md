+++
title = "View pada Laravel"
description = "Mengenal View pada Laravel"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "php",
    "laravel",
]
date = "2019-09-23"
tutorials = [
    "laravel"
]
series = "Laravel 101"
shortcode = "View"
url = "/laravel-view/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

### Pengantar

Seperti yang pernah aku beritahu, disini Laravel menggunakan design pattern mvc, dimana nantinya kode yang sudah digunakan bisa saja digunakan kembali sesuai dengan ketentuan yang ada pada MVC. Lalu apa itu MVC ?

> Model-View-Controller atau MVC adalah sebuah metode untuk membuat sebuah aplikasi dengan memisahkan data (Model) dari tampilan (View) dan cara bagaimana memprosesnya (Controller).
>
> [Wikipedia](https://id.wikipedia.org/wiki/MVC)

Pada artikel ini, aku akan membahas **view** yang merupakan komponen pembentuk MVC. **View** bertanggung jawab kepada tampilan, disini kreatifitas benar-benar diperlukan jika aplikasi yang kamu buat menuntut _User Interface_ yang menarik. Tapi, aku baru akan membahas penggunaan view ini pada Laravel. Perlu artikel lain untuk mempelajari UI.

```php
// file web.php

Route::get('/', function () {
    return view('welcome');
});
```

Saat kamu membuat proyek Laravel, akan ada kode berikut pada file `route.php` beserta file `welcome.blade.php` pada direktori `resource\view`. Kode tersebut memiliki arti, jika kita mengakses route utama(dengan tanda `/`), kita akan diberikan tampilan dari direktori `resource\view` yang memiliki nama file `welcome.blade.php`.

```php
welcome.blade.php
```

Bisa kamu lihat, pada route laravel hanya memanggil view dengan nama `welcome`, extensi dari file tidak disebutkan. Laravel akan secara otomatis paham jika yang dimaksud adalah file dengan extensi `.php` atau `.blade.php`. Laravel menggunakan metode templating blade, akan aku bahas di artikel [ini](#). Jika kamu perhatikan, file view memiliki struktur yang sama seperti html biasa. Dengan tambahan kode blade dibeberapa bagian.

```php
// welcome.blade.php pada direktori resource/views

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://vapor.laravel.com">Vapor</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>
    </body>
</html>
```

Untuk sekarang, aku minta kamu buka direktori `resource/views`. Buat view baru pada direktori tersebut. Terserah ingin kamu namai apa, aku memberi nama `anbidev.blade.php`. Pada file ini aku menuliskan script html sederhana, aku serahkan padamu apa isinya. Atau kamu bisa mengikuti script berikut:

```html
<!-- anbidev.blade.php -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Anbidev</title>
  </head>
  <body>
    <div>anbidev</div>
  </body>
</html>
```

Lalu pada file web.php sebelumnya, tambahkan route baru. Disini aku menamai route sesuai dengan nama file view yang aku buat tadi. Sekali lagi, aku serahkan padamu untuk penamaan.

```php
// web.php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/anbidev', function () {
    return view('anbidev');
});

```

Sekarang akses ke halaman `/anbidev`, akan berjalan dengan menunjukkan isi dari file `anbidev.blade.php`.

![Tampilan Route Pada Laravel](/post/tampilan_route_pada_laravel-01.jpg)

Disini kamu sudah bisa menggunakan view dengan memanggilnya melalui route. Untuk artikel selanjutnya, akan aku bahas tentang controller. Sekian, semoga bermanfaat.
