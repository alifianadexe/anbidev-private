+++
title = 'Komentar pada python'
description = "Belajar Mengaplikasikan komentar pada script python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-09-04"
tutorials = [
    "python"
]
cover = "/post/python-comment.png"
series = "Python 101"
authors = "adexe"
shortcode = "Komentar"
url = "/python-comment/"
sumber = [
    "https://www.w3schools.com/python/python_comments.asp"
]
[author]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Sekarang kita akan belajar cara berkomentar menggunakan python.

Komentar digunakan untuk menjelaskan baris kode pada python.
Komentar **tidak** akan dieksekusi oleh python. Komentar juga digunakan agar _script_ mudah dibaca.
Komentar juga dapat digunakan untuk mencegah kode dieksekusi oleh python.

Untuk membuat komentar, cukup tambahkan `#` pada awal baris kode, dan python akan mengabaikan baris
kode tersebut.

<br>

## Contoh Komentar

<hr>

```python
# ini adalah komentar
print('Suka duka kita bersama')
```

Komentar bisa di tempatkan di akhir baris kode , sehingga membuat sisa kode pada baris itu akan diabaikan oleh python.

```python
print('aku suka kamu') # tapi kamu ga suka aku
```

Komentar juga digunakan untuk mencegah baris kode untuk tidak dieksekusi. Contoh saya ingin mengetik kode :

```python
print('hello world')
print('hello too you')
```

Lalu saya ingin kode pada baris pertama itu tidak tereksekusi. Tambahkan saja `#` pada komentar diawal kode.

```python
# print('hello world')
print('hello too you')
```
