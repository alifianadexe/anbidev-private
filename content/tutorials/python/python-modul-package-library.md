+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-modul-package-library.jpg"
date = 2020-12-15T00:00:00Z
description = "Membahas tentang sesuatu yang sering dianggap sama tapi nyatanya berbeda"
series = "More Python"
shortcode = "Modul vs Package vs Library"
status = "publish"
tags = ["modul", "python", "library"]
title = "Perbedaan Modul, Package dan Library Pada Python"
type = ["tutorials", "tutorial"]
url = "/python-modul-package-library/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
_"Kak, apa sih perbedaan antara modul, package dan library pada python?"_ Itu adalah pertanyaan yang sering saya terima dari beberapa teman kuliah saya. Mereka masih bingung untuk membedakan antara [modul](https://anbidev.com/python-modul), [variabel](https://anbidev.com/python-variabel) dan [fungsi](https://anbidev.com/python-function).

Untuk kali ini anbi ingin membahas secara menyeluruh tentang perbedaan yang signifikan antara ketiga hal ini.

<br>

> <span style="font-size:25px;font-weight:1000" ><i>TL;DR</i></span>

<hr>

**Modul** adalah sebuah file yang berisikan sekumpulan kode fungsi dan global variabel yang disimpan dalam ekstensi `.py`.

Sedangkan **Package** adalah sekumpulan **modul** yang memiliki _constructur_ `_init_` dalam satu folder.

Lalu **Library** adalah gabungan dari **Package** dan **Modul** yang memiliki fungsionalitas yang saling berkaitan dengan tujuan mempermudah kita dalam membuat suatu program.

Jika diibaratkan bagian tubuh :

* _Modul_ itu **Jari**
* _Package_ itu **Tangan**
* _Library_ itu **Kedua Lengan Tangan**

<hr>

<br>

## Modul

<hr>

Apa itu [modul](https://anbidev.com/python-modul)? **Modul** adalah sebuah file yang berisikan sekumpulan kode fungsi, class dan variabel yang disimpan dalam satu file berekstensi `.py` dan dapat dieksekusi oleh _interpreter_ python.

!["Modul Knight!"](/post/python-modul-package-library-01.jpg "Modul Knight!")

Coba kita buat modul sederhana bernama **`kesatria.py`**. Lalu, Kita isi modul dengan fungsi `serangMonster()` :

```python
def serangMonster():
  print("kesatria Menyerang Monster")
```

Sebuah [modul](https://anbidev.com/python-modul) biasanya digunakan sebagai referensi untuk modul lain menggunakan _keyword_ `import`. Sehingga modul bersifat **_reuseable_** atau istilah lainnya dapat digunakan modul lain dimana saja berulang kali.

Modul `kesatria.py` yang kita buat tadi memiliki fungsi `serangMonster()`. Sekarang, kita coba **import** modul `kesatria.py` kedalam modul baru bernama `raja.py` agar modul raja dapat menggunakan fungsi `serangMonster()`.

Didalam modul `raja.py` kita panggil modul kesatria menggunakan keyword `import` :

```python
import kesatria

kesatria.serangMonster()
```

Dapat dilihat pada blok kode diatas, fungsi `serangMonster()` dapat digunakan oleh raja walaupun tidak didefinisikan didalam modul `raja.py`.

<br>

## Package

<hr>

Apa itu Package? **Package** adalah sekumpulan modul python yang berada dalam sebuah folder serta memiliki satu modul _constructor_ (`__init__.py`).

Buat apa modul _constructor_ (`__init__.py`) pada sebuah package? File _constructor_ berfungsi untuk memberi tahu _python interpreter_ bahwa folder tersebut adalah sebuah package. 

Jadi, setiap direktori atau folder yang berisi modul constructor `__init__.py` akan diperilakukan sebagai pakcage.

!["Perkenalkan Kita Package Army!"](/post/python-modul-package-library-02.jpg "Perkenalkan Kita Package Army!")

Didalam file `__init__.py` isinya seperti apa? biasanya cuma **file kosong** tanpa kode.

Nah,contoh sebuah _package_ kayak gimana? nih bisa liat gambar dibawah.

!["Package !"](/post/python-modul-package-library-03.png "Perkenalkan Kita Package Army!")

Gambar diatas adalah package **royalguard**, nama package sesuai dengan nama folder atau direktori. Jadi, didalam package **royalguard** memiliki 4 file.

File _constructor_ (`__init__.py`) untuk untuk memberitahu _python interpreter_ bahwa folder ini adalah package dan 3 modul sisanya adalah isi dari package tersebut.

<br>

## Library

<hr>

Apa itu **_Library_**? _Library_ adalah gabungan dari sekumpulan **package** dan **modul** dengan fungsionalitas yang sama dengan tujuan untuk memudahkan kalian dalam membuat suatu aplikasi, tanpa harus menulis banyak kode.

!["Kita Semua Adalah Library!"](/post/python-modul-package-library-04.jpg "Kita Semua Adalah Library!")

Library juga bersifat _reuseable_ yang berarti bisa digunakan berkali - kali, dimana saja dan kapan saja. Contohnya _library_ pada python seperti apa? Nih misal, **10 _top library_** pada python :

* TensorFlow
* Scikit-Learn
* Numpy
* Keras
* PyTorch
* LightGBM
* Eli5
* SciPy
* Theano
* Pandas

Bagaimana cara menggunakan library python? Misal kita ingin pakai `pandas`, library untuk mengolah data. Kita perlu [menginstall library ini dengan PIP](https://anbidev.com/python-pip) terlebih dahulu.

```pip
pip install pandas
```

Setelah installasi di PIP selesai baru kita `import` library tersebut ke kode aplikasi kita.

```python
import pandas as pd

dataku = pd.read_csv("namafile.csv")
```

<br>

## Kesimpulan

<hr>

Oke, langsung keintinya, berdasarakan fungsi - fungsi seperti yang salah jelaskan diatas, maka ibarat aplikasi itu adalah sebuah tubuh. 

Maka **modul** diibaratkan sebagai jari tangan, sedangkan **package** adalah pergelangan tangan dan **library** adalah kedua lengan tangan dan kedua pasang kaki.

> **Important** : library itu sudah pasti modul dan package, tapi package dan modul belum tentu library.

<center> . . . </center>

Nah gitu aja pembahasan dari ketiga istilah diatas. Gimana menarik? jika menarik nanti anbi buatin lagi versi - versi diskusi yang lebih berat haha :)