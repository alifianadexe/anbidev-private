+++
authors = "J3ndra"
categories = ["blogs", "blog", "wawasan"]
cover = "/post/kotlinvsjava.png"
date = 2020-10-05T07:00:00Z
dateUpdate = 2020-10-05T10:00:00Z
description = "Perbedaan antara Java dengan Kotlin untuk Android Development"
series = "wawasan"
status = "publish"
tags = ["kotlin", "java", "wawasan", "blog"]
title = "Java VS Kotlin"
type = ["blog", "blogs"]
url = "/java-vs-kotlin"
[author]
images = "/post/endro.jpg"
name = "j3ndra"

+++

# Java VS Kotlin

Dalam membuat aplikasi mobile, kita memiliki banyak pilihan bahasa pemprogramman mulai dari [Java](https://developer.android.com/studio/write/java8-support?hl=id), [Kotlin](https://developer.android.com/kotlin?hl=id), [C++](https://developer.android.com/studio/projects/add-native-code?hl=id), [C# (Xamarin)](https://dotnet.microsoft.com/apps/xamarin), [LUA (Corona)](https://coronalabs.com/), [JavaScript (PhoneGap)](https://insights.daffodilsw.com/blog/5-popular-javascript-frameworks-for-mobile-app-development). Dari semua pilihan tersebut, banyak developer memilih [Java](https://developer.android.com/studio/write/java8-support?hl=id) dan [Kotlin](https://developer.android.com/kotlin?hl=id) sebagai dasar untuk memprogram aplikasi Android. Tetapi, untuk tahun 2020, mana yang lebih bagus atau yang lebih mudah dipelajari? Mari kita simak selengkapnya.

<br>

## Jumlah kode

<hr>

Dalam pembuatan data class pada [Java](https://developer.android.com/studio/write/java8-support?hl=id) dan [Kotlin](https://developer.android.com/kotlin?hl=id) sudah terlihat berbeda. Contohnya

**Person.java**

```java
class Person {

    private final String name;
    private int age;

    public Person(String name, int age) {
    	this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
```

**Person.kt**

```kotlin
data class Person(
	val name: String,
    var age: Int
)
```

Dari kode diatas sudah menunjukkan bahwa kode [Kotlin](https://developer.android.com/kotlin?hl=id) lebih ringkas dari [Java](https://developer.android.com/studio/write/java8-support?hl=id) yang dimana Kita dapat menghemat waktu dalam menulis kode.

<br>

## Support By Google

<hr>

[Kotlin](https://developer.android.com/kotlin?hl=id) tersupport langsung oleh Google, sedangkan [Java](https://developer.android.com/studio/write/java8-support?hl=id) tidak. Yang berarti [Kotlin](https://developer.android.com/kotlin?hl=id) akan selalu up-to-date jika Android Studio mengalami update yang besar.

!["Google Support untuk Kotlin"](/post/21.JPG "Google Support untuk Kotlin")

<br>

## Resource Pembelajaran

<hr>

Jika kalian mencari tutorial tentang Android Development, maka Anda akan menemukan banyak sekali tutorial Android menggunakan [Java](https://developer.android.com/studio/write/java8-support?hl=id). Tetapi, pastikan hal tersebut up-to-date, jangan asal langsung menerima tutorial tanpa melihat versi dari Android.

Jika kalian ingin belajar materi Android terbaru, pasti sudah jarang yang menggunakan [Java](https://developer.android.com/studio/write/java8-support?hl=id). Mereka lebih memilih [Kotlin](https://developer.android.com/kotlin?hl=id) sebagai bahasa utama mereka karena lebih mudah dipelajari. Jika Anda stuck pada _Tutorial Hell Android_ yang masih menggunakan versi yang lama, silahkan kunjungi [link](https://developer.android.com/jetpack/androidx/migrate) ini.

<br>

## Null Safety

<hr>

Jika kalian pernah menggunakan [Java](https://developer.android.com/studio/write/java8-support?hl=id) dan menemukan error `NullPointerExceptions`, hal ini terjadi karena kode Java yang dieksekusi ada pemanggilan object atau variable yang belum diinialisasi. [Kotlin](https://developer.android.com/kotlin?hl=id) sudah dapat mengatasi hal tersebut sehingga Kita aman jika membuat object atau variable yang bersifat null.

<br>

## Multiplatfrom

<hr>

Dengan [Kotlin](https://developer.android.com/kotlin?hl=id), Anda dapat mendevelop aplikasi IOS karena Kotlin terbuat dari Java yang dapat dioperasikan menggunakan JVM (Java Virtual Machine). Berbeda dengan [Java](https://developer.android.com/studio/write/java8-support?hl=id) yang hanya pemprogramman dasar dari Android. Penjelasan lebih lanjut tentang Kotlin multiplatfrom silahkan klik [disini](https://blog.jetbrains.com/kotlin/2020/08/kotlin-multiplatform-mobile-goes-alpha/).

!["WebPage untuk Kotlin"](/post/22.JPG "WebPage untuk Kotlin")

<br>

## Kesimpulan

<hr>

**_Q: Kenapa masih banyak orang masih menggunakan Java?_**

Karena mereka masih berada di zona aman mereka yang dimana sudah "nyaman" menggunakan Java dan tidak ingin mencoba hal yang baru. Tetapi jika Anda sudah mencoba Kotlin dan lebih suka dengan Java hal tersebut juga tidak apa-apa.

**_Q: Tetapi kenapa perusahaan masih menginginkan menggunakan Java..._**

Hal tersebut dapat terjadi dan itu diluar kendali Anda. Tetapi, jika Anda ingin melatih skill Anda tentang _Android Development_ dan ingin tetap _up-to-date_. Jadi jika Anda ingin menjaga reputasi Anda di perusahaan gunakan saja Java dahulu, anda dapat melatih skill Kotlin sedikit demi sedikit. <mark> Tetapi jika Anda ingin serius atau fokus pada Android Development. **Learn Kotlin**</mark>.

> Happy Code y'all
