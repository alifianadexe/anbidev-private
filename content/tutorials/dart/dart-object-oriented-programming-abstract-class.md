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
title = "Dart: Object Oriented Programming (Abstract Class)"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Pernah terfikirkan sebelumnya apakah semua class itu harus dijadikan objek atau tidak? Jawabannya adalah tidak. Kita bisa membuat class yang tidak bisa dijadikan objek. Mari kita kenalan dengan abstract class.

## Abstract Class
Secara sederhana gambaran dari class abstrak ialah class yang memang tidak secara rinci mendefinisikan objek tertentu, sehingga class abstrak biasa dijadikan sebagai gambarann umum. Oke mari kita ke contoh, pernah membayangkan gimana rasanya buah ? bagaimana bentuk buah itu ? apa warnah buah itu ? dan lain sebagainya. Nah, kita bisa membuat class buah yang berisi gambaran umum dari buah itu sendiri. Berikut contoh class buah.

```dart
abstract class Buah {
  String? warna;
  String? bentuk;
  void makan();
}
```
Poin penting abstract class di Dart sendiri antara lain :
1. Abstract class biasa ditandai dengan keyword `abstract` sebelum keyword `class`.
2. Dengan class menjadi abstract, maka kita bisa membuat method abstract dengan menghilangkan kurung kurawal atau body `{}` pada method tersebut.
3. Penggunaan abstract class mewarisi ke child class dengan keyword `extends`.
4. Hanya method yang wajib dioverride atau ditulis ulang ke child class.

<br/>
Berikut contoh penggunaan abstract class di Dart :

```dart
abstract class Buah {
  String? warna;
  String? bentuk;
  void makan();
}

class Apel extends Buah {
  @override
  void makan() {
    print('Apel dimakan dengan cara dipotong-potong');
  }
}

class Jeruk extends Buah {
  @override
  void makan() {
    print('Jeruk dimakan dengan cara dipotong-potong');
  }
}

```
Setelah kita membuat class buah, kita bisa membuat class apel dan jeruk yang mewarisi class buah. Dengan begitu kita bisa membuat objek apel dan jeruk yang memiliki method makan().

```dart
void main() {
  Apel apel = Apel();
  apel.makan();

  Jeruk jeruk = Jeruk();
  jeruk.makan();
}
```
Namun apabila kita mencoba untuk membuat object dari class abstract itu sendiri, maka akan terjadi error. Berikut contoh errornya :

```dart
void main() {
  Buah buah = Buah(); // Error
}
```
<br/>

Sekian materi pada kali ini, semoga bermanfaat. Terima kasih.

![Gif](assets/wow.gif)