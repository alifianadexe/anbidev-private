+++
title = "Membuat Fungsi Matematika Secara Manual"
description = "Membuat macam - macam fungsi matematika secara manual menggunakan python"
type = ["tutorials","tutorial"]
status = "publish"
draft=false
tags = [
    "python",
    "funcode",
    "modul"
]
date = "2021-01-01"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
shortcode = "Fungsi Math Manual"
url = "/python-math-manual/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Malam ini saya akan membahas beberapa fungsi aritmatika yang sudah ada di dalam Python. Fungsi seperti `sum`, `max` , dan  `min` serta beberapa cara mencari **rata - rata** dan **median**.

Sekarang mari kita bedah bagaimana isi dari fungsi - fungsi ini. Kita juga akan membahas alur logika yang terjadi pada kode tersebut.

<br>

## Penjumlahan (Sum)

<hr>

Kita mulai dari membedah fungsi `sum`. Dari tujuannya fungsi ini digunakan untuk menjumlahkan seluruh anggota `list` array. Fungsi ini *built-in* pada python sehingga tidak perlu mengimport *package* apa - apa.

!["Rumus Penjumlahan Dari Array"](/post/python-math-manual-01.png "Rumus Penjumlahan Dari Array")

Dari rumus diatas, kita bisa tahu bahwa cara paling cepat adalah dengan menjumlahkan semua anggota array. Misal kita punya array dengan anggota `[2, 5, 6, 7, 12]`. Coba kita jumlahkan secara manual menggunakan fungsi yang kita buat.

```python
def funcPenjumlahan(arr):
  jumlah = 0
  for num in arr:
    jumlah += num
  return jumlah

listku = [2, 5, 6, 7, 12]
hasil_sum = funcPenjumlahan(arr)
print(hasil_sum) 
#32
```

Bagaimana kode diatas berjalan? Dari kode diatas terdapat fungsi bernama `funPenjumlahan`. Difungsi tersebut ia mendefinisikan sebuah ***for-loop***. 

Ia akan memanggil semua anggota satu persatu dalam perulangan tersebut untuk kemudian ditambahkan kedalam variabel `result`. Dan disitilah hasil penjumlahan (`sum`) dapat ditemukan.

<br>

## Rata - Rata (Average)

<hr>

Selanjutnya kita akan membahas bagaimana cara mencari rata - rata dari sebuah `list` array. 

![Rumus Mencari Rata - Rata](/post/python-math-manual-02.png "Rumus Mencari Rata - Rata")

Logika paling gampang dalam mencari rata - rata dari seluruh anggota array adalah dengan menjumlahkan nilainya lalu membaginya dengan berapa jumlah anggota (panjang) pada `list` array tersebut.

Nah, kan kita udah buat fungsi penjumlahan tadi, sekarang kita hanya perlu membuat fungsi untuk mencari berapa jumlah anggota (panjang) dari sebuah `list` array.

```python
def funcPanjangArray(arr):
  panjang = 0
  for angg in arr:
    panjang += 1
  return panjang

listku = [9, 4, 12, 7, 8, 4]
length_arr = funcPanjangArray(listku)
print(length_arr)
```

Oke, sekarang kita sudah membuat fungsi untuk mencari panjang array, sekarang kita gunakan logika diatas yaitu membagi jumlah array dengan panjang array.

```python
listku = [29, 2, 87, 19, 14, 57]

hasil_sum = funcPenjumlahan(arr)
length_arr = funcPanjangArray(listku)
rata_rata = hasil_sum / length_arr

print(rata_rata)
# 34.666666666666664
```

Gimana, udah paham kah fungsi - fungsi diatas? Jika bingung bisa komen kok dibawah


<br>

## Nilai Tengah (Media)

<hr>

Kita tahu bahwa pada sebuah `list` array pasti ada nilai tengahnya. Dan bagaimana kita mencari nilai tengah menggunakan kode - kode python? 

!["Rumus Mencari Nilai Tengah Pada Array"](/post/python-math-manual-03.png "Rumus Mencari Nilai Tengah Pada Array")

Dari rumus diatas, bisa kita simpulkan dalam mencari nilai tengah dari seluruh anggota `list` array adalah dengan cara membandingkan **ganjil** atau **genap** pada panjang `list` array.

* Jika, panjang dari `list` array bernilai **ganjil**, maka panjang array kita bagi 2 menggunakan *division floor* (`//`).

* Jika, panjang dari `list` array bernilai **genap**, maka panjang array kita bagi 2 menggunakan *division floor* (`//`), ditambah panjang array yang kita bagi 2 dan dikurangi 1, setelah itu dibagi 2. (*haha ribet ya*) 

Dan hasil dari semua kalkulasi itu akan menjadi **index** untuk mengetahui posisi nilai tengah pada array. Mending kita langsung lihat kodenya : 

```python
def funcMedian(arr):
  # cari panjang array
  panjang = funcPanjangArray(arr)
  
  if panjang % 2 == 1:      # jika ganjil
    index = panjang // 2 
  else:                   # jika genap
    index1 = panjang // 2 
    index2 = (panjang // 2) - 1  
    index = (index1 + index2) / 2
  
  # akses anggota meggunakan index median
  median =  arr[int(index)]

  return median

listku = [29, 41, 2, 52, 12]
median = funcMedian(listku)
print(median)
# 2
```

Nah, perlu diingat nilai **index** hanya berperan untuk mencari lokasi nilai median sebenarnya pada array. Misal, array `[a, b, c]`, nilai median dari array tersebut terletak pada index ke 2. 

<br>

## Min dan Max 

<hr>

Nah, fungsi yang akan kita buat terakhir adalah mencari `min` dan `max` dari suatu array. Bagaimana cara mencari nilai terkecil dan nilai terbesar suatu array secara manual?

Cara paling mudah adalah dengan membandingkan satu persatu nilai anggota tersebut dengan anggota yang lain. Menggunakan operator perbandingan lebih besar (`>`) dan lebih kecil (`<`) adalah kunci untuk mendapatkan **min** dan **max**.

* **MAX**
  ```python
  def cariMax(arr):
    terbesar = arr[0]
    for num in arr:
        if num > terbesar:
          terbesar = num
    return terbesar  
  ```

* **MIN**
  ```python
  def cariMin(arr):
    terkecil = arr[0]
    for num in arr:
      if num < terkecil:
        terkecil = num
    return terkecil  
  ```

Dari kedua fungsi diatas, bisa kita lihat setiap anggota dibandingkan satu persatu menggunakan **for-loop** untuk mencari nilai terbesar dan terkecil. 

<br>

## Mari Ke Tahap Berikutnya

<hr>

Kita sudah mencoba membuat semua fungsi aritmatika dasar untuk menghitung array secara manual. Sekarang mari kita implementasikan kedalam bentuk yang lebih terstruktur, yaitu dibagi per**modul**.

Kita buat permodul seperti biasanya : 
1. **`variabel.py`**
2. **`library.py`**
3. **`main.py`**

### variabel.py

Berisi semua variabel yang akan kita gunakan untuk output dalam mengelola aplikasi kita.

```python
jumlah = 0
rata_rata = 0
nilai_tengah = 0
terbesar = 0
terkecil = 0
```

### library.py

Berisi fungsi - fungsi yang digunakan, untuk ini sudah kita buat diatas, langsung saja kita implementasikan ke modul ini.

```python
def funcPenjumlahan(arr):
    jumlah = 0
    for num in arr:
        jumlah += num
    return jumlah

def funcPanjangArray(arr):
    panjang = 0
    for angg in arr:
        panjang += 1
    return panjang

def funcMedian(arr):
    # cari panjang array
    panjang = funcPanjangArray(arr)
    
    if panjang % 2 == 1:      # jika ganjil
        index = panjang // 2 
    else:                   # jika genap
        index1 = panjang // 2 
        index2 = (panjang // 2) - 1  
        index = (index1 + index2) / 2
    
    # akses anggota meggunakan index median
    median =  arr[int(index)]

    return median

def cariMax(arr):
    terbesar = arr[0]
    for num in arr:
        if num > terbesar:
            terbesar = num
    return terbesar

def cariMin(arr):
    terkecil = arr[0]
    for num in arr:
      if num < terkecil:
        terkecil = num
    return terkecil 
```

### main.py

Lalu, tinggal kita eksekusi kedalam file utama kita. Disini **input** dan **output** berada, seperti biasanya fungsi `main()` akan menjadi fungsi eksekutor kita.

```python
import variabel as var
import library as lib

def main():
  listku = list(map(int, input().split(" ")))

  var.jumlah = lib.funcPenjumlahan(listku)
  var.rata_rata = lib.funcPenjumlahan(listku) / lib.funcPanjangArray(listku)
  var.nilai_tengah = lib.funcMedian(listku)
  var.terbesar = lib.cariMax(listku)
  var.terkecil = lib.cariMin(listku)
  
  print(var.jumlah)
  print(var.rata_rata)
  print(var.nilai_tengah)
  print(var.terbesar)
  print(var.terkecil)

if __name__ == "__main__":
    main()
```

Dan inilah hasil outputnya :

!["Output"](/post/python-math-manual-04.png "Output")

<center> . . . </center>

Untuk **full codenya** kalian bisa kalian di github [AnbiDev](https://github.com/AnbiDev/math-manual-python).

:octopus: [https://github.com/AnbiDev/math-manual-python](https://github.com/AnbiDev/math-manual-python)

Oke sekian dari Anbi, sampai ketemu di FunCode selanjutnya

> Happy Solving