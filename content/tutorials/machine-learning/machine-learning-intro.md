+++
title = "Belajar Machine Learning - Pengenalan Fundamental"
description = "Mempelajari tentang machine learning dengan pendekatan fundamental"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "machine-learning"
]
date = "2020-09-06"
tutorials = [
    "machine-learning"
]
aliases = [
    "/tutorials/machine-learning/machine-learning-intro/",
]
series = "Machine Learning"
authors = "dave"
shortcode = "Fundamental"
url = "/machine-learning-intro/"
sumber = []
cover = "/post/cover-ml.png"
[ author ]
  name = "Dave"
  images = "/img/dave.jpg"
+++

Pasti kalian pernah mendengar nama _“Jarvis”_ dalam film **Iron Man**. Jarvis adalah **AI** yang dibuat oleh _Tony Stark_ untuk membantu keseharian Mr. Stark.

**AI** atau **_Artificial Intelligence_** memiliki beberapa cabang seperti _Natural Language Processing_, _Expert System_, _Vision_, <ins>Machine Learning</ins>, dan lainnya.

Kali ini kita akan mencoba membuat **Machine Learning** sederhana yaitu _Image Classification_ dimana kita akan membuat komputer dapat bermain “Batu, Gunting, dan Kertas”.

<br>

## Pengenalan Machine Learning

<hr>

**Machine Learning** adalah salah satu cabang _Artificial Intelligence_ yang dapat membuat mesin mempelajari kumpulan data untuk melakukan tugas tertentu. Machine Learning dapat melakukan ini dengan mempelajari algoritma dan model statistik yang ada.

Contoh Produk Machine Learning yang mendunia adalah **AlphaGo**, yaitu ML yang telah mengalahkan juara dunia permainan Go, _Ke Jie_. Dengan melakukan pelatihan data dan pola pada permainan Go, AlphaGo dapat mengalahkan _Ke Jie_ pada tahun 2007, salah satu momen dimana manusia telah dikalahkan oleh mesin dan membuat Machine learning mendunia.

<br>

## Artificial Neural Network

<hr>

Jika kita melihat bagaimana manusia berfikir dan mengolah informasi, manusia melakukan hal itu dengan otaknya. Dengan otak, manusia dapat belajar banyak hal mulai dari logika sampai seni.

Lalu bagaimana cara mesin belajar? Dengan otak seperti manusia? Hampir mirip, hanya saja mesin menggunakan <ins> _Neural network_</ins> , yang cara kerjanya hampir sama dengan _sel neuron_ pada otak manusia.

!["Layer Neural Network"](/post/machine-learning-intro-01.jpg "3 Layer Dari Neural Network")

**Neural Network** terdiri dari 3 layer dasar yaitu _Input Layer_, _Hidden Layer_, dan _Output Layer_. Setiap layer memiliki fungsinya sendiri.

<br>

### Input Layer

<hr>

_Input Layer_, layer dimana data yang nantinya akan di pelajari akan masuk dari Input Layer ini. Input Layer harus disesuaikan bentuknya sesuai bentuk data yang akan dipelajari.

Sama halnya seperti <ins>Hidung Pada Manusia</ins> yang selnya hanya dapat menerima masukan yaitu bau dari luar, <ins>bau</ins> disini adalah <ins>data</ins> yang nantinya akan diproses oleh _Hidden Layer_.

<br>

### Hidden Layer

<hr>

_Hidden Layer_, layer ini dapat memiliki banyak layer didalamnya, ibaratkan layer ini adalah <ins>otak</ins> yang <ins>memproses data</ins>. Data yang masuk melalui Input Layer akan dipelajari dengan mempelajari algoritma dan statistik yang ada.

Contohnya seperti setelah kita mencium suatu bau, kita akan berfikir _“bau apa ini?”_, nah proses berfikir ini adalah tugas dari Hidden Layer.

<br>

### Output Layer

<hr>

_Output Layer_, layer ini akan <ins>menyimpulkan proses berfikir</ins> dari mesin dengan menggunakan prediksi yang telah dipelajari dari Hidden Layer. Seperti bau yang tadi tercium, setelah dipikir-pikir, _“sepertinya bau ini adalah bau Nasi Goreng.”_

Output Layer memberikan prediksi dari data yang telah dipelajari, nah dari prediksi inilah kita dapat mengetahui apakah Model dari Neural Network yang kita buat bagus atau tidak.

<br>

Setelah memahami konsep dari Neural Network, kita akan mencoba membuat Neural Netork kita sendiri dengan menggunakan Bahasa Pemrograman Python.
