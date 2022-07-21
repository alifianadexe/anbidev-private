+++
title = "Program Konversi Decimal ke Binner, Octa, Hexa"
description = "Program untuk mengkonversi bilangan decimal ke Binner, Octa, Hexa"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python",
    "funcode",
    "modul"
]
date = "2020-11-22"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
shortcode = "Konversi Bilangan"
url = "/python-konversi-bilangan/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Hai semua, kali ini saya akan membuat program untuk mengkonversi bilangan decimal ke tiga bilangan lain yaitu binari, octal dan hexadecimal. Program yang akan kita buat menggunakan bahasa python serta beberapa library tambahan seperti [tabulate](https://pypi.org/project/tabulate/).

Nah sebelum kita melangkah lebih jauh lagi, pertama kita harus mengetahui dasar cara mengkonversi bilangan.

<br>

## Decimal ke Binner

<hr>

Untuk mengkonversi bilangan Decimal ke dalam bilangan _Biner_ yang paling mudah adalah **membagi** bilangan desimal ke basis bilangan biner yaitu 2, hasilnya nanti akan dibulatkan kebawah dan sisa hasil pembagian tersebut disimpan atau dicatat untuk nantinya akan diurutkan.

!["Program Konversi"](/post/funcode-program-konversi-2.jpg "Decimal ke Biner")

Lakukan pembagian tersebut sampai bilangan mencapai nilai **0**, kemudian sisa pembagian yang sudah kita catat, diurutkan dari yang paling akhir hingga yang paling awal. Hasil pembagian tersebut lah yang menjadi bilangan biner.

<br>

## Decimal ke Octal

<hr>

Kemudian untuk mengkonversi bilangan Decimal ke dalam bilangan _Octal_ adalah **membagi** bilangan desimal ke basis bilangan octal yaitu 8, hasilnya nanti akan dibulatkan kebawah dan sisa hasil pembagian tersebut disimpan atau dicatat untuk nantinya diurutkan.

!["Program Konversi"](/post/funcode-program-konversi-3.jpg "Decimal ke Octal")

Lakukan pembagian tersebut sampai bilangan mencapai nilai **0**, kemudian sisa pembagian yang sudah kita catat, diurutkan dari yang paling akhir hingga yang paling awal. Hasil pembagian tersebut lah yang menjadi bilangan octal.

<br>

## Decimal ke Hexadecimal

<hr>

Terakhir mengkonversi bilangan Decimal ke dalam bilangan _Hexadecimal_ , cara seperti kedua bilangan diatas, namun yang bikin unik, hexadecimal memiliki sampai 16 bilangan.

!["Program Konversi"](/post/funcode-program-konversi-4.jpg "Decimal ke Hexadecimal")

Sehingga untuk mencakupinya, bilangan 10 - 15 diganti menjadi huruf A - F.

<br>

## Lets Code

<hr>

Program yang kita buat memiliki satu input yaitu bilangan decimal dan memiliki 3 output sekaligus beserta cara konversinya. Kurang lebih bentuk programmnya seperti ini.

!["Program Konversi"](/post/funcode-program-konversi-1.png "Program Konversi Decimal")

Pertama kita install dulu library dibutuhkan, yaitu [tabulate](https://pypi.org/project/tabulate/) yang berguna untuk membuat output dalam terminal terformat seperti table.

```cmd
pip install tabulate
```

Setelah selesai proses installasi tabulate, kita import kedalam kode kita. Serta `itertools` yang nanti nya berguna untuk mengkombinasikan beberapa list menjadi satu.

```python
from tabulate import tabulate
import itertools as it
```

Selanjutnya kita membuat fungsi konversi. Fungsi ini bertujuan untuk men*generate* sebuah list tahap - tahap konversi yang nanti nya akan kita masukkan ke fungsi tabulate untuk outputnya.

```python
def genConverter(angka, pembilang):
    result = []
    hasilAngka = ""
    loop = True
    while loop:
        if angka >= pembilang:
            result.append(angka)
            sisa = angka % pembilang
            angka = angka // pembilang
            if sisa > 9:
                huruf = libChar(sisa)
                hasilAngka += huruf
                sisa = "{0} = {1}".format(sisa, huruf)
            else:
                hasilAngka += str(sisa)
            divid = "{0}------  {1}".format(pembilang, sisa)
            result.append(divid)
        else:
            if angka > 9:
                angka = libChar(angka)
            hasilAngka += str(angka)
            result.append(angka)
            loop = False
            break
        result.append("")

    hasilAngka = "".join(reversed(hasilAngka)) #reversed

    return (result, hasilAngka)
```

Fungsi ini memiliki 2 parameter yaitu `angka` dan `pembilang`. Parmeter `angka` untuk angka yang akan kita kalkulasi, `pembilang` bilangan yang akan menjadi pembagi untuk menentukan kita akan mengkonversi bilangan apa.

Tidak lupa untuk membuat fungsi untuk mengkonversi bilangan di atas 9 ke huruf A - F.

```python
def libChar(angka):
    if angka == 10:
        return "A"
    elif angka == 11:
        return "B"
    elif angka == 12:
        return "C"
    elif angka == 13:
        return "D"
    elif angka == 14:
        return "E"
    elif angka == 15:
        return "F"
    elif angka == 16:
        return "G"
```

Lalu setelah semua fungsi dibuat kita panggil fungsi `genConverter` dengan parameter bilangan `2` untuk biner, `8` untuk octal dan `16` untuk hexadecimal.

```python
angka = int(input("Masukkan bilangan untuk dikonversi : "))

biner, hasilBiner = genConverter(angka, 2)
octal, hasilOctal = genConverter(angka, 8)
hexa, hasilHexa = genConverter(angka, 16)
```

Terakhir kita combine ketiga variabel `biner` , `octal` dan `hexa` ke dalam satu variabel `table` untuk nantinya kita tampilkan dalam bentuk table.

```python
table = list(it.zip_longest(biner, octal, hexa))

# ini untuk header table
header = ("Binner", "Octal", "Hexadecimal")

print(tabulate(table, header tablefmt="plain"))
print("")
print("==============================================================")
print("Binner : ", hasilBiner)
print("Octal  : ", hasilOctal)
print("Hexa   : ", hasilHexa)
```

<center> . . . </center>

Untuk **full codenya** kalian bisa kalian di github [AnbiDev](https://github.com/AnbiDev/converter-bilangan).

:octopus: [https://github.com/AnbiDev/converter-bilangan](https://github.com/AnbiDev/converter-bilangan)

Oke sekian dari Anbi, sampai ketemua di FunCode selanjutnya

> Happy Solving
