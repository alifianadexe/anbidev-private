+++
authors = "hamid"
categories = []
cover = "/post/domain.png"
date = 2020-10-27T17:00:00Z
dateUpdate = 2020-11-01T17:00:00Z
description = "Mengenal Domain pada Internet"
series = ""
status = "publish"
tags = ["wawasan", "domain", "internet"]
title = "Pengertian Domain"
type = ["blogs", "blog"]
url = "/pengertian-domain"
[author]
images = "/img/hamid.jpg"
name = "hamid.jpg"

+++
Apaitu Domain? **Domain** menurut KBBI dapat berarti wilayah, daerah, dan ranah. *Domain Name* pada Internet adalah nama unik yang diberikan untuk mengidentifikasi nama server komputer seperti *Web Server* atau *Mail Server* yang terhubung ke jaringan komputer, baik intranet maupun internet.

<br>

## Fungsi Domain

<hr>

Domain berguna sebagai nama dari suatu website sehingga kita bisa dengan mudah mencari nama domainnya tanpa perlu menghafal IP Public dari situs tersebut. Seperti saat kita mengakses situs [YouTube,](www.youtube.com) kita tidak perlu menghafal IP Public dari YouTube, hanya cukup dengan mengetik [www.youtube.com](www.youtube.com) pada jendela web browser kita.

<br>

## Domain Name Space

<hr>

**Domain Name Space** adalah pengelompokan domain secara hirarki yang terbagi atas **root-level domains**, **top-level** **domains**, **second-level domains**, dan **host names**. Saat ini, pengembangan domain dan hirarkinya tersebut dilakukan oleh [Internet Corporation for Assigned Names and Numbers](https://en.wikipedia.org/wiki/Internet_Corporation_for_Assigned_Names_and_Numbers) (ICANN). ICANN inilah yang memberikan kuasa kepada perusahaan yang memberikan jasa pengelolaan domain, baik itu jasa pendaftaran domain baru atau penggantian domain.

![icann](/post/icann.png "Logo ICANN")

<br>

## Domain Name Syntax

<hr>

Domain Name terdiri dari satu atau lebih bagian, biasanya disebut _label_, yang digabungkan, lalu dibatasi oleh titik, contohnya [anbidev.com](https://anbidev.com). Berikut merupakan beberapa hal yang perlu diperhatikan dari Domain Name

1. Bagian paling kanan, merupakan **top-level domain**. Contohnya domain **anbidev.com** menggunakan **top-level domain** yakni _.com_
2. Hirarki dari Domain dibaca dari kanan ke kiri, semakin ke kiri semakin spesifik. Contohnya translate.google.com, merupakan situs milik **Google** yang menyediakan jasa **translate**.
3. **Hostname** biasanya merupakan nama komputer atau layanan dari suatu jaringan di suatu server. Contohnya jika kamu kuliah di Anbidev University dengan domain anbidev.ac.id, lalu hostname dari layanan mail milik anbidev adalah mail.anbidev.ac.id. Bagian **anbidev.ac.id** akan membawamu ke jaringan milik Anbidev University, dan **mail** akan membawamu ke layanan mail universitas tersebut.
4. Hostname bisa saja menjadi domain, sedangkan domain belum tentu merupakan hostname.

<br>

## Top-Level Domains (TLDs)

<hr>

![tlds](/post/tld.png "Penggunaan TLDs")

Setiap Domain berakhiran dengan **top-level domain**. Contoh TLDs yang paling populer adalah _.com, .net,_ dan _.org_. Saat Domain Name System (DNS) dicetuskan pada tahun 1980, Domain Name Space dibagi menjadi dua, yakni:

1. [country code top-level domains](https://en.wikipedia.org/wiki/Country_code_top-level_domain) (ccTLD), merupakan Domain milik negara tertentu. Terdiri dari dua abjad yang merupakan kode dari suatu negara (Mengacu pada ISO-3166). Contoh dari ccTLD adalah `.id, .us, .uk`
2. [generic top-level domains](https://en.wikipedia.org/wiki/Generic_top-level_domain) (gTLD), merupakan domain yang mewakili badan atau organisasi. Contohnya adalah `.com, .net, .org`

<br>

## Second-Level Domains (SLDs) dan Level yang lebih rendah

<hr>

![slds](/post/sld.png "Penggunaan SLDs")

Setiap domain yang berada disebelah kiri dari Top-Level Domain merupakan Second-Level Domain. Contohnya prakerja.go.id, disini `.go` merupakan second-level domain.

Selanjutnya adalah level yang lebih rendah, bisa saja third-level hingga level selanjutnya. Contohnya adalah domain yang memfasilitasi pendaftaran untuk anggota prakerja, [dashboard.prakerja.go.id](https://dashboard.prakerja.go.id). Dimana **_dashboard_** disebelah kiri merupakan bagian pendaftaran dari situs **prakerja.go.id**.

<br>

## Internationalized domain names (IDN)

<hr>

Adalah domain yang terdaftar untuk negara dengan huruf tertentu selain alfabet seperti ***Kanji*** untuk jepang dan ***Cyrilic*** untuk Rusia. Contohnya adalah Japanese `(.コム)`, Korean `(.닷컴 dan .닷넷)`, Cyrilic`(.рф)` dan masih banyak lagi. Untuk Indonesia dengan beragam bahasa dan huruf lokalnya, namun Domain Name untuk Indonesia tetaplah menggunakan `.id` .