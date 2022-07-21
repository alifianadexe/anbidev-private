+++
authors = "Hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-05-30T17:00:00Z
description = "Perulangan while dalam pemrogaman C"
series = "Dasar C"
shortcode = "While Loop"
status = "publish"
sumber = []
tags = ["c"]
title = "Perulangan C : While Loop"
tutorials = ["c"]
type = ["tutorial"]
url = "c-perulangan-while"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada pemrogaman kita perlu mengenal istilah `program control`. Apa itu Program Control? Program Control atau kadang juga disebut `Flow Control` adalah istilah pemrogaman untuk instruksi yang akan diberikan kepada mesin atau komputer saat program yang dijalankan bertemu suatu kondisi tertentu. Anbi bahas program kontrol tentang pengkondisian dan perulangan. Pada artikel ini kita akan melanjutkan materi tentang perulangan kemarin.

### Pengenalan

Perulangan, atau dikenal juga dengan `looping`, adalah struktur pemrogaman yang digunakan untuk `mengulang` kode program selama sebuah kondisi terpenuhi. Kode program akan diulang sekian kali dan berhenti saat kondisinya sudah tidak terpenuhi. Sebelumnya kita belajar tentang perulangan for, sekarang kita akan belajar tentang `while` dan `do while`.

Dalam bahasa Indonesia, while kita bisa terjemahkan sebagai “selagi, sementara, seraya”. Penerapannya dalam kalimat sehari-hari adalah: selagi nilainya lebih dari satu, selagi nilainya masih true, dsb. Intinya hampir sama dengan `for`, tapi perlu kita ketahui perbedaanya agar lebih mudah untuk menentukan penggunaanya.

Perbedaan mendasar dari perulangan For adalah For bisa digunakan saat kita sudah tau `pasti` kapan perulangannya akan berhenti. Misalnya selama x kurang dari 7, ditulis dengan for (i=0; i<7; i++). Nah sedangkan pada while, perulaangannya digunakan selama batas akhirnya belum kita ketahui dengan pasti. Misalnya selagi nilainya masih true, disini kita tidak akan tahu kapan nilainya akan false dan berhenti.

### Penerapan while

```c
while (testExpression) 
{
    // code
}
```

Cara kerja while:

Perulangan while mengevaluasi nilai yang ada didalam tanda kurung, disini Anbi tulis variable `testExpression`. Selama testExpression nilainya `True`, statements atau kode didalam perulangan akan dieksekusi lalu testExpression nya akan dievaluasi kembali. Begitu seterusnya hingga nilainya menjadi False. Saat nilainya `False`, perulangan `berhenti`.

```c
// Print angka dari 1 hingga 10
#include <stdio.h>
int main() {
    int i = 1;
    
    while (i <= 10) {
        printf(" %d ", i);
        i++;
    }
return 0;
}
```

Output:

```sh
1  2  3  4  5  6  7  8  9  10
```

Penjelasan:

Pertama kita deklarasikan nilai dari variable `i`, kita mulai dari angka `1`. Selama nilai `i` kurang dari sama dengan 10, maka hasilnya True. Dan selama hasilnya True maka nilai dari `i` akan diprint ke layar. Lalu nilai dari `i` akan bertambah 1, nilainya akan menjadi 2. Nilai dari `i` sekarang 2 dan masih kurang dari sama dengan 10, maka hasilnya masih True. Akan terus berulangan hingga nilainya False (nilai i lebih dari 10). Maka program akan mengeluarkan angka 1 hingga angka 10.

### Penerapan do while

```c
do
{
   // code
}
while (testExpression);
```

Cara Kerja:

Perulangan `do while` hampir mirip seperti perulangan `while`, perbedaan antara while dan do while adalah code didalam do while dieksekusi setidaknya satu kali. Baru setelah itu testExpression dievaluasi. Berikut contoh program yang menggunakan perulangan do while

```c
// Program menentukan pilihan
#include <stdio.h>
int main() {
    char pilihan = 'y';
    
    do {
        printf("Apakah ingin mengulang? (y/n): ");
        scanf(" %c", &pilihan);
    } while(pilihan == 'y');
    
    return 0;
}
```

Output:

```sh
Apakah ingin mengulang? (y/n): y
Apakah ingin mengulang? (y/n): n

--------------------------------
```

Penjelasan:

Program yang kita buat adalah program untuk menentukan apakah user ingin mengulang atau tidak. Kita buat nilai awal dari variable pilihan adalah `'y'`. 

Selanjutnya, didalam perulangan `do while`, kita menggunakan input output untuk memberikan nilai pada variable pilihan. 

Pada bagian while ini, selama nilai dari variable pilihan masih `'y'` maka kode program didalam perulangan do while akan diulang kembali, yakni meminta input untuk mengisi ulang variable pilihan. Begitu seterusnya hingga nilai yang diberikan user bukan 'y'.

### Penutup

Bisa diperhatikan, kita tidak tahu seberapa banyak program akan diulang. Berbeda dengan for yang sudah ditentukan diawal berapa kali program akan diulang. Dengan while, selama kondisi terpenuhi maka kode akan diulang. Jadi, Anbi sarankan gunakan perulangan `sesuai pada kebutuhannya`. Sekian artikel kali ini, Terimakasih, semoga bermanfaat.