+++
authors = "hamid"
categories = ["code-life"]
cover = "/post/coverweb-bot-wa-white.png"
date = 2020-09-03T17:00:00Z
dateUpdate = ""
description = "Menjadi Bot Sticker di Whatsapp"
series = "Code Life"
status = "publish"
tags = ["blog", "repository"]
title = "Menjadi Bot Sticker di Whatsapp"
type = ["blogs", "blog"]
url = "/menjadi-bot-sticker-di-whatsapp/"
aliases = [
    "/blogs/repo-of-the-week/menjadi-bot-sticker-di-whatsapp/"
]
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++

Dalam _repository of the week_ kali ini, kami akan membawakan sebuah repository milik [Yoga Sakti](https://github.com/YogaSakti "YogaSakti"), yakni [imageToSticker](https://github.com/YogaSakti/imageToSticker "imageToSticker").

Repo satu ini akhir-akhir ini sering saya kunjungi karena beberapa teman minta dibuatkan stiker secara instan. Sebelum mencoba repo satu ini, pastikan kamu sudah memiliki:

1. **[Node.js](https://nodejs.org/en/ "Node JS")**, sebagai server untuk menjalankan bot
2. **[Git](https://git-scm.com/ "Git")**, untuk clone ke repository

<br>

## Instalasi

<hr>

Buka Terminal atau CMD, lalu Clone repository

```cmd
git clone https://github.com/YogaSakti/imageToSticker.git
cd imageToSticker
```

<br>

![Cloning Repository](/post/wa-bot-1.png "Cloning Repository")

Install dependencies, kecepatan untuk menjalankan perintah ini bergantung pada internet

```cmd
npm install
```

<br>

![Install Dependencies](/post/wa-bot-2.png "Install Dependencies")

<br>

## Penggunaan

<hr>

Jalankan Bot dengan mengetikkan

```
npm start
```

Kamu perlu menggunakan Whatsapp Web untuk mengautentikasi nomor WA yang ingin dijadikan Bot. Autentikasinya sendiri menggunakan QR Code.

<br>

![QR Code yang muncul](/post/wa-bot-3.png "QR Code yang muncul")

<br>

![Server Berjalan](/post/wa-bot-4.png "Server Berjalan")

Setelah server berjalan, mintalah pada temanmu untuk mencoba. Bisa chat personal maupun chat didalam grub WA.

<br>

![Percobaan Bot Sticker](/post/wa-bot-5.jpg "Percobaan Bot Sticker")
