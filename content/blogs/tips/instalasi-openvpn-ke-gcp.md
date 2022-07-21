+++
authors = ""
categories = ["cloud"]
cover = "/post/coverweb-gcp.png"
date = 2020-09-13T17:00:00Z
dateUpdate = 2020-09-13T17:00:00Z
description = "Tutorial instalasi OpenVPN pake GCP "
series = "OpenVPN"
status = "publish"
tags = ["tips", "gcp", "vpn"]
title = "Instalasi OpenVPN ke GCP part 1"
type = ["blogs", "blog"]
url = "/instalasi-openvpn-ke-gcp"
aliases=[
    "/blogs/google-cloud/instalasi-openvpn-ke-gcp/"
]
[author]
images = "img/no-image.jpg"
name = "Contributtor"
+++

> Artikel ini merupakan hasil kiriman salah satu teman admin, Nata

**VPN (_Virtual Private Network_)** adalah layanan koneksi yang memberikan akses ke website secara aman dan private dengan mengubah jalur koneksi. Jika kamu menggunakan layanan ini, maka interaksimu di internet akan dikenali sesuai tempat server VPN tersebut aktif.

Jadi, jika kamu mengakses web yang diblokir oleh suatu negara, dan kamu menggunakan layanan VPN dengan server yang berbeda negara, maka bisa saja web tersebut terakses karena protokol pemblokiran tidak dijalankan di negara tempat server VPN berada. Pada artikel ini, kita akan memasang [OpenVPN](https://openvpn.net "OpenVPN") ke [GCP](https://cloud.google.com).

<br>

## Membuat Project

<hr>

1. Buka **Google Cloud Console**. Kita akan membuat Project terlebih dahulu untuk memisahkan Project VPN ini

   !["Dashboard Console Google Cloud"](/post/gcp-openvpn-1.png "Dashboard Console Google Cloud")

2. Klik nama project pada sebelah kiri **Search Bar**
3. Klik **"_New Project_"**

   !["New Project"](/post/gcp-openvpn-2.png "New Project Sebelah Kanan")

4. Isi nama project sesuai keinginanmu. Disini kami menamai **Test-VPN** (Nama yang dipilih bersifat permanen)

   !["Isi Deskripsi Project Baru"](/post/gcp-openvpn-3.png "Isi Deskripsi Project Baru")

5. Klik **"_Create_"**
6. Silakan tunggu, project akan secara otomatis terbuat
7. Setelah selesai, ulangi langkah kedua (yaitu _Search Bar_) untuk mencari project yang sudah dibuat
8. Pilih Project yang sudah dibuat

<br>

## Membuat Virtual Machine

<hr>

Sekarang kita akan melakukan instalasi **Virtual Machine** sebagai <ins>server VPN</ins>

1.  Klik **"_Navigation Menu_"** yang terletak di pojok kiri atas
2.  Buka **"_Compute Engine_"** lalu klik **"_VM Instances_"**

    !["Navigation Menu"](/post/gcp-openvpn-4.png "Navigation Menu Pada Kiri Layar")

3.  Silakan tunggu, GCP sedang menyiapkan VM yang kita minta
4.  Apabila sudah selesai, klik **"_Create_"**

    !["Window Create"](/post/gcp-openvpn-5.png "Window Choose Create")

5.  Masukan nama untuk Machine, disini saya namai _server-vpn_. Nama bersifat permanen.

    !["Nama Mesin"](/post/gcp-openvpn-6.png "Masukkan Nama Mesin")

6.  _Label_ bersifat <ins>opsional</ins>, jadi tidak saya tambahkan.
7.  Untuk region, disini anda dapat memilih sesuai dengan region server VPN yang anda inginkan. Saya akan membuat VPN region Singapura, sehingga saya memilih menggunakan region asia-southeast1.

    !["Pilih Region"](/post/gcp-openvpn-7.png "Pilih Region")

8.  Untuk pemilihan zone nya bebas
9.  _Machine Configuration_ dapat disesuaikan dengan banyaknya client yang akan menggunakan VPN tersebut. Disini saya menggunakan Series _First Generation_ dengan _Machine Type_ `n1-standard-1` dikarenakan Client yang akan menggunakan VPN ini Hanya beberapa orang ( kurang dari 5 orang )

    !["Machine Configuration"](/post/gcp-openvpn-8.png "Konfigurasi General Machine")

10. Untuk spesifikasi lainnya, saya menggunakan sistem operasi **Debian 9** dan <ins>SSD</ins> sebesar **10 GB**

    !["Konfigurasi General Boot"](/post/gcp-openvpn-9.png "Konfigurasi Boot Disk")

11. Pada bagian Firewall, checklist **HTTP** dan **HTTPS** Traffic. Hal ini agar kita dapat terhubung ke internet menggunakan VPN

    !["Checklist All Traffic"](/post/gcp-openvpn-10.png "Checklist All Traffic")

12. Setelah itu kita klik _Management, security, disks, networking, sole tenancy_
13. Klik bagian networking
14. Pada bagian Network Tags, kita tambahkan "vpn" agar VM kita mengikuti rule VPN yang akan kita buat nanti dibagian Firewall

    !["Tambah Tag VPN"](/post/gcp-openvpn-11.png "Tambah Tag VPN")

15. Dibagian **Network Interfaces**, klik tanda pena untuk mengedit Network Interface

    !["Klik Tanda Pena untuk Edit Interface"](/post/gcp-openvpn-12.png "Klik Tanda Pena untuk Edit Interface")

    Disini kita akan menyewa Static External IP untuk Server VPN kita, sehingga kita tidak akan mengubah External IP untuk VPN setiap VM dijalankan

16. Dibagian External IP, kita pilih "_Create IP address_"

    !["External IP Create IP Address"](/post/gcp-openvpn-13.png "External IP > Create IP Address")

17. Masukan Nama External IP address (deskripsi yang bersifat opsional).

    !["Nama External IP Address"](/post/gcp-openvpn-14.png "Nama External IP Address (Opsional)")

    Untuk **Network Service Tier** saya pilih <ins>premium</ins> agar kita dapat memaksimalkan kecepatan internet ketika menggunakan VPN.

18. Jika sudah, klik **_Reserve_**
19. Lalu pilih **"on"** dibagian **IP Fowarding**
20. Klik **Done**. Anda dapt melihat berapa harga sewa VM yang kita buat dibagian atas sebelah kanan. Patikan budget anda cukup untuk menyewa VM yang akan dibuat
21. Klik **_Create_** untuk membuat VM tersebut
