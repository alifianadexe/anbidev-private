+++
authors = "J3ndra"
categories = ["google-cloud"]
cover = "/post/google-cloud.jpg"
date = 2020-09-04T15:00:00Z
dateUpdate = ""
description = "Cara mendeploy Minecraft Server di Google Cloud Platform menggunakan VM Instance"
series = "Google Cloud"
status = "publish"
tags = ["gcp", "tips", "blog"]
title = "Deploy Minecraft Server di Google Cloud Platform"
type = ["blogs", "blog"]
aliases = [
    "blog/google-cloud/deploy-minecraft-server-di-google-cloud-platform/"
]
url = "/deploy-minecraft-server-di-google-cloud-platform"
[author]
images = "/post/endro.jpg"
name = "j3ndra"
+++

Jika kalian adalah seorang gamer pasti tidak asing dengan yang namanya game **Minecraft**. Game yang sudah berumur **11 Tahun** tetapi masih banyak pemain yang aktif memainkan game tersebut.

Dari kalian yang pernah bermain Minecraft, pasti sangat ingin memainkannya bersama teman-teman anda. Jika kalian berkumpul bersama, kalian bisa memainkannya menggunakan `localhost`.

!["Minecraft"](/post/minecraft-gcp-01.jpg "Minecraft")

Tapi, jika kalian bermain dari rumah masing-masing, pasti kalian butuh perantara untuk menjadi **Server Minecraft** dan orang yang menjadi server akan sangat keberatan karena harus menghidupkan server di PC atau Laptop pribadi.

Maka dari itu, mari kita coba deploy Minecraft Server di **Google Cloud**.

<br>

## Daftar Google Cloud

<hr>

Silahkan kunjungi web [Google Cloud](https://cloud.google.com/)

!["Website Dari Google Cloud"](/post/minecraft-gcp-02.jpg "Homepage Google Cloud")

Ini adalah tampilan awal dari web [Google Cloud](https://cloud.google.com/). **_BTW_**, Google Cloud memiliki program dimana para pendaftar yang baru saja menggunakan Google Cloud, mereka akan diberikan credit gratis selama **3 bulan** sejumlah **300\$** (Tidak bisa diuangkan ya😒).

Pastikan sebelum Anda mendaftar [Google Cloud](https://cloud.google.com/), Anda memiliki kartu kredit **VISA** pribadi ya. Tenang saja kok, jika credit gratis Anda sudah habis atau masa berlaku telah berakhir, [Google Cloud](https://cloud.google.com/) akan menginfokan kepada Anda dan akan mematikan semua aktivitas yang sedang berjalan pada [Google Cloud](https://cloud.google.com/) sehingga tidak akan terjadi pengurangan pada kartu kredit Anda.

Untuk pendaftar [Google Cloud](https://cloud.google.com/) bisa ikuti langkah saja yang ada ya. Jika terjadi kesulita bisa tanya dikolom komentar. 😉

<br>

## Mengenal Google Cloud

<hr>

Jika kalian berhasil daftar, silahkan buat project dengan nama yang anda inginkan.

!["Dashboard Google Cloud"](/post/minecraft-gcp-03.jpg "Dashboard Google Cloud Platform")

Seperti ini lah tampilan awal dari [Google Cloud](https://cloud.google.com/), silahkan klik pada pojok kiri atas untuk menampilkan list.

!["Menu List Navigation GCP"](/post/minecraft-gcp-04.jpg "Tombol Navigation GCP")

Silahkan scroll hingga menemukan section `Compute` dan silahkan pilih `VM instances`.

!["Menu List Navigation GCP"](/post/minecraft-gcp-05.jpg "Menu List Navigation GCP")

Pada tab atas, Anda akan melihat tulisan `Create Instances`, pilih saja lalu ikuti langkah-langkah dibawah ini.

1. Pilih **CREATE INSTANCES** -> **NAME** (_Berikan Nama Untuk Server Anda_).

2. Pilih **REGION** (Pilih ASIA-SOUTHEAST2 Untuk Jakarta) Dan Zone Akan Otomatis Terisi.

3. Untuk Machine Silahkan Lihat Gambar Dibawah.<br>

!["Konfigurasi Awal Machine"](/post/minecraft-gcp-06.jpg "Konfigurasi Awal Machine")

4. Untuk **BOOT DISK** Silahkan Pilih **_SSD_**. <br>

!["Konfigurasi Boot Disk"](/post/minecraft-gcp-12.jpg "Konfigurasi Boot Disk")

5. **CLICK TOMBOL `CREATE`**

<br>

Jika kalian selesai, maka kalian akan mendapatkan `VM instances` baru. Kalian bisa menghidupkan / mematikan `VM instances` untuk menghemat biaya dengan cara click saja bagian kiri `VM instances` (titik tiga) dan pilih **START / STOP**.

Untuk memulai server, click saja di bagian `SSH VM instances` Anda.

!["List Server Instance"](/post/minecraft-gcp-07.jpg "List Server Instance")

!["Status Server Instance"](/post/minecraft-gcp-08.jpg "CLI Command Server Instance")

Ini adalah tampilan dari `VM instances` yang anda miliki, silahkan ikuti langkah-langkah ini:

1.  `sudo -s`
2.  `apt-get udpate`
3.  `apt-get install default-jre`
4.  `cd /home` -> Pergi ke directory Home
5.  `mkdir minecraft` -> Membuat directory minecraft (Silahkan namai sesuka Anda)
6.  `cd /minecraft`
7.  Silahkan kunjungi [link ini](https://www.minecraft.net/en-us/download/server) jika kalian menggunakan server Minecraft yang paling baru, untuk para penggunaka versi yang lain, silahkan cari di article Minecraft. Lalu silahkan pilih dengan versi Minecraft yang Anda miliki. Silahkan copy url yang terdapat pada tulisan `Download minecraft_server.(version).jar`.
8.  Lalu pada `VM instances` Anda silahkan tulis `wget (url yang tadi anda copy)` contoh,
    ```
    wget https://launcher.mojang.com/v1/objects/c5f6fb23c3876461d46ec380421e42b289789530/server.jar
    ```
9.  Jika sudah selesai mendownload (ketik `dir` atau `ls` untuk memastikan). Jalankan

    ```
    java -Xmx3500 -Xms512 -jar minecraft_server.1.16.1.jar nogui
    ```

    > **Keterangan** : `Xmx` itu merupakan maksimum RAM yang digunakan untuk server dan `Xms` untuk penggunaan alokasi RAM yang ingin digunakan. Untuk `minecraft_server.1.16.1` itu sesuaikan dengan nama file yang Anda download tadi ya!

10. Saat kalian menjalankan command tersebut, akan ada Error yang mengatakan

    > \[15:16:50\] \[main/ERROR\]: Failed to load properties from file: server.properties
    >
    > \[15:16:50\] \[main/WARN\]: Failed to load eula.txt
    >
    > \[15:16:50\] \[main/INFO\]: You need to agree to the EULA in order to run the server. Go to eula.txt for more info.

11. Tenang saja, itu kalian hanya perlu mempebaharui `eula.txt`, tulis saja command
    ```
    nano eula.txt
    ```
    lalu ubah `eula=false` menjadi `eula=true` lalu Simpan(`ctrl+s`) dan Keluar(`ctrl+x`)
12. Lalu jalankan command ini kembali
    ```
    java -Xmx3500 -Xms512 -jar minecraft_server.1.16.1.jar nogui
    ```
13. Selamat! Server Minecraft Kalian berhasil dijalankan dengan baik.

<br>

## Minecraft Bajakan 😋

<hr>

Tenang, bagi kalian para user Minecraft bajakan, kalian masih bisa memainkannya kok. dengan cara mengubah `server.properties`.

1. `nano server.properties`
2. `motd` itu merupakan nama Minecraft Server
3. `online-mode` buat saja menjadi false

<br>

## Let's Play The Game!

<hr>

Pada Minecraft Anda, pilih `Multiplayer` lalu pilih saja `ADD SERVER`. Namai saja terserah keinginan Anda, lalu untuk `Server Address` samakan dengan IP `VM instances` Anda.

!["Instance Server Minecraft"](/post/minecraft-gcp-09.jpg "Instance Server Minecraft")

Itu, yang `External IP`.

Lalu `Server Resource Packs` dibuat `Prompt`

Silahkan lihat kembali apakah server anda berhasil dihidupkan atau tidak.

!["Server List Minecraft"](/post/minecraft-gcp-10.jpg "Server List Minecraft")

Itu dia tutorial cara menggunakan Google Cloud untuk mengaktifkan Minecraft Server. Untuk cara menggunakan Google Cloud melalui Android silahkan nantikan part selanjutnya ya!

!["World Of Minecraft"](/post/minecraft-gcp-11.jpg "World Of Minecraft")

Kangen maen ama temen :')
