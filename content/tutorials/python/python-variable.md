+++
title = "Variabel Pada Python"
description = "Menjelaskan tentang variabel dan penggunaan yang beragam pada python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-09-06"
tutorials = [
    "python"
]
cover = "/post/python-variabel.png"
series = "Python 101"
authors = "adexe"
shortcode = "Variabel"
url = "/python-variable/"
sumber = [
    "https://www.w3schools.com/python/python_variables.asp"
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Variabel adalah tempat dimana **data ditampung**. Tidak seperti kebanyakan bahasa pemrograman lainnya, Python **tidak** mengharuskan **mendeklarasikan** tipe variabel. Sebuah variabel terbuat ketika kamu memberikan value untuk itu.

<br>

## Tidak Perlu Menginisialisasi Tipe Data

<hr>

Python dapat **membedakan tipe variabel** yang dideklrasikan **tanpa perlu menginisialisasi tipe** pada variabel.

```python
x = 10 # variabel x bertipe Integer
y = "AlifianAdexe" # variabel y bertipe String
f = 0.123 # variabel f bertipe float
```

<br>

## Case-Sensitive

<hr>

Variabel pada python bersifat **case-sensitive** sehingga penulisan huruf variabel yang besar kecil akan memiliki identitas sendiri.

```python
adexe = "adexe"
alifianAdexe = 'menang' # variabel ini berbeda dari yang diatas
print(adexe) # hasilnya tetap "adexe"
```

<br>

## Menggabungkan Variabel Text

<hr>

Antara variabel dengan tipe **_text_** dapat digabung menjadi value gabungan antar keduanya (atau lebih).

```python
var1 = 'AlifianAdexe'
var2 = 'Desi'
var3 = var1 + var2
print(var3) # Akan menghasilkan output "AlifianAdexeDesi"
```

<br>

## Operasi Matematika Antar Variabel

<hr>

Antara variabel dengan tipe **_numeric_** dapat digunakan untuk operasi matematika antar 2 variabel atau lebih.

```python
var1 = 100
var2 = 200
var3 = var1 + var2
print(var3) # Akan menghasilkan output 300
```

<br>

## Text dan Numeric Tidak Dapat Digabung

<hr>

Variabel dengan tipe **Text**(_[String](https://www.anbidev.com/tutorials/python/python-tipe-data/#string)_) tidak dapat digabung atau dioperasikan (matematika) oleh variabel dengan tipe **Numeric**(_[Float](https://www.anbidev.com/tutorials/python/python-tipe-data/#float), [Long](https://www.anbidev.com/tutorials/python/python-tipe-data/#long), [Integer](https://www.anbidev.com/tutorials/python/python-tipe-data/#integer)_).

Solusinya diantara salah satu variabel harus **di ubah tipe datanya**.

```python
var1 = 10
var2 = "100"
var3 = var1 + var2
```

> Kode diatas akan menghasilkan **ERROR**

<br>

## Menetapkan Multiple Variabel Value

<hr>

Banyak cara di python dalam menetapkan _(Assigning)_ value ke variabel..

```python
# Multiple Assigning

a, b, c = "AlifianAdexe", "Desi", "Ade"
print(a, b, c) # Outputnya ("AlifianAdexe","Desi","Ade")

a, b, c = "AlifianAdexe", 100, dict()
print(a, b, c) # Outputnya ("AlifianAdexe",100, {})

a = b = C = "AlifianAdexe"
print(a, b, c) # Outputnya ("AlifianAdexe","AlifianAdexe","AlifianAdexe")

```

Dalam python, terdapat juga metode bernama **destructuring** yang bertujuan sama, yaitu menetapkan multiple variabel dalam sebuah value

<br>

## Variabel Global

<hr>

Variabel **_global_** adalah variabel yang dibuat diluar fungsi (contoh-contoh diatas termasuk variabel _global_). Variabel _global_ dapat digunakan didalam maupun diluar fungsi.

```python
var1 = "Ini Global"

def fungsiKu():
    print("Variabel apakah ini ", var1)

fungsiKu()

```

Variabel global juga dapat diubah nilainya ketika didalam fungsi.

```python
var1 = "Ini Global"

def fungsiKu():
    var1 = "Ini Private"
    print("Variabel apakah ini ", var1)

fungsiKu()
print(var1)
```

<br>

## Global Keyword

<hr>

Ketika kamu membuat variabel didalam fungsi , maka fungsi lain tidak dapat mengakses variabelmu. Tetapi jika menggunakan keyword `global` maka variabel dalam fungsi akan menjadi global dan bisa diakses oleh fungsi yang lain.

```python
def fungsiKu():
    global varKu
    varKu = "Ini Variabel fungsiKu()"
    print(varKu)

fungsiKu()

def fungsiMereka()
    print(varKu)

fungsiMereka()
```

<center><p>.            .          .</p></center>

<br>

## Peraturan Penamaan Variabel

<hr>

Dalam penamaan variabel ada beberapa peraturan yang harus kita ketahui.

1. Nama variabel harus **diawali** dengan **huruf(A-z)** dan **_underscore_(\_)**. Contoh :

```python
_var1 = "value"
adexe = "AnbiDev"
```

2. Nama variabel **tidak boleh diawali** dengan **angka(0-9)**.
3. Nama variabel hanya boleh mengandung **huruf(A-z), angka(0-9) dan underscore(\_)**.

```python
aku_dan_kamu = "Satu"
anb1d3v = "AnbiDev"
```

4. Nama variabel bersifat **case-sensitive**.
