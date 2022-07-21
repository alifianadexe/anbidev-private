+++
authors = "hamid"
cover = "/post/web-cepepe.jpg"
date = 2021-02-09T17:00:00Z
description = "Belajar syntax dasar pada Bahasa C++"
series = "Dasar C++"
shortcode = "Basic Syntax"
status = "publish"
sumber = ["https://id.wikipedia.org/wiki/C%2B%2B", "https://www.kaskus.co.id/thread/52ae329a118b46ba228b45af/ask-fungsi-return-0-dalam-bahasa-c/", "https://www.programiz.com/cpp-programming/library-function/iostream/cout"]
tags = ["c++"]
title = "Syntax Dasar C++"
tutorials = ["c++"]
type = ["tutorials", "tutorial"]
url = "syntax-cpp"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada [artikel sebelumnya](https://www.anbidev.com/persiapan-cpp/ "Persiapan Belajar C++"), kita sudah berhasil menginstall aplikasi yang kita butuhkan untuk belajar bahasa C++. Sekarang kita akan mempelajari Syntax dasarnya. Silakan buka text editor sublime (atau kalian bisa menggunakan text editor favorit kalian, ini sifatnya opsional). Kelebihan dari sublime adalah kemampuan autocomplete syntax seperti gambar berikut:

![C++ in Sublime](/post/1_3dzqqtytaypudyux1zbcwg.png "C++ in Sublime")

Dapat dilihat, hanya dengan mengetikkan “io”, kita sudah disuguhkan beberapa pilihan syntax. Kita pilih yang I-Iostream. Ini sifatnya opsional ya, fungsinya hanya agar kita dapat menulis syntax dengan cepat. Pertama kita akan berlatih dengan kode berikut, silakan copy atau tulis sendiri ya.

```c++
#include <iostream>

int main()
{
  // Program Hello World!
  std::cout << "Hello World!" << std::endl;
  return 0;
}
```

Berikut penjelasan dasar dari kode diatas.

<br>

### Line 1 - Preprocessor Directive

<hr>

```c++
#include <iostream>
```

Preprocessor directives adalah line didalam program yang dimulai dengan karakter `#`. Line ini digunakan untuk meminta compiler untuk memproses beberapa program lain sebelum proses compile. Pada bagian `#include <iostream>`, berarti preprosesor directives  memproses kode dari iostream. Disini iostream digunakan untuk menghasilkan input dan output pada Program C++.

<br>

### Line 2 - Line kosong

<hr>

Line yang kosong akan diabaikan dan tidak akan dieksekusi oleh program. Kita perlu memberikan ini agar kode kita tetap bersih dan mudah dibaca ya.

<br>

### Line 3 - Main Function

<hr>

```c++
int main ()
```

Selanjutnya kita ke inti program, yaitu bagian fungsi utama. Suatu program C++ dapat berisi banyak fungsi, dan harus memiliki sebuah fungsi utama (main function). Fungsi utama ini digunakan sebagai fungsi yang akan dieksekusi pada awal program ini dijalankan.

<br>

### Line 4 - Bracket {

<hr>

```c++
{
```

Merupakan isi dari fungsi dan digunakan `sebagai awalan program`. Maksdunya, program yang akan ditulis didalam `int main()` akan diawali atau dibuka menggunakan tanda kurung kurawal `{` ini.

<br>

### Line 5 - Comment

<hr>

```c++
// Program Hello World!
```

Comment tidak akan dieksekusi oleh program. Biasanya digunakan sebagai dokumentasi atau penjelasan singkat tentang baris kode dibawahnya. Bisa juga digunakan agar sebuah baris kode tidak dijalankan. Ada dua cara menulis Comment pada C++, yaitu:

* **Single-line** comments, dimulai dengan `//`, dan berlanjut hingga karakter terakhir di baris tersebut.
* **Multi-line** comments, dimulai dengan `/*` dan diakhiri dengan `*/` . Dapat diakhiri langsung dalam satu barus atau bisa juga di baris berikutnya.

<br>

### Line 6 - Statement

<hr>

```c++
std::cout << "Hello World!" << std::endl;
```

Statement adalah intruksi dari sebuah program. Pada kode diatas, intruksinya adalah untuk menulis text `Hello World!` pada console.

#### std::

Merupakan akronim dari _standart_ yang berasal dari _C++ Standart Library_. Lalu operator `::` adalah `operator scope`. Ini memberitahu compiler class atau namespace mana yang perlu dicari untuk indentifier.

#### cout

Pada `cout`, disini `c` merujuk pada `character` dan `out` merujuk pada `output`, lalu cout dapat diartikan `character out`. Digunakan bersama dengan operator insertion `<<`.

#### "Hello World!"

Adalah text atau character yang akan ditampilkan. Disini tipe data yang digunakan adalah string.

#### endl

Fungsinya untuk statements tersebut dan melanjutkan ke baris baru.

#### semicolon

Titik koma atau semicolon `;` digunakan sebagai akhir dari baris.

<br>

### Line 7 - Return

<hr>

```c++
return 0;
```

Default dari `return` adalah `0`. Artinya fungsi telah selesai dengan baik. Fungsi mungkin saja mengembalikan nilai lain dalam bentuk integer.

<br>

### Line 8 - Bracket }

<hr>

```c++
    }
```

Merupakan isi dari fungsi dan digunakan `sebagai akhiran program`. Maksudnya, blok program yang akan ditulis didalam `int main()` akan diakhiri atau ditutup menggunakan tanda kurung kurawal `}` ini.

<br>

### Kesimpulan

<hr>

Sekian materi C++ atau CPP kali ini. Sudah jelas ya, kalau masih bingung bisa tulis pertanyaan ke kolom komentar atau ke social media AnbiDev. Terimakasih, semoga bermanfaat, sampai jumpa di artikel selanjutnya.