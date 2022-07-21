+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-02-24T17:00:00Z
description = "Mari mengenal bahasa C"
series = "Dasar C"
shortcode = "Pengenalan"
status = "publish"
sumber = ["https://www.tutorialspoint.com/cprogramming/index.htm", "https://www.section.io/engineering-education/history-of-c-programming-language", "https://en.wikipedia.org/wiki/The_C_Programming_Language"]
tags = ["c"]
title = "Pengenalan Bahasa C"
tutorials = ["C"]
type = ["tutorials", "tutorial"]
url = "pengenalan-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Bahasa Pemrogaman C adalah bahasa pemrogaman general purpose yang dikembangkan oleh `Dennis M. Ritchie` pada tahun `1972` di Bell Telephone Laboratories. Tujuan awalnya adalah untuk mengembangkan sistem operasi `Unix`. 

Bahasa C merupakan penerus dari Bahasa B, yang dikembangkan oleh Dennis juga bersama dengan Ken Thompson. Bahasa C diformalisasi pada tahun 1989 oleh `American National Standard Institute (ANSI)`.

<br>

### Kenapa Bahasa C?

<hr>

Keunggulan mempelajari Bahasa C menurut Anbi adalah sebagai berikut:

1. Mudah dipelajari (ini opini pribadi Anbi),
2. Terstruktur,
3. Mampu menghasilkan program yang efisien (untuk mesin/computer),
4. Dapat dicompile ke banyak platform,
5. Keperluan akademik (Anbi kuliah ketemu Bahasa C)

<br>

### Sejarah Bahasa C

<hr>

Awalnya pengembangan Bahasa C digunakan untuk dasar dari Unix. Merujuk pada `Bell Labs paper`

> “By early 1973, the essentials of modern C were complete. The language and compiler were strong enough to permit us to rewrite the Unix kernel for the PDP-11 in C during the summer of the year.”

Yang artinya, C menjadi bahasa pemrogaman yang kuat, yang mampu, dan akan, terimplementasi pada banyak sistem. Pada pertengahan tahun 70-an, C-based Unix digunakan pada banyak _project_ di dalam `Bell System` sebagai grup kecil yang melakukan penelitian tentang industri, akademik dan organisasi pemerintahan diluar Bell Labs.

![Dennis M. Ritchie](/post/dennis.png "Dennis M. Ritchie")

Pada `22 Februari 1978`, Brian Kernighan dan Dennis Ritchie mempublikasikan `The C Progamming Language`, yang menjadi referensi bahasa pemrogaman hingga bahasa ini bisa distandarisasi. 

Lima tahun kemudian American National Standart Institute (ANSI) membentuk komite `X3J11`, dengan tujuan menstandarisasi Bahasa C.

Pada `April 1988`, edisi kedua `The C Progamming Language` diterbitkan, berisi update yang dihasilkan oleh standarisasi dari ANSI. Pada tahun 2012, eBook dari versi kedua dipublikasikan ke ePub, Mobi dan PDF. Dengan versi terbarunya (2018), telah diterjemahkan hingga kebih dari 20 bahasa.

Standarisasi Bahasa C pertama kali disahkan pada tahun 1989 (ANSI X3.159–1989 “Programming Language C”). Hingga beberapa revisi, yang paling baru adalah `ISO/IEC 9899:2018` (disebut `C17` atau `C18`).

![By Brian Kernighan - https://www.artsy.net/artwork/brian-kernighan-hello-world, CC BY-SA 3.0, ](/post/hello.png "Hello World By Brian Kernighan")

<br>

### Penerapan Bahasa C

<hr>

Bahasa C mampu menghasilkan kode yang kecepatannya hampir sama dengan kode yang ditulis menggunakan `Bahasa Assembly`. Bahasa C digunakan untuk mengembangkan sistem operasi dari komputer, biasanya juga untuk aplikasi pendukung sistem operasi, contoh penggunaannya ada pada:

 1. Sistem Operasi
 2. Compiler
 3. Assembler
 4. Text Editor
 5. Print Spooler
 6. Driver
 7. Aplikasi
 8. Database
 9. Intrepreter
10. Utility

<br>

### Hello World!

<hr>

Contoh penulisan program Hello World! pada C adalah sebagai berikut:

```c
#include <stdio.h>
    
int main(void){
    printf("hello, world\n");
}
```

Sekian materi tentang pengenalan Bahasa C. Sampai jumpa di artikel berikutnya, Terimakasih.