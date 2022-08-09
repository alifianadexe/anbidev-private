+++
authors = "Handika"
cover = "/post/picture2.jpg"
date = 2022-08-08T17:00:00Z
description = "String adalah tipe data yang berisi karakter"
series = "Dart Dasar"
shortcode = "String"
status = "publish"
sumber = []
tags = []
title = "Dart: String di Dart"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-string"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Jika kamu sebelumnya mengikuti materi [Dart](https://www.anbidev.com/dart-pengenalan/). Playlist ini sebelumnya yang sering kita gunakan untuk contoh, maka kamu sudah tahu bahwa String adalah tipe data yang berisi `karakter`. String pada Dart menggunakan `tanda kutip (')` untuk menandai awal dan akhir String. Selain itu bisa menggunakan `tanda kutip dua (")`.

```dart
String singleQuote = 'Single Quotes';
String doubleQuote = "Double Quotes";
print(singleQuote);
print(doubleQuote);
```

Sekarang kita buat variabel dengan tipe String dan isi dengan kata **Hari ini adalah hari Jumat**

```dart
String today = 'Hari ini adalah hari Jum'at'; // Error
```

Pada contoh kode di atas compiler akan memberikan error hal ini karena compiler memahaminya kutip akhir berada di huruf `m`. Solusi dari ini ialah gunakan `backslash (\\)`, solusi tersebut biasa disebut dengan `escape string`.
Maka kode nya akan menjadi seperti ini:

```dart
String today = 'Hari ini adalah hari Jum\'at';
print(today); //Hari ini adalah hari Jum'at
```

Macam-Macam Escape String :

| Parameter | Type |
| :--- | :--- |
| \\n | Baris Baru |
| \\r | Kembali Ke awal Baris |
| \\t | Horizontal Tab |
| \\v | Vertical Tab |
| \\b | Hapus karakter sebelumnya |
| \\\\ | \\ |

## String Interpolation

`String Interpolation` adalah cara untuk memasukkan variabel ke dalam string. Variabel di sini tidak hanya berupa String, tetapi juga bisa berupa angka. Bahkan bisa membuat `expression` di dalam String interpolation, simbol untuk mendeklarasikan string interpolation yakni dengan tanda `dollar $`.

```dart
String name = 'John';
int age = 30;
String greeting = 'Hello $name, you are $age years old.';
print(greeting);

//dengan expression
print('1 + 1 = ${1 + 1}');

//Tanpa String Interpolation
print("Hello nama saya" + name + "umur saya" + age.toString() + "tahun");
```

Bisa dilihat bahwa tanpa String interpolation cukup ribet dalam penulisannya.
<br />
Lalu bagaimana cara kita mengabaikan String interpolation?

```dart
print("Saya memiliki uang sebesar \$1000");

//menggunakan raw String
print(r"Saya memiliki uang sebesar $1000");

//output keduanya sama
```

Huruf `r` sebelum String akan memberitahu bahwa String ini sebagai `raw` yang akan mengabaikan adanya interpolation.
<br />
<br />

![](/post/selamat.gif)

Oke sekian materi tentang tipe data String, sampai ketemu di materi selanjutnya.