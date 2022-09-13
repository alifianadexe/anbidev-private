+++
authors = "Handika"
cover = "/post/photo_2022-08-10_09-23-27.jpg"
date = 2022-09-08T17:00:00Z
description = "Enum bertindak sebagai kelas yang mewakili sejumlah nilai konstanta"
series = "Dart Dasar"
shortcode = "Enumeration"
status = "publish"
sumber = []
tags = ["dart"]
title = "Dart: Object Oriented Programming (Enumeration)"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-enumeration"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Bagaimana sih cara membuat nilai constant di Dart atau bagaimana cara membuat tipe sendiri di Dart. Yuk kita kenalan dengan Enumeration. Here we go..

## Enumeration

Dart sendiri memiliki konsep `Enumeration` atau `Enum`. Pada update `Dart 1.8`, konsep Enum bertindak sebagai `kelas` yang mewakili sejumlah `nilai konstanta`

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

Misal kita melakukan pengecekan koneksi, apakah status koneksinya masih `loading`, `error`, atau `success`

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

Mula-mula kita buat variabel yang menampung nilai dari fungsi `getData()`. Lalu kita buat pengecekan apakah statusnya loading, error atau success.

<br/>

Sekian materi pada kali ini, semoga bermanfaat. Terima kasih.

![](/post/wow.gif)