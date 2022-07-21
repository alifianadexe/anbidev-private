+++
title = '"Hello World" dengan Python'
description = "Membuat `Hello World` pertama dengan python"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python"
]
date = "2019-09-03"
tutorials = [
    "python"
]
cover = "/post/python-hello-worldl.png"
series = "Python 101"
authors = "adexe"
shortcode = "Hello World!"
aliases = [
    "/tutorials/python/python-hello-world/"
]
url = "/python-hello-world/"
sumber = [
    "https://belajarpython.com/tutorial/hello-world-python"
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Kita akan memulai sebuah tradisi awal bagi para programmer dalam memulai belajar bahasa pemrograman baru, yaitu membuat _script_ sederhana bertuliskan `Hello World`.

Tetapi Jika kita sudah menginstall PATH python dengan benar, kita bisa saja langsung mengeksekusi perintah python tanpa bantuan text editor ataupun IDE. Caranya hanya tinggal buka **Command Prompt** atau **Terminal** dan tuliskan perintah :

```
    python
```

Dan otomatis akan muncul console python seperti berikut.

![Python Hello World](/post/python-hello-world-003.jpg "Tampilan console python")

Akan tetapi jika kita membuat _source code_ aplikasi dalam command prompt / terminal bakal sangat merepotkan bukan. Saya akan membimbing kalian untuk membuat _script_ dasar dengan text editor.

<br>

## Langkah - Langkah

Kita mulai dengan membuka [Text Editor](https://anbidev.tech/tutorials/python/python-environment) (Saya menggunakan Visual Studio Code).

1. Buat sebuah file baru pada text editor, dan beri nama **helloworld.py**.
2. Setelah itu tulis script berikut:

   ```python
       print('Hello World')
   ```

![Python Hello World](/post/python-hello-world-001.jpg "Contoh script helloworld.py")

3. Setelah itu jalankan script tersebut. Tetapi bagaimana cara menjalankannya?

<br>

## Eksekusi Script

Script python dapat dieksekusi pada terminal atau command prompt.

1. Buka terminal / command prompt.

2. Arahkan ke tempat file **helloworld.py** di simpan. Misal saya menyimpan pada folder `C:\Users\User\Documents\python`. Maka perintah untuk mengarah kesana :

   ```
       cd C:\Users\User\Documents\python
   ```

3. Lalu untuk mengeksekusi script python, ketik perintah berikut.

   ```
       python helloworld.py
   ```

4. Maka output yang akan tampil pada Command Prompt / Terminal adalah sebagai berikut :

   ![Python Hello World](/post/python-hello-world-002.jpg "Hasil dari script helloworld.py")

<br>

## _Case Sensitive_

<hr>

Python bersifat _case sensitive_ yang berarti besar kecil huruf pada _script_ akan berpengaruh. Contoh, jika anda mengetik `print()`, python akan mengenali _function_ tersebut. Akan tetapi jika anda mengetik `PRINT()` atau `Print()`, python akan memunculkan **error** karena _function_ tersebut tidak ada di library python.
