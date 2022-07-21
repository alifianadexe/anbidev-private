+++
aliases = ["/blogs/design-pattern-singleto/"]
authors = "adexe"
categories = ["serapan"]
draft=true
cover = "/post/web-singleton.jpg"
date = 2022-02-01T00:00:00Z
dateUpdate = ""
description = "Disini saya akan menjelaskan lebih jauh tentang design pattern object pool "
series = "Serapan"
status = "publish"
tags = ["blog", "serapan", "design-pattern"]
title = "Data Driven Design"
type = ["blogs", "blog"]
url = "/design-pattern-object-pool/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++



Selamat sore rekan-rekan, topik hari ini yang akan coba saya share adalah tekait dengan bagaimana kita mengubah paradigma programming yang biasa kita gunakan dalam setiap implementasi ke dalam model data driven programming, atau secara design pattern tercakup dalam **data oriented design**.

Data driven programming ataupun data oriented design sebenarnya bukan suatu hal yang baru implementasinya, aplikasi teknik ini banyak diterapkan pada *enterprise application* seperti ERP dimana perilaku program dikendalikan oleh data ataupun konfigurasi sebagai bagian dari prosesnya.

Salah satu tujuan mengaplikasikan teknik ini adalah menghindari bloating dan duplikasi kode dengan membuatnya menjadi generik dan adaptif dengan sifat ataupun perubahan atas data yang menyertai proses eksekusinya.

Di sisi lain, dengan teknik ini pula sebuah sistem bisa mengaplikasikan secara fleksibel berbagai kebutuhan yang berbeda satu dengan yang lainnya hanya dengan mengatur konfigurasi yang ada.

Pada dasarnya secara parsial pada topik sebelumnya, writing optimal code (https://t.me/BAGDevLearn/2), saya sudah sedikit memberikan contoh bagaimana mengubah/mengoptimasi kode menjadi data driven dengan mengubah parameter parameter pendukung menjadi driver.