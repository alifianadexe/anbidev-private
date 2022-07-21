+++
title = "Mencari Luas Jarak Penyelam Dengan Python"
description = "Mencari luas jarak penyelam menggunakan bahasa pemrograman python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python",
    "funcode",
    "modul"

]
date = "2020-10-11"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
aliases = [
    "/tutorials/python/python-luas-penyelam/"
]
shortcode = "Luas Penyelam"
url = "/python-luas-penyelam/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Selamat siang, kali ini saya ingin ber-implementasi secara dasar bagaimana mencari luas suatu titik. Nah kali ini kita akan memecahkan masalah suatu permasalahan yaitu mencari **luas jarak penyelam** dengan Python.

## Problem

Kita ingin mencari luas jangkauan penyelam dalam membuat menjangkau dasar laut. Diketahui jarak antara dasar laut dan kapal adalah **10 meter**. Serta jarak antara antara kapal dengan penyelam adalah **15 meter**. Lalu seberapa luas penyelam dalam menjangkau dasar laut.

!["Luas Penyelam"](/post/luas-penyelam-01.jpg "Luas Penyelam ?")

<br>

## Algoritma

<hr>

Sebelum kita pergi lebih jauh, Apa yang kita ketahui dari permasalahan tersebut? Dilihat dari gambar diatas, Sensor kapal telah mendeteksi dua jarak :

- Jarak antara kapal dan dasar **10 meter** secara garis lurus
- Jarak antara kapal dan penyelam **15 meter** secara garis menyamping

Bagaimana cara kita mencari luas jangkauan penyelam?. Mudahnya adalah dengan membayangkan bahwa jangkauan penyelam adalah sebuah **Lingkaran**.

Kita asumsikan bentuk permasalahan ini seperti **segitiga siku- siku**. Sehingga yang perlu kita lakukan sekarang adalah mencari jarak antara **titik dasar** ke **titik penyelam** yang nantinya akan menjadi **jari - jari** untuk mencari lingkaran.

!["Luas Penyelam"](/post/luas-penyelam-04.jpg "Luas Penyelam ?")

Kamus :

```
jarak_kapal_penyelam -> 15 meter
jarak_kapal_dasar -> 10 meter
jarak_dasar_penyelam -> 0 meter
luas_jangkauan -> 0 meter
```

Kita sudah mengetahui apa saja yang kita butuhkan dalam mencari lingkaran, sekarang saatnya kita mencari jarak antara dasar ke penyelam.

!["Cari Jarak antara dasar dan penyelam"](/post/luas-penyelam-02.jpg "Cari jarak antara dasar dan penyelam")

Dengan menggunakan rumus _pythagoras_ kita bisa mengetahui jarak antara keduanya.

> **a<sup>2</sup> = b<sup>2</sup> - c<sup>2</sup>**

Jika kita hitung menggunakan rumus diatas diketahuilah jarak antara titik dasar dan penyelam adalah **11 meter**.

Lalu kita ibaratkan jarak titik dasar ke penyelam adalah jari - jari untuk mencari luas lingkaran yang akan menjadi luas penyelam.

!["Cari Jarak antara dasar dan penyelam"](/post/luas-penyelam-03.jpg "Cari jarak antara dasar dan penyelam")

Dengan menggunakan rumus luas lingkaran kita bisa mendapatkan luas penyelam.

> **L = pi x jari<sup>2</sup>**

Dan didapatkan luas luas lingkaran sebesar **392 m<sup>2</sup>**

Algoritma :

```
1. Luas jangkauan penyelam adalah luas lingkaran
2. Cari jarak antara titik dasar ke penyelam
3. jari jari lingkaran = jarak antara titik dasar ke penyelam
4. Cari luas lingkaran
```

<br>

## Solving Code

<hr>

Dan ini dia versi _python_-nya

```python
"""
    Luas Jangkauan Penyelam
"""
import math

jarak_kpl_dsr = 15
jarak_kpl_pnylm = 10
jarak_dsr_pnylm = 0
jarak_ls_pnylm = 0

# Cari jarak antara keduanya
jarak_dsr_pnylm  = math.sqrt(jarak_kpl_dsr**2 - jarak_kpl_pnylm**2)

print("Diketahui jarak antara dasar dan penyelam ",jarak_dsr_pnylm, " m")

# Cari jarak jangkauan penyelam
jarak_ls_pnylm = math.pi * jarak_dsr_pnylm**2
print("Diketahui jarak jangkauan penyelam ",jarak_ls_pnylm, " m")
```

Dan ini output nya:

```
Diketahui jarak antara dasar dan penyelam : 11.180339887498949 m
Diketahui jarak jangkauan penyelam : 392.69908169872417 m
```

<br>

## Itu Aja?

<hr>

Ya tidak dong, kita berpikir lebih jauh. Bagaimana jika penyelam berada di dasar laut, dan kita ingin mencari jarak luasnya. Apakah dengan lingkaran saja cukup untuk mencari jaraknya jangkauan penyelam? atau ada jawaban yang lebih masuk akal?

!["Cari Jarak antara dasar dan penyelam"](/post/luas-penyelam-05.jpg "Cari jarak antara dasar dan penyelam")

> **Happy Solving!**
