+++
title = "Development Environment pada Electron"
description = "Development Environment pada Electron"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "javascript",
    "electron",
]
date = "2019-09-23"
tutorials = [
    "electron",
]
series = "Electron 101"
shortcode = "Development Environment"
url = "/electron-development-environment/"
sumber = [
    "https://electronjs.org/docs/tutorial/development-environment"
]
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

### Developer Environment
Pada dasarnya electron dikembangkan menggunakan nodejs. Maka kamu memerlukan nodejs, npm dan pemahaman dasar tentang `command line` pada sistem operasi client (Command Prompt pada Windows, Terminal pada Linux dan macOS).

Install versi terbaru Node.js, aku rekomendasikan kamu untuk menginstall versi `LTS`. Kunjungi [Node.js download page](https://nodejs.org/en/download/) dan pilih sesuai sistem operasi yang kamu gunakan. 

#### Windows
> Electron mendukung Windows 7 dan versi diatasnya

Pastikan kamu menginstall dengan benar, cukup ikuti arahan yang ada. Pastikan juga `Node.js runtime` dan `npm package manager` ditambahkan ke `PATH` dengan mengkonfirmasi `Add to PATH`.

Setelah terinstal, pastikan semua berjalan dengan baik. Buka `Windows PowerShell` atau `Command Prompt` pada Start Menu (atau bisa dengan *search* `cmd`). 

```
# Command ini akan menampilkan versi node.js
node -v

# Command ini akan menampilkan versi npm
npm -v
```

Jika pada kedua *command* menampilkan nomor versi, maka kamu benar. 

#### Linux
> Secara umum dapat dikatakan, Electron mendukung Ubuntu 12.04, Fedora 21, Debian 8 dan versi diatasnya

Instalasi pada Linux sedikit berbeda. Aku sarankan untuk mengikuti petunjuk pada halaman [ini](https://nodejs.org/en/download/package-manager/) dan sesuaikkan dengan *package manager* yang kamu gunakan.

Buka `Terminal` (Aku tak perlu mengarahkanmu dimana kamu bisa menemukan `Terminal` pada Linux)
```
# Command ini akan menampilkan versi node.js
node -v

# Command ini akan menampilkan versi npm
npm -v
```
Jika pada kedua *command* menampilkan nomor versi, maka kamu benar. 

#### macOS
> Electron mendukung macOS 10.10(Yosemite) dan versi diatasnya.

Setelah diunduh, jalankan installer dan biarkan *installation wizard* membimbingmu dalam proses instalasi.

Setelah terinstal, pastikan semua berjalan dengan baik. Cari `Terminal macOS` pada direktori `/Applications/Utilities` (atau bisa dengan *search* `Terminal` pada Spotlight). 

```
# Command ini akan menampilkan versi node.js
node -v

# Command ini akan menampilkan versi npm
npm -v
```

Jika pada kedua *command* menampilkan nomor versi, maka kamu benar. 

Tidak sulit, ini baru pemanasan. Tetap semangat!
