+++
authors = "hamid"
categories = ["Hacking", "wawasan"]
cover = "/post/cover-ddoss.jpg"
date = 2020-11-04T17:00:00Z
dateUpdate = 2020-11-04T17:00:00Z
description = "DistrDDos Attack adalah percobaan penyerangan dengan cara mengganggu traffic dari server"
series = ""
status = "publish"
sumber = ["https://www.imperva.com/learn/ddos/ddos-attacks/", "https://www.imperva.com/learn/ddos/slowloris/", "https://en.wikipedia.org/wiki/SYN_flood", "https://en.wikipedia.org/wiki/Ping_of_death", "https://blog.qualys.com/vulnerabilities-research/2014/01/21/how-qualysguard-detects-vulnerability-to-ntp-amplification-attacks "]
tags = ["hacking", "wawasan", "internet"]
title = "Mengenal DDoS Attack"
type = ["blog", "blog"]
url = "/ddos"
[author]
images = "/post/hamid.jpg"
name = "Hamid"

+++
**Distributed Denial of Service** `(DDos)` *Attack* adalah percobaan penyerangan dengan cara mengganggu *traffic* dari server, layanan atau jaringan akan kewalahan menangani *request* sehingga server akan melambat lalu down.

## Macam-Macam DDos

<hr>

### UDP Flood

Cara kerjanya adalah **dengan membanjiri target menggunakan paket User Datagram Protocol** `(UDP)` pada random port ke remote host. Hal ini akan menyebabkan host mengecek terus menerus aplikasi apa yang berjalan di port - port tersebut, dan (saat tidak ditemukan aplikasi apapun yang berjalan) host akan me-_reply_ dengan "Destination Unreachable". Jika terus berulang maka host server bisa saja kehabisan resource sehingga berakibat tidak bisa diakses.

<br>

### ICMP Flood (Ping) 

Sama halnya dengan tipe UDP Flood, `ICMP Flood` akan menyebabkan host server kewalahan dengan menggunakan ping secara banyak dan berulang hingga host tidak mampu me-_reply_. DDoS yang ini mengkonsumsi baik bandwidth yang datang maupun keluar sehingga menyebabkan host server akan melambat.

<br>

### NTP Amplification

Progam **ntpd** berfungsi untuk menyesuaikan waktu pada sistem operasi dengan waktu pada internet. DDoS dapat terjadi oleh fitur "monlist" yang ada pada kebanyakan NTP Server. NTP berjalan pada port 123, merupakan port UDP yang bisa di spoofing. Dengan command monlist yang dijalankan pada server, **ntpd-c monlist**, output nya adalah 600 query dari sumber IP yang berbeda. Dan karena datanya besar, server bisa saja tidak mampu menanganinya.

<br>

### Ping of Death (PoD)

Secara default, ping ke perangkat lain hanya berukuran 56 bytes, walaupun semua paket IPv4 bisa saja lebih dari 65,535 bytes. Banyak sistem komputer tidak didesain untuk mampu menangani menangangi paket ping lebih dari batasnya karena ini melanggar Internet Protocol. PoD memecah paket ping menjadi 8 octet sebelum mengirimkannya. Hal ini sama seperti paket besar lain, namun tidak disusun dengan baik. Saat host server menyusun ulang paket yang cacat tersebut, hal ini akan memunculkan _buffer overflow_ (saat paket yang dikirim terlalu besar dari yang mampu diterima) menyebabkan system crash. Disini hacker/cracker mampu menginjeksi kode berbahaya untuk server.

<br>

### HTTP Flood

Pada tipe ini penyerang melakukan request GET dan POST pada Web Server. Tidak menggunakan paket cacat, spoofing dan menggunakan lebih sedikit bandwidth untuk membuat servre down. Sangat efektif jika ditujukan kepada aplikasi atau server yang mengalokasikan maximum resource pada setiap request.

<br>

### Slowloris

Bekerja dengan membuka beberapa koneksi sekaligus lewat web server dan menjaganya tetap terbuka selama mungkin. Caranya adalah dengan secara terus menerus mengirim HTTP Request, tapi tak satupun diselesaikan. Target server akan membuka dan menunggu setiap request diselesaikan. Pada akhirnya server tidak mampu menyelesaikan koneksi secara bersamaan hingga tidak mampu lagi menerima koneksi. Pada web-server besar, mungkin akan membutuhan waktu lama, terutama dengan kemampuan penanganan session yang baik.

<br>

### SYN Flood

Tipe satu ini, adalah percobaan membuat koneksi ke host server tanpa menyelesaikannya. Server akan menghabiskan waktu untuk menunggu koneksi yang masih terbuka. Jika resource untuk waktu tunggu habis, maka server bisa tidak merespon traffic yang benar. Paket yang dikirim adalah SYN (_synchronize_), bagian dari _three-way handshake_ milik TCP yang berguna untuk membangun koneksi antar jaringan.