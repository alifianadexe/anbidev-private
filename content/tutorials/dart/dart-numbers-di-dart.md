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
title = "Dart: Numbers di Dart"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
## Apa itu Numbers ?

Pasti kalian sudah tidak asing dengan keyword tersebut, yak tipe data `numbers` atau tipe data `angka`. Pada bahasa Dart tipe data number sendiri ada dua yaitu :

1. int (`Integer`)
2. Double (`Float`)

Ada juga tipe data num, yakni `superclass` dari int dan double. yuk kita bahas satu satu, Here we go..

## Integer

Integer adalah bilangan yang tidak lebih besar dari `64 bit` (2^64). Pada Dart variabel integer dapat menyimpan nilai mulai dari -2^63 hingga 2^63-1. Berikut contoh kode yang menampilkan nilai integer :

```dart
int nilai = 10;
int nilai2 = -10;
```

Bisa dilihat bahwa nilai `10` dan `-10` adalah nilai integer, tidak ada tambahan nilai desimal seperti titik di belakang angka.

## Double

tipe double juga memiliki ukuran sebesar 64 bit, dan bisa dibilang double ini adalah representasi dari bilangan desimal yang mana diikuti tambahan nilai desimal.
Berikut contoh kode yang menampilkan nilai double :

```dart
double nilai = 10.0;
double nilai2 = -10.0;

double nilai3 = 10;
```

Loh kok pada variabel nilai3 tipe double tidak diikuti angka desimal sih ?

<img src="assets/confusion.gif" width="400">

Yap jangan bingung sobat anbu, sejauh versi Dart 2.1 kita bisa menuliskan double tanpa menambahkan titik di belakang angka, dengan begitu kita bisa katakan variabel nilai3 adalah double tanpa desimal.

## Num

Seperti yang disinggung di atas, jika di hierarki num itu paling tinggi dan int dan double di bawahnya.
Dengan begitu kita bisa menuliskan variabel dengan tipe num, yang artinya bisa menyimpan nilai integer maupun double.

```dart
num nilai = 10;
num pi = 3.14;

//lalu kita coba print
print(nilai.runtimeType);
print(pi.runtimeType);
```

❗ Note: field runtimeType menampilkan tipe data dari variabel.

![Screenshott](assets/ss.png)

## Method

Anbu kasih beberapa method yang ada di tipe data Number baik integer maupun double yang nantinya bisa mempermudah dalam memahami bahasa Dart.

| method | Deskripsi |
| :--- | :--- |
| abs() | Mengembalikan nilai absolut |
| ceil() | Mengembalikan pembulatan besar ke int |
| round() | Mengembalikan pembulatan ke angka terdekat |
| floor() | Mengembalikan pembulatan kecil ke int |
| toDouble() | Mengembalikan nilai ke double |
| toInt() | Mengembalikan nilai ke int |
| truncate() | Mengembalikan nilai int dengan menghilangkan koma |
| int.parse() | Melakukan parsing dari String ke int |

<br/>
Baik sekian materi tentang tipe data Numbers pada Dart, terus pantengin blog anbidev ya biar kalian lebih jago lagi dalam mengoding.
<br/>
<br/>

![Gif](assets/applause.gif)