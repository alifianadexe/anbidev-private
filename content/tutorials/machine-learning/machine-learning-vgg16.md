+++
title = "Belajar Machine Learning - Training Data Dengan VGG16"
description = "Mengenal sebuahsebuah tools yang disebut VGG16 dalam mengoptimasikan pelatihan data di ML"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-09-24"
tutorials = [
    "machine-learning"
]
aliases = [
    "/tutorials/machine-learning/machine-learning-training-data-vgg16/",
]
series = "Machine Learning"
authors = "dave"
shortcode = "Training Data VGG16"
url = "/machine-learning-training-data-vgg16/"
sumber = []
cover = "/post/cover-ml-training-data.jpg"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

## Training Data Dengan VGG16

<hr>

Sebelumnya kita telah melatih data kita dengan model yang dibuat dengan manual, dan hasil yang didapatkan kurang memuaskan. Mungkin dengan banyak **_epochs_** akan membantu, tetapi akan memakan waktu banyak. Kali ini kita akan mencoba menggunakan _Model Applications_ untuk membuat modelnya.

<br>

## Model Applications

<hr>

Sebelum kita mulai membuat sebuah model menggunakan _Model Applications_, sebaiknya kita pelajari dulu apa itu _Model Applications_. **_Model Applications_** adalah <ins>Aplikasi yang disediakan oleh Tensorflow untuk mempermudah suatu pekerjaan dalam pemrograman</ins>.

Untuk lebih lengkapnya mengenai berbagai macam aplikasi yang disediakan dapat dilihat pada tautan berikut :

https://www.tensorflow.org/api_docs/python/tf/keras/applications

<br>

## **VGG16**

<hr>

Aplications yang akan kita gunakan adalah **VGG16**, yaitu sebuah module yang berisi model yang sudah jadi, untuk lebih jelasnya akan ditunjukan langsung saat pengerjaan agar lebih paham :D

<br>

## Implementasi VGG16

<hr>

Sebelumnya kita telah mendapatkan akurasi yang kurang memuaskan dari model yang telah kita buat manual. Kali ini kita akan mencoba membuat model dari VGG16.

Langkah pertama yang harus dilakukan tentunya meng-_import_ VGG16.

```python
from keras.applications import vgg16
```

Lalu kita deklarasikan vgg16 kedalam variable.

```python
vgg16_model = vgg16.VGG16()
```

Setelah itu kita buat model dengan _sequential_ dan memasukan layer-layer di dalam VGG16 ke dalam model _sequential_ tersebut.

```python
model = Sequential()
for layer in vgg16_model.layers[:-1]:
  model.add(layer)
```

Pada kode diatas kita memasukan layer yang berada di dalam VGG16 ke dalam model _sequential_ yang telah dibuat dengan perulangan.

`layers[:-1]` akan membuat layer terakhir tidak dimasukan karena nantinya akan kita tambahkan secara manual agar sesuai dengan output yang kita inginkan.

Terakhir kita tambahkan layer _Dense_ dengan _activation softmax_ sebagai layer output.

```python
model.add(Dense(3, activation='softmax'))
```

Dan ketika kita melakukan `summary()` akan muncul hasil model seperti dibawah.

!["Output Model Summary"](/post/machine-learning-training-vgg16-01.png "Output Summary From Model VGG16")

<br>

## Compiling Model

<hr>

Setelah VGG16 berhasil kita implementasikan kedalam model, sekarang kita susun model tadi.

```python
model.compile(
    loss='categorical_crossentropy',
    optimizer='adam',
    metrics=['accuracy']
)
```

Kali ini kita masih menggunakn `loss` dan `optimizer` yang sama seperti part sebelumnya.

<br>

## Model Training

<hr>

Sekarang saatnya melatih model yang telah kita buat.

```python
history = model.fit(
    train_image,
    validation_data=val_image,
    epochs=5
)
```

Kita akan melakukan 5 _epochs_ karena jumlah layer yang banyak akan mempengaruhi lama proses training, untuk efisiensi waktu kita akan menggunakan 5 _epochs_.

Dibawah adalah hasil dari training yang kita lakukan.

!["Hasil Training Model VGG16"](/post/machine-learning-training-vgg16-02.png "Hasil Training Model VGG16")

<br>

## Analisa

<hr>

Untuk menganalisa kita akan menggunakn fungsi yang telah kita buat pada part [sebelumnya](https://www.anbidev.com/tutorials/machine-learning/machine-learning-training-data/).

Berikut adalah hasil Analisa dengan graph dari proses training data.

!["Graph Result Training"](/post/machine-learning-training-vgg16-03.png "Graph Result Training")

Berdasarkan graph diatas, kita telah mendapatkan hasil yang sangat bagus. Akurasi dan validasi berada diatas **95%** dan _loss_ yang didapatkan hampir **0%**. Selanjutnya kita akan melakukan uji coba pada model kita.

<br>

## Predicting

<hr>

Langkah terakhir yang harus dilakukan adalah menguji model. Silahkan mencoba dengan mengambil gambar sendiri. Kita akan menggunakan gambar tersebut untuk memprediksi klasifikasi gambar.

```python
from google.colab import files
from keras.preprocessing import image
import matplotlib.image as mpimg
%matplotlib inline

uploaded = files.upload()

for fn in uploaded.keys():

  # predicting images
  path = fn
  img = image.load_img(path, target_size=(224,224))
  imgplot = plt.imshow(img)
  x = image.img_to_array(img)
  x = np.expand_dims(x, axis=0)

  images = np.vstack([x])
  classes = model.predict(images, batch_size=32)
  pr = np.argmax(classes, axis=1)
  print(pr)

  if pr==0:
    print('Paper')
  elif pr==1:
    print('Rock')
  elif pr==2:
    print('Scissors')
```

Kode diatas akan memanggil perintah input dari _data storage_ internal perangkat kita untuk memilih gambar. Gambar yang dipilih akan diubah menjadi bentuk array dan di prediksi menggunakan `model.predict()`.

!["Implementasi Model pada sebuah gambar"](/post/machine-learning-training-vgg16-03.png "Implementasi Model Pada Sebuah Gambar")

Hasil dari predict masih dalam bentuk array yang mana harus kita ubah agar lebih mudah dipahami. Pada part [image preprocessing](https://anbidev.com/tutorials/machine-learning/machine-learning-image-processing/) kita menambahkan

```python
classes=['paper', 'rock', 'scissors']
```

Yang dapat diartikan juga

```python
classes=[0, 1, 2]
```

Yaitu _‘paper’_ akan bernilai 0, _‘rock’_ akan bernilai 1, dan _‘scissors’_ akan bernilai 2.

Jangan lupa sharing hasil belajar kalian dan jika ada kritik, saran atau pertanyaan boleh ditanyakan dibawah. Nanti kita diskusikan bersama :3
