+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-04-22T17:00:00Z
description = "Belajar menjalankan fungsi input dan output pada C"
series = "Dasar C"
shortcode = "Input Output"
status = "publish"
sumber = []
tags = ["c"]
title = "Input dan Output pada C"
tutorials = ["c"]
type = ["tutorial"]
url = "input-output-c"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
`Input` adalah proses yang kita gunakan untuk memasukkan data. Sedangkan `Output` adalah proses untuk menampilkan data. Disini kita akan belajar menggunakan beberapa fungsi input dan output yang ada pada Bahasa C.

<br>

### Variable dan Format Specifier

<hr>

Sebelum mempelajari fungsi-fungsi pada input dan output, pertama kita berkenalan sedikit dengan Variable dan Format Specifier.

<br>

#### Variable

<hr>

`Variable` adalah lokasi untuk menyimpan data. Variable didefinisikan dengan nama yang berbeda antar satu variable dengan variable lainnya. Pada pemrogaman C, variable didefinisikan dengan tipe datanya juga. Kita akan belajar variable di artikel lainnya. Berikut contoh variable

```c
int number;
char name;
```

<br>

#### Format Specifier

<hr>

Format specifier digunakan pada proses input dan output untuk memberitahu compiler tipe data apa yang  digunakan variable. Contoh format specifier yang sering digunakan adalah `%c`, `%d`, `%f`.

<br>

### Output

<hr>

Pertama kita akan belajar output terlebih dahulu. Fungsi yang akan kita pelajari adalah `printf()` dan `putchar()`

<br>

#### printf

<hr>

Printf terdiri dari kata **print** dan **f**, `print` disini dapat diartikan `mencetak`, sedangkan `f` adalah singkatan dari `formatted`. Contoh penerapan printf adalah

```c
#include <stdio.h>

int main()
{
    printf("Indonesia Merdeka!");

    return 0;
}
```

Pada contoh diatas kita tidak menggunakan variable dan format specifier, berikut contoh jika kita menggunakan variable dalam kode kita

```c
#include <stdio.h>

int main()
{
    int year = 1945; // variable
    printf("Tahun %d", year);

    return 0;	
}
```

<br>

#### puts()

<hr>

Berbeda dengan printf, `puts()` digunakan jika kita hanya ingin output berupa text biasa tanpa adanya angka. Dengan menggunakan `puts()` juga kita langsung diberikan `\n`. Contoh penerapannya adalah sebagai berikut:

```c
#include <stdio.h>

int main () {
   puts("Anbi Developer");
   
   return(0);
}
```

Anbi kasih saran, jika ada data yang ingin ditampilkan, kita menggunakan printf. Fungsi puts() ini digunakan hanya jika output kita hanya text saja, seperti ini

```c
#include <stdio.h>
#include <string.h>

int main () {
   char name[15];

   strcpy(name, "Anbi Developer");

   puts(name);
   
   return(0);
}
```

Jika kita jalankan, maka akan mengeluarkan output `Anbi Developer` dan juga sudah diberikan satu line baru.

<br>

#### putchar()

<hr>

Sama seperti dua fungsi diatas, bedanya putchar() hanya akan menampilkan satu karakter. Dalam kasus kamu ingin menampilkan lebih dari satu karakter, maka Anbi sarankan untuk menggunakan perulangan. Contoh kode putchar() adalah sebagai berikut:

```c
#include <stdio.h>
  
int main()
{
    char huruf = 'A';
  
    putchar(huruf);
  
    return (0);
}
```

<br>

### Input

<hr>

Input adalah proses memasukkan data, disini kita akan menggunakan input keyboard (text yang kita ketik melalui keyboard). Ada beberapa fungsi untuk melakukan input:

<br>

#### scanf()

<hr>

Fungsi ini terdiri dari kata `scan` yang artinya memindai dan `f` yang merupakan singkatan dari formatted. Fungsi ini digunakan jika ada format data tertentu yang akan kita masukkan ke aplikasi, contohnya bilangan bulat dan pecahan. Disini kita juga menggunakan Format Specifier dalam susunan kodenya, seperti pada kode berikut:

```c
#include <stdio.h>

int main ()
{
	char nama[80];
	int umur;
	
	printf ("Nama: "); scanf ("%s", nama);  
	printf ("Umur: "); scanf ("%d", &umur);
	
	return 0;
}
```

Outputnya

```sh
Nama: Anbi
Umur: 2
```

Dalam penggunaan `scanf()`, program akan berhenti saat menemukan `\n` atau `new line` (input berupa enter atau spasi). Untuk mengatasikan kita bisa menggunakan kode seperti berikut:

```c
#include <stdio.h>

int main ()
{
	char nama[80];
	int umur;
	
	printf ("Nama: "); scanf ("%[^\n]s", nama);  
	printf ("Umur: "); scanf ("%d", &umur);
	
	return 0;
}
```

Outputnya:

```sh
Nama: Anbi Developer
Umur: 2
```

<br>

#### gets()

<hr>

Berbeda dengan scanf(), fungsi `gets()` dapat melakukan input data satu kalimat lengkap dengan spasi. Contoh penggunaan gets() adalah sebagai berikut:

```c
#include <stdio.h>
  
int main()
{
    char name[10];
  
    printf("Nama: ");
    gets(name);
    printf("Namanya adalah %s\n", name);
  
    return 0;
}
```

Outputnya adalah:

```sh
Nama: Anbi Developer
Namanya adalah Anbi Developer
```

Bisa kita lihat, `gets()` tidak memerlukan format seperti `scanf()`. Anbi sarankan gunakan `gets()` jika tidak memasukkan format apapun, dan gunakan `scanf()` jika ada format tertentu yang dimasukkan.

<br>

### Kesimpulan

<hr>

Oke sekian artikel tentang input output hari ini, Anbi akan bahas lebih dalam tentang variable, tipe data dan format specifier pada artikel berikutnya. Terimakasih, semoga bermanfaat.