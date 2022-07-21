+++
authors = "bagus"
categories = ["wawasan"]
cover = "/post/floating.jpg"
date = 2021-01-18T00:00:00Z
dateUpdate = ""
description = "Penjabaran mengenai floating point dan konversi desimal ke floating point"
series = "wawasan"
status = "publish"
tags = ["wawasan", "blogs"]
title = "Bilangan Floating Point"
type = ["wawasan", "blogs"]
url = "/floating-point-754"
[author]
images = "/img/baus.jpg"
name = "bagus"

+++

Bilangan yang memiliki nilai pecahan dapat direpresentasikan dengan dua format bilangan yakni **_fixed-point_** dan **_floating point_**. Bilangan pecahan _fixed-point_ mempunyai jangkauan yang dibatasi oleh jumlah digit signifikan yang digunakan untuk merepresentasikan bilangan itu.

Maka dengan hal tersebut akan memungkinkan terdapat bilangan yang sangat besar dan sangat kecil, dengan begitu harus direpresentasikan dengan tepat, yakni menggunakan **_floating point_**.

<br>

## Apa itu FLoating Point?

<hr>

**_Floating point_** (bilangan pecahan) adalah sebuah format bilangan yang dapat digunakan untuk merepresentasikan sebuah nilai yang besar dan kecil.

Dalam penulisan bilangan ini dilakukan dengan menuliskan dalam bentuk eksponensial, sehingga bilangan tersebut memiliki bilangan dasar, bilangan pemangkat dan basis bilangan tersebut.

Berikut penulisan notasi ilmiah pada floating point.
contoh pada bilangan desimal

- **261.000.000.000** ditulis **2,61** x <b>10<sup>11</sup></b>

- **0,000000000261** ditulis **2,61** x <b>10<sup>-10</sup></b>

Representasi _floating point_ sendiri memiliki dua bagian, yakni bagian **mantisa** dan bagian **eksponen**. Bagian mantisa menentukan digit, sementara eksponen menentukan nilai berapa besar pangkat pada mantisa, seperti berikut :

<span style="font-size:30px;font-weight:800"> ±S \* B<sup>±E</sup></span>

**S** = Signifikan disebut juga mantisa

**E** = Eksponen

**B** = Base

<br>

Penulisan _floating point_ dengan cara eksponensial dapat menyebabkan adanya kemungkinan sebuah bilangan ditulis dengan cara yang bermacam-macam. Contohnya :

<br>

**900 = 0,9*10<sup>3</sup> = 9*10<sup>2</sup> = 90\*10<sup>1</sup> = …dst.**

<br>

Maka dari itu dibutuhkannya normalisasi, yakni seperti berikut :

<br>

**± 1,bbb..b \* 2<sup>±E</sup>**

<br>

Bit pertama Signifikan selalu **1** sehingga tidak perlu disimpan didalam signifikan dan **b** adalah bilangan [biner](https://anbidev.com/pengertian-binary) (1 atau 0).

Eksponen didapat dari pemetaan true eksponen yang didapatkan dari rumus :

<span style="font-size:30px;font-weight:800"> e = 2<sup>b-1</sup> - 1</span>

**e** = Eksponen bias, adalah **_true exponent_**

**b** = Panjang bit eksponen

```
32 bit, bias = 127, e = 1 – 254, E = -126 – 127

64 bit, bias = 1023, e = 1 – 2046, E = -1022 – 1023
```

<br>

Untuk keperluan yang luas, maka dibentuklah standar bagi representasi bilangan _floating point_ ini, yakni standar **IEEE 754-2008** (ISO/IEC/IEEE 60559:2011), yakni meliputi format **16 bit**, **32 bit**, **64 bit**, **80 bit** dan **128 bit**.

<br>

## Floating Point 32Bit (Single Precision)

---

- **1 bit** (Signifikan)

- **8 bit** (Eksponen)

- **23 bit** (Mantisa)

![Floating point 32 bit IEEE 754](/post/floatingpoint32bit.png "Floating point 32 bit IEEE 754")

Bit Signifikan menyatakan bilangan positif jika **S = 0** dan negatif jika **S = 1**. Contoh representasi _floating point_ dalam IEEE standart 32 bit, bilangan **261.25** :

<br>

Ambil Signifikannya :

**261<sub>10</sub>** = **100000101<sub>2</sub>**

Untuk sisa **0.25** didapat :

**0.25** x 2 = **0.5** --> **0**

**0.5** x 2 = **1.0** --> **1**

<br>

Jadi **261.25<sup>10</sup>** = **100000101.01<sup>2</sup>**

Dinormalisasi menjadi : **100000101.01 x 2<sup>0</sup>** = **1.0000010101 x 2<sup>8</sup>**

Mantissa untuk _single precission_ ini terdiri atas 23 bit maka akan menjadi **10000010101000000000000**

Bilangan pemangkat adalah 8 maka bias diubah dengan cara : 8+127 = 135  1000011110 Karena negative maka Sign = 1

![](/post/floatingpoint32bit-2.png)

### Floating Point 64 bit (Double Precision)

---

1 bit (Signifikan)
11 bit (Eksponen)
52 bit (Mantisa)

![](/post/floatingpoint64bit.png)

bit paling kiri digunakan untuk representasi tanda 0 jika positif dan 1 jika negatif, sedangkan 8 bit berikutnya adalah pangkat (exponen) yang direpresentasikan dalam bentuk bias. Contoh representasi Floating point dalam IEEE standart 64 bit. Bilangan = 178.45 178<sub>10</sub> = 10110010<sub>2</sub>

0\.45 :

0\.45 x 2 = 0.9 --> 0

0\.9 x 2 = 1.8 --> 1

0\.8 x 2 = 1.6 --> 1

0\.6 x 2 = 1.2 --> 1

0\.2 x 2 = 0.4 --> 0

0\.4 x 2 = 0.8 --> 0

0\.8 x 2 = 1.6 --> 1

0\.6 x 2 = 1.2 --> 1

0\.2 x 2 = 0.4 --> 0

0\.4 x 2 = 0.8 --> 0

0\.8 x 2 = 1.6 --> 1

0\.6 x 2 = 1.2 --> 1

0\.2 x 2 = 0.4 --> 0

0\.4 x 2 = 0.8 --> 0

0\.8 x 2 = 1.6 --> 1

0\.6 x 2 = 1.2 --> 1

0\.2 x 2 = 0.4 --> 0

0\.4 x 2 = 0.8 --> 0

Dari perhitungan itu terdapat perulangan didalamnya, dengan begitu bisa didapatkan nilai biner dibelakang koma akan berhenti perhitungannya disaat perulangan terjadi.

Jadi 178.45<sub>10</sub> = 10110010.011100110<sub>2</sub> Dinormalisasi jadi : 10110010.01110011 x 2<sup>0</sup> = 1.0110010011100110 x 2<sup>7</sup> Mantissa pada 64bit terdiri atas 52bit maka : 0110010011100110011001100110011001100110011001100110 Bilangan pemangkat 7 diubah ke bias ; 7 +1023 = 1030 = 10000000110<sub>2</sub>

![](/post/floatingpoint64bit-2.png)

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah. Terima kasih :)
