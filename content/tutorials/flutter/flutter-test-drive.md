+++
authors = "hamid"
tutorials = ["flutter"]
cover = "/post/coverweb-flutter-black.png"
date = 2020-09-06T17:00:00Z
description = "Menggunakan dan mengenal Fitur Hot Reload milik Flutter"
series = "flutter 101"
shortcode = "hot reload"
status = "publish"
sumber = ["https://flutter.dev/docs/get-started/test-drive?tab=vscode"]
tags = ["dart", "flutter"]
title = "Menggunakan Fitur Hot Reload milik Flutter"
type = ["tutorial", "tutorials"]
url = "/flutter-hot-reload/"
aliases = [
    "/tutorials/flutter/hot-reload/"
]
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
Pada artikel ini akan dijelaskan cara membuat aplikasi Flutter menggunakan template sekaligus kita akan mencoba fitur ***"hot reload"*** setelah kamu membuat perubahan pada kodinganmu.

Pilih dulu IDE yang akan kamu gunakan untuk menjalankan Flutter, aku menggunakan Visual Studio Code.

<br>

## Persiapan

<hr>

Untuk persiapannya kita akan membuat project bernama _myapp_ yang memuat demo aplikasi yang simpel:

* Jalankan **View >** **Command Palette**.

!["Menu List View"](/post/hot-reload-1.png "Menu List of View")

* Ketik "flutter", lalu pilih **Flutter: New Project**.

!["Auto Run VS Code"](/post/hot-reload-2.png "Auto Run VS Code")

* Masukkan nama project, seperti _myapp_, lalu **Enter**.
* Buat atau pilih direktori utama untuk project baru ini.
* Silakan tunggu hingga `main.dart` muncul

!["main.dart view"](/post/hot-reload-6.png "main.dart view")

> **Tips:**
>
> * Kode utama terletak pada lib/main.dart, lihat _comment_ yang telah ada sebagai panduan.
> * Mungkin saja dalam prosesnya kamu akan diminta untuk mengupdate flutter atau dart (Extension).

<br>

## Jalankan Aplikasi

<hr>

* Lihat status bar VS Code (Bagian bawah window):

!["VS Code Status Bar"](/post/hot-reload-7.png "VS Code Status Bar")

* Pastikan ada device yang terhubung.
* Tekan **F5** atau ketik `flutter run` pada terminal untuk menjalankan aplikasi.
* Tunggu aplikasi berjalan (Semua proses terlihat pada **Debug Console**)


* Jika sudah selesai, maka akan terlihat demo aplikasi pada device mu.

!["First Demo Application"](/post/hot-reload-8-land.png "First Demo Application")

<br>

## Hot Reload

<hr>

Flutter menawarkan <ins>Stateful Hot Reload</ins>, sebuah kemampuan untuk mereload saat ada perubahan pada code.

* Buka `lib/main.dart`
* Ubah tulisan:

    *'You have pushed the button this many times'*

* Menjadi tulisan:

    *'You have clicked the button this many times'*

!["Example Code"](/post/hot-reload-9.png "Example Code")

Jangan hentikan aplikasi mu, biarkan tetap berjalan. Perubahan akan langsung terlihat 
 
!["Demo Application"](/post/hot-reload-10.png "Demo Application")