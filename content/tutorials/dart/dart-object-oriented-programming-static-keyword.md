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
title = "Dart: Object Oriented Programming (Static Keyword)"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
## Static
Pada konsep object oriented pasti kalian tidak asing dengan penulisan kata static. Static adalah sebuah keyword yang digunakan untuk membuat variabel atau method menjadi global. Jadi variabel atau method yang kita buat dengan keyword static dapat diakses tanpa harus membuat object dari class tersebut.

## Deklarasi static pada property
```dart
class Person {
  static String name = 'John';
}
```
Dengan begitu kita bisa memanggil variabel name tanpa harus membuat object dari class Person.

```dart
void main() {
  print(Person.name); // John
}
```

Cukup mudah bukan ?

## Deklarasi static pada method
```dart
class Person {
  static void sayHello() {
    print('Hello');
  }
}
```
Dengan begitu kita bisa memanggil method sayHello tanpa harus membuat object dari class Person.

```dart
void main() {
  Person.sayHello(); // Hello
}
```

 ❗ Note: Jika kamu memutuskan untuk menambahkan static pada property atau method maka kamu tidak bisa mengakses property atau method tersebut melalui object.
 Berikut contohnya :

  ```dart
  class Person {
    static String name = 'John';
  }
  main() {
    var person = Person();
    person.name = 'Doe'; // Error: The setter 'name=' isn't defined for the class 'Person'.
  }
  ```

Sekian materi pada kali ini, semoga bermanfaat. Terima kasih.

![Gif](assets/wow.gif)