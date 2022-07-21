+++
authors = "Hamid"
categories = []
cover = ""
date = 2022-02-17T17:00:00Z
dateUpdate = 2022-02-17T17:00:00Z
description = "Pengenalan Pointer pada Data Struktur"
draft = true
series = ""
status = "draft"
tags = ["blog", "data structure"]
title = "Data Struktur: Pointer"
type = ["blog"]
url = "pengertian-pointer"
[author]
images = ""
name = ""

+++
Halo, sudah lama Anbi tidak posting artikel karena ada beberapa kegiatan di real-life. Untuk sementara ini Anbi sedang pada masa pemulihan dari Covid-19. Dan sekaligus Anbi ada ujian Data Struktur akhir bulan ini, jadi artikel tentang Blockchain diberhentikan sementara. Anbi akan menulis artikel tentang Data Struktur terlebih dahulu, mengingat Anbi sendiri sebenernya masih belum paham betul dengan mata kuliah ini. Ada juga temen kuliah yang minta dibuatkan artikel untuk mendukung efektifitas belajar. Semoga artikel ini bisa jadi sarana belajar yang baik dan semoga nilai ujian kita bisa memuaskan.

Artikel ini selanjutnya akan berisi konsep dasar dari `Data Struktur` yang mana akan sering kita gunakan dalam membuat program seperti array, stack, queue, graph dan tress. Anbi harap untuk kedepannya kita bisa mengimplementasikan materi data struktur dengan mengestimasi kompleksitas penggunaan tipe data, sehingga program yang kita buat bisa lebih efektif. Anbi menggunakan bahasa pemrogaman `C` sebagai dasar bahasa pemrogaman. Anbi akan mulai dengan beberapa review materi, untuk materi awal adalah `Pointer`.

<br>

### Pengertiaan Pointer

<hr>

Setiap variable pada Bahasa C memiliki nama (`name`) dan nilai (`value`). Saat variable dideklarasikan, komputer akan mengalokasikan `blok memori` untuk menyimpan nilai (ukuran memori bergantung pada tipe data yang digunakan). Contohnya `int x = 10;` Ukuran integer mungkin berbeda dengan satu sistem dengan sistem lain. Pada zaman dulu, saat processor masih `16-bit`, int dialokasikan `2 bytes` pada Bahasa C. Sekarang kebanyakan dialokasikan sebesar `4 bytes` baik pada sistem `32-bit` maupun `64-bit`(GCC). Pada 64-bit juga sudah banyak yang mengalokasikan `8 bytes`. Saat statement `int x = 10;` dieksekusi, compiler akan menyiapkan alokasi memori untuk menyimpan `nilai 10` dan juga `variable x` beserta `alamatnya`. Jadi, setiap variable di Bahasa C memiliki nilai dan juga `lokasi memori`.

Pointer adalah variable yang berisi lokasi memori dari variable lain. Maka dari itu, pointer adalah variable yang merepresentasikan `lokasi dari data item` seperti variable atau elemen array. Dua operator yang digunakan oleh pointer adalah `&` (alamat operator) dan `*` (dereferensi operator). Pointer sering digunakan pada Bahasa C, dengan kegunaannya sebagai berikut:

* Digunakan untuk mentransfer data melalui suatu fungsi
* Digunakan sebagai alternatif untuk mengakses elemen didalam array
* Digunakan untuk membuat struktur data yang kompleks seperti tree, linked-list, stack, queue, dan graph
* Digunakan untuk mengalokasikan memori secara dinamis dari sebuah variable

<br>

### Penulisan Pointer

<hr>

Untuk mendeklarasikan variable Pointer adalah sebagai berikut:

```sh
tipe_data *nama_pointer
```

Contoh penulisan Pointer:

```sh
int *pointer_number
char *pointer_character
float *pointer_float_num
```

Pada statement diatas, variable pointer dideklarasikan menunjuk ke variable yang memiliki tipe data tertentu. Walaupun pointer menunjuk ke tipe data yang berbeda, mereka akan tetap menempati jumlah ruang memori yang sama (tergantung pada platform apa kode akan dijalankan).

Jika kita mendeklarasikan

```sh
int x;
int *px;
```

Maka `x` adalah integer dan `px` adalah pointer yang `menunjuk` integer.

Contoh:

```sh
px = &x;
```

Maka `&x` akan mengembalikan alamat dari `x` dan menjadi nilai dari variable `px`. Untuk memasukkan nilai dari `variable x` kita bisa mendeklarasikan variable dengan `x=10;` atau menggunakan pointer `*px=10;`.

### Program Pointer

Contoh program sederhana dalam bahasa C:

```c
#include <stdio.h>

int main()
{
    int a  = 10;
	int *p = &a;

	printf( "%d\n", *p );

	a  = 15;
	*p = 20;

	printf( "%d\n", a );

    return 0;
}
```

Output dari program adalah

```sh
10
20
```

Penjelasan program dan output:

* Program dimulai dengan mendeklarasikan variable `int a = 10;` yang artinya variable `a` adalah variable yang bertipe data `integer` dan nilainya `10`.
* Selanjutnya Anbi membuat variable `pointer p` yang berisi `&a` atau alamat dari variable `a`.
* Jika kita cetak variable `*p` atau dereferensi p, maka outputnya adalah isi dari variable a. Hal ini disebabkan isi dari `*p` adalah alamat dari a.
* Variable `a` didefinisikan ulang, dengan nilai `15`.
* Variable `*p` didefinisikan ulang, dengan nilai `20`.
* Karena `*p` didefinisikan ulang, maka nilai dari variable `a` akan berubah (sama seperti point ketiga), sehingga saat mencetak nilai dari `a` outputnya adalah `20`.

### Penutup

Sekian review materi tentang pointer hari ini, semoga mudah dimengerti. Terimakasih.