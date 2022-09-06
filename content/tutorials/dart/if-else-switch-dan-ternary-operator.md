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
title = "If else, Switch dan Ternary Operator"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Sebagai seorang programmer pasti dalam pembuatan program kita dihadapkan dengan kode yang membutuhkan `kondisi`. Jika kondisi terpenuhi maka jalankan, sedangkan jika tidak terpenuhi maka jalankan kode yang lain. Oke sampai sini bisa dimengerti ?0

<br/>

Mari kita berkenalan dengan `if` dan `else`. keyword If dan Else tersebut merupakan hal yang umum ada di bahasa pemograman seperti C, C++, Java, dan lain-lain.

## If condition

Ekspresi if akan `menguji suatu kondisi`. Jika hasil ekspresi tersebut bernilai `true`, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai `false` maka proses yang ditentukan akan dilewatkan.

<br/>

Berikut contoh control flow dalam bahasa pemrograman:

<br/>

<img src="assets/ss1.png" alt="" width="300">

<br/>

jika diuraikan ke dalam kode maka akan jadi seperti ini :

```dart
 if(condition) {
  //code yang akan dijalankan jika kondisi terpenuhi
 }
```

<br/>
Mari kita langsung ke latihan soal untuk lebih mudah memahaminya.

```dart
var isMarried = true;

if(isMarried) {
  print('Ya, saya sudah menikah');
}
//output : Ya, saya sudah menikah
```

Kode di atas akan menghasilkan output karena kondisi dari if `terpenuhi`, hal demikian karena variabel `isMarried` bernilai `true`. Lalu bagaimana jika variable `isMarried` bernilai `false`? Nah tidak akan terjadi apa pun. Kita perlu memberikan alternatif untuk menangani kondisi tersebut.

## If Else condition

Kita juga bisa menggunakan keyword else, apa sih keyword else itu? `Else` sendiri bisa digunakan untuk menangani kondisi yang tidak terpenuhi atau bisa dibilang alternatif kondisi yang letaknya di akhir kondisi. 

<br/> 

Berikut flow dari If Else condition 

<img src="assets/ss2.png" alt="" width="300"> 

<br/> 

Pada gambar di atas dijelaskan bahwa flow nya apabila kondisi if tidak terpenuhi maka akan dilempar ke else. Mari kita ke latihan soal untuk lebih mudah memahaminya.

```dart
var isMarried = false;
if(isMarried) {
  print('Ya, saya sudah menikah');
} else {
  print('Belum menikah');
}
```

Pada kode di atas bisa dilihat dengan jelas bahwa variabel isMarried bernilai false, sehingga pada pengecekan if tidak terpenuhi. Maka dilempat ke else dan kode di blok else akan dijalankan.
<br/>

## If Else If condition

Berbeda dengan 2 kondisi sebelumnya yang mana kita hanya melakukan 2 pengecekan jika tidak terpenuhi maka lempar ke else, nah ada konsep lain apabila ingin menambahkan kondisi alias tidak hanya 1 kondisi saja yang diuji. Berikut sintak umum yang digunakan

```dart
if(condition) {
  //code
} else if(condition) {
  //code
} else {
  //code
}
```

Lalu jika kita ingin menambahkan kondisi lebih dari contoh di atas ? Bisa, tambahkan sesuai kebutuhan kode program kamu.
<br/>
Oke kita next level, latihan soal yang berbeda
<br/>
Kita akan buat kondisi dimana :

1. Mendapatkan A jika nilai lebih besar dari 90
2. Mendapatkan B jika nilai lebih besar dari 80 dan kurang dari 90
3. Mendapatkan C jika nilai lebih besar dari 70 dan kurang dari 80
4. Mendapatkan D jika nilai di bawah 70

```dart
var nilai = 84;
if(nilai > 90) {
  print('A');
} else if(nilai > 80 && nilai < 90) {
  print('B');
} else if(nilai > 70 && nilai < 80) {
  print('C');
} else {
  print('D');
}
//Output : B
```

Jika dinarasikan : Mula-mula Anbu mendapatkan nilai 84, lalu kita cek apakah 84 lebih besar dari 90 ? jelas tidak ya maka masuk ke kondisi kedua apakah 84 lebih besar dari 80 dan 84 kurang dari 90 ? YAP BENAR. maka Anbu akan mendapat skor B.

## Switch case

Sama halnya dengan if else, switch case adalah kondisi yang bisa menampung banyak kondisi. Jika melihat pada latihan soal sebelumnya ada banyak pengecekan, jika semakin banyak akan semakin membingungkan dan sulit untuk dibaca.
Contoh code switch case:

```dart
switch (variable/expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    //code
}
```

Mari kita bahas, keyword switch berisi mengenai variabel atau ekspresi yang akan diuji. Selanjutnya case, ini adalah nilai yang valid, keyword break digunakan untuk keluar dari proses swithc jika sudah terpenuhi sedangkan default digunakan untuk menangani kondisi yang tidak terpenuhi bisa dibilang sama seperti else.
<br/>
Berikut contoh kode switch case:

```dart
var nilai = 84;
switch(nilai) {
  case 90:
    print('A');
    break;
  case 80:
    print('B');
    break;
  case 70:
    print('C');
    break;
  default:
    print('D');
}
```

Terlihat enak dibaca bukan ?

## Ternary operator

Ini merupakan magic di Dart, kita bisa melakukan pengujian dengan 1 baris saja dengan menggunakan ternary operator. ada 3 kondisi yakni condtion, expresion true dan expresion false. Berikut sintak nya

```dart
condition ? expresion true : expresion false;
```

Kita gunakan latihan soal kita yang pertama menggunakan variabel isMarried.

```dart
var isMarried = true;
var isMarriedString = isMarried ? 'Sudah menikah' : 'Belum menikah';
print(isMarriedString);
//Output : Sudah menikah
```

Kita tidak perlu secara eksplisit menuliskan if dan else, kita bisa langsung menggunakan operator ternary.

## Null Checking Expression

Apa lagi yang hebat di Dart ? kita bisa buat pengecekan nilai null. Berikut sintak nya

```dart
expression1 ?? expression2
```

Jika expression1 tidak null maka akan menampilkan expression1, jika expression1 null maka akan menampilkan expression2. Masih bingung ? Mari kita latihan soalnya.

```dart
String? nameNull = null;
String name = nameNull ?? 'Anbu';
print(name);
//Output : Anbu
```

## Null-aware assignment operator

Operator ini bisa kita gunakan untuk pengecekan dan memberikan nilai. Jadi konsepnya jika nilainya null kita assign value, tapi jika nilainya tidak null tidak bisa di assign value. Berikut basik sintaknya

```dart
expression1 ??= expression2
```

Lanjut ke latihan soal

```dart
void main() {
  int value;
  print(value); // <- bernilai null
  value ??= 5;
  print(value); // <- 5, akan menghasilkan 5
  value ??= 6;
  print(value); // <- 5, tidak berubah karena sudah memiliki nilai alias tidak null.
}
```

![Gif](assets/bravo.gif)
Sekian materi kali ini, cukup banyak yang sudah kita pelajari pada materi ini, pantau terus blog anbidev supaya kamu lebih jago dalam ngoding.