+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-09-20T17:00:00Z
description = "Penggunaan pengkondisian Switch pada Bahasa C"
series = "Dasar C"
shortcode = "Switch Case"
status = "publish"
sumber = ["https://www.programiz.com/c-programming/c-switch-case-statement", "https://techdifferences.com/difference-between-if-else-and-switch.html"]
tags = ["c"]
title = "Switch Case pada C"
tutorials = ["c"]
type = []
url = "switch-case-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada artikel kali ini kita akan belajar tentang flow control selanjutnya, yakni Switch Statement. `Switch` termasuk kedalam pengkondisian yang digunakan untuk membandingkan nilai dari sebuah variable dengan beberapa nilai. Setiap nilai yang dibandingkan dengan variable kita sebut dengan `case`, dan variable tersebut diuji secara bergantian (switch). Jika ditemukan nilai yang sama (nilainya `TRUE`) maka kode akan dijalankan.

### Syntax

Syntax yang digunakan pada `Switch ... case` adalah sebagai berikut:

```c
switch (expression)
{
    case nilai1:
      // statements yang akan dijalankan jika expression == nilai1
      break;

    case nilai2:
      // statements yang akan dijalankan jika expression == nilai2
      break;
    .
    .
    .
    default:
      // statement yang akan dijalankan jika tidak ada nilai yang sama
}
```

### Flowchart

Anbi gambarkan flowchart untuk switch biar lebih jelas ya

![Switch Case](/post/switch.png "Switch Case")

### Cara Kerja

Lalu bagaimana cara kerja switch case diatas? Bisa Kita lihat, `expression` diatas dievaluasi satu kali dan dibandingkan dengan nilai yang ada pada setiap case.

* Jika ada nilai dari salah satu case yang sesuai dengan `expression` maka statements didalam case tersebut akan dijalankan. Contohnya, jika `case` kedua yang nilainya sama, maka kode yang berada didalam case kedua yang dijalankan hingga statement break. Kita sudah belajar tentang break pada artikel sebelumnya, sehingga kita tahu pengkondisian akan berhenti.
* Namun jika **tidak ada nilai** dari semua case diatas yang nilainya sesuai, maka statment default akan dijalankan. Statement default ditulis di akhir blok kode.
* Jika kita tidak menggunakan `break`, semua baris program akan dieksekusi
* `Default` ini sifatnya opsional, kita boleh tidak memberikan statement default jika memang tidak diperlukan

### Contoh Program

Untuk lebih jelas lagi mari kita coba kode program dibawah

```c
#include <stdio.h>

int main() {
    int x = 2;
    
    switch (x) {
        case 1:
            printf("Nilai x = 1");
            break;
        case 2:
            printf("Nilai x = 2");
            break;
        default:
            printf("Nilai x bukan 1 ataupun 2");
            break;
    }
    
    return 0;
}
```

Output:

```sh
Nilai x = 2
```

### Penjelasan

* Kita deklarasikan terlebih dahulu variable yang akan diuji. Disini Anbi menggunakan `x` dengan tipe data `integer` dan bernilai `2`
* Selanjutnya kita gunakan `variable x` sebagai expression untuk switch
* Perhatikan `case 1`, artinya jika nilainya adalah 1, maka jalankan statement untuk mencetak "Nilai x = 1". Karena nilai x tidak sama dengan 1, maka akan dilewati
* Lalu pada `case 2`, artinya jika nilainya adalah 2, maka jalankan statement untuk mencetak "Nilai = 2". Karena x bernilai 2, maka akan mencetak "Nilai x = 2"
* Karena ada break pada statement di case 2, maka kode tidak akan dilanjutkan dan akan keluar dari switch case.

### Penutup

Jika diperhatikan kembali, pengkondisian `switch case` ini hampir mirip dengan pengkondisian `if ... else if ... else`. Lalu kapan kita menggunakan statement switch dan kapan kita menggunakan statement if else? Kita perlu ketahui beberapa perbedaanya terlebih dahulu:

* Statement `If Else` dapat digunakan untuk tipe data integer, character, pointer, floating point dan boolean. Sedangkan Statement `Switch case` hanya bisa digunakan untuk tipe data integer dan character.
* Statement `Switch Case` hanya digunakan untuk mengecek data yang bernilai sama. Sedangkan `If Else` dapat juga digunakan untuk Logical Expression seperti AND, OR, dan NOT
* Dalam segi kecepatan mungkin tidak akan terlihat perbedaanya tergantung jumlah kasus yang akan dievaluasi. Mungkin `Switch Case` lebih cepat dibanding dengan `If Else`. Pada Statement `If Else`, program akan menjelajahi semua kondisi yang ada. Compiler pada `Switch Case` menggunakan Branch Table yang menghasilkan metode transfer yang lebih cepat. 