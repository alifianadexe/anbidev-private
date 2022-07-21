+++
title = "Belajar Kondisional Di Python"
description = "Mempelajari tentang macam - macam kondisional pada python dan cara penggunaanya"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-09-11"
tutorials = [
    "python"
]
cover = "/post/python-condition.png"
series = "Python 101"
authors = "adexe"
shortcode = "Kondisi"
url = "/python-conditions/"
aliases = [
    "/tutorials/python/python-conditions/",
]
sumber = [
    "https://belajarpython.com/tutorial/kondisi-if-else-python",
    "https://www.w3schools.com/python/python_conditions.asp"
    
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Kondisional** pada python membantu kita dalam menerapkan logika dalam kondisi tertentu.

Kondisi pada python dapat ditulis dalam beberapa cara. Cara yang paling umum menulis kondisi di python menggunakan _"if statement"_.

_if statement_ ditulis dengan keyword `if`. Kode pada statement akan tereksekusi jika statement bernilai `True`. Berikut contoh sederhana dari _if statement_ :

```python
a = 20
b = 10
if a > b:
    print("A lebih besar dari B")
```

Pada umumnya kondisional banyak menggunakan [Operator Perbandingan](https://anbidev.com/tutorials/python/python-operator/#operator-perbandingan). Tetapi ada juga kondisi yang menggunakan operator yang lain tergantung alur logika pada kodemu.

<br>

## Indentasi

<hr>

Tidak seperti bahasa pemrograman lainnya, untuk mendefinisikan kode yang akan dieksekusi menggunakan **indentasi**. Apa itu indentasi?

> **Indentasi** adalah bagian paragraf yang menjorok ke dalam pada baris-baris paragraph.

Contoh dibawah ini adalah kesalahan pada indentasi :

```python
a = 20
b = 10
if a > b:
print("A lebih besar dari B")
```

<h5><span style="color:#eb3b5a"><i>Kode diatas akan menghasilkan ERROR</i></span></h5>

Walaupun urutan kodenya benar, tapi **indentasi nya masih salah**. Sehingga python tidak mengenali kode yang akan dieksekusi ketika statement `True`.

Python memang sebuah bahasa pemrograman yang sangat rapi, karena dengan adanya aturan indentasi ini, script kode pada python lebih mudah dibaca.

<br>

## IF Else

<hr>

Jika statement yang kita berikan bernilai `False` maka kode pada _if statement_ tidak dieksekusi.

Tetapi, jika kita ingin membuat sebuah statement yang walaupun nilai nya `False` ada kode yang dieksekusi, menggunakan _if else statement_.

_else statement_ menggunakan keyword `else`. Contoh sederhananya seperti ini.

```python
password = "harimau123"
passwordInput = "belalang456"
if password == passwordInput:
    print("Selamat Anda Berhasil Login!")
else:
    print("Maaf, Password Anda Salah")
```

Jika kita jalankan kode diatas, kode blok yang akan dieksekusi hanyalah kode blok **kedua**. Dan _output_ yang ditampilkan yaitu `"Maaf, Password Anda Salah"`.

Dikarenakan statement `password == passwordInput` bernilai `False`. Sehingga statement akan mengeksekusi kode blok pada **_else_** _statement_.

<br>

## Elif

<hr>

Lalu selanjutnya, bagaimana jika kita ingin membuat banyak statement.

Tidak hanya satu kondisi tetapi banyak kondisi, agar program yang kita buat bisa menunjang banyak pilihan dari user.

Kita gunakan _if elif statement_ dengan keyword `elif`.

`elif` adalah singkatan dari **_else if_** yang berarti _jika bukan, maka jika ini_.

Berikut contoh sederhananya :

```python
inputHari = 1
if inputHari == 1:
    print("Senin")
elif inputHari == 2:
    print("Selasa")
elif inputHari == 3:
    print("Rabu")
elif inputHari == 4:
    print("Kamis")
elif inputHari == 5:
    print("Jum'at")
elif inputHari == 6:
    print("Sabtu")
elif inputHari == 7:
    print("Minggu")
else:
    print("Hari Tidak Diketahui")
```

Dengan menggunakan keyword `elif`, kita dapat menambahkan statement sejumlah yang kita butuhkan.

<br>

## Kondisi Bersarang

<hr>

Kondisi bersarang atau IF bersarang adalah bentuk dari `if` didalam `if`. Sehingga kita bisa membentuk sebuah kondisi di dalam kondisi.

```python
var = 22
if var > 10:
    print("'var' diatas 10")
    if var > 20:
        print("'var' diatas 20")
        if var > 30:
            print("'var' diatas 30")
        else:
            print("'var' dibawah 30")
```

<br>

## Penulisan Singkat

<hr>

Pada python kondisional dapat ditulis secara singkat dengan hanya **satu baris**.

Untuk penulisan singkat satu baris tidak perlu adanya indentasi. Kamu dapat menempatkan statement dan semua blok kodenya pada satu baris.

**_Rumus Penulisan_**:

```python
'value_of_true' if conditions else 'value_of_false'
```

**_Contoh :_**

```python

var1 = 10
var2 = 5
var3 = "Lebih Besar" if var1 > var2 else "Lebih Kecil"
print(var3) # Output : 'Lebih Besar'
```

**_Penjelasan :_**

Pada `var3` terdapat statement yang dibaca seperti ini.
`var3` akan berisi string **_"Lebih Besar"_** apabila `var1 > var2`.
Jika tidak `var3` akan berisi string **_"Lebih Kecil"_**.

Kamu juga dapat membuat **_Multiple Statement_** pada line yang sama.

**Contoh _Multiple Statement_:**

```python

var1 = 10
var2 = 5
var3 = "Lebih Besar" if var1 > var2 else "Sama Dengan" if var1 == var2 else "Lebih Kecil"
print(var3) # Output : 'Lebih Besar'
```

**Penjelasan :**

Pada kode blok bagian kedua `else "Sama Dengan" if var1 == var2` bisa di baca seperti `elif var1 == var2`.

<br>

## Kombinasi Dengan Operator

<hr>

Kondisi juga dapat dikombinasikan dengan beberapa operator. Seperti [Operator Logika](https://anbidev.com/tutorials/python/python-operator/#operator-logika) dan [Operator Keanggotaan](https://anbidev.com/tutorials/python/python-operator/#operator-keanggotaan).

**A.** Contoh kombinasi dengan **Operator Logika** (`or`, `and`, `not`).

```python
a = 90
b = 100
x = 20
y = 10

# Kombinasi AND
if (a < b) and (x > y):
    print("Semua Kondisi 'True'")

# Kombinasi OR
if (a < b) or (x < y):
    print("Salah Satu Kondisi 'True'")

# Kombinasi NOT
if not (a < b):
    print("Kondisi Tidak 'True'")
```

<br>

**B.** Contoh kombinasi dengan **Operator Keanggotaan** (`in`, `not in`).

```python
angka = [1, 2, 3, 4, 5]
a = 5
b = 6

# Kombinasi IN
if a in angka:
    print("variabel 'a' ada pada list 'angka'")

# Kombinasi NOT IN
if a not in angka:
    print("variabel 'a' tidak ada pada list 'angka'")

```
