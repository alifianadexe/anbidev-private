+++
aliases = ["/blogs/kenalan-4g/"]
authors = "bagus"
categories = ["wawasan"]
cover = "/post/cover-lte4g.png"
date = 2020-09-05T00:00:00Z
dateUpdate = ""
description = "Tahu lebih dalam mengenai teknologi 4G"
series = "wawasan"
status = "publish"
tags = ["fakta", "wawasan", "blog", "internet"]
title = "Kenalan dengan 4G LTE"
type = ["blogs", "blog"]
url = "/kenalan-4g/"
[author]
images = "/post/bagus-author.png"
name = "Bagus"

+++
**Bismillah**,

Halo readers anbi, kali ini bahas _something_ yang sering kita pake tiap hari yok. Apa itu? Hiyyak, teknologi **4G LTE**. Si 4G udah jadi makanan kita sehari-hari apalagi sekarang dimasa _pandemic_ mengharuskan semua orang yang bekerja, belajar dan sejenisnya dilakukan secara dalam jaringan. Yang mana sebagiannya masih menggunakan 4G ini entah itu di modem, atau pun di smartphone kalian.

Nah, supaya kalian lebih akrab sama smartphone kalian cus kita bahas si LTE ini yaa.

<br>

## LTE ?

<hr>

_Long Term Evolution_ (LTE), jaringan antarmukanya tidak cocok dengan jaringan 2G dan 3G, sehingga harus dioperasikan melalui <ins>spektrum nirkabel yang terpisah</ins>. Teknologi ini mampu mengunduh sampai dengan kecepatan **300Mbps** dan upload **75Mbps**. Layanan LTE pertama kali dibuka oleh perusahaan TeliaSonera di Stockholm dan Oslo pada tanggal 14 Desember 2009 (Sumber : [Wikipedia](https://id.wikipedia.org/wiki/Long_Term_Evolution "Definisi LTE")).

Dari definisi tersebut cukup **_waw_** sekali melihat kecepatan _upto_ **300Mbps**, tapi pernah tidak kalian mendapatkan kecepatan tersebut hanya menggunakan smartphone kalian?

Yups, untuk saat ini mayoritas smartphone belum bisa, tapi tidak menutup kemungkinan juga ada beberapa yang udah bisa. Karena ada beberapa hardware yang belum mendukung hal tersebut. Nanti akan kita _breakdown_ bersama.

Berbicara mengenai jaringan 4G ini, di Indonesia sendiri mayoritas hampir 90% dari jumlah populasi sudah dapat dipastikan sudah mengenyam teknologi ini. Yang seperti kita ketahui jaringan di Indonesia didominasi oleh Operator [Telkomsel](https://id.wikipedia.org/wiki/Telkomsel "Telkomsel Indonesia"), ya maklum sih perusahaan punya negara. Seperti berikut _coverage_ 4G di Indonesia.

![Capture nperf.com Telkomsel coverage area](/post/coverage-4g.png "Capture nperf.com Telkomsel coverage area")

Cukup _crowded_ sekali di Pulau Jawa ini ya, dan cukup miris juga untuk Indonesia bagian timur. Enak ya tinggal di Jawa. Namun, menurut saya pemerintah sudah berusaha keras untuk menambah _coverage_ area jaringan ini, mengingat Indonesia merupakan negara kepulauan akan cukup sulit dan menantang untuk melebarkan jaringan ini secara cepat dan akurat. Tidak seperti negara-negara tetangga yang _coverage_ areanya cenderung lebih kecil.

Dari capture tersebut kita jadi tahu jaringan 4G ada juga yang 4G+. _waw_. Apa itu? Yuk kita bahas macam jenis 4G.

<br>

## **Jenis 4G**

<hr>

* **4G LTE FDD** (_Frequency Division Duplex_) jenis 4G ini menggunakan frekuensi 800Mhz – 1800Mhz. Nah penggunaan FDD ini menggunakan frekuensi yang berbeda untuk melakukan unduhan dan unggahan pada waktu yang sama.
* **4G LTE TDD** (_Time Division Duplex_) menggunakan frekuensi 2300Mhz. Penggunaan frekuensi yang sama untuk melakukan unduhan dan unggahan namun diwaktu yang berbeda.
* **LTE-A** (_Advanced_) **4G+** rentang frekuensinya 900Mhz-2300Mhz. Infonya ini merupakan teknologi gabungan TDD dan FDD, dan pastinya kecepatan unduh dan unggah yang lebih tinggi.

<br>

## **Kategori 4G (User Equipment)**

<hr>

Lalu, 4G LTE sendiri punya kecepatan yang disesuaikan kedalam beberapa kategori, nah penggolongan kategori ini disebut dengan **cat**, merupakan pengkategorian _datarate uplink/downlink_ maksimal yang bisa ditangani oleh perangkat (ponsel/_smartphone_). Perhatikan data berikut.

<br>

| UE Cat | Downlink (Mbps) | Uplink (Mbps) |
| --- | --- | --- |
| Cat 4 | 150 | 50 |
| Cat 6 | 300 | 50 |
| Cat 7 | 300 | 100 |
| Cat 9 | 450 | 50 |
| Cat 10 | 450 | 100 |
| Cat 12 | 600 | 100 |
| Cat 13 | 400 | 150 |
| Cat 16 | 1000 | n/a |

<br>

Dimulai dari **Cat 4** dikarenakan di Indonesia sendiri perkembangan 4G dimulai dari Cat 4 ya. Nah dari data tersebut gak serta merta _smartphone_ kamu auto segitu kecepatannya hehe, perlu dilihat dari sisi Operator seluler juga. Si Operator juga mesti support juga ya.

Oh iya terus gimana cara ngecek _smartphone_ kamu Cat (_kategori_) berapa? Cara cek secara _online_ kamu search dulu SoC (_Chipset_) _smartphone_-mu pake apa?

Contohnya, saya pake [Redmi 6 Pro](https://www.gsmarena.com/xiaomi_mi_a2_lite_(redmi_6_pro)-9247.php "Redmi 6 Pro - GSMArena") yang punya SoC Qualcom Snapdragon 625, lalu _search_ aja di google "**Snapdragon 625**", lalu klik _website_ paling atas biasanya, bakalan tampil semacam begini.

!["Snapdragon Overview"](/post/sd625.PNG "Snapdragon Overview")

Lalu masuk ke _website_ tersebut, kemudian cek bagian _Specifications_ .

![Capture cat pada smartphone](/post/qualcom-cat.png "Capture cat pada smartphone")

Nah, jadi _smartphone_ saya [Redmi 6 Pro](https://www.gsmarena.com/xiaomi_mi_a2_lite_(redmi_6_pro)-9247.php "Redmi 6 Pro - GSMArena") udah Cat7 dan Cat13 wadaw ngeriii hehe. Tapi seumur-umur ga pernah _speedtest_ nyentuh angka sesuai tabel, ya karena mungkin aja Operator nya belum support. Yak lanjut lagi ke bagian **_Band_**.

<br>

## **LTE Band ?**

<hr>

Di Indonesia sendiri kebanyakan layanan 4G menggunakan teknologi FDD LTE. Seperti halnya <ins>Indosat, Telkomsel, XL, Tri</ins> mereka memakai FDD, sedangkan penggunaan teknologi TDD digunakan oleh **Smartfren** dan **Bolt** yang mana Bolt sekarang udah tidak ada di Indonesia, atau izinnya sudah habis (sumber : [kompas](https://tekno.kompas.com/read/2018/12/28/12450017/bolt-resmi-tutup-layanan-bagaimana-nasib-pelanggan?page=all "bolt")). Berikut List Band di Indonesia

<br>

| Operator | Band |  |
| --- | --- | --- |
| Telkomsel | Band 3 (1800Mhz), Band 8 (900Mhz), Band 40 (2300Mhz) |  |
| Indosat Ooredoo | Band 3 (1800Mhz), Band 4 (2100Mhz), Band 8 (900Mhz) |  |
| XL Axiata | Band 3 (1800Mhz), Band 8 (900Mhz) |  |
| Hutchinson 3 Indonesia | Band 3 (1800Mhz), Band 4 (2100Mhz) |  |
| Smartfren | Band 5 (850Mhz), Band 40 (2300Mhz) TDD |  |

<br>

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah .Terima kasih :)