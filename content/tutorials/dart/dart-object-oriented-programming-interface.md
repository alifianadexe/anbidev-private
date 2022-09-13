+++
authors = "Handika"
cover = "/post/photo_2022-08-10_09-23-27.jpg"
date = 2022-09-11T17:00:00Z
description = "Membahas tentang kata Interface pada Dart"
series = "Dart Dasar"
shortcode = "Interface"
status = "publish"
sumber = []
tags = ["dart"]
title = "Dart: Object Oriented Programming (Interface)"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-interface"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Apakah kita akan user interface ? tentu saja bukan ya, kita akan membahas salah satu konsep dari OOP yaitu interface. Here we goo..

## Interface

Kita sebelumnya sudah belajar tentang abstract class, kurang lebih konsep nya sama dengan Interface.
Jika kamu sebelumnya belajar bahasa pemograman dengan konsep OOP pasti tidak asing dengan istilah interface akan tetapi ada perbedaan penggunaan interface di Dart dengan bahasa pemograman lainnya. Jika kamu dari bahasa Java atau kotlin penulisan interface di awali dengan kata kunci `interface` sedangkan di Dart tidak ada keyword interface. Lalu bagaimana cara kita membuat interface ? kita akan menggunakan kata kunci `abstract` dan kita akan menambahkan kata kunci `implements` untuk mengimplementasikan interface tersebut.
<br/>
Berikut template untuk membuat interface di Dart :

```dart
abstract class InterfaceClassName{
   ...
}

class ClassName implements InterfaceClassName {
   ...
}
```

<br/>
Lalu apa bedanya dengan abstract class :

1. Semua yang ada di interface wajib diturunkan ke subclass atau child class seperti kontrak yang harus dipenuhi. Property dan method wajib diimplementasikan. Sedangkan abstract class tidak wajib diimplementasikan, hanya method abstract saja.
2. Abstract class menggunakan kata kunci `extends` sedangkan interface menggunakan kata kunci `implements`.
3. Abstract class hanya bisa diextends satu kali sedangkan interface bisa diimplementasikan lebih dari satu.

Berikut code penggunaan abstract class :

```dart
abstract class IBuah {
  String? nama;
  String? warna;
  String rasa();
}

class Apel implements IBuah {
  @override
  String? nama;

  @override
  String? warna;

  @override
  String rasa() {
    throw UnimplementedError();
  }
}
```

Jika kamu ingin melakukan implementasi lebih dari satu interface, kamu bisa menggunakan tanda koma `,` seperti berikut :

```dart
abstract class IPetani {}

class Apel implements IBuah, IPetani {
//body
}
```

<br/>

Sekian materi pada kali ini, semoga bermanfaat. Terima kasih.

![](/post/wow.gif)