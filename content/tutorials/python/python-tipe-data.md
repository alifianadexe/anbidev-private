+++
title = "Tipe Data Python"
description = "Beberapa tipe data yang ada pada python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
cover = "/post/python-tipe-data.png"
date = "2019-09-05"
tutorials = [
    "python"
]
series = "Python 101"
authors = "adexe"
shortcode = "Tipe Data"
url = "/python-tipe-data/"
aliases = [
    "/tutorials/python/python-tipe-data/"
]
sumber = [
    "https://www.w3schools.com/python/python_datatypes.asp"
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Tipe data** adalah kelompok data berdasarkan jenis tertentu. Tipe data sendiri memiliki fungsi menyimpan nilai dari sebuah data sesuai jenis data itu sendiri. Layaknya wadah, wadah yang dikhususkan untuk menyimpan sesuatu sesuai dengan kegunaannya.

Python memiliki banyak tipe data, berikut adalah beberapa tipe data yang sering digunakan dalam python.

|                 Jenis                  |    Tipe    |                             Contoh                             |
| :------------------------------------: | :--------: | :------------------------------------------------------------: |
|     <a href="#string"> String</a>      |   _text_   | <span style="color:#ce915b">"Ini adalah sebuah kalimat"</span> |
|     <a href="#integer">Integer</a>     | _numeric_  |                        `1234` atau `20`                        |
|       <a href="#float">Float</a>       | _numeric_  |                       `1.231` atau `0.2`                       |
|     <a href="#complex">Complex</a>     | _numeric_  |                            `1 + 1j`                            |
| <a href="#hexadecimal">Hexadecimal</a> |  _binari_  |                        `3A` atau `10A`                         |
|        <a href="#list">List</a>        | _sequence_ |                   `['adexe', 10, variable]`                    |
|       <a href="#tuple">Tuple</a>       | _sequence_ |                   `('adexe', 20, variabel)`                    |
|       <a href="#range">Range</a>       | _sequence_ |                           `range(6)`                           |
|  <a href="#dictionary">Dictionary</a>  | _mapping_  |              `{"nama":"AlifianAdexe","umur":20}`               |
|         <a href="#set">Set</a>         |   _set_    |                         `{20, 21, 22}`                         |
|     <a href="#boolean">Boolean</a>     | _boolean_  |                      `True` atau `False`                       |
|               Frozenset                |   _set_    |                `frozenset({'banana','apple'})`                 |
|                 Bytes                  |  _binari_  |                   `b'\x00\x00\x00\x00\x00'`                    |

<br>

## String

<hr>

Tipe data `string` berfungsi untuk menyatakan **huruf / kalimat yang berupa angka, tulisan atau pun karakter khusus**. Pendeklarasian variable untuk tipe `string` diapit oleh `"` atau `'`.

```python
varStr = "Ini adalah contoh data tipe string"
strVar = 'ini pun sama'
iniString = "Bisa Angka 4, Bisa Karakter + - / * dan masih banyak lagi"
```

<br>

## Integer

<hr>

Tipe data `integer` berfungsi untuk menyatakan **angka bilangan bulat**. Berbeda dengan tipe `string`, tipe data tipe `integer` dapat diaplikasikan pada operasi matematika.

```python
varInt = 20
varInt2 = 928229289321
iniInteger = 10101010101010101
```

<br>

## Float

<hr>

Tipe data `float` berfungsi untuk menyatakan **angka bilangan desimal**.

```python
varFloat = 3.14
var2 = 10.02839123
iniFloat = 0.0000000000001
```

<br>

## Complex

<hr>

Tipe data `complex` berfungsi untuk menyatakan **angka real dan imajiner**. Bilangan imajiner adalah bilangan yang diperoleh dari akar bilangan rasional negatif.

```python
var = 1j
var2 = 2+0j
```

<br>

## Hexadecimal

<hr>

Tipe data `hexadecimal` berfungsi untuk sistem bilangan basis 16 , sebuah sistem bilangan yang menggunakan 16 simbol dengan urutan angka sebagai berikut `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F`.

```python
var = 1A
var = 12E
```

<br>

## List

<hr>

Tipe data `list` adalah sebuah urutan (_sequence_) dari kumpulan data yang dapat diubah - ubah (Flexibel). Data `list` dapat didefinisikan dengan `[]` atau `list()`.

```python
var = ['adexe','list',20]
var2 = list('adexe','list',20)
```

<br>

## Tupple

<hr>

Tipe data `tupple` adalah sebuah urutan (_sequence_) untuk menyimpan beberapa data yang tidak dapat diubah - ubah (_Fixed_). Data `tupple` dapat didefinisikan dengan `()` atau `tuple()`.

```python
var = ('adexe','list',20)
var2 = tupple('adexe','lol',40)
```

<br>

## Range

<hr>

Menurut saya `range` jenis nya lebih ke arah fungsi, karena menghasilkan sebuah urutan angka berdasarkan parameter yang diberikan. `range` biasanya digunakan untuk membuat _looping_ pada python.

```python
var = range(6)
```

<br>

## Dictionary

<hr>

Tipe data `dictionary` adalah jenis array untuk menyimpan beberapa pasang data yang memiliki "key" untuk penunjuk value.

```python
var = {'nama':"adexe",'umur':20}
var2 = dict({'nama':"adexe",'umur':20})
```

<br>

## Set

<hr>

Tipe data `set` adalah tipe data yang terdiri dari kelompok data yang sama (_uniqe_). Sehingga data yang ada didalamnya tidak boleh ada yang sama. Jika ada yang sama maka akan melebur menjadi satu.

```python
var = set((1,2,3))
var2 = {1,2,3}
```

<br>

## Boolean

<hr>

Tipe data `boolean` adalah tipe data yang hanya memiliki 2 nilai yaitu `True` dan `False`. Biasa digunakan dalam kebutuhan _conditional_ programming.

```python
var = True
var2 = False
```
