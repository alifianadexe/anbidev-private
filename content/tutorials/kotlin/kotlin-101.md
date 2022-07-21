+++
authors = "J3ndra"
tutorials = ["kotlin"]
cover = "/post/kotlin.jpg"
date = 2020-08-31T17:00:00Z
description = "Mari berkenalan dengan kotlin"
series = ""
shortcode = "Pendahuluan"
status = "publish"
sumber = ["https://kotlinlang.org/", "https://developer.android.com/kotlin?hl=id"]
tags = ["kotlin"]
title = "Kotlin 101"
type = ["tutorials", "tutorial"]
url = "/kotlin-101/"
[author]
images = "/post/endro.jpg"
name = "J3ndra"

+++
## Wtf is Kotlin?

Kotlin adalah bahasa pemprogramman yang dikembangkan oleh [JetBrains](https://www.jetbrains.com/ "JetBrains"). Kotlin dapat digunakan untuk berbagai aspek, mulai dari [Server-side](https://kotlinlang.org/lp/server-side/ "Server-side"), [Native](https://kotlinlang.org/docs/reference/native-overview.html "Native"), [Web Development](https://kotlinlang.org/docs/reference/js-overview.html "Web Development"), [Data Science](https://kotlinlang.org/docs/reference/data-science-overview.html "Data Science") dan juga kotlin sering digunakan untuk menulis program [Android](https://kotlinlang.org/docs/reference/android-overview.html "Kotlin Android"). 

 Dewasa ini, Kotlin baru saja mengenalkan kemampuannya untuk [Multiplatform Mobile](https://kotlinlang.org/lp/mobile/ "Multiplatform Mobile") dimana anda tidak hanya dapat menuliskan kode untuk Android, Anda juga dapat menggunakan code yang Anda buat di compile ke bentuk IOS.

<br>

## Keunggulan Kotlin?

<hr>

### A. Code Yang Ringkas

Mengurangi jumlah kode [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code "Boilerplate")

```kotlin
    /*
     Membuat POJO dengan getters, setters, `equals()`, `hashCode()`, 
     `toString()` dan `copy()` hanya dalam satu baris:
    */
    
    data class Customer(val name: String, val email: String, val company: String)
    
    // Atau memfilter list menggunakan lambda expression:
    
    val authorAnbidev = list.filter { it > 0 }
    
    // Ingin menggunakan Singleton? Buat object:
    
    object ThisIsASingleton {
        val companyName: String = "Anbidev"
    }
```

<br>

### B. Kode Yang Lebih Aman

Menghindari *error* pada keseluruhan class yang dibuat dengan ***null pointer exceptions*** dari Kotlin.

```kotlin
    /*
     Apa itu NullPointerExceptions? (Java programmer can relate LOL)
    */
    
    var output: String
    output = null   // Error pada kompilasi
    
    // Kotlin dapat melindungimu dari kesalahan pengoperasian pada tipe nullable
    
    val name: String? = null    // Tipe Nullable
    println(name.length())      // Error pada kompilasi
    
    // Dan jika kamu mengecek apakah tipe sudah benar, compiler akan mentransmisikannya (auto-cast) secara otomatis untuk anda.
    
    fun calculateTotal(obj: Any) {
        if (obj is Invoice)
            obj.calculateTotal()
    }
```

<br>

### C. Mudah Untuk Dioperasikan

Memanfaatkan *libraries* yang terdapat untuk JVM, Android, Browser

```kotlin
    /*
     Menggunakan semua library yang ada pada JVM, karena ada kompabilitas 100%, termasuk SAM support.
    */
    
    import io.reactivex.Flowable
    import io.reactivex.schedulers.Schedulers
    
    Flowable
        .fromCallable {
            Thread.sleep(1000) //  Schleep
            "Done"
        }
        .subscribeOn(Schedulers.io())
        .observeOn(Schedulers.single())
        .subscribe(::println, Throwable::printStackTrace)
        
    
    /*
     Apapun target nya entah itu JVM atau Javascript. Tulisan code itu di Kotlin dan deploy 
     dimana saja sesuai dengan yang anda inginkan
    */
    
    import kotlin.browser.window
    
    fun onLoad() {
        window.document.body!!.innerHTML += "<br/>Hello, Kotlin!"
    }
```

<br>

### D. Mudah Untuk Dipelajari

Kotlin terhitung mudah untuk dipelajari karena kode yang ringkas dan juga komunitas yang besar terhadap kotlin. 

Jika kalian tertarik, silahkan liat dokumentasi di [Kotlin Documentation](https://kotlinlang.org/docs/reference/ "Kotlin Documentation") atau kalian langsung ingin terjun di Android Kotlin, Anda juga bisa belajar melalui [Google Codelabs](https://codelabs.developers.google.com/android-kotlin-fundamentals/ "Kotlin Google Codelabs") yang disediakan gratis oleh Google.

> Happy Code y'all!