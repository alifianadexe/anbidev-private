+++
authors = "hamid"
tutorials = ["networking"]
cover = "/post/zabbix2.png"
date = 2020-11-03T17:00:00Z
description = "Zabbix adalah software monitoring jaringan, server, VM, database dan lain-lain."
series = "Server"
shortcode = "Install Zabbix"
status = "publish"
sumber = ["https://alibaba-cloud.medium.com/how-to-install-and-configure-zabbix-on-ubuntu-16-04-54010b22b779", "https://www.zabbix.com/download"]
tags = ["linux", "zabbix", "network"]
title = "Menginstall Zabbix pada Linux"
type = ["tutorials", "tutorial"]
url = "/menginstall-zabbix-pada-linux/"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Zabbix dibuat oleh ***Alexei Vladishev***, saat ini dikembangkan dan di support oleh *Zabbix SIA*. Zabbix adalah software yang digunakan untuk memonitoring jaringan, kesehatan server, virtual machine, aplikasi, database, website, cloud dan masih banyak lagi. Aplikasi ini gratis, ditulis dan didistribusikan dibawah _General Public License version 2_. Website resminya ada di [sini](www.zabbix.com "zabbix").

<br>

## Kebutuhan

<hr>

Dalam praktik kali ini author menggunakan:

* **Linux 16.04 Server LTS (Xenial Xerus)**
* **RAM 4 GB**
* **HDD 50 GB**

<br>

## Install LAMPP Server

<hr>

Update terlebih dahulu Sistem Operasi

```
$ sudo apt update -y
$ sudo apt upgrade -y
```

Install Apache, PHP 7 dan modul yang diperlukan lainnya

```
$ sudo apt install apache2 libapache2-mod-php7.0 php7.0 php7.0-xml php7.0-bcmath php7.0-mbstring -y
```

Pastikan Apache sudah terinstall dengan baik dengan mengetikkan IP dari server di Browser, semoga sudah muncul halaman seperti ini

![Halaman Apache](/post/screenshot-423.png "Halaman Apache")

Pastikan PHP sudah terinstall dengan mengetikkan `php -v`

```
$ php -v
PHP 7.0.33-0ubuntu0.16.04.16 (cli) ( NTS )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies with Zend OPcache v7.0.33-0ubuntu0.16.04.16, Copyright (c) 1999-2017, by Zend Technologies
```

Install database, disini author menggunakan MySQL

```
$ sudo apt install mysql-server -y
```

Masukkan **Password MySQL** dan jangan dilupakan, nanti kita akan buat database untuk zabbix
Jika proses instalasi sudah selesai, kita jalankan MySQL. Lalu _enable_ juga agar MySQL berjalan pada awal booting

```
$ sudo systemctl start mysql
$ sudo systemctl enable mysql
```

<br>

## Install Zabbix

<hr>

Secara default, repositori zabbix tidak ada di **Ubuntu 16.04** sehingga kita perlu menambahkan nya secara manual dengan cara:

```
$ sudo wget https://repo.zabbix.com/zabbix/4.0/ubuntu/pool/main/z/zabbix-release/zabbix-release_4.0-3+xenial_all.deb  
$ sudo dpkg -i zabbix-release_4.0-3+xenial_all.deb  
$ sudo apt update
```

Lalu kita install Zabbix server, *frontend* (Dijalankan di Browser), agent

```
$ sudo apt install zabbix-server-mysql zabbix-frontend-php zabbix-agent
```

Lalu kita buat database untuk zabbix. Jalankan kode berikut

```
$ mysql -u root -p  
password:
mysql> create database zabbix character set utf8 collate utf8_bin;  
mysql> create user zabbix@localhost identified by 'password';  
mysql> grant all privileges on zabbix.* to zabbix@localhost;  
mysql> quit;
```

Kita harus mengimport desain database milik zabbix

```
$ sudo zcat /usr/share/doc/zabbix-server-mysql*/create.sql.gz | mysql -uzabbix -p zabbix`
```

Konfigurasi password database zabbix

```
$ nano /etc/zabbix/zabbix_server.conf
```

Cari **DBPassword**, lalu ubah dan sesuaikan dengan password mysql zabbix tadi, konfigurasi file nya ada di  `zabbix_server.conf`.

```
DBPassword=password
```

Konfigurasi **timezone** yang akan digunakan, sesuaikan dengan tempat server terpasang. Sesuaikan juga dengan versi PHP yg terpasang, file konfigurasinya terletak di  `/etc/zabbix/apache.conf`.

```
php_value date.timezone Europe/Riga
```

Ubah menjadi

```
php_value date.timezone Asia/Jakarta
```

Jalankan Zabbix Server dan Agent

```
$ sudo systemctl restart zabbix-server zabbix-agent apache2
$ sudo systemctl enable zabbix-server zabbix-agent apache2
```

<br>

## Konfigurasi Front-End Zabbix

<hr>

Zimbra perlu dikonfigurasi lagi dibagian front-end menggunakan browser. Buka Setup Zabbix pada browser dengan mengetikkan alamat server tempat install zabbix

* Pilih Next Setup

!["Anbidev Zabbix 1"](/post/screenshot-457.png "Anbidev Zabbix 1")

* Pastikan semua Status telah OK

!["Anbidev Zabbix 2"](/post/screenshot-458.png "Anbidev Zabbix 2")

* Halaman berikutnya adalah konfigurasi database. Sesuaikan dengan yang telah di install tadi

!["Status Frontend"](/post/screenshot-459.png "Konfigurasi Database")

* Berikan identitas Hostname dan Port, untuk nama bersifat opsional.

!["Isi Hostname dan Port"](/post/screenshot-460.png "Isi Hostname dan Port")

* Pastikan data telah benar, lalu pilih Next Step untuk memulai Installasi

!["Check Data Anda dan Finish"](/post/screenshot-461.png "Check Data Anda dan Finish")

<br>

## Zabbix Login

<hr>

Setelah proses install selesai, sekarang buka zabbix.

!["Halaman Login Zabbix"](/post/screenshot-464.png "Halaman Login Zabbix")

Authentikasi untuk masuk ke halaman dashboard zabbix adalah

**Username: Admin**

**Password: zabbix**