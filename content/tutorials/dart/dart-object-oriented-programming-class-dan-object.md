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
title = "Dart: Object Oriented Programming (Class dan Object)"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
## Konsep dasar pemrograman berorientasi objek

Pernahkah kamu mendengar `Pemograman Berbasis Objek` atau `Object Oriented Programming (OOP)` sebelumnya? Sebagai seorang programmer kamu harus paham berbagai paradigma pemograman seperti functional programming, object oriented programming, dan lainnya. Pada artikel ini kita akan membahas tentang paradigma pemrograman berbasis objek.
<br/>
Dart adalah bahasa yang `mendukung` pemograman berorientasi objek, bahkan jika kamu membuat program dengan Flutter akan terasa sekali bahwa penggunaan objek oriented pada Dart sangat ditekankan seperti pembuatan class, pembuatan objek, membuat class abstract, membuat class interface, membuat class mixin, dan lain sebagainya. <br/> Tujuan utama penggunaan pemograman berorientasi objek (OOP) adalah kita dapat membuat suatu blueprint yang nantinya bisa diinstance kebanyak objek sehingga kode program lebih `modular` dan `reusable` dengan begitu menghindari dari boilerplate code.

<br/>

## Class

class bertugas sebagai blueprint yang nantinya akan diinstance kebanyak objek. Class dapat diartikan sebagai sebuah kerangka yang berisi property dan method. Property adalah variabel yang ada di dalam class sedangkan method adalah fungsi yang ada di dalam class. Berikut contoh class sederhana pada dart.

```dart
class Person {
  //property
  //method
}
```

Cukup dengan keyword class dan diikuti oleh nama class diawali huruf kapital atau PascalCase.
<br/>
Misal seperti class PersonManager, class PersonController, dan lain sebagainya.
<br/>

## Object

Object adalah instance dari class. Object adalah hasil dari pembuatan class. Berikut contoh pembuatan object dari class Person.
<br/>
Berikut contoh pembuatan Object dari class Person.

```dart
var person = Person();
```

Kita juga bisa menuliskan tipe variabelnya secara langsung seperti berikut.

```dart
Person person = Person();
```

Sekian materi tentang class dan object pada dart. Semoga bermanfaat.

![Gif](assets/happy.gif)