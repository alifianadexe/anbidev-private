+++
authors = "bagus"
tutorials = ["networking"]
cover = ""
date = ""
description = "Kenal lebih dekat dengan Mikrotik"
draft = true
series = ""
shortcode = ""
status = ""
sumber = ["https://mikrotik.com", "https://citraweb.com/artikel.php"]
tags = ["publish"]
title = "Intro : Apa itu Mikrotik ?"
type = ["network", "mikrotik", "network"]
url = "/intro-mikrotik/"
[author]
images = "/img/author.jpg"
name = ""

+++
Bagi kalian yang sedang atau pernah berjibaku pada dunia _networking_ pasti kerjaannya tidak luput dari _Mikrotik_ ini. Kemudahan akan konfigurasi, dan fitur-fitur didalam Mikrotik ini menjadikan banyak pengguna dikalangan _networkers_. Tak luput juga dalam kredibilitasnya dalam menghandle suatu jaringan. Oiya, tak lupa harganya cukup terjangkau bagi _tier low end_. Tidak seperti kompetitornya seperti Cisco, Juniper, dsj yang mana pangsa pasar mereka adalah perusahaan yang besar, sebaliknya mikrotik sendiri fokus kepada perusahaan yang relatif kecil, bisa juga perumahan, SOHO, dsj. Memang ada beberapa brand lain, yang lebih ekonomis seperti TP-Link, Tenda, Toto Link, dan masih banyak lagi brand yang bisa lebih ekonomis lagi.

Nah, untuk mengenal Mikrotik lebih dalam sebelum masuk ke konfigurasi, alangkah baiknya kita mengetahui sejarah dari Mikrotik itu sendiri.

#### **Mikrotik, Apa itu?**

Didirikan tahun 1996 terletak di Kota Riga, Latvia. Sebuah perusahaan yang memproduksi equipment /piranti jaringan baik berupa software (RouterOS) dan juga hardware (RouterBOARD). Diprakarsai oleh John Tully dan Arnis Riekstins, yang bermula dengan visi _“Routing the World”_ mereka memulainya dengan sistem Linux dan MSDOS dan dikombinasikan dengan Wireless Aeronet di Moldova. Linux yang pertama digunakan adalah [Kernel 2.2](https://en.wikipedia.org/wiki/Linux_kernel "kernel Linux") yang dikembangkan secara bersama-sama dengan Staff R&D Mikrotik . Mikrotik pertama masuk di Indonesia tahun 2001 di Yogyakarta melalui ISP [Citraweb](http://mikrotik.co.id/ "Citraweb") oleh Valens Riyadi dkk. ,yang kemudian meluas menjadi solusi murah untuk membangun ISP, terutama yang berbasis WLAN.

Mikrotik sendiri memiliki dua jenis ,yakni :

#### **Mikrotik RouterOS**

Mikrotik ini berwujud software yang dapat diinstal pada PC. File software ini berupa image yang dapat diunduh di [https://www.mikrotik.com/download](https://www.mikrotik.com/download "https://www.mikrotik.com/download") download bagian X86 ,CD image. Namun, file ini berupa versi trial (demo) Mikrotik yang hanya dapat up sampai 24 jam saja. Dengan begitu diharuskan untuk membeli _license key_ dengan catatan satu _license_ untuk satu hardisk. Dikarenakan _license_ terikat pada hardisk, dan ditakutkan akan terjadinya kerusakan, akan lebih baik diinstal pada [DOM](https://www.wisegeek.com/what-is-a-disk-on-module.htm "DOM")(Disk On Module) yang mana fungsinya sama dengan SSD.

Lalu, ada nilai plus ketika kita instal Mikrotik di PC yakni kita bisa upgrade spesifikasi PC sesuai dengan kebutuhan jaringan. Contoh ketika _procie_ sudah dirasa lelet, kita bisa menggantinya dengan spesifikasi yang lebih tinggi. Namun, maksimal penggunaan RAM hanya 2GB saja. Kekurangan lainnya, yaitu pada power consumtion yang jauh lebih tinggi dibanding RouterBoard biasanya yang jauh lebih kecil.

**Mikrotik RouterBOARD**

Router ini yang sering kita jumpai, yang mana Mikrotik RouterOS yang sudah dikemas dalam bentuk Board, contohnya seri RB750, RB941 untuk Indoor dan Groove,Dynadish untuk outdoor. dan lisensinya pun sudah include kedalam package ini, walaupun tidak semua license itu sama levelnya. Namun setidaknya kita bisa langsung menggunakan RouterBoard ini tanpa melakukan Instalasi seperti halnya RouterOS pada PC.

Didalam Mikrotik sendiri pastinya ada fitur-fitur yang mana memang harus ada didalam jaringan. fitur ini dipastikan ada pada semua license mikrotik itu sendiri walaupun perbedaannya ada pada quota usernya, cmiiw. Untuk mengecek service atau fitur apa saja yang ada dirouterboard bisa diakses melalui menu System > Packages, disistu sudah tertera packages yang bakalan menjadi fitur diMikrotik itu sendiri. Berikut fitur dasar Mikrotik.

_1) Address List_

_2) Bridge_

_3) Data Rate Management_

_4) Asynchronous_

_5) Bonding_

_6) DHCP_

_7) NTP_

_8) Point to Point Tunneling Protocol_

_9) Proxy_

_10) Routing_

_11) SDSL_

_12) Simple Tunnel_

_13) SNMP_

_14) Synchronous_

_15) Hotspot_

_16) IPSec_

_17) M3P_

_18) ISDN_

_19) MNDP_

_20) Tool_

_21) VLAN_

_22) Winbox_

Dengan fitur tersebut pastinya Mikrotik dapat menjalankan fungsinya sebagai mana standar router pada umumnya seperti.

1. Memblokir situs-situs yang mengandung konten terlarang menggunakan proxy di mikrotik sehingga mendukung program pemerintah berupa penggunaan internet positif.
2. Mikrotik berfungsi untuk pengaturan dan konfigurasi LAN menggunakan PC Mikrotik Router OS beserta perangkat keras yang sangat rendah,
3. Fungsi mikrotik selanjutnya adalah adanya pengaturan jaringan internet yang dapat dilakukan secara terpusat sehingga memudahkan admin dalam mengelola.
4. Dapat digunakan sebagai billing hotspot yang mempermudah konfigurasi dan pembagian bandwidth pada jaringan,
5. Fungsi mikrotik yang ke-lima yaitu dapat digunakan untuk pembuatan PPPoE Server,
6. Fungsi mikrotik yang ke-enam yaitu mampu memisahkan bandwidth traffic internasional dan lokal