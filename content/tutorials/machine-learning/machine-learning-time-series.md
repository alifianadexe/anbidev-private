+++
title = "Belajar Machine Learning : Time Series Analysis "
description = "Belajar tentang penerapan model machine learning time series pada kasus tertentu"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-12-17"
draft=false
tutorials = [
    "machine-learning"
]
series = "Machine Learning"
authors = "dave"
shortcode = "Time Series"
url = "/machine-learning-time-series/"
sumber = []
cover = "/post/machine-learning-time-series.png"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

**Time Series** adalah salah satu teknik _machine learning_ yang digunakan untuk evaluasi atau membuat keputusan. _Time series_ akan mempelajari data sebelumnya berdasarkan waktu dan pola (_pattern_) yang ada.

_Time series_ membuat model untuk memprediksi masa depan berdasarkan nilai dari data sebelumnya atau bisa disebut dengan **_forecasting_**.

<br>

## Mempersiapkan Data

<hr>

Untuk membuat sebuah model machine learning, seperti biasa kita akan menyiapkan data. Data kali ini kita ambil dari [Kaggle.com](https://kaggle.com). Kita akan mencoba memprediksi **penjualan saham sepeda** berdasarkan rentang waktu yang ditentukan.

[Download Dataset (Londong Bike Sharing)](https://www.kaggle.com/hmavrodiev/london-bike-sharing-dataset)

Masukan _dataset_ ke dalam _dataframe_ dengan mengubah format waktu pada dataset.

```python
import panda as pd

url = '/content/drive/My Drive/datasets/London bike sharing dataset/london_merged.csv'
data = pd.read_csv(url, parse_dates=['timestamp'], index_col='timestamp')
```

Jika kita lihat, hasilnya kira - kira akan seperti ini :

!["Tampilan Data Saham Penjualan Sepeda"](/post/machine-learning-time-series-01.png "Tampilan Data Saham Penjualan Sepeda")

Parameter `parse_date` akan mengubah format waktu menjadi format kolom pada _dataframe_. Hal ini dilakukan agar format waktu dapat dimanipulasi dengan mudah.

Selanjutnya kita dapat melakukan _checking_ data, untuk menentukan apakah di dalam dataframe terdapat _`error`_ atau nilai _`null`_.

```python
data.isnull().sum()
```

!["Tampilan Data Jumlah Null dan Error"](/post/machine-learning-time-series-02.png "Tampilan Data Jumlah Null dan Error")

Dengan menggunakan kombinasi parameter `isnull()` dan `sum()` maka _dataframe_ akan menghitung jumlah data yang memiliki nilai `null`.

Kita tambahkan kolom baru dengan datanya nanti akan berhubungan dengan waktu, contoh data yang akan kita tampung adalah data jam, hari, bulan, dan tahun.

```python
data['hour'] = data.index.hour
data['day_of_week'] = data.index.dayofweek
data['day_of_month'] = data.index.day
data['month'] = data.index.month
```

Pada data `timestamp` yang tadi telah di buat, kita dapat mengambil data waktu tertentu seperti jam, hari, bulan, atau tahun. Nilai yang di ambil kita masukan Kembali ke dalam _dataframe_ dalam bentuk kolom.

!["Data Dengan Penambahan Kolom Jam, Hari, Bulan"](/post/machine-learning-time-series-03.png "Data Dengan Penambahan Kolom Jam, Hari, Bulan")

Jika kita lihat datanya, _dataframe_ mendapatkan 4 kolom baru sesuai dengan nilai waktu yang kita deklarasikan.

<br>

## Dataframe Exploring

<hr>

Sebelum kita membuat model, kita dapat melakukan **exploring data** terlebih dahulu. Exploring data sangat berguna untuk mempelajari _pattern_ dasar pada data. Dengan exploring data kita juga dapat mencari informasi-informasi sederhana yang akan digunakan sebagai dasar dalam mencari informasi-informasi selanjutnya.

Kita akan mencoba melihat grafik penjualan saham sepeda setiap bulan, dengan membuat _dataframe_ lain yang diurutkan setiap bulan.

```python
import matplotlib.pyplot

data_by_month = data.resample('M').sum()

time = data_by_month.index.values
test = data_by_month['cnt'].values

plt.figure(figsize=(15,5))
plt.plot(time, test)
```

Fungsi `resample()` akan mengambil **sample data waktu** yang ada pada dataset. Lalu, kita bagi data menjadi `time` sebagai waktu dan `test` sebagai data penjualannya dan menampilkannya dalam bentuk grafik dengan `plot()`.

!["Tampilan Grafik Penjualan Setiap Bulan"](/post/machine-learning-time-series-04.png "Tampilan Grafik Penjualan Setiap Bulan")

Jika kita lihat grafik diatas, terlihat dengan jelas penjualan diawal tahun 2015 naik pada tahun 2016 tetapi turun pada tahun 2017.

<br>

## Data Splitting

<hr>

Kali ini data akan dibagi menggunakan fungsi `train_test_split()`, tetapi kita akan berikan parameter `iloc` agar data tidak teracak. Jika data teracak, maka data kita akan sulit untuk dipelajari oleh mesin.

```python
from sklearn.model_selection import train_test_split
import numpy as np

train_size = int(len(data) * 0.8) # bobot 80%
train, test = data.iloc[0:train_size], data.iloc[train_size:len(data)]

print(train.shape, test.shape)
```

Data akan dibagi **80%** data awal sebagai data untuk _training_ dan sisanya **20%** untuk _testing_.

Sebelum di lakukan **_splitting_**, data akan kita normalisasi data dengan `RobustScaler()` untuk menghilangkan rata-rata dan skala pada nilai-nilai yang ada.

```python
from sklearn.preprocessing import RobustScaler

transformer = RobustScaler()
cnt_transformer = transformer.fit(train[['cnt']])

train['cnt'] = cnt_transformer.transform(train[['cnt']])

test['cnt'] = cnt_transformer.transform(test[['cnt']])
```

Dengan fungsi `fit()`, data akan menghasilkan nilai median dan kuartil yang nantinya akan digunakan untuk mengukur data.

!["Process Fitting Dengan RobustScaler"](/post/machine-learning-time-series-05.png "Process Fitting Dengan RobustScaler")


Setelah selesai dengan proses `fit()` selanjutnya kita akan menormalisasi data dengan fungsi `transform()`.

```python
scale_col = ['t1', 't2', 'hum', 'wind_speed']
scale_transformer = transformer.fit(train[scale_col].to_numpy())

train.loc[:, scale_col] = scale_transformer.transform(
    train[scale_col].to_numpy()
)

test.loc[:, scale_col] = scale_transformer.transform(
    test[scale_col].to_numpy()
)
```

!["Process Transformasi Dengan RobustScaler"](/post/machine-learning-time-series-06.png "Process Transformasi Dengan RobustScaler")

Fungsi `transform()` akan mengukur data, lalu mengganti nilai tengah (_center value_) ke nilai tengah yang baru, dengan cara mengukur nilai tengah yang baru berdasarkan jarak kuartil yang ada di dalam data tersebut.

Lalu, untuk **_splitting_** data kita akan membuat fungsi sendiri agar data yang kita split sesuai dengan keingingnan kita. Kita namakan fungsi `split_data()`, dan kode nya seperti di bawah.

```python
import numpy as np
import tensorflow as tf

def split_data(x, y, time_steps=1):
    xs, ys, [], []
    for i in range(len(x) - time_steps):
        v = x.iloc[i:(i + time_steps)].values
        xs.append(v)
        ys.append(y.iloc[i + time_steps])
    return np.array(xs), np.array(ys)

x_train, y_train = split_data(train, train.cnt, 10)
x_test, y_test = split_data(test, test.cnt, 10)

print(x_train_shape, y_train_shape)
```

Output :

```
(13921, 10, 13) (13921,)
```

Dalam fungsi `split_data()` memiliki parameter `x` , `y` dan `time_steps`. Parameter `x` itu adalah data asli, sedangkan parameter `y` adalah data yang sudah di _transform_. Dan untuk `time_steps` digunakan untuk menentukan pembagian data setiap segmen.

Data yang telah di normalisasi tadi, akan terbagi dengan fungsi `split_data()` dan bentuknya akan berubah sesuai dengan waktu yang diberikan. Dalam kasus ini data akan dibagi 10 pada setiap segmennya.

<br>

## Calbacks

<hr>

Buat apa **_Keras callbacks_** pada model kita? **_Keras Callbacks_** membantu kita dalam menangani bug secara lebih lebih cepat serta membantu dalam membuat model kita lebih baik lagi. Dia juga dapat memvisualisasikan model training yang berjalan, serta mencegah lebih awal terjadinya overfitting.

Kali ini kita akan membuat callbacks secara manual dengan memanggil objek Callback dari keras.

```python
class my_allback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs={}):
        if(logs.get('mae') < 0.1):
            print("MAE has reached below 10%")

    def on_train_end(self, epoch, logs={}):
        print('Done')

callbacks = my_allback()
```

fungsi `on_epoch_end()` akan menjalankan fungsi callbacks setiap satu `epoch` selesai dijalankan dalam sekali training dan fungsi `on_train_end()` akan menjalankan fungsi saat training selesai dijalankan.

**_Mean Absolute Error_** atau **MAE** adalah salah satu _metrics_ yang digunakan untuk menghitung kualitas dari suatu model machine learning. MAE akan menghitung rata-rata dari jumlah error yang terjadi pada sebuah model.

<br>

## Modeling

<hr>

Model machine learning yang akan kita rancang, dilakukan secara manual dengan menggunakan model **_[Sequential](https://keras.io/guides/sequential_model/)_** dan dengan menambahkan 2 layer LSTM.

```python
model = tf.keras.models.Sequential([
    tf.keras.layers.LSTM(128,return_sequences=True),
    tf.keras.layers.LSTM(128),
    tf.keras.layers.Dropout(rate=0.2),
    tf.keras.layers.Dense(30, activation="relu"),
    tf.keras.layers.Dense(30, activation="relu"),
    tf.keras.layers.Dense(1)
])
```

**LSTM** adalah **_Long Short-Term Memory_** yaitu, salah satu layer yang menggunakan deep learning untuk memecahkan masalah yang rumit seperti _machine translation, speech recognition_, dan lainnya.

Jika menggunakan 2 layer LSTM, maka layer pertama harus diberikan parameter `return_sequences` yang bernilai `True`.

```python
model.compile(loss = tf.keras.losses.Huber(),
              optimizer = tf.keras.optimizers.Adam(lr=0.01),
              metrics = ["mae"])
```

Kali ini, compiling kita akan menggunakan nilai "hubber" pada parameter `loss`, Lalu nilai "Adam" sebagai `optimizer` dan nilai "mae" sebagai `metrics`.

<br>

## Training Data

<hr>

Selanjutanya kita training model awal dengan melakukan 50 `epoch` dan parameter `shuffle` diberi nilai False agar data tidak teracak.

```python
history = model.fit(x_train,
                    y_train,
                    epochs=50,
                    batch_size=32,
                    validation_split=0.2,
                    callbacks = callbacks,
                    shuffle=False)
```

<br>

## Evaluating Model

<hr>

Lalu yang terakhir, kita akan membuat fungsi dibawah untuk melihat _progress_ dari pelatihan yang telah kita lakukan.

```python
def show_final_history(history):
    fig, ax = plt.subplots(1, 2, figsize(15,5))
    ax[0].set_titles('LOSS')
    ax[0].plot(history.epoch, history.history["loss"], label="Train Loss")
    ax[0].plot(history.epoch, history.history["val_loss"], label="Validation Loss")
    ax[1].set_title('MAE')
    ax[1].plot(history.epoch, history.history["mae"], label="Mae")
    ax[1].plot(history.epoch, history.history["val_mae"], label="Validation Mae")
    ax[0].legend()
    ax[1].legend()

show_final_history(history)
```

!["Grafik Perbandingan LOSS dan MAE"](/post/machine-learning-time-series-07.png "Grafik Perbandingan LOSS dan MAE")

Terlihat **_error_** pada **_loss_** dan _metrics_ **mae** turun secara perlahan, hal ini menandakan bahwa <mark>model yang kita buat cukup bagus</mark>. Mungkin dibutuhkan lebih banyak `epoch` untuk mendapatkan hasil yang lebih maksimal.

<center> . . . </center>

Sekian untuk pembahasan cara membuat model machine learning time series analysis. Untuk hasil kode notebook nya akan saya post di github [AnbiDev](https://github.com/anbidev). Terima kasih.
