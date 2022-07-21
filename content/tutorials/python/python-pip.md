+++
title = "Belajar Cara Menggunakan PIP Python"
description = "Mengenal dan menggunakan package management pip pada python"
type = ["tutorials","tutorial"]
cover = "/post/python-pip.png"
status = "publish"
tags = [
    "python"
]
date = "2020-11-30"
tutorials = [
    "python"
]
series = "Python 101"
authors = "adexe"
shortcode = "PIP"
url = "/python-pip/"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++


**Apa itu PIP?** adalah sebuah manajemen paket (*package management*) yang digunakan untuk install, hapus, upgrade paket python dan sebagainya.


**Apa itu Paket (*Package*)?** Paket (*Package*) adalah file yang berkaitan dengan [modul](https://anbidev.com/python-modul) yang kamu butuhkan untuk program yang akan kamu buat.


<br>

## Install PIP

<hr>

> Bagi kalian yang memakai **Python 3.4** ke atas, tidak perlu lagi menginstall PIP

Untuk kalian yang belum terinstall pip nya, bisa menginstall pip secara manual.

#### » Windows

Untuk Windows, berikut step nya.

1. Download file [get-pip.py](https://bootstrap.pypa.io/get-pip.py).

2. Lalu buka cmd, dan arahkan ke file **get-pip.py** berada.

3. Ketikkan perintah ini.
    ```bash
    python get-pip.py
    ```
4. Nah gitu aja.


#### » Linux

Untuk Linux, buka terminal dan ketik perintah :

```sh
# untuk versi 2
sudo apt install python-pip
```

```sh
# untuk versi 3
sudo apt install python3-pip
```

Tunggu sampai proses installasi selesai.

<br>

## PIP Untuk Install Package

<hr>

Bagaimana cara menginstall *package* dengan PIP? Struktur dasarnya seperti ini :

```sh
pip install <nama-package>
```

Diatas saya sudah bilang pip untuk manajemen paket, sehingga kita akan mencoba menggunakan PIP untuk menginstall beberapa paket file.

```sh
pip install folium
```

Kadang kalau PIP tidak bisa ditemukan kemungkinan PIP berada dia

> **Folium** adalah *package* untuk menghasilkan peta berdasarkan titik koordinat.

Proses yang berlangsung kurang lebih seperti ini.

![Proses Installasi](/post/python-pip-1.png "Proses Installasi")

Setelah proses installasi selesai kita bisa menggunakan *package* **Folium** ke dalam kode file kita. Coba kita buat sebuah peta.

```python
import folium

m = folium.Map(location=[45.5236, -122.6750])
m.save('index.html')
```

> Coba kalian buka **index.html**  yang digenerate oleh folium akan terbentuk sebuah peta.

<br>

## Lihat Package Terinstall

<hr>

Kita udah install banyak *package*, sampai kita lupa package apa saja yang sudah kita install. Cara melihat *package* yang sudah terinstall bagaimana?

```bash
pip list
```
Semua package yang telah kamu install akan tampil dalam sebuah list.

![List Package](/post/python-pip-2.png "List Package")

Nah, kadang saking banyaknya *package* yang kita install, kita kadang kesulitan mengetahui *package*  **A** itu sudah terinstall atau belum sih? caranya kita **search**.

```bash
pip search <nama-package>
```

Misal, saya ingin tahu apakah **numpy** sudah terinstall atau belum.

```bash
pip search numpy
```

Dan yak, numpy dan *dependency*-nya sudah terinstall dengan baik.

![Numpy Dan Dependecy](/post/python-pip-4.png "Numpy dan Dependency")


<br>

## Hapus Dan Upgrade Package

<hr>

Install *package* udah, kalau mau **uninstall** *package* bagaimana? 

```bash
pip uninstall <nama-package>
```

Dan jika kalian merasa versi *package* kalian sudah usang, mari kita **upgrade**.

```bash
pip upgrade <nama-package>
```

<br>

## Dimana Package Disimpan?

<hr>

Menariknya kita cuma memakai sebuah *package*, tanpa tahu dimana letak *package* itu disimpan, untuk mengetahuinya menggunakan perintah.

```bash
python -m site
```

![Letak Package Disimpan](/post/python-pip-3.png "Letak Package Disimpan")

<center>    .    .    .   </center>

PIP sangat berguna buat kalian yang nantinya bakal buat proyek - proyek besar, atau mau buat *web-backend* , *Machine-learning* dan  Game. Lanjut nanti environtment. 
