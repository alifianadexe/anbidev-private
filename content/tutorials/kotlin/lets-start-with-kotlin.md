+++
authors = "J3ndra"
tutorials = ["kotlin"]
cover = "/post/kotlin.jpg"
date = 2020-08-31T17:00:00Z
description = "Instalasi Kotlin dan juga Intellij"
series = ""
shortcode = "Kotlin Setup"
status = "publish"
sumber = ["https://kotlinlang.org/docs/reference/", "https://www.jetbrains.com/idea/download/"]
tags = ["kotlin"]
title = "Lets Start with Kotlin"
type = ["tutorials", "tutorial"]
url = "/kotlin-setup/"
[author]
images = "/img/j3ndra.jpg"
name = "J3ndra"

+++

## Instalasi Kotlin dan IntelliJ IDEA

<hr>

Untuk menginstall Kotlin pada IntelliJ IDEA, silahkan pastikan memenuhi requirements dibawah ini.

**Minimum :**

- RAM : **4 GB RAM**
- Disk Space : **2.5 GB** dan juga **1 GB** untuk _caches_ (**3 GB Total**)
- Monitor Resolution : **1024x768**
- Operating System -> untuk versi OS **64-bit**:
  - **Microsoft Windows 8** or later
  - **macOS 10.13** or later
  - Any Linux distribution that supports Gnome, KDE, or Unity DE

> Pre-release versions tidak didukung.

**Recommend :**

- RAM : **8 GB RAM**
- Disk Space : **SSD drive** dengan minimum 5 GB _Free Space_
- Monitor Resolution : **1920×1080**
- Operating System : Latest 64-bit version of Windows, macOS, or Linux (for example, Debian, Ubuntu, or RHEL)

> Anda <ins>tidak perlu menginstall Java</ins> untuk menjalankan IntelliJ IDEA karena **JetBrains Runtime** sudah **terbundle** dengan IDE (based on JRE 11). Tetapi jika anda ingin membuat aplikasi Java, anda perlu menginstall JDK Java.

<br>

### Download & Install IntelliJ IDEA (Windows)

1. Silahkan download [installer IntelliJ IDEA](https://www.jetbrains.com/idea/download/) ↗️ `.exe.`
2. Jalankan installer yang sudah di download silahkan ikuti instruksi yang terdapat pada installer.
3. Pada step **Installation Options**, anda dapat konfigurasi sesuai dengan selera anda.

   - **Create Desktop Shortcut** untuk menampilkan launcher di layar utama anda.
   - **Update context menu**, jika anda klik kanan pada sebuah folder, maka IntelliJ IDEA akan otomatis muncul.
   - **Create Associations**, extensi apa yang anda ingin gunakan pada IntelliJ IDEA. (_silahkan pilih semuanya_)
   - **Download and install 32-bit JetBrains Runtime** jika anda menggunakan Windows versi 32-bit.
   - **Update PATH variable** digunakan untuk menambahkan JetBrains pada Environment Variable.

   ![The Installation Options step of the installation wizard](/post/lets-start-with-kotlin-01.png "The Installation Options step of the installation wizard")

4. Jika anda merasa kesulitan saat instalasi, anda dapat melihat informasi lebih lanjut [disini](https://www.jetbrains.com/help/idea/run-for-the-first-time.html) ↗️.

<br>

### Download & Install IntelliJ IDEA (Linux)

1.  Download _tarball_ nya [disini](https://www.jetbrains.com/idea/download/#section=linux) `.tar.gz`.
2.  Extract _tarball_ tersebut ke directory yang mensupport eksekusi sebuah file.

    Seperti ekstrak di `/opt`, jalankan command dibawah ini.

        $sudo tar -xzf ideaIU.tar.gz -C /opt

    > Jangan ekstrak _tarball_ pada folder yang sudah terdapat IntelliJ IDEA untuk menghindari conflict. Selalu ekstrak di folder yang kosong.

    Jalankan `idea.sh` pada ekstraksi folder utuk menjalankan IntelliJ IDEA.<br><br>

3.  Untuk membuat shortcut dekstop, lakukan :

    - Pada Welcome screen, pilih **Configure -> Create Dekstop Entry**
    - Jika dari main menu, pilih **Tools -> Create Dekstop Entry**

<br>

### Download & Install IntelliJ IDEA (MacOS)

1. Maaf kami AnbiDev tidak memilik Apple product 🙇, silahkan ikuti instalasinya [disini.](https://www.jetbrains.com/help/idea/installation-guide.html#snap)

<br>

## Aplikasi Kotlin pertama kita 🤙

<hr>

!["Tampilan Awal Intelij IDEA"](/post/lets-start-with-kotlin-02.png "Tampilan Awal Intelij IDEA")

Yap, ini adalah tampilan anda pertama kali saat anda membuka IntelliJ IDEA. Silahkan pilih **Create New Project -> Kotlin -> JVM | IDEA**

<br>

!["Setting Awal Project"](/post/lets-start-with-kotlin-03.png "Setting Awal Project")

Silahkan namai project Anda sesuai dengan selera Kalian dan juga project location. Jika sudah sesuai dengan diatas. Click **Finish**.

<br>

> Bagi anda pemakai Windows dan melihat peringatan seperti ini, silahkan pilih Fix... maka IntelliJ IDEA akan secara otomatis menyelesaikan peringatan tersebut. **Configure Automatically**
>
> !["Automaticaly Fix Pop Up"](/post/lets-start-with-kotlin-04.png "Automaticaly Fix Pop Up")

<br>

Untuk membuat file Kotlin baru. Pilih **File -> New -> Kotlin File/Class -> Kotlin File Name**, untuk sekarang, mari kita namai _HelloWorld_.

Pada file yang baru saja anda buat, coba tulis kode dibawah ini :

```kotlin
    fun main() {
    	println("Hello World!")
    }

    // Expected output
    Hello World!
```

Dan juga coba jalankan function tersebut.

<br>

!["Hasil Output"](/post/lets-start-with-kotlin-05.png "Hasil Output")

Selamat! Kode anda berhasil dijalankan dengan baik.

Mari coba kita jelajahi sedikit jauh tentang kotlin. Kita coba dengan `val` dan `var`, apasih perbedaan mereka itu?

#### Tulis :

```kotlin
    fun main() {
    	val hello: String = "Hello"
    	println(hello)
    }

    // Expected output
    Hello
```

Disaat dijalankan, maka output anda bertuliskan Hello. Tapi, apakah `val hello` dapat diubah 🤔?

Tentu saja tidak! Object `val` pada Kotlin bersifat `Immutable` yang berarti data pada hello tidak dapat diubah.

Maka dari itu jika kita ingin mengubah isi dari sebuah object, kita menggunakan `var` yang bersifat `mutable`. Coba masukkan kode ini di `fun main()` :

```kotlin
    fun main() {
    	...

    	var helloWorld: String = "Hello!"
    	println(helloWorld)

    	helloWorld = "Hello World!"
    	println(helloWorld)
    }
```

Dan coba jalankan function Kotlin tersebut!

<br>

!["Hasil Output Image"](/post/lets-start-with-kotlin-05.png "Hasil Output Fungsi Kedua")

Yap! Seperti yang anda tahu bahwa object `helloWorld` dapat diubah menggunakan `var`.

Untuk tutorial Kotlin yang lain, silahkan tunggu ya! Kita akan bahas Kotlin lebih dalam lagi di tutorial selanjutnya 😉.
