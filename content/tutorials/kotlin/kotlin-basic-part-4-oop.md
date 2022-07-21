+++
authors = "J3ndra"
tutorials = ["kotlin"]
cover = "/post/kotlin.jpg"
date = 2020-12-01T12:30:00Z
description = "Kotlin basic part 4 yang membahas tentang Object-oriented Programming"
draft = true
series = "Kotlin Basic"
shortcode = "Kotlin Basic : Part 4"
status = "draft"
sumber = ["https://kotlinlang.org/docs/reference/"]
tags = ["kotlin", "Object-oriented Programming", "OOP"]
title = "Kotlin Basic : Part 4 - OOP"
type = ["tutorials", "tutorial"]
url = "kotlin-basic-part-4"
[author]
images = "/img/j3ndra.jpg"
name = "J3ndra"

+++
# Kotlin OOP?

<hr>

Yup pada part 4 kali ini kita akan membahas Object-oriented dari Kotlin. Pertama-tama, jangan lupa untuk membuat project baru ya. Oh ya, jika anda baru saja menggunakan IntelliJ IDEA dan kebingungan menggunakan versi terbaru. Akan saya bahas update selanjutnya pada postingan blog. Untuk sekarang, Silahkan ke **New Project** -> **Kotlin** -> **JVM (Application) \[**Untuk pilihan **Build System** silahkan pilih **Gradle Kotlin**, lalu pada **Project JDK** diusahakan untuk menggunakan minimal SDK Versi 14**\]** -> **Next** -> **Finish**.

<br>

## Membuat Class

Pada awalan ini, kita akan membuat package dan class baru dengan beberapa properties dan metod yang akan digunakan.

#### Membuat Package

Pada project folder **scr** -> **main** -> **kotlin**, klik kanan pada **kotlin** lalu pilih **New Package** (isi sesuai keinginan Anda), lalu buat class **Box.kt**.

Pada **Box.kt**, silahkan tulis

```kotlin
package [nama package anda]

class Box {
    var lebar: Int = 20
    var tinggi: Int = 40
    var panjang: Int = 100
}
```

> **Note**: Jika Anda mendeclare variable menggunakan **val**, maka properties tersebut akan bersifat immutable.

#### Membuat fungsi _main()_

Buat file baru `main.kt` untuk mengisi fungsi `main()`

```kotlin
package com.anbi

fun makeBox() {
    val myBox = Box()
}

fun main() {
    makeBox()
}
```

1. Buat function `makeBox()` dan didalamnya terdapat instance `Box()`. Hal ini akan memanggil konstruktor class dari class **Box.kt**.
2. Buat `main()` function dan panggil `makeBox()`.

#### Tambahkan sebuah method

1. Pada class `Box`, tambahkan method untuk mem-print dimensi dari box properties.

   ```kotlin
       fun printSize() {
           println("Lebar: $lebar cm\n" +
                   "Panjang: $panjang cm\n" +
                   "Tinggi: $tinggi cm")
       }
   ```
2. Pada `Main.kt`, didalam `makeBox()`, panggil method `printSize()` pada `myBox`.

   ```kotlin
   fun makeBox() {
       val myBox = Box()
       myBox.printSize()
   }
   ```
3. Jalankan program yang anda buat dengan menglick segitiga hijau sebelah kiri (dekat) function `main()`. Coba amati hasilnya!

   ```kotlin
   Lebar: 20 cm
   Panjang: 100 cm
   Tinggi: 40 cm
   ```
4. Pada `makeBox()`. Tambahkan kode untuk mengubah panjangnya menjadi 80 dan print perubahan tersebut.

   ```kotlin
   fun makeBox() {
       val myBox = Box()
       myBox.printSize()
       myBox.panjang = 80
       println("--------------")
       myBox.printSize()
   }
   ```
5. Jalan program yang Anda buat!

   ```kotlin
   Lebar: 20 cm
   Panjang: 100 cm
   Tinggi: 40 cm
   --------------
   Lebar: 20 cm
   Panjang: 80 cm
   Tinggi: 40 cm
   ```