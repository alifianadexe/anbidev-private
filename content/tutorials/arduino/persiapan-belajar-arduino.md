+++
authors = "Hamid"
cover = "/post/1_nfvi-89nus8kykll7gp2rq.png"
date = 2021-07-28T17:00:00Z
description = "Apa saja persiapan untuk belajar Arduino?"
series = "Dasar Arduino"
shortcode = "Persiapan"
status = "publish"
sumber = []
tags = ["arduino"]
title = "Persiapan Belajar Arduino"
tutorials = ["arduino"]
type = ["tutorial"]
url = "persiapan-arduino"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada artikel [sebelumnya](https://www.anbidev.com/mengenal-arduino/ "Mengenal Arduino") kita sudah mengenal apa itu Arduino. Sekarang akan kita coba untuk belajar lebih dalam lagi. Kita perlu siapkan beberapa kebutuhan untuk belajar Arduino.

<br>

## Hardware

<hr>

Untuk belajar Arduino ini memerlukan hardwarenya ya, sehingga kita harus beli untuk mempelajarinya.

<br>

### Arduino Board

![Arduino Board Uno R3 - AnbiDev](/post/1_hm0qbrfvrts2imhoew1zlg.jpeg "Arduino Board Uno R3")

Anbi menggunakan Arduino dengan versi `Arduino Uno R3`. Selain karena `harga yang terjangkau`, banyak toko elektronik yang menjualnya sehingga `mudah untuk ditemukan` di kota kalian. Board juga bisa dibeli secara online [disini](https://www.tokopedia.com/search?st=product&q=arduino%20uno%20r3&navsource=home "Tokopedia Arduino")

<br>

### Kabel USB Type B

![Kabel USB Type B - AnbiDev](/post/4.jpeg "Kabel USB Type B")

Kabel ini biasanya digunakan pada printer atau scanner. Arduino juga menggunakan kabel ini untuk menghubungkan PC dengan Arduino Board. Bisa dibeli secara online [disini]().

<br>

## Instalasi Software

<hr>

Jika sudah menyiapkan hardware, kita beralih ke software. Arduino sudah menyediakan Integrated Development Environment (IDE) yang bisa diunduh [disini](https://www.arduino.cc/en/software/ "Software Arduino").

![Halaman Download ](/post/1_svoojqnharzqio-l6etuva.png "Halaman Download")

Sesuaikan dengan sistem operasi yang kalian gunakan. Untuk pengguna Windows, Anbi sarankan untuk memilih yang diatas (bukan yang ZIP file).

![Halaman Download dan Kontribusi](/post/1_l5e4-en5lhoqscfuketuig.png "Halaman Download dan Kontribusi")

Pilih `JUST DOWNLOAD` untuk langsung mengunduh, atau jika kalian ingin berkontribusi atau berdonasi silakan pilih `CONTRIBUTE & DOWNLOAD`. Jika sudah diunduh, klik 2x pada file _arduino-versi-windows.exe_

![User Account Control](/post/1_zwc_dmskey6bopy2xkwbgg.png "User Account Control")

Pilih `Yes` pada peringatan User Account Control

![Installation Options](/post/1_qcrgwk_f7rwoayojuhebtq.png "Installation Options")

Sesuaikan dengan pilihan yang kalian inginkan. Anbi mencentang semua.

![Installation Folder](/post/1_1gjjjpqyjrsfaqqxbicyda.png "Installation Folder")

Berikutnya adalah pemilihan folder instalasi, sesuaikan dengan folder instalasi pada perangkat kalian. Anbi langsung Install saja karena sudah sesuai dengan folder destinasi yang Anbi gunakan.

![Installing Progress](/post/1_s89tek1k3pc2maarao5yma.png "Installing…")

Proses instalasi akan berjalan, kita tunggu saja. Jika sudah selesai bisa kita buka Aplikasi Arduino, lalu akan tampil splash screen.

![Splash Screen](/post/1_nfvi-89nus8kykll7gp2rq.png "Splash Screen")

Proses ini tidak akan memakan waktu banyak

![Windows Security Alert](/post/1_j8pa8xgpz1-fg-8kco4dng.png "Windows Security Alert")

Pilih Allow access jika ada peringatan seperti ini

![Aplikasi Arduino](/post/1_u-3g0oek1li_yxlzp8qa7w.png "Aplikasi Arduino")

Berikut adalah halaman awal aplikasi Arduino

<br>

## Ujicoba

<hr>

Hubungkan Arduino Board dengan PC atau Laptop yang kamu gunakan. Gunakan kabel USB Type B.

![https://create.arduino.cc/projecthub/sandromesquitamecatronica/function-serial-print-in-only-one-line-29ef8d](/post/1_15pgwdx6fvmtdw3njyrdbq.jpeg "Ilustrasi")

Pastikan juga sudah menyetel ke `Ardunino Board` yang kalian gunakan. Caranya adalah

```sh
Tools > Board > Arduino Uno
```

![Pilih Arduino Board](/post/1_pqercljgenotnbuzxuh5fw.png "Pilih Arduino Board")

Pastikan juga telah memilih `Port` yang benar. Sesuaikan dengan perangkat kalian.

```sh
Tools > Port > COMP4
```

![Pilih Arduino Port](/post/1_jcjuvtdriv-wsb_ygowqxw.png "Pilih Arduino Port")

Kita akan mencoba membuat `blink pada LED` yang ada pada Arduino Boards. Siapkan Arduino IDE dan gunakan kode berikut ini:

```c
/* 
Blink

Menyalakan LED selama satu detik, lalu mati selama dua detik, dan diulang.
Kebanyakan Arduino memiliki LED yang on-board atau sudah melekat pada Arduino Board.
Pada UNO, MEGA dan ZERO melekat pada digital pin 13, namun pada MKR1000 pada pin 6.
LED_BUILTIN digunakan untuk menyetel pada LED yang ada pada Board secara otomatis.

Jika ingin mengetahui pin berapa yang terhubung pada model Arduino, kamu bisa
mengecek Technical Specs dari Board yang kamu gunakan pada:
[https://www.arduino.cc/en/Main/Products](https://www.arduino.cc/en/Main/Products "https://www.arduino.cc/en/Main/Products")

modified 8 May 2014
by Scott Fitzgerald

modified 2 Sep 2016
by Arturo Guadalupi

modified 8 Sep 2016
by Colby Newman

modified 28 Jul 2021
by AnbiDev

This example code is in the public domain.
[https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink](https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink "https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink")

\*/

// the setup function runs once when you press reset or power the board
void setup() {
    // inisialisasi digital pin LED_BUILTIN sebagai output.
    pinMode(LED_BUILTIN, OUTPUT);
}

// function loop akan berjalan terus-menerus
void loop() {
    digitalWrite(LED_BUILTIN, HIGH);   // menyalakan LED (HIGH adalah voltage level)
    delay(1000);                       // waktu tunggu (1000 = 1 detik)
    digitalWrite(LED_BUILTIN, LOW);    // mematikan LED dengan membuat voltage menjadi LOW
    delay(2000);                       // waktu tunggu (2000 = 2 detik)
}
```

Kode diatas juga bisa didapatkan pada `File > Examples > 01.Basics > Blink`. Anbi ubah dan sertakan pada dokumentasi menggunakan Bahasa Indonesia.

![Example of Blink](/post/1_7t6wwxss3dn9zmekpw0c-q.png "Example of Blink")

Lalu pilih tombol Verify untuk mengecek apakah kode sudah benar atau belum

![Verify](/post/1_p9b4csne_ejibpofumzfhg.png "Verify")

Jika sudah selanjutnya adalah Upload

![Upload](/post/1_lj18vtpcu-qbho4tx79low.png "Upload")

Perhatikan pada Arduino Board, lampu LED akan perkedip secara cepat. Ini menandakan ada script yang sedang diupload pada Board. Jika sudah selesai, LED yang ada pada Board akan berkedip sesuai dengan kode yang sudah kita buat, satu detik hidup dan dua detik mati.

![Result](/post/1_bpl6hrt3gnqu6tzqn8eqsq.gif "Result")

Sekian artikel tentang persiapan Arduino. Gimana? Seru bukan? Pada artikel selanjutnya kita akan belajar menggunakan sensor. Terimakasih, semoga bermanfaat.