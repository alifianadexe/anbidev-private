+++
title = "Program Simulasi  Remote AC"
description = "Membuat simulasi program remote AC menggunakan python"
type = ["tutorials","tutorial"]
status = "publish"
draft=false
tags = [
    "python",
    "funcode",
    "modul"
]
date = "2020-12-14"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
shortcode = "Remote AC"
url = "/python-ac-remote/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Pada kesempatan yang berbahagia, Anbi ingin membagikan sebuah tutorial cara menggunakan [modul](https://anbidev.com/python-modul), [variabel](https://anbidev.com/python-variabel) dan [fungsi](https://anbidev.com/python-function) pada sebuah aplikasi simulasi AC Remote menggunakan bahasa python.

Mari saja kita bahas *requirement* dalam pembuatan aplikasi AC Remote ini.

<br>

## Tantangan!

<hr>

Buatlah sebuah simulasi remote AC sederhana dengan ketentuan memilki beberapa fitur :

* Mengatur <ins>suhu</ins> antara **18** sampai **24** derajat
* Mengatur <ins>kekuatan angin</ins> dengan tekanan **1** sampai **4**
* Memiliki fitur *Power Chill* dimana suhu disetting paling rendah dan tekanan angin paling tinggi.
* Display status AC

Dengan ketentuan diatas bisa disimpulkan kita membutuhkan beberapa fungsi untuk bisa mengatur itu semua.

<br>

## Pembahasan

<hr>

Karena disini kita ingin belajar tentang penerapan modul, fungsi dan variabel. Maka disini kita buat satu folder yang berisikan modul - modul kode kita.

Oke, misal kita buat folder bernama **remote-ac**, dan didalam folder tersebut kita buat 3 modul : 

* **variabel.py** yang berisi kode **variabel global** yang akan kita gunakan pada program.
* **library.py** yang berisi **kumpulan fungsi** yang nantinya setiap fungsi berperan mengatur setiap fitur pada AC.
* **main.py** ini adalah modul utama dimana program akan berjalan.

![list Modul Pada Folder remote-ac](/post/python-ac-remote-01.png "list Modul Pada Folder remote-ac")


<br>

## Ayo Ngoding!

<hr>

Baik mari kita mulai dari modul `variabel.py` :

```python
status = False
temp = 24
fan = 2
```

Nah, didalam modul `variabel.py` saya mendeklarasikan 3 variabel, dengan kegunaan sebagai berikut :

* `status` untuk menyatakan status AC, apakah nyala atau mati (defaultnya mati atau `False`)
* `temp` untuk menyatakan tinggi suhu (defaultnya 24 derajat).
* `fan` untuk menyatakan kekuatan angin (defaultnya 2)

Setelah selesai dengan modul `variabel.py` sekarang pindah ke modul `library.py` yang akan kita isi dengan beberapa fungsi untuk mengatur fitur - fitur pada AC.

Berikut kode untuk file `library.py` : 

```python
import variabel as var

def checkOnOff():
    '''untuk cek status AC mati atau nyala'''
    '''jika True -> Hidup jika False -> Mati'''
    return var.status

def turnOnOff():
    '''mengubah status AC agar nyala atau mati'''
    var.status = True if not var.status else False

def tempUp():
    '''menaikkan  suhu AC'''
    initialState = checkOnOff() 
    # jika AC hidup maka eksekusi kode dibawahnya
    if initialState: 
        if var.temp < 28:
            var.temp += 1

def tempDown():
    '''menurunkan suhu AC'''
    initialState = checkOnOff() 
    # jika AC hidup maka eksekusi kode dibawahnya
    if initialState: 
        if var.temp > 18:
            var.temp -= 1

def fanSpeed():
    '''menaikkan kekuatan kipas AC'''
    initialState = checkOnOff() 
    # jika AC hidup maka eksekusi kode dibawahnya
    if initialState: 
        var.fan = var.fan + 1 if var.fan < 4 else 1
    
def powerChill():
    ''' setting nilai temperatur paling rendah dan fan paling tinggi '''
    initialState = checkOnOff()
    # jika AC hidup maka eksekusi kode dibawahnya
    if initialState:
        var.temp = 18
        var.fan = 4

def display():
    ''' display status fan dan temp '''
    initialState = checkOnOff()
    # jika AC hidup maka eksekusi kode dibawahnya
    if initialState:
        print("Temperatur Suhu : ", var.temp)
        print("Level Kipas : ", var.fan)
```

Nah dapat dilihat pada <mark>kode paling atas sendiri</mark> terdapat *keyword* `import` disertai nama modul `variabel` yang berfungsi agar modul **library** dapat menggunakan variabel pada modul `variabel`.

Nah uniknya saya menambahkan *keyword* `as`, apa fungsi kata kunci ini? Hal ini digunakan untuk mengistilahkan dalam pemanggilan sebuah modul. 

Misal namaku *"Carlos Johanton"* lalu ku `as` sebagai *"CJ"*, Nah saya hanya memanggil nama pendekknya yaitu *"CJ"*. 

Sama seperti modul, ia dapat diisitilahkan sesuai dengan kemauan kalian. Dapat dilihat bagaimana pemanggilan variabel pada modul ini meggunakan istilah `var`, seperti : 

```python
var.status
```

Kode diatas, bermaksud untuk memanggil variabel `status` pada modul `variabel.py`.

<center> .  .  . </center>

Nah untuk kegunaan fungsi - fungsi nya sudah saya *comment* pada kode diatas. Saya ingin membahas sedikit tentang beberapa kode yang unik seperti :

```python
var.fan = var.fan + 1 if var.fan < 4 else 1
```

Kode diatas disebut dengan ***[shorthand if](https://www.anbidev.com/python-conditions/#penulisan-singkat)*** atau penulisan singkat `if`. Maksud dari kode diatas adalah variabel `fan` sama dengan `fan + 1` jika variabel `fan` kurang dari 4 jika tidak kembali ke 1.


Modul terakhir adalah modul utama kita, yaitu modul `main.py`. Pada modul ini kita akan memanggil beberapa fungsi dengan cara **mengimport** nya terlebih dahulu lalu memanggilnya dengan istilah `func`.

Berikut kode untuk `main.py` : 
```python
import library as func

def main():
  
  # nyalain coba
  func.turnOnOff()

  func.display()

  # naikan suhu 2 kali
  func.tempUp()
  func.tempUp()

  # naikin angin 2 kali
  func.fanSpeed()
  func.fanSpeed()

  func.display()

if __name__ == "__main__":
    main()
```

Nah kira - kira kalau semua berjalan dengan baik hasilnya akan seperti ini :

```
Temperatur Suhu :  24
Level Kipas :  2
Temperatur Suhu :  26
Level Kipas :  4
```

Nah segitu doang penerapan untuk **[modul](https://anbidev.com/python-modul), [variabel](https://anbidev.com/python-variabel) dan [fungsi](https://anbidev.com/python-function)** dalam aplikasi ini hehe. Belum puas? Oke anbi kasih lanjutannya lebih banyak lagi.

<br>

## Ngoding! Ngoding Lagi!

<hr>

Anbi bakal juga akan menerapkan **input** dan juga **[looping](https://anbidev.com/python-looping)** kedalam program ini. Bagaimana hasilnya? ayok kita lihat saja.

Kita ubah fungsi `main()` ke bentuk yang interaktif dan mudah dipahami, agar nanti user tidak bingung hehe.

```python
def main():
    print("Anggap ini remote AC :")
    while True:
        print("1. Power ON/OFF")
        print("2. Temperatur Up")
        print("3. Temperatur Down")
        print("4. FanSpeed Increase")
        print("5. Display Status")
        
        pilihan = int(input("Pilihan : "))
        print("")    

        if pilihan == 1:
            func.turnOnOff()
            initialState = func.checkOnOff()
            if not initialState:
                print("AC Mati")
            else:
                print("AC Hidup")
        elif pilihan == 2:
            func.tempUp()
        elif pilihan == 3:
            func.tempDown()
        elif pilihan == 4:
            func.fanSpeed()
        elif pilihan == 5:
            func.display()
        print("")    
```

Lalu hasilnya kayak gimana? Kira - kira kayak gini :

```
Anggap ini remote AC :
1. Power ON/OFF
2. Temperatur Up
3. Temperatur Down
4. FanSpeed Increase
5. Display Status
Pilihan : 1

AC Hidup
```

Dia akan selalu menanyakan **inputan** untuk program ini agar bisa berjalan sesuai dengan keinginan pengguna remote AC. 

<center> . . . </center>

Untuk **full codenya** kalian bisa kalian di github [AnbiDev](https://github.com/AnbiDev/simulasi-remote-ac).

:octopus: [https://github.com/AnbiDev/simulasi-remote-ac](https://github.com/AnbiDev/simulasi-remote-ac)

Oke sekian dari Anbi, sampai ketemu di FunCode selanjutnya

> Happy Solving