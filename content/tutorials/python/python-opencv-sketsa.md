+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-sketch-pencil.jpg"
date = 2021-02-13T00:00:00Z
description = "Tutorial mengkonversi gambar atau foto berwarna menjadi sketsa pensil dengan Open CV"
series = "Fun Code"
shortcode = "Gambar Ke Sketsa Pensil"
status = "publish"
tags = ["modul", "opencv", "library","funcode"]
title = "Konversi Gambar Ke Sketsa Pensil Dengan Python OpenCV"
type = ["tutorials", "tutorial"]
url = "/python-konversi-gambar-sketsa-pensil/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"
+++


Hai, anbi disini bakal kasih sedikit tutorial tentang cara mengkonversi gambar yang berwarna kembali menjadi sketsa pensil atau foto berwarna kalian menjadi sebuah gambaran pensil.

<center> . . . </center>

Sekarang banyak sekali aplikasi filter yang mengubah gambar atau foto kita ke suatu warna tertentu atau lebih imut atau masih banyak lagi. Tapi apakah kalian pernah berpikiran bagaimana filter gambar itu dibuat? 

Aplikasi - aplikasi tersebut melakukan manipulasi gambar dengan teknik **computer vision**. Nah, disini anbi bakal salah satu library terkenal yang dapat melakukan manipulasi gambar ydengan teknik yang sama yaitu **[OpenCV](https://opencv.org/)**. 

Menggunakan library ini kita coba mengkonversi gambar atau foto berwarna menjadi seperti sketsa pensil. Bagaimana cara melakukannya? mari kita simak langkah - langkahnya dibawah ini.

<br>

## 1. Install Dan Import OpenCV

<hr>

Pertama kita install dulu library opencv dalam bahasa python menggunakan pip.

```python
pip install opencv-python
```

Setelah itu kita import modulnya yaitu `cv2`.

```python
import cv2
```

<br>

## 2. Load Gambar 

<hr>

Lalu selanjutnya kita *load* gambar yang ingin kita konversi ke dalam program kita.

```python
img = cv2.imread("gambarku.jpg", 1)
```

* `gambarku.jpg` -> adalah gambar yang ingin anda konversi.

> Pastikan gambar dan juga program dalam satu folder untuk mempermudah *load* image

Gambar yang ingin anbi konversi adalah gambar lawang sewu ini. 

!['Gambar Lawang Sewu'](/post/python-sketch-pencil-01.jpg 'Gambar Lawang Sewu')


<br>

## 3. Konversi Gambar Ke Hitam - Putih

<hr>

Kemudian kita konversi gambar yang kita load tadi ke warna hitam putih terlebih dahulu, menggunakan fungsi `cvtColor`. 

```python
img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
```

Kenapa harus dibuat hitam putih? mengubahnya kedalam bentuk hitam putih (grayscale) memberi kita **Pixel** mana saja yang bisa digunakan dalam membuat gambar menjadi sebuah sketsa pensil.

Lalu, untuk melihat hasilnya kalian bisa menggunakan fungsi `imwrite` dibawah ini.

```python
cv2.imwrite("img_hitam_putih.png", img_gray)
```

Fungsi ini akan membuat gambar yang dimanipulasi menjadi sebuah file `.png` atau ekstensi yang kalian inginkan.

!['Gambar Hitam Putih'](/post/python-sketch-pencil-02.jpg 'Gambar Hitam Putih')

<br>

## 4. Invert Gambar

<hr>

Langkah selanjutnya adalah *inverting* warna pada gambar hitam putih. Untuk inverting kita bisa menggunakan fungsi `bitwise_not`.

```python
img_invert = cv2.bitwise_not(img_gray)
```

Kenapa harus dikonversi ke *invert*? Hal ini digunakan untuk membuat daerah yang terang menjadi lebih terang dan sebaliknya. Sehingga kita dapat menemukan garis - garis yang tepat untuk membuat sketsa pensil.

Coba kita lihat hasilnya.

```python
cv2.imwrite("img_invert.png", img_invert)
```

!['Gambar Inversi'](/post/python-sketch-pencil-03.jpg 'Gambar Inversi')

<br>

## 5. Memperhalus Gambar

<hr>

Berikutnya adalah memperhalus gambar yang sudah ada dengan cara menambahkan filter *gaussian blur* pada gambar yang kita invert tadi.

```python
img_smoothing = cv2.GaussianBlur(img_invert, (21, 21),sigmaX=0, sigmaY=0)
```

Disini kita menggunakan teknik *gaussian blur* dengan tingkat blur 21 x 21 pixel, serta membiarkan kedua nilai `sigma` menjadi default `(0, 0)` pada saat memperhalus gambar kita. 

Dengan meningkatkan ukuran filter, kita dapat membuat garis tipis untuk sketsa yang akan kita buat, dan hal ini digunakan juga untuk mengurangi *noise* pada gambar.

Coba kita lihat hasilnya.

```python
cv2.imwrite("img_smoothing.png", img_invert)
```

!['Gambar Smoothing'](/post/python-sketch-pencil-04.png 'Gambar Smoothing')


*"Loh, kok jadi gini?"* Sabar, mari kita ke tahap selanjutnya.

<br>

## 6. Sketsa Final

<hr>

Pada **tahap ke 5** kita telah mendapatkan gambar *invert* yang sudah di perhalus. Nah, dilangkah terakhir ini kita akan mencampurkan gambar **hitam putih** dengan gambar yang sudah di **perhalus**.

```python
sketsa_final = cv2.divide(img_gray, 255 - img_smoothing, scale=256)
```

Menggunakan fungsi `divide()` untuk membagi nilai pada gambar hitam putih, berdasarkan nilai gambar yang sudah kita perhalus, sehingga menghasilkan gambar dengan garis - garis yang ditebalkan menggunakan kalkulasi tersebut.

Mari kita lihat bagaimana hasil akhirnya.

```python
cv2.imwrite("sketsa_final.png", sketsa_final)
```

!['Gambar Sketsa Pensil'](/post/python-sketch-pencil-05.jpg 'Gambar Sketsa Pensil')



<center> . . . </center>


Nah, coba kita bandingkan dengan gambar aslinya. Gimana? langsung jadi seperti dibuat dari sketsa pensil kan?

!['Perbandingan'](/post/python-sketch-pencil-06.jpg 'Perbandingan')

Masih banyak lagi hal - hal keren yang bisa kita buat menggunakan library keren [ini](https://opencv.org/). Lain kali anbi bakal buat tutorial tentang *image processing* menggunakan OpenCV.

Untuk **full codenya** kalian bisa kalian di github [AnbiDev](https://github.com/AnbiDev/python-opencv-sketch-pencil).

:octopus: [https://github.com/AnbiDev/python-opencv-sketch-pencil](https://github.com/AnbiDev/python-opencv-sketch-pencil)

Eh, nih anbi kasih satu bonus lagi buat kalian hehe.


!['Waifu Anbi :*'](/post/python-sketch-pencil-07.jpg 'Waifu Anbi :*')



Oke sekian dari Anbi, sampai ketemuan di postingan selanjutnya.






