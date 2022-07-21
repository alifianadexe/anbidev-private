+++
title = "Belajar Data Manipulation : Rows - Part 2"
description = "Mempelajari tentang machine learning tetapi dalam memanipulasi data agar dapat diolah lebih baik"
type = ["tutorials","tutorial"]
status = "publish"
draft=false
tags = [
    "machine-learning"
]
date = "2020-10-25"
tutorials = [
    "machine-learning"
]
series = "Machine Learning"
authors = "dave"
shortcode = "Data Manipulation 2"
url = "/machine-learning-data-manipulation-2/"
sumber = []
cover = "/post/ml-data-manipulation.jpg"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

Setelah kita menyelesaikan [Part 1](https://anbidev.com/machine-learning-data-manipulation), kita sudah mencoba berbagai macam cara untuk medapatkan informasi dasar dari ***dataframe***, selanjutnya kita akan mencoba sedikit untuk mengotak-atik *dataframe* tersebut.

<br>

## Manipulating Rows

<hr>

Kemarin kita berhasil sampai pada tahap [Mengamati Data](https://anbidev.com/machine-learning-data-manipulation#). Sekarang mari kita belajar untuk memanipulasi baris.

<br>

### Sorting Row

Pertama kita akan mencoba untuk mengurutkan baris sesuai yang kita inginkan. Kita akan menggunakan 2 metode pengurutan yaitu `sort_values()` dan `sort_index`.

Dengan menambahkan `sort_values()` pada dataframe, kita dapat mengurutkan data berdasarkan value yang ada. Parameter by menunjukan baris mana yang akan di urutkan, dan ascending dapat bernilai `False` atau `True`.


```python
dataframe = dataframe.sort_values(by='households', ascending='False')
```

!['Hasil Sorting Pada Dataframe'](/post/machine-learning-data-manipulation-2-01.png "Hasil Sorting Pada Dataframe")


Lalu selanjutnya menggunakan metode `sort_index()`. Method ini berfungsi mengurutkan data berdasarkan indexnya.


```python
dataframe = dataframe.sort_index()
```

!['Hasil Sorting Pada Dataframe'](/post/machine-learning-data-manipulation-2-02.png "Hasil Sorting Pada Dataframe")

<br>

###  Dropping Row

Selanjutnya adalah *Dropping Row* atau bisa juga disebut menghilangkan baris. *Dropping Row* bertujuan untuk menghapus data - data yang tidak bisa diproses, atau data yang membuat model tidak akurat seperti `null` atau `none`. 

 Untuk menghilangkan baris kita akan menggunakan fungsi `drop()` yang sudah ada pada library **pandas**.

```python
dataframe = dataframe.drop(labels=[0, 1, 3], axis=0)
```

!['Menghapus Baris index ke 0, 1, 3 '](/post/machine-learning-data-manipulation-2-03.png "Menghapus Baris index ke 0, 1, 3")


Kode diatas bermaksud untuk menghilangkan baris pertama, kedua dan keempat yang dianalogikan dengan list `[0,1,3]` sebagai index baris tersebut.

> `axis = 0` berarti **baris**, sedangkan `axis = 1` berarti **kolom**

Dengan menggunakan `list` pada parameter `labels`, kita dapat menghilangkan beberapa baris sekaligus untuk mempersingkat code.

Selanjutnya kita akan mencoba menghilangkan nilai `null` pada dataframe dengan method `dropna()`.

```python
import pandas as pd
import numpy as np

df = pd.dataframe({"name": ['Alifian','Hamid','Bagus'],
                   "status": [np.nan, 'PDKT', 'Taken'],
                   "born": [pd.NaT, pd.Timestamp("2020-04-25"), pd.NaT]})
```

!['Contoh dataset pada dataframe'](/post/machine-learning-data-manipulation-2-04.png "Contoh dataset pada dataframe")


Pada dataframe diatas kita akan menghilangkan nilai kolom yang pada barisnya terdapat nilai `null`.

```python
df.dropna()
```

!['Hasil dataframe yang sudah di dropna'](/post/machine-learning-data-manipulation-2-05.png "Hasil dataframe yang sudah di dropna")

<center> . . . </center>

Yaudah gitu dulu nanti lanjut yang kolom deh hehe