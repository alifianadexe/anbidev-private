+++
title = "Installasi Python"
description = "Langkah - Langkah Menginstall Python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-08-28"
tutorials = [
    "python"
]
cover = "/post/python-installation.png"
series = "Python 101"
authors = "adexe"
shortcode = "Installasi"
url = "/python-installasi/"
sumber = [
    "https://belajarpython.com/tutorial/instalasi-python",
    "http://ubuntuhandbook.org/index.php/2017/07/install-python-3-6-1-in-ubuntu-16-04-lts/",
    "https://linuxize.com/post/how-to-install-python-3-7-on-ubuntu-18-04/",
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Sekarang berlanjut pada tahap installasi python. Sebelum kita menginstall python ada beberapa hal yang harus dipelajari tentang versi python sendiri. Ada 2 versi python, yang pertama **Python 2 (2.7.18)** dan yang kedua **Python 3 (3.9.0)**. Saya sendiri menggunakan Python 3 saat membuat program, dan untuk tutorial selanjutnya saya juga akan menggunakan versi **Python 3**. Apa perbedaan nya? bisa dilihat pada artikel [berikut](https://learntocodewith.me/programming/python/python-2-vs-python-3/).

Saya akan menjelaskan cara menginstall python pada beberapa _operation system_ yaitu Windows, Linux dan MacOs.

<br>

## Windows

<hr>

1. Kunjungi halaman _[download python](https://www.python.org/downloads/)_.
2. Lalu unduh versi python paling terbaru (saat ini **_3.9.0_**) atau klik [disini](https://www.python.org/ftp/python/3.9.0/python-3.9.0.exe) untuk langsung mengunduh _file installer_ nya.
3. Setelah selesai mengunduh, Buka _file installer_ dan ikuti langkah installasi sampai selesai.
4. Agar bisa di eksekusi di dalam CMD, jangan lupa untuk mencentang pada bagian **_"Add Python 3 to PATH"_**.
   !["Gunanya agar PATH sistem dapat mendeteksi dimana letak python"](/post/python-installation-01.png "Gunanya agar PATH sistem dapat mendeteksi dimana letak python")
5. Lalu buka CMD dan ketik `python -V` untuk mengecek apakah python sudah terinstall dengan benar.

Jika terdapat error seperti

> `'python'` is not recognized as an internal or external command

Padahal sudah menginstall python. Penyebabnya ada pada **PATH** python yang belum diatur. Untuk mengatasiya ada pada artikel berikut ini.

<br>

## Linux

<hr>

Untuk kebanyakan versi linux (terutama ubuntu), python sudah terinstall pada sistem operasi tersebut. Akan tetapi jika belum, berikut 2 cara menginstall python pada linux.

### A. Installasi Python Dengan Source File

1. Kunjungi halaman _[download release python](https://www.python.org/downloads/release/python-374/)_.
2. Scroll ke bawah pada bagian **_Files_** dan pilih [Gzipped source tarball](https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tgz) yang berekstensi **.tgz**. Unduh file tersebut.
3. Ketika sudah terunduh, ekstrak file tersebut.
4. Buka terminal dan arahkan ke folder yang sudah diekstrak.
5. ketik `./configure` dan enter.
6. lalu, ketik `make` dan enter.

### B. Installasi Python Dengan apt-get install

1. Buka terminal.
2. Lalu mulai dengan `update` dan install beberapa `common software`.

   ```
       $ sudo apt-get update
       $ sudo apt-get install software-properties-common
   ```

3. Tambah repository.

   ```
       $ sudo add-apt-repository ppa:deadsnakes/ppa
   ```

4. Ketika repository sudah ditambahkan, install _python 3.9_.

   ```
       $ sudo apt-get install python3.9

   ```

5. Tunggu sampai installasi selesai. <br> Untuk mengecek apakah python sudah terinstall pada linux, ketik pada terminal.

   ```
   $ python -V
   ```

<br>

## MacOS

<hr>

1. Buka halaman [download python](https://www.python.org/download/mac/) khusus **MacOS**.
2. Unduh versi terbaru untuk Macintosh (saat ini **3.9.0**).
3. Buka _file installer_ python.
4. Dan ikuti langkah installasi sampai selesai.
