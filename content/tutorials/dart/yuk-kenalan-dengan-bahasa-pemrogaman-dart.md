+++
authors = ""
cover = ""
date = ""
description = ""
draft = true
series = ""
shortcode = ""
status = ""
sumber = []
tags = []
title = "Yuk Kenalan dengan Bahasa Pemrogaman Dart!"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
## Pengenalan Dart

Apa yang terlintas dipikiran anda setelah mendengar bahasa pemograman `Dart`? Apakah tentang `Flutter`? ya benar, dart sendiri adalah bahasa pemograman untuk membangun framework Flutter. Yuk, cari tahu lebih dalam mengenai bahasa Dart sendiri sebelum masuk ke Flutter.

Dart adalah bahasa pemograman yang _`open source`_ dan _`general purpose`_. Maksud dari _open source_ di sini adalah anda bisa ikut berkontribusi pada repository dart: [https://github.com/dart-lang](https://github.com/dart-lang "https://github.com/dart-lang")

![](/post/picture1.png)

Dan _General purpose_ di sini dart bisa digunakan di banyak platform mulai dari Frontend (web dan mobile) bahkan aplikasi Backend juga bisa dibangun menggunakan Dart, namun lebih populer penggunaan di Frontend.

Dart sendiri dibuat oleh `Lars Bak` dan `Kasper Lund` dari `Google`, versi Dart 1.0 mulai dirilis pada `14 November 2013`. Awalnya pembuatan Dart digunakan untuk menggantikan Javascript yang memiliki banyak kelemahan. Namun mengingat ekosistem Javascript yang sudah merajalela membuat Dart kalah bersaing, hingga akhirnya Google merilis `Flutter SDK` pada tahun `2017` yang disokong oleh Dart dari situ titik balik Dart mulai populer.

## Kenapa Belajar Dart

Pertama, Dart itu _`single codebase`_ anda cukup menuliskan 1 kodingan maka bisa di compile ke berbagai macam platform.

Kedua, Dart cocok digunakan sebagai _`first language` _hal demikian karena sintaks nya yang sederhana, bahasanya yang mudah dipelajari dan memiliki dokumentasi yang cukup lengkap sehingga memudahkan untuk dipelajari.

Ketiga, alasan lain mengapa belajar Dart karena ingin mendalami Flutter, ya betul popularitas Flutter sebagai framework multiplatform sedang _`high demand`_ sehingga sangat _`worth it to learn Dart`._

![](/post/picture3.png)

Sedikit menyinggung tentang Flutter, bisa dilihat bahwa perkembangannya dari 2017-2021 sangat cepat dengan begitu belajar Dart sebelum Flutter adalah wajib hukumnya.

## Dart Platform

Bahasa Dart sendiri menggunakan Teknologi _`compiler` _yang fleksibel sehingga memungkinkan kode dari Dart di kompilasi sesuai target platform yang dituju.

![](/post/picture4.png)

Ada dua target platform yang dituju yakni Dart Native dan Dart Web, mari kita bahas satu-satu.

### Dart Native

Pada proses ini kode Dart akan dikompilasi dengan target mobile app dan desktop. Selanjutnya pada kompilasi ini ada dua pendekatan yang dilakukan yakni dengan _`just in time compiler`_ **`(JIT)` **yakni kompilasi kode Dart menjadi _bytecode_ saat proses _development_ dan **`Dart AOT Compiler`**, sama saja proses nya dengan **JIT** namun perbedaannya pada proses kompilasi ini terjadi di tahap _production_ dan saat proses rendering membuat ukuran aplikasi menjadi lebih kecil karena kompilasi yang terjadi sebelumnya.

### Dart Web

Pendekatan pada kompilasi ini menggunakan **_`Dart dev compiler`_** `(`**_`dartdevc)` _**yakni melakukan kompilasi kode Dart menjadi Javascript.

## Penutup

Sekian artikel untuk mengawali pemrogaman flutter dengan dart kali ini. Semoga bermanfaat untuk para pembaca, terimakasih.