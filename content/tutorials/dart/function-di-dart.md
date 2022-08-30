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
title = "Function di Dart"
tutorials = []
type = []
url = ""
[author]
images = "/img/author.jpg"
name = ""

+++
Yuk kenalan dengan function, yakni konsep dimana kamu dapat membuat fungsi sesuai kebutuhan program kamu. Di materi kali ini kita akan belajar gimana caranya buat function, apa itu parameter di function dan banyak lagi dengan bahasa pemograman Dart.

## Apa itu Function?

Sebelumnya kamu sudah tidak asing dengan kode seperti ini :

```dart
print('Hello World');

main() {}
```

kedua kode di atas merupakan `function`, function `main()` merupakan function yang akan dijalankan pertama kali ketika program dijalankan. Semua program di Dart dimulai dari fungsi `main()` bisa dikatakan bahwa fungsi ini adalah `entry point` dari program. Sedangkan `print()` merupakan fungsi untuk mencetak output. Mudah dipahami bukan ?

![](/post/easy.gif)

Kita bahas secara konsep, fungsi atau metode (jika pendeklarasiannya di dalam class) adalah sekumpulan kode yang melakukan tugas tertentu. Pendeklarasian fungsi ini pastinya menggunakan nama sehingga apabila kita ingin memanggil fungsi tersebut tinggal panggil nama fungsinya dan sesuaikan kebutuhan. Pembuatan fungsi bertujuan agar programmer tidak membuat code yang berulang (`redundant`).

<br/>

## Function di Dalam Dart

Secara garis besar di banyak bahasa pemograman ada dua kategori function:

1. Built-in Function (Fungsi yang sudah ada di Dart)
2. User-Defined Funtions (Fungsi yand dibuat oleh programmer)

   <br/> yok kita bahas satu satu

<br/>

### Built-in Function

Sudah disinggung di atas bahwa function jenis ini merupakan bawaan library dari Dart nya, sehingga kita cukup memanggil nama fungsi tersebut saja sesuai kebutuhan.

![](/post/list.png)
<br/>
Bisa dilihat pada gambar di atasm bahwa kita sedang membuat list dengan nama items, lalu kita mencoba memanggil ada fungsi apa aja di dalam list. Gunakan fungsi tersebut sesuai kebutuhan.

## User-Defined Function

Sebagai seorang software engineer pasti kita dihadapkan dengan kasus tertentu yang kita membutuhkan untuk membuat fungsi kita sendiri. Untuk membuat fungsi di Dart berikut template yang harus kita buat:

```dart
returnType functionName(type param1, type param2, ...) {
  return result;
}
```

<br/>
kita definisikan dulu return tipenya selanjutnya nama fungsinya, jika ada parameternya kita tambahkan parameter dan terakhir return valuenya.
<br/>
Setiap fungsi di Dart selalu mengembalikan nilai namun ada satu tipe data khusus yang bisa kita lihat pada fungsi main sebelumnya yakni return type nya adalah void. Kata void sendiri tidak menghasilkan output atau nilai kembalian biasanya fungsi seperti in digunakan untuk kumpulan instruksi atau sesuatu yang berulang.
<br/>
Yuk kita mulai ke latihan membuat fungsi

```dart
void sayHello() {
  print('Hello World');
}

void main() {
  sayHello();
}
```

Kita buat fungsi sederhana dengan nama sayHello, di situ kita panggil, selanjutnya coba jalankan program di terminal atau run maka akan menghasilkan **Hello World**.
<br/>
Bagaimana menambahkan return type ?

```dart
 String sayHello() {
  return 'Hello World';
 }
 void main() {
  sayHello();
}
```

kode di atas jika di run apa yang akan terjadi ? tidak ada outputnya bukan ? apakah itu error ? jawabannya tidak. karena fungsi sayHello hanya mengembalikan String Hello World, kita perlu memanggil fungsi print() untuk menampilkan hasilnya.

```dart
print(sayHello()); //Hello World
```

Dengan begitu output dari fungsi sayHello() akan menampilkan Hello World.

## Function Parameter

ketika kamu ingin membuat fungsi yang dinamis artinya bisa dimasukkan argumen dari user, maka jawabannya pasang parameter di fungsi yang kamu buat. untuk menambahkan parameter ke dalam fungsi kamu bisa memasukkanya ke dalam kurung. Kamu bisa memberikan paramter sesuai kebutuhan logika program kamu.

```dart
void sayHello(String name) {
  print('Hello $name');
}
main() {
  sayHello('John'); //Hello John
  sayHello('Jane'); //Hello Jane
}
```

## Function dengan Optional Parameter

Jika kita menggunakan parameter pasti kita wajib untuk mengisinya. Bayangkan jika anda membuat banyak parameter di dalam fungsi dan harus mengisi argumen satu-satu, pasti melelahkan

```dart
void sayHello(String name, int age, bool isMarried, String alamat)

sayHello('John', 20, true, 'Jakarta', ...); //Begini cara pemanggilan
```

cukup banyak yang harus diisi bukan ? Gunakan optional paramter agar tidak perlu mengisi argumen yang tidak diperlukan. Optional paramter ditulis dengan simbol \[\] di parameternya

```dart
String sayHello([String? name, int? age, bool? isMarried, String? alamat]) {
   return 'Hello ${name} ${age} ${isVerified}';
}
sayHello('John', 20); //Begini cara pemanggilan
sayHello(); //Hello null null null
```

Perlu diperhatikan tanda ? setelah tipe data digunakan untuk menandakan bahwa parameter tersebut nullable.

## Default Value

Ketika kita ingin membuat parameter memiliki nilai di awal maka gunakan default value.

```dart
String sayHello([String name = 'John']) {
  return 'Hello $name';
}

sayHello(); //Hello John
sayHello('Jane'); //Hello Jane
```

## Named Parameter

Coba kalian perhatikan cara buat fungsi di atas dan pendeklarasiannya, kalian harus hafal tempat menaruhkan argumen agar sama dengan paramter. Namun dengan penggunaan named parameter Human error akibat salah menginput argumen bisa diminimalisir. Gunakan curly brackets {}

```dart
String sayHello({String name = 'John', int age = 20, bool isMarried = true, String alamat = 'Jakarta'}) {
  return 'Hello $name';
}

main() {
  sayHello(name: 'Jane', age: 21); //Hello Jane
  sayHello(age: 55, name: 'John Kowi Dodo'); //Hello John
}
```

Bisa dilihat perbedaannya ? kamu bisa menaruh argumen name di belakang, asal kita mention paramter. Dengan begitu kamu tidak perlu khawatir dengan urutan pengisian argumen.
<br/>
Jika anda sudah belajar sedikit tentang Flutter pasti anda menyinggung sedikit tentang function yang diberi **required** di parameternya. keyword tersebut digunakan agar user mengharuskan mengisi parameter yang diberi **required**.
<br/>

```dart

String sayGoodBye({required String name}) {
  return 'Goodbye $name';
}

sayGoodBye(name: 'John'); //Goodbye John
sayGoodBye(); //The named parameter 'name' is required, but there's no corresponding argument. Try adding the required argument
```

Bisa dilihat jika tidak mengisi parameter tersebut akan mengalami error.

<br/>

![Image](assets/cograts.gif)
<br/>
Selamat anda sudah belajar banyak tentang fungsi di Dart. ikuti terus blog Anbidev agar kamu makin jago lagi dalam mengoding..