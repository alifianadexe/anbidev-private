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
title = "Dart: Object Oriented Programming (Enumeration)"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Bagaimana sih cara membuat nilai constant di Dart atau bagaimana cara membuat tipe sendiri di Dart. Yuk kita kenalan dengan Enumeration. Here we go..


## Enumeration
Dart sendiri memiliki konsep Enumeration atau Enum. Pada update Dart 1.8, konsep Enum bertindak sebagai kelas yang mewakili sejumlah nilai konstanta.

<br/>
Template pembuatan enum :

```dart
enum Nama {
  //nilai konstanta
}

```
<br/>
Masih bingung ? mari kita ke contoh :
<br/>
Misal kita melakukan pengecekan koneksi, apakah status koneksinya masih loading, error, atau success.

```dart
enum Status {
  Loading,
  Error,
  Success,
}

```
Kita sudah membuat enum class nya sekarang kita buat pengecekannya


```dart

main() {

  var result = getData();

  switch(result) {
    case Status.Loading:
      print("Loading");
      break;
    case Status.Error:
      print("Error");
      break;
    case Status.Success:
      print("Success");
      break;
  }
}
```
Mula-mula kita buat variabel yang menampung nilai dari fungsi getData(). lalu kita buat pengecekan apakah status nya loading, error atau success.

<br/>

Sekian materi pada kali ini, semoga bermanfaat. Terima kasih.

![Gif](assets/wow.gif)