+++
authors = "Handika"
cover = "/post/photo_2022-08-10_09-23-27.jpg"
date = 2022-09-07T17:00:00Z
description = "Dimana sebuah class dapat mewarisi semua properti dan method dari class lain"
series = "Dart Dasar"
shortcode = "Inheritance"
status = "publish"
sumber = ["https://www.geeksforgeeks.org/dart-concept-of-inheritance/"]
tags = ["dart"]
title = "Dart: Object Oriented Programming (Inheritance)"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-inheritance"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Salah satu pilar dari Object Oriented Programming ialah `inheritance` atau pewarisan, bagaimana cara kerja inheritance ini dan seberapa penting penggunaannya. Mari kita belajar Here we goo...

## Inheritance

Dart mendukung konsep inheritance, dimana sebuah class dapat mewarisi semua properti dan method dari class lain. Dengan demikian, kita dapat membuat sebuah class baru yang memiliki semua properti dan method dari class lain, dan kita dapat menambahkan properti dan method baru ke class tersebut.

<br/>

Biasanya konsep dari Inheritance ini adalah hubungan antara `Class Parent` dan `Class Child`. Dimana Class Parent akan mewariskan seluruh properti dan method kepada Class Child. Berikut format dari Inheritance pada Dart:

```dart
class ParentClass {
  // code here...
}

class ChildClass extends ParentClass {
  // code here...
}
```

kita bisa menggunakan keyword `extends` untuk melakukan pewarisan dari class parent ke class child.

<br/>

Ada 3 konsep inheritance pada Dart :

1. Single Inheritance

   `Single Inheritance` adalah konsep dimana sebuah class hanya dapat mewarisi dari satu class lain. Berikut contoh dari Single Inheritance pada Dart:

   ```dart
   class Engine {
     int cc;
     int cylinder;
     int horsePower;
     // code here...
   }
   
   class DieselEngine extends Engine {
     // code here...
   }
   ```

   Kita bisa menggunakan seluruh property yang ada di class `Engine`

   ```dart
   void main() {
     DieselEngine dieselEngine = DieselEngine();
     dieselEngine.cc = 2000;
     dieselEngine.cylinder = 4;
     dieselEngine.horsePower = 150;
   }
   ```
2. Multilevel Inheritance

   `Multilevel Inheritance` adalah konsep dimana sebuah class dapat mewarisi dari class lain, dan class lain tersebut juga dapat mewarisi dari class lain. Berikut contoh dari Multilevel Inheritance pada Dart:

   ```dart
     class Engine {
       int cc;
       int cylinder;
       int horsePower;
       // code here...
     }
   
     class DieselEngine extends Engine {
       // code here...
     }
   
     class ToyotaDieselEngine extends DieselEngine {
       // code here...
     }
   ```

   Bisa kita lihat pada code di atas bahwa class `DieselEngine` yang semula child class bisa menjadi parent class.

   ```dart
   void main() {
     ToyotaDieselEngine toyotaDieselEngine = ToyotaDieselEngine();
     toyotaDieselEngine.cc = 2000;
     toyotaDieselEngine.cylinder = 4;
     toyotaDieselEngine.horsePower = 150;
   }
   ```
3. Hierarchical Inheritance

   `Hierarchical Inheritance` adalah konsep dimana child class yang memiliki parent class yang sama. Berikut contoh dari Hierarchical Inheritance pada Dart:

   ```dart
     class Engine {
       int cc;
       int cylinder;
       int horsePower;
       // code here...
     }
   
     class DieselEngine extends Engine {
       // code here...
     }
   
     class PetrolEngine extends Engine {
       // code here...
     }
   ```

   ```dart
     void main() {
       DieselEngine dieselEngine = DieselEngine();
       dieselEngine.cc = 2000;
       dieselEngine.cylinder = 4;
       dieselEngine.horsePower = 150;
   
       PetrolEngine petrolEngine = PetrolEngine();
       petrolEngine.cc = 2000;
       petrolEngine.cylinder = 4;
       petrolEngine.horsePower = 150;
     }
   ```

<br/>

## Bonus: Inheritance Constructor

Ketika kita mendefinisikan `constructor` pada parent class, maka kita harus memanggil constructor parent class tersebut pada child class. Berikut contoh dari Inheritance Constructor pada Dart:

```dart
class Engine {
  int cc;
  int cylinder;
  int horsePower;

  Engine(this.cc, this.cylinder, this.horsePower);
}

class DieselEngine extends Engine {
  DieselEngine(int cc, int cylinder, int horsePower) : super(cc, cylinder, horsePower);
}
```

Sekian materi tentang inheritance pada Dart, semoga bermanfaat. Terima kasih.

![](/post/cat.gif)