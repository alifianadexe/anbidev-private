+++
authors = "adexe"
cover = "/post/web-mempy.jpg"
date = 2021-04-01T00:00:00Z
description = "Mari kita belajar apa yang disebut dengan memory address dan bagaimana penerapannya pada python"
draf = false
series = "More Python"
shortcode = "Memory Address"
status = "publish"
sumber = ["https://medium.com/@daniel.tooke/variables-and-memory-addresses-in-python-6d96d672ed3d"]
tags = ["modul", "python"]
title = "Alamat Memori Pada Variabel Python"
tutorials = ["python"]
type = ["tutorials", "tutorial"]
url = "/python-memory-addresss/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Pernah suatu hari anbi men*debug* suatu program yang dibuat dari bahasa Python. Disitu, anbi sedang menemukan ada suatu variabel yang sangat aneh. 

Variabel tersebut selalu terdefinisi padahal didefinisikan diawal program. Tetapi pada pertengahan program, variabel tersebut berubah - ubah nilainya. Padahal tidak ada satupun kode yang mengubah variabel tersebut.

Anbi mendefinisikan variabel tersebut dengan nilai variabel lain, yaitu seperti ini :

```python
origin_price = price
```

Anbi berniat membuat rekaman nilai awal (`origin_price`) untuk nilai yang ada di variabel `price`. Sehingga ketika `price` dikalkulasi ditengah program, anbi tetap memiliki nilai awal yang belum di kalkulasi (`origin_price`).

***"Nah, menurut kawan - kawan semua? dimana letak kesalahan anbi?"***



<br>

## Alamat Sebuah Variabel 

<hr>

Oke, yang belum menemukan letak kesalahan anbi diatas, mari kita bahas disini. 

Didalam Python, **semuanya adalah object**. Mulai dari String, number, list, dictionary, class ,function, `True`, `False` dan `None` itu semua adalah **object**. Python akan menempatkan masing - masing nilai object tersebut kedalam sebuah ***memory address***.

Oke, sebagai contoh anbi buat 2 variabel dan kita lihat masing - masing *memory address* dari variabel tersebut menggunakan fungsi `id()`.

```python
>>> a = 10
>>> b = "ini string"
>>> id(a)
1788979264
>>> id(b)
1788979424
>>> id(True)
1788854592
```

Bisa kita lihat Masing - masing nilai dari variabel diatas memiliki alamat memori (`id`) sendiri.  

Tetapi jangan salah, <mark>setiap alamat memory mewakili nilai, bukan variabel</mark>. Sehingga ketika membuat variabel, nilai pada variabel akan ditempatkan pada sebuah alamat memori, dan variabel hanya mereferensikan alamat memori.

Maksudnya bagaimana? Oke kita punya kasus seperti ini :

```python
a = 10
b = a
print('nilai b : ', b)

a = a + 30
print('nilai b : ', b)
```

```bash
nilai b : 10
nilai b : 40
```

Kenapa variabel `b` tiba - tiba berubah? padahal kita tidak melakukan operasi apapun pada variabel `b`. Padahal yang kita operasikan variabel `a` kenapa efeknya bisa sampai ke `b`?

Coba kita lihat alamat memori masing - masing variabel : 

```python
a = 10
b = a

print(id(a))
print(id(b))
```

```
1788979264
1788979264
```

> Fungsi `id()` digunakan untuk melihat alamat memori pada nilai tersebut.


Ternyata kedua variabel tersebut memiliki alamat memori yang sama. Hal ini sama seperti saat kita mendefinisikan dua variabel dengan nilai yang sama dalam satu baris.

```python
a = b = 10
```

Yak, seperti itu kira - kira hal yang kita alami.

Lalu bagaimana jika kita buat variabel `b` dengan nilai yang berbeda dari variabel `a`.

```python
a = 10
b = 20

print(id(a))
print(id(b))
```

```
1788979264
1788979424
```

Kalian lihat, alamat memori mereka berbeda. Inilah maksud dari ***"alamat memori mewakili nilai"***. Dan tugas dari variabel adalah **mereferensikan** alamat memori tersebut.

> Dalam Python hal ini disebut dengan **"Reference"**

!["Variabel Dan Alamat Memori"](/post/python-memory-address-01.jpg "Variaebl Dan Alamat Memori")

Lalu bagaimana dengan variabel bernilai `list` atau `dict`? Apakah mereka juga membagikan alamat memori yang sama?

Kita ambil kasus dengan contoh seperti ini :

```python
first_list = [1,2,3,4]
second_list = first_list

print(id(first_list))
print(id(second_list))

second_list.append(5)

print(first_list)
print(second_list)
```

```
51420328
51420328

[1,2,3,4,5]
[1,2,3,4,5]
```

Bisa kita lihat dari output diatas, kedua variabel tersebut memiliki alamat memori yang sama. Sehingga ketika terdapat penambahan data di `second_list`, maka variabel `first_list` juga ikut berubah. 

<br>

## Membuat Alamat Baru, Dengan Nilai Sama

<hr>

Dari penjelasan sebelumnya kita bisa menyimpulkan bahwa dalam Python, setiap nilai memiliki alamatnya masing - masing.

Lalu bagaimana cara kita membuat nilai yang sama, dari dua variabel yang berbeda tanpa membagi memori address yang sama?. Mudah, kita hanya perlu fungsi `copy`.

```python
import copy

first_list = [1,2,3]
second_list = copy.copy(first_list) 

print(id(first_list))
print(id(second_list))
```

```
51420328
51479464
```

Fungsi `copy` digunakan untuk menduplikasi nilai dan membuatkan alamat memori tersendiri untuk nilai tersebut. Dengan ini variabel - variabel tersebut akan menjadi independen.

```python
second_list.append(5)

print(first_list)
print(second_list)
```

```
[1,2,3]
[1,2,3,4]
```

Sekarang kita bisa menduplikasi nilai variabel tanpa takut akan mengubah nilai pada variabel lain.

<br>

## Sama, Tapi Tidak Sama

<hr>

Sekarang mari coba kita telaah lebih dalam lagi, *"Apakah variabel - variabel yang kita buat untuk mereferensikan alamat memori sebuah nilai itu sama?"* Disinilah operator perbandingan, `is` akan membuktikan segalanya.

Dalam perbandingan, *double equals* (`==`) digunakan untuk membandingkan dua objek dan melihat apakah mereka itu objek yang sama atau tidak.

Tetapi berbeda dengan `is`, operator ini akan membandingkan dua objek dan melihat apakah mereka itu **objek yang sama**, serta melihat apakah mereka memiliki **alamat memori yang sama** atau tidak.

Contoh : 

```python
import copy

# kita buat 3 variabel
a = [10, 20, 30 ,40]
b = a
c = copy.copy(a)

# kita bandingkan a dan b
print(a == b)
print(a is b)
```

```
True
True
```

Keduanya merupakan objek yang sama dengan alamat memori yang sama. Coba kita bandingkan dengan nilai `c` yang jelas - jelas memiliki nilai yang sama.

```python
# kita bandingkan a dan c
print(a == c)
print(a is c)
```

```
True
False
```

Walaupun mereka memiliki nilai yang sama, akan tetapi operator `is` tetap menyebut itu berbeda. Dikarenakan alamat memori mereka yang berbeda.

<center> . . . </center>

Itulah singkat cerita tentang alamat memori yang terjadi pada saat kita membuat variabel. Lalu apakah pembahasannya berhenti disini? tidak dong nanti anbi bahas lebih jauh lagi tentang **Python Reference**

Yasudah begitu dulu, terima kasih sudah menyimak.