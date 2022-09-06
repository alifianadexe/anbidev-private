+++
authors = "Handika"
cover = "/post/photo_2022-08-10_09-23-27.jpg"
date = 2022-09-05T17:00:00Z
description = "Menghentikan program sebelum kondisi error"
series = "Dart Dasar"
shortcode = "Exception"
status = "publish"
sumber = []
tags = ["dart"]
title = "Dart: Exception di Dart"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-exception"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Pernahkah kamu membayangkan bahwa membuat aplikasi atau program yang sudah berjalan terjadi `crash` atau `error`? Pastinya kamu tidak ingin kan hal demikian terjadi, nah kondisi seperti itu yakni kondisi error pada aplikasi yang berjalan (`runtime`) dikenal dengan sebutan `exception`. Ketika program yang kamu tulis menjalankan exception, maka aplikasi akan dihentikan dan program selanjutnya tidak akan dijalankan.

<br/>

Yuk langsung ke code biar lebih mudah

```dart
  var a = 100;
  var b = 0;
  var c = a ~/ b;
  print(c);
```

Buat program seperti code di atas, lalu coba jalankan apa yang terjadi?

![](/post/ss_exception1.png)

<br/>

Oke tambah sedikit, tanda `~/` itu artinya dibagi dengan return integer. Bisa dilihat bahwa terjadi error, saat compile time kode di atas masih aman namun saat `run time` kode tersebut menjadi error sehingga aplikasi atau program menjadi crash, tentu hal demikian perlu di perbaiki.

<br/>

Untuk menangani Exception tersebut maka gunakan `try` dan `catch`

```dart
try {
  var a = 100;
  var b = 0;
  var c = a ~/ b;
  print(c);
} catch (e) {
  print(e);
}
```

Bisa dipahami kode di atas? Oke jadi di blok `try` itu akan mengeksekusi kode di dalamnya, jika terjadi error maka akan mengeksekusi kode di blok `catch`. Dengan begitu jika kode error tidak akan mengakibatkan crash melainkan akan menuju blok catch.

<br/>

Selanjutnya jika kamu sudah paham kode program kamu akan mengalami error apa, kamu bisa menaruhnya di blok catch.

```dart
try {
  var a = 100;
  var b = 0;
  var c = a ~/ b;
  print(c);
} on IntegerDivisionByZeroException {
  //tangani error
}
```

<br/>
Selanjutnya jika kamu belum tahu spesifik akan ada error apa pada kode programmu, maka kamu bisa melakukan penanganan secara umum.

```dart
  try {
    var a = 100;
    var b = 0;
    var c = a ~/ b;
    print(c);
  } on Exception catch (e) {
    print('Error: $e');
  }
```

<br/>
Maka outputnya akan menghasilkan seperti ini :

![](/post/ss_exception2.png)

Selain dari bawaan, kamu bisa lho buat `exception` sendiri.

```dart
class MyException implements Exception {
  String message;
  MyException(this.message);
}
//pemanggilan
try {
  var a = 100;
  var b = 0;
  var c = a ~/ b;
  print(c);
} on MyException catch (e, s) {
  print('Error: $e');
  print('Location : $s')
}
```

Perhatikan pada parameter kedua, `s` adalah `StackTrace`. Ketika kamu ingin tahu dimana lokasi kesalahan kode, maka gunakan parameter `stacktrace`.

<br/>

Terakhir mengenai `finally`, finally akan mengeksekusi kode tidak peduli kode itu error atau tidak.

```dart
try {
  var a = 100;
  var b = 0;
  var c = a ~/ b;
  print(c);
} on MyException catch (e, s) {
  print('Error: $e');
  print('Location : $s')
} finally {
  print('Finally'); //akan selalu dijalankan
}
```

Kode program dari finally akan dijalankan, tidak mengiraukan kode apakah error atau tidak. dan dieksekusi di akhir sesuai urutan blok.

<br/>

> ❗ Note : Wajib buat kamu untuk membuat Error Handling pada kode programmu terlebih jika kamu ada keraguan pada kode program yang kamu anggap akan terjadi crash.

![](/post/timmy.gif)

Selesai sudah materi kita tentang Exception, terus pantengin blog Anbidev agar kalian bisa belajar lebih banyak dan jago dalam mengoding.