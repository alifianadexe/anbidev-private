+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-05-24T17:00:00Z
description = "Flow Control untuk menjalankan program sesuai kondisi tertentu"
series = "Dasar C"
shortcode = "If Statement"
status = "publish"
sumber = ["https://www.cprogramming.com/tutorial/c/lesson2.html", "https://www.programiz.com/c-programming/c-if-else-statement"]
tags = ["c"]
title = "Pengkondisian : If Statements"
tutorials = ["c"]
type = []
url = "c-if-statements"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada pemrogaman kita perlu mengenal istilah `program control`. Apa itu Program Control? Program Control atau kadang juga disebut `Flow Control` adalah istilah pemrogaman untuk instruksi yang akan diberikan kepada mesin atau komputer saat program yang dijalankan bertemu suatu kondisi tertentu. Anbi bahas program kontrol tentang pengkondisian dan perulangan. Pada artikel ini, kita akan belajar pengkondisian terlebih dahulu, untuk perulangan akan dibahas pada artikel berikutnya.
<br>

### Pengenalan

<hr>
Pengkondisian adalah `instruksi` pada pemrogaman untuk menjalankan suatu baris program sesuai dengan `kondisi tertentu`. Misal jika ada dua kondisi, A dan B dan ada juga baris program A dan B. Jika kondisi A terpenuhi maka program akan menjalankan baris program A, sedangkan baris program B tidak akan dijalankan begitu pula sebaliknya.

Dalam kehidupan sehari-hari sering kita jumpai keadaan atau kondisi seperti ini. Misal "jika saya terlambat melakukan absensi, maka gaji saya akan dipotong, jika saya tidak terlambat maka gaji saya tidak akan dipotong". Anbi akan bahas penggunaan `if statement` pada bahasa pemrogaman C.
<br>

### if

<hr>

```c
if (expression) {
    // code
}
```

If statements digunakan untuk mengevaluasi ekspresi yang ada didalam tanda kurung (). Jika hasilnya `TRUE` maka kode yang ada didalam `if` akan dijalankan. Namun jika hasilnya `False` maka kode didalam `if` tidak akan dijalankan dan hanya dilewati begitu saja. Contoh program sederhana if statement adalah sebagai berikut:

```c
// Program untuk menampilkan bilangan positif

#include <stdio.h>

int main() {
    int bilangan;
    
    printf("Input Bilangan: "); scanf(" %d", &bilangan);
    
    // nilainya TRUE jika bilangan lebih dari 0
    if (bilangan > 0) {
        printf("Output Bilangan: %d", bilangan);
    }
    
    return 0;
}
```

Output (Anbi memasukkan angka 1 sebagai input):

```sh
Input Bilangan: 1
Output Bilangan: 1
```

<br>

### if else

<hr>

```c
if (expression) {
    // jika TRUE, kode ini yang dijalankan
} else {
    // jika FALSE, kode ini yang dijalankan
}
```

Hampir sama seperti `if` diatas, bedanya kita memiliki kondisi kedua jika kondisi pertama tidak terpenuhi. Jika hasilnya `True` maka kode program yang ada didalam `if` akan dijalankan, sedangkan kode yang ada didalam else akan diabaikan. Namun jika hasilnya `false` maka kode program yang ada didalam if yang diabaikan, dan akan menjalankan kode yang ada didalam `else`. Contoh program sederhananya adalah sebagai berikut:

```c
// Program untuk menentukan bilangan ganjil genap

#include <stdio.h>

int main() {
    int bilangan;
    
    printf("Input Bilangan: "); scanf(" %d", &bilangan);
    
    // True if the remainder is 0
    if  (bilangan%2 == 0) {
        printf("%d bilangan genap", bilangan);
    }
    else {
        printf("%d bilangan ganjil", bilangan);
    }
    
    return 0;
}
```

Output (Anbi memasukkan angka 2 pada input) :

```sh
Input Bilangan: 2
2 bilangan genap
```

<br>

### if else (ladder)

<hr>

```c
if (expression1) {
   // kode 1
} else if (expression2) {
   // kode 2
} else if (expression3) {
   // kode 3
} else {
   // kode n
}
```

Pengkondisian ini digunakan jika ada `lebih dari dua kondisi` yang akan dievaluasi. Konsepnya sama seperti pengkondisian sebelumnya, jika kondisi `pertama` hasilnya `True`, maka kode dari `kondisi pertama` akan dijalankan dan kondisi lainnya akan diabaikan. Jika kondisi `kedua` yang hasilnya `True`, maka kondisi lainnya yang akan diabaikan. Jika `semua` kondisi nilainya `false`, maka kode yang ada didalam `else` lah yang akan dijalankan. Contoh program sederhananya adalah sebagai berikut:

```c
// Program untuk menentukan equality

#include <stdio.h>

int main() {
    int bilangan1, bilangan2;
    
    printf("Bilangan 1: "); scanf(" %d", &bilangan1);
    printf("Bilangan 2: "); scanf(" %d", &bilangan2);
    
    // jika bilangan1 lebih kecil dari bilangan2
    if(bilangan1 < bilangan2) {
        printf("Hasilnya: %d < %d", bilangan1, bilangan2);
    }
    
    // jika bilangan1 lebih besar dari bilangan2
    else if (bilangan1 > bilangan2) {
        printf("Hasilnya: %d > %d", bilangan1, bilangan2);
    }
    
    // jika kedua bilangan sama besar
    else {
        printf("Hasilnya: %d = %d", bilangan1, bilangan2);
    }
    
    return 0;
}
```

Output (Anbi memasukkan angka 2 dan 4):

```sh
Bilangan 1: 2
Bilangan 2: 4
Hasilnya: 2 < 4
```

<br>


Sekian artikel tentang pengkondisian menggunakan if statements kali ini. Terimakasih, Semoga bermanfaat.