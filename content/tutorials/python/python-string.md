+++
aliases = ["/tutorials/python/python-string/"]
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-string.png"
date = 2019-09-08T00:00:00Z
description = "Mengenal lebih jauh tentang tipe text yaitu string pada python. Mulai dari variabel sampai ke fungsi."
series = "Python 101"
shortcode = "String"
status = "publish"
sumber = ["https://belajarpython.com/tutorial/string-python", "https://www.w3schools.com/python/python_string.asp"]
tags = ["python"]
title = "String Dalam Python"
type = ["tutorials", "tutorial"]
url = "/python-string/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
**String**, merupakan tipe data yang _populer bin ajaib_ karena sering digunakan dan dapat dikonversikan ke mana saja.

Menginisialisasi string pada python menggunakan tanda kutip (tunggal atau ganda). Berikut contoh sederhana dari String.

```python
print('Ini String')
print("Ini Juga String")
```

<br>

## Menginisialisasi Variable String

<hr>

Banyak cara yang bisa digunakan untuk menginisialisasi data string pada variabel. Contoh sederhanya seperti ini.

```python
var1 = "AnbiDev"
var2 = 'Atas Nama Bangsa Indonesia'
print(var1)
print(var2)
```

Lalu kamu juga dapat memasukkan _quote_ didalam string seperti berikut ini.

```python
var1 = "'AnbiDev'"
var2 = '"Atas Nama Bangsa Indonesia"'
print(var1)
print(var2)
```

Variable string juga dapat menginisialisasi menggunakan _triple quotes_.

```python
var1 = """
Ini Line Pertama
Ini Line Kedua
Ini Line Ketiga
"""
var2 = '''
Ini Line Pertama
Ini Line Kedua
Ini Line Ketiga
'''

print(var1)
print(var2)
```

String juga bisa menggunakan beberapa operator spesial seperti `*` dan `+`.

```python
var1 = "adexe"
var2 = "desi"
var3 = var1 + var2
print(var3) # Output : "adexedesi"

var4 = "ade"
var5 = var4 * 3
print(var5) # Output : "adeadeade"
```

<br>

## String Adalah Array

<hr>

Dalam python, String juga dapat **bersifat sebagai array**. String dalam python adalah _bytes_ array yang mempresentasikan unicode char.

Python tidak punya tipe data `char`, sehingga `char` pada python diganti dengan string dengan panjang 1 karakter.

untuk mengakses elemen pada string menggunakan `[]` (_brackets_).

> **_INGAT : indexing array dimulai dari 0 bukan ~~1~~_**

```python
var = "anbidev"
print(var[0]) # Output : "a"
print(var[3]) # Output : "i"
```

<br>

### Slicing

Terdapat juga beberapa cara untuk mengambil beberapa karakter atau _range_ karakter dari string (_Slicing_).

```python

var = "anbidev"

print(var[0:3]) # Output : "anbi"
print(var[2:5]) # Output : "bide"

# Slice dari titik yang ditentukan ke karakter terakhir
print(var[3:]) # Output : "bidev"

# Slice dari titik yang ditentukan ke karakter pertama
print(var[:4]) # Output : "anbid"
```

<br>

### Negative Slicing

Kamu juga dapat menggunakan _Negative Indexing_ untuk mengakses array dari **posisi terakhir**. Biasanya cara ini digunakan untuk kasus - kasus tertentu. Seperti mengambil **karakter terakhir** dari sebuah string.

```python
var = "anbidev"
print(var[-1]) # Output : 'v'

var = "anbidev"
print(var[-5:-2]) # Output : 'bid'
```

> _`-5:-2` berarti posisi ke lima dari akhir ke posisi ke dua dari akhir_

<br>

### Cek String

Terdapat keyword yang bisa digunakan untuk mengecek sebuah string mengandung karakter tertentu, yaitu `in`.

Misal saya ingin mengetahui apakah di kalimat string ini, **terdapat** kata `AnbiDev` didalamnya.

```python
var = "Kunjungi AnbiDev untuk belajar python "
result = "AnbiDev" in var

print(result) # Output : True
```

Lalu saya ingin mengetahui apakah di kalimat string ini, **tidak ada** kata `AnbiDev` didalamnya.

```python
var = "Kunjungi AnbiDev untuk belajar python "
result = "AnbiDev" not in var

print(result) # Output : False
```

<br>

### Length

Terdapat fungsi built-in yang berguna untuk **mengetahui panjang karakter** dari string, yaitu `len()`.

```python
var = "anbidev"
print(len(var)) # Output : 7
```

<br>

## Method Dan Operator Format

<hr>

Sebelum kita sudah belajar bahwa Tipe Data Text (_String_) **tidak dapat digabungkan / disisipkan** dengan tipe data **selain itu**.

Akan tetapi python memiliki operator yang berguna di kondisi seperti ini. Operator itu adalah `%`. Berikut contoh penggunaan sederhananya.

```python
txt = "anbidev selalu no %d di hati %s" % (1,'kita')
print(txt) # Output : "anbidev selalu no 1 di hati kita"
```

Dan ini beberapa list simbol yang dapat digunakan untuk **tipe data** yang lain.

| Simbol | Deskripsi |
| :---: | :---: |
| %c | Digunakan untuk Karakter |
| %s | Digunakan untuk String |
| %i | Digunakan untuk Bilangan Desimal |
| %d | Digunakan untuk Bilangan Desimal |
| %u | Digunakan untuk Obsolete type |
| %o | Diguankan untuk Bilangan Oktal |
| %x | Digunakan untuk Hexadecimal (Huruf Kecil) |
| %X | Digunakan untuk Hexadecimal (Huruf Besar) |
| %e | Digunakan untuk Eksponensial (Huruf Kecil) |
| %E | Digunakan untuk Eksponensial (Huruf Besar) |
| %f | Digunakan untuk Float |

Serta kita juga bisa menggunakan salah satu _methods_ dari string yang digunakan khusus untuk **menggabungkan** nilai **selain string**, _methods_ itu disebut `format`.

```python
age = 20
txt = "Umur saya sekarang {} tahun"

print(txt.format(age)) # Output "Umur saya sekarang 20 tahun"
```

Argumen pada _methods_ format diletakkan di dalam _placeholder_ (tempat tampung) dengan karakter `{}` .

`format` dapat menampung banyak parameter dan ditempatkan pada masing - masing _placeholder_.

```python
qty = 3
itemno = 302
harga = 39.98
order = "Saya Order item nomor {} sebanyak {} dengan harga masing - masing ${}"

print(order.format(itemno, qty, harga))
# Output : "Saya Order item nomor 302 sebanyak 3 dengan harga masing - masing $39.98"
```

Kamu juga dapat menggunakan _indexing_ pada _placeholder_ agar masing - masing argumen diletakan diposisi yang benar.

```python
qty = 3
itemno = 302
harga = 109.89
order = "Saya Bayar dengan ${2}, untuk item nomor {0} sebanyak {1} item"

print(order.format(itemno, qty, harga))
# Output : "Saya Bayar dengan $109.89 untuk item nomor 302 sebanyak 3 item"
```