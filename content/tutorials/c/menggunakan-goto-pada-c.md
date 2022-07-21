+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-09-22T17:00:00Z
description = "Perlukah kita mengerti tentang Goto?"
series = "Dasar C"
shortcode = "Goto"
status = "publish"
sumber = ["https://stackoverflow.com/questions/3517726/what-is-wrong-with-using-goto", "https://beginnersbook.com/2014/01/c-goto-statement/", "https://www.programiz.com/c-programming/c-goto-statement"]
tags = ["c"]
title = "Menggunakan Goto pada C"
tutorials = ["c"]
type = ["tutorial"]
url = "goto-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Statement `goto` adalah statement yang digunakan untuk melompat ke statement tertentu, sering kali disebut juga `jump statement`. Statement ini dapat digunakan untuk melompat `darimanapun` dan `kemanapun` didalam sebuah function. Untuk lebih mudah dipahami kita akan sebut tempat penggunaan goto dengan sebutan `label`.  Struktur dasarnya adalah sebagai berikut:

```c
goto label;
..
.
label: statement;
```

Disini `label` adalah identifier. Saat sebuah program menemukan syntax goto, maka alur program akan dipindah ke label yang dituju dan akan menjalankan statement didalamnya.

### Contoh Program

```c
#include <stdio.h>

int main()
{
    label_1:
        printf("Ini statement label 1\n");
    
    goto label_3;
    
    label_2:
        printf("Ini statement label 2\n");

    label_3:
        printf("Ini statement label 3\n");
        
    return 0;
}
```

Output:

```sh
Ini statement label 1
Ini statement label 3
```

#### Penjelasan

* Pada kode diatas, ditulis tiga baris statement dengan masing-masing labelnya.
* Diantara `label_1` dan `label_2` ada syntax `goto` yang mengarah ke `label_3`
* Saat kode program bertemu syntax goto, maka akan secara langsung mengarah ke label yang dituju, sehingga outputnya hanya statement pertama dan ketiga

### Hindari Goto

Walaupun memiliki kegunaan, namun kita perlu menghindari penggunaan statement goto. Program yang menggunakan goto akan sulit untuk dimengerti. Kode akan menjadi sangat kompleks dan tidak mudah untuk dibaca. Contohnya seperti ini

```c
#include <stdio.h>

int main()
{
    int num1, num2 = 4, num3;
    
    one:
        for (num1 = 0; num1 < num2; num1++)
        {
            num3 += num1;
            printf("label one | num1 %i | num3 %i\n", num1, num3);
        }
        goto two;
        
    two: 
        if (num3 > 3) {
            printf("label two | num1 %i | num3 %i\n", num1, num3);
            goto three;
        }
        goto one;
        
    three:
        printf("label three | end");
        
    return 0;

}
```

Output:

```sh
label one | num1 0 | num3 0
label one | num1 1 | num3 1
label one | num1 2 | num3 3
label one | num1 3 | num3 6
label two | num1 4 | num3 6
label three | end
```

Bisa kita lihat, penggunaan goto akan membuat sebuah kode akan lebih tidak mudah dibaca dimana alurnya akan melompat dari satu label ke label lain. Hal ini juga akan berdampak buruk pada kebiasaan dalam membuat program, dimana kita sering melompat ke satu label ke label lain.

### Kenapa Goto

Statement Goto tetap ada walaupun membingungkan, sebenarnya tidak ada yang salah jika kita bisa menggunakannya secara baik. Lalu kenapa goto dianggap tabu? Pada zaman dahulu, Bahasa Pemrogaman tidak memiliki while loops, if statements, dan control flow lainnya. Sehingga programmer pada masa itu menggunakan goto untuk membuat logika.

### Penggunaan Goto

Lalu kapan kita bisa menggunakan goto? Goto bisa kita gunakan sebagai alternatif dari `break` pada percabangan bersarang (nested loop). Walaupun sifatnya sangat jarang ditemukan dan digunakan, namun jika kamu berpikir goto dapat memudahkan dan mempersingkat kode mu, maka silakan gunakan saja. Walaupun kamu tetap bisa menulis kode bahasa C tanpa goto sekalipun. Anbi tutup dengan sebuah kata mutiara dari pengembang C++ 

> **The fact that 'goto' can do anything is exactly why we don't use it**
>
> (Bjarne Stroustrup)