+++
authors = "hamid"
cover = "/post/web-cepepe.jpg"
date = 2021-02-01T17:00:00Z
description = "C++ adalah bahasa pemrograman general-purpose yang dibuat oleh Bjarne Stroustrup"
series = "Dasar C++"
shortcode = "Pengenalan"
status = "publish"
sumber = ["https://isocpp.org/std/", "https://www.stroustrup.com/", "https://en.wikipedia.org/wiki/C%2B%2B"]
tags = ["c++"]
title = "Pengenalan C++"
tutorials = ["c++"]
type = ["tutorials", "tutorial"]
url = "/pengenalan-cpp/"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
Sering kali Anbi melihat pertanyaan seputar Bahasa C++ di beberapa forum pemrogaman yang Anbi ikuti. Sebagian besar dari pertanyaan tersebut adalah untuk kebutuhan mengerjakan tugas dari dosen entah itu sifatnya quiz atau ujian. 

Walau tidak banyak, tapi Anbi juga menemukan beberapa pembaca Anbi yang masih pelajar SMA dan SMK juga belajar tentang bahasa ini. 

Entah itu sebagai persiapan kuliah atau hanya sekedar mengikuti trend pertanyaan di grup pemrogaman umum. Anbi akan mencoba membuat artikel untuk bahasa ini mulai dari dasar, semoga bisa bermanfaat untuk pembaca Anbi yang lain.

<br>

## Sejarah

<hr>

Sebelum membahas lebih jauh, kurang lengkap jika Anbi tidak mengungkit sejarah C++ ini. Bahasa C++ dikembangkan `oleh Bjarne Stroustrup` di [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs) pada tahun 1979. Tujuan awal bahasa ini adalah sebagai tambahan bahasa C atau pada awalnya disebut juga `“C with Classes”`. 

Bahasa ini diperluas dari waktu ke waktu, dan “C with Classes” milik Bjarne ini dikembangkan lalu diberi nama C++ pada tahun 1982. Penggunaan `++` ini didasari oleh operator increment di Bahasa C.![Bjarne Stroustrup](/post/bjarne.png "Bjarne Stroustrup")

Pada tahun 1985, edisi pertama buku _The C++ Programming Language_ dirilis dan menjadi referensi untuk bahasa ini, yang pada waktu itu belum memiliki standarisasi. Pada tahun 1989 `C++ 2.0` dirilis. Lalu pada 1990, _The Annotated C++ Reference Manual_ dirilis. 

Diikuti edisi kedua buku _The C++ Programming Language_ pada tahun 1991. Pada tahun 1998, dirilis `C++98` sekaligus menstandarisasi bahasa ini. Lalu dilakukan minor update pada tahun 2003, dirilis `C++03`.

Setelah itu, C++ dikembangkan agak lamban hingga tahun 2011 dirilis standarisasi `C++11`. Lalu dilakukan minor update pada Desember 2014 dengan di rilisnya `C++14`. Tiga tahun setelahnya, kembali distandarisasi dengan `C++17` pada tahun 2017. 

Lalu distandarisasi kembali pada tahun 2020, sekaligus menjadikannya versi stabil hingga saat ini, `C++20`. Jika kita perhatikan, setiap versi dari bahasa ini akan ditambahkan tahun standarisasinya. 

Jadi, walau bahasa ini sudah ada sejak lama, C++ bukan bahasa yang ketinggalan zaman ya, karena memiliki release cycle yang konsisten setiap tiga tahun.

<br>

## Standarisasi

<hr>

Proses standarisasi ini dilakukan oleh ISO _(International Organization for Standardization)_ lebih spesifik untuk C++ sendiri dilakukan oleh [JTC1/SC22/WG21](https://en.wikipedia.org/wiki/ISO/IEC_JTC_1/SC_22)[ ](https://isocpp.org/std/the-committee)(Working Group 21). Sejauh ini telah dibuat enam revisi dari standarisasi C++ dan saat ini bekerja untuk revisi selanjutnya, `C++23`.

| Year | C++ Standard | Informal name |
| --- | --- | --- |
| 1998 | ISO/IEC 14882:1998\[29\] | C++98 |
| 2003 | ISO/IEC 14882:2003\[30\] | C++03 |
| 2011 | ISO/IEC 14882:2011\[31\] | C++11, C++0x |
| 2014 | ISO/IEC 14882:2014\[32\] | C++14, C++1y |
| 2017 | ISO/IEC 14882:2017\[33\] | C++17, C++1z |
| 2020 | ISO/IEC 14882:2020\[12\] | C++20, C++2a |

Standarisasi ini dilakukan untuk penambahan fitur, _bug-fixing_ dan menyamakan compiler C++ pada suatu platform. Banyak vendor yang menyediakan Compiler untuk C++ seperti [Free Software Foundation](https://en.wikipedia.org/wiki/Free_Software_Foundation "Free Software Foundation"), [LLVM](https://en.wikipedia.org/wiki/LLVM "LLVM"), [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft"), [Intel](https://en.wikipedia.org/wiki/Intel "Intel"), [Oracle](https://en.wikipedia.org/wiki/Oracle_Developer_Studio "Oracle Developer Studio"), dan [IBM](https://en.wikipedia.org/wiki/IBM "IBM") sehingga bahasa ini bisa digunakan di banyak platform dengan standarisasi yang sudah ditentukan.

<br>

## Kegunaan

<hr>

C++ dapat berjalan di semua _Operating System_ seperti Windows, Linux dan MacOS. Beberapa kegunaan bahasa ini adalah:

#### Games

Bahasa ini mampu memanipulasi resource sehingga CPU dapat berkerja secara intensif.

#### Desktop Application.

Aplikasi berbasis GUI memang sering menggunakan C++, contohnya Adobe.

#### Software Database.

MySQL dan Postgres ditulis menggunakan C++.

#### Operating System.

Beberapa bagian Apple OS X ditulis menggunakan C++, dan untuk Windows sudah tidak asing dengan yang namanya Visual C++

#### Browser

Mozilla dikembangkan secara penuh menggunakan C++.

#### Advanced Computation and Graphics

C++ sangat berguna untuk aplikasi grafis skala besar yang memerlukan peforma tinggi, contohnya Maya

#### Banking Aplication

Salah satu Digital Bank Solution di India (Infosys Finacle) menggunakan C++ untuk backend-progamming

#### Cloud/Distribution System

Cloud Storage yang banyak digunakan saat ini bekerja sangat dekat dengan hardware, merupakan keunggulan dari C++. Development Environment pada Bloomberg ditulis dengan C++.

#### Embedded System

Smartwatch dan Sistem Medis yang sangat dekat dengan hardware juga bisa dikembangkan dengan bahasa ini

#### Mobile

Aplikasi mobile untuk Android dan iOS juga bisa ditulis dengan bahasa ini.

<br>

## Hello World

<hr>

Karena berupa tambahan dari bahasa pendahulunya, C++ mewarisi syntax dari Bahasa C. Untuk membuat “Hello World” dengan bahasa ini adalah sebagai berikut:

```CPP
#include <iostream>

int main() {    
    std::cout << "Hello, world!\n";
}
```

<br>

Sekian materi C++ atau CPP kali ini. Cukup simple bukan? Masih simple sih ya. Semoga bermanfaat, sampai jumpa di artikel selanjutnya.