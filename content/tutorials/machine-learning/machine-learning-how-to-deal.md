+++
title = "Tahapan Dalam Membuat Model Machine Learning"
description = "Apa saja yang perlu diperhatikan dalam membuat model Machine Learning"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-10-07"
tutorials = [
    "machine-learning"
]
aliases = [
    "/tutorials/machine-learning/machine-learning-how-to-deal/",
]
series = "Machine Discuss"
authors = "adexe"
shortcode = "How To Deal"
url = "/machine-learning-how-to-deal/"
sumber = ['https://towardsdatascience.com/machine-learning-general-process-8f1b510bd8af']
cover = "/post/how-to-deal-ml.jpg"
toc=true
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

# Content

Saya orang yang baru belajar machine learning, saya juga mengetahui beberapa pengetahuan dasar tentang pemrograman. suatu hari saya kepikiran untuk membuat machine learning.

Bagaimana cara saya untuk membuat model machine learning dalam menghadapi masalah saya? apa saja yang harus saya lakukan?.

<br>

## Definisikan Masalah Kamu

<hr>

Kita harus punya masalah, bukan berarti saya menyuruh kamu untuk cari masalah. Tapi kita harus mendefinisikan masalah yang kamu punya dengan cara yang logis dan matematis. Pasti bingung ya?

Misal kamu seorang _real estate_, kamu ingin menjual rumah - rumahmu dengan tipe serta fasilitas yang berbeda. Kamu punya data tentang rumah yang telah kamu jual dulu. Dan sekarang kamu ingin membuat sebuah aplikasi yang dimana aplikasi itu dapat dengan tepat menemukan harga yang cocok untuk rumah yang akan kamu jual.

Dari permasalahan diatas kamu coba pecah dengan beberapa pertanyaan :

- Apa tujuanmu? Apa yang ingin kamu prediksi?
- _Feature_ (Bobot) seperti apa yang akan kamu gunakan?
- Data seperti apa yang ingin kamu input? apakah data itu tersedia?
- Masalah seperti apa yang sedang kita hadapi? Binnary classification? Clustering?
- Improvement seperti apa yang kita harapkan?
- Bagaimana cara kita mengukur _Feature_ (bobot) dalam data kita ?

Masalah tidak bisa kita selesaikan, sampai kita memiliki sebuah model kerja yang dapat membuat kita berhipotesis :

- Output dapat kita prediksi dari input yang kita masukkan
- Data yang ada cukup informatif untuk mempelajari hubungan antara input dan output

> **Penting untuk diingat** bahwa machine learning hanya dapat digunakan untuk menghafal pola yang ada dalam data yang sudah di latih (Training Data).

Machine learning hanya dapat mengenali apa yang telah kita lihat sebelumnya. Ketika kita menggunakan machine learning, kita berasumsi bahwa masa depan akan berjalan layaknya masa lalu, dan ini tidak selalu benar.

<br>

## Mengumpulkan Data

<hr>

Langkah pertama dalam pembuatan machine learning yaitu **mengumpulkan data**. <ins>Semakin banyak dan semakin baik kualitas data yang kita punya, performa machine learning yang kita buat akan semakin baik.</ins>

Ada beberapa metode dalam mengumpulkan data seperti **web scrapping** dan **data mining**, serta masih ada yang lain tetapi author belum belajar itu :smile:.

!["Airline Safety"](/post/how-to-deal-ml-10-min.jpg "Contoh dataset diambil dari Airline Safety")

<br>

## Pilih Ukuran Keberhasilan Kamu

<hr>

> <b>“If you can’t measure it, you can’t improve it”.</b><br> - Peter Drucker (Harvard Teacher)

Jika kamu ingin mengontrol sesuatu, kamu harus mengamati hal tersebut, dan untuk mencapai kesuksesan, sangat penting untuk mendefinisikan hal apa yang dapat kamu anggap sukses. Mungkin itu adalah presisi? akurasi? atau hal lainnya.

Hal yang kamu ukur harus sesuai dengan apa yang ingin kamu tuju dan juga terkait langsung dengan jenis masalah yang kamu hadapi :

- <b>Regression Problem</b> (masalah regresi) menggunakan metrik evaluasi seperti _mean squared error_ (MSE).
- <b>Classification Problem</b> (masalah klasifikasi) menggunakan metrik evaluasi seperti _precission_, _accuracy_ dan _recall_.

Kalian mungkin masih bingung tentang maksud diatas, di artikel berikutnya kita akan mempelajari cara menghadapi serta menyikapi 2 tipe permasalahan diatas. Jika kalian sudah tau tentang permasalahan tersebut, jauh lebih baik.

<br>

## Tetapkan Protokol Evaluasi Model Kita

<hr>

Setelah tujuan kita jelas, saatnya menentukan cara kita mengukur keberhasilan dari model yang akan kita buat. Cara mengukur keberhasilan yang paling sering dilakukan adalah :

<br>

### 1. Hold-Out Validation

Validasi **Hold-Out** adalah ketika kamu membagi dataset menjadi "Training" dan juga "Test". Dataset training adalah data yang digunakan untuk pelatihan model. Sedangkan Dataset Testing digunakan untuk melihat seberapa baik performa model tersebut pada data yang baru (data yang tidak ada di data _training_).

Pembagian secara umum ketika menggunakan metode _Hold-out_ adalah **80%** dari keseluruhan data untuk data training dan sisanya sebesar **20%** digunakan data testing.

!["Hold Out Validation"](/post/how-to-deal-ml-08-min.jpg "Hold Out Validation")

<br>

### 2. K-Fold Validation

Validasi **K-Fold** adalah metode pemisahan data menjadi beberapa bagian (**_K_**) secara acak dengan ukuran yang sama. Salah satu bagian digunakan untuk jadi data testing, dan sisa nya digunakan untuk data training. Lalu proses ini akan diulang sampai seluruh bagian yang dibagi tadi sudah pernah digunakan sebagai data testing.

Skor yang akan diambil adalah rata - rata dari nilai **_K_** yang diperoleh tadi. Teknik ini sangat berguna jika performa pada model secara signifikan berbeda pada validasi Hold-Out.

Misalnya, kita menggunakan validasi **4-Fold** dimana kumpulan data akan dipecah menjadi **4 bagian**, dan model _machine learning_ kita akan dilatih serta diuji sebanyak **4 kali** secara terpisah sehingga setiap bagian akan mendapatkan kesempatan untuk menjadi data testing.

!["K-Fold Validation"](/post/how-to-deal-ml-07-min.jpg "K-Fold Validation")

<br>

### 3. Iterated K-Fold Validation With Suffling

Teknik validasi yang terakhir sangat relevan jika kita berhadapan dengan sedikit data yang tersedia dan kita perlu mengevaluasi model seakurat mungkin (ini mungkin diperlukan ketika mengikuti kompetensi di Kaggle.com).

Teknik ini pada dasarnya adalah penerapan validasi **K-Fold** dengan data yang diacak setiap kali sebelum membaginya menjadi bagian - bagian (**_K_**).

Metode ini sangatlah berat pada saat komputasi penghitungan data. Karena jumlah model yang dilatih dan juga dievaluasi adalah **i x K** kali. **i** adalah jumlah perulangan yang dilakukan, sedangkan **K** adalah jumlah bagian pada validasi.

<br>

## Mempersiapkan Data

<hr>

Sebelum kita mulai masuk ketahap pembuatan model _machine learning_, kita harus mengubah data agar dapat dimasukkan kedalam model _machine learning_ kita. Teknik yang paling sering digunakan adalah :

<br>

### 1. Menangani Missing Data

Sangat umum dalam kasus didunia nyata terjadinya kehilangan data (_missing value_) atau data yang tidak lengkap. Penyebab kasus data seperti ini biasanya :

- Kesalahan dalam pengumpulan data.
- Field kosong pada saat survey
- Terjadi data _corrupt_
- _Measurements not applicable_(?)

Data yang hilang biasanya diwakili dengan indikator `Nan` atau `Null`. Masalahnya adalah kebanyakan algoritma yang ada, tidak bisa menangani _missing value_ sehingga kita harus menangani nilai - nilai seperti itu sebelum memasukkan nya ke dalam model machine learnig kita.

Ada beberapa cara dalam menangani _missing data_ :

1. **Menghilangkan sample atau _feature_** (bobot) yang memiliki banyak **_missing data_** . Tetapi beresiko ketika sample atau bobot memiliki banyak informasi yang relevan.
2. **Mengganti data yang hilang** dengan beberapa _pre-built estimator_ (data penduga) seperti **_Imputer Class_** pada **Scikit Learn**. Kita akan sesuaikan data yang kosong dengan memperkirakan data yang kosong tersebut. Salah satu cara yang paling umum adalah dengan menggantinya dengan nilai rata - rata dari sisa sample atau _Feature_ (bobot).

<br>

### 2. Menangani Data Kategori (Categorical Data)

Ketika kita berbicara dengan data kategori, kita bekerja menggunakan _feature_ (bobot) yang ordinal (urut) dan nominal.

- **_Feature Ordinal_** ialah jenis _feature_ kategori yang **dapat diurutkan** (contoh, _size_ : L < M < S).

- **_Feature Nominal_** ialah jenis _feature_ kategori **tidak dapat diurutkan** (contoh, _color_ : merah, kuning, hijau).

Metode yang digunakan dalam menangani ordinal dan nominal feature adalah :

**a.** **_Mapping Ordinal Feature_** : untuk memastikan bahwa algoritma menafsirkan _feature_ dengan benar, kita perlu **mengubah** data kategorikal dari bentuk _string_ ke bentuk _integer_. Contoh :

- **L** (_Large_) menjadi **0**
- **M** (_Medium_) menjadi **1**
- **S** (_Small_) menjadi **2**

**b.** **_Encoding nominal class labels_** : Cara paling umum yaitu dengan melakukan [one-hot encoding](https://deepai.org/machine-learning-glossary-and-terms/one-hot-encoding), yang terdiri dari pembuatan fitur dummy baru untuk setiap _unique value_ didalam kolom feature nominal.

Contoh, didalam kolom warna (_color_), jika kita punya 3 class : _merah_, _kuning_, _hijau_. Lalu kita melakukan **_one-hot encoding_** pada ketiga class tersebut, Lalu hasilnya kita akan mendapatkan 3 kolom baru, terdiri dari satu untuk setiap class yang unik.

Lalu, jika kita punya **baju berwarna kuning**, didalam satu kolom feature akan berbentuk seperti ini = {**_kuning_ : 1**, _hijau_ : 0, _merah_ : 0}.

!["One-Hot Encoding"](/post/how-to-deal-ml-09-min.jpg "One-Hot Encoding")

Hal ini dilakukan untuk memastikan performa dari algoritma model itu baik, karena algoritma ini akan jauh lebih efisien saat menangani matriks yang renggang (banyak nilai 0 atau `null`).

<br>

### 3. Feature Scaling

Ini adalah salah satu langkah yang penting dalam fase _pre-processing_ karena sebagian besar algoritma _machine learning_ memiliki peforma yang lebih baik ketika saat menangani _feature_ dengan skala yang sama.

Ada dua teknik yang paling umum digunakan dalam _feature scaling_ :

- **Normalization** : mengacu pada penskalaan ulang (_rescaling_) _feature_ ke kisaran **[0,1]**, yang merupakan _case_ khusus menggunakan _[min-max scaling](https://www.oreilly.com/library/view/feature-engineering-made/9781787287600/aa5580ee-6fb7-4ac2-a1fe-369d95b70168.xhtml)_. Untuk menormalkan data yang kita miliki, kita hanya perlu menerapkan metode _min-max scaling_ pada setiap kolom _feature_.

  !["Normalization Formula"](/post/machine-learning-how-to-deal-01.jpg "Normalization Formula")

- **Standardization** : berfokus pada memusatkan _feature_ pada rata-rata (_mean_) dengan standar deviasi 1, sehingga _feature_ memiliki parameter yang sama dengan _standard normal distribution_ (_zero mean_ dan _unit variance_). Ini membuat algoritma _machine learning_ lebih mudah untuk mempelajari bobot dari paramater.

  !["Standardization Formula"](/post/machine-learning-how-to-deal-02.jpg "Standardization Formula")

<br>

### 4. Memilih Feature yang Penting

Seperti yang kita lihat, salah satu alasan utama terjadinya penyebab **_overfit_** pada model _machine learning_ adalah karena adanya **redundansi pada data** kita. Hal ini membuat model yang kita buat terlalu kompleks sehingga tidak dapat mengeneralalisasi dengan baik data yang belum pernah ditraining (data baru).

Salah satu solusi paling umum dalam menghindari _overfitting_ adalah dengan mengurangi dimensionalitas data. Hal ini sering dilakukan dengan cara mengurangi _feature_ melalui [Principal Component Analisys (PCA)](https://en.wikipedia.org/wiki/Principal_component_analysis).

!["Principal Component Analysis"](/post/how-to-deal-ml-03-min.jpg "Principal Component Analysis")

<br>

### 5. Membagi Data Menjadi Subset

Secara umum, kita akan membagi data kita menjadi 3 bagian : _Training, Testing, Validation_. Kita telah melatih model dengan data _training_, mengevaluasinya dengan data _validation_ dan yang terakhir mengujinya dengan data _testing_.

> Kenapa kita tidak membaginya hanya menjadi 2 bagian, yaitu training dan testing? karena dengan begitu proses pembuatan model akan lebih sederhana.

Jawabannya adalah, mengembangkan sebuah model _machine learning_ membutuhkan ruang untuk belajar. Memilih nilai tertentu sebagai _hyperparameter_ (parameter yang berbeda pada training) membuat model diuji ulang dengan _feedback_ yang diterima pada saat menggunakan data validasi, dan pada dasarnya, ini juga suatu cara belajar.

<center> . . .</center>

Tujuan utama kita adalah agar model yang kita buat dapat menggeneralisasi dengan baik pada data yang belum pernah dilatih, dengan kata lain, memprediksi hasil yang akurat dari data yang baru.

<br>

## Proses Belajar

<hr>

Kita dapat melihat lebih dekat bagaimana proses pembelajaran (_learning process_) dilakukan dengan mempelajari salah satu algoritma paling sederhana yaitu **Regresi Linear (_Linear Regression_)**.

Didalam regresi linear kita diberi sejumlah variabel _predictor_ (prediksi) dan juga variabel _continuos response_ (respon), dan kita mencoba untuk menemukan hubungan antara variabel - variabel tersebut yang memungkinkan kita memprediksi sebuah hasil.

!["Linear Regression"](/post/how-to-deal-ml-05-min.jpg "Linear Regression")

Rumus untuk menentukan garis prediksi adalah :

> **y = β<sub>0</sub> + β<sub>1</sub>x +u.**

_x_ - input. <br> _β<sub>1</sub>_ - gradien. <br> _β<sub>0</sub>_ - garis potong y (_y-intercepts_). <br> _u_ - residual <br> _y_ - nilai dari garis pada posisi _x_

Nilai yang digunakan untuk _training_ adalah β<sub>0</sub> dan β<sub>1</sub>, yaitu nilai yang mempengaruhi posisi garis, Karena _u_ (_residual_) tidak diperhitungkan serta variable lainnya hanya _x_ (_input_) dan y (_output_). Sehingga nilai _β<sub>1</sub>_ dan _β<sub>0</sub>_ adalah "bobot" (_Weight_) dari fungsi prediksi.

> **"bobot"** dan **"bias"**, adalah parameter yang akan disusun menjadi sebuah matrix (**W** untuk bobot dan **b** untuk bias)

<center> . . .</center>

Dalam proses _training_ selalu melibatkan inisialisasi beberapa nilai acak untuk setiap _training_ matriks, dan mencoba untuk memprediksi _output_ dari data yang diinput menggunakan nilai acak.

Pada awalnya *error*nya yang dihasilkan akan bernilai besar, namun dengan membandingkan model prediksi kita dengan output yang benar, model mampu menyesuaikan bobot (_Weight_) dan nilai _bias_ sampai mendapatkan hasil prediksi model yang baik.

Proses ini diulangi sampai jumlah _loop_ yang ditentukan. Dalam setiap perulangan garis yang tadinya acak (_random_) akan bergerak mendekati garis yang lebih ideal dan akurat.

!["Training Process"](/post/how-to-deal-ml-01-min.jpg "Training Process")

<br>

## Overfitting dan Underfitting

<hr>

Salah satu masalah terpenting dalam mempertimbangkan _model training_ adalah memilih antara **pengoptimalan** atau **generalisasi**.

- Optimasi adalah proses untuk menyesuaikan model agar mendapatkan performa terbaik pada data training (_learning process_).

- Generalisasi adalah seberapa baik performa model pada data yang baru (belum pernah ditraining).

Dari awal _training_, kedua masalah tersebut saling berkorelasi, semakin rendah _loss_ pada data training, maka semakin rendah pula _loss_ pada data _testing_.

Ini terjadi ketika model **Underfitted** : kurang nya jumlah _loop_ pada saat _learning process_, sehingga masih harus dilakukan _learning process_ karena belum semua parameter dimodelkan secara relevan.

!["Underfitting Model"](/post/how-to-deal-ml-04-min.jpg "Underfitting Model")

Tapi, ketika kita menambah jumlah _loop_ (iterasi) pada saat _learning process_, Generaliasi akan berhenti dalam berimprovisasi dan sebelumnya validasi pada model akan berhenti, lalu mulai menurun.

Model akan menjadi **Overfit** : model mempelajari data _training_ dengan sangat baik, sehingga ketika disuguhi data yang baru hasilnya pun tidak relevan.

!["Overfitting Model"](/post/how-to-deal-ml-06-min.jpg "Overfitting Model")

Ada 2 cara untuk menghindari _overfitting_ ini, dapatkan lebih banyak data dan regularisasi.

- Mendapatkan lebih banyak data merupakan solusi terbaik, model yang dilatih pada data yang lebih banyak secara alami akan menggeneralisasi dengan lebih baik.

- Regularisasi dilakukan ketika semua cara sudah dicoba, ini adalah proses memodulasi kuantitas informasi yang dapat disimpan model atau menambahkan batasan pada informasi apa yang boleh disimpan.

Jika model hanya dapat menghafal sejumlah kecil pola, pengoptimalan akan membuatnya fokus pada data yang paling relevan, meningkatkan peluang model untuk menggeneralisasi dengan lebih baik.

Sementara model yang "baik" adalah model yang bisa menjelaskan data tanpa terpengaruh oleh data noise. Model tidak akan fit terhadap tiap data point, namun mampu menjelaskan trend atau kelompok data. Model yang baik akan memiliki **low coss** dan **akurasi tinggi**.

!["Overfitting Model"](/post/how-to-deal-ml-02-min.jpg "Overfitting Model")

ini belum selesai akan ada update lagi :)
