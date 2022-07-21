+++
title = "Belajar Apa Itu Data Manipulation - Part 1"
description = "Mempelajari tentang machine learning tetapi dalam memanipulasi data agar dapat diolah lebih baik"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-10-24"
tutorials = [
    "machine-learning"
]
series = "Machine Learning"
authors = "dave"
shortcode = "Data Manipulation"
url = "/machine-learning-data-manipulation/"
sumber = []
cover = "/post/ml-data-manipulation.jpg"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

Memanipulasi data akan menjadi sangat penting dalam banyak hal. Kata **“Manipulasi”** sendiri yang sudah memiliki konotasi _negative_ akan menjadi _positif_ jika digunakan untuk sesuatu yang benar. Manipulasi Data contohnya, dengan memanipulasi data kita dapat mendapatkan informasi lebih banyak daripada hanya data mentahan. **_So it’s all about getting more information_** :smile:

<br>

## Pandas DataFrame

<hr>

**Pandas** adalah **library** yang sering digunakan untuk mengolah data dan memvisualisasikan data. Pandas sendiri dibuat berdasarkan 2 _packages_ yaitu `NumPy` yang sangat berguna dalam pengolahan data, dan `Matplotlib` untuk memvisualisasikan data tersebut.

<br>

## Membuat DataFrame

<hr>

Untuk Latihan kita akan menggunakan _Google Colab_ untuk menulis code sekaligus mengambil contoh datanya.

Import `pandas` dengan menggunakan code seperti dibawah.

```python
import pandas as pd
```

Setelah itu kita membuat variable untuk dataframe dengan memasukan data yang akan diolah menggunakan _code_ dibawah.

```python
dataframe = pd.read_csv(path)
```

> Variabel `path` adalah letak dimana file **'csv'** kita berada.

Pada **_Tab Files_** di _Google Colab_ kita bisa menemukan data-data lain dalam bentuk csv sebagai contoh data. Klik kanan dan pilih **_'Copy path'_** untuk mempermudah dalam mencari lokasi dari data tersebut.

![Tab Files](/post/ml-data-manipulation-01.jpg "Data yang bisa dipakai di Tab Files")

Jika digabungkan dengan _code_ sebelumnya, maka akan menjadi seperti dibawah.

```python
dataframe = pd.read_csv('/content/sample_data/california_housing_test.csv')
```

Dengan begini `dataframe` kita telah siap untuk dimanipulasi.

<br>

## Mengamati Data.

<hr>

Ada banyak Teknik yang dapat digunakan untuk mengamati sebuah data. Tetapi bagaimanapun juga mengamati data harus dilakukan sebelum mengolah data. Tujuan utamanya adalah untuk mengenali data tersebut. Karena seperti kata pepatah

> "tak kenal maka kenalan" :D

Jika sebelumnya kita telah membuat _dataframe_ dari contoh data yang disediakan oleh _Google Colab_. Kita dapat melihat datanya dengan menuliskan nama _dataframe_ tersebut.

![Data Frame](/post/ml-data-manipulation-02.jpg "Dataframe csv yang divisualisasikan")

Dengan menjalankan _dataframe_, maka akan ditampilkan **5 baris data teratas** dan **5 baris data terkecil**.

Untuk menyederhanakannya kita dapat menambahkan `head()` untuk menampilkan 5 baris teratas atau `tail()` untuk menampilkan 5 baris terbawah.

![Data Frame](/post/ml-data-manipulation-03.jpg "Dataframe untuk 5 teratas")

![Data Frame](/post/ml-data-manipulation-04.jpg "Dataframe untuk 5 terbawah")

Dua fungsi diatas dapat ditambahkan dengan parameter angka, yaitu jumlah data yang ingin ditampilkan urut dari atas atau bawah.

![Data Frame](/post/ml-data-manipulation-05.jpg "Dataframe untuk 7 terbawah")

Setelah kita melihat beberapa sample dari data tersebut, kita akan mencari tahu informasi mengenai kolom yang ada pada dataframe tersebut.

Dengan menggunakan `info()` maka kita akan mendapatkan informasi mengenai data tersebut. Tidak hanya informasi mengenai masing-masing kolom yang ada, tetapi juga informasi **general** pada data itu.

![Data Frame](/post/ml-data-manipulation-06.jpg "Informasi dari dataframe yang kita proses")

Setelah kita berhasil mendapatkan sedikit informasi awal dari data tersebut, selanjutnya kita akan coba mengulik lagi informasi yang bisa kita dapatkan.

<center> . . . </center>

Jangan lupa sharing hasil belajar kalian dan jika ada kritik, saran atau pertanyaan boleh ditanyakan dibawah. Nanti kita diskusikan bersama :3
