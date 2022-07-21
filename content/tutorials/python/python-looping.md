+++
title = "Perulangan Dalam Python"
description = "Mempelajari berbagai macam looping yang ada didalam python, mulai dari while, for dan recursisve"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-11-08"
tutorials = [
    "python"
]
cover = "/post/python-looping.png"
series = "Python 101"
authors = "adexe"
shortcode = "Looping"
url = "/python-looping/"
aliases = [
    "/tutorials/python/python-looping/"
]
sumber = [
    "https://belajarpython.com/tutorial/looping-python",
    "https://www.w3schools.com/python/python_while_loops.asp",
    "https://www.w3schools.com/python/python_for_loops.asp"

]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Perulangan** atau **_looping_** adalah sebuah pernyataan dalam bahasa pemrograman dalam mengulang blok kode yang sama berdasarkan dari kondisi atau jumlah data yang didefinisikan.

Contoh, kamu ingin membuat text "Hello world" seratus kali. Lalu apakah kamu akan menulis kode `print("Hello World")` sebanyak 100 kali?, Tentu saja tidak. Gunakan saja looping.

Python memiliki 2 keyword looping, yaitu:

- `for`
- `while`

<br>

## Perulangan For

<hr>

Perulangan `for` adalah perulangan yang digunakan untuk mengulang sebuah **_Sequence_** seperti Tuple, List, Dictionary, dan String.

```python
# For dengan List
hewan = ["Anjing", "Kucing", "Kamu"]

for x in hewan:
    print(x)

# For dengan String
nama = "AnbiDev"

for s in nama:
    print(s)
```

Lalu bagaimana caranya untuk mengulang sesuai angka yang kita inginkan?

Mudah, Kita gunakan `range()`.

### Range Function

`range` adalah sebuah fungsi yang membuat _Sequence_ angka secara otomatis berdasarkan parameter yang diberikan.

Fungsi ini kerap dikombinasikan dengan perulangan `for`.

Kita gunakan kasus diatas, bagaimana cara membuat _output_ **_"Hello World"_** sebanyak **100 kali** hanya dengan **2** baris kode.

```python
for x in range(100):
    print("Hello World")
```

Pada fungsi `range(100)` ia akan membuat sequence dari 0 sampai 100, dan `for` akan mengeksekusi kode `print("Hello World")` berdasarkan panjang nya _Sequence_.

> Lebih jauh tentang `range()`, pelajari disini

<br>

## Perulangan While

<hr>

Perulangan `while` adalah perulangan yang berfungsi mengulang blok kode jika kondisi yang diberikan masih `True`.

Analoginya seperti ini, Selama masih tersisa makanan maka **tetap** makan, lalu jika makanan sudah kosong maka **berhenti** makan.

Lalu, contoh kodenya seperti ini.

```python
food = 100
eat = 1

while food > 0:
    print("Tetap Makan")
    food -= eat

print("Berhenti Makan")
```

Kode diatas persis seperti analogi yang saya berikan.

Selama `food` lebih dari `0` yang berarti makanan masih tersisa maka blok kode didalamnya akan dijalankan, `print("Tetap Makan")`.

Lalu ada juga kode `food -= eat` yang menjadi **kunci** agar looping itu berhenti. Karena jika tidak ada pengurangan itu ia akan looping selamanya.

<br>

## Perulangan Bersarang

<hr>

**_Nested Loop_** atau bisa disebut **Perulangan Bersarang** adalah perulangan di dalam perulangan.

Contoh, kita ingin membuat **List Dimesional `3 x 3`**.

```python
dimensional = []
kolom1 = [0, 1, 2]
kolom2 = [0, 1, 2]

for x in kolom1:
    dimensional.append(x)
    dimensional[x] = []
    for y in kolom2:
        dimensional[x].append(y)
        dimensional[x][y] = str(x) + ',' + str(y)

print(dimensional)
```

Penggunaan dari **_Nested Loop_** sangat berbeda - beda, tergantung dari situasi dan kondisi alur logika program kalian.


<br>

## Perulangan Dengan String 

<hr>

[String](https://anbidev.com/python-string) pada python, juga dapat diperilakukan sebagai [list](https://anbidev.com/python-list). Karena hal ini [String](https://anbidev.com/python-string) juga dapat digunakan untuk looping.

```python
iniString = "Website AnbiDev!"
for char in iniString:
    print(char)
```

Output nya bakal seperti ini :

```
W
e
b
s
i
t
e

A
n
b
i
d
e
v
!
```

Hebat bukan?!

<br>

## Break dan Continue

<hr>

Python juga memiliki sebuah keyword unik yang bisa kalian kombinasikan dengan perulangan `for` dan `while`.

### Break

Keyword `break` digunakan untuk membuat looping **berhenti secara paksa** sesuai dengan keinginan kita. Contoh:

```python
# Break dalam For
bunga = ["Mawar", "Anggrek", "Melati"]
for x in bunga:
    print(x)
    if x == "Anggrek"
        break
```

Sehingga ketika looping `for` sampai di "Anggrek" , maka looping akan berhenti.

```python
# Break dalam While
i = 1
while i < 10:
    print(i)
    if i == 5:
        break
    i += 1
```

Dan ketika variabel `i` bernilai `5`, maka looping akan berhenti

<br>

### Continue

Sedangkan keyword `continue` digunakan untuk _skip_ atau melewati nilai yang kita inginkan dan melanjutkan perulangan.

Contoh:

```python
# Continue dalam For
bunga = ["Mawar", "Anggrek", "Melati"]
for x in bunga:
    if x == "Anggrek"
        continue
    print(x)
```

Sehingga ketika looping `for` sampai di "Anggrek", maka looping akan berlanjut ke urutan selanjutnya dan men-_skip_ kode `print`.

```python
# Continue dalam While
i = 1
while i < 10:
    i += 1
    if i == 5:
        continue
    print(i)
```

Dan ketika variabel `i` bernilai `5`, maka looping akan berlanjut ke urutan selanjutnya dan men-_skip_ kode dibawahnya.
