+++
authors = "J3ndra"
tutorials = ["android"]
cover = "/post/androidperkenalan.png"
date = 2020-12-20T09:00:00Z
dateUpdate = ""
description = "Mari kita berkenalan dengan sebuah editor paling banyak dipakai oleh kalangan android developer"
series = "Android 101"
shortcode = "Perkenalan"
status = "publish"
sumber = ["https://developer.android.com/studio"]
tags = ["android-studio", "kotlin"]
title = "Berkenalan Dengan Android Studio"
type = ["tutorials", "tutorial"]
url = "/berkenalan-dengan-android-studio/"
[author]
images = "/img/j3ndra.jpg"
name = "J3ndra"

+++

Dalam kesempatan kali ini, kita akan berkenalan dengan Android Studio. **Apa itu Android Studio**? Android Studio adalah tools untuk membuat aplikasi jenis perangkat Android.

<br>

## Cara menginstall Android Studio

<hr>

Silahkan kunjungi [link](https://developer.android.com/studio "link") berikut untuk mendownload versi stabil (Jika anda ingin menginstal versi beta, silahkan pindah ke tab _preview_) instalasi Android Studio :

[Download Link](https://developer.android.com/studio)

Jangan lupa untuk dicentang bagian **_I have read and agree with the above terms and conditions_**.

Setelah selesai mendownload, silahkan install sesuai dengan instruksi. Ada 2 pilihan disaat anda menginstall, yaitu standard dan juga _Custom_. Jika anda memilih _Custom_, maka anda disuruh untuk memilih installasi yang ingin anda gunakan. Untuk penjelasan lebih lanjut, baca keterangan dibawah.

!["Pilihan Paket Installasi"](/post/screenshot_266.png "Pilihan Paket Installasi")

- **Performance (Intel HAXM)** - _Pada Architecture AMD ada pilihan tersendiri_

  Pilihan tersebut bisa anda nonaktifkan jika anda tidak berniat menggunakan emulator yang tersedia pada Android Studio.

- **Android Virtual Device**

  Pilihan tersebut juga bisa anda nonaktifkan jika anda tidak berniat menggunakan emulator yang tersedia pada Android Studio.

Jika anda mengaktifkan **HAXM**, anda juga harus mengatur berapa maksimal kapasitas RAM yang akan digunakan oleh emulator.

!["Setting Kapasitas RAM"](/post/screenshot_267.png "Setting Kapasitas RAM")

<br>

## Tampilan Awal

<hr>

!["Tampilan Awal"](/post/capture.PNG "Tampilan Awal")

Abaikan **Create New Flutter Project** karena pilihan itu hanya plugin tambahan.

### Pilihan yang tersedia

- **Create New Project** digunakan untuk membuat project baru.

  !["Tampilan Create New Project"](/post/capture2.PNG "Tampilan Create New Project")

  Pada banyak pilihan di atas, merupakan template code awal yang diberikan langsung oleh Android Studio.

- **Configure** digunakan untuk settingan yang ingin anda gunakan pada Android Studio.

  !["Dialog Window Configure"](/post/untitled.png "Dialog Window Configure")

  - **SDK Manager** merupakan _Android Software Development Kit_ yang digunakan developer untuk mengembangkan Aplikasi Android. Jika boleh saya sarankan, download mulai dari Versi Android terbaru (Kalau sekarang **Android 11.0** atau **R** dengan API Level 30) hingga **Android 4.0** (API Level 14).

    Hal tersebut digunakan untuk mengantisipasi jika ada user yang masih menggunakan Android Versi 4.0. Karena jika kita menggunakan minimum API yang lebih tinggi, maka Android dengan Versi API dibawah minimum tidak akan bisa menjalankan Aplikasi dengan baik.

    !["Contoh Tampilan SDK Manager"](/post/capture3.PNG "Contoh Tampilan SDK Manager")

  - **AVD Manager** merupakan tempat dimana kita mengatur Virtual Device yang akan kita gunakan sebagai emulator untuk Android Studio.

    !["Tampilan List Virtual Device"](/post/capture4.PNG "Tampilan List Virtual Device")

  - **Plugin** merupakan fitur tambahan yang tersedia pada Android Studio untuk. Berikut adalah plugin Android Studio yang saya gunakan.

    !["Tampilan Daftar Plugin"](/post/capture5.PNG "Tampilan Daftar Plugin")

    Bila anda bertanya mana yang penting? Maka saya akan mengatakan bahwa **RoboPOJOGenerator** adalah plugin yang sangat bermanfaat. Fungsinya adalah menggenerate sebuah data class. Untuk penjelasannya bisa dilihat di penjelasan berikut.

<br>

## Membuat Project Android Studio

<hr>

Pilih Create New Project -> Empty Activity -> **Lihat gambar dibawah** -> Finish

!["Konfigurasi Aplikasi Awal"](/post/capture6.PNG "Konfigurasi Aplikasi Awal")

Selamat datang di IDE Android Studio!

!["Tampilan Awal Editor"](/post/capture7.PNG "Tampilan Awal Editor")

Coba kita lihat pada folder yang ada pada Android Studio.

!["Struktur Folder Aplikasi Android"](/post/capture8.jpg "Struktur Folder Aplikasi Android")

- `MainActivity.kt` **(com.anbidev.anbidev)** merupakan tempat kita menaruh code yang akan digunakan menjalankan aplikasi.
- `activity_main.xml` **(layout)** merupakan tempat dimana kita akan mendesign tampilan dari Aplikasi yang akan kita buat.
- **(drawable)** merupakan tempat kita menaruh icon atau gambar yang akan kita gunakan untuk design di layout.
- **(mipmap)** icon dari aplikasi yang akan digunakan
- **(values)** merupakan tempat kita menaruh nilai dari warna seperti #FFFFFF dan juga string. Karena pada Android kita akan diberi warning jika menaruh _hardcoded string_ seperti dibawah ini.

  !["Element TetxView Dengan Hardcoded String"](/post/untitled9.png "Element TetxView Dengan Hardcoded String")

Pada bagian **Gradle Script** terdapat 2 pilihan, yaitu **Project** dan juga **Module**. Lalu, apa bedanya dari kedua tersebut?

- `build.gradle` (_Project_: Nama Aplikasi) file ada di folder root proyek dan pengaturan konfigurasinya berlaku untuk setiap modul dalam proyek. Modul merupakan bagian yang terisolasi dari proyek yang lebih besar. Dalam proyek multi-modul, modul-modul ini memiliki tugasnya sendiri tetapi bekerja sama untuk membentuk keseluruhan proyek. Sebagian besar proyek Android hanya memiliki satu modul, modul aplikasi.

- `build.gradle` (_Module_: App) file ini ada di folder aplikasi. Pengaturan build-nya hanya berlaku untuk modul aplikasi. Jika ada modul lain, maka modul itu juga akan memiliki file `build.gradle` sendiri. Sebagai contoh, saya membuat proyek dengan tiga modul: modul utama, modul demo, dan modul aplikasi lain yang akan saya gunakan untuk testing.

  !["Beberapa File Graddle Script"](/post/gkiv3-2.png "Beberapa File Graddle Script")

Dan juga ada banyak lagi bagian yang bisa anda jelajahi selagi menggunakan Android Studio.

<br>

## Practice Make Perfect

<hr>

Mari kita buat aplikasi yang simple (mungkin sangat) yaitu memindahkan satu _activity_ ke _activity_ yang lain.

Pada `activity_main.xml`, silahkan tulis

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="296dp"
        android:text="@string/hello_anbidev"
        app:layout_constraintHorizontal_bias="0.498"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <Button
        android:id="@+id/moveActivity"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="40dp"
        android:text="@string/pindah_activity"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.497"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textView"
        app:layout_constraintVertical_bias="0.03" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

Jangan lupa pada **values** -> `strings.xml` tambahkan

```xml
<string name="hello_anbidev">Hello Anbidev!</string>
<string name="pindah_activity">Pindah Activity</string>
```

Lalu tambahkan activity baru dengan klik **File** -> **New** -> **Activity** -> **New Activity** atau sesuai contoh gambar dibawah.  
![File -> New -> Activity -> New Activity](/post/untitled2.png "File -> New -> Activity -> New Activity")

!["Buat File Baru  Second Activity"](/post/capture10.PNG "Buat File Baru Second Activity ")

Lalu **Finish**. Tunggu hingga _gradle_ selesai. Setelah itu tulis pada `activity_second.xml`

```xml
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".SecondActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/second_activity"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

Jangan lupa pada `strings.xml` tambahkan

```xml
<string name="second_activity">Second Activity</string>
```

Lalu pada `MainActivity.kt` tuliskan

```kotlin
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button

class MainActivity : AppCompatActivity(), View.OnClickListener {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnMoveActivity: Button = findViewById(R.id.btnMoveActivity)
        btnMoveActivity.setOnClickListener(this)
    }

    override fun onClick(v: View?) {
        when (v?.id) {
            R.id.btnMoveActivity -> {
                val pindahActivity = Intent(this@MainActivity, SecondActivity::class.java)
                startActivity(pindahActivity)
            }
        }
    }
}
```

Lalu coba jalankan aplikasi yang tadi dibuat.

!["Tekan Tombol Segita Hijau Untuk Memulai"](/post/start.PNG "Tekan Tombol Segita Hijau Untuk Memulai")

!["Activity Pertama"](/post/android1.PNG "Activity Pertama")

!["Activity Kedua"](/post/android2.PNG "Activity Kedua")

Itu dia pembahasan kita tentang apa itu Android Studio, mari tunggu untuk pembahasan kita selanjutnya hanya di [AnbiDev](https://anbidev.com/)!

<center> . . . </center>

<br>

> <span style="font-size:25px;font-weight:1000" ><i>Contoh PoJo Generator</i></span>

Oh ya tadi di atas saya mengatakan bahwa **PoJo Generator** merupakan plugin yang menurut saya penting, kenapa? Berikut ini contohnya.

!["File -> New -> Generate PoJo From JSON"](/post/untitled3.png "File -> New -> Generate PoJo From JSON")

Lalu tinggal copy data JSON yang anda punya lalu pilih **Generate**.

!["PoJo Generator Dialog"](/post/capture11.PNG "PoJo Generator Dialog")

Dan. Done! Kita tidak perlu menuliskan datanya satu persatu. tinggal generate saja menggunakan **PoJo Generator**. Gambar dibawah hanya contoh.

!["Contoh PoJo Generator"](/post/capture12.PNG "Contoh PoJo Generator")

> Happy Code y'all
