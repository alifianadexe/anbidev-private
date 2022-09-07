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
title = "Dart: Object Oriented Programming (Constructor)"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
## Konsep Constructor
Ketika kita membuat object atau instance dari suatu class, kita bisa menginisialisasi nilai awal dari properti yang ada di dalam class tersebut. Hal ini bisa kita lakukan dengan menggunakan constructor. Constructor sendiri diartikan sebagai fungsi khusus dari suatu class yang bertanggung jawab untuk menginisialisasi nilai awal dari properti yang ada di dalam class tersebut. Dart memiliki 3 jenis constructor, yaitu default constructor dan named constructor, dan factory constructor.

## Default Constructor
Default constructor adalah constructor yang tidak memiliki nama. Default constructor akan dipanggil secara otomatis ketika kita membuat object dari suatu class. Default constructor akan menginisialisasi nilai awal dari properti yang ada di dalam class tersebut. Contoh default constructor:

```dart
class Person {
  String name;
  int age;

  Person(var name, var age) {
    this.name = name;
    this.age = age;
  }
  //versi singkat
  Person(this.name, this.age);

  //cara kedua
  Person({this.name, this.age});
}

void main() {
  var person = Person('John', 20);
  print(person.name);
  print(person.age);
  //cara kedua
  var person2 = Person(name: 'John', age: 20);
}
```

## Named Constructor
Ketika kita ingin membuat custom dari constructor, bisa menggunakan named constructor. Dengan named constructor kita bisa membuat lebih dari 1 constructor. Format dari pembuatan named constructor yakni NamaClass.namaConstructor() {}. Contoh named constructor:

```dart
class Person {
  var name = '';
  var age = 0;

  Person(this.name, this.age);

  //named constructor
  Person.callName(this.name) {
    print('Name is $name');
  }
}

void main() {
  var person = Person('John', 20);
  print(person.name);
  print(person.age);

  var person2 = Person.callName('John'); //name is John
}
```

## Factory Constructor
Factory constructor digunakan apabila kamu tidak ingin constructor membuat instance baru. Ini sangat berguna ketika kamu ingin membuat instance baru dari class yang sama. Contoh factory constructor:

```dart
class Person {
  var name = '';
  var age = 0;

  Person(this.name, this.age);

  //factory constructor
  factory Person.fromJson(Map<String, dynamic> json) {
    return Person(json['name'], json['age']);
  }
}
```
Biasanya factory contructor digunakan pada kasus pembuatan singleton, yang mana hanya memiliki satu instance saja. Berikut contoh singleton di Dart

```dart
class Singleton {
  static final Singleton _singleton = Singleton._internal();

  factory Singleton() {
    return _singleton;
  }

  Singleton._internal();
}
```
Sekian materi constructor di Dart. Semoga bermanfaat.

![Gif](assets/amazing.gif)