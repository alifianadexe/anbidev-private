+++
title = "Konfigurasi Lingkungan Pengembangan Laravel"
description = "Konfigurasi Lingkungan Pengembangan Laravel"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "php",
    "laravel",
]
date = "2019-09-03"
tutorials = [
    "laravel"
]
series = "Laravel 101"
shortcode = "Environment"
url = "/laravel-konfigurasi-env/"
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

### Pengantar
Semua file konfigurasi Laravel disimpan dalam folder `config`. Setiap opsi isian memiliki dokumentasi yang dituliskan menggunakan komentar, jadi silakan melihat-lihat komentar yang secara default sudah ada dan membiasakan diri dengan opsi yang tersedia untuk Anda. Hal ini akan sangat membantu.

### Masalah yang Kutemui
Sebagai pengembang aplikasi, aku diminta memberikan nilai konfigurasi yang berbeda berdasarkan lingkungan aplikasi yang sedang berjalan. Contohnya saat aplikasi masih dalam tahap pengembangan, aku memiliki database yang berisi dummy data, tidak memuat data penting dan hanya berupa sample data yang aku buat sendiri. Tapi, aplikasi yang sedang aku kembangkan tersebut juga sedang berjalan di server dengan database yang sudah bukan dummy data lagi seperti database lokalku. Pada server, database yang digunakan merupakan database asli yang memiliki data perusahaan. 

###  DotEnv PHP Library
**Environmet Variable** Laravel dimudahkan dengan adanya `DotEnv PHP Library` oleh [Vance Lucas](https://www.linkedin.com/in/vancelucas/). Pada Laravel, pemberian nilai konfigurasi berada pada file `.env`. Saat kamu menginstall Laravel, direktori `root` akan memiliki file `.env.example`. Jika kamu menginstall Laravel menggunakan *Composer*, maka akan ada satu file lagi bernama *.env*. Fungsi dari *.env.example* adalah untuk memberikan gambaran isi dari file *.env*. Jika belum ada *.env*, maka kamu harus menyalin file *.env.example* dan merubah namanya menjadi *.env*. Hal ini bisa saja terjadi, jika aplikasimu merupakan hasil *clone* dari sebuah repository. File *.env* pada laravel tercatat di file `.gitignore`, yang yang dimana file ini akan membuat perubahan atau keberadaan file *.env* akan diabaikan oleh `git`.

#### Kenapa .env tidak commit ke System Control[git] ?
Alasan pertama adalah, karena server dan rekan kerjamu mungkin memerlukan Environment Variable yang berbeda. Alasan lain adalah resiko keamanan jika orang yang tidak berkepentingan memiliki akses ke file `.env`. Karena credential apapun akan terekspos, pastinya kamu tidak mau rahasia dapurmu diketahui oleh orang yang tidak bertanggung jawab, kan?

### Apa saja yang kita atur di .env?
Pengaturan dasar yang diperlukan setelah install laravel ada di baris dengan awalan `DB`. 

```
DB_CONNECTION=anbidev
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_anbidev
DB_USERNAME=root
DB_PASSWORD=
```

* *DB_CONNECTION* adalah nama koneksi yang digunakan, tempat untuk mengatur koneksi ada di file `database.php`.
* *DB_HOST* adalah alamat database, secara default terletak pada 127.0.0.1 atau *localhost*. 
* *DB_PORT* adalah port tujuan yang berhubungan dengan database. Untuk MySQL sendiri menggunakan port 3306. 
* *DB_DATABASE* adalah nama dari database yang digunakan. 
* *DB_USERNAME* adalah username credential untuk mengakses database. Pada XAMPP, secara default username nya adalah *root*. 
* *DB_PASSWORD* adalah password credential untuk mengakses database. Pada XAMPP, secara default password dikosongkan.

Dengan mengatur disini, maka credentialmu akan diabaikan oleh system control. Sehingga orang yang menyalin source kode mu tidak akan melihatnya. *Ya walaupun sebenarnya bisa, dengan beberapa trik.*