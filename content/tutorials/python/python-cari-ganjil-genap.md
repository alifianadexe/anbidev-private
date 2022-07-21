+++
title = "Program Mencari Ganjil Genap"
description = "Program untuk menerka apakah bilangan yang diinput adalah ganjil atau genap"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python",
    "funcode",
    "modul"
]
date = "2020-12-07"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
shortcode = "Ganjil Genap"
url = "/python-cari-ganjil-genap/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Saya kembali dengan program kecil - kecilan tentang bagaimana cara mencari **ganjil** & **genap** dari sebuah bilangan. Baiklah mari saja kita langsung bahas bagaimana cara membuat mencari ganjil genap dari sebuah bilangan.

<br>

## Ilmu Dasar

<hr>

Sebelum kita membahas kode, kita harus mengetahui **ilmu dasar** bagaimana cara sebuah bilangan bisa dibilang ganjil atau genap.

![Ganjil Genap](/post/python-cari-ganjil-genap-01.png "Ganjil Dan Genap")

Inti dari menentukan sebuah bilangan ini adalah ganjil atau genap meggunakan sisa hasil bagi. Jika sisanya **1** maka bilangan itu adalah **Ganjil**, jika sisanya itu **0** maka bilangan itu adalah **Genap**.

Lalu apa itu **[Modulo](https://www.anbidev.com/python-operator/#operator-aritmatika)**?

![Modulo](/post/python-cari-ganjil-genap-02.png "Modulo")

[Modulo](https://www.anbidev.com/python-operator/#operator-aritmatika) dalam bahasa python dilambangkan `%`.

```python
hasil_mod = 10 % 2
print(hasil_mod)
# 0
```

<br>

## Buat Program

<hr>

Dengan mengetahui ilmu dasarnya, sekarang kita saatnya buat programnya.

```python
angka = int(input("Masukkan Angka : "))

hasil_mod = angka % 2
if hasil_mod == 1:
  print("Angka ", angka, " adalah bilangan Ganjil")
else:
  print("Angka ", angka, " adalah bilangan Genap")
```

Penjelasan kode diatas, variabel `angka` diinput secara manual oleh user. Lalu program akan menghitung hasil **modulo** nya. Jika hasilnya sama dengan 1 maka bilangan itu **Ganjil** jika tidak maka bilangan itu **Genap**.

Nah, cuman gitu aja kodenya, simpel bukan hehe. Sampai jumpa di funcode berikutnya.
