+++
title = "Apa itu Destructuring Pada Python?"
description = "Mengenal apa itu destructuring dan contohnya pada bahasa python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2020-10-15"
tutorials = [
    "python"
]
series = "More Python"
authors = "adexe"
shortcode = "Destructuring"
url = "/destructuring-python/"
aliases = [
  "/tutorials/python/destructuring-python/"
]
sumber = ['https://blog.tecladocode.com/destructuring-in-python/']
cover = "/post/python-destructure.jpg"
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**_Destructuring_** (juga disebut _unpacking_) adalah pengambilan data dari _collection_ seperti `list` atau `tuple` dan membaginya menjadi nilai variabel secara individual. Ini sangat berguna, karena memungkinkan kita untuk melakukan hal - hal seperti _destructuring assignment_, dimana kita memberi value ke beberapa variabel sekaligus dari satu _collection_ yang sama.

<br>

## Standar Destructuring Pada Value

<hr>

Sama seperti bahasa pemrograman lainnya, python juga dapat melakukan _multiple assignment_ value ke beberapa variabel sekaligus. Contoh :

```python
var1, var2, var3 = 101, 707, 420
```

Lalu, coba kita lihat _output_ dari variabel - variabel tersebut menggunakan `print` :

```python
print(var1) # 101
print(var2) # 707
print(var3) # 90
```

Seperti yang kalian lihat, bahwa variabel - variabel (`var1`, `var2`, `var3`) yang tadi kita _assign_ terisi dengan nilai - nilai (<span style="color:#ae81ff">101</span>, <span style="color:#ae81ff">707</span>, <span style="color:#ae81ff">420</span>) dengan urutan yang sama.

> Bisa kita simpulkan, _destructuring_ pada nilai (_value_) hanya perlu memberikan jumlah yang sama pada kedua sisi variabel dan nilai (_value_).

Lalu bagaimana jika jumlah di sisi variabel ataupun sisi nilai berbeda? misal :

```python
x, y, z = 10, 20
```

<h5><span style="color:#eb3b5a"><i>Kode diatas akan menghasilkan ERROR</i></span></h5>

Disisi variabel berjumlah 3, sedangkan disisi nilai (_value_) hanya ada 2. Jika kita jalankan kodenya akan **_error_** seperti ini.

```
ValueError: not enough values to unpack (expected 3, got 2)
```

<br>

## Destructuring Pada List

<hr>

Tentunya python juga menyediakan _destructuring_ pada `list`. Mungkin didalam situasi tertentu, kita dihadapkan masalah yang harus **membagi sebuah list** menjadi beberapa bagian, dimana kita hanyamengambil **satu atau dua nilai** dari list dan **membiarkan nilai lainnya**. Contoh :

```python
awal, *other = [1,2,3,4,6,7]

print(awal) # 1
print(other) # [2,3,4,6,7]
```

Pada variabel `awal` hanya mengambil nilai pertama dalam **list** dan variabel `other` mengambil sisa datanya.

> Jika di JavaScript ada yang namanya _Spread Operator_ (`...`), maka pada Python kita menggunakan `*`.

Oke, kita coba dengan kasus lain, dimana kita mengambil nilai **pertama** dan **terakhir** dan membiarkan **nilai - nilai ditengah**. Python menyelesaikan dengan cara seperti ini :

```python
awal, *tengah, akhir = [101,2,3,4,5,6,7,90]

print(awal) # 101
print(tengah) # [2,3,4,5,6,7]
print(akhir) # 90
```

<br>

## Destructuring Pada Looping

<hr>

Penerapan _desctructuring_ juga ada pada saat _looping_, dan salah satu syntax yang paling vital dalam implementasi ini adalah `enumerate`. Contoh kode nya seperti ini :

```python
listku = ["Me", "You", "Him"]
for position, subject in enumerate(listku):
    print(position, subject)

# Output :
# 0 Me
# 1 You
# 2 Him
```

Masih bingung apa yang terjadi pada kode diatas?, Baiklah mari kita bedah bagaimana `enumerate` bekerja :

```python
listku = ["Me", "You", "Him"]
for example in enumerate(listku):
    print(example)

# [(0, "Me") , (1,"You") , (2, "Him")]
```

Fungsi `enumerate` akan me*return* sebuah iterasi berbentuk sekempulan `tupple` didalam `list`. Dimana ia mengkelompokan antara **nilai** dan juga **index nilai** tersebut dalam list.

Sehingga seperti konsep **Destructuring List** dapat diterapkan ke dalam bentuk tupple seperti `(0, "Me")`, dimana `0` adalah **index nilai** dan `"Me"` adalah **nilai** tersebut.

Kalian mungkin terpaku dalam menggunakan fungsi `enumerate` ini, mari kita pindah ke contoh yang lebih umum dalam sebuah kasus _desctructuring_ pada saat _looping_ :

```python
hewanku = [
  ("Gajah", 4, "Herbivora"),
  ("Harimau", 4, "Karnivora"),
  ("Ayam", 2, "Omnivora"),
]

for hewan, kaki, jenis in hewanku:
  print("Seekor", hewan ,"memiliki Kaki", kaki ,"berjenis", jenis)

# Seekor Gajah memiliki Kaki 4 berjenis Herbivora
# Seekor Harimau memiliki Kaki 4 berjenis Karnivora
# Seekor Ayam memiliki Kaki 2 berjenis Omnivora
```

Dalam kode diatas kita meng*assign* tiga nilai didalam tupple ke variabel `hewan`, `kaki` dan `jenis` secara berurutan.

Kode diatas jauh lebih baik dalam keterbacaan kode ketimbang kode dibawah ini :

```python
for hewan in hewanku:
  print("Seekor", hewan[0] ,"memiliki Kaki", hewan[1] ,"berjenis", hewan[2])
```

Walaupun hasilnya sama, tetapi kode dimana kita menerapkan **destructuring** menjadi lebih deskriptif, ketimbang hanya mengandalkan anggota index.

<br>

## _Ignoring Values_

<hr>

Uniknya, dalam melakukan _destructuring_ pada sebuah kumpulan nilai (_collections_), kita juga dapat mengabaikan (_ignore_) beberapa nilai dari kumpulan nilai tersebut. Contoh :

```python
seseorang = ("Anbi", 30, "Programmer")
nama, _, profesi = person

print(nama, profesi) # Anbi Programmer
```

Dengan meng*assign* nilai menggunakan simbol `_` (_Underscore_), maka python menganggap bahwa nilai tersebut diabaikan (_ignore_). Sehingga dengan cara ini kita dapat secara spesifik menentukan nilai mana saja (didalam list) yang akan digunakan.

**Contoh** dengan kasus - kasus lain seperti ini :

```python
makan, _, daftar, _, _, harga = ["Telur", 10, "Menu", "Padang", "Sari", 10000]
print(makan, daftar, harga) # Telur Menu 10000
```

Sama seperti **Destructuring List** yang dapat menggunakan `*` untuk mengumpulkan nilai secara jamak, _Ignoring Values_ pun dapat menerapkan `*`. **Contoh** :

```python
a , *_ , c = [1,2,3,4,5,6,7,8]
print(a, c) # 1 , 8

*_ , z = [1,3,4,5,6,7,8,10]
print(z) # 10
```

Ada juga kegunaan dalam _looping_, jika kita memiliki kasus untuk _looping_ menggunakan `for` tetapi yang kita butuhkan hanya _looping_ nya saja, tidak datanya. Bisa kita terapkan seperti ini :

```python
for _ in range(10):
  print('ini akan ter print 10 kali')
```

<br>

<center> . . . </center>

<br>

## Kesimpulan

<hr>

**Destructuring** bisa kalian sebut juga sebagai pemecah variabel yang bertujuan untuk mempermudah kita dalam menangani kumpulan nilai atau variabel. Metode ini dapat diterapkan dalam `list` , perulangan, dan juga `dictionary` (ini belum saya jelasin hehe). Sekian dan terima kasih.
