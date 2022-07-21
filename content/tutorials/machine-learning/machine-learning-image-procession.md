+++
title = "Belajar Machine Learning - Image Processing"
description = "Mempelajari tentang machine learning dalam bagian image processing"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-09-09"
tutorials = [
    "machine-learning"
]
aliases = [
    "/tutorials/machine-learning/machine-learning-image-processing/",
]
series = "Machine Learning"
authors = "dave"
shortcode = "Image Processing"
url = "/machine-learning-image-processing/"
sumber = []
cover = "/post/coverweb-ML-black.jpg"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

Pada part [sebelumnya](https://www.anbidev.com/tutorials/machine-learning/machine-learning-intro/) kita telah memahami bagaimana proses mesin belajar dan membandingkannya manusia, sekarang kita akan mencoba membuat **Machine Learning** sederhana kita sendiri.

<br>

## Menyiapkan Dataset

<hr>

Sebelum membuat _Neural Network_, atau otak buatan kita sendiri, tentunya kita harus mencari pengajar atau guru untuk melatih otak buatan kita. <ins>Guru yang akan melatih otak buatan kita adalah kumpulan data yang telah diorganisir sekian rupa agar dapat dipelajari</ins> oleh Model _Neural Network_.

Kali ini kita akan mengambil data gambar _“Batu Gunting Kertas”_ dari [kaggle.com](https://www.kaggle.com/drgfreeman/rockpaperscissors)

!["Data Rock Papper Scissors"](/post/machine-learning-image-pro-01.png "Dataset Rock Papper Scissors")

Download datasetnya [disini](https://www.kaggle.com/drgfreeman/rockpaperscissors?select=README_rpc-cv-images.txt)

Selanjutnya kita akan menggunakan **Google Colaboratory** (_Google Colab_) untuk membuat rancangan sekaligus mengeksekusi data yang telah didapatkan.

Berikut tautan link :
[https://colab.research.google.com/](https://colab.research.google.com/)

Setelah Login menggunakan Google Account, pilih **‘File’** lalu **‘New notebook’** untuk membuat halaman baru.

!["Halaman Dashboard Google Colab"](/post/machine-learning-image-pro-02.png "Halaman Dashboard Google Colab")

Ada banyak cara untuk memasukan data ke dalam _Google Colab_ untuk di proses, salah satunya adalah dengan menggunakan <ins>Google Drive</ins>. Kita dapat mengupload dataset yang dibutuhkan ke dalam Google Drive dan menghubungkannya dengan _Google Colab_ untuk dapat di akses sesukanya.

Klik **Icon Google Drive** pada Tab Files untuk menyambungkan Google Drive dengan Google Colab. Maka pada Tab Files akan muncul folder **_“drive”_** ketika Google Drive telah terhubung

!["Connect ke Google Drive"](/post/machine-learning-image-pro-03.png "Connect ke Google Drive")

<br>

## Image Preprocessing

<hr>

Dataset yang telah di download masih dalam bentuk gambar, tetapi mesin tidak dapat mempelajari dalam bentuk gambar. Maka dari itu kita harus <ins>mengubah kumpulan gambar ini menjadi bentuk lain</ins> yang dapat <ins>dipelajari oleh mesin</ins>.

**Image Preprocessing** adalah salah satu langkah yang digunakan untuk mengolah dataset agar pelatihan mesin dapat berjalan dengan baik. Langkah ini nantinya akan membuat data yang awalnya <ins>berbentuk gambar</ins> menjadi data berbentuk <ins>kumpulan array</ins> agar dapat dipelajari oleh mesin.

Pertama, kita akan menentukan _path_ dari dataset gambar yang sebelumnya telah di upload ke Google Drive, dengan fitur **_‘Copy path’_** pada Google Colab kita akan langsung mendapatkan path dari folder dataset yang akan digunakan.

!["Menentukan Path Dataset"](/post/machine-learning-image-pro-04.png "Menentukan Path Dataset")

Buat variable berisi path dari dataset.

```python
base_path = '/content/drive/My Drive/datasets/RockPaperScissor/rps-cv-images'
```

Untuk mengubah data menjadi bentuk kumpulan array, kita membutuhkan **`ImageDataGenerator()`** dari library **Keras**. Karena kita menggunakan Google Colab, kita tidak perlu melakukan instalasi library atau fitur lain dari Python karena sudah tersedia pada Google Colab.

Import ImageDataGenerator() cukup dengan menggunakan baris dibawah.

```python
from keras.preprocessing.image import ImageDataGenerator
```

Selanjutnya membuat generator kita sendiri dengan kode dibawah.

```python
generator = ImageDataGenerator(
    horizontal_flip = True,
    vertical_flip = True,
    height_shift_range = .2,
    validation_split = 0.2
)
```

Terdapat code seperti, `horizontal_flip`, `vertical_flip`, dan `height_shift_range` adalah fungsi lain dari **`ImageDataGenerator()`** untuk memvariasikan gambar. Contohnya seperti `horizontal_flip` digunakan untuk membalik gambar secara horizontal.

Fungsi `validation_split` digunakan untuk melakukan validasi dari pelatihan, `validation_split` ini membagi data dari dataset sesuai yang diinginkan, pada kode diatas terdapat value `0.2` yang artinya dataset akan dibagi menjadi **80% untuk pelatihan**, dan **20% untuk validasi**.

Validasi ini dapat diibaratkan sebagai <ins>Ulangan</ins> yang dilakukan oleh guru kita untuk menguji pengetahuan kita saat itu.

<br>

```python
train_image = generator.flow_from_directory(
    base_path,
    target_size=(224, 224),
    classes=['paper', 'rock', 'scissors'],
    class_mode='categorical',
    subset='training',
    shuffle=False,
)

val_image = generator.flow_from_directory(
    base_path,
    target_size=(224, 224),
    classes=['paper', 'rock', 'scissors'],
    class_mode='categorical',
    subset='validation',
    shuffle=True
)

```

Disini kita membagi dataset menjadi 2 yaitu, `train_image` untuk pelatihan dan `val_image` untuk validasi. Dengan menambahkan `subset='validation'` akan menandakan bahwa itu adalah data untuk validasi, yaitu **20%** dari dataset seperti yang sudah ditentukan pada generator.

<br>

`target_size=(224, 224)` akan membuat gambar menjadi ukuran **224 x 224** untuk menyamakan semua gambar.

`class_mode` dibuat **_‘categorical’_** karena kita akan menentukan 3 class yaitu, batu, gunting, dan kertas. Jika hanya membutuhkan 2 class, maka lebih baik menggunakan _‘binary’_.

`shuffle` akan mengambil data secara acak jika isinya `True`.

<br>

### Full Code

```python
from keras.preprocessing.image import ImageDataGenerator

generator = ImageDataGenerator(
    horizontal_flip = True,
    vertical_flip = True,
    height_shift_range = .2,
    validation_split = 0.2
)

train_image = generator.flow_from_directory(
    base_path,
    target_size=(224, 224),
    classes=['paper', 'rock', 'scissors'],
    class_mode='categorical',
    subset='training',
    shuffle=False,
)

val_image = generator.flow_from_directory(
    base_path,
    target_size=(224, 224),
    classes=['paper', 'rock', 'scissors'],
    class_mode='categorical',
    subset='validation',
    shuffle=True
)

```

Setelah dijalankan akan muncul keluaran seperti dibawah.

!["Output Program"](/post/machine-learning-image-pro-05.png "Output Result Code")

Artinya dataset telah diubah menjadi bentuk kumpulan array. Ketika kita coba melakukan `print() ` dataset maka akan muncul keluaran seperti dibawah.

!["Output Program"](/post/machine-learning-image-pro-06.png "Output Machine Learning Image Processing")
