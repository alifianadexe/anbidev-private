+++
authors = "hamid"
cover = "/post/coverweb-flutter black.png"
date = 2022-06-26T17:00:00Z
description = "Belajar membuat aplikasi pertama "
series = "flutter 101"
shortcode = "aplikasi pertama"
status = "publish"
sumber = ["https://docs.flutter.dev/get-started/codelab"]
tags = ["dart", "flutter"]
title = "Membuat Aplikasi Flutter Pertama"
tutorials = ["flutter"]
type = ["tutorials", "tutorial"]
url = "/flutter-aplikasi-pertama"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Artikel ini memuat panduan untuk membuat Aplikasi Flutter sederhana. Tidak diperlukan pemahaman mendalam mengenai pemrogaman Dart, Mobile, Dekstop dan Web. Jika merasa familiar dengan konsep dasar pemrogaman berbasis objek (OOP) seperti variable, perulangan, dan percabangan maka tidak akan kesulitan mengikuti panduan ini. Kita akan membuat aplikasi sederhana yang dapat menghasilkan kombinasi nama.

<br>

## Langkah 1: Membuat Project Baru

Anbi menggunakan VS Code untuk menulis program. Menggunakan command pallete `(Ctrl+Shift+P)` lalu mengtik flutter dan memilih `Flutter: New Project`.

![Command Pallete](/post/flutter_aplikasi_pertama_1.png "Command Pallete")

Jika tidak ada pilihan New Project, mohon untuk memastikan apakah plugin Flutter dan Dart sudah terinstal. Ada beberapa pilihan template, kita pilih Application.

![Flutter Template](/post/flutter_aplikasi_pertama_2.png "Flutter Template")

Kita akan diminta untuk menentukan direktori tempat aplikasi flutter disimpan. Lalu kita berikan nama aplikasi yang dibuat. Anbi beri nama `flutter_name_generator`. Tekan `Enter` untuk mengonfirmasi nama project dan tekan `Escape` untuk membatalkan.

![Project Name](/post/flutter_aplikasi_pertama_3.png "Project Name")

Aplikasi akan secara otomatis ditulis sesuai dengan template Flutter (Counter App atau Aplikasi Penghitung)

![main.dart](/post/flutter_aplikasi_pertama_4.png "main.dart")

<br>

## Langkah 2: Hello World

Kita sudah bisa mencoba menjalankan aplikasi tersebut (Tekan `F5` atau `Run` untuk menjalankan debug). Kita akan mulai dari dasar, agar kode yang ditulis dapat mudah dimengerti. Kita hapus isi dari main.dart secara keseluruhan dan kita tambahkan kode berikut:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Name Generator App',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Name Generator'),
        ),
        body: const Center(
          child: Text('Hello World!'),
        ),
      ),
    );
  }
}
```

Kode diatas bisa diketik manual sebagai latihan atau disalin secara langsung untuk menghemat waktu. Jika menemukan kendala kerapian pada saat menyalin kita bisa merapikannya secara otomatis dengan Klik Kanan lalu pilih `Format Document`. Pada VS Code yang Anbi gunakan, terdapat shortcut `Shift+Alt+F`. Jika kita mencoba melakukan debug maka tampilannya adalah sebagai berikut:

![](/post/flutter_aplikasi_pertama_transparent_bg.png)

Pada saat pertama kali melakukan debug, mungkin akan memakan waktu yang lama. Namun selanjutnya kita dapat menikmati fitur hot reload yang dapat mengupdate kode lebih cepat. Hanya perlu merubah kode dan menyimpannya maka Device akan update secara langsung.

<br>

## Langkah 3: Menggunakan External Package

Pada langkah ini, kita akan menggunakan open-source package yang bernama `english_words`, package ini berisi sekitar lima ribu kata dalam Bahasa Inggris yang sering digunakan. Untuk melihat open-source package lain bisa dicari [pub.dev](https://pub.dev/ "The official package repository for Dart and Flutter apps.")

#### flutter pub add

```sh
flutter pub add english_words
Resolving dependencies...
  async 2.8.2 (2.9.0 available)
  characters 1.2.0 (1.2.1 available)
+ english_words 4.0.0
  material_color_utilities 0.1.4 (0.1.5 available)
  meta 1.7.0 (1.8.0 available)
  path 1.8.1 (1.8.2 available)
  source_span 1.8.2 (1.9.0 available)
  string_scanner 1.1.0 (1.1.1 available)
Downloading english_words 4.0.0...
Changed 1 dependency!
```

File `pubspec.yaml` mengelola assets dan dependencies dari aplikasi Flutter. Package `english_words` yang sudah kita install tadi akan muncul di dalam file ini:

```yaml
dependencies:
  flutter:
    sdk: flutter

  cupertino_icons: ^1.0.2
  english_words: ^4.0.0
```

#### flutter pub get

Pada saat membuka file `pubspec.yaml` coba klik Pub get. Hal ini akan melakukan pulls package kedalam project yang dibuat. Akan muncul output seperti dibawah:

```sh
[flutter_name_generator] flutter pub get

Running "flutter pub get" in flutter_name_generator...           2,622ms

exit code 0
```

Menjalankan Pub get juga secara otomatis generate file `pubspec.lock` dengan isi daftar package beserta version number masing-masing package.

#### import package

Buka kembali file main.dart, lalu kita lakukan import package

```dart
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
```

Saat ini mungkin akan muncul garis bawah (underline) pada package yang baru ditulis. Hal ini menandakan package tersebut belum digunakan (sejauh ini). Kita ubah sedikit pada class MyApp dengan menambahkan fungsi `WordPair` yang berguna untuk generate kombinasi kata yang sudah digabung dan terdengar bagus.

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return MaterialApp(
      title: 'Name Generator App',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Name Generator'),
        ),
        body: Center(
          child: Text(wordPair.asPascalCase),
        ),
      ),
    );
  }
}
```

`Pascal Case` akan membuat setiap kata yang ditulis dengan tipe data string, diawali dengan huruf kapital. Contohnya pada kata "anbi dev" akan ditulis menjadi "AnbiDev".

#### save & run

Setiap melakukan Save lalu fitur hot reload berjalan, kita akan melihat kombinasi kata yang berbeda.

![](/post/flutter_aplikasi_pertama_transparent_bg_2.png)

Sekian terlebih dahulu artikel tentang membuat aplikasi pertama. Semoga bermanfaat, terimakasih.