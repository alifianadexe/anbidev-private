+++
authors = "J3ndra"
tutorials = ["kotlin"]
cover = "/post/kotlin.jpg"
date = 2020-09-22T07:00:00Z
description = "Kotlin basic part 3 yang membahas tentang Functions"
series = "Kotlin Basic"
shortcode = "Kotlin Basic : Part 3"
status = "publish"
sumber = ["https://kotlinlang.org/docs/reference/"]
tags = ["kotlin"]
title = "Kotlin Basic : Part 3 - Functions"
type = ["tutorials", "tutorial"]
url = "/kotlin-basic-part-3/"
toc = true
[author]
images = "/img/j3ndra.jpg"
name = "J3ndra"

+++

# Every Programming Language Need Functions

<hr>

Pada part 3 ini, Kita akan membahas tentang Functions yang terdapat pada Kotlin. Mari Kita jelajahi satu-persatu.

<br>

## Mari mengeksplor &nbsp; _main()_ &nbsp; function

<hr>

```kotlin
fun printHello() {
    println ("Hello World")
}

fun main() {
	printHello()
}

=> Hello World
```

Anda mendifinisikan sebuah kunci menggunakan `fun`, diikuti nama dari fungsi. Seperti bahasa pemprogramman yang lain, tanda `()` adalah argumen sebuah fungsi, _jika dibutuhkan_.

Tanda `{}` tempat dimana kita akan menuliskan kode. Dan tidak ada return type untuk fungsi ini karena tidak mereturn apapun.

<br>

### Buat file Kotlin

1. Buka IntelliJ IDEA.
2. Jika kalian masih berada di panel utama, klik saja <br> **New Project -> Kotlin -> JVM | IDEA**. <br> Pada panel <br> **File -> New -> Project -> New Project -> Kotlin -> JVM | IDEA**. <br> Namai Project Name sesuai keinginan Anda.
3. Pada Folder `src`, buat file baru dengan cara klik kanan pada folder `src`,<br> **New -> New Kotlin File/Class -> New File** (Namai sesuka Anda).

<br>

### Tambahkan kode dan jalankan program

1. Seperti pada bahasa pemprogramman lain, Kotlin menggunakan `main()` functions untuk _entry point_ sebuah eksekusi. Semua argument pada command line di pass dalam bentuk _array string_.

   ```kotlin
   fun main(args: Array<String>) {
       println("Hello, world!")
   }
   ```

   > Tip: Pada Kotlin 1.3, jika `main()` fucntions tidak menggunakan parameters. Anda tidak perlu mendifinisikan sebuah `args`.

   Sama seperti `printHello()` function, function tersebut tidak me`return` sebuah _statement_. Tetapi, setiap function pada Kotlin me-`return` sesuatu, bahkan jika tidak dibuat secara spesifik.

   Setiap function seperti `main()` me-`return` sebuah tipe, yaitu `kotlin.Unit`, dimana penyebutan pada Kotlin untuk mengatakan bahwa tidak ada nilai.

   > Note: Ketika sebuah function return `kotlin.Unit`, Anda tidak perlu mendefinisikannya. Hal ini berbeda seperti bahasa pemrogramman yang lain dimana anda harus mendefinisikan untuk return nothing.

2. Untuk menjalankan program, klik pada segitiga hijau disebelah `fun main()`. Pilih **Run 'HelloKt'** pada pilihan.

3. **IntelliJ IDEA** akan meng*compile* dan menjalankan kode yang dibuat. Hasil dari kode Anda nanti akan nampak pada LOG dibawah seperti digambar.

   !["Jalankan Run (Segitiga Hijau) Pada fun main()"](/post/kotlin-basic-part-3-01.jpg "Jalankan Run (Segitiga Hijau) Pada fun main()")

   !["Output dari fungsi main()"](/post/kotlin-basic-part-3-02.jpg "Output dari fungsi main()")

   > Java programmers: Jika Anda menggunakan instalasi IntelliJ IDEA sebelumnya daripada menginstal versi yang baru, Anda mungkin akan kesulitan dalam compile Kotlin.

   > Pastikan project anda menggunakan versi JDK yang cocok. Lihat [disuksi di Stack Overflow](https://stackoverflow.com/a/44907745) and the [Mengganti project SDK documentation](https://www.jetbrains.com/help/idea/sdk.html#change-project-sdk) untuk IntelliJ IDEA.

<br>

### Mempassing argument ke main()

Karena Anda menjalankan dari IntelliJ IDEA dan bukan dari command line, Anda perlu menspesifik argument pada program dengan cara yang beda.

1. Pilih **Run -> Edit Configurations**. **Run/Debug Configurations** windows.
2. Ketik `Kotlin` pada **Program arguments**.
3. Klik **OK**.

   !["Window Pada Run/Debug Configuration"](/post/kotlin-basic-part-3-03.jpg "Window Pada Run/Debug Configuration")

4. Ubah kode menggunakan string template

   > [String template](https://kotlinlang.org/docs/reference/basic-types.html#string-templates) memasukkan sebuah variable atau expression ke sebuah string, dan `$` menspesifik bagian dari string yang berupa variable atau expression. `{}` digunakan untuk memasukkan sebuah arguments jika ada

5. Pada **Hello.kt**, ubah message untuk menggunakan argument pertama yang digunakan untuk mempass pada program, `args[0]` daripada `"world"`.

   ```kotlin
   fun main(args: Array<String>) {
       println("Hello, ${args[0]}")
   }
   ```

6. Jalankan program dan lihat output yang keluar

   ```kotlin
   => Hello, Kotlin
   ```

<br>

## Kenapa Hampir Semuanya Memiliki Value

<hr>

Pada bahasa pemprogramman memiliki sebuah _statement_, dimana baris pada kode tidak memiliki _value_. Pada Kotlin, hampir semuanya adalah _expression_ dan memiliki value bahkan jika itu `kotlin.Unit`.

1. Pada **Hello.kt**, tulis kode pada `main()` untuk memasukkan `println()` pada pemanggilan variable `isUnit` dan menuliskan message.

   > `println()` tidak mengembalikan sebuah value, sehingga mereturn `kotlin.Unit`.

   ```kotlin
   fun main(args: Array<String>) {
       // Will assign kotlin.Unit
       val isUnit = println("This is an expression")
       println(isUnit)
   }
   ```

2. Jalankan program anda. pada `println()` pertama memprint sebuah string `"Ini adalah sebuah expression"`. Pada `println()` kedua akan mereturn value `println()` pertama, itu dia, `kotlin.Unit`.

   ```kotlin
   => This is an expression
   kotlin.Unit
   ```

   !["Output Fungsi main()"](/post/kotlin-basic-part-3-04.jpg "Output Fungsi main()")

3. Mari kita coba yang lain. Coba deklarasikan `val` dengan nama `temperature` dan initialisasi dengan nilai 10.
4. Deklarasikan `val` lain dengan nama `isHot` dan tulis return value degan `if`/`else` statement untuk `isHot`, seperti contoh dibawah. Karena `isHot` sebuah _expression_, Anda bisa menggunakan value dari `if` sebagai _expression_ juga.

   ```kotlin
   val temperature = 10
   val isHot = if (temperature > 50) true else false
   println(isHot)
   ```

   ```kotlin
   => false
   ```

5. Gunakan value dari _expression_ pada string tempalte. Tambahkan beberapa kode untuk mengecek temperature untuk mendifinisikan sebuah suhu itu dingin atau hangat.

   ```kotlin
   fun main(args: Array<String>) {
       val temperature = 10
       val message = "Temperature air adalah ${ if (temperature > 50) "terlalu hangat" else "OK" }."
       println(message)
   }
   ```

   ```kotlin
   => Temperature air adalah OK.
   ```

   > **Note:** Loops merupakan pengecualian dari "Semuanya memiliki value". Tidak ada value untuk `for` dari loops atau `while` loops, sehingga mereka tidak memiliki value. Jika anda mencoba menuliskan loop value pada sesuatu, compiler akan memberikan error.

<br>

## Lets Get Into It

<hr>

1. Tulis function dengan nama `feedTheFish` dan panggil `randomDay()` untuk mendapatkan hari secara randon. Gunakan _string template_ untuk menuliskan `food` untuk menentukan makanan ikan pada hari itu. Untuk sekarang, ikan-ikan ini memakan makanan yang sama setiap hari.

   ```kotlin
   fun feedTheFish() {
       val day = randomDay()
       val food = "pellets"
       println ("Hari ini hari $day dan ikan memakan $food")
   }

   fun main(args: Array<String>) {
       feedTheFish()
   }
   ```

2. Tulis function `randomDay()` untuk menentukan hari secara random dari array dan berikan return

   ```kotlin
   fun randomDay() : String {
       val week = arrayOf ("Senin", "Selasa", "Rabu", "Kamis",
               "Jumat", "Sabtu", "Minggu")
       return week[Random().nextInt(week.size)]
   }
   ```

3. Untuk `Random()` dan `nextInt()` function didefinisikan melalui `java.util.*`. Pada baris paling atas, Anda perlu menambahkan

   ```kotlin
   import java.util.*
   ```

   > **Tip:** Sebelum Anda mengimport, `Random()` memberikan error berupa _unresolver reference_ pada IntelliJ IDEA. Untuk menambahkannya secara otomatis, klik pada `Random()`, lalu tekan `Alt+Enter` (`Option+Enter` pada Mac). Pilih **Import -> java.util.Random**.

4. Jalankan program yang anda buat, dan liat output

   ```kotlin
   => Hari ini hari Jumat dan ikan memakan pellets
   ```

<br>

### Menggunakan when expression

Untuk mengenal lebih jauh, mari kita coba untuk mengubah kode saat memilih makanan yang berbeda dengan hari yang berbeda menggunakan expression `when`.

Hampir mirip dengan `switch` pada bahasa pemprogramman yang lain, tetapi `when` secara otomatis melakukan `break` setiap akhir dari kode yang dimasukkan kedalam `when`. Hal ini juga dapat memastikan bahwa mencakup cabang dari `when` saat anda memeriksa enum.

1. Coba tambahkan function `fishFood()` dimana hari berupa `String` dan mengembalikan makanan ikan pada hari tertentu berupa `String`. Gunakan `when()` sehingga setiap hari, ikan akan mendapatkan makanan secara spesifik. Jalankan program yang dibuat dan jalankan beberapa kali untuk mendapatkan hasil yang berbeda.

   ```kotlin
   fun fishFood (day : String) : String {
       var food = ""
       when (day) {
           "Senin" -> food = "flakes"
           "Selasa" -> food = "pellets"
           "Rabu" -> food = "redworms"
           "Kamis" -> food = "granules"
           "Jumat" -> food = "mosquitoes"
           "Sabtu" -> food = "lettuce"
           "Minggu" -> food = "plankton"
       }
       return food
   }

   fun feedTheFish() {
       val day = randomDay()
       val food = fishFood(day)

       println ("Hari ini hari $day dan ikan memakan $food")
   }

   fun main(args: Array<String>) {
       feedTheFish()
   }
   ```

   ```kotlin
   => Hari ini hari Kamis dan ikan memakan granules
   ```

2. Tambahkan branch pada `when` expression menggunakan `else`. Untuk mengetes, coba hapus `Selasa` dan `Sabtu`.

   Default branch digunakan untuk memastikan kita telah mendapatkan value sebelum di return, sehingga kita tidak perlu initialisasi lagi. Karena kode yang akan kita buat menetapkan `String` pada makanan hanya sekali, Kita bisa mendeklarasikannya menggunakan `val` daripada `var`.

   ```kotlin
   fun fishFood (day : String) : String {
       val food : String
       when (day) {
           "Senin" -> food = "flakes"
           "Rabu" -> food = "redworms"
           "Kamis" -> food = "granules"
           "Jumat" -> food = "mosquitoes"
           "Minggu" -> food = "plankton"
           else -> food = "tidak ada"
       }
       return food
   }
   ```

3. Karena setiap expression memiliki value, Anda dapat membuat kode sedikit lebih ringkas. Kita dapat mengembalikan expression value `when` secara langsung, dengan cara menghilangkan `food` variable. Nilai `when` expression adalah nilai terakhir dari expression.

   ```kotlin
   fun fishFood (day : String) : String {
       return when (day) {
           "Senin" -> "flakes"
           "Rabu" -> "redworms"
           "Kamis" -> "granules"
           "Jumat" -> "mosquitoes"
           "Minggu" -> "plankton"
           else -> "tidak ada"
       }
   }
   ```

   Versi final :

   ```kotlin
   import java.util.*    // required import

   fun randomDay() : String {
       val week = arrayOf ("Senin", "Selasa", "Rabu", "Kamis",
               "Jumat", "Sabtu", "Minggu")
       return week[Random().nextInt(week.size)]
   }

   fun fishFood (day : String) : String {
       return when (day) {
           "Senin" -> "flakes"
           "Rabu" -> "redworms"
           "Kamis" -> "granules"
           "Jumat" -> "mosquitoes"
           "Minggu" -> "plankton"
           else -> "tidak ada"
       }
   }

   fun feedTheFish() {
       val day = randomDay()
       val food = fishFood(day)

       println ("Hari ini hari $day dan ikan memakan $food")
   }

   fun main(args: Array<String>) {
       feedTheFish()
   }
   ```

   ```kotlin
   => Hari ini hari Selasa dan ikan memakan tidak ada
   ```

<br>

## Mengenal Default Values & Compact Functions

<hr>

Pada Kotlin, Anda dapat _passing_ sebuah _arguments_ dengan hanya menyebut nama parameter. Anda juga dapat menspesifikasi _default values_ dari parameter. Jika argument tidak disediakan oleh pemanggil, _default values_ akan otomatis terpakai.

Selanjutnya, ketika Anda menulis methods (member functions), ini berarti akan membantu Anda untuk menghindari menulis kode yang sama pada method yang sama.

1. Pada **Hello.kt**, tulis `swim()` function dengan `String` untuk parameter `speed` yang akan digunakan untuk print kecepatan ikan. `speed` parameter memiliki value default berupa `"fast"`.

   ```kotlin
   fun swim(speed: String = "fast") {
      println("swimming $speed")
   }
   ```

2. Pada `main()` function, panggil `swim()` function dengan tiga (3) cara :

   - Pertama memanggil function dengan _default value_.
   - Kedua dengan memanggil function dan pass `speed` parameter tanpa menggunakan nama parameter.
   - Terakhir dengan menyebut nama parameter.

   ```kotlin
   swim()   // uses default speed
   swim("slow")   // positional argument
   swim(speed="turtle-like")   // named parameter
   ```

   ```kotlin
   => swimming fast
   swimming slow
   swimming turtle-like
   ```

   > **Note:** Argument tidak harus menggunakan nama parameter; Anda dapat langsung mempass arguments sesuai dengan urutan parameter. Tetapi dengan default values, ini dapat sedikit membingungkan, jadi praktek terbaiknya adalah meletakkan sebuah parameter tanpa default parameter terlebih dahulu dan menyebut parameter default setelahnya.

<br>

### Menambahkan Required Parameters

Jika tidak spesifik default untuk parameter, _corresponding_ pada argument akan secara otomatis terpass.

1. Pada **Hello.kt**, tulis `shouldChangeWater` functions yang memiliki tiga (3) parameter: `day`, `temperature`, dan `dirty` level. Function memberikan return `true` jika air harus diganti, dimana jika hari itu adalah hari Minggu, jika suhu terlalu tinggi, atau jika air terlalu kotor. Hari pada mingguan diperlukan, tetapi default temperature adalah 22 dan _default dirty_ level adalah 20.

   Gunakan `when` expression tanpa argument, dimana Kotlin bertindak sebagai `if/else if`.

   ```kotlin
   fun shouldChangeWater (day: String, temperature: Int = 22, dirty: Int = 20): Boolean {
       return when {
           temperature > 30 -> true
           dirty > 30 -> true
           day == "Sunday" ->  true
           else -> false
       }
   }
   ```

2. Panggil `shouldChangeWater()` dari `feedTheFish()` dan sediakan hari juga. `day` parameter tidak memiliki nilai default, jadi Kita harus menspesifikasi sebuah argument. Parameter dua (2) yang lain dari `shouldChangeWater()` memiliki default values, jadi Kita tidak menulis argument lagi.

   ```kotlin
   fun feedTheFish() {
       val day = randomDay()
       val food = fishFood(day)

       println ("Hari ini hari $day dan ikan memakan $food")
       println("Ganti air: ${shouldChangeWater(day)}")
   }
   ```

   ```kotlin
   => Hari ini hari Sabtu dan ikan memakan tidak ada
   Ganti air: false
   ```

<br>

### Buat Compact Functions

`when` expression yang Anda tulis pada sebelumnya memiliki banyak logic yang dimasukkan kedalam kode yang ringkas. Jika Anda ingin membuatnya lebih banyak, atau kondisi jika dibuat sedikit lebih rumit, Anda bisa menggunakan `well-named` local variables. Tapi pada Kotlin, Kita menggunakannya dengan compact functions.

Compact functions atau [single-expression functions](https://kotlinlang.org/docs/reference/idioms.html#single-expression-functions) adalah pattern yang biasa pada Kotlin. Ketika sebuah functions mereturn hasil dari single expression, Anda bisa menspesifikasi body dari functions setelah `=`, atau menghilangkan `{}` dan hilangkan `return`.

1. pada **Hello.kt**, tambahkan compact functions dan coba test

   ```kotlin
   fun isTooHot(temperature: Int) = temperature > 30

   fun isDirty(dirty: Int) = dirty > 30

   fun isSunday(day: String) = day == "Minggu"
   ```

2. Ubah `shouldChangeWater()` untuk memanggil function yang baru saja kita buat.

   ```kotlin
   fun shouldChangeWater (day: String, temperature: Int = 22, dirty: Int = 20): Boolean {
       return when {
           isTooHot(temperature) -> true
           isDirty(dirty) -> true
           isSunday(day) -> true
           else  -> false
       }
   }
   ```

3. Coba jalankan program yang Anda buat. Output pada `println()` dengan `shouldChangeWater` harus seperti dengan sebelum Kita menulis menggunakan _Compact Functions_.

<br>

### Default Values

Default value sebuah parameter tidak harus berupa sebuah value. Default value dapat berupa function yang lain, seperti contoh dibawah ini

```kotlin
fun shouldChangeWater (day: String, temperature: Int = 22, dirty: Int = getDirtySensorReading()): Boolean {
	/*...*/
}
```

> **Note:** Sebuah functions yang digunakan sebagai default value dievaluasi juga saat runtime, jadi anda tidak perlu memberikan operation seperti file read atau large memory allocation pada function. Operasi selalu dieksekusi setiap function yang Anda buat dipanggil, dimana akan memungkinkan perlambatan pada program yang Anda buat.

<br>

## Filtering Data

<hr>

1. pada **Hello.kt**, definisikan list dekorasi aquarium menggunakan `listOf()`.

   ```kotlin
   val decorations = listOf ("rock", "pagoda", "plastic plant", "alligator", "flowerpot")
   ```

2. Buat `main()` baru atau mungkin kalian bisa saja membuat file yang baru. Function yang dibuat akan hanya menunjukkan kata yang dimulai dengan huruf 'p'. <br><br>Kode yang digunakan untuk memfilter dimasukkan didalam `{}` dan `it` menunjukkan tiap item sebagai filter loop. Jika expression returns `true`, ada item yang dimulai dengan 'p'

   ```kotlin
   fun main() {
       println( decorations.filter {it[0] == 'p'})
   }
   ```

3. Coba Jalankan program yang Anda buat dan coba liat output

   ```kotlin
   => [pagoda, plastic plant]
   ```

<br>

### Compare Eager dan Lazy Filters

Jika Anda familiar dengan filter pada beberapa bahasa pemprograman, Anda membayangkan apakah filter pada Kotlin itu berupa _eager_ atau _lazy_. Apakah result ditunjukkan secara langsung, atau kapan list dapat diakses? Pada Kotlin, semua cara dapat digunakan sesuai dengan yang Anda butuhkan.

Secara default, `filter` adalah _eager_ tetapi terkadang setiap Anda menggunakan filter, list sudah terbuat secara otomatis.

Untuk membuat _lazy filter_, anda dapat menggunakan [Sequence](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/index.html). Dimana koleksi hanya dapat melihat satu (1) item dalam satu (1) waktu, mulai dari awal hingga akhir. Ini merupakan API yang dibutuhkan untuk _lazy filter_.

1. Pada **Hello.kt**, ubah kode untuk memasukkan _filtered list_ pada variable `eager`, lalu print.

   ```kotlin
   fun main() {
       val decorations = listOf ("rock", "pagoda", "plastic plant", "alligator", "flowerpot")

       // eager, creates a new list
       val eager = decorations.filter { it [0] == 'p' }
       println("eager: $eager")
    }
   ```

2. Kode dibawah ini menyeleksi filter menggunakan `Sequence` dengan `asSequence()`. Tulis sequence pada variable `filtered` dan print.

   ```kotlin
   // lazy, will wait until asked to evaluate
   val filtered = decorations.asSequence().filter { it[0] == 'p' }
   println("filtered: $filtered")
   ```

   Ketika Anda return hasil filter sebagai `Sequence`, `filtered` variable tidak akan menangkap list yang baru -- variable tersebut akan menyimpan `Sequence` element dan filter diterapkan pada elemen tersebut. Setiap kali Anda mengakses `Sequence`, filter secara otomatis akan diterapkan dan result akan dikembalikan.

3. Paksa evaluation pada sequence dengan mengkonvert menjadi `List` dengan `toList()`. Print result

   ```kotlin
   // force evaluation of the lazy list
   val newList = filtered.toList()
   println("new list: $newList")
   ```

4. Coba jalankan program yang Anda buat.

   ```kotlin
   val decorations = listOf ("rock", "pagoda", "plastic plant", "alligator", "flowerpot")

   fun main() {
       println( decorations.filter {it[0] == 'p'})

       // eager, creates a new list
       val eager = decorations.filter { it [0] == 'p' }
       println("eager: $eager")

       // lazy, will wait until asked to evaluate
       val filtered = decorations.asSequence().filter { it[0] == 'p' }
       println("filtered: $filtered")

       // force evaluation of the lazy list
       val newList = filtered.toList()
       println("new list: $newList")
   }

   =>[pagoda, plastic plant]
   eager: [pagoda, plastic plant]
   filtered: kotlin.sequences.FilteringSequence@41cf53f9
   new list: [pagoda, plastic plant]
   ```

   Untuk melihat apa yang terjadi pada `Sequence` dan _lazy evaluation_, gunakan `map()` function. Function tersebut digunakan untuk menjalankan _simple transformation_ pada setiap elemen di sequence.

5. Dengan list `decorations` yang sama, buat _transformations_ dengan `map()` dan return element yang terpass. Tambahkan `println()` untuk menampilkan tiap element yang diakses dan tambahkan sequence pada variable `lazyMap.`

   ```kotlin
   	val lazyMap = decorations.asSequence().map {
           println("access: $it")
           it
       }
   ```

6. Print `lazyMap`, print element pertama dari `lazyMap` menggunakan `first()` dan print `lazymap` yang terconvert menjadi `List`.

   ```kotlin
   	println("lazy: $lazyMap")
       println("-----")
       println("first: ${lazyMap.first()}")
       println("-----")
       println("all: ${lazyMap.toList()}")
   ```

7. Jalankan program yang Anda buat dan liat output. Print `lazyMap` hanyak print referensi pada `Sequence` -- `println()` didalamnya tidak terpanggil. Print element pertama hanya dapat digunakan untuk mengakses element pertama. Convert `Sequence` menjadi `List` membuatnya dapat mengakses semua `List`.

   ```kotlin
   => lazy: kotlin.sequences.TransformingSequence@5a10411
   -----
   access: rock
   first: rock
   -----
   access: rock
   access: pagoda
   access: plastic plant
   access: alligator
   access: flowerpot
   all: [rock, pagoda, plastic plant, alligator, flowerpot]
   ```

8. Coba buat `Sequence` yang baru menggunakan original filter sebelum menggunakan `map`. Print hasil.

   ```kotlin
       val lazyMap2 = decorations.asSequence().filter {it[0] == 'p'}.map {
           println("access: $it")
           it
       }
       println("-----")
       println("filtered: ${lazyMap2.toList()}")
   ```

9. Jalankan program yang dibuat dan amati hasil output. Dengan mendapatkan elemen pertama, `println` didalam hanya terpanggil ketika ada elemen yang dapat diakses

   ```kotlin
   -----
   access: pagoda
   access: plastic plant
   filtered: [pagoda, plastic plant]
   ```

<br>

### Final Result

1. **FilterOne.kt**

   ```kotlin
   val decorations = listOf ("rock", "pagoda", "plastic plant", "alligator", "flowerpot")

   fun main() {
      println( decorations.filter {it[0] == 'p'})

      // eager, creates a new list
      val eager = decorations.filter { it [0] == 'p' }
      println("eager: $eager")

      // lazy, will wait until asked to evaluate
      val filtered = decorations.asSequence().filter { it[0] == 'p' }
      println("filtered: $filtered")

      // force evaluation of the lazy list
      val newList = filtered.toList()
      println("new list: $newList")
   }
   ```

2. **FilterTwo.kt**

   ```kotlin
   fun main() {
      val lazyMap = decorations.asSequence().map {
         println("access: $it")
         it
      }

      val lazyMap2 = decorations.asSequence().filter {it[0] == 'p'}.map {
         println("access: $it")
         it
      }
      println("-----")
      println("filtered: ${lazyMap2.toList()}")

      println("lazy: $lazyMap")
      println("-----")
      println("first: ${lazyMap.first()}")
      println("-----")
      println("all: ${lazyMap.toList()}")
   }
   ```

<br>

## Lambdas & Higher-Order Functions

<hr>

### Lambdas

Kotlin juga mendukung lambda dimana lambda merupakan expression yang digunakan untuk membuat suatu fungsi. Daripada anda membuat functions menggunakan nama, Anda dapat mendeklarasikan fungsi tanpa menggunakan nama.

Bagian ini yang membuat expression lambda sangat berguna, dan juga sekarang lambda dapat meneruskan suatu data. Dalam bahasa lain, lambda bisa disebut funsgi anonim, literal funtions atau nama yang mirip lainnya.

<br>

### Higher-Order Functions

Anda dapat membuat _High-Order Functions_ dengan meneruskan lambda ke function yang lain. Pada kode yang sebelumnya, Anda telah membuat _Higher-Order Functions_ menggunakan `filter`. Anda meneruskan lambda expression untuk difilter sebagai kondisi yang harus dicek: `{it[0] == 'p'}`

Hampir sama dengan `map`, `map` juga termasuk _Higher-Order Function_, dan lambda yang diberikan berupa transformasi yang akan diterapkan.

<br>

### Belajar tentang lambda

1. Seperti named Functions, lambda juga dapat memiliki parameter. Untuk lambda, parameter (dan tipe jika perlu) berada di sebelah kiri dari apa yang disebut function arrow `->`. Kode yang akan dieksekusi berada di sebelah kanan function arrow. Setelah lambda diterapkan pada variable, Anda dapat memanggilnya seperti function

   Gunakan REPL (**Tools -> Kotlin -> Kotlin REPL)**, coba kode dibawah ini

   ```kotlin
   var dirtyLevel = 20
   val waterFilter = { dirty : Int -> dirty / 2}
   println(waterFilter(dirtyLevel))
   ```

   ```kotlin
   => 10
   ```

   !["Kotlin ERPL Output"](/post/kotlin-basic-part-3-06.jpg "Kotlin ERPL Output")

   Dalam contoh ini, lambda menggunakan `Int` untuk `dirty` dan return `dirty / 2`.

2. Sintaks Kotlin untuk tipe functions terkait erat dengan sintaks untuk lambda. Gunakan sintaks ini untuk mendeklarasikan variable yang memiliki functions.

   ```kotlin
   val waterFilter: (Int) -> Int = { dirty -> dirty / 2 }
   ```

   Bedah kode:

   - Buat variable `waterFilter.`
   - `waterFilter` dapat berupa functions yang berisi `Int` dan mereturn `Int`.
   - Memasukkan lambda kedalam `waterFilter`.
   - Lambda mereturn value dari arguments `dirty` yang dibagi dua (2)

   Perhatikan bahwa Anda tidak perlu menspesifik tipe dari tipe argument lambda. Tipe tersebut secara otomatis terisi oleh tipe interface.

<br>

### Membuat Higher-Order Function

Sejauh ini, contoh dari lambda hampir terlihat sama dengan function. Kekuatan sesungguhnya akan Kita mulai sekarang.

1. Tulis _Higher-Order function_. Ini adalah contoh basic, sebuah function yang menyimpan dua (2) arguments. Argument pertama adalah Integer. Sedangkan argument kedua berupa functions yang terdapat Integer dan me*return* Integer. Coba kode ini didalam REPL.

   ```kotlin
   fun updateDirty(dirty: Int, operation: (Int) -> Int): Int {
      return operation(dirty)
   }
   ```

   Body dari kode memanggil function yang diteruskan sebagai argument kedua, dan meneruskan argument pertama ke dalamnya.

2. Untuk memanggil function tersebut, teruskan Integer dan juga Function nya.

   ```kotlin
   val waterFilter: (Int) -> Int = { dirty -> dirty / 2 }
   println(updateDirty(30, waterFilter))
   ```

   ```kotlin
   => 15
   ```

   Function yang Anda pass tidak harus berupa lambda; function tersebut dapat berupa named function sebagai gantinya. Untuk menerapkan argument sebagai regular functions, gunakan `::` operator. Dengan cara ini, Kotlin tahu bahwa Anda meneruskan function _reference_ sebagai argument, bukan untuk memanggil sebuah function.

3. Coba pass regular named function ke `updateDirty()`.

   ```kotlin
   fun increaseDirty( start: Int ) = start + 1

   println(updateDirty(15, ::increaseDirty))
   ```

   ```kotlin
   => 16
   ```

   > **Note:** Kotlin lebih memilih bahwa parameter apapun yang mengambil function adalah parameter terakhir. Ketika menggunakan Higher-Order Function, Kotlin memiliki sintaks khusus, yang disebut [last parameter call syntax](https://kotlinlang.org/docs/reference/lambdas.html#passing-a-lambda-to-the-last-parameter), yang memungkinkan Anda membuat kode lebih ringkas. Dalam kasus ini, Anda bisa meneruskan lambda untuk function parameter, tetapi Anda tidak perlu memasukkan lambda di dalam `{}`.

   ```kotlin
   var dirtyLevel = 19
   dirtyLevel = updateDirty(dirtyLevel) { dirtyLevel -> dirtyLevel + 23}
   println(dirtyLevel)
   ```

   ```kotlin
   => 42
   ```

   ## End

   Untuk selanjutnya, kita akan membahas lebih dalam tentang kotlin Classes dan Object. Silahkan tunggu ya kawan-kawan. 😉

   > Happy Code y'all!
