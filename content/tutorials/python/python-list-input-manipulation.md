+++
title = "Ragam Manipulasi Input List Dengan Python"
description = "Menggunakan beragam input list serta penggunaan modul dan input"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python",
    "funcode",
    "modul"
]
draft=false
date = "2020-12-26"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
shortcode = "List Input"
url = "/python-list-input-manipulation/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Funcode kali ini kita akan membahas bagaimana kita bisa menggunakan fungsi `input` dan memasukkannya pada sebuah `list`. Mungkin kalian yang udah *expert* bakal mudah, tapi disini anbi bakal kasih sebuah tips beberapa cara `input`.

<br>

## Loop Input 

<hr>

Kalian yang sering menggunakan `input` mungkin terbiasa menginputkan satu persatu. Nah, coba kalian gabungkan dengan looping. Contohnya seperti ini : 

> Kita buat sebuah program yang akan terus menambah anggota `list` setiap inputnya dan akan berhenti ketika kita `input` nilai 0

```python
listku = []
while True
    angka = int(input("Tambah Anggota List : "))
    if angka != 0
        listku.append(angka)
    else:
        break
print(listku)
```
Contoh program akan berjalan seperti ini :

```
Tambah Anggota List : 20
Tambah Anggota List : 38
Tambah Anggota List : 18
Tambah Anggota List : 28
Tambah Anggota List : 198
Tambah Anggota List : 0
[20, 38, 18, 28, 198]
```

Kode diatas akan membuat sebuah `list` dari hasil yang kita `input`, jika kita menginputkan nilai 0, maka looping akan berhenti. 


<br>

## Single List Input

<hr>

Sekarang coba kita memakai `input` yang langsung membuat sebuah `list` dalam **satu baris**. Contoh nya seperti apa?

> Mari kita buat sebuah `input` yang saat setiap nilainya dipisahkan menggunakan spasi.  

    
```python       
listku = list(map(int, input().split(" ")))
print(listku)
```

Coba kita jalankan program diatas dan lihat bagaimana cara kode ini bekerja.

!["Cara Kerja Input List"](/post/python-list-input-manipulation-01.gif "Cara Kerja Input List")

Seperti yang terlihat diatas, setiap nilai `input` dipisahkan dengan spasi, dan otomatis langsung terbentuk sebuah `list`.

Hal ini dikarenakan fungsi `map` akan memetakan nilai yang dipisahkan oleh `input.split(" ")` menjadi satu kesatuan nilai bertipe [integer](https://anbidev.com/python-numeric). 

<br>

## Mari Kita Ngoding!

<hr>

Sekalian buat tugas kuliah, anbi bakal buat program yang dipisahkan menjadi beberapa modul. Hitung - hitung latihan dalam menerapkan [import modul](https://anbidev.com/python-modul).

Buat tiga file :
- **Globals.py** , untuk menampung variabel yang akan kita manipulasi.
- **Library.py**, untuk menampung semua fungsi - fungsi untuk menyelesaikan setiap case.
- **TestApp.py**, sebagai eksekutor fungsi utama.

!["Pastikan Dalam Satu Folder"](/post/python-list-input-manipulation-02.png "Pastikan Dalam Satu Folder")


Nah, persiapan file modul udah siap, mari kita lihat soal - soalnya, Dan ternyata ada 3 case.

1. Buat sebuah program yang akan terus menambah anggota `list` setiap inputnya dan akan berhenti ketika kita `input` nilai 0. (***Loop Input***)

2. Buat sebuah program yang menghitung **jumlah**, **rata-rata**, **median**,  **terkecil**, **terbesar** dari seluruh anggota `list`. (***Single List Input***)

3. Buat program menghitung jumlah tahun kemenangan Anbi, yaitu **Tahun Ganjil** dari rentang **1990 - 2020**. (***Single List Input***)

Cukup, menantang ya, kita harus membuat setiap programmnya menjadi sebuah fungsi - fungsi. Lalu kemudian dieksekusi dengan modul `TestApp.py`.

Okay, kita siapkan variabel - variabel **Globals** nya terlebih dahulu.

### **Globals.py**

Kita buat variabel yang dibutuhkan untuk menyelesaikan persoalan diatas.

```python
# untuk case 1
list_output = []

# untuk case 2
angka_sum = 0
angka_avg = 0
angka_med = 0
angka_min = 0
angka_max = 0

# untuk case 3
winning_count = 0
```


<br>

### **MyLib.py**

Mari kita buat 3 fungsi untuk menyelesaikan 3 kasus diatas.

```python
import Globals
import math
import statistics

def loopListOutput():
    while True:
        angka = int(input())
        if angka != 0:
            Globals.list_output.append(angka)
        else:
            break
    print(Globals.list_output) 

def calculateList():
    L = list(map(int, input().split(" ")))
    print(L)
    
    Globals.angka_sum = sum(L)
    Globals.angka_avg = statistics.mean(L)
    Globals.angka_med = statistics.median(L)
    Globals.angka_min = min(L)
    Globals.angka_max = max(L)

    print(Globals.angka_sum)
    print(Globals.angka_avg)
    print(Globals.angka_med)
    print(Globals.angka_min)
    print(Globals.angka_max)

def winningChance():
    list_tahun = list(map(int, input().split(" ")))

    for tahun in list_tahun:
        if tahun > 1990 and tahun < 2020:
            if tahun % 2 == 1:
                Globals.winning_count += 1

    print(Globals.winning_count)
```

Sebelum ke modul selanjutnya, Mari kita bedah kode diatas. 

Pertama untuk membantu kita dalam menyelesaikan beberapa kasus perhitungan, kita `import` beberapa modul tambahan seperti `math` dan `statistics`.

Dan tidak lupa `import` juga modul dimana variabel kita ditampung, yaitu `Globals`.

* **Kasus 1**
   
   Untuk penyelesaian kasus ini sudah kita bahas diatas ya, dengan menggunakan `while True` program akan terus meminta `input` sampai nilai yang diinputkan bernilai 0.

* **Kasus 2**

   Untuk penyelesaian kasus 2, kita menggunakan beberapa bantuan dari modul `statistics` untuk mencari **mean** dan **median** dan *built-in-function* `min`, `max` dan `sum` untuk mencari sisanya.

   Tentu saja inputnya pakai ***single list input*** yaa.

* **Kasus 3**

   Untuk penyelesaian kasus ke 3 kita hanya perlu membatasi nilai anggota dari `list` bernilai rentang **1990** sampai **2020**. Lalu kita cek apakah tahun tersebut **ganjil** atau **genap** menggunakan [modulo](https://anbidev.com/python-operator/#operator-aritmatika).

   Jika **Ganjil** maka variabel `winning_count` ditambah satu, jika genap maka *skip*. Tidak lupa inputnya menggunakan ***single list input*** juga yaa.

   > variabel `winning_count` menampung jumlah tahun yang **ganjil**


<br>

### TestApp.py

Sekarang waktunya kita uji coba ke modul eksekutor utama kita.

```python
import MyLib

def main():
    print("Element List Output")
    MyLib.loopListOutput()
    
    print("")

    print("Calculate List")
    MyLib.calculateList()
    
    print("")

    print("Year Winning Chance")
    MyLib.winningChance()


if __name__ == "__main__":
    main()
```

Intinya kita panggil semua fungsi yang sudah kita buat tadi di modul `MyLib.py` dan mengeksekusinya dalam fungsi utama `main()`.

Dan seperti inilah programmnya.

!["Hasil Output Dari Program"](/post/python-list-input-manipulation-03.png "Hasil Output Dari Program")



<center> . . . </center>

Untuk **full codenya** kalian bisa kalian di github [AnbiDev](https://github.com/AnbiDev/).

:octopus: [https://github.com/AnbiDev/list-input-python](https://github.com/AnbiDev/list-input-python)

Oke sekian dari Anbi, sampai ketemua di FunCode selanjutnya

> Happy Solving