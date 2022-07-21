+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-virtual-environtment.png"
date = 2020-12-18T00:00:00Z
description = "Belajar serta mengenal virtual environtment python dari awal sampai akhir"
series = "Python 101"
shortcode = "Virtual Environtment"
status = "publish"
draft=false 
tags = ["python", "library"]
title = "Belajar Tentang Virtual Environtment Pada Python"
type = ["tutorials", "tutorial"]
url = "/python-virtual-environtment/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"
+++

Apa itu _virtual environtment_ pada python? **Virtual Environtment** adalah _tools_ untuk mengenkapsulasi serta manajemen _package_ atau _library_ pada proyek kalian.

Bingung? iya sih sama, gampangnya gini, kita membuat ruang privasi kecil untuk proyek kita, agar nantinya _library_ yang kita install hanya dapat digunakan untuk proyek tersebut.

<br>

## Kenapa Pakai Virtual Environtment?

<hr>

_"Kan, python serta library bisa kita instal secara global kak? Supaya bisa digunakan untuk proyek mana saja"_

Jika pakai _virtual environtment_, kita dapat mencegah adanya _issue dependency_ yang terjadi saat ada update atau perbedaan versi.

Contoh, kita buat proyek **aplikasi bakso** pakai `python` versi **3.8** dan juga library `numpy` versi **3.4**.

Ternyata kita diberi proyek lain (**aplikasi mie ayam**) dengan kebutuhan versi python yang lebih tinggi. Otomatis harus update `python` ke **3.9** dan _library_ `numpy` juga butuh update kan.

!["Tanpa Virtual Environtment"](/post/python-virtual-environtment-01.png "Tanpa Virtual Environtment")

Nah, setelah diupdate ternyata di **aplikasi bakso** terdapat beberapa fungsi yang **error** karena _dependencies_ nya banyak yang berubah karena kita update tadi.

!["Tanpa Virtual Environtment"](/post/python-virtual-environtment-02.png "Dengan Virtual Environtment")

Maka dari itu kita butuh _virtual environtment_ agar **aplikasi bakso** dapat berjalan dengan versi yang ia butuhkan.

Dengan _virtual environtment_, kita juga bisa menginstall kumpulan _library_ yang kita butuhkan untuk proyek aplikasi, tanpa harus mengganggu proyek aplikasi yang lain. Seperti contoh dibawah ini.

- library pada virtual environtment untuk proyek **aplikasi makan bakso**.

  - python 3.8
  - numpy versi 3.4
  - opencv versi 3.3
  - num2word versi 1.1.

- library pada virtual environtment untuk proyek **aplikasi makan mie ayam**.
  - python 3.9
  - numpy versi 3.5
  - keras versi 4.1
  - tensorflow versi 4

Nah, gimana udah ada bayangan? itulah kenapa anbi sarankan buat _virtual environtment_ dalam memulai sebuah proyek aplikasi.

<br>

## Installasi Virtual Environtment

<hr>

> **Penting** : Jika kalian menggunakan **python 3.3** atau **yang lebih baru**, modul virtual environtment (`venv`) sudah otomatis terinstall pada python standard library, sehingga kalian tidak perlu menginstall lagi.

Untuk yang belum punya _library_-nya, mari sekarang kita mulai installasi virtual environtment. Gampang kok installasinya, cuman buka _command prompt_ atau _terminal_ kalian lalu [install pakai PIP](https://anbidev.com/python-pip).

Untuk kalian yang pakai **Windows** :

```
py -m pip install --user virtualenv
```

Untuk kalian yang pakai **MacOS** dan **Linux** :

```
python3 -m pip install --user virtualenv
```

<br>

## Membuat Virtual Environtment

<hr>

Cara membuat _virtual environment_ sangatlah mudah, pertama pilih folder aplikasi yang ingin kita buat _virtual environtment_. Lalu, buka **terminal** atau cmd dan arahkan ke folder yang tersebut,

!["Contoh Proyek"](/post/python-virtual-environtment-03.png "Contoh Lokasi Proyekku")

Lalu untuk commandnya

Untuk kalian yang pakai **Windows** :

```
py -m venv ini-env
```

Untuk kalian yang pakai **MacOS** dan **Linux** :

```
python3 -m venv ini-env
```

- `venv` adalah _command_ untuk membuat _virtual environtment_
- `ini-env` adalah nama _virtual environtment_

!["Folder Virtual Environtment!"](/post/python-virtual-environtment-04.png "Folder Virtual Environtment!")

Nah, jika kita lihat folder dengan nama `ini-env` akan dibuat secara otomatis. Folder `ini-env` inilah yang nantinya akan menampung _library - library_ yang kita install.

!["Isi Folder ini-env"](/post/python-virtual-environtment-05.png "Isi Folder ini-env")

<br>

## Menggunakan Virtual Environtment

<hr>

Jika sudah sukses membuat _virtual environtment_ sekarang saatnya untuk menggunakannya. Caranya mengaktifkan _virtual environtment_ seperti ini :

- Buka **terminal** atau **cmd**, lalu arahkan ke folder aplikasi kita.
- Ketik perintah dibawah :
  - Jika pakai **Windows**
    ```
    .\ini-env\Scripts\activate
    ```
  - Jika pakai **Linux** atau **MacOS**
    ```
    source ini-env/bin/activate
    ```

  !["Here you go!"](/post/python-virtual-environtment-06.gif "Here you go!")

  > `ini-env` adalah nama environtment yang kita buat tadi

Jika _session_ kalian udah ada kayak gini :

!["Selamat anda berhasil masuk di Virtual Environtment"](/post/python-virtual-environtment-07.png "Selamat anda berhasil masuk di Virtual Environtment")

Berarti tandanya kalian sudah berhasil mengaktifkan ruang virtual kalian. Untuk mengkonfirmasi kalian bisa melihat letak python yang digunakan saat ini :

- coba cek pakai **windows** :

  ```
  where python
  ```

- coba cek pakai **linux** dan **macOS** :
  ```
  which python
  ```

  <br>

```
D:\ExperimentCode\python\virtual-project\ini-env\Scripts\python.exe
```


Nah, python yang kita gunakan pada cmd saat ini adalah python yang berada pada direktori _virtual environtment_.



Sehingga kalian dapat menginstall _library_ dan package apa saja tanpa mengganggu daftar _library_ pada python global.

<center> . . . </center>

Jika ingin keluar dari virtual environtment sangatlah mudah. Kalian bisa tutup terminal atau cmd kalian, atau menulis *command script* dibawah :

```
deactivate
```

<br>

## Virtual vs Global Environtment

<hr>

Mau kita bandingkan? ayo! Sekarang kita bandingkan aplikasi kita yang berada pada virtual env dan global env.

Disini anbi bakal buat sebuah proyek aplikasi baru yang menggunakan framework **Django**. 

Nah, karena Anbi gamau proyek anbi nanti **error** gara - gara perbedaan versi *library* atau *dependencies* oleh proyek lain. Maka anbi putuskan buat *virtual environtment* saat menginstall Django.

!["Buat venv dan install django"](/post/python-virtual-environtment-08.png "Buat venv dan install django")

Nah, sekarang kita coba lihat *list package library* yang terinstall pada *virtual environtment* ini menggunakan [pip list](https://anbidev.com/python-pip): 

!["List Library Pada Virtual Environtment"](/post/python-virtual-environtment-09.png "List Library Pada Virtual Environtment")

Django berhasil terinstall di *virtual environtment* yang kita buat tadi. Dan kita juga bisa menggunakan beberapa command line dari Django seperti `django-admin help`.

!["Hasil Command Line Django"](/post/python-virtual-environtment-11.png "Hasil Command Line Django")

Sekarang mari kita keluar dari *virtual environtment* dan pindah ke ***global environtment***. Dan coba kita ketik perintah yang sama `django-admin help`. 

```
D:\ExperimentCode\python\djangoku>django-admin help
'django-admin' is not recognized as an internal or external command,
operable program or batch file.
``` 

Lah, kenapa tidak dikenali didalam ***global environtment***? Mari kita lihat *list package library* yang terinstall pada *global environtment*.

!["List Library Pada Global Environtment"](/post/python-virtual-environtment-12.png "List Library Pada Global Environtment")

Ternyata tidak ada satu pun *package library* yang bernama **django**, yang berarti kita **tidak bisa** menggunakan command line dari django. 

Dari contoh diatas dapat disimpulkan, menggunakan *virtual environtment* memungkinkan kita untuk mengisolasi suatu paket library hanya untuk aplikasi yang sedang kita buat.

Sehingga aplikasi kita tidak akan campur tangan ke aplikasi lain dan sebaliknya.

> Ibarat virtual environtment adalah **rumah** dan aplikasi adalah **pemilik rumah** tersebut.

Kita tidak mau kan tetangga kita tiba - tiba mengubah furnitur rumah kita sesuai selera mereka. 

<center> . . . </center>

Yaudah gitu aja, nanti lanjut lagi. 