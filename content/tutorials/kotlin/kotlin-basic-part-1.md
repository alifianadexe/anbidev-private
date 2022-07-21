+++
authors = "J3ndra"
tutorials = ["kotlin"]
cover = "/post/kotlin.jpg"
date = 2020-09-02T14:00:00Z
description = "Kotlin Basic Syntax"
series = "Kotlin Basic"
shortcode = "Kotlin Basic : Part 1"
status = "publish"
sumber = ["https://kotlinlang.org/docs/reference/"]
tags = ["kotlin"]
title = "Kotlin Basic : Part 1"
toc = true
type = ["tutorials", "tutorial"]
url = "/kotlin-basic-part-1/"
[author]
images = "/img/j3ndra.jpg"
name = "J3ndra"

+++
# Kotlin Basic

Setelah kita menginstall kebutuhan yang diperlukan untuk belajar kotlin, kita mulai pelajaran dengan gabungan pendekatan fundamental dan juga praktisi dari Kotlin.

<br>

## Mendefinisikan Package dan Import

<hr>

Pastikan menulis `package` pada posisi paling atas dari suatu source file :

```kotlin
    package my.demo

    import kotlin.text.* // Semua file yang berada di 'kotlin.text' dapat diakses
    import kotlin.text.Message // Hanya file 'Message' yang dapat diakses
    import kotlin.text.Message as Message // Message mendefinisikan 'kotlin.text.Message'

    // ...
```

`Import` tidak hanya berfungsi untuk mengimport suatu Class, tapi Anda juga bisa menggunakannya untuk mendeklarasikan :

- Top-level functions dan juga properties
- Functions dan properties yang dideklarasikan pada [Object Declarations](https://kotlinlang.org/docs/reference/object-declarations.html#object-declarations)
- [Enum Constant](https://kotlinlang.org/docs/reference/enum-classes.html)

Lihat lebih detail -> [Package](https://kotlinlang.org/docs/reference/packages.html)

<br>

## Program Entry Point

<hr>

Entry point pada aplikasi Kotlin adalah function `main`. Yang berarti setiap Anda ingin membuat aplikasi Kotlin, pastikan anda menulis fun `main` untuk code Anda dapat berjalan.

```kotlin
    fun main() {
        println("Hello AnbiDev!")
    }
```

<br>

## Functions

<hr>

Coba tulis kode dibawah ini :

```kotlin
    fun tambah(a: Int, b: Int): Int {
        return a + b
    }

    fun main() {
        print("Penambahan dari 3 dan 5 adalah ") // print tanpa 'enter'
        println(tambah(3, 5)) // println dengan 'enter'
    }

    // Expected Output
    Penambahan dari 3 dan 5 adalah 8
```

Function diatas memiliki 2 `Int` parameters yaitu `(a: Int, b: Int)` dan juga tipe pengembalian berupa `Int`.

Mari Kita coba bentuk Function yang lain dengan `Expression Body` dan juga tipe pengembalian yang disederhanakan. Contoh nya seperti kode dibawah ini :

```kotlin
    fun tambah(a: Int, b: Int) = a + b

    fun main() {
        println("Penambahan dari 19 dan 23 adalah ${tambah(19, 23)}")
    }

    // Expected Output
    Penambahan dari 19 dan 23 adalah 42
```

Atau juga kalian bisa menuliskan nya juga menggunakan `Unit`, seperti ini :

```kotlin
    fun tambah(a: Int, b: Int): Unit {
        println("Penambahan dari $a dan $b adalah ${a + b}")
    }

    fun main() {
        tambah(-1, 8)
    }

    // Expected Output
    Penambahan dari -1 dan 8 adalah 7
```

Seperti itu contoh Functions yang terdapat pada Kotlin. Oh ya, tipe pengembalian `Unit` dapat dihilangkan kok, coba saja ya!

Ini ada bonus kode yang mungkin ingin anda _Otak-Atik_

```kotlin
    fun lakukanPerhitungan(a: Int = 2, b: Int = 2, operator: String = "penambahan"): Int {
        return when (operator) {
            "penambahan" -> a + b
            "pengurangan" -> a - b
            "pengalian" -> a * b
            "pembagian" -> a / b
            else -> 0
        }
    }

    fun printExtraLn(message: Any) {
        println(message)
        println()
    }

    fun main() {
        printExtraLn("Kotlin Functions")
        printExtraLn(lakukanPerhitungan(8, 5, "pengurangan"))
        printExtraLn(lakukanPerhitungan(a = 3, operator = "pengalian", b = 4))
    }

    // Expected Output
    3
	12
```

<br>

## Variables

<hr>

Jika kalian mengingat pada [Kotlin 101](https://www.anbidev.com/tutorials/kotlin/kotlin-101/), disana Kita membahas tentang perbedaan antara `val` dan juga `var`. Mari kita ulas kembali di tutorial kali ini!

```kotlin
    val a: Int = 1  // Langsung memasukkan data
    val b = 2   // Tipe 'Int' dapat dihilangkan karena sudah terdapat angka
    val c: Int  // Tipe dibutuhkan karena tidak ada isi data
    c = 3       // Sudah pasti (Mungkin 😗)
```

Untuk keterangannya mungkin susah, saya juga bingung ingin menjelaskannya seperti apa. Anda bisa coba-coba sendiri. Ini adalah contoh kodenya :

```kotlin
    fun main() {
        // Variables in Kotlin
        val okayHello = "Hello!" // Immutable
        println(okayHello)

        var changingTheHello = "Hello World!" // Mutable
        println(changingTheHello)
        changingTheHello = "Hello AnbiDev!"
        println(changingTheHello)

        // More common use case...
        var counter = 0
        println(counter++)
        println(counter++)
        println(counter++)
    }

	// Expected Output
	Hello!
	Hello World!
	Hello AnbiDev!
	0
	1
	2
```

<br>

## Comments

<hr>

Iya, kode Kamu perlu diberi _comments_ agar tidak lupa dengan apa yang dimaksud dari kode yang Anda tulis.

```kotlin
    // Comment hanya 1 line code.

    /* Comment block
       dengan banyak line code. */
```

<br>

## String Templates

<hr>

```kotlin
fun main() {
    var a = 1
    // simple name in template:
    val s1 = "a adalah $a"

    a = 2
    // arbitrary expression in template:
    val s2 = "${s1.replace("adalah", "memiliki nilai")}, tapi sekarang a adalah $a"
    println(s2)
}

// Expected Output
a memiliki nilai 1, tapi sekarang a adalah 2
```

Silahkan lihat [String Template](https://kotlinlang.org/docs/reference/basic-types.html#string-templates) untuk penjelasan lebih lanjut.

<br>

## Conditional Expressions

<hr>

Coba tulis kode ini :

```kotlin
fun lebihBesar(a: Int, b: Int): Int {
    if (a > b) {
        return a
    } else {
        return b
    }
}

fun main() {
    println("Lebih besar antara 0 dan 42 adalah ${lebihBesar(0, 42)}")
}

// Expected Output
Lebih besar antara 0 dan 42 adalah 42
```

Atau dengan kehebatan Kotlin, Anda bisa menuliskan kode tersebut seperti ini :

```kotlin
fun maxOf(a: Int, b: Int) = if (a > b) a else b

fun main() {
    println("Lebih besar antara 0 dan 42 adalah ${lebihBesar(0, 42)}")
}

// Expected Output
Lebih besar antara 0 dan 42 adalah 42
```

Gimana, lebih ringkas bukan? Itulah mengapa Kotlin dapat terhitung mudah untuk dipelajari. Lihat [if-expressions](https://kotlinlang.org/docs/reference/control-flow.html#if-expression) untuk penjelasan lebih lanjut!

<br>

## Nullable Values dan Pengecekan Null

<hr>

Jika anda tidak yakin apakah parameter memiliki sebuah nilai atau tidak, beri saja tanda _nullable_(`?`) untuk memungkinkan sebuah value parameter untuk null.

```kotlin
fun parseInt(str: String): Int? {
    // ...
}
```

seperti kode diatas, akan mengembalikan nilai null jika `str` tidak mengandung `Int`. Coba kita gunakan return function value _nullable_ :

```kotlin
fun parseInt(str: String): Int? {
    return str.toIntOrNull()
}

fun printProduk(arg1: String, arg2: String) {
    val x = parseInt(arg1)
    val y = parseInt(arg2)

    // Gunakan 'x * y' error yield karena memungkin value nulls.
    if (x != null && y != null) {
        // x dan y otomatis menangkap menjadi non-nullable setelah pengecekan null
        println(x * y)
    }

    /*
    Atau anda bisa gunakan kode diatas menjadi

    if (x == null) {
        println("Wrong number format in arg1: '$arg1'")
        return
    }
    if (y == null) {
        println("Wrong number format in arg2: '$arg2'")
        return
    }

    x and y are automatically cast to non-nullable after null check
    println(x * y)
    */
    else {
        println("'$arg1' atau '$arg2' bukannlah angka")
    }
}


fun main() {
    printProduk("6", "7")
    printProduk("a", "7")
    printProduk("a", "b")
}
```

Silahkan baca-baca lagi [disini](https://kotlinlang.org/docs/reference/null-safety.html).

<br>

## Pengecekan pada Tipe dan Automatic Casts

<hr>

Operator `is` pada Kotlin digunakan untuk memeriksa turunan dari suatu tipe. Jika variable bersifat `Immutable` atau suatu property sudah tervalidasi untuk tipe yang sudah di spesifik, tidak perlu untuk menggunakan operator `is`.

```kotlin
fun getStringLength(obj: Any): Int? {
    if (obj is String) {
        // `obj` otomatis ter-cast menjadi `String` di branch ini
        return obj.length
    }

    // `obj` masih bertipe `Any` diluar type-checked branch
    return null
}


fun main() {
    fun printLength(obj: Any) {
        println("'$obj' panjang String adalah ${getStringLength(obj) ?: "... err, bukan sebuah string"} ")
    }
    printLength("Incomprehensibilities")
    printLength(1000)
    printLength(listOf(Any()))
}
```

Untuk lebih jelas, silahkan baca [Classes](https://kotlinlang.org/docs/reference/classes.html) dan juga [Type Casts](https://kotlinlang.org/docs/reference/typecasts.html).

<br>

## Later (Part 2)

<hr>

Untuk penjelasan dari masing-masing function, kita jelaskan di part 2 ya! Tangan dan otak saya sudah capek. 😴

Tapi ini bonus kode untuk kalian pelajari sembari menunggu part 2!

```kotlin
fun main() {
    println("Control Flow & Type Checks")

    println("Basic & traditional way...")
    val a = 1
    val b = 2
    /*
    if (a < b) maxNumber = b
    var maxNumber: Int
    if (a > b) {
        maxNumber = a
    } else {
        maxNumber = b
    }
    */

    val angkaMaksimal = if (a > b) {
        println("Sepertinya a adalah angka maksimal :)")
        a
    } else {
        println("Sepertinya b adalah angka maksimal :(")
        b
    }

    println("Angka maksimalnya adalah $angkaMaksimal")

    println("Ketika expressions...")

    val x: Any = 1
    when (x) {
        1 -> println("x == 1")
        2 -> println("x == 2")
        else -> println("x adalah sesuatu yang lain")
    }

    println("Multiple Options")
    when (x) {
        0, 1 -> println("x is 0 or 1")
        else -> println("x adalah sesuatu yang lain")
    }

    println("Ranges")
    when (x) {
        in 1..10 -> println("x adalah range")
        in listOf(2, 4, 6, 8, 10, 12, 14, 16, 18, 20) -> println("angka yang valid pada x")
        !in 10..20 -> println("x berada di luar jarak range")
        else -> println("x bukan dari salah satu angka diatas :/")
    }

    println("Casting & Smart Casting")
    when (x) {
        is String -> println("Panjang x: ${x.length}")
        is Int -> println("Hasil x: $x")
        else -> println("X adalah sesuatu yang lain")
    }

    println("Replacing if/elseif/else with when")
    var y = 2
    /*
    if (y % 2 != 0) {
        println("y is odd")
    } else if (y % 2 == 0) {
        println("y is even")
    } else {
        println("y is funky")
    }
     */
    when {
        y % 2 != 0 -> println("y adalah ganjil")
        y % 2 == 0 -> println("y adalah genap")
        else -> println("y adalah gak tau :v")
    }

    println("For Loops")
    for (i in 1..3) {
        println(i)
    }

    println("Fancier For Loops...")
    for (i in 6 downTo 0 step 2) {
        println(i)
    }

    println("For Loops Dengan Collections")
    val koleksiAnbiDev = listOf("Silahkan", "Ikuti", "Terus", "Kelanjutan", "Dari", "AnbiDev!")

    for (item in koleksiAnbiDev) println(item)

    println("For Loops Dengan Collections pada Indices")
    for (i in koleksiAnbiDev.indices) {
        println("$i : ${koleksiAnbiDev[i]}")
    }

    println("For Loops Dengan Collections Untuk Items & Indices")
    for ((index, value) in koleksiAnbiDev.withIndex()) {
        println("$index : $value")
    }

    println("While Loops")
    var number = 12
    while (number > 0) {
        number--
        println("Dalam pengurangan, harap sabar...")
    }

    do {
        val anotherNumber = 0
        println("Do While...")
    } while (anotherNumber > 0)

    println("Break...")
    number = 12
    while (number > 0) {
        number --
        if (number % 5 == 0) break
        println("Dalam pengurangan, harap sabar...")
    }

    println("Continue...")
    number = 12
    while (number > 0) {
        number--
        if (number % 2 == 0) continue
        println("Dalam pengurangan, harap sabar...")
    }
}
```

> Happy Code y'all!