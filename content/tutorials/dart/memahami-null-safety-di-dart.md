+++
authors = "Handika"
cover = "/post/photo_2022-08-10_09-23-27.jpg"
date = 2022-08-11T17:00:00Z
description = "Sejak versi 2.12, Dart menghadirkan fitur Null Safety"
draft = true
series = "Dart Dasar"
shortcode = "NullSafety"
status = "draft"
sumber = ["https://www.seredata.com/2021/03/dart-null-safety.html", "https://www.thengoding.com/2021/07/07/dart-programming-null-safety/", "https://medium.flutterdevs.com/null-safety-support-for-flutter-dart-e25cb31ad5c8", "https://dart.cn/null-safety/tour"]
tags = ["dart"]
title = "Memahami Null Safety di Dart"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-nullsafety"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Seperti kita tahu bahwa bahasa Dart menjadi pondasi bagi Flutter, terdapat banyak fitur di dalam bahasa ini yang akan kita bahas tuntas di materi kali ini yaitu `Null Safety`.
<br/>
Sejak versi `2.12`, Dart menghadirkan fitur `Null Safety`. Apa sih yang dimaksud dengan Null Safety? Kenapa kita harus menggunakan Null Safety? Oke mari kita bahas lebih dalam, Here we go...


## Apa itu Null Safety ?
Oke langsung saja Anbi contohkan
```dart
String nama = "Jokowi";
int age = 30;
```
<br/>
Bisa dilihat kedua variabel tersebut memiliki nilai, tapi di kasus tertentu variabel akan diisi `nanti` alias kita beri nilai `null` dulu.
<br/>

```dart
double? ukuranSepatu = null;

ukuranSepatu = 38.5;
```

## Terminologi

Bayangkan jika kamu ingin membelikan kado kepada salah satu teman, tapi karena kamu tidak tau ukuran sepatu teman kamu, akhirnya kamu isi dengan nilai `null`. Selanjutnya setelah kamu tanya ukuran sepatu ke teman kamu, maka kamu dapat menuliskan ukuran sepatu dan membelikannya sepatu sehingga teman kamu dapat sepatu dengan ukuran yang pas. Begitulah ilustrasinya.
<br/>
Nah secara teknis nilai `null` bisa menyebabkan **Null Pointer Exception (NPE)** atau `The Billion Dollar Mistake`.
<br/>
Di sini Anbi berikan video mengenai null safety di Dart dari ahlinya ahli.

<a href="https://www.youtube.com/watch?v=iYhOU9AuaFs&feature=emb_imp_woyt">
<img src="https://i1.ytimg.com/vi/iYhOU9AuaFs/hqdefault.jpg"  width="500" />
</a>

## Penggunaan Null Safety

Pertama jika kamu ingin menggunakan fitur `null safety` pastikan di berkas **pubspec.yaml**, pastikan versi minumum `sdk` yang digunakan adalah versi `2.12`

```yaml
environment:
  sdk: '>=2.12.0 <3.0.0'
```
Setidaknya ada `3 operator` yang bisa kamu gunakan untuk menggunakan fitur null safety, bisa dilihat di tabel bawah ini:
<br/>

| Operator | Nama     | Description                |
| :-------- | :------- | :------------------------- |
| ? | Nullable | Digunakan untuk mendeklarasikan bahwa sebuah variable boleh bernilai null |
| ! | Bang Operator | Digunakan untuk mendeklarasikan sebuah variable tidak boleh null |
| late | First Read | Mendeklarasikan bahwa sebuah variable baru pertama kali di inisialisasi dan biasanya digabung dengan final |

<br/>
Oke mari kita bahas satu persatu

### Nullable

Langsung saja ke contoh kode
```dart
String? warnaFavorite = null;
int? ukuranBaju;
```
Pemberian `tanda tanya (?)` digunakan untuk mendeklarasikan bahwa sebuah variable boleh bernilai `null`.

### Bang Operator
Coba tuliskan kode berikut di text editor kamu
```dart
main(List<String> args) {
  String? name = null;

  checkName(name); //ERROR PADA COMPILER
}

checkName(String name) {
  if (name == null) {
    print("Name is null");
  } else {
    print("Name is not null");
  }
}
```
Bisa dilihat bahwa terdapat `error` pada compiler karena kita mencoba mengakses sebuah variable yang bernilai null, sedangkan parameter pada function `checkName` bertipe `String` sedangkan variabel yang kita masukkan bertipe String? alias String `null`.

```dart

 checkName(name!);
 
```
 Untuk mengatasi error ini, kita bisa menggunakan `bang operator (!)`, tanda seru tersebut kita memaksa variabel null menjadi `non nullabel`, Dengan demikian kita memberi tahu kepada compiler bahwa variabel tersebut ada jaminan tidak akan null .

❗ Note : Gunakan bang operator (!) jika kamu yakin 100 % bahwa variabel tidak akan null alias akan ada nilainya.

![Screenshoot](assets/null.png)
Berikut contoh jika kamu tetap menggunakan bang operator (!), tapi nilainya tetap null.

### Late

Jika kamu ingin memberikan nilai kepada suatu variabel itu nanti, maka kamu bisa menggunakan `keyword late`. Berbeda dengan penggunaan nullable, keyword late yang dipasang ke variabel akan memberi tahu kepada compiler bahwa variabel tersebut tidak bernilai null tetapi akan dinisialisasi nanti.
Kok keknya sama aja ya ? Oke kita langsung code

```dart
late String nama;
print(nama) //The late local variable 'data' is definitely unassigned at this point
```
Bisa dilihat bahwa kode di atas akan menampilkan pesan error karena variabel yang seharusnya diinisasi nanti tapi belum diinisiasi dan langsung di cetak sehingga menghasilkan output error, berbeda dengan `nullabel` yang masih bisa menampilkan null.

Mengutip dari seredata.com bahwa
<br/>
Keyword `late` mempunyai 2 efek, yaitu:
1. Dart Analyzer tidak akan meminta kita untuk menginisialisasi nilai awal dari variabel yang non-nullable.
2. Dart runtime akan malas (lazy) menginisialisasi variabel late, sebagai contoh: jika ada instance variabel non-nullable harus dikalkulasi, maka dengan menambahkan keyword late akan mendelay kalkulasi tersebut sampai penggunaan pertama sekali variable tersebut.
<br/>
Oke mari kita contohkan

```dart

main() {
  late final value = getValue();
  print('Loading....'); //output : Loading....
  print(value);
  //output : Get Value dipanggil
  //output: Value is Here
}

String getValue() {
  print("Get value dipanggil");
  return "Value is here";
}
```

Berikut output yang tidak menggunakan keyword late
<br/>

![Screenshot](assets/late.png)

<br/>
Baik sekian materi tentang Null Safety, Bagaimana menyenangkan bukan ?
<br/>

![Gif](assets/ynkts.gif)
<br/>
Sampai berjumpa di lain waktu, tetap pantau anbidev supaya kamu lebih jago lagi dalam mengoding.
<br/>
