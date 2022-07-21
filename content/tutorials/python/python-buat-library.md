+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-buat-library.jpg"
date = 2020-12-23T00:00:00Z
description = "Membahas bagaimana cara membuat library python dari awal sampai akhir"
series = "More Python"
shortcode = "Buat Library"
status = "publish"
draft=false
tags = ["modul", "python", "library"]
title = "Cara Membuat Library Python"
type = ["tutorials", "tutorial"]
url = "/python-buat-library/"
sumber = [
   "https://medium.com/analytics-vidhya/how-to-create-a-python-library-7d5aea80cc3f"
]
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"
+++

Nah kemarin sudah pernah anbi bahas perbedaan antara [modul , package dan library](https://anbidev.com/python-modul-package-library). Sekarang ini anbi mau bahas cara membuat *library* python. Apa saja langkah - langkah nya? simak nih.

<br>

## Langkah 1 : Buat Direktori

<hr>

Buat direktori yang ingin kalian jadikan wadah buat *library* yang akan kita buat. Sesuaikan juga nama direktori dengan nama *library* yang akan kalian buat.

Disini anbi buat direktori dengan nama `anbi-library`.

!["Direktrori Untuk Nampung Library"](/post/python-buat-library-01.png "Direktrori Untuk Nampung Library")

<br>

## Langkah 2 : Buat Virtual Environtment

<hr>

Setelah selesai dengan pembuatan direktori, akan lebih baik jika kita juga membuat _virtual environtment_ pada direktori agar versi python dan juga *library* lain yang kita gunakan tidak berubah.

> [Belajar Virtual Environtment](https://anbidev.com/python-virtual-environtment)

Kenapa harus pakai _virtual environtment_? Karena _virtual environtment_ dapat mencegah adanya _issue dependency_ yang terjadi nantinya.

Lalu, buka terminal atau cmd dan arahkan **PATH** ke direktori yang kita buat tadi. Untuk membuat [virtual environtment](https://anbidev.com/python-virtual-environtment) kita gunakan *command* dibawah ini :

untuk kalian pemakai windows :

```
py -m venv env
```

untuk kalian pemakai **linux** dan **macos**

```
python3 -m venv env
```

!["Contoh Command Di Windows"](/post/python-buat-library-02.png "Contoh Command Di Windows")

Setelah berhasil membuat [virtual environtment](https://anbidev.com/python-virtual-environtment), sekarang kita aktifkan virtual environtment dengan command dibawah ini :

ini untuk pemakai **windows**

```
.\env\Scripts\activate
```

ini untuk pemakai **linux** dan **macos**

```
source env/bin/activate
```

Pastikan *session* di terminal atau command promt kalian seperti gambar dibawah, yang menandakan virtual environtment sudah aktif.

!["Session Virtual Environtment Udah Aktif"](/post/python-buat-library-03.png "Session Virtual Environtment Udah AktifSession Virtual Environtment Udah Aktif")

<br>

## Langkah 3 : Install Library Bantuan

<hr>

Tidak lupa kita install beberapa library bantuan untuk **_build_** library kita nanti.

* **`setuptools`** adalah library yang didesain untuk memfasilitasi pemaketan proyek python dengan memberikan beberapa hal yang dibutuhkan untuk membuat *library* standar pada umumnya. 
 
   ```
   pip install setuptools
   ```


* **`wheel`**  adalah *built-in-package*, yang digunakan agar library tidak mengkompilasi ulang perangkat lunak selama setiap penginstalan 

   ```
   pip install wheel
   ```


* **`twine`** adalah utilitas untuk mempublish *package* pada [PyPI](https://pypi.org) 

   ```
   pip install twine
   ```

*  Kalian bisa menggunakan library `pytest` dan `pytest-runner` untuk nanti kita gunakan sebagai tester apakah kode pada library kita berjalan dengan baik atau tidak.

   ```
   pip install pytest
   ```

   ```
   pip install pytest-runner
   ```

<br>

## Langkah 4 : Buat Struktur Folder

<hr>

Buka folder direktori proyek yang kalian buat tadi, untuk nantinya kita tambahkan beberapa file dan folder. Kalian bisa menggunakan editor atau membuatnya secara manual.

!["Buka Folder Pakai Visual Studio Code"](/post/python-buat-library-03.png "Buka Folder Pakai Visual Studio Code")

Anbi disini bakal buat pakai **visual studio code**. Mari kita buat file dan folder yang dibutuhkan untuk :

1. Buat file kosong dengan nama `setup.py`. Ini adalah **file penting** ketika membuat sebuah *library* python.

2. Buat lagi file kosong dengan nama `README.md`. File ini nanti digunakan untuk mendeskripsikan tentang *library* yang kamu buat.

3. Buat folder kosong dan beri nama `anbi_lib` atau terserah kalian. Intinya nama ini yang akan dipanggil saat menginstall menggunakan [PIP](https://anbidev.com/python-pip).

   > Jika kalian ingin publish library kalian ke PIP, pastikan nama tersebut **unik** atau belum ada di [https://pypi.org/](https://pypi.org/).

4. Didalam folder `anbi_lib` buat sebuah file _constructor_ (`__init__.py`) agar ia diperlakukan [sebagai package](https://anbidev.com/python-modul-pakcage-library.md), dikosongin aja gapapa.

   > Pada dasarnya, folder yang memiliki file _constructor_ (`__init___.py`) akan ikut di **_build_** kedalam library.

5. Pada folder yang sama (`anbi_lib`), kita buat file `fungsiku.py`.
6. Dan terakhir, buat sebuah folder `test` pada folder _root_. Didalamnya, kita buat juga file _constructor_ (`__init__.py`) dan file kosong `test_fungsi.py`.

Yep, harusnya struktur folder kalian akan seperti ini :

!["Struktur Folder anbi-library"](/post/python-buat-library-05.png "Struktur Folder anbi-library")

<br>

## Langkah 5 : Mulai Mengisi Librarymu!

<hr>

Sekarang coba kita masukkan beberapa fungsi kedalam *library* kita. Kalian bisa mulai menulisnya pada file `fungsiku.py`.

Mari kita buat fungsi untuk menghitung berapa jarak antara 2 titik longitude dan latitude.

```python
# fungsiku.py
import math

def getDistance(lat1, lon1, lat2, lon2) -> float:
   # radius bumi
   R = 6373.0

   # konversi dari derajat ke radian
   lat1, lon1 = math.radians(lat1), math.radians(lon1)
   lat2, lon2 = math.radians(lat2), math.radians(lon2)

   # perubahan koordinat
   dlon = lon2 - lon1
   dlat = lat2 - lat1

   # formula haversine
   a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
   c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

   distance = R * c

   return distance
```

Setiap kali kalian selesai menulis sebuah kode program, sangat anbi sarankan untuk mengetest kodenya terlebih dahulu.

Mari kita buat test kecil - kecilan untuk fungsi yang kita buat tadi. Salin kode dibawah kedalam file `test_fungsi.py` :

```python
from anbi_lib import fungsiku

def testFunction():
   assert fungsiku.getDistance(52.2296756, 21.0122287, 52.406374, 16.9251681) == 278.54558935106695
```

<br>

## Langkah 6 : Konfigurasi Setup.py!

<hr>

Selanjutnya kita akan mengkonfigurasi file `setup.py` sebelum membuild *library* kita. File `setup.py` biasanya diisi seperti ini :

```python
from setuptools import find_packages, setup

setup(
    name='anbi_lib',
    packages=find_packages(),
    version='0.1.0',
    description='Test buat library python',
    author='alifianadexe',
    license='MIT',
)
```

Untuk isi variabel `name` kalian bisa isi sesuka kalian, tapi untuk memudahkan kita, samakan saja dengan nama folder *package* kita.

<br>

### Setting package yang dibutuhkan untuk librarymu

Pada variabel `package` kalian dapat mengatur package mana saja yang mau digunakan pakai fungsi `find_package()`. Kalian `include` suatu package atau `exclude` paket yang tidak kalian butuhkan.

```python
from setuptools import find_packages, setup

setup(
   name='anbi_lib',
   packages=find_packages(includes=['anbi_lib']),
   version='0.1.0',
   description='Test buat library python',
   author='alifianadexe',
   license='MIT',
)
```

Pada kode diatas, kita memasukkan package **namapaket** yang tadi kita buat pada parameter `include`. Pada dasarnya `find_packages()` bisa dikosongi tanpa harus memasukkan parameter apa - apa, tapi _package_ yang tidak kita inginkan, juga akan masuk kedalam *library* kita (***contoh*** : *package* `test`).

<br>

### Setting library tambahan untuk librarymu

Jika kalian sering menginstall *library* dengan pip, biasanya dia tidak hanya menginstall satu *library* saja, bahkan bisa 3 sampai 4 *library*. Kenapa?

Ketika kita membuat sebuah program, tidak jarang juga kita perlu menggunakan *library* bantuan. Sama saat kita membuat sebuah *library*, kadang untuk melakukan sesuatu yang mungkin membutuhkan effort lebih, kita lebih suka untuk menggunakan bantuan dari *library* lain agar lebih efisien.

```python
from setuptools import find_packages, setup

setup(
   name='anbi_lib',
   packages=find_packages(includes=['anbi_lib']),
   version='0.1.0',
   description='Test buat library python',
   author='alifianadexe',
   license='MIT',
   install_requires=[]
)
```

Pada kode diatas, terdapat parameter dengan nama `install_requires`, disitulah kita memasukkan daftar *library* bantuan yang kita gunakan untuk membuat *library* ini. Karena kita menggunakan *library* `math` yang sudah ada pada _standard library python_, kita tidak perlu memasukkan ke dalam daftar.

<br>

### Test library

Apakah kalian ingat jika kita menginstall, sebuah *library* untuk testing? Tentu *library* ini bukan untuk kita masukkan ke `install_requires`.

Kita akan menggunakannya untuk mengetest apakah fungsi pada *library* kita akan berjalan dengan baik atau tidak, dengan beberapa "kasus" yang kita sediakan pada folder _test_.

```python
from setuptools import find_packages, setup

setup(
   name='anbi_lib',
   packages=find_packages(includes=['anbi_lib']),
   version='0.1.0',
   description='Test buat library python',
   author='alifianadexe',
   license='MIT',
   install_requires=[],    
   setup_requires=['pytest-runner'],
   tests_require=['pytest'],
   test_suite='test',
)
```

Untuk mengetest library kita, gunakan perintah dibawah :

```
python setup.py pytest
```

Kode tersebut akan mengeksekusi semua _"test case"_ pada folder **test**.

!["Fungsi Kita Berjalan Dengan Baik"](/post/python-buat-library-06.png "Fungsi Kita Berjalan Dengan Baik")


<br>

## Langkah 7 : Build Library

<hr>

Semua kebutuhan sudah kita penuhi, sekarang hanya tinggal sedikit lagi, *library* yang kita buat akan selesai. Sekarang kita kembali ke _command line_, dan arahkan ke **root** folder *library* yang kita buat, lalu command:

```
python setup.py bdist_wheel
```

**_Wheel_** akan membuat menggenerate sebuah folder **dist**, dan disitulah *library* yang kamu buat berada. 

!["File whl Pada Folder Dist"](/post/python-buat-library-07.png "File whl Pada Folder Dist")

Dan kamu bisa menginstall library yang sudah kamu baut tadi dengan  perintah

```
pip install dist/nama_library_kalian.whl
```

!["Library Kamu Berhasil Diinstall"](/post/python-buat-library-08.png "Library Kamu Berhasil Diinstall")

SELAMAT LIBRARY KAMU SUDAH TERINSTALL DAN SIAP DIGUNAKAN

> Catatan : Kamu juga bisa **mempublish** library mu kedalam PyPi Repository dan menginstall nya lewat PIP.
