+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-fungsi.png"
date = 2020-09-03T17:00:00Z
description = "Berkenalan dengan penggunaan fungsi serta cara kerjanya pada python."
series = "Python 101"
shortcode = "Fungsi"
status = "publish"
sumber = ["https://www.w3schools.com/python/python_functions.asp"]
tags = ["python"]
title = "Fungsi Dalam Python"
type = ["tutorials", "tutorial"]
url = "/python-fungsi/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"
+++

Apa itu fungsi?  Fungsi adalah blok kode yang dapat digunakan kembali untuk melakukan suatu tindakan atau aksi terhadap suatu program. Bagaimana cara membuat fungsi? nih simak lebih dalam

<br>

## Buat Fungsi 

<hr>

Untuk membuat fungsi harus menggunakan keyword spesial yaitu `def` dengan diikuti nama fungsi dan juga dalam kurung `()`. 

```python
def namaFungsi():
    print("Ini Adalah Fungsi")
```

<br>

## Parameter Fungsi

<hr>

Kita ingin agar fungsi output nya bisa kita. Misal kita ingin fungsi bisa menghasilkan output yang berbeda - beda sesuai dengan apa yang kita kehendaki. Caranya menggunakan **Parameter**.

**Parameter** adalah variabel yang menampung nilai untuk diproses di dalam fungsi yang kita buat.

```python
def iniFungsi(param):
    print("Parameter Fungsi ini Adalah :", param)
```

variabel `param` disebut sebagai parameter untuk fungsi `iniFungsi`. Cara memakai nya seperti ini :

```python
iniFungsi("Kamu Selalu Dihati")
# Parameter Fungsi ini Adalah : Kamu Selalu Dihati
```

atau bisa seperti ini 

```python
angka = 20
iniFungsi(angka)
# Parameter Fungsi ini Adalah : 20
```

<br>

## Fungsi Dengan Return

<hr>

Fungsi dengan **`return`** (*mengembalikan*) apa artinya? Jadi, tipe fungsi ini mengembalikan nilai yang sudah diproses oleh fungsi tersebut, dan tipe fungsi itu disebut **Prosedur**. 

Langsung saja contohnya agar lebih bisa dimengerti.

```python
def tambah(angka1, angka2):
    hasil = angka1 + angka2
    return hasil
```

Nah, kode diatas berfungsi untuk menambahkan 2 angka, dan hasilnya nanti bakal di*return*. Masih belum paham? lihat contoh implementasinya.

```python
hasilTambah = tambah(20, 30)
print(hasilTambah)
# 50
```

<br>

<center> . . . </center>

<br>

## Buat Apa Fungsi?

<hr>


Kenapa harus pakai fungsi? begini, menurut saya fungsi memiliki dua kegunaan utama, pertama ***reuseable*** dan ***readable***.


<br>

### Reuseable (Bisa Dipakai Berulang - Ulang)

***reuseable*** artinya dari sebuah fungsi kita tidak perlu membuat kode dengan hasil yang sama berkali - kali. Kita hanya perlu membuat satu fungsi untuk menghasilkan kode yang sama.

misal saya punya kode seperti ini :

```python
tambah1 = 40 + 200
print(tambah1)

tambah2 = 59 + 90
print(tambah2)

tambah3 = 59 + 19
print(tambah3)
```

Bisa dilihat kode diatas, kodenya sama tapi cuman diulang - ulang. Mari kita buat versi fungsinya dibawah ini.

```python
def tambah(angka1, angka2):
    hasil =  angka1 + angka2
    print(hasil)

tambah(40, 200)
tambah(59, 90)
tambah(59, 19)
```

Nah lebih rapi, dan efisien menggunakan fungsi.

<br>

### Readable (Kode Mudah Dibaca)

***readable*** artinya dari program yang sangat besar bisa kita bagi menjadi bagian - bagian tertentu agar lebih kecil dengan tujuan lebih mudah dibaca.

misal, saya membuat sebuah program penghitung angka dengan kode saya seperti ini :

```python
angka1 = int(input("Angka 1 : "))
angka2 = int(input("Angka 2 : "))
tambah = angka1 + angka2
print(tambah)
kurang = angka1 - angka2
print(kurang)
bagi = angka1 / angka2
print(tambah)
kali = angka1 * angka2
print(kali)
```

mungkin kode diatas terlihat simpel, tapi kalau menurut saya ini agak kurang enak dibaca. Kita pecah bagian - bagiannya agar lebih terstruktur.


```python
angka1 = int(input("Angka 1 : "))
angka2 = int(input("Angka 2 : "))

def tambah(angka1, angka2):
    print(angka1 + angka2)

def kurang(angka1, angka2):
    print(angka1 - angka2)

def bagi(angka1, angka2):
    print(angka1 / angka2)

def kali(angka1, angka2):
    print(angka1 * angka2)

tambah(angka1, angka2)
kurang(angka1, angka2)
bagi(angka1, angka2)
kali(angka1, angka2)
```

Mungkin kodenya banyak, tapi lebih terstrukturkan dan mudah dibacakan. 

<center> . . . </center>

Nah gitu aja, nanti ketemu lagi di post saya berikut - berikutnya.