+++
title = "Belajar Machine Learning : Natural Language Processing "
description = "Mengenal dan juga mengimplementasikan apa itu NLP pada Machine Learning"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-12-08"
draft=false
tutorials = [
    "machine-learning"
]
series = "Machine Learning"
authors = "dave"
shortcode = "NLP"
url = "/machine-learning-nlp/"
sumber = []
cover = "/post/machine-learning-nlp.png"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

Dari dulu Manusia berkomunikasi dengan lisan, tulisan, bahkan dapat dengan menggunakan gerakan yang memanfaatkan visual. Lalu bagaimana jika komputer juga dapat berkomunikasi dengan manusia? Bukan dengan cara manusia yang memahami mesin, tetapi dengan membuat mesin yang memahami manusia. Membuat mesin dapat belajar dengan sendiri agar dapat berkomunikasi dengan manusia.

**Natural Language Processing (NLP)** adalah salah satu _machine learning_ yang memanfaatkan data dalam bentuk kumpulan kata atau kalimat. Data tersebut akan digunakan untuk pelatihan mesin agar mesin dapat membaca, memahami, dan mengolah kembali tulisan manusia. Dengan kata lain, **[NLP](https://anbidev.com/machine-learning-nlp/)** bertujuan agar mesin dapat mempelajari bagaimana manusia berkomunikasi.

Setelah ini kita akan menggunakan **NLP** untuk membuat model yang dapat membedakan review positif dan review negatif dari sebuah film.

<br>

## Mempersiapkan Data

<hr>

Data akan diambil dari [kaagle.com](https://www.kaagle.com), yaitu data dari kumpulan review film dengan sentiment positif dan negatif untuk membedakannya.

Download data training nya **[disini](https://www.kaggle.com/atulanandjha/imdb-50k-movie-reviews-test-your-bert)**

Masukan data yang berbentuk `csv` ke dalam variable _dataframe_ dengan memberikan _path_ data tersebut.

```python
import panda as pd
df = pd.read_csv('/content/drive/My Drive/datasets/IMDB 50K Movie Reviews (TEST your BERT)/train.csv)
```

Coba kita tampilkan _summary_ data tersebut, dan hasilnya seperti dibawah ini.

!["Summary Data Movie dari Kaggle"](/post/machine-learning-nlp-01.png "Summary Data Movie dari Kaggle")

**Pandas** adalah library yang digunakan untuk memanipulasi dan menganalisis data. Fungsi `read_csv()` digunakan untuk memasukan data kedalam bentuk **csv** untuk diolah di langkah selanjutnya. Dengan menuliskan _variable dataframe_ yang telah dimasukan dataset kedalamnya dapat menampilkan 5 data teratas dan 5 data terbawah.

Ubah bentuk data pada kolom sentiment menjadi bentuk angka untuk _labeling_ setiap data.

```python
cat = pd.get_dummies(df.sentiment)
df = pd.concat([df, cat], axis=1)
df = df.drop(columns='sentiment')
```

Ketika kita lihat datanya, terjadi perubahan kolom dari sentiment ke 2 kolom berbeda yaitu `pos` dan `neg`.

!["Tambahan informasi kolom pos dan neg"](/post/machine-learning-nlp-02.png "Tambahan informasi kolom pos dan neg")

Fungsi `get_dummies()` digunakan untuk membuat kolom yang dipilih diubah ke dalam bentuk binary sebagai label. Membuat kolom baru dengan nama data yang berisi **1** atau **0**. Setelah membuat data tersebut, dimasukan ke dalam dataframe dengan fungsi `concat()` dan menghilangkan kolom sebelumnya dengan fungsi `drop()`.

Setelah itu kita akan menghitung jumlah kata yang terdapat pada kolom text dengan membuat fungsi sendiri. Fungsi penghitungan kata ini akan digunakan sebagai bentuk dari data. Hasil dari fungsi ini akan digunakan sebagai patokan dalam membuat _input layer_ pada model.

```python
from collections import Counter

def wordCount(text):
  count = Counter()
  for i in text.values():
    for word in i.split():
      count[word] += 1
  return count

text = df.text
counter = wordCount(text)

num_word = len(counter)
print(numword)
#280617
```

Jumlah kata yang ada pada keseluruhan datanya adalah **280617**.

<br>

## Memisah Data Ke Beberapa Bagian

<hr>

Setelah data siap digunakan, data dipisah untuk mebedakan data untuk training dan data untuk testing. Setiap data pada training dan validation akan dipisah data teks dan labelnya.

```python
from sklearn.model_selection import train_test_split

text = df['text'].values
y = df[['pos','neg']].values
text_train , text_test, y_train, y_test = train_test_split(text, y, test_size=0.2)
```

Fungsi `train_test_split()` akan memisahkan data secara otomatis dengan memberikan parameter data yang akan dibagi. Pada kode diatas data akan dibagi **80%** untuk training dan **20%** untuk testing.

<br>

## Tokenisasi dan Pengurutan

<hr>

**Tokenisasi (_Tokenizer_)** digunakan untuk mengubah setiap huruf pada setiap kata ke dalam angka tertentu seperti pada format **ASCII**.

```python
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

tokenizer = Tokenizer(num_words=280617, oov_token='-')
tokenizer.fit_on_texts(text_train)
tokenizer.fit_on_texts(text_test)
```

Parameter `oov_token` akan digunakan apabila ada huruf yang tidak dapat di*tokenisasi* dengan baik. Huruf tersebut akan diubah menjadi karakter yang tadi kita tentukan (`'-'`).

Pada tokenisasi terdapat masalah apabila sebuah kata memiliki jumlah dan huruf yang sama seperti _"karus"_ dan _"rusak"_. Mesin akan membeca kedua kata tersebut adalah sama, maka dari itu kita membutuhkan **_Pengurutan (sequences)_**.

**Pengurutan (_sequences_)** akan menampung setiap token yang ada ke dalam bentuk array. Dengan begitu masalah sebelumnya dapat terselesaikan.

```python
seq_train = tokenizer.texts_to_sequences(text_train)
seq_test = tokenizer.texts_to_sequences(text_test)
```

Pada array yang dibuat dengan _sequences_ memiliki panjang yang berbeda-beda dan membuat penginputan data akan menjadi sulit. Kita harus menyamakan panjang pada setiap _sequences_. Proses penyamaan panjang (_resize_) bisa disebut juga dengan **padding**.

**Padding** akan menyamakan panjang data pada setiap _sequences_.

```python
pad_train = pad_sequences(seq_train,
                          maxlen=300,
                          padding='post',
                          truncating='post')

pad_test = pad_sequences(seq_test,
                         maxlen=300,
                         padding='post',
                         truncating='post')
```

<br>

## Embedding Layer

<hr>

Perancangan Model kali ini akan menggunakan **_Embedding_** yang merupakan inti dari klasifikasi teks kali ini. **_Embedding_** membuat model dapat memahami makna dari sebuah kata, dan mengelompokan kata yang maknya mirip agar berdekatan.

Seperti kata _"keren"_, _"bagus"_, dan _"mantab"_ akan di kelompokan berdekatan karena memiliki makna positif.

```python
from tensorflow.keras import layers
from tensorflow.keras import Sequential

model = Sequential([layers.Embedding(280617, 64, input_length=300),
                    layers.LSTM(64, dropout=0.1),
                    layers.Dense(128, activation='relu'),
                    layers.Dense(64, activation='relu'),
                    layers.Dense(2, activation='sigmoid')])
model.summary()
```

Pada kode diatas akan sebagai memasukan _Embedding Layer_ sebagai _input layer_. Parameter pada input layer disesuaikan dengan bentuk data yang akan dimasukan.

!["Hasil Summary Setelah Embedding Layer"](/post/machine-learning-nlp-03.png "Hasil Summary Setelah Embedding Layer")

<br>

## Training Model

<hr>

Sebelum melakukan training, compile terlebih dahulu model yang sudah dirancang tadi.

```python
model.compile(loss='binary_crossentropy',
              optimizier='adam',
              metrics=['accuracy'])
```

Untuk parameter `loss` kita menggunakan <span style="color:#e69720"><i>"binary_crossentropy"</i></span> karena kita hanya mengklasifikasikan 2 jenis yaitu **review positif** dan **review negatif**. Jika ingin menggunakan 3 jenis atau lebih klasifikasi dapat menggunakan <span style="color:#e69720"><i>"categorical_crossentropy"</i></span>.

Pada saat training menggunakan `fit()`, masukan data teks yang telah di _padding_ beserta labelnya.

```python
history = model.fit(pad_train, y_train,
                    epochs=10,
                    validation_data=(pad_test, y_test),
                    verbose=2)
```

Saat proses pelatihan kita dapat melihat sekilas **akurasi**, dan **_loss_** yang ada pada setiap _epoch_ pada gambar dibawah ini.

!["Akurasi Model Trainig"](/post/machine-learning-nlp-04.png "Akurasi Model Trainig")

**Epoch** sendiri adalah jumlah dari pelatihan yang dilakukan oleh model dalam sekali jalan. Jadi ketika kita memberikan parameter 10 pada _epoch_, maka model akan melatih data sebanyak 10 kali.

<br>

## Model Evaluation

<hr>

Untuk evaluasi pelatihan model, kita akan menggunakan `matplotlib` untuk membuat grafik histori dari pelatihan sebelumnya.

```python
import matplotlib.pyplot as plt

plt.plot(history.history['accuracy'])
plt.plot(history.histroy['val_accuracy'])

plt.title('Model Accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')

plt.legend(['Train', 'Test'], loc='lower right')
plt.show()
```

Dan berikut adalah hasil nya!

!["Diagram Akurasi Dengan Matplotlib"](/post/machine-learning-nlp-05.png "Diagram Akurasi Dengan Matplotlib")

Terlihat pada grafik, akurasi yang didapat saat pelatihan sempat naik hampir menyentuh **85%** dan turun Kembali hingga di bawah **55%**. Artinya model yang kita buat <mark>belum sempurna</mark>.

Untuk meningkatkan akurasi model, kita dapat memodifikasi rancangan model yang sebelumnya atau menambahkan _epoch_ pada saat pelatihan. _Epoch_ ditambahkan agar mesin mendapatkan waktu lebih untuk belajar.

<center>. . . </center>

Dalam pembuatan model machine learning **_trial-and-error_** sangat diperlukan agar mencapai bentuk yang sempurna. Seperti yang sudah anbi jelaskan di postingan yang lalu [Tahapan Dalam Membuat Model Machine Learning](https://anbidev.com/machine-learning-how-to-deal/).

Untuk hasil kode notebook nya akan saya post di github [AnbiDev](https://github.com/anbidev). Terima kasih. Dimana ada kemauan disana ada jalan.
