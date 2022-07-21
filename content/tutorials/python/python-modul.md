+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-modul.png"
date = 2020-09-03T17:00:00Z
description = "Berkenalan dengan penggunaan modul - modul yang ada di library python."
series = "Python 101"
shortcode = "Modul"
status = "publish"
sumber = ["https://www.w3schools.com/python/python_modules.asp"]
tags = ["python"]
title = "Modul Dalam Python"
type = ["tutorials", "tutorial"]
url = "/python-modul/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
 
Modul adalah sebuah file yang berisikan sekumpulan kode fungsi dan *global* variabel yang disimpan dalam ekstensi `.py`. Kenapa ada modul? untuk memecah satu file program besar menjadi beberapa file kecil agar mudah diatur dan diorganisir.

Modul juga bersifat *reusable* yang berarti satu modul itu dapat dipakai berulang - ulang dimanapun ia diperlukan.

<br>

## Buat Modul

<hr>

Membuat modul sama halnya saat kita membuat sebuah file python. Contoh nya kita akan membuat modul bernama `modulku.py` yang berisi sebuah fungsi untuk menambahkan angka.

```python
def tambahDong(a, b):
    return a + b
```

> Simpan kode ini dengan nama file `modulku.py`


<br>

## Menggunakan Modul

<hr>

Kita sudah membuat modul bernama `modulku.py`, sekarang coba kita gunakan modul tersebut. Kita buat file baru lagi di folder yang sama dengan `modulku.py`.

Kali ini kita beri nama `main.py`. 

```python
import modulku

hasil = tambahDong(27, 42)
print(hasil)
```

Keyword `import` digunakan agar kita bisa menggunakan seluruh `resource` pada modul yang kita import. Contoh resource yang kita gunakan adalah fungsi `tambahDong`.

<br>

## Reusable Modul

<hr>

Sudah saya singgung tadi, bahwa sebuah modul sebisa mungkin bersifat *reusable*. Hal ini diperuntukan agar kode yang ditulis lebih efisien dan fleksibel. Seperti halnya modul yang kita buat tadi, dapat digunakan dimana pun karena tujuannya hanya menambahkan angka.

Tetapi kita kadang kesulitan untuk membuat modul atau fungsi yang *reusable*. Dikarenakan karena kurangnya pengalaman atau ilmu yang kita punya.