+++
title = "Mempersiapkan Editor untuk Flutter"
description = "Mempersiapkan Editor untuk Flutter"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "dart",
    "flutter",
]
date = 2020-08-31T17:00:00Z
tutorials = [
    "flutter"
]
series = "flutter 101"
shortcode = "Setup"
url = "/flutter-setup-editor/"
sumber = [
    "https://flutter.dev/docs/get-started/editor?tab=androidstudio",
    "https://flutter.dev/docs/get-started/editor?tab=vscode"
]
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++


Pada dasarnya, kamu bisa menggunakan segala jenis Text Editor dan bisa dikombinasi dengan command-line. Tapi kami sarankan untuk menggunakan salah satu dari editor beserta *plugin* pilihan kami. 

Plugin tersebut akan membantumu dalam *auto-complete* code dan *highlighting* syntak sehingga lebih jelas dan tidak terkesan monoton, fitur ***run debug***, dan sebagainya.

<br>

## Android Studio Dan IntelliJ

<hr>

Dengan menggunakan Editor satu ini, maka lingkungan pengembanganmu akan sangat terbantu dengan beragam bantuan kompleks yang dimiliki Android Studio.


### Install Editor

* [Android Studio](https://developer.android.com/studio "Android Studio"), (*versi 3.0 atau lebih*)
* [IntelliJ IDEA Community](https://www.jetbrains.com/idea/download/ "IJ IDEA Com"), (*versi 2017.1 atau lebih*)
* [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/download/ "IJ IDEA Ult"), (*versi 2017.1 atau lebih*)


### Install plugin Flutter dan Dart

Untuk menginstall ini:

1. Jalankan Android Studio
2. Buka plugin preference (**Configure > Plugins**)
3. Cari plugin Flutter lalu **Install**
4. Klik **Yes** jika diminta menginstall plugin *Dart*
5. Biasanya akan diminta untuk merestart Editor

<br>

## Visual Studio Code

<hr>

VS Code adalah editor ringan namun memiliki plugin yang tidak kalah dengan Android Studio. 

* [VS Code](https://code.visualstudio.com/ "VS Code") (*Stable Version*)


### Install Plugin Flutter Dan Dart

1. Jalankan VS Code
2. Panggil Command Pallete dengan menggunakan kombinasi tombol **CTRL+SHIFT+P**. Atau pilih menu **View > Command Pallete**
3. Ketik "install", lalu pilih **Extensions: Install Extensions**.
4. Ketik "flutter" pada jendela pencarian ekstensi, lalu pilih  **Flutter**, lalu **Install**. Plugin untuk Dart akan secara otomatis terinstall.


### Flutter Doctor

1. Panggil Command Pallete dengan menggunakan kombinasi tombol **CTRL+SHIFT+P**. Atau pilih menu **View > Command Pallete**
2. Ketik "doctor", lalu pilih  **Flutter: Run Flutter Doctor**.
3. Perhatikan isu yang muncul pada panel **Output**, pastikan semua *error* dapat ditangani. 

Cara untuk menangani error sudah tersedia pada **Output** yang muncul

> Jika Komputer atau Laptop yang digunakan tidak sampai 4 GB RAM kami sarankan untuk **tidak** **menggunakan Android Studio**, melainkan **menggunakan VS Code** yang lebih ringan. 