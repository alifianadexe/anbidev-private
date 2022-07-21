+++
aliases = ["/blogs/pengertian-binary/"]
authors = "bagus"
categories = ["wawasan"]
cover = "/post/coverweb-binerr-black.png"
date = 2020-02-05T00:00:00Z
description = "Penjelasan mengenai binary"
series = "wawasan"
status = "publish"
tags = ["blog", "wawasan", "elektronika", "fakta", "edukasi"]
title = "Pengertian Binary"
type = ["blogs", "blog"]
url = "/pengertian-binary/"
[author]
images = "/img/baus.jpg"
name = "Bagus"

+++
Sebelum mempelajari biner lebih baik kamu harus tahu dahulu sistem bilangan. Apa itu sistem bilangan? Kenapa ada sistem bilangan?

Sistem bilangan itu suatu cara buat mewakili besaran item. atau bisa dikatakan mewakili sebuah perintah dalam komputer supaya dapat dimengerti oleh komputer. Ada beberapa sistem bilangan;

* Biner
* Desimal
* Oktal
* Hexadesimal

Mereka memiliki keunikannya masing-masing. Disini akan dibahas mengenai sistem Biner.

<br>

## Apa sih biner?

<hr>

Biner atau _bi.ner /binèr/_ dalam KBBI dapat diartikan , _a_ terjadi dari atau ditandai oleh dua benda atau dua bagian; serba dua, _a Mat_ berdasar dua (tentang bilangan pada sistem bilangan). Sistem biner sendiri hanya memiliki dua bilangan yakni 0 dan 1. Sistem bilangan biner adalah dasar dari semua bilangan berbasis digital.

Kalau dalam komputer ada istilah _Byte_. Nah **1 Byte = 8 bit** (_binary digit_). Sistem coding komputer secara umum menggunakan coding 1 Byte . Bilangan biner yang digunakan ada 8 digit yang berisikan hanya angka 1 dan 0.

Lah kok bisa? Kenapa harus ada Byte? Apakah Byte itu penyingkat dari bit agar lebih pendek?

Sejarah Bit dan byte Lanjut ke pembahasan biner. Biner dipakai dimana aja sih? di dunia serba digital ini, setiap perangkat elektronik pasti menggunakan bilangan biner. Lah kok? Mengingat tiap perangkat memiliki hardware yang mana hardware hanya memiliki dua kondisi; mendapat aliran listrik (1) atau tidak mendapat aliran listrik (0). Begitu.

<br>

## Cara Membaca Biner

<hr>

Secara kita semua selalu menggunakan bilangan desimal di kehidupan sehari-hari maka dari itu kali ini akan membahas mengenai bagaimana cara membaca biner kedalam desimal. Atau konversi biner ke desimal.

Contohnya :

    0000 = 0  0101 = 5
    0001 = 1  0110 = 6
    0010 = 2  0111 = 7
    0011 = 3  1000 = 8
    0100 = 4  1001 = 9

Loh kok iso?  Berarti kalau nilai desimalnya semakin besar, semakin banyak pula  jumlah digit binernya ya? . **Betul**!

Contoh :

        # Binner         # Decimal 
        10111100011010 = 12058

Tulis pangkat dari angka 2, dimana pangkat terus meningkat.

| Biner |  |  | Decimal |
| --- | --- | --- | --- |
| 1 | 2<sup>13</sup> | 1x2<sup>13</sup> | 8192 |
| 0 | 2<sup>12</sup> | 0x2<sup>12</sup> | 0 |
| 1 | 2<sup>11</sup> | 1x2<sup>11</sup> | 2048 |
| 1 | 2<sup>10</sup> | 1x2<sup>10</sup> | 1024 |
| 1 | 2<sup>9</sup> | 1x2<sup>9</sup> | 512 |
| 1 | 2<sup>8</sup> | 1x2<sup>8</sup> | 256 |
| 0 | 2<sup>7</sup> | 0x2<sup>7</sup> | 0 |
| 0 | 2<sup>6</sup> | 0x2<sup>6</sup> | 0 |
| 0 | 2<sup>5</sup> | 0x2<sup>5</sup> | 0 |
| 1 | 2<sup>4</sup> | 1x2<sup>4</sup> | 16 |
| 1 | 2<sup>3</sup> | 1x2<sup>3</sup> | 8 |
| 0 | 2<sup>2</sup> | 0x2<sup>2</sup> | 0 |
| 1 | 2<sup>1</sup> | 1x2<sup>1</sup> | 2 |
| 0 | 2<sup>0</sup> | 0x2<sup>0</sup> | 0 |

Kemudian jumlahkan hasilnya dan akan menghasilkan bilangan desimal hasil konversi :

10111100011010<sub>2</sub> = (8192+2048+1024+512+256+16+8+2)<sub>10</sub>

10111100011010<sub>2</sub> = 12058<sub>10</sub>

Nah seperti itu contohnya, _first impression_ emang terlihat ribet, tapi kalau kamu sudah hafal perpangkatan atau kelipatan dari 2 4 8 _dst_. Bakalan lebih mudah. Ingat! **Bisa karena biasa**.

<br>

## Manfaat Bilangan Biner

<hr>

Bilangan biner digunakan dalam rangkaian digital untuk menyatakan kondisi mati dan idup. Pada dasarnya sinyal digital berisi angka deretan 0 dan 1 yang menyatakan kondisi hidup dan mati.

<br/>

## _FYI nih.._

<hr>

Dalam bilangan biner nilai paling kanan atau nilai yang paling kecil disebut **LSB** **_(Least Significant Bit)_** sedang nilai paling kiri atau nilai yang paling besar disebut **MSB** ***(Most Significant Bit)***. Contohnya :

<center>**10111100011010<sub>2<sub>**</center>

Dari barisan angka tersebut, angka 0 paling kanan bernilai 0, angka 1 paling kanan bernilai 2. Dan itu adalah angka paling kecil **Least Significant**. Sedangkan bagian paling kiri memiliki nilai 8192 **Most Significant**. Least Significant sering digunakan untuk kepentingan penyisipan data kedalam suatu media digital lain.

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah .Terima kasih :)