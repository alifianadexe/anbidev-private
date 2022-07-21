+++
title = "Dictionary Dalam Python"
description = "Mempelajari lebih jauh tentang tipe data dictionary dalam python, bagaimana kegunaanya dan berbagai macam fungsinya"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2020-02-02"
tutorials = [
    "python"
]
cover = "/post/python-dictionary.png"
series = "Python 101"
authors = "adexe"
shortcode = "Dictionary"
url = "/python-dictionary/"
aliases = [
    "/tutorials/python/python-dictionary/"
]
sumber = [
    "https://belajarpython.com/tutorial/dictionary-python",
    "https://www.w3schools.com/python/python_dictionaries.asp"

]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Dictionary** adalah sebuah tipe data _Sequence_ yang ter-index. Tipe data ini berbeda dengan `list` dan juga `tuple`, karena setiap anggotanya berisi **key** dan **value**.

**Key** adalah identitas dari sebuah anggota pada dictionary. Key harus bertipe data yang tidak berubah seperti `string` , `int` atau `tuple`.

Sedangkan **Value** adalah nilai dari anggota tersebut.

Mereka dipisah dengan tanda **titik dua (`:`)**.

Struktur dari anggota dictionary :

> key : 'value'

<br>

## Membuat Dictionary

<hr>

Dictionary didefinisikan dengan tanda **kurung kurawal (`{}`)** atau dengan keyword `dict()`.

```python
makan = { 'pagi': "Bubur", 'siang': "Ayam Goreng", 'malam' : "Mie Ayam" }
harga = { 'nasi' : 3000 , 'ayam' : 5000, 'rujak' : 2000 }

print(makanan)
print(harga) # Output : { 'nasi' : 3000 , 'ayam' : 5000, 'rujak' : 2000 }
```

<br>

## Mengakses Anggota Dictionary

<hr>

Dalam mengakses anggota pada dictionary harus menggunakan `key` untuk setiap anggotanya.

```python
makan = { 'pagi': "Bubur", 'siang': "Ayam Goreng", 'malam' : "Mie Ayam" }
harga = { 'nasi' : 3000 , 'ayam' : 5000, 'rujak' : 2000 }

print(makan['pagi']) # Output : 'Bubur'
print(harga['rujak']) # Output : 2000

# Method .get
print(harga.get('ayam')) # Output : 5000
```

<br>

## Mengubah Nilai Anggota

<hr>

Nilai anggota pada dictionary dengan cara mengaksesnya.

```python
harga = { 'nasi' : 3000 , 'ayam' : 5000, 'rujak' : 2000 }

# Ubah anggota 'nasi'
harga['nasi'] = 4000

print(harga) # Output : { 'nasi' : 4000 , 'ayam' : 5000, 'rujak' : 2000 }
print(harga['nasi']) # Output : 4000
```

<br>

## Menambah Anggota Dictionary

<hr>

Menambah anggota baru pada dictionary dapat dilakukan hanya dengan membuat indeks `key` baru dan menaruh nilai didalamnya.

```python
mobil = { 'brand': "Ford", 'model': "Mustang", 'tahun' : 1994 }

# Tambah indeks 'warna'
mobil['warna'] = "Merah"

print(mobil) # Output : { 'brand': "Ford", 'model': "Mustang", 'tahun' : 1994 , 'warna' : "Merah" }
```

Jika kalian ingin menambah dictionary dengan dictionary yang lain, gunakan method `update()`.

```python
peran = {'utama' : 'John Doe', 'pembantu' : 'Annie Marie'}

# Tambah Dictionary
peran.update({'sampingan': 'Desi', 'antagonis': 'Ulfi'})

print(peran)
# Output : {'utama' : 'John Doe', 'pembantu' : 'Annie Marie', 'sampingan': 'Desi', 'antagonis': 'Ulfi' }
```

<br>

## Menghapus Anggota Dictionary

<hr>

Banyak cara untuk menghapus anggota pada dictionary, dan setiap caranya memiliki efek yang berbeda - beda.

Menggunakan keyword `del` dapat menghapus _key_ serta _value_ pada dictionary.

```python
peran = {'utama':'John Doe', 'pembantu': 'Annie Marie'}

# del keyword
del peran['utama']

print(peran)
```

Sedangkan menggunakan method `pop()` akan memberikan value ke variabel yang didefinisikan.

```python
peran = {'utama': 'John Doe', 'pembantu': 'Annie Marie'}

# del keyword
utama = peran.pop('utama')

print(peran)
print(utama)
```

## Dictionary Bersarang (Nested Dictionary)

Dictionary Bersarang, bisa disebut dictionary didalam dictionary. Cocok digunakan untuk data yang kompleks.

```python

# nested
nested_dict = {
    'mamalia':{
        'nama':'Anjing',
        'tipe':'Carnivora',
        'jumlah kaki': 4
    },
    {
        'nama':'Kucing',
        'tipe':'Carnivora',
        'jumlah kaki': 4
    },
    {
        'nama':'Kerbau',
        'tipe':'Herbivora',
        'jumlah kaki': 4
    }
}
```

## Dictionary Method

Berikut beberapa method yang ada pada dictionary.

|   Method Python   |                             Penjelasan                              |
| :---------------: | :-----------------------------------------------------------------: |
|   dict.clear()    |                 Menghapus semua elemen Dictionary.                  |
|    dict.copy()    |              Membuat salinan dari Dictionary tersebut.              |
| dict.has_key(key) | Mengembalikan `true` jika key dalam Dictionary, `false` sebaliknya. |
|    dict.keys()    |                Mengembalikan daftar key dictionary.                 |
|   dict.values()   |               Mengembalikan daftar values dictionary.               |
