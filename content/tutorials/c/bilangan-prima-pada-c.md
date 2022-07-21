+++
authors = "hamid"
cover = "/post/prima.png"
date = 2021-03-16T17:00:00Z
description = "Mari belajar bermain dengan bilangan prima pada bahasa C"
series = "More C"
shortcode = "Prima"
status = "publish"
sumber = ["https://beginnersbook.com/2014/06/c-program-to-find-prime-numbers-in-a-given-range/", "https://www.youtube.com/watch?v=SKh_sXkPvVE&ab_channel=NareshiTechnologies", "https://www.advernesia.com/blog/matematika/pengertian-bilangan-prima-adalah/"]
tags = ["c"]
title = "Bilangan Prima pada C"
tutorials = ["c"]
type = ["tutorial"]
url = "prima-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Sebelumnya kita sudah belajar tentang [bilangan ganjil genap](https://www.anbidev.com/ganjil-genap-c/ "Ganjil Genap pada C") pada C. Sekarang kita akan bermain dengan `Bilangan Prima`. Masih ingat ya pelajaran matematika waktu kita masih SD tentang bilangan prima. Apa itu Bilangan Prima? Bilangan Prima adalah bilangan bulat positif yang nilainya lebih dari 1 dan hanya memiliki dua faktor pembagi, 1 dan bilangan itu sendiri. Contoh dari bilangan prima adalah `2, 3, 5, 7`. Kebalikan dari bilangan prima adalah `bilangan komposit`, memiliki lebih dari dua faktor pembagi. Contoh dari bilangan komposit adalah `4, 6, 8, 9`.

### Logika

Sekarang bagaimana cara menentukan apakah bilangan itu prima atau komposit? Seperti yang diketahui, faktorisasi dari bilangan prima hanya 1 dan bilangan itu sendiri, jadi kita akan mencoba membagi bilangan yang akan diuji. Contohnya kita akan mencari apakah angka 9 bilangan prima atau komposit. Kita akan mencoba membagi :

```sh
9/2, 9/3, 9/4, 9/5, 9/6, 9/7, 9/8
```

Perhatikan, ini kita membagi angka 9 dengan angka diantara 1 sampai 9, karena kita tahu jika 1 dan 9 merupakan faktor dari 9. Disini kita akan mencari tahu apakah ada angka lain yang merupakan faktor dari 9. Jika pembagian diatas menghasilkan bilangan bulat maka bisa disebut sebagai faktor dari 9, contohnya 9/3 (Hasilnya adalah 3).

Cara paling manualnya adalah seperti itu, tentu saja dalam pelajaran matematika tidak kita lakukan, ini adalah cara paling sederhana untuk perhitungan komputer. Kita akan menggunakan perulangan seperti berikut:

```c
for (i = 2; i <= number / 2; ++i)
```

Jumlah faktorisasi paling kecil untuk bilangan komposit adalah 3 faktor, dan bahkan tidak sampai setengah dari bilangannya, jadi kita ulang sampai situ saja. Lalu kita gunakan modulus untuk mencari sisa hasil baginya:

```c
if (number % i == 0) {    
    /* Bilangan Prima */
}
```

Jika `number` modulus `i` ditemukan hasil 0, maka bilangan tersebut bukan bilangan prima, karena faktornya bukan hanya 1 dan bilangan itu sendiri.

### Implementasi

Nah sekarang coba kita implementasikan ke program kita. Untuk bilangan, kita akan membuat user menginput data terlebih dahulu, baru nanti akan keluar output apakah bilangan yang diinput user merupakan bilangan prima atau bukan. Langsung saja kita lihat kode lengkapnya
```c
#include <stdio.h>

int main() {
    int number, i, flag = 0;
    
    printf("Masukkan bilangan bulat positif: ");
    scanf("%d", &number);
    
    for (i = 2; i <= number / 2; ++i) {
        // Jika bukan prima
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    
    if (number == 1) {
        printf("1 bukan bilangan prima maupun komposit.");
    } 
    else {
        if (flag == 0) {
            printf("%d adalah bilangan prima.", number);  
        }
        else {
            printf("%d bukan bilangan prima.", number);  
        }
    }
    
    return 0;
}
```
Output Code:

```sh
Masukkan bilangan bulat positif: 1945
1945 bukan bilangan prima.                                           
    
...Program finished with exit code 0
Press ENTER to exit console.
```

### Penjelasan Kode

Disini kita menggunakan tiga variable yang bertipe data int. Pertama, variable `number` berguna sebagai tempat menyimpan inputan user. Disini kita menggunakan `printf`sebagai form penjelasan apa yang harus diinput, lalu kita simpan inputan user tadi kedalam variable `number` menggunakan `scanf`.

Lalu kita buat proses perulangan untuk menghitung modulus. Jika sisa hasil baginya 0, maka kita akan ubah nilai dari variable `flag` menjadi 1, dan langsung saja kita hentikan perulangannya.

Kita pastikan dulu, jika 1 bukan termasuk bilangan prima maupun komposit. Selanjutnya berdasarkan `flag` tadi, jika nilainya 0 (modulus tidak menghasilkan 0) maka bilangan tersebut merupakan bilangan prima.

### Implementasi Kedua

Disini kita akan membuat program yang lebih advance, yaitu menentukan bilangan prima dari jarak dua angka. Kita akan membuat user memasukkan dua angka dan programnya akan mengeluarkan daftar angka prima didalam jarak dua angka tersebut. Kodenya adalah sebagai berikut:

```c
#include <stdio.h>

int main()
{
    int number1, number2, flag, i, j;
 
    printf("Masukkan angka pertama: ");
    scanf("%d", &number1);
 
    printf("Masukkan angka kedua: ");
    scanf("%d", &number2);
 
    printf("\nBilangan prima antara %d dan %d\n", number1, number2);
    for(i = number1+1; i < number2; ++i)
    {
        flag = 0;
        for(j = 2; j <= i/2; ++j)
        {
            if(i%j==0)
            {
                flag=1;
                break;
            }
        }
        if(flag == 0) {
            printf("%d\n", i);   
        }
    }
    
    return 0;
}
```

Outpur Code:
```sh
Masukkan angka pertama: 7 
Masukkan angka kedua: 18

Bilangan prima antara 7 dan 18
11
13
17

...Program finished with exit code 0
Press ENTER to exit console.
```
### Penjelasan Kode

Kita membutuhkan variable untuk menyimpan angka pertama dan kedua, sebagai awal dan akhir jarak angka. Kita simpan kedalam variable `number1` dan `number2`. Lalu kita gunakan lagi logika kita diatas, bedanya kita mengulang juga semua pembagian sehingga kita menggunakan dua kali perulangan `for`.

Perulangan `for` pertama kita gunakan untuk mengulang semua angka didalam jarak `number1` hingga `number2`. Sedangkan perulangan kedua kita gunakan untuk menentukan apakah bilangannya prima atau tidak. kita gunakan flag lagi, dimana jika flagnya bernilai 1 maka bukan angka prima dan tidak akan di print. Namun jika flagnya masih 0, maka bilangan tersebut adalah bilangan prima dan akan di print.

Sekian artikel tentang bilangan prima pada c, semoga bermanfaat. Terima kasih.