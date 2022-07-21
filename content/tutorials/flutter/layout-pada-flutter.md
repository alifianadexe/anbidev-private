+++
authors = "hamid"
tutorials = ["flutter\n"]
cover = "/post/coverweb-flutter black.png"
date = 2021-01-25T17:00:00Z
description = "Mari mengenal dasar struktur aplikasi yang penuh widget"
draft = true
series = "flutter 101"
shortcode = "Widget"
status = "draft"
sumber = []
tags = []
title = "Flutter - Widget Dasar pada Flutter"
type = ["tutorials", "tutorial"]
url = "/flutter-widget/"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
**Widget** adalah tampilan penyusun aplikasi Flutter, seperti text, gambar, icon dan masih banyak lagi. Inti dari layout Flutter adalsah Widget, dan hampir semua isinya merupakan widget. Mulai dari widget yang bisa terlihat secara langsung seperti text, gambar, dan icon. Hingga widget yang sifatnya mengatur widget lainnya seperti rows, column dan grid.

Widget ditulis dengan huruf kapital. Jika Widget merupakan dua kata atau lebih, Widget ditulis menggunakan **PascalCase**. Kata pertama ditulis menggunakan huruf kapital, dan kata selanjutnya juga ditulis menggunakan huruf kapital, tanpa pemisah antar kata. Contoh dari Widget adalah Container, Column, Icon, Text, AppBar dan lain-lain.

### Widget property

Setiap Widget memiliki property. **Property** ini berguna jika kita ingin memberikan tambahan style dan semacamanya seperti padding, margin, color, alignment, title, dan lain-lain. Contohnya adalah:

### Widget didalam Widget

Seperti yang kita tahu, Flutter merupakan kumpulan dari widget. Kita bisa memasukkan satu widget kedalam widget lainnya. Widget yang berada didalam widget ini disebut dengan property **child**(anak). Cara menggunakan property child adalah sebagai berikut:

Kita juga bisa menambahkan widget-widget kedalam widget lain. Widget-widget yang berada didalam suatu widget disebut dengan property **childern**(anak-anak). Cara menggunakan property childer adalah sebagai berikut:

### Stateless dan Stateful Widget

Widget yang mempengaruhi interaktivitas project ada dua. Stateless dan Stateful Widget. Stateless widget adalah widget yang kondisinya tidak akan berubah. Icon, IconButton dan Text adalah contoh dari stateless widget. Subclass dari stateless widget adalah **StatelessWidget**.

Jika widget dapat berubah saat user berinteraksi dengan aplikasi, berarti menggunakan stateful widget. Stateful widget secara dinamis bisa merubah kondisi tampilan sesuai respon yang didapat dari _events trigger_ saat interaksi dengan user atau menerima data. Checkbox, Radio, Slider, InkWell, Form dan TextField adalah contoh dari stateful widget. Subclass dari stateful widget adalah **StatefulWidget**.

State dari widget diolah di object **State**, dan dipisahkan dari tampilannya. State terdiri dari value yang bisa berubah, seperti slider(current value) dan checkbox (checked). Saat State dari widget berubah, object state akan memanggil setState(), untuk melakukan reload pada widget.

### MaterialApp

![](/post/materialapp.gif)

Widget ini berguna jika kita menggunakan Material Design. Apa itu Material Design? **Material Design** adalah sistem desain yang dibuat oleh Google. Material Design terinspirasi dari benda fisik nyata disekitar kita, tentang bagaimana sebuah benda tersebut terkena cahaya dan menghasilkan bayangan sehingga sebuah desain akan terlihat elegan dan nyaman dipandang.

``` dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      
    );
  }
}
```

### Scaffold

![](/post/scaffold.gif)

**Scaffold** adalah class yang menghasilkan widget seperti AppBar, Drawer, SnackBar, BottomNavigationBar dan lain-lain. Scaffold akan mencakup keseluruhan layar device kita. Property yang akan Anbi sering gunakan pada Widget ini adalah **appBar** dan **body**.

``` dart
    return MaterialApp(
          home: Scaffold()
        );
```

### AppBar

![](/post/appbar.gif)

Fungsi dari AppBar atau Application Bar adalah untuk membuat Menu dibagian atas atau bisa juga sebagai Nama Aplikasi.

``` dart
    home: Scaffold(
        appBar: AppBar()
      )
```

### Text

Text adalah widget yang berfungsi menampilkan text yang bertipe data string. Kita akan mengimplementasikan widgt Text kedalam AppBar. Kita masukkan widget Text kedalam property `title`

``` dart
	home: Scaffold(
        appBar: AppBar(title: Text('Hello World')),
      ), 
```

### Center

Widget ini akan membuat widget child yang ada didalamnya berada ditengah. Kita akan mencoba membungkus Row dan Column kedalam Widget Center.

```dart
	home: Scaffold(
        appBar: AppBar(title: Text('Hello World')),
        body: Center(child: Text("Ini Text"),),
      )
```

### Container

**Container** adalah widget yang digunakan untuk membungkus widget lain. Pada widget ini juga bisa diberikan property memberikan warna, mengatur ukuran dan posisi.

### Row

**Row** adalah widget yang digunakan untuk menyajikan widget lain dalam bentuk horizontal. Widget ini tidak mampu melakukan scroll, jadi juga kita ingin melakukan scroll kita harus menggunakan ListView. Kita coba menggunakan Row dibawah body secara langsung:

### Column

Kebalikan dari row, **Column** adalah widget yang digunakan untuk menyajikan widget lain dalam bentuk vertikal. Kita coba menggunakan Column dibawah body secara langsung:

### Icon

Icon adalah widget untuk menampilkan Icon yang telah disediakan oleh Flutter. Cara menggunakannya adalah sebagai berikut

### Image

Image adalh widget untuk menampilkan gambar. Beberapa constructor yang bisa digunakan dengan widget ini adalah

* [new Image](https://api.flutter.dev/flutter/widgets/Image/Image.html), untuk mendapatkan gambar dari [ImageProvider](https://api.flutter.dev/flutter/painting/ImageProvider-class.html).
* [new Image.asset](https://api.flutter.dev/flutter/widgets/Image/Image.asset.html), untuk mendapatkan gambar dari [AssetBundle](https://api.flutter.dev/flutter/services/AssetBundle-class.html).
* [new Image.network](https://api.flutter.dev/flutter/widgets/Image/Image.network.html), untuk mendapatkan gambar dari internet.
* [new Image.file](https://api.flutter.dev/flutter/widgets/Image/Image.file.html), untuk mendapatkan gambar dari [File](https://api.flutter.dev/flutter/dart-io/File-class.html).
* [new Image.memory](https://api.flutter.dev/flutter/widgets/Image/Image.memory.html), untuk mendapatkan gambar dari [Uint8List](https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html).

Cara menggunakan widget ini adalah: