+++
authors = ""
cover = ""
date = ""
description = ""
draft = true
series = ""
shortcode = ""
status = ""
sumber = ["https://belajarflutter.com/dart-list-pada-pemrograman-dart/", "https://www.seredata.com/2019/06/dart-collection-map.html"]
tags = []
title = "Dart: Mengenal Collection"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Yuk kita kenalan dengan struktur data yang digunakan untuk menyimpan banyak data sekaligus yang ada di Dart. Collections adalah objek yang menyimpan banyak data seperti List, Set, dan Map (Pada artikel ini kita hanya membahas ketiga collection ini). Mari kita ulas tuntas pada materi kali ini.

![Picture](assets/tutorial.png)

## List
Jika kamu sudah belajar mengenai Javascript, konsep array ini sama seperti List di Dart. List berguna untuk menyimpan data secara berurutan, karena mengandalkan index yang ada di List dan index yang ada di Dart sendiri dimulai dari angka 0. Kita bisa menyimpan tipe data apapun ke dalam List.

```dart
List nama = ['Andi', 'Budi', 'Caca'];
```
Di atas adalah contoh code untuk membuat List dengan data integer.

```dart
List list = ['Jokowi', 55, true];
```
Selanjutnya kita bisa mendeklarasikan tipe data apapun ke dalam List.

Tidak hanya mendeklarasikan dengan tipe String, int, boolean. Kita bisa memasukkan tipe data List ke dalam List, sehingga akan terjadi nested List.

```dart
List itemsOfList = [['Andi', 'Budi', 'Caca'], ['Jokowi', 55, true]];
```
Lalu bagaimana cara kita untuk mengambil salah satu nilainya ?
Jawabannya melalui index.

```dart
//syntax
namaList[index];

List nameOfPresiden = ['Jokowi', 'Habibie', 'Gusdur'];
print(nameOfPresiden[0]); //Jokowi
```
Pada contoh di atas kita mengambil jokowi dengan mengambil list dengan index ke 0.

Ada banyak properti dan method List yang sangat berguna, seperti length, isEmpty, isNotEmpty, remove, add  dan banyak lagi. Berikut Anbu berikan link terkait :
https://medium.com/flutter-community/useful-list-methods-in-dart-6e173cac803d

## Set
Set sendiri mirip dengan List namun yang berbeda ialah jika List masih bisa menampung data yang sama sedangkan Set itu tidak boleh ada nilai yang duplikat. Set juga bisa menampung tipe data apapun. Berikut cara membuat Set


```dart
Set namaVariabel = {};

Set data = {'Andi', 'Budi', 'Caca'};
Set data2 = {'Andi', 'Budi', 'Siska', 'Kavin'};

print(data.union(data2));
// Output {Andi, Budi, Caca, Siska, Kavin}
```
Kita uji coba membuat 2 set dengan ada nilai yang duplikat lalu kita gabungkan dnegan method union.

## Map
Map adalah struktur data yang menyimpan banyak data dengan key dan value. Map bisa menampung tipe data apapun layaknya List dan Set. Perlu dicata bahwa Map tidak digunakan untuk menyimpan informasi secara berurutan, kita bisa memanggilnya menggunakan key. Berikut cara deklarasi Map

```dart
Map namaVariabel = {}; //sekilas mirip Set

Map city = {
    'Jakarta': 'Indonesia',
    'London': 'England',
    'New York': 'USA',
    'Tokyo': 'Japan'
};
print(city['Jakarta']); //Indonesia
```
Kita buat map terlebih dahulu dengan data seperti di atas, lalu ketika kita ingin mencetak output Indonesia maka kita panggil key nya.

Bahkan kita juga bisa membuat nested Map.

```dart
  Map pegawai = {
    345: {"nama": "Sumanto", "Departemen": "Accounting", "Gaji": 3000000},
    220: {"nama": "Markus", "Departemen": "Sales", "Gaji": 1500000},
    572: {"nama": "Elisabet", "Departemen": "Marketing", "Gaji": 2000000}
  };

    print(pegawai[345]['nama']); //Sumanto
```

Sekian materi Dart tentang Collections, tidak sulit bukan ? Terus pantau blog anbidev agar kalian jago ngoding.

![Picture](assets/amazing.gif)
