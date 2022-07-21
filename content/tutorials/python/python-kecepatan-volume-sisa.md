+++
title = "Cari Kecepatan, Waktu, Volume dan Sisa Uang"
description = "Mencoba memecahkan permasalahan dibawah ini menggunakan bahasa pemrograman python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python",
    "modul",
    "funcode"
]
date = "2020-10-12"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
shortcode = "Cari Kecepatan, Volume dan Sisa"
url = "/python-kecepatan-volume-sisa/"
aliases = [
  "tutorials/python/python-kecepatan-volume-sisa/"
]
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Selamat malam, kali ini saya ingin ber-implementasi secara lebih lanjut bagaimana mencari suatu permasalahan dibawah ini. Nah kali ini kita akan memecahkan masalah suatu permasalahan yaitu mencari **Volume, Waktu, Kecepatan dan Sisa** dengan Python.

<br>

## Mencari Waktu Tempuh

<hr>

#### Here is the problem :

> Jarak antara kota A dan Z adalah **360 Km**, jika ditempuh menggunakan sepeda motor dg kecepatan **90 Km/jam**, maka berapa lama perjalan yang ditempuh?

!["Cari Waktu Tempuh"](/post/berapa-waktunya.jpg "Lari Waktu Tempuh")

Oke, kita tahu ini masalah sederhana mencari lama perjalanan (waktu). Sekarang saatnya membuatnya menjadi masuk akal dan bisa kita selesaikan. Dari soal diatas kita mengetahui :

- Jarak Tempuh : **360 Km**
- Kecepatan : **90 Km/jam**

Jika kita tau rumus mencari **kecepatan**, kita bisa dengan jelas mendapatkan rumus mencari **waktu**

> waktu = jarak / kecepatan

Sekarang kita aplikasikan hal yang kita ketahui dan rumus yang dapat menjadi sebuah program :

```python
# Assignment
jarak = 360
kecepatan = 90
waktu = jarak / kecepatan
print("Waktu yang diperlukan ", waktu, "jam")
```

<br>

## Mencari Kecepatan

<hr>

#### Here is the problem :

> Sebuah pesawat terbang menempuh jarak **10 Km** dalam waktu **40 detik**. Berapakah kecepatan pesawat tersebut?

!["Mencari Kecepatan"](/post/berapa-kecepatannya.jpg "Mencari Kecepatan")

Untuk permasalahan kedua mungkin hampir sama dengan permasalahan yang pertama. Kita hanya mengatur rumus dan juga variabel yang kita definisikan agar sesuai dengan permasalahan diatas. Sekarang kita mengetahui :

- Jarak nya : **10 Km**
- Waktu yang ditempuh : **10 Detik**

Rumus nya hampir sama seperti yang diatas, tinggal kita balik saja :

> kecepatan = jarak / waktu

Sekarang kita aplikasikan hal yang kita ketahui dan rumus yang dapat menjadi sebuah program :

```python
# Assignment
jarak = 10
waktu = 40
kecepatan = jarak / waktu
print("Kecepatan : ", kecepatan , "Km/s")
```

<br>

## Mencari Sisa Uang

<hr>

#### Here is the problem :

> Fauzan mempunyai uang **Rp. 4,5 Juta** dan ia berniat membeli sebuah kamera seharga **Rp. 2,5 juta** sebelum diskon, harga diskon kamera tersebut **20%**. Selain itu Fauzan juga membelanjakan uangnya untuk keperluan lain sebesar **Rp. 1,5 Juta**, berapa sisa uang Fauzan saat ini?

!["Berapa Sisa Uangnya?"](/post/berapa-sisa.jpg "Berapa Sisa Uangnya?")

Jika kita pahami, permasalahan ketiga hanyalah seperti **aritmatika** biasa. Sehingga kita jangan terlena dalam permainan kata - kata. Mari kita bedah apa yang sudah kita ketahui :

- Uang Fauzan : **Rp. 4.500.000,00**
- Harga Kamera : **Rp. 2.500.000,00**
- Diskon Kamera : **20%**
- Keperluan Lain : **Rp. 1.500.000,00**

Sekarang kita lanjut ke algoritma penyelesaian untuk permasalahan ini. Hal pertama yaitu kita **uangkan semuanya**. Maksudnya kita hitung diskon kamera tersebut :

> Harga Kamera Diskon = Harga Asli - (Diskon / 100 x Harga Asli)

Setelah mengetahui **harga kamera diskon** dari kamera yang akan dibeli kita hanya mengkalkulasinya dengan aritmatika biasa.

> Sisa = Uang Fauzan - (Harga Kamera Diskon + Sisa Kebutuhan)

Sekarang kita implementasikan kedalam kode :

```python
uang_fauzan = 4500000
harga_kamera = 2500000
diskon = 20
kebutuhan_lain = 1500000

harga_kamera_diskon = harga_kamera - (diskon / 100 * harga_kamera)

uang_fauzan = uang_fauzan - (harga_kamera_diskon + kebutuhan_lain)
print("Sisa uang Fauzan adalah Rp.", uang_fauzan)
```

<br>

## Mencari Volume Gas Ideal

<hr>

#### Here is the problem :

> Menghitung **volume gas ideal** (_V_) dalam satuan liter, dengan memasukkan **tekanan** (_P_) dalam satuan _kiloPascal_, banyaknya **mol gas** (_n_) dalam satuan _mol_, dan **temperatur** (_T_) dalam derajat _kelvin_, serta diketahui **konstanta gas ideal** (_R_).

!["Berapa Volumenya?"](/post/berapa-volume.jpg "Mencari Volume Gas Ideal")

Oke ini sepertinya akan menjadi tantangan menarik, yaitu mencari sebuah volume gas ideal dalam satuan liter. Baiklah kita mulai dari apa yang kita ketahui dari sini?

- **Volume Gas Ideal** : _V_
- **Tekanan** : _P_
- **Mol Gas** : _n_
- **Temperatur** : _T_
- **Konstanta Gas Ideal** : _R_

Dari semua variabel ini, sangat mungkin jika kita implementasikan kedalam rumus mencari **Volume Gas**. Rumus mencari Volume Gas Ideal :

> V = nRT / P

Oke kita sudah tau rumusnya, lalu bagaimana dengan nilai - nilai nya? Kecuali **konstanta gas ideal** yang memiliki nilai _default_ (**8.314472 J·K<sup>−1</sup>·mol<sup>−1</sup>**) semuanya masih kosong. Lalu bagaimana? kita gunakan `input` untuk mengisi nilainya.

Dengan mengimplementasikan `input` kedalam kode maka program pada python akan jadi seperti ini :

```python
## Input
tekanan = input("Tekanan (KiloPascal) : ") # P
zat_mol = input("Jumlah Zat (Mol) : ") # n
suhu = input("Suhu (Kelvin) : ") # T
tetapan_gas_ideal = 8.314472 # R
volume = 0 # V

# V = nRT / P
volume = (float(zat_mol) * float(tetapan_gas_ideal) * float(suhu)) / float(tekanan)
print("Volume Tabung : ", volume)
```

<center>. . .</center>

Mungkin sekian hasil **_solved_** dari saya yang naif ini. Semoga bisa bermanfaat dan jika kalian bingung forum diskusi ada di kolom komentar.

> **Happy Solving!**
