+++
authors = "hamid"
cover = "/post/ganjilgenap.png"
date = 2021-03-14T17:00:00Z
description = "Menentukan lalu Memvalidasi Ganjil dan Genap dalam Bahasa C"
series = "More C"
shortcode = "Ganjil Genap"
status = "publish"
sumber = ["https://www.kompas.com/skola/read/2020/09/10/062000469/bilangan-ganjil-dan-genap-jawaban-soal-belajar-dari-rumah-10-september-sd"]
tags = ["c"]
title = "Ganjil Genap pada Bahasa C"
tutorials = ["c"]
type = ["tutorial"]
url = "ganjil-genap-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Kita akan mempelajari dasar pemrogaman, yakni menentukan bilangan ganjil dan genap. Pertama, kita perlu ketahui dulu cara membedakan bilangan ganjil dan genap. Bilangan genap adalah bilangan keliaptan dua dan juga habis dibagi dua. Sebaliknya, sedangkan bilangan ganjil adalah bilangan yang bukan kelipatan dua dan tidak habis dibagi dua.

Karena menggunakan hasil bagi, maka cara yang paling mudah untuk menentukan bilangan itu ganjil atau genap adalah dengan memanfaatkan operator modulus. Modulus adalah operasi yang menghasilkan sisa pembagian dari satu bilangan dengan bilangan lainnya. Operator ini dilambangkan dengan % atau mod.

<br>

#### Contoh Kasus

<hr>

Contoh sederhananya adalah angka 6 dan 9. Disini 6 % 2 akan menghasilkan nilai 0, sedangkan 9 % 2 akan menghasilkan nilai 1. Angka 6 habis dibagi 2, maka 6 adalah bilangan genap. Angka 9 merupakan angka ganjil karena sisa hasil baginya adalah 1. Sekian contohnya, kita akan lanjut dengan latihan ngoding sesuai kasus tertentu.

<br>

#### Kasus 1 Menentukan Ganjil Genap

<hr>

Kasus pertama dan paling sederhana, kita akan menentukan apakah suatu bilangan itu ganjil atau genap. Sekarang kita tulis programnya, kode untuk menentukan nilai ganjil atau genap adalah sebagai berikut:

```c
#include <stdio.h>
int main()
{
    int number;
    
    printf("Masukkan bilangan: ");
    scanf("%d", &number);
    
    if(number%2 == 0){
        printf("%d adalah bilangan genap", number);  
    } else if (number%2 == 1) {
        printf("%d adalah bilangan ganjil", number);
    } else {
        return 0;
    }
return 0;
}
```

Yang perlu diperhatikan adalah pada bagian pengkondisian, yang Anbi gunakan adalah modulus. Sebelumnya user akan melakukan input ke variabel number. Jika `number modulus 2` hasilnya 0 maka number adalah genap. Lalu pada kondisi kedua, jika `number modulus 2` hasilnya 1 maka number adalah bilangan ganjil. Kita berikan output juga biar user bisa melihat secara langsung.

![Eksekusi Program](/post/gg1.png "Eksekusi Program")

<br>

#### Kasus 2 Validasi Ganjil Genap

<hr>

Kasusnya user hanya boleh melakukan input bilangan genap, jika input yang diberikan user berupa bilangan ganjil, maka program akan mengulang inputan hingga sesuai (user memberikan input bilangan genap). Pada kasus kedua, kita akan buat sebuah validasi inputan. Kodenya adalah sebagai berikut

```c
#include <stdio.h>

int main()
{
    int number;
    
    printf("Masukkan bilangan Genap: ");
    scanf("%d", &number);
    
    while (number%2 == 1) {
        printf("Masukkan bilangan Genap: ");
        scanf("%d", &number);
    }
    
    return 0;
}
```

Perlu diperhatikan, Anbi menggunakan perulangan while. While disini memiliki kondisi `number%2 == 1`. Artinya selama `number modulus 2` sisa baginya adalah 1, maka blok kode akan terus dijalankan. Hal ini disebabkan karena input user bukan merupakan bilangan genap.

![Eksekusi Program](/post/gg2.png "Eksekusi Program")

Baik Sekian terlebih dahulu Artikel Pemrogaman Bahasa C kali ini, Terimakasih.