+++
title = "Membuat Aplikasi Electron"
description = "Tulis Aplikasi Electron Pertamamu"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "javascript",
    "electron",
]
date = "2019-09-26"
tutorials = [
    "electron",
]
series = "Electron 101"
shortcode = "Tulis Aplikasi Pertama"
url = "/electron-first-app/"
aliases = [
  "/tutorials/electron/electron-first-app/"
]
sumber = [
    "https://electronjs.org/docs/tutorial/first-app"
]
authors = "hamid"
[ author ]
  name = "Hamid Machfudin Sukardi"
  images = "/img/hamid.jpg"
+++

### Pendahuluan

Pada dasarnya electron dikembangkan menggunakan nodejs. Terdapat file `package.json` yang identik dengan modul Node.js, file ini adalah file utama yang mengatur dependency yang digunakan. Kebanyakan aplikasi Electron mengikuti struktur folder seperti berikut:

```
nama-aplikasimu/
├── package.json
├── package-lock.json
├── main.js
└── index.html
```


### Persiapan
Buat folder baru sebagai direktori aplikasi Electron. Buka dengan `Command Line` dan jalankan `npm init` dari direktori tersebut:
```javascript
npm init
```

npm akan membuatkanmu file `package.json`. File utama yang dijalankan berada di field `main`, dimana proses akan dijalankan. File `package.json` akan terlihat seperti berikut:
```json
{
  "name": "nama-aplikasimu",
  "version": "1.0.0",
  "main": "main.js" // file utama
}
```

Jika field `main` tidak ada di `package.json`, Electron akan secara otomatis menggunakan `index.js` sebagai file utama (Seperti yang Node.js lakukan). 

Jika kamu memang membangun aplikasi ini seperti membangun Node.js maka kamu harus menambah `start` pada field `script` sebagai command untuk menjalankan aplikasi:

```json
{
  "name": "nama-aplikasimu",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "node ."
  }
}
```

Atau jika kamu menginginkan *custom command*, aku sarankan untuk menggunakan `electron` untuk menggantikan `node`:
```json
{
  "name": "nama-aplikasimu",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

### Instalasi
Pada tahap ini, kamu perlu menginstall dependency `electron` kedalam file `package.json`. Cara yang direkomendasikan adalah menggunakan *development dependency* ke aplikasimu, yang dimana nantinya bisa digunakan lagi dengan versi electron yang berbeda. Untuk melakukannya, cukup jalankan perintah berikut:
```javascript
npm install --save-dev electron
```
Itu merupakan cara yang sederhana. Untuk kebutuhan lain, seperti penggunaan proxy, mirror dan cache silakan ikuti [panduan ini](https://electronjs.org/docs/tutorial/installation).

### Pengembangan
Aplikasi Electron dikembangkan dengan prinsip dan metode yang sama dengan pengembangan Node.js. Semua APIs dan fitur yang ada pada Electron berada pada modul `electron`, yang dimana dapat di `require` seperti modul Node.js pada umumnya:
```javascript
const electron = require('electron')
```

Modul `electron` mengekspos fitur pada namespace. Sebagai contoh, siklus dari aplikasi dikendalikan dengan `electron.app`, dan windows dapat dibuat dengan class `electron.BroserWindow`. File `main.js` akan mengkonfirmasi jika aplikasi untuk siap dijalankan, sebelum membuka windows:
```javascript
// Pada file main.js

const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Buat browser window
  let win = new BrowserWindow({
    width: 800, // Panjang windows
    height: 600, // Tinggi windows
    webPreferences: {
      nodeIntegration: true
    }
  })

  // load file index.html
  win.loadFile('index.html')
}

app.on('ready', createWindow)
```

File `main.js` akan membuat windows baru dan menangani semua request pada aplikasi. Versi lebih lengkap dari contoh diatas mungkin membuka tools, menangani window saat ditutup, atau membuat windows baru pada macOS jika user menekan icon aplikasi pada *dock*.

```javascript
const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  // Buka the DevTools. Jika di browser sama seperti Inspect Element
  win.webContents.openDevTools()

  // Tutup Windows
  win.on('closed', () => {
    win = null
  })
}

// Method ini dipanggil jika Electron telah selesai
// menginisialisasi dan siap membuka windows.
app.on('ready', createWindow)

// Quit, saat semua windows ditutup
app.on('window-all-closed', () => {
  // Pada macOS, menu bar tetap aktif hingga user perlu menekan Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
```

Langkah terakhir, buat file `index.html` sebagai tampilan pada aplikasi.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>AnbiDev</title>
    <!-- https://electronjs.org/docs/tutorial/security#csp-meta-tag -->
    <meta http-equiv="Content-Security-Policy" content="script-src 'self';"/>
  </head>
  <body>
    <h1>AnbiDev</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```

### Jalankan
Setelah kamu membuat file `main.js`, `index.html` dan `package.json`, kamu bisa menjalankan aplikasimu dengan perintah:
```javascript
npm start
```

Bagus, kamu berhasil membuat aplikasi Electron pertamamu.

> Ini merupakan contoh aplikasi sederhana: [electron-quick-start](https://electronjs.org/docs/tutorial/first-app#trying-this-example)