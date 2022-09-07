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
title = "Dart: Object Oriented Programming (Property dan Method)"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
## Property

Property adalah `variabel` yang ada di dalam sebuah class. Property dapat diakses dengan menggunakan tanda titik (`.`) setelah nama class. Property dapat diakses secara langsung atau melalui `getter` dan `setter`. Property dapat diakses secara langsung jika property tersebut memiliki `modifier public`. Property dapat diakses melalui getter dan setter jika property tersebut memiliki `modifier private`. Berikut contoh penggunaan property:

```dart
class Person {
  String name = 'Messi';
  int age = 0;
}
```

Pada class `Person` di atas kita membuat property `name` dan `age`. Property name bertipe data `String` dan property age bertipe data `int`. Selanjtnya bagaimana cara kita akses property tersebut

```dart
void main() {
  Person person = Person();
  person.name = "John";
  person.age = 20;
  print(person.name);
  print(person.age);
}
```

## Method

Method adalah `fungsi` yang ada di dalam sebuah class. Sama seperti cara pembuatan fungsi pada materi [sebelumnya](https://www.anbidev.com/dart-function/), berikut cara membuat method di dalam class.

```dart
class Person {
String name = 'Messi';
int age = 0;

void eat() {
 print('$name is eating');
  }
}
```

Pada class person di atas kita membuat method `eat`. Method eat tidak memiliki parameter. Method eat akan mencetak nama dari property name yang ada di dalam class person. Selanjutnya bagaimana cara kita akses method tersebut

```dart
void main() {
  Person person = Person();
  person.name = "John";
  person.age = 20;
  person.eat();
}
```

## Bonus: Cascade Notation

`Cascade Notation` adalah cara untuk memanggil method atau property secara berurutan tanpa harus membuat variabel baru. Berikut contoh penggunaan cascade notation. Ini merupakan fitur yang ada di Dart

```dart
void main() {
  Person person = Person();
  person
    ..name = "John"
    ..age = 20
    ..eat();
}
```

Dengan begitu kita tidak perlu `redundant` menuliskan nama variabel cukup dengan `..nama_method()` atau  `..nama_property = nilai`.

![Gif](assets/amazing.gif)