+++
title = "Date Dalam Python"
description = "Mempelajari lebih jauh tentang objek date dalam python, bagaimana kegunaanya dan berbagai macam fungsinya"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2020-08-12"
tutorials = [
    "python"
]
cover = "/post/python-date.png"
series = "Python 101"
authors = "adexe"
shortcode = "Date"
url = "/python-date/"
sumber = [
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Date** atau tanggal dapat ditangani oleh program python. _Date_ bukan sebuah variabel atau sebuah tipe data, melainkan sebuah objek yang diimport dari modul `datetime` karena modul ini berisikan objek yang berkaitan dengan waktu.

<br>

## Mendapatkan Waktu Saat Ini

<hr>

Untuk mendapatkan waktu saat ini pertama kita mengimport modul `datetime` lalu mengakses objek dengan nama yang sama.

```python
import datetime

x = datetime.datetime.now()
print(x)
```

<br>

## Membuat Waktu Secara Manual

<hr>

Selain mendapatkan waktu secara otomatis, kita juga dapat membuat secara manual dengan `datetime()`

```python
import datetime

x = datetime.datetime(2020, 5, 17)
# 2020-05-17 00:00:00
```

<br>

## Formating Output Waktu

<hr>

Dalam menampikan nilai dari waktu `datetime()` dapat kita format sedemikian rupa dengan kebutuhan menggunakan `strftime()`.

```python
import datetime

x = datetime.datetime(2018, 6, 1)

print(x.strftime("%B"))
# December
```

| Directive | Deskripsi          | Contoh     |
| --------- | ------------------ | ---------- |
| `%a`      | Hari (Singkat)     | Mon        |
| `%A`      | Hari (Full)        | Monday     |
| `%w`      | Hari (Angka)       | 1          |
| `%d`      | Hari (Dalam Bulan) | 31         |
| `%b`      | Bulan (Singkat)    | Dec        |
| `%B`      | Bulan (Full)       | December   |
| `%m`      | Bulan (Angka)      | 12         |
| `%y`      | Tahun (Singkat)    | 19         |
| `%Y`      | Tahun (Full)       | 2019       |
| `%H`      | Jam (00-23)        | 18         |
| `%I`      | Jam (00-12)        | 07         |
| `%p`      | AM / PM            | PM         |
| `%M`      | Minute (00 - 59)   | 41         |
| `%S`      | Detik (00 - 59)    | 21         |
| `%c`      | Local Date Version | Mon Dec 31 |
| `%X`      | Local Version Time | 17:18:20   |
| `%x`      | Local Short Date   | 19/03/20   |
|           |                    |            |


