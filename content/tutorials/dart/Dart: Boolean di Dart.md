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
title = "Dart: Boolean di Dart"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Yuk kenalan dengan tipe data `Boolean` yang hanya memiliki dua nilai yakni `true` dan `false`. Sekilas mengenai sejarah adanya tipe data Boolean, berawal dari seorang matematikawan asal Inggris yang bernama `George Boole`. 

![George Boole](/post/george_bool.png "George Boole")

Beliau ini dikenal karena menciptakan suatu cabang pada pembelajaran Aljabar yang menyatakan bahwa setiap `logika` yang diberikan adalah `benar` atau `salah`. Dalam matakuliah matematika diskrit juga, kita sering menemui contoh soal yang menggunakan boolean sebagai nilai dari sebuah variabel. 

![](/post/waw.gif)
<br/>

Pada bahasa pemograman Dart untuk mendeklarasikan tipe data Boolean cukup dengan kata kunci `bool` dan ingat jika boolean hanya punya 2 nilai saja jika tidak true, ya false.

```dart
bool loveMe = false;
bool hateMe = true;

bool isFalse = !true;
bool isTrue = !false;
```

<br/>

Bisa dilihat di atas ada 4 variabel yang kita buat, untuk variabel `loveMe` dan `hateMe` kita mengisi false dan true, tapi coba liat variabel 2 terakhir ada tanda `!` di depan valuenya.
<br/>

Nah tanda tersebut dinamakan dengan `"bang"` atau `"not"` artinya kebalikan dari nilai yang kita masukkan.
<br/>

Yuk, kita latihan sedikit agar mudah memahami tipe data ini.
<br/>

```dart
main(List<String> args) {
  checkRain();
}

checkRain() {
  bool check;
  int val1 = 12;
  int val2 = 9;

  // Assigning variable check
  // value depending on condition
  check = (val1 > val2);
  print(check);
}
```

<br/>

Pada kode di atas mula-mula kita buat variabel `bool check` dan kita mengisi nilai dari variabel `val1` dan `val2`. Lalu kita membuat kondisi apakah `val1` lebih besar dari `val2`, jika `iya` maka nilai check akan bernilai `true`, jika `tidak` maka akan bernilai `false`.
<br/>

![Screenshoot](assets/value.png)

<br/>

Taraa... kita sudah bisa mengetahui tipe data boolean. Sekian materi pada pertemuan ini. Ikuti terus blog anbidev agar kalian lebih jago lagi dalam dunia pemograman. Sampai jumpa di blog anbidev.
<br/>

![Gif](assets/happy.gif)