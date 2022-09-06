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
title = "Dart: Perulangan For, While, Do While"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Sebagai seorang programmer, kita akan menghadapi kasus dimana kita harus menulis program berkali-kali, dengan menulisnya secara manual pasti akan sangat merepotkan. Maka dari itu kita kenalan dengan yang namanya perulangan. `Perulangan` sendiri adalah proses mengulang-ulang eksekusi satu statement atau lebih blok tanpa henti, selama kondisi yang dijadikan acuan terpenuhi. Setidaknya ada 2 (dua) perulangan di dalam Dart yakni `counted loop` dan `uncounted loop`

* `Counted Loop` adalah perulangan yang `sudah jelas banyaknya` perulangan yang diinginkan. contoh for `loops`
* `Uncounted Loop` yakni perulangan yang `tidak jelas berapa kali` harus diulang. contoh `while`, `do while`

## Perulangan For Loops

Perulangan yang masuk ke counted loop karena nilai perulangannya sudah jelas. kita langsung ke contoh soal,
<br/>
Coba lakukan print angka 1-100.

```dart
print(1);
print(2);
print(3);
print(4);
.....
print(100);
```

Sangat melelahkan bukan jika menulisnya secara manual. Lalu bagaimana menggunakan perulangan `For Loops`

```dart
for (var i = 1; i <= 100; i++) {
  print(i);
}
```

Mari kita ulas,

Pertama pada tulisan `var i = 1;` kita sebut dengan inisiasi nilai awal. Lalu kenapa variabel `i`? agar mudah mengingatnya `i` di sini sebagai representasi dari `index`

Kedua, sebagai operasi perbandingan jika nilainya terpenuhi maka akan dijalankan perulangannya. Di sini kita buat perbandingan `1 kurang dari sama dengan 100` artinya jika variabel `i` kurang dari sama dengan `100` maka akan dijalankan perulangannya.

Ketiga, `increment/decrement` nilai variabel `i`. Di sini kita menambahkan `1` ke nilai variabel `i`. Setiap kali perulangan dijalankan akan `menambah` variabel i. Dituliskan dengan `i++`

Ada juga konsep perulangan dengan `for in`, perulangan ini sama halnya dengan alur perulangan sebelumnya tetapi hanya bisa digunakan dengan tipe data yang `Iterable/collection` seperti `List`, `Set`, dan `Map`

Basik sintak :

```dart

for(var iterator in collection) {
    //code
}
```

Nah iterator bisa kita istilahkan sebagai alias, kita bisa tulis terserah kita.

Contoh penggunaan :

```dart
var list = [1,2,3,4,5];
for(var i in list) {
  print(i);
}
```

Coba lakukan print, dan liat pada debug console jika kamu menggunakan visual studio code.

❗ Buat ngelatih pemahamanmu, coba buat perulangan yang menghasilkan output bintang seperti di bawah ini :

```dart
*
* *
* * *
* * * *
* * * * *
```

## Perulangan While Loops dan Do While Loops

Tidak jauh berbeda dengan perulangan for loops, perulangan while loops dan do while loops memiliki sama-sama konsep. Hal yang membedakan dikeduanya yakni jika while akan dievaluasi dulu baru dieksekusi sedangkan do while akan dieksekusi dulu baru di evaluasi. Mari kita ke contoh :

```dart
var i = 1;
while(i > 10) {
  print(i);
  i++;
}
```

Coba pahami kode di atas apakah 1 lebih besar dari 100 ? Jelas tidak bukan, maka dari itu kode di atas tidak akan dijalankan.

Selanjutnya kita ke contoh do while :

```dart
var i = 1;
do {
  print(i);
  i++;
} while(i > 10); //Output 1
```

Coba ketikan kode di atas, lalu lihat akan menghasilkan output 1 bukan ? iya karena kija menjalankan program dulu baru kita evaluasi. print(i) akan dijalankan 1 kali, lalu evaluasi apakah 1 lebih besar dari 10 ? Tidak, maka selesai program tidak akan dijalankan.

❗ Jawaban dari Challange di atas :

```dart
  var s = '';
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
      s += '* ';
    }
    s += '\n';
  }
    print(s);
```

Sekian materi mengenai perulangan, terimakasih.

![](assets/bravo.gif)