+++
authors = "hamid"
tutorials = ["flutter"]
cover = "/post/coverweb-flutter black.png"
date = 2020-08-29T17:00:00Z
description = "Instalasi Flutter pada Windows"
series = "flutter 101"
shortcode = "Instalasi"
status = "publish"
sumber = ["https://developer.android.com/studio/run/win-usb", "https://flutter.dev/docs/get-started/install/windows"]
tags = ["flutter", "dart"]
title = "Instalasi Flutter pada Windows"
type = ["tutorials", "tutorial"]
url = "/instalasi-flutter/"
[author]
images = "/img/hamid.jpg"
name = "Hamid Machfudin Sukardi"

+++
## System requirements

<hr>

Untuk menginstall dan menjalankan flutter ada beberapa hal yang perlu dipenuhi, yakni:

* **Sistem Operasi**: Windows 7 SP1 or later (64-bit)
* **Disk**: 1,32 GB (belum termasuk untuk kebutuhan editor)
* **Tool**:
  * [Windows PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell "Windows PowerShell") 5.0 (sudah ada pada instalasi awal Windows 10)
  * [Git](https://git-scm.com/download/win "Git"), pastikan dengan menjalankan perintah git di command prompt

<br>

## Flutter SDK

<hr>

1. Download instalasi berikut : <br>
   [** Flutter SDK **](https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_1.20.2-stable.zip "Flutter Windows SDK")
2. Ekstrak file `flutter_windows_1.20.2-stable.zip` ke lokasi yang diinginkan. Contoh :

```cmd
C:\\src\\flutter
```

> **Peringatan**: Jangan tempatkan flutter pada direktori yang membutuhkan hak akses khusus seperti `C:\\Program Files\\`

Jika kamu tidak mau menginstall versi stabil, kamu bisa mendapatkan _source code_ nya pada [repositori Flutter](https://github.com/flutter/flutter "Repositori Flutter") di GitHub.

       git clone https://github.com/flutter/flutter.git -b stable

Sekarang kamu siap menjalankan perintah Flutter pada [Flutter console](https://stackoverflow.com/questions/50837815/what-is-the-flutter-console "Flutter Console").

<br>

## Update Path

<hr>

Jika kamu ingin menggunakan perintah Flutter pada Windows console, update path terlebih dahulu:

* Pada _search bar_ di Start, ketik _'env'_ dan pilih **Edit environment variables for your account**.
* Pada **User variables** double klik '_Path_', isikan tempat kamu mengekstrak Flutter SDK tadi dan diarahkan ke subfolder `bin`, Contoh :

    C:\\src\\flutter\\bin

* Buka ulang CMD agar perubahan bisa berjalan

<br>

## Jalankan Flutter Doctor

<hr>

Untuk melihat apakah Flutter sudah terinstall dengan baik, ketik perintah berikut di CMD:

```sh
flutter doctor
```

Perintah tersebut digunakan untuk melaporkan status instalasi flutter. Cek _output_ yang dihasilkan oleh perintah tersebut (perhatikan teks yang **bold** atau terdapat tanda **✗**)

```sh
      [-] Android toolchain - develop for Android devices
          • Android SDK at D:\Android\sdk
          ✗ Android SDK is missing command line tools; download from https://goo.gl/XxQghQ
          • Try re-installing or updating your Android SDK,
            visit https://flutter.dev/setup/#android-setup for detailed instructions.
```

Pada bagian tersebut diperlihatkan cara menangani setup yang kurang. Seperti menjalankan `flutter doctor --android-licenses`. Setelah kamu menginstall bagian yang kurang, kamu bisa mengetik flutter doctor lagi untuk melihat apakah sudah terinstall dengan benar.

<br>

## Android setup

<hr>

> **Note:** Flutter bergantung pada instalasi Android Studio untuk memasok dependencies platform Android. Namun, kamu bisa menulis Flutter pada editor lain, akan kita bahas lain waktu

### Install Android Studio

1. Download dan install [Android Studio](https://developer.android.com/studio "Android Studio").
2. Jalankan Android Studio, lalu ke '**Android Studio Setup Wizard**'. Install Android SDK, Android SDK Command-line Tools, dan Android SDK Build-Tools, dimana dibutuhkan Flutter untuk mendevelop Android.

<br>

### Setup Android Emulator

Untuk menjalankan Aplikasi Flutter pada Android Emulator di komputer atau laptopmu sendiri, ikuti langkah ini:

1. Enable [VM acceleration](https://developer.android.com/studio/run/emulator-acceleration "VM Acceleration")
2. Jalankan **Android Studio**
3. Pada layar Welcome, pilih **Configure** **> AVD Manager**
4. Lalu akan tampil layar AVD Manager, pilih **Create Virtual Device**, pilih device emulator yg ingin digunakan.
5. Kamu perlu mengunduh satu atau lebih System Image dari versi Android yang ingin digunakan, lalu **Next**.
6. Dibawah Emulated Performance, pilih **Hardware - Gles 2.0** agar [hardware accelerator](https://developer.android.com/studio/run/emulator-acceleration "hardware accelerator") berjalan.
7. Pastikan semua konfigurasi benar, lalu **Finish**.
8. Pada layar Android Virtual Device Manager, klik **Run**. Emulator akan berjalan.

<br>

### Setup Android Device

Jika komputer atau laptop Flutter mu keberatan untuk menjalankan Emulator, kamu bisa menggunakan Smartphone-mu sendiri untuk menjalankan Aplikasi. Minimun versi Android yang dibutuhkan adalah **Android 4.1 (API level 16)** atau lebih tinggi.

1. _Enable_ **Developer options** dan **USB debugging** pada Smartphone. Instruksi lebih detail ada di [Android documentation](https://developer.android.com/studio/debug/dev-options "Dev Option"). Hal ini akan membuat Smartphone bisa melakukan _debug_ menggunakan kabel usb.
2. [**Google USB Driver**](https://developer.android.com/studio/run/win-usb "Google USB Driver"), diperlukan Windows jika anda ingin menjalankan debug dengan perangkat Google.
3. Gunakan kabel USB, lalu hubungkan device mu ke komputer. Lalu ijinkan komputer untuk mengakses Smartphone.
4. Buka CMD, jalankan 'flutter device' untuk menverifikasi jika Flutter mengenali Smartphone. Secara default, Flutter menggunakan versi Android yang dimiliki Smartphone.

