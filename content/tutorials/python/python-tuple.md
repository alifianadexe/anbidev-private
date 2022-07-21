+++
title = "Tuple Dalam Python"
description = "Mempelajari lebih jauh tentang tipe data tuple dalam python, bagaimana kegunaanya dan berbagai macam fungsinya"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-11-14"
tutorials = [
    "python"
]
cover = "/post/python-tuple.png"
series = "Python 101"
authors = "adexe"
shortcode = "Tuple"
url = "/python-tuple/"
sumber = [
    "https://belajarpython.com/tutorial/tuple-python",
    "https://www.w3schools.com/python/python_tuples.asp"

]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Tuple** hampir sama dengan [List](https://anbidev.com/tutorials/python/python-list/), ia dapat di urutkan tetapi **tidak dapat diubah**.

Indeks pertama pada `tuple` dimulai dari nol (0), indeks kedua nya itu satu (1) dan seterusnya.

<br>

## Contoh Penggunaan Tuple

<hr>

Tuple sering digunakan untuk _grouping data_.

```python
year_born = ("Paris Hilton", 1981)
```

Kita dapat mengelompokkan nilai secara berpasangan dan membuatnya menjadi sebuah _Sequence_ dengan data yang _Fixed_.

```python
hamid = ("Hamid", "Sukardi", 1992, "Pengacara", "Mijen, Semarang")
```

Tuple berguna untuk mempresentasikan tentang apa yang biasa kita sebut dengan **_Record_**. Seperti kode diatas yang mewakili _record_ seseorang.

<br>

## Membuat Tuple

<hr>

Tuple didefinisikan dengan **tanda kurung (`()`)** atau dengan method `tuple()`.

```python
# Mendefinisikan Tuple
mobil = ("Ferari", "Supercar", "Virginia")
datadiri = ("Ade", "Actress", 20, 1999)

# Dengan method Tuple
motor = tuple(("Harley", "Davidson", "Motorbike"))
```

> Pada saat menggunakan method `tuple` pastikan menggunakan 2 kurung `(())`.

<br>

## Mengakses Anggota Tuple

<hr>

Setiap anggota atau elemen pada tuple dapat diakses menggunakan indeks anggota tersebut.

```python
# Tuple
makanan = ("Geprek", 5, 10000, 50000)
minuman = ("Float", 7, "Es", 7000, "Coklat", 49000)

# Akses Tuple
print(makanan[0]) # Output : "Geprek"
print(minuman[1:3]) # Output : "Kopi", 7, "Es",
print(makanan[-1]) # Output : 50000
```

- Pada kode diatas terdapat index `[1:3]`, hal ini disebut **_Range of Index_**. Ia akan mengambil anggota dari indeks `1` sampai indeks `3`.

- Dan juga terdapat index `[-1]` disebut juga **_Negative Indexing_**. Index tersebut bertujuan untuk mengambil anggota **pertama** dari urutan **terakhir**.

<br>

## Menghapus Tuple

<hr>

Anggota dari tuple tidak memang tidak bisa dihapus, maka dari itu ketika kita menghapus tuple, semua objeknya akan ikut terhapus.

```python
satria = ("Bagus", "Satria", 20, "March", 1999)

# Menghapus menggunakan indeks
del satria
print(satria) # Output : ERROR
```

<br>

## Operasi Pada Tuple

<hr>

Tuple juga dapat dioperasikan sama seperti list, dengan operator :

- Penambahan (`+`)
- Pengalian (`-`)

```python
kita = ("Kamu","Aku")
mereka =  ("Dia", "Mereka")

jadi = kita + mereka
print(jadi) # Output : ('Kamu', 'Aku', 'Dia', 'Mereka')

bunshin = ("Naruto") * 4
print(bunshin) # Output : ('Naruto', 'Naruto', 'Naruto', 'Naruto')
```

> Dalam hal ini bukan berarti `tuple` dapat diubah, mereka hanya dikombinasikan.

<br>

## Operasi Pada Anggota Tuple

<hr>

Anggota pada tuple juga dapat dioperasikan layaknya string, Operasi yang sering dipakai adalah :

- **Menghitung** jumlah anggota tuple menggunakan fungsi `len`.
- **Mengiterasi** anggota tuple menggunakan keyword `for`.
- **Mengecek** anggota tuple menggunakan operator `in`.

Ketiga operasi diatas adalah hal paling umum dijumpai. Dan berikut contoh kodenya.

```python
satria = ("Bagus", "Satria", 20, "March", 1999)

# Menghitung Tuple
print(len(satria)) # Output : 5

# Mengiterasi Tuple
for x in satria:
    print(x)

# Mengecek Tuple
if "Bagus" in satria:
    print("Bagus ada di tuple 'satria'")
```

<br>

## Built-in Method Pada Tuple

<hr>

Terdapat beberapa method yang _built-in_ pada python untuk memudahkan kita dalam mengolah tuple. Seperti :

- `len()` -> Untuk menghitung jumlah anggota tuple.
- `max()` -> untuk mengetahui anggota dengan nilai tertinggi pada tuple.
- `min()` -> untuk mengetahui anggota dengan nilai terendah pada tuple.
- `tuple()` -> untuk mengubah segala jenis _Sequence_ kedalam tuple.

<br>

```python
angka =(1, 2, 3, 4, 5, 6, 7, 8, 9)

print(len(angka)) # Output : 9
print(max(angka)) # Output : 9
print(min(angka)) # Output : 1
print(tuple(angka)) # Output : (1, 2, 3, 4, 5, 6, 7, 8, 9)
```
