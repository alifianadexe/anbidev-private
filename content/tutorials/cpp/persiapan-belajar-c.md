+++
authors = "hamid"
cover = "/post/web-cepp.jpg"
date = 2021-02-03T17:00:00Z
description = "Kita akan mengenal cara kerja dan aplikasi yang diperlukan"
series = "Dasar C++"
shortcode = "Persiapan"
status = "publish"
sumber = ["https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/mingw-w64-install.exe/download", "https://www.sublimetext.com/3"]
tags = ["c++"]
title = "Persiapan Belajar C++"
tutorials = ["c++"]
type = ["tutorials", "tutorial"]
url = "/persiapan-cpp/"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada [artikel sebelumnya](https://www.anbidev.com/pengenalan-cpp/ "Pengenalan C++") kita sudah berkenalan dengan C++ beserta sejarahnya. Kita akan mulai belajar C++ dengan memahami cara kerja dan lingkungan pengembangannya.

<br>

### Cara Kerja C++

<hr>

C++ merupakan _compiled languaged_, maksudnya progam yang menggunakan Bahasa C++ akan _diterjemahkan_ terlebih dahulu kedalam bahasa mesin, lalu akan dijalankan oleh sistem secara langsung. Sehingga bahasa ini dapat menghasilkan program yang efisien pada sistem komputer. Untuk menerjemahkannya, diperlukan yang namanya compiler.

![Alur C++](/post/cpp_alur.png "designed by Pixel perfect from Flaticon")

Dapat dilihat pada gambar, progam yang kita tulis dalam Bahasa C++ akan dicompile terlebih dahulu sebelum menjadi file yang dapat dieksekusi oleh komputer. Jadi, kesimpulannya adalah kita perlu `text editor` untuk menulis progam dan `compiler` agar progamnya dapat berjalan. Ada juga yang disebut dengan `IDE` (Integrated Development Environment), dimana Text Editor digabung dengan compiler sehingga kita hanya perlu menginstall IDE ini saja. Namun untuk saat ini Anbi akan menggunakan Text Editor yang terpisah dengan compilernya, agar kita sama-sama bisa belajar cara kerja masing-masing tools.

<br>

### Text Editor

<hr>

Ada beberapa text editor yang bisa kamu gunakan seperti VS Code, Atom, Notepad++ dan Sublime. Anbi merekomendasikan untuk menggunakan Sublime Text. Alasannya adalah Text Editor ini sangat ringan dan memiliki Package Control yang akan memudahkan kita dalam menulis kode C++. Kamu bisa mendownload aplikasinya [disini](https://www.sublimetext.com/3 "Sublime"), sesuaikan dengan sistem operasi kalian masing-masing. Anbi asumsikan kalian sudah menginstall Sublime Text.

Sekarang kita akan menginstall Package Controlnya, tekan CTRL+SHIFT+P lalu ketik Package Control: Install Package.

![Package Control](/post/package-control.PNG "Package Control: Install Package")

Tunggu sejenak, sublime akan membaca repository Package Control yang tersedia. Disini kita akan menambahkan Package yang bernama C++11 dan C++ Completions.

![Package Control untuk C++](/post/package-control-cpp.PNG "Package Control untuk C++")

Sampai disini Text Editor kita sudah siap digunakan, selanjutnya kita akan menginstall Compiler.

<br>

### Compiler

<hr>

Seperti yang sudah kita bahas sebelumnya, compiler ini berfungsi sebagai penerjemah dari progam yang kita tulis dalam Bahasa C++ ke bahasa mesin agar dimengerti oleh komputer. Anbi akan menggunakan compiler milik GNU yakni g++. Sebelum itu kita akan install terlebih dahulu MinGw untuk menggunakan compiler tersebut.  Kamu bisa mendownload aplikasinya [disini](https://sourceforge.net/projects/mingw-w64/ "MinGw-w64"). Jalankan Setup nya lalu sesuaikan dengan spesifikasi PC/Laptop kalian.

![MinGw](/post/mingw.PNG "MinGw")

Disini Anbi menggunakan `versi 8.1.0` dengan Architecture `x86_64`dan Threads nya `posix`. Klik Next, lalu tempatkan pada direktori yang kalian inginkan atau biarkan default juga tidak apa-apa. Proses instalasinya akan memakan waktu agak lama, MinGw juga akan mendownload beberapa resource tambahan. Setelah proses instalasi selesai, kita perlu menambahkan `path` programnya (Folder `bin` didalam folder instalasi MinGw) ke system environment variable agar perintah dari MinGw dapat dikenali oleh Command Prompt.

Untuk menambahkan path, kita bisa ikuti langkah berikut ini:

1. Cari lalu buka System Environment Variable

   ![](/post/screenshot-178.png)
2. Pilih Environment Variable

   ![](/post/env.PNG)
3. Klik 2x pada `Path`

   ![](/post/env2.PNG)
4. Pilih New, lalu isi dengan direktori instalasi MinGw. Direktori instalasi Anbi ada di _C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin_

   ![](/post/env3.PNG)
5. Pilih Ok, lalu Ok lagi untuk mengkonfirmasi perubahan path
6. Kita perlu mengetes apakah path sudah terpasang dengan benar atau belum menggunakan perintah `g++ --version`.

```cmd
C:\Users\Anbi>g++ --version
g++ (x86_64-posix-seh-rev0, Built by MinGW-W64 project) 8.1.0
Copyright (C) 2018 Free Software Foundation, Inc.

This is free software; see the source for copying conditions.  There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

Jika `versi g++` terlihat, tandanya compiler sudah bisa kita gunakan. <br>

Sekian materi C++ atau CPP kali ini. Masih simple ya, semoga bermanfaat. Sampai jumpa di artikel selanjutnya.