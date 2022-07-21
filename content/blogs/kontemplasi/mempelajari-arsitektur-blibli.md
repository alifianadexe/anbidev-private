+++
authors = "adexe"
categories = ["kontemplasi"]
cover = "/post/web-blibli.jpg"
date = 2020-12-27T00:00:00Z
dateUpdate = 2020-12-28T00:00:00Z
description = "Mari kita sejenak membahas tentang bagaimana arsitektur blibi dari kacamata seorang ahli"
series = "Opini"
status = "publish"
tags = ["blog", "opini"]
title = "Apa Yang Bisa Kita Pelajari Dari Arsitektur Blibli?"
type = ["blogs", "blog"]
url = "/mempelajari-arsitektur-blibli/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Kemarin malam saya diberi "kuliah tambahan" oleh bos saya melalui grup telegram. Disitu beliau membagi sebuah artikel tentang [Arsitektur Blibli](https://www.labana.id/view/seperti-inilah-jeroan-blibli-com-yang-sebenarnya/) oleh [Labana.id](https://labana.id) pada tahun 2016. Setelah beliau membagikan artikel tersebut, beliau mulai melontarkan sebuah pertanyaan.

_"Kenapa mereka (blibli) memilih menggunakan adaptive frontend dan bukan responsive frontend?"_

Seketika saya yang baru saja membaca artikel tersebut sempat kebingungan atas pertanyaan bos saya. Tetapi dengan baik hati beliau mulai menjelaskan sudut pandangnya tentang arsitektur yang dipakai blibli ini.

<br>

## Arsitektur Frontend Yang Digunakan

<hr>

Dalam salah satu kutipan dari artikel diatas, Antarmuka Blibli tidak mengikuti trend *website responsive* saat itu (2016). Blibli memilih untuk menyediakan antarmuka yang berbeda antara versi desktop dan versi mobile. 

Istilahnya tampilan ***adaptive***. Bedanya, untuk *responsive*, frontend nya sebenarnya hanya satu, hanya saja tampilannya akan menyesuaikan ukuran layar browser. 

Sedangkan untuk model *adaptive*, frontend yang ditampilkan menyesuaikan permintaan (request) dari browser. Jika browser yang meminta dari ponsel, maka frontend yang ditampilkan adalah versi mobile, begitu juga sebaliknya untuk desktop.

Lalu, blibli juga memfokuskan tampilannya ke ***Mobile Application***. Dikarenakan, pada waktu itu blibli memiliki pengunjung **7 kali lipat** lebih banyak daripada ***Desktop Application***.

Dan, arsitektur ini direncakan oleh orang hebat bernama [Ifnu Bima](https://www.linkedin.com/in/ifnubima/?originalSubdomain=id), yang waktu itu bekerja di Blibli sebagai **Development Lead**.

!["Ifnu Bima"](/post/arsitektur-blibli-01.jfif "Ifnu Bima")

Ifnu cukup dikenal di kalangan komunitas java sebagai seorang enterprise sistem developer bersama ***Samuel Franklin***, dengan posting posting nya terkait **J2EE**, dan dikaitkan dengan profesinya sebagai salah satu tim pengembang sebuah bank di Singapore.

<br>

## Pondasi Ilmu Arsitektur

<hr>


!["Jakarta EE"](/post/arsitektur-blibli-02.png "Jakarta EE")
 
[J2EE](https://en.wikipedia.org/wiki/Jakarta_EE) atau sekarang dikenal sebagai Jakarta EE merupakan platform enterprise application yang sangat populer di awal awal tahun 2000. Ini bukan dari Jakarta ya, namanya aja mirip dengan ibu kota kita. 

!["Ilustrasi Arsitektur Jakarta EE (src : educba)"](/post/arsitektur-blibli-03.jpg "Ilustrasi Arsitektur Jakarta EE (src : educba)")

Kalau kita lihat arsitektur umum dari platform tersebut, kira kira seperti ini. Artinya setiap *instance/host* J2EE pada dasarnya adalah sebuah platform yang mampu diisi oleh berbagai modul ataupun aplikasi yang istilah nya disebut sebagai **container**.

!["Ilustrasi Penggunaan Container Dalam Sistem"](/post/arsitektur-blibli-03.png "Ilustrasi Penggunaan Container Dalam Sistem")

Analogi nya kurang lebih seperti ini, tiap - tiap container adalah modul aplikasi. Anggap saya punya makanan **mie ayam** saya tampung di **mangkuk A**, lalu **bakso** saya tampung di **mangkuk B**. Makanan adalah modul aplikasi dan mangkuk adalah container.

*"Apa yang salah dari arsitektur seperti ini?"*

Tidak ada, karena dari namanya saja sudah jelas disebutkan sebagai platform untuk enterprise. Dan dari rancangan disain pun, memang dibuat sedemikian rupa untuk enterprise. Sebab itu fokus utama nya adalah pada **extendability**


<br>

## Arsitektur Extensibility Dan Public Service

<hr>

> Extensibility is a software engineering and systems design principle that provides for future growth. - [wikipedia](https://en.wikipedia.org/wiki/Extensibility)

Artinya kita dapat menambahkan banyak modul aplikasi tanpa mengganggu fungsi sistem yang ada. Sedari awal arsitekur ini dirancang agar mampu menjadi sebuah sistem besar yang saling terkait berintegrasi menjadi satu kesatuan sistem.

!["Ilustrasi Arsitektur Extensibility"](/post/arsitektur-blibli-04.jpg "Ilustrasi Arsitektur Extensibility")

Tipikal aplikasi enterprise yang *extendable* tidak pernah ditujukan untuk penggunaan ***masive*** seperti *public service*, melainkan sesuai dengan *scope enterprise user*, berkisar antara **ribuan**, hingga **puluhan ribu**.

Fokus enterprise system adalah mampu menyediakan platform untuk menangani perhitungan ataupun proses yang kompleks. Itu sebabnya, implementasi enterprise sistem biasanya melibatkan server highend.

Sementara *public service* umumnya menyediakan layanan yang lebih sederhana, ***searching***, ***displaying*** yang jauh lebih *masive* daripada pemrosesan data. *Masive* dalam hal ini karena jumlah pengguna + *anonymous user* bisa antara **puluhan ribu** hingga **jutaan** user.

Itu sebabnya public service system umumnya lebih banyak melibatkan server - server *low end*, ataupun *virtual machine*, namun dalam jumlah *masive*.

<br>

## Keputusan Dan Solusi

<hr>

Kesalahan Ifnu berasal dari fantastisme yang berlebihan atas sebuah bahasa, **Java**. <mark> Tidak ada bahasa yang teramat powerful untuk semua hal, bahkan yang diklaim sebagai ***General purpose language*** sekalipun. </mark>

Kebanyakan infrastruktur ataupun ekosistem java pada saat itu hilir nya mengarah pada titik yang sama, ***enterprise system***. Dan Ifnu mengarahkan **Blibli** mengembangkan <u>*monolithic system*</u> yang besar kemungkinan adalah berbasis J2EE.

> **Arsitektur Monolithic** (monolithic system) adalah arsitektur untuk membuat aplikasi di mana semua komponen tidak terpisah satu sama lainnya

Bisa dibayangkan pusing nya saat sistem mulai keteteran menangani jumlah pengguna yang membesar dengan cepat.Sementara membangun ***cluster server*** melibatkan server dengan spesifikasi yang lebih tinggi dari server - server kebanyakan, artinya ***high cost***.

Ditambah lagi karakteristik web interface dengan J2EE relatif lebih sulit untuk dimodifikasi, menyebabkan mereka harus membuat dua antar muka yang berbeda untuk mensupport baik *web app* ataupun *mobile*.

Karena untuk mengubah sesuatu yang sudah ada (*web app*), terlalu beresiko menjadi masalah yang pastinya akan sangat berdampak pada operasional Blibli dan menurunkan *trust* dan kepuasan user sebagai untuk menggunakan Blibli.


Atas ini lah mereka kemudian membuat konfigurasi ***balancer nginx*** untuk mendeteksi asal browser client dan mengarahkannya pada antar muka yang sesuai, yang oleh mereka kemudian dinamakan sebagai ***adaptive front end***.


<center> . . . </center>

Kira kira begitu analisis bos saya terkait Blibli. Mungkin arsitektur yang digunakan blibli sudah berkembang sangat jauh, tapi yang ingin bos saya sampaikan adalah <mark>bagaimana aplikasi ini berkembang dari kesalahan</mark>. 

Semoga bisa jadi bahan kalian untuk belajar dan memperluas wawasan. Oke sekian dan terima kasih.