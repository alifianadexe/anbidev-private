+++
authors = "hamid"
cover = "/post/coverweb-flutter black.png"
date = 2020-09-15T17:00:00Z
description = "Penjelasan tentang widget pada Flutter"
series = "flutter 101"
shortcode = "widget"
status = "publish"
sumber = ["https://www.geeksforgeeks.org/materialapp-class-in-flutter/?ref=lbp", "https://flutter.dev/docs/development/ui/widgets-intro"]
tags = ["dart", "flutter"]
title = "Mengenal Widget pada Flutter"
tutorials = ["flutter"]
type = ["tutorials", "tutorial"]
url = "/flutter-widget/"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
Apa itu Widget pada Flutter? `Widget` adalah Semua komponen seperti button, text, icon dan sebagainya yang membentuk sebuah tampilan atau kerangka aplikasi. Keseluruhan dari aplikasi yang terlihat pada layar merupakan kumpulan widget. Widget pada Flutter sendiri terinspirasi dari [React](https://reactjs.org/ "React").

### Hello World!

Mari kita baca kode berikut ini:

```dart
// main.dart

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Title here"),
        ),
        body: Center(child: Text("Hello World!")),
      ),
    );
  }
}
```

Baris kode tersebut terletak pada `lib/main.dart` yang merupakan file utama yang akan dieksekusi oleh Flutter. File asli dari `main.dart` tidak berisi seperti itu, kutulis ulang agar lebih sederhana. Kode tersebut akan menampilkan teks `"Hello World"`.

Beberapa contoh Widget yang ada pada kode tadi adalah sebagai berikut:

* **MaterialApp()**, membuat aplikasi menerapkan Material Design (`design languaged system` milik Google)
* **Scaffold**, sebagai landasan halaman
* **AppBar()**, biasanya menjadi judul (dari sebuah aplikasi atau halaman)
* **Text()**, menampilkan teks dan memberikan style pada teks
* **Center()**, semua Widget yang ada didalam Widget ini akan diletakkan di bagian tengah

![Basci Widget](/post/widget.jpg "Basic Widget")

Masih ada banyak lagi Widget lain yang jika dijelaskan tidak akan cukup dalam satu artikel.