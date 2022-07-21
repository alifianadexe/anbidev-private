+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-04-26T17:00:00Z
dateUpdate = 2021-04-26T17:00:00Z
description = "Mari belajar tipe data dasar yang sering kita gunakan"
series = "Dasar C"
shortcode = "Tipe Data"
status = "publish"
sumber = []
tags = ["c"]
title = "Tipe Data pada C"
tutorials = ["c"]
type = ["tutorial"]
url = "tipe-data-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++

Pada bahasa pemrogaman setiap data memiliki tipe. Hal ini diperlukan agar programmer dapat menentukan penggunaan sebuah data agar data tersebut dapat dibaca oleh `compiler` atau `interpreter` dengan baik. Misalkan Anbi punya data yang berupa angka (1, 2, 3), maka akan Anbi tentukan jika data tersebut bertipe data angka (integer atau float).

Beberapa contoh tipe data yang support dengan bahasa pemrogaman C adalah `integer`, `float`, dan `char`. Tipe data ini juga membatasi penggunaan data oleh variable atau fungsi, misalnya tipe data integer tidak akan bisa menerima nilai berupa alfabet. Pada Bahasa C, tipe data diklasifikasikan menjadi Basic types, Enumerated types, The type void, Derived types. Di artikel ini kita akan bahas `Basic Types` saja.

<br>

### Basic types

<hr>

Berikut adalah table yang berisi tipe data dasar yang paling sering digunakan

|  Type  | Size (byte) | Format Specifier |      Contoh       |
| :----: | :---------: | :--------------: | :---------------: |
|  char  |      1      |      %c, %s      |      a, b, c      |
|  int   |      2      |      %i, %d      |     -1, 0, 3      |
| float  |      4      |        %f        | 0.5, 2.35, 14.456 |
| double |      8      |       %lf        |      3,1428       |

<br>

### char

<hr>

Keyword char digunakan untuk mendeklarasikan tipe data yang memuat nilai berupa `karakter`, contohnya adalah sebagai berikut:

```c
#include <stdio.h>

int main() {
    char huruf = 'Y';

    printf("%c", huruf);
	return 0;
}
```

Output :

```sh
Y
```

Dengan menggunakan kode diatas hanya akan mengeluarkan satu huruf saja. Untuk menyimpan `kalimat` atau `string`, maka harus kita ubah terlebih dahulu kodenya menjadi sebagai berikut:

```c
#include <stdio.h>

int main() {
    char kalimat[10] = "AnbiDev";

    printf("%s", kalimat);
	return 0;
}
```

Output:

```sh
AnbiDev
```

Terlihat ya perbedaanya, di kode pertama kita menggunakan `tanda petik satu` untuk nilainya dan di kode kedua menggunakan `tanda petik dua`, ditambah juga menggunakan array. Di kode kedua juga Anbi menggunakan format specifier `%s` sebagai ganti `%c` di kode yang pertama.

<br>

### int

<hr>

Integer atau disingkat `int` adalah semua angka baik itu negatif, netral, dan positif tapi tidak desimal. Contohnya adalah -100, -5, 0, 5, 100. Berikut cara mendeklarasikan variable menggunakan int:

```c
#include <stdio.h>

int main() {
    int tanggal = 17;

    printf("Tanggal %i", tanggal);

    return 0;
}
```

Output:

```sh
Tanggal 17
```

Kita juga bisa mendeklarasikan dua variable sekaligus jika tipe datanya sama

```c
#include <stdio.h>

int main() {
    int tanggal = 17;
    int bulan = 8;

    printf("Tanggal %i, Bulan %d", tanggal, bulan);

	return 0;
}
```

Output:

```sh
Tanggal 17, Bulan 8
```

Bisa kita perhatikan, pada variable tanggal kita menggunakan format specifier `%i` sedangkan pada variable bulan kita menggunakan format specifier `%d`. Pada `printf()` tidak ada perbedaan antara keduanya. Namun ketika menggunakan `scanf()` dan menginput nilai dengan 0 didepan angka (`011`, `012`, `013`), maka akan terlihat perbedaannya. Pada `%d` diasumsikan sebagai basis 10 (`desimal`) sedangkan `%i` diasumsikan sebagai basis 8 (`oktal`). Kita coba saja langsung

```c
#include <stdio.h>

int main()
{
    int a, b;

    printf("Angka pertama: ");
    scanf("%d", &a);

    printf("Angka kedua: ");
    scanf("%i", &b);

    printf("\nNilai desimal dari angka pertama adalah: %i", a);
    printf("\nNilai oktal dari angka kedua adalah: %i", b);

    return 0;
}
```

Output (Anbi memberikan input `011`):

```sh
Angka pertama: 011
Angka kedua: 011

Nilai desimal dari angka pertama adalah: 11
Nilai oktal dari angka kedua adalah: 9
```

<br>

### float dan double

<hr>

Bilangan `riil` atau `real` dalam matematika menyatakan bilangan yang bisa ditulis dalam `bentuk desimal` contohnya 0.5, 3.14, 6.456. Dalam bahasa C, bilangan real ini dapat disimpan pada variable yang tipe datanya `float` dan `double`. Perlu diperhatikan dalam penulisan tanda koma pada angka, disini kita menggunakan numeral dalam bahasa inggris (Menggunakan titik untuk desimal, bukannya koma).

Lalu apa bedanya jika kita menggunakan float atau double untuk bilangan desimal? Jawabannya adalah `double dua kali lebih lebih teliti dari float`. Float adalah hanya memiliki ketepatan `7 decimal digits`, sedangkan double memiliki ketepatan hingga `15 decimal digits`. Contoh kode penggunaan kedua tipe data ini adalah:

```c
#include <stdio.h>

void pifloat()
{
   float pi = 22.0/7.0;
   printf("=== FLOAT ===\n");
   printf("%.15lf\n", pi);
   printf("%lf\n", pi);
}

void pidouble()
{
   double pi = 22.0/7.0;
   printf("=== DOUBLE ===\n");
   printf("%.15lf\n", pi);
   printf("%lf\n", pi);
}

int main()
{
   pifloat();
   printf("\n");
   pidouble();

   return 0;
}
```

Output:

```sh
=== FLOAT ===
3.142857074737549
3.142857

=== DOUBLE ===
3.142857142857143
3.142857
```

Bisa kita lihat, ada perbedaan antara penggunaan float dan double pada desimal ke-tujuh. Anbi cek pada kalkulator, hasil dari 22.0 dibagi dengan 7.0 adalah `3,142857142857142857`. Disini bisa dilihat ketepatan milik Double lebih baik. Lalu apakah Anbi perlu menggunakan double saja dan tidak menggunakan float? Jawabannya adalah kita harus menggunakan tipe data yang sesuai dengan variable dan fungsi yang kita gunakan. Jangan sampai kita menggunakan banyak memori hanya untuk output sederhana.

Sekian artikel tentang tipe data dasar kali ini, semoga teman-teman tidak bingung. Terimakasih, semoga bermanfaat
