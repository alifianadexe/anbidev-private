+++
authors = "Handika"
cover = "/post/picture2.jpg"
date = 2022-08-07T17:00:00Z
description = "Belajar mengenai pembuatan variabel dan mengenal tipe data"
series = "Dart Dasar"
shortcode = "variabel & tipe data"
status = "publish"
sumber = []
tags = []
title = "Dart: Variabel Dan Tipe Data"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-variabel-tipe-data"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Materi kali ini kita akan belajar mengenai pembuatan variabel dan mengenal tipe data apa saja yang ada di dart dan sering digunakan.

## Apa itu Variabel?

Secara garis besar `Dart` adalah bahasa pemograman yang menggunakan `paradigma berorientasi objek`, dan statis (`statically typed)` dimana dalam mendeklarasikan suatu variabel pada Dart harus disertai tipe datanya, namun Dart juga mendukung `type inference` yang artinya kita tidak perlu mendefinisikan tipe datanya secara eksplisit karena compiler Dart akan secara otomatis mendeteksi tipe datanya. Pengertian dari variabel sendiri adalah `wadah` untuk menyimpan suatu nilai (`value`) yang nantinya bisa dipanggil.

```dart
    TypeData nameVariabel = value;
```

Berikut contoh dari pembuatan variabel di Dart:

```dart
var name = 'Anbidev';
String language = 'Dart';
```

Kita bisa menggunakan kata kunci `var` apabila tidak ingin mendefinisikan secara eksplisit apa tipe datanya dan secara otomatis compiler akan menentukan tipe datanya.

## Variabel Statis

Variabel statis adalah variabel yang `tidak bisa diubah nilainya`, jika kita sudah menentukan nilainya maka kita tidak bisa mengubahnya lagi. ada dua kata kunci yang bisa digunakan untuk menentukan variabel statis, yaitu `const` dan `final`

```dart
const pi = 3.14;
final data = 'Anbidev';
```

Lalu muncul pertanyaan, apa bedanya const dan final di dalam Dart? **Kalau const itu harus diisi di awal, tidak boleh dikosongkan. sedangkan final bisa diisi nanti, tapi cuma satu kali saja.**

![const variable](/post/pi.png "const variable") 

Bisa dilihat bahwa pada contoh code tersebut variabel `const pi` harus diisi di awal.

> 💡 Saran dari Anbi, gunakan const apabila ingin membuat variabel yang static dan sudah tau valuenya supaya `lebih efisien dalam memori` karena kompilasi terjadi di `compile time`

## Tipe Data yang ada di Dart

Tipe data yang ada di Dart adalah:

1. String
2. Numbers (double dan int)
3. Booleans
4. dynamic

```dart
// String
var name = 'Anbidev';
String name = 'Anbidev';

// Numbers
var age = 21;
int age = 21;
double weight = 77.5;

// Boolean
var isTrue = true;
bool isTrue = false;

// dynamic
dynamic data = 'Anbidev';
```

❗Tambahan : Poin penting yang harus diperhatikan adalah perbedaan penggunaan `var` dan `dynamic`, jika menggunakan var maka kompiler akan mendeteksi secara otomatis tipe datanya, jika menggunakan dynamic maka kompiler akan mendeteksi tipe tetap dynamic, dengan begitu variabel dengan tipe dynamic bisa diisi ulang dengan tipe data lain. Contoh:

```dart
dynamic data = 'Hello World';
data = 21; //SUCCESS

var data = 'Hello World';
data = 21; //ERROR
```

Sekian materi tentang variabel dan tipe data pada Dart. Terimakasih, semoga bermanfaat.