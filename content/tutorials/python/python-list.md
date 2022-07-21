+++
title = "List Dalam Python"
description = "Mempelajari lebih jauh tentang tipe data list dalam python, bagaimana kegunaanya dan berbagai macam fungsinya"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-11-10"
tutorials = [
    "python"
]
cover = "/post/python-list.png"
series = "Python 101"
authors = "adexe"
shortcode = "List"
url = "/python-list/"
sumber = [
    "https://belajarpython.com/tutorial/list-python",
    "https://www.w3schools.com/python/python_lists.asp"

]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**List** adalah struktur data paling dasar dalam python. Bentuk dari list berupa kumpulan data yang anggotanya (nilainya) dapat diubah.

Indeks pertama pada `list` dimulai dari nol (0), indeks kedua nya itu satu (1) dan seterusnya.

## Membuat List

List didefinisikan dengan **kurung siku (`[]`)** atau dengan keyword `list()`.

```python
# Mendefinisikan List
mobil = ["Ferari", "Ducaty", "Honda"]
datadiri = ["Desi","Familia", 20, 1999]

# Dengan keyword list
motor = list(("Harley", "Honda", "Vespa"))
```

> Pada saat menggunakan keyword `list` pastikan menggunakan 2 kurung `(())`.

<br>

## Mengakses Anggota List

<hr>

Setiap anggota atau elemen pada list dapat diakses menggunakan indeks anggota tersebut.

```python
# List
makanan = ["Tahu", "Tempe", "Sayur"]
minuman = ["Float", "Kopi", "Teh", "Air", "Smothy", "Alkohol"]

# Akses Range
print(makanan[0]) # Output : "Tahu"
print(minuman[1:3]) # Output : "Kopi", "Teh", "Air",
print(makanan[-1]) # Output : "Sayur"
```

- Pada kode diatas terdapat index `[1:3]`, hal ini disebut **_Range of Index_**. Ia akan mengambil anggota dari indeks `1` sampai indeks `3`.

- Dan juga terdapat index `[-1]` disebut juga **_Negative Indexing_**. Index tersebut bertujuan untuk mengambil anggota **pertama** dari urutan **terakhir**.

<br>

## Mengubah Nilai Anggota List

<hr>

Kamu dapat mengubah nilai pada setiap anggota pada list dengan mengakses indeks anggota tersebut.

```python
# List
pelajaran = ["Matematika", "Fisika", "Kimia", "Poltergeis"]
print("Pelajaran Indeks ke 2 - " + pelajaran[1])

pelajaran[1] = "Filsafat"
print("Pelajaran Indeks ke 2 - " + pelajaran[1])

# INGAT : Indeks pertama dimulai dari 0
```

<br>

## Menambah Anggota List

<hr>

Untuk menambah anggota pada list terdapat 2 cara :

1. Jika kita tahu indeks yang tidak ada pada list,Tinggal definisikan saja indeks tersebut.
2. Tetapi, jika hanya ingin menambahkan anggota tanpa harus mengetahui indeks secara spesifik, gunakan method `append()` atau `insert()`.

```python
buah = ["Anggur", "Nanas"]

# Mendefinisikan indeks baru yang tidak ada di list
buah[3] = "Ceri"
print(buah) # ["Anggur", "Nanas", "Ceri"]

# Menambah dengan method Append dan Reppend
buah.append("Semangka")
buah.insert(0, "Apel")
print(buah) # Output : ["Apel", "Anggur", "Nanas", "Ceri", "Semangka"]
```

Perbedaan antara `append()` dan `insert()` adalah :

- `append()` menambah anggota dari belakang atau setelah anggota terakhir.
- `insert()` menyisipkan anggota sesuai indeks yang diinginkan. `0` adalah indeks, dan "Apel" adalah objek.

<br>

## Menghapus Anggota List

<hr>

Anggota pada list juga dapat dihapus. Untuk menghapus anggota pada list terdapat 2 cara :

1. Ketika kita tahu indeks dari anggota tersebut gunakan keyword `del`.
2. Tetapi, jika yang kita tahu adalah nilai dari anggota tersebut, gunakan method `remove()`.

```python
serangga = ["Belalang", "Katak", "Kecoak", "Mantan"]

# Menghapus menggunakan indeks
del serangga[1]
print(serangga) # Output : ["Belalang", "Kecoak", "Mantan"]

# Menghapus menggunakan nilai
serangga.remove("Mantan")
print(serangga) # Output : ["Belalang", "Kecoak"]
```

<br>

## Operasi Pada List

<hr>

Dalam python list juga dapat dioperasikan, akan tetapi operator yang mendukung untuk operasi pada list hanya :

- Penambahan (`+`)
- Pengalian (`-`)

```python
kita = ["Kamu","Aku"] + ["Dia"]
print(kita) # Output : ['Kamu', 'Aku', 'Dia']

bunshin = ["Naruto"] * 4
print(bunshin) # Output : ['Naruto', 'Naruto', 'Naruto', 'Naruto']
```

List merespon operasi umum sama seperti string, seperti yang dicontohkan di bab [**String**](<(https://anbidev.com/tutorials/python/python-string/#string-slicing)>).

<br>

## Operasi Pada Anggota List

<hr>

Anggota pada list juga dapat dioperasikan layaknya string, Operasi yang sering dipakai adalah :

- **Menghitung** jumlah anggota list menggunakan fungsi `len`.
- **Mengiterasi** anggota list menggunakan keyword `for`.
- **Mengecek** anggota list menggunakan operator `in`.

Ketiga operasi diatas adalah hal paling umum dijumpai. Dan berikut contoh kodenya.

```python
warna = ["Merah", "Kuning" ,"Hijau", "Ungu"]

# Menghitung List
print(len(warna)) # Output : 4

# Mengiterasi List
for x in warna:
    print(x)

# Mengecek List
if "Kuning" in warna:
    print("Kuning ada di list warna")
```

<br>

## Built-in Function Pada List

<hr>

Terdapat beberapa function yang _built-in_ pada python untuk memudahkan kita dalam mengolah list. Seperti :

- `len()` -> Untuk menghitung jumlah anggota list.
- `max()` -> untuk mengetahui anggota dengan nilai tertinggi pada list.
- `min()` -> untuk mengetahui anggota dengan nilai terendah pada list.
- `list()` -> untuk mengubah segala jenis _Sequence_ kedalam list.

<br>

```python
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

print(len(angka)) # Output : 9
print(max(angka)) # Output : 9
print(min(angka)) # Output : 1
print(list(angka)) # Output : [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

<br>

## Method Pada List

<hr>

Berikut beberapa method yang berguna.

| Name   | Penjelasan                                                                         | Penggunaan              |
| ------ | ---------------------------------------------------------------------------------- | ----------------------- |
| Append | Menambah anggota baru.                                                             | `list.append(x)`        |
| Count  | Menghitung ada berapa anggota pada list yang sesuai dengan parameter.              | `list.count(x)`         |
| Extend | Menambah anggota Sequence ke dalam list.                                           | `list.extend(seq)`      |
| Index  | Mencari index terendah yang sesuai dengan parameter.                               | `list.index(x)`         |
| Insert | Menyisipkan anggota sesuai index yang diberikan.                                   | `list.insert(index, x)` |
| Pop    | Menghapus serta mengembalikan anggota yang sesuai parameter atau anggota terakhir. | `list.pop(x)`           |
| Remove | Menghapus anggota sesuai dengan parameter                                          | `list.remove(x)`        |
| Sort   | Mengurutkan list                                                                   | `list.sort()`           |
