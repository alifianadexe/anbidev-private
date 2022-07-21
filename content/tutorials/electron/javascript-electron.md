+++
title = "Dasar Library Electron"
description = "Pengantar untuk Belajar Library Electron"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "javascript",
    "electron",
]
date = "2019-09-20"
tutorials = [
    "electron",
]
series = "Electron 101"
shortcode = "Pendahuluan"
url = "/javascript-electron/"
sumber = [
    "https://electronjs.org/docs/tutorial/about"
]
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

> Build cross platform desktop apps with JavaScript, HTML, and CSS

Kata-kata itu yang akan kita lihat pertama kali pada website resmi [Electron](https://electronjs.org/). Yup, Framework Javascript satu ini ditujukan untuk pengembangan Aplikasi berbasis Desktop menggunakan JavaScript, HTML, dan CSS. Seperti yang kita ketahui,  ketiganya digunakan untuk membangun *front-end* pada website atau aplikasi berbasis web. Tapi dengan menggunakan `Electron`, kita mampu mengembangkan aplikasi desktop dengan berbekal JavaScript, HTML, dan CSS.

#### Cara Kerja Electron
Electron bekerja dengan menggabungkan Chromium dan Node.js ke dalam satu *runtime application* yang dapat dikemas untuk Sistem Operasi Linux, Mac dan Windows.

#### Produk Electron
Jika kamu pernah mencoba Text Editor `Atom`, maka kamu sudah menggunakan produk dari Electron ini. Electron dimulai pada tahun 2013 dimana Text Editor milik GitHub ini juga mulai dikembangkan dan di rilis pada musim semi tahun berikutnya.

#### Pengembang
Electron dikembangkan oleh tim di GitHub, yang juga merupakan sebuah komunitas besar. Beberapa kontributor adalah perseorangan, beberapa lainnya bekerja diperusahaan yang lebih besar.

#### Release
Electron di rilis secara seksama, mengikuti perkembangan API yang digunakan dan juga dua pembangunnya, Chromium dan Node.js

#### Update Dependencies
Biasanya Electron di update seminggu atau dua minggu setelah Chromium di update, semua bergantung apakah sudah ada versi stabil dan *effort* para kontributor. Jika ada update pada Node.js, Electron akan menunggu sekitar sebulan, menunggu versi stabil dari Node.js

#### Versi
Aku menyarankanmu untuk menggunakan `npm`, untuk mendapatakan versi terbaru dari Electron.
```javascript
$ npm install electron
```
Atau kunjungi [Ver. Doc](https://electronjs.org/docs/tutorial/electron-versioning)

#### LTS
Kamu pasti mengutamakan versi LTS(Long Time Support), atau versi yang didukung pengembangannya dalam jangka waktu yang lama. Sayang, Electron tidak menyediakan versi LTS. Tapi jika kamu menggunakan Electron, dan kamu nyaman entah itu ada update atau tidak, *you can stay on it for as long as you'd like*. 
