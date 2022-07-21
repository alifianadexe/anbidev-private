+++
title = "String Method Dalam Python"
description = "Mengenal lebih jauh tentang method - method dalam class string pada python"
type = ["tutorials","tutorial"]
cover = "/post/python-string-method.png"
status = "publish"
tags = [
    "python"
]
date = "2019-09-09"
tutorials = [
    "python"
]
series = "Python 101"
authors = "adexe"
shortcode = "String Method"
url = "/python-string-method/"
aliases = [
    "/tutorials/python/python-string-method/",
]
sumber = [
    "https://belajarpython.com/tutorial/string-python",
    "https://www.w3schools.com/python/python_string.asp"
    
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Sebenarnya ini adalah adalah bagian lanjutan dari artikel [String Dalam Python](https://anbidev.com/tutorials/python-string/). Dikarenakan pembahasan tentang string saya rasa masih banyak maka saya membuat bagian kedua berjudul [String Method Dalam Python](https://anbidev.com/tutorials/python-string-method/).

Ditutorial sebelumnya telah menyinggung tentang salah satu string method string yaitu `format`. Lalu apa sih **method** itu?.

> **Method** adalah fungsi atau prosedur yang dibuat didalam suatu _Class_. Method dibagi dua kategori yaitu fungsi dan prosedur.

Kita akan mempelajari tentang method lebih dalam lagi diartikel lainnya, untuk sekarang kita hanya perlu fokus cara menggunakan string method yang sudah built-in di dalam python.

<br>

## String Methods

<hr>

Berikut adalah beberapa contoh string method yang ada di python :

- **`capitalize()`** <br><br>
  Mengubah karakter pertama pada huruf pertama menjadi huruf besar.

  ```python
  judul = "kami semua adalah sama"
  print(judul.capitalize()) # Output : "Kami semua adalah sama"
  ```

- **`title()`** <br><br>
  Mengubah karakter pertama pada setiap huruf pada kalimat menjadi kapital. Biasa digunakan untuk judul.

  ```python
  judul = "kami semua adalah sama"
  print(judul.title()) # Output : "Kami Semua Adalah Sama"
  ```

- **`upper()`** <br><br>
  Mengubah semua karakter pada string menjadi huruf besar.

  ```python
  judul = "kami semua marah"
  print(judul.upper()) # Output : "KAMI SEMUA MARAH"
  ```

- **`lower()`** <br><br>
  Mengubah semua karakter pada string menjadi huruf kecil.

  ```python
  judul = "KAMI SUDAH SABAR"
  print(judul.lower()) # Output : "kami sudah sabar"
  ```

- **`casefold()`** <br><br>
  Mengubah semua karakter pada string menjadi huruf kecil. Sama seperti `lower()` tetapi lebih aggresive dan kuat, yang berarti mengubah karakter apapun menjadi huruf kecil.

  ```python
  judul = "AnbiDev For U"
  print(judul.casefold())  # Output : 'anbidev for u'
  ```

- **`swapcase()`** <br><br>
  Mengubah karakter dengan huruf besar menjadi huruf kecil dan sebaliknya (huruf kecil menjadi huruf besar).

  ```python
  judul = "AnbiDev For U"
  print(judul.swapcase())  # Output : 'aNBIdEV fOR u'
  ```

- **`center()`** <br><br>
  Membuat string berada ditengah sesuai dengan berapa panjang _width_ serta dapat menginputkan karakter.

  ```python
  txt = "AnbiDev"
  print(txt.center(20))     # Output : '      AnbiDev       '

  # Dengan parameter karakter
  print(txt.center(20,'-')) # Output : '------AnbiDev-------'
  ```

- **`replace()`**<br><br>
  Mengubah sebuah karakter dengan karakter lain yang diinginkan.

  ```python
  txt = "AnbiDev With Me"
  print(txt.replace('i','a'))    # Output : 'AnbaDev Wath Me'
  print(txt.replace('Me','You')) # Output : 'AnbiDev With You'
  ```

- **`split()`**<br><br>
  Membagi string ke substring(_list_) jika memiliki separator didalamnya. Separator dapat diganti dengan karakter lain.

  ```python
  txt = "Aku, kamu + dia"
  print(txt.split())    # Output : ['Aku' , 'kamu + dia']

  # Ganti Separator menjadi spasi
  print(txt.split('+')) # Output : ['Aku, kamu', 'dia']
  ```

- **`partition()`**<br><br>
  Membagi string menjadi 3 bagian dan meletakannya ke `tuple`. Bagian itu terdiri dari karakter **sebelum** parameter, parameter **itu** sendiri, dan karakter **sesudah** paramater.

  ```python
  txt = "saya menang dan anda kalah"
  print(txt.partition("dan"))
  # Output : ('saya menang ', 'dan', ' anda kalah')
  ```

- **`count()`**<br><br>
  Menghitung berapa kali karakter pada paramater muncul di kalimat atau huruf string.

  ```python
  txt = "saya ingin menjadi diri saya sendiri"
  print(txt.count("saya"))  # Output : 2
  ```

- **`encode()`**<br><br>
  Mengubah _encode_ pada string yang memiliki _encoding_ yang spesifik. Jika tidak ada karakter yang diencode maka UTF-8 akan digunakan.

  ```python
  txt = "ånbidev"
  print(txt.encode())  # Output : b'\xc3\xa5nbidev'
  ```

- **`endswith()`**<br><br>
  Mengecek apakah string di akhiri dengan karakter tertentu. Jika iya _return_ `True`, jika tidak maka `False`.

  ```python
  txt = "tuntaskan kasus pencurian."
  print(txt.endswith('.'))  # Output : True
  ```

- **`find()`**<br><br>
  Mencari karakter pada string dan jika karakter ada, akan memberikan _output_ letak posisi pada string. Jika karakter tidak ada maka _return_ `-1`.

  ```python
  txt = "makan mangga memang manis."
  print(txt.find('mangga'))        # Output : 6
  print(txt.find('pedas'))         # Output : -1

  # Dengan parameter (start, end)
  print(txt.find('mangga', 5, 20)) # Output : 6

  ```

- **`index()`**<br><br>
  Mencari karakter pada string dan jika karakter ada, akan memberikan _output_ letak posisi pada string. Jika karakter tidak ada maka _return_ `error` (_raise an exception_).

  ```python
  txt = "makan mangga memang manis."
  print(txt.index('mangga'))        # Output : 6
  print(txt.index('pedas'))         # Output : error

  # Dengan parameter (start, end)
  print(txt.index('mangga', 5, 20)) # Output : 6

  ```

- **`strip()`**<br><br>
  Menghilangkan spasi dikanan kiri karakter atau kalimat.

  ```python
  txt = " saya adalah mereka "
  print(txt.strip()) # Output : "saya adalah mereka"
  ```

- **`lstrip()`**<br><br>
  Menghilangkan spasi dikiri karakter atau kalimat.

  ```python
  txt = " saya adalah mereka "
  print(txt.lstrip()) # Output : "saya adalah mereka "
  ```

- **`rstrip()`**<br><br>
  Menghilangkan spasi dikanan karakter atau kalimat.

  ```python
  txt = " saya adalah mereka "
  print(txt.rstrip()) # Output : " saya adalah mereka"
  ```

- **`join()`**<br><br>
  Menggabungkan _iterable_ data atau _sequence_ data menjadi satu string.

  ```python
  buah = ("Mangga", "Apel", "Salak")
  gabung = "--"
  print(gabung.join(buah)) # Output : "Mangga--Apel--Salak"
  ```

- **`isalnum()`**<br><br>
  Mengecek apakah string ini berisi text dan numeric atau keduanya. Jika iya `True`.

  ```python
  var = "AnbiDev101"
  print(var.isalnum())  # Output : True
  ```

- **`isalpha()`**<br><br>
  Mengecek apakah string ini berisi text saja **tanpa** numeric atau simbol lain.

  ```python
  var = "AnbiDev"
  print(var.isalpha())  # Output : True
  ```

- **`isdecimal()`**<br><br>
  Mengecek apakah string ini berisi bilangan decimal **tanpa** text atau simbol lain.

  ```python
  var = "123"
  print(var.isdecimal())  # Output : True
  ```

- **`isdigit()`**<br><br>
  Mengecek apakah string ini berisi bilangan decimal serta simbol matematika seperti `²` dan sebagainya.

  ```python
  var = "5020120"
  print(var.isdigit())  # Output : True
  ```

- **`isidentifier()`**<br><br>
  Mengecek apakah string ini bisa dibuat menjadi variabel (identifier) berdasarkan [peraturan penamaan variabel](https://anbidev.com/tutorials/python/python-variable).

  ```python
  var = "varSum_1"
  print(var.isidentifier())  # Output : True
  ```

- **`islower()`**<br><br>
  Mengecek apakah string ini berisi karakter dengan huruf kecil semua.

  ```python
  var = "anbidev"
  print(var.islower())  # Output : True
  ```

- **`isupper()`**<br><br>
  Mengecek apakah string ini berisi karakter dengan huruf besar semua.

  ```python
  var = "ANBIDEV"
  print(var.isupper())  # Output : True
  ```

- **`isnumeric()`**<br><br>
  Mengecek apakah string ini berisi karakter numerik semua atau tidak.

  ```python
  var = "12345"
  print(var.isnumeric())  # Output : True
  ```

- **`isspace()`**<br><br>
  Mengecek apakah string ini hanya berisi spasi saja atau tidak.

  ```python
  var = " "
  print(var.isspace())  # Output : True
  ```

- **`istitle()`**<br><br>
  Mengecek apakah string ini sesuai dengan standar penamaan judul atau tidak.

  ```python
  var = "Harimau Sang Serigala Hutan"
  print(var.istitle())  # Output : True
  ```

<br>

## Karakter Escape

<hr>

**Karakter _Escape_** adalah sebuah karakter spesial yang membuat kita dapat memasukkan karakter - karakter illegal pada sebuah string. Contoh karakter illegal pada string :

```python
txt = "Kami semua adalah "Pribumi" dari tanah air Indonesia"
print(txt) # Error
```

<h5><span style="color:#eb3b5a"><i>Kode diatas akan menghasilkan ERROR</i></span></h5>

Untuk memperbaiki kode diatas agar sesuai dengan apa yang kita inginkan, maka kita tambahkan karakter _Escape_ berupa backslash (`\`).

```python
txt = "Kami semua adalah \"Pribumi\" dari tanah air Indonesia"
print(txt) # Output : "Kamu semua adalah "Pribumi" dari tanah air Indonesia"
```

Ada beberapa contoh karakter escape yang bisa anda gunakan di python :

| Simbol |                  Deskripsi                  |
| :----: | :-----------------------------------------: |
|  `\'`  | Untuk menyisipkan simbol `'` (Single Quote) |
|  `\\`  |  Untuk menyisipkan simbol `\` (Backslash)   |
|  `\n`  |     Untuk membuat baris baru (New Line)     |
|  `\r`  |        Untuk membuat Carriage Return        |
|  `\t`  |      Untuk menyisipkan tab spasi (Tab)      |
|  `\b`  | Untuk menghapus satu karakter (Backspace).  |
| `\ooo` |      Untuk menyisipkan karakter octal.      |
| `\xhh` |      Untuk menyisipkan karakter hexa.       |
