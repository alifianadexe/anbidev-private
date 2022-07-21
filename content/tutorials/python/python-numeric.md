+++
title = "Tipe Numerik Dalam Python"
description = "Mengenal lebih jauh tentang tipe numerik pada python yang meliput (float, int, complex)"
type = ["tutorials","tutorial"]
cover = "/post/python-numeric.png"
status = "publish"
tags = [
    "python"
]
date = "2019-09-07"
tutorials = [
    "python"
]
series = "Python 101"
authors = "adexe"
shortcode = "Numeric"
url = "/python-numeric/"
aliases = [
    "/tutorials/python/python-numeric/"
]
sumber = [
    "https://belajarpython.com/tutorial/number-python",
    "https://www.w3schools.com/python/python_numbers.asp"
    
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Tipe Numerik**, sebuah tipe data yang dapat digunakan untuk perhitungan matematis.

Ada 3 tipe numerik pada python :

- [Int](https://www.anbidev.com/tutorials/python/python-tipe-data/#integer)
- [Float](https://www.anbidev.com/tutorials/python/python-tipe-data/#float)
- [Complex](https://www.anbidev.com/tutorials/python/python-tipe-data/#complex)

Variabel tipe numerik terbuat ketika kamu menetapkan (_Assign_) value ke variabel tersebut.

```python
angkaInt = 10      # Tipe Integer
angkaFloat = 2.32  # Tipe Float
angkaComplex = 2j  # Tipe Complex
```

<br>

> Kamu juga bisa mengecek tipe data tersebut menggunakan fungsi `type(parameter)`

<br>

## Konversi Tipe Data

<hr>

Jika kalian ingin mengkonversi antara tipe data ke tipe data lainnya, terdapat fungsi yang di*built-in* didalam python. Berikut fungsi serta penggunaanya :

```python
angkaInt = 100      # Tipe Integer
angkaFloat = 2.321  # Tipe Float
angkaComplex = 2j   # Tipe Complex


# Konversi dari Int ke Float
konvFloat = float(angkaInt)

# Konversi dari Float ke Int
konvInt = int(angkaFloat)

# Konversi dari Int ke Complex
konvComplex = complex(angkaInt)

print(konvFloat, konvInt, konvComplex)
```

Sayang nya untuk konversi tipe `complex` ke tipe `int` tidak bisa dilakukan dikarenakan nilainya yang berbeda.

<br>

## Fungsi Matematika Dalam Python

<hr>

Fungsi matematika dalam python bisa kamu gunakan untuk perhitungan matematis. Akan tetapi, untuk bisa menggunakan fungsi matematis dibawah ini, terlebih dahulu **import** modul `math`.

```python
import math
```

Lalu, berikut adalah beberapa contoh fungsi :

|     Nama     |                                             Penjelasan                                              |       Contoh       |    Hasil    |
| :----------: | :-------------------------------------------------------------------------------------------------: | :----------------: | :---------: |
|   Absolute   |                    Nilai absolut dari **x** yaitu jarak antara **x** dan **0**.                     |     `abs(10)`      |     10      |
|    Floor     |                              Pembulatan ke bawah tanpa batas maximal.                               | `math.floor(1.9)`  |      1      |
|   Ceiling    |                               Pembulatan ke atas tanpa batas minimal.                               |  `math.ceil(1.1)`  |      2      |
|    Round     | Pembulatan berdasar titik decimal (0.5), jika dibawah (0.5) maka pembulatan kebawah dan sebaliknya. | `math.round(1.4)`  |      1      |
|   Eksponen   |                              Mengembalikan nilai eksponen dari **x**.                               |   `math.exp(2)`    |    7.389    |
|     Log      |                               Logaritma dari **x** , (**x** > **0**).                               |   `math.log(4)`    |    1.386    |
|    Log 10    |                           Basis 10 logaritma dari **x**, (**x** > **0**).                           |  `math.log10(10)`  |     1.0     |
|     Max      |                 Mengembalikan nilai maksimal dari **x** (sequence) yang diberikan.                  | `max([10,20,30])`  |     30      |
|     Min      |                  Mengembalikan nilai minimal dari **x** (sequence) yang diberikan.                  | `min([10,20,30])`  |     10      |
|     Modf     |     Memisahkan bilangan **x**(decimal) menjadi dua bilangan bulat dan pecahan ke sebuah tuple.      | `math.modf(76.12)` | (0.12,76.0) |
|     Pow      |                  Mengembalikan nilai dari hasil perpangkatan **x** pangkat **y**.                   |  `math.pow(3,2)`   |     9.0     |
| Akar Kuadrat |                              Akar kuadrat dari **x**, (**x** > **0**).                              |   `math.sqrt(4)`   |     2.0     |

Masih banyak fungsi - fungsi dalam modul `math`. Saya hanya menampilkan beberapa saja yang mungkin bisa digunakan untuk operasi matematika dasar.
