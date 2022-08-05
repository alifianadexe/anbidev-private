+++
authors = ""
cover = ""
date = ""
description = "kali ini akan mengulas mengenai cara instalasi Dart SDK dan membuat program “Hello World”"
draft = true
series = ""
shortcode = ""
status = ""
sumber = []
tags = []
title = "Buat Hello World dengan Bahasa Dart"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Apa saja sih yang harus disiapkan untuk memulai pemograman Dart? Lalu text editor mana saja yang biasa digunakan untuk membuat program dengan Dart? Pada artikel kali ini akan mengulas mengenai cara instalasi Dart SDK dan membuat program `“Hello World”` sebagai permulaan awal, oke tidak lama-lama mari kita mulai, _Here We Go._

## Dart SDK

Hal pertama yang harus dilakukan saat ingin menjalankan Dart ke device atau perangkat lokal kita, maka perlu **`menginstal Dart SDK`** terlebih dahulu. Singkatnya SDK ini adalah `kit` atau `tools` yang digunakan untuk mengembangkan perangkat lunak, SDK ini sendiri berisi seperti _`debugger`, `library`_ dan _`command-line tools`_.

Dart memiliki 3 (tiga) versi rilis yakni _stable, beta_ dan _dev_.

![](/post/3versionrelease.png)

Mengutip dari dokumentasi Dart bahwa perbedaan ketiga versi tersebut berada pada jangka pembaruan (_`update`_), Anbi sendiri menyarankan untuk menggunakan versi yang _`stable` _karena memang siap untuk produksi dan meminimalisir adanya _`bug`_. Namun anda juga bisa menggunakan versi _`Beta` _dan _`Dev` _untuk mendapatkan fitur yang baru.

## Instalasi Dart SDK

Pada materi kali ini kita akan melakukan instalasi menggunakan _operating system `Windows`_, untuk _operating system_ lainnya bisa mengikuti arahan dari dokumentasi resmi. Bisa dibaca di link berikut: [https://dart.dev/get-dart](https://dart.dev/get-dart "https://dart.dev/get-dart")

### Instalasi Dart SDK

Pertama masuk ke link berikut : [https://gekorm.com/dart-windows/](https://gekorm.com/dart-windows/ "https://gekorm.com/dart-windows/")

![Dart for Windows](/post/picture2.png "Dart for Windows")

Maka akan menampilkan halaman tersebut, lalu pilih sesuai kebutuhan pada materi ini memilih yang versi _`Stable`_

Setelah itu jalankan file `.exe` untuk melanjutkan ke proses instalasi.

![file instalasi dart](/post/fileexe.png "file instalasi dart")

Setelah itu pilih _`I accept the agreement`_ untuk menyetujui perjanjian penggunaan produk dan selanjutnya next-next aja.

![Setup downloading resource](/post/downloading_dart.png "Setup downloading resource")

Setelah itu akan menjalankan proses unduh, setelah semuanya telah selesai. Maka langkah selanjutnya perlu untuk mengecek Dart SDK tersebut, caranya buka `terminal` / `command prompt` / `git bash`![dart --version](/post/dart_cmd.png "dart --version")

Nah, gunakan command `dart --version` untuk mengecek versinya. Pada saat artikel ini ditulis, versi dart yang Anbu gunakan adalah `2.17.6 (stable)`

Apabila perintah tersebut tidak berfungsi maka harus melakukan setting tambahan yakni menambahkan lokasi SDK ke dalam `PATH`

### Menambahkan Dart SDK kedalam PATH

_By Default_ lokasi SDK berada di C:\\tools\\dart-sdk.