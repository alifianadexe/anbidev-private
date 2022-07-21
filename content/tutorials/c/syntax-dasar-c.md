+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-03-08T17:00:00Z
description = "Mari belajar struktur dan syntax dasar dari Bahasa C"
series = "Dasar C"
shortcode = "Struktur"
status = "publish"
sumber = ["https://www.tutorialspoint.com/cprogramming/c_basic_syntax.htm", "https://www.codesdope.com/blog/article/int-main-vs-void-main-vs-int-mainvoid-in-c-c/"]
tags = ["c"]
title = "Syntax Dasar C"
tutorials = ["c"]
type = ["tutorial"]
url = "syntax-dasar-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada artikel [sebelumnya ](https://www.anbidev.com/persiapan-c/ "Persiapan C")kita sudah menyiapkan IDE hingga bisa kita gunakan untuk menjalankan aplikasi yang ditulis dalam Bahasa C. Sebelum belajar lebih jauh, kita perlu ketahui struktur dasar dari syntax pada bahasa ini. Kita akan mulai dengan aplikasi sederhana, **Hello World!**

<br>

## Kode

<hr>

Silakan ketik kode berikut ini, Anbi sarankan diketik ya bukan di copy paste biar kita juga terbiasa dalam menulis kode.

```c
#include <stdio.h>

int main(void){ 
	// Program Pertama Hello World!
  	printf("Hello World!\n");
    
	return 0;
}
```

Untuk memastikan tidak ada error, kita compile dan run. Jika tidak ada error, maka selamat kamu sudah bisa melanjutkan ke tahap selanjutnya. Jika masih error, silakan dicek ulang kodenya ya.

<br>

## Penjelasan

<hr>

Akan Anbi jelaskan baris per baris dari program yang sudah ditulis tadi.

<br>

### Baris 1 - Preprocessors

<hr>

```c
#include <stdio.h>
```

Baris pertama ini disebut dengan `Preprocessors` , berfungsi untuk mengimport library yang dibutuhkan. Disini kita menggunakan library `stdio.h` yang fungsinya agar kita bisa mendeklarasikan fungsi dasar seperti input dan output. Perintah preprocessors diawali dengan hashtag `#` , dan ditempatkan diawal program. Beberapa prepocessor yang sering digunakan adalah #include, #define, #undef, #if, #endif

<br>

### Baris 2 -Kosong

<hr>

Baris yang kosong tidak akan dieksekusi oleh program. Kita berikan baris kosong agar kode yang kita tulis bersih dan mudah dibaca.

<br>

### Baris 3 - Main Function

<hr>

```c
    int main()
```

Perlu diperhatikan, `main()` disini merupakan sebuah fungsi dan merupakan fungsi utama. Program C yang akan kita tulis dapat memuat banyak fungsi dan satu fungsi utama. Fungsi utama ini adalah fungsi yang akan kita jalankan pertama kali. Lalu `int` disini artinya, secara default fungsi main() akan mengembalikan nilai integer atau bilangan bulat pada akhir program. Biasanya profgram akan mengembalikan nilai 0. `Nilai 0` adalah standar dari “successful execution of the program”.

Ada juga `void main()` yang artinya fungsi main tidak mengembalikan nilai apapun. Penerapannya adalah saat kode kita simpel dan tidak perlu berhenti sebelum akhir baris, atau kodenya hanya coba-coba, maka kita bisa menggunakan void.

Ada juga yang hanya menuliskan `main` saja, hal ini disebabkan pada `C89` secara default akan mengembalikan integer, artinya mau nulis int atau tidak hasilnya sama saja. Namun pada `C99`, tidak boleh dilakukan dan harus menggunakan int main.

<br>

### Baris 3 - Bracket

<hr>

    {

Masih dibaris ketiga, setelah fungsi ada kurung kurawal `{`, atau kadang disebut juga bracket. Fungsinya adalah sebagai blok pembuka kode. Jadi, kode dari fungsi `int main()` berada didalam bracket tersebut.

<br>

### Baris 4 - Comment

<hr>

    // Program Pertama Hello World!

Baris ini disebut `Comment`atau komentar. Comment tidak akan dieksekusi oleh program. Comment berfungsi untuk dokumentasi sederhana untuk kode yang kita tulis. Bisa berisi kegunaan kode atau atau catatan untuk perubahan yang ditulis. Selain dokumentasi, Comment juga bisa digunakan untuk menutup kode atau baris program yang sedang tidak ingin digunakan.

Ada dua cara menuliskan komentar

* **Single-line** comments, dengan menggunakan tanda `//` maka seisi text atau kode program yang ada dibelakangnya hingga akhir dari baris tersebut akan diabaikan. Contohnya adalah

```c
// Line 3
```

* **Multi-line** comments, penulisan komentar ini dapat digunakan pada banyak baris sekaligus. Dengan cara menulis `/*` dan ditutup dengan `*/`. Contohnya adalah

```c
/* 
Line 4
Line 5
...
*/
```

<br>

### Baris 5 - Statement

<hr>

```c
    printf("Hello World!\n");
```

Statement adalah instruksi dari program. Statement ini ditulis di dalam fungsi.

#### printf

<hr>

Pada contoh diatas kita menggunakan kode `printf`. Kode printf digunakan untuk mencetak text, disini yang dicetak adalah text yang ada di dalam kurung, yaitu `“Hello World!/n”`.

#### Escape Squences (/n)

<hr>

Perhatikan tanda /n tidak tampil pada saat proses Compile & Run. Tanda backslash / ini disebut dengan Escape Character, dimana nantinya kode printf akan melakukan sesuatu dari tanda ini. Untuk tanda /n sendiri fungsinya adalah memberikan new-line, atau menulis baris baru tepat setelah tanda ini. Ada banyak contoh lain dari Escape Squences, akan kita bahas sambil jalan tiap artikel saja.

#### Semicolon (;)

<hr>

Tanda semicolon atau titik koma berguna untuk menutup satu baris statement. Jangan lupakan tanda ini ya, sebelum adanya IDE yang canggih sering kali programmer dibuat stress karena hanya lupa menulis titik koma.

<br>

### Baris 6 - Kosong

<hr>

Sama seperti baris kedua, kita beri ruang agar kode kita terlihat rapi

<br>

### Baris 7 - Return Value

<hr>

```c
    return 0;
```

Kita sudah bahas diawal tentang ini. Karena menggunakan `int main()` maka program kita akan mengembalikan nilai integer, dan 0 adalah standart untuk program yang dieksekusi dengan sukses. Return ini juga merupakan statement, sehingga perlu adanya titik koma di akhir baris.

<br>

### Baris 8 - Bracket

<hr>

```c
}
```

Bracket ini adalah blok penutup program dari fungsi `int main()`. Dituliskan dengan kurung tutup kurawal.

<br>

### Kesimpulan

<hr>

Sekian artikel tentang syntax dasar Bahasa C, jika masih belum jelas bisa menanyakan ke kolom komentar. Terimakasih