+++
authors = "Handika"
cover = "/post/picture2.jpg"
date = 2022-08-05T17:00:00Z
description = "Menambahkan komentar pada kode program Dart"
series = "Dart Dasar"
shortcode = "komentar"
status = "publish"
sumber = []
tags = ["dart"]
title = "Komentar di Dart"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-komentar"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Sebagai seorang programmer saat membangun aplikasi baik yang kompleks maupun simpel ada hal penting, yaitu menambahkan `komentar` pada kode program. Apa sih itu komentar? `Komentar` sendiri merupakan kode atau perintah yang tidak akan dieksekusi oleh komputer, biasanya pemberian komentar digunakan untuk `catatan` atau `mendeskripsikan` lebih detail mengenai kode program yang sudah dibuat, terlebih jika kode program atau aplikasi yang dibuat secara kerja sama (tim) untuk memberikan pemahaman yang mudah kepada rekan yang lain maka menambahkan komentar pada kode yang sudah dibuat merupakan langkah yang penting.

* Ada 3 (tiga) jenis komentar yang digunakan pada pemograman Dart :

1. Single Line Commnets
   Biasa disebut dengan komentar satu baris yang diawali dengan tanda `//` (`Double Forward Slash`).

```dart
//ini adalah fungsi untuk mencetak Hello World

void main() {
    print('Hello World');
}
```

1. Multi Line Comments
   Biasa disebut dengan komentar beberapa baris yang diawali dengan tanda /* dan diakhiri dengan tanda */. Cocok digunakan lebih dari satu baris.

```dart
/*
ini adalah fungsi untuk mencetak Hello World
selain itu mencetak Hello User
dan mencetak Hello Person
*/

void main() {
    print('Hello World');
    print('Hello User');
    print('Hello Person');
}
```

1. Documentation Comments
   Biasa disebut dengan komentar dokumentasi yang diawali dengan tanda /** dan diakhiri dengan tanda */ atau menggunakan `///`. Kehebatan menggunakan komentar ini pesan komentar yang dapat ditampilkan saat dihover.
   contoh :

   ![](/post/ss1.png)

```dart
///this function to return hello and name from params

String sayHello(String name) {
  return 'Hello, $name';
}
```

Selain itu anda bisa melakukan direct fungsi yang sudah dibuat diatas dengan menambahkan tanda `[]` pada baris komentar.

![](/post/code.gif)