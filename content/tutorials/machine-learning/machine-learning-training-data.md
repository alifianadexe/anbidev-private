+++
title = "Belajar Machine Learning - Training Data"
description = "Machine learning sangat bergantung pada data yang sudah dilatih"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-09-10"
tutorials = [
    "machine-learning"
]
series = "Machine Learning"
aliases = [
    "/tutorials/machine-learning/machine-learning-training-data/",
]
authors = "dave"
shortcode = "Training Data"
url = "/machine-learning-training-data/"
sumber = []
cover = "/post/cover-ml-training-data.jpg"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

## Training Data

<hr>

Pada part [sebelumnya](https://www.anbidev.com/tutorials/machine-learning/machine-learning-image-processing/) kita telah menyiapkan dataset yang dibutuhkan dan mengubahnya menjadi bentuk kumpulan array agar dapat dipelajari oleh mesin. Sekarang kita akan membuat Model _Neural Network_ kita sendiri sekaligus mempelajarinya.

<br>

## Modeling

<hr>

Di dalam Model _Neural Network_ terdapat layer-layer yang memiliki berbagai macam fungsi. Untuk awalan kita akan mencoba membuat Model yang sederhana untuk menjadi acuan pada analisis berikutnya.

Kita akan membuat Model dengan Model **`Sequential`** dan 3 macam layer yaitu, `GlobalAveragePooling2D`, `Dense`, dan `Dropout`. Masing-masing layer tersebut memiliki fungsi yang berbeda, untuk lebih jelasnya bisa kamu pelajari [disini](https://www.tensorflow.org/api_docs/python/tf/keras/layers/).

Import Model `Sequential` dan Layer-layer yang dibutuhkan.

```python
from keras.models import Sequential
from keras.layers import GlobalAveragePooling2D, Dense, Dropout
```

Lalu deklarasikan model yang akan dibuat.

```python
model = Sequential()
```

Dari model tersebut bisa kita tambahkan layer-layer yang dibutuhkan.

```python
model.add(Dense(64, activation='relu', input_shape=(224, 224, 3)))
model.add(GlobalAveragePooling2D())
model.add(Dropout(0.5))
model.add(Dense(32, activation='relu'))
model.add(Dense(16, activation='relu'))
model.add(Dense(3, activation='softmax'))
```

Untuk layer pertama harus kita tambahkan `input_shape` sebagai pintu masuk data yang akan dilatih. Parameter `input_shape` ini harus sesuai dengan bentuk data yang akan dilatih.

_Activation_ yang digunakan pada model awal kita hanya `'relu'` dan `'softmax'` sebagai layer output.

<ins>Layer Output</ins> yang diletakan paling akhir sebaiknya memiliki unit yang sesuai dengan data yang kita butuhkan. Pada kasus kali ini kita membutuhkan 3 class (_batu, gunting, dan kertas_), maka diberikanlah 3 Units pada **_Layer Dense_**.

Setelah kita mengisi model dengan layer-layer, kita dapat melihat Neural Network kita secara keseluruhan dengan fungsi :

```python
model.summary()
```

Maka akan muncul keluaran seperti ini.

!["Summary Training Data"](/post/machine-learning-training-data-01.png "Summary dari Data Training")

<br>

## Compiling Model

<hr>

Setelah rancangan model berhasil dibuat, sekarang kita akan menyusun model tersebut.

```python
model.compile(
    loss='categorical_crossentropy',
    optimizer='adam',
    metrics=['accuracy']
)
```

Pilihan untuk parameter `loss` dan `optimizer` saat menyusun model ada banyak dan dapat dilihat pada link [berikut ini](https://www.tensorflow.org/api_docs/python/tf/keras/).

Untuk `loss` kita akan menggunakan `'categorical_crossentropy'` karena data yang kita latih akan mengeluarkan output 3 class, dan kita akan mencoba menggunakan `'adam'` sebagai *optimizer*nya.

<br>

## Fitting Model / Model Training

<hr>

Setelah menyusun model, kita akan melatih model kita dengan dataset yang telah kita siapkan.

Kita akan memasukan proses pembelajaran model kita ke dalam variabel `history`.

```python
history = model.fit(
    train_image,
    validation_data=val_image,
    epochs=10
)
```

Dengan menggunakan `model.fit()` maka Keras akan melakukan training data secara otomatis, kita perlu memberikan `train_image` sebagai data yang akan dilatih, `val_image` sebagai data untuk validasi, dan parameter `epochs` yaitu jumlah pembelajaran yang akan dilakukan.

Keluaran dibawah adalah hasil dari pembelajaran yang dilakukan oleh model kita.

!["Output Training Data"](/post/machine-learning-training-data-02.png "Output dari Data Training")

<br>

## Analisa

<hr>

Untuk menganalisa model kita dapat memanfaatkan plot untuk menggunakan grafik agar lebih mudah.

```python
import numpy as np
import matplotlib.pyplot as plt
```

Kita dapat menggunakan variabel `history[]` untuk mengambil data dari proses pembelajaran sebelumnya.

```python
def show_final_history(history):
    fig, ax = plt.subplots(1, 2, figsize=(15,5))
    ax[0].set_title('loss')
    ax[0].plot(history.epoch, history.history["loss"], label="Train loss")
    ax[0].plot(history.epoch, history.history["val_loss"], label="Validation loss")
    ax[1].set_title('acc')
    ax[1].plot(history.epoch, history.history["accuracy"], label="Train acc")
    ax[1].plot(history.epoch, history.history["val_accuracy"], label="Validation acc")
    ax[0].legend()
    ax[1].legend()
```

Fungsi diatas akan mengeluarkan grafik dari `loss` dan `accuracy` sekaligus validasinya.

!["Graphic of Training Data"](/post/machine-learning-training-data-03.png "Line Graphic of Output Data Training")

Dari data diatas, kita dapat menyimpulkan bahwa model yang kita buat <ins>masih kurang bagus</ins>, tetapi terdapat proses dalam setiap **epochs**. Mungkin dengan menambah jumlah `epochs` akan membuat `accuracy` semakin bagus, tetapi tentunya akan membutuhkan waktu lebih banyak.

<br>

Part selanjutnya kita akan mencoba membuat model dengan menggunakan salah satu Model Application, yaitu **_VGG16_**. Apa itu **_VGG16_**? dan bagaimana cara menggunakannya? Akan kita bahas di part selanjutnya :3
