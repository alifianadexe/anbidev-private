+++
authors = "J3ndra"
tutorials = ["kotlin"]
cover = "/post/kotlin.jpg"
date = 2020-09-08T11:00:00Z
description = "Kotlin basic part 2 yang membahas control flow seperti if, when expressions dan juga basic returns, jumps."
series = "Kotlin Basic"
shortcode = "Kotlin Basic : Part 2"
status = "publish"
sumber = ["https://kotlinlang.org/docs/reference/"]
tags = ["control-flow", "kotlin"]
title = "Kotlin Basic : Part 2 - Control Flow, Returns & Jumps"
toc = true
type = ["tutorials", "tutorial"]
url = "/kotlin-basic-part-2/"
[author]
images = "/img/j3ndra.jpg"
name = "J3ndra"

+++
# More Kotlin

Kali ini Kita akan membahas Kotlin Basic tentang apa itu _Control Flow_, _Returns & Jumps_ pada Kotlin. Jika Kalian mengingat [Part 1](https://www.anbidev.com/tutorials/kotlin/kotlin-basic-part-1/), Kalian melihat pada akhir tutorial ada serpihan code yang mungkin bagi Kalian ada yang sudah mengenal.

Yap, itu adalah <ins>Control Flow</ins> pada kotlin, terdapat _If-else Expression_, _While Expression_ dan juga yang lain. Mari kita kupas satu persatu!

<br>

## If Expression

<hr>

Ada beberapa cara menulis If Expression pada Kotlin, yaitu

```kotlin

// 1. Cara simple
var max = a
if (a < b) max = b

// 2. Menggunakan else
var max: Int
if (a > b) {
    max = a
} else {
    max = b
}

// Sebagai expression
val max = if (a > b) a else b
```

Dari sini kita bisa melihat ada banyak cara untuk menggunakan _If Expression_ pada Kotlin. Lalu, apa bedanya? Mari kita Ulik.

Pada cara **pertama**, kita memberikan nilai pada object `max` a yang dimana kita menggunakannya pada `if` operation.

Jika nilai `a` <ins>lebih kecil</ins> dari nilai `b` maka pada fungsi `If` Kotlin akan langsung me-return value, yaitu mengubah nilai pada object `max` menjadi `b`, jika nilai `a` lebih kecil dari `b`

Cara **kedua**, kita menggunakan `else` untuk fungsi `if` dimana pada `block` atau `{}` merupakan return value yang kita inginkan.

Pada block pertama, jika nilai `a` lebih besar dari nilai `b` maka tinggal kita tulis code yang kita inginkan seperti membuat nilai object `max` menjadi `a`.

Dan juga jika nilai `a` ternyata lebih kecil dari nilai `b`, maka pada block kedua kita mereturn value yang kita inginkan, seperti object `max` kita beri nilai `b.`

Cara **ketiga**, kita membuat object `max` sebagai sebuah `Expression` dimana,

    if (a > b)

Jika `a` ternyata lebih besar dari `b` maka akan langsung membuat value dari object `max` menjadi `a` dan begitu juga sebaliknya karena kita memasukkan return value berupa `a else b.`

Tapi Kita juga bisa loh membuat else digabungkan langsung dengan `Expression`, maka kode nya akan menjadi seperti ini

```kotlin
fun check(x: Int, y: Int) {
    val result = if (x >= y) {
        println("x >= y")
        true
    } else {
        println("x bukan >= y")
        false
    }
    println("Result [ $result ]\n- - - - - - - -")
}

// Jika kalian ingin melihat hasilnya sendiri pada IntelliJ
fun main() {
    println(check(4, 3))
}
```

Kita membuat object `result` yang dimana akan mengecek jika nilai `x` dan `y` lebih kecil \~\~\~

Oh ya, untuk pemahaman tentang perbedaan `<` / `>` / `<=` / `>=`, kalian bisa melihat penjelasannya [disini](https://kotlinlang.org/docs/reference/operator-overloading.html#comparison).

Kembali pada penjelasan, saat object mendeteksi bahwa `x` lebih kecil dari `y` maka akan menulis nilai `x >= y` dan juga `true`. Dan begitu sebaliknya yang tertulis pada block ke dua.

<br>

## When Expression

<hr>

**When Expression** pada Kotlin merupakan _Switch Statement_ dimana ketika ada beberapa statement dan tiap statement memiliki syaratnya masing-masing. Mari kita lihat contoh kode dibawah ini

```kotlin
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> { // Note the block
        print("x is neither 1 nor 2")
    }
}
```

Ketika nilai `x` merupakan `1` maka akan print `x == 1` dan juga yang lain. Setiap statement memili syaratnya masing-masing yang akan di return menggunakan `when` .

Jika nilai tidak ada yang memenuhi syarat suatu statement, maka fungsi `when` akan di return ke `else`.

Jika ada statement yang memiliki beberapa syarat, anda dapat menulis atau menggabungkannya dengan koma `,`.

```kotlin
when (x) {
    0, 1 -> print("x == 0 or x == 1")
    else -> print("otherwise")
}
```

Kita juga dapat mengecek jika sebuah value ada atau tidak di suatu `range` atau `collection`.

```kotlin
when (x) {
    in 1..10 -> print("x is in the range")
    in validNumbers -> print("x is valid")
    !in 10..20 -> print("x is outside the range")
    else -> print("none of the above")
}
```

Dan juga, semenjak Kotlin mengeluarkan _versi 1.3_, sebuah fungsi `when` dapat mengambil sebuah subjek variable seperti kode dibawah ini.

```kotlin
/*
 Kode dibawah ini mungkin Akan anda gunakan jika kalian mulai
 menggunakan Kotlin untuk membuah sebuah Aplikasi Android.
*/
fun Request.getBody() =
        when (val response = executeRequest()) {
            is Success -> response.body
            is HttpError -> throw HttpException(response.status)
        }
```

<br>

## For Loops

<hr>

`for` _loop_ digunakan untuk mengulang (_looping_) sebuah collection dan juga yang list data yang lain. Pada contoh dibawah, Kita akan menggunakan _looping_ menggunakan `range`

```kotlin
println("For Loops")
for (i in 1..3) {
    println(i)
}
```

Kode diatas akan menampilkan sebuah perulangan(_loop_) mulai angka 1 hingga 3 menggunakan `1..3` yaitu `range`. Atau Anda ingin membuatnya lebih _EPIC_

```kotlin
println("Fancier For Loops...")
for (i in 6 downTo 0 step 2) {
    println(i)
}
```

Loop juga dapat digunakan untuk `collection`, seperti

```kotlin
println("For Loops With Collections")
val myCollection = listOf("Hey", "There.", "This", "Is", "AnbiDev!")
for (item in myCollection) println(item)
```

Atau Kalian ingin menggunakan _indeces_ atau `withIndex` library yang tersedia oleh Kotlin

```kotlin
println("For Loops With Collections on Indices")
for (i in myCollection.indices) {
    println("$i : ${myCollection[i]}")
}

println("For Loops With Collections for Items & Indices")
for ((index, value) in myCollection.withIndex()) {
    println("$index : $value")
}
```

<br>

## While Loops

<hr>

`while` & `do while` 🤔?

```kotlin
println("While Loops")
var number = 3

while (number > 0) {
    number--
    println("We're still going to decrement the number...")
}

do {
    val anotherNumber = 0
    println("Do While...")
} while (anotherNumber > 0)

println("break")
```

Mari kita perhatikan kode diatas.

    while number > 0

Yang berarti jika nilai dari object `number` lebih dari 0, maka nilai dari `number` akan dikurangi dengan `number--`.

Dan pada `do while`, sebenarnya sama saja dengan while hanya saja letak lokasi pengecekannya yang berbeda.

Untuk pengecekannya berada di `while` yang dimana jika `anotherNumber`sudah sesuai dengan `anotherNumber` yang berada pada `do`. Maka tidak akan terjadi perulangan atau loop.

<br>

## Returns & Jumps

<hr>

Kotlin memiliki 3 jenis **Jumps** struktur _expression_ seperti

* **return** -> Akan secara default me-return _enclosing_ function terdekat atau _anonymous_ function.
* **break** -> Mematikan _enclosing_ loop terdekat.
* **continue** -> Melanjutkan proses pada _enclosing_ loop terdekat

Semua expression diatas dapat dijadikan expression yang besar, seperti

```kotlin
val s = person.name ?: return
```

Dan tipe yang digunakan adalah **Nothing Type**.

<br>

## Break & Continue Labels

<hr>

Semua expression pada Kotlin dapat di mark dengan sebuah **label**. **Label** mempunyai penanda yang diawali dengan `@` seperti `abc@` , `anbidev@`, `fooBar@` adalah label yang valid (lihat [grammar](https://kotlinlang.org/docs/reference/grammar.html#label)).

Untuk melabeli sebuah expression, kita hanya tinggal menginput label didepan sebuah expression.

```kotlin
loop@ for (i in 1..100) {
    for (j in 1..100) {
        if (...) break@loop
    }
}
```

Dan mengakhirinya dengan `break@loop` yang sama dengan label jumps dan dieksekusi tepat setelah loop ditandai dengan label. Berikut adalah contoh kodenya

```kotlin
fun breakingTheLoop(x: Int, y: Int) {
    myLoop@ for (a in 0..x) {
        for (b in 0..y) {
            println("[ $a ][ $b ]")
            if (b == 10) {
                break@myLoop // Does not break current loop, but the one above it!
            }
        }
    }
}

fun main() {
    println(breakingTheLoop(2, 4))
}
```

<br>

## Return at Labels

<hr>

Dengan fungsi _literals_, _local functions_, _object expressions_ dan juga functions dapat di nested dalam Kotlin. Fungsi returns yang _terqualified_ memungkinkan Kita untuk return diluar function.

Dan yang terpenting adalah gunakan case untuk men-return dari sebuah **lambda** expression. Recall dengan kode seperti ini

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach {
        if (it == 3) return // non-local return directly to the caller of foo()
        print(it)
    }
    println("this point is unreachable")
}

fun main() {
    foo()
}
```

**Return** expressions men-return dengan _enclosing_ function terdekat seperti `foo`.

> **PS** : non-local return hanya dapat disupport dengan **lambda** expressions yang dipass menjadi [inline function](https://kotlinlang.org/docs/reference/inline-functions.html)

Jika Kita perlu men-return sebuah **lambda** expression, Kita harus memberikan label dan mengkualifikasikannya pada **return**.

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach lit@{
        if (it == 3) return@lit // local return to the caller of the lambda, i.e. the forEach loop
        print(it)
    }
    print(" done with explicit label")
}

fun main() {
    foo()
}
```

Sudah pusing belum 🥴? Tenang kok, masih part 2 Xixixixi.

Btw, kode diatas hanya men-return dari **lambda** expression. Untuk selanjutnya, kita dapat membuatnya lebih mudah untuk menggunakan label yang implisit.

Seperti label yang memiliki nama yang sama dengan function dimana akan membuah **lamba** expression dapat lewat.

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach {
        if (it == 3) return@forEach // local return to the caller of the lambda, i.e. the forEach loop
        print(it)
    }
    print(" done with implicit label")
}

fun main() {
    foo()
}
```

Atau juga, hehe banyak ya 😅. Tenang, pilih sesuai dengan _code style_ kalian kok.

Kalian juga dapat menggantikan **lambda** expression dengan [anonymous function](https://kotlinlang.org/docs/reference/lambdas.html#anonymous-functions). Statement **return** pada [anonymous function](https://kotlinlang.org/docs/reference/lambdas.html#anonymous-functions) akan men-return pada dirinya sendiri.

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach(fun(value: Int) {
        if (value == 3) return  // local return to the caller of the anonymous fun, i.e. the forEach loop
        print(value)
    })
    print(" done with anonymous function")
}

fun main() {
    foo()
}
```

<br>

**Catatan :**

Menggunakan local function return seperti contoh diatas hampir sama dengan **continue** pada loop. Tidak ada tujuan yang digunakan untuk **break**, tapi kita dapat mensimulasikannya dengan menambahkan **lambda** dan juga **non-locally** return pada kode, seperti contoh :

<br>

```kotlin
fun foo() {
    run loop@{
        listOf(1, 2, 3, 4, 5).forEach {
            if (it == 3) return@loop // non-local return from the lambda passed to run
            print(it)
        }
    }
    print(" done with nested loop")
}

fun main() {
    foo()
}
```

Ketika men-return sebuah nilai, _parse_ memberikan _preference_ untuk _qualified_ return seperti contoh

```kotlin
return@a 1
```

yang berarti _"return `1` pada label `@a`"_ dan bukan _"mengembalikan label expression `(@a 1)`"_.