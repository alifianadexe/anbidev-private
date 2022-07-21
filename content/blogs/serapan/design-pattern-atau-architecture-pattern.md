+++
aliases = ["/blogs/design-pattern-atau-architecture-pattern/"]
authors = "adexe"
categories = ["serapan"]
cover = "/post/web-gedung.jpg"
date = 2019-10-07T00:00:00Z
dateUpdate = ""
description = "Perbedaan mencolok dengan kedua pattern yang sering di anggap sama"
series = "Serapan"
status = "publish"
tags = ["blog", "serapan", "design-pattern"]
title = "Perbedaan Design Pattern dengan Architecture Pattern"
type = ["blogs", "blog"]
url = "/design-pattern-atau-architecture-pattern/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
**Design Pattern** dan **Architecture Pattern**. Apa perbedaan diantara mereka? Apakah seperti kita yang beda perasaan (Ciee) ?

Kali ini saya akan membahas sebuah pengetahuan yang sering di salah artikan oleh kebanyakan programmer advance. Kita mulai dari pengertian dari Design Pattern dan Architecture Pattern.

![Perbedaan Design dan Architecture](/post/design-vs-architecture-versus.jpg "Versus Photo by Jace & Afsoon on Unsplash")

<br>

## Pengertian

<hr>

> **Design Pattern** adalah istilah yang merujuk pada solusi umum yang digunakan untuk **memecahkan masalah yang sering terjadi** dalam konteks tertentu.

Mengacu pada komponen (bagian kecil) dari suatu subsistem dengan hubungan dan kolaborasi satu sama lain. Sebagai contoh , kamu memiliki sebuah masalah dalam algoritma pemrogramanmu, lalu kamu membutuhkan suatu pola (Pattern) atau alur (Flow) untuk memecahkan masalah tersebut. Aplikasikan saja design pattern yang sesuai dengan masalah yang kamu hadapi.

> **Architecture Pattern** pada software development adalah istilah untuk **solusi** yang dapat **digunakan kembali** dalam software architecture.

Mengacu pada suatu subsistem dengan hubungan dan kolaborasi satu sama lain. Sebagai contoh, ketika kamu ingin membuat sebuah aplikasi, Architecture Pattern akan membantu dalam menentukan struktur yang cocok untuk aplikasi yang kamu buat, atau membuat alur kerja (Workflow) yang optimal dalam proyek aplikasimu.

<br>

## Kekeliruan

<hr>

![Perbedaan Design dan Architecture](/post/design-vs-architecture-mistake.jpg "Mistake Photo by Jamie Street on Unsplash")

Kebanyakan programmer masih bingung tentang perbedaan antara design pattern dengan architecture pattern, bahkan ada yang tidak tahu sama sekali. Padahal kebanyakan dari kita (programmer) sering sekali mengaplikasikan hal ini disaat membuat aplikasi.

Ada suatu ketika, teman saya berdebat dengan saya tentang **MVC (Model View Controller)**. Menurut teman saya **MVC** adalah salah satu design pattern. Saya mencoba menjelaskan serta memberikan referensi yang menjelaskan bahwa MVC lebih ke arah architecture pattern.

Lalu dia membalas dengan mengirim link dari GeeksforGeeks yang menyatakan bahwa MVC adalah design pattern.

Dalam paragraf pertamanya, GeeksforGeeks mengatakan

> The **Model View Controller (MVC) design pattern** specifies that an application consist of a data model, presentation information, and control information. The pattern requires that each of these be separated into different objects.

Tetapi dalam paragraf kedua

> **MVC is more of an architectural pattern**, but not for complete application. MVC mostly relates to the UI or interaction layer of an application. You’re still going to need business logic layer, maybe some service layer and data access layer.

Setelah itu, saya bertanya kepada teman saya.

_"Hey, apakah kamu mengetahui perbedaan antara design pattern dengan architectural pattern?"_

_"Tidak, coba jelaskan kepadaku"_

Inilah salah satu **kekeliruan** diantara jutaan lainnya.

<br>

## Design Pattern

<hr>

![Perbedaan Design dan Architecture](/post/design-vs-architecture-abstract.jpg "Design Photo by Andrew Ridley on Unsplash")

Saya mulai dengan definisi. Design Pattern adalah tipikal solusi untuk masalah yang sering terjadi di dalam software design. Dengan kata lain, design pattern membantu memecahkan masalahmu yang kadang terjadi ketika kamu membuat program. Mereka seperti **blueprint** yang dapat kamu ubah untuk memecahkan masalah pada kode mu.

Ini seperti memasak menggunakan resep yang memberitahu bagaimana cara memasak sebuah makanan. Tetapi dalam kenyataannya, selera orang berbeda - beda, sehingga untuk menggunakan resep ini kamu harus menyesuaikan dengan kebutuhan bahan serta situasi yang ada.

Patterns yang telah dibangun, dirumuskan sedemikian rupa agar mendapatkan cara terbaik untuk menyelesaikan masalah. Tetapi, tetap saja programmer harus **menyesuaikan** Patterns dengan **konteks masalah** yang sedang dihadapi.

Berikut adalah 3 klasifikasi dalam design pattern.

**1. Creational Patterns**

Bertujuan untuk menyajikan mekanisme _object creation_ yang dapat meningkatkan fleksibilitas dan penggunaan kembali kode yang ada.

- Abstract Factory
- Builder
- Factory Method
- Object Pool
- Prototype
- Singleton

**2. Structural Patterns**

Bertujuan untuk menjelaskan cara merakit object dan class ke dalam struktur yang lebih besar, sambil menjaga struktur itu tetap fleksibel dan efisien.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Private Class Data
- Proxy

**3. Behavioral Patterns**

Bertujuan untuk menjaga komunikasi yang efektif serta penugasan antar objek.

- Chain of Responsibility
- Command, Interpreter
- Iterator
- Mediator
- Memento
- Null Object
- Observer
- State
- Strategy
- Template Method
- Visitor

Jumlah total design pattern yang ada adalah **26**. Sangat banyak bukan, tapi tenang saja kita **tidak perlu tahu semua jenis yang ada**. Hanya beberapa jenis saja yang bisa kamu aplikasikan kedalam permasalahanmu.

_"Baik, aku mengerti teorinya. Tapi kenapa hal - hal kompleks ini ada?. Apa intinya dari semua ini? dan haruskah aku belajar semuanya?"_

Kenyataanya adalah kamu telah bekerja sebagai programmer selama beberapa tahun, tapi kamu tidak mengetahui tentang satupun design pattern. Padahal mungkin saja kamu sedang menggunakan salah satunya tanpa kamu sadari. Jadi kenapa tidak menghabiskan sedikit waktu untuk mempelajarinya?

- Design Pattern adalah **kumpulan solusi yang dicoba dan diuji** untuk masalah umum yang terjadi dalam software design. Bahkan jika kamu tidak pernah menghadapi masalah ini, mengetahui design pattern masih berguna karena akan mengajarkanmu dalam menyelesaikan semua masalah menggunakan prinsip OOP (Object-Oriented-Programming).

- Design Pattern **menentukan bahasa umum** yang dapat kamu gunakan untuk berkomunikasi lebih efisien bersama rekan tim ataupun programmer lain. Contoh, ketika rekanmu mendapatkan masalah dan meminta saranmu, kamu hanya mengatakan _"Oh, gunakan saja Singleton untuk itu!"_ dan semua orang memahami ide dibalik saranmu. Tidak perlu kamu jelaskan Singleton jika kamu tahu itu bukan.

> _"Design patterns say how to write code effectively, easy maintainable, high re-usability, and of course readable because of abstraction"_ — [vrluckyin](https://stackoverflow.com/users/449351/vrluckyin)

*"Oh, aku mengerti.. tapi bisakah kamu memberikan contoh dari semua ini?"*

Saya akan memberikan contoh dasar dari salah satu pattern favorite saya.

<br>

### The Observer Pattern


Observer Pattern adalah salah satu Design Pattern yang berada pada klasifikasi behavioral patterns. Sederhananya, pattern ini memiliki 2 komponen utama, **Observer** dan **Observeable**.

Sebuah observer adalah sebuah object yang mengamati sebuah **Observable**, sedangkan observable bertanggung jawab untuk mengirimkan informasi(notifikasi) kepada observer.

Aksi Observer ketika melakukan koneksi ke Observable disebut dengan **_Subscription_**. Dan Observable hanya dapat mengirim informasi ke Observer yang sudah disubscribe pada observable tersebut.

![Perbedaan Design dan Architecture](/post/design-vs-architecture-observer.jpg "Observer Photo by Maarten van den Heuvel on Unsplash")

Konsep ini bertipe **one-to-many relationship**. Kenapa? karena satu observable dapat memiliki banyak observer dan dapat mengirim informasi(notifikasi) kepada mereka.

Observer Pattern adalah solusi yang sempurna jika kamu membutuhkan algoritma atau service yang dapat mengambil data secara _real-time_ atau mendengarkan perubahan yang terjadi dari server. Ambil contoh aplikasi **Weather App** yang membutuhkan untuk memonitoring cuaca di Jakarta, Indonesia.

Kamu akan membutuhkan **WeatherObservable** untuk mengambil data dari server secara berkala dengan waktu yang ditentukan, dan mengirim informasi ke **WeatherObserver** yang sudah di subscribe.

<br>

### Show Me The Code

Coba lihat contoh berikut ini, saya menulis kode ini dalam bahasa Python.

Pertama, deklarasi class untuk Observer dan Observable.

```python
class BaseObservable:

    def subscribe(baseObserver):
        pass

    def update():
        pass
```

**BaseObservable** adalah implementasi dari dua function,

- function **subscribe**, untuk mensubscribe sebuah observer.
- function **update**, untuk menyebarkan (broadcast) perubahan data ke observer.

Selanjutnya,

```python
class BaseObserver:

    def notify(degree):
        pass
```

**BaseObserver** hanya mempunyai satu fungsi, yaitu **notify** untuk mendapatkan data dari observable.

Lalu buat objek observable yang mengimplementasikan class **BaseObservable**. Kita juga deklarasikan sebuah list untuk menyimpan object observer yang sudah di subscribe.

```python
import BaseObservable
import BaseObserver

class WeatherObservable(BaseObservable):

    observerList = []

    def subscribe(baseObserver):
        observerList.append(baseObserver)

    def update(degree):
        WeatherObservable.subscribe(self)
        for observer in observerList:
            observer.notify(degre)

    # Simulasi pengambilan data dari server secara berkala
    def refresh():
        newDegree = fetchDataFromServer()
        update(newDegree)

```

Terakhir, kita deklarasikan observer.

```python

class WeatherObserver(BaseObserver):

    def _init_(self):

    def notify(degree):
        print("Weather in jakarta is changed to ", degree," farenheit")
```

Kode kita sudah matang, dan siap disantap.

```python
WeatherObservable.refresh()
```

Fungsi ini akan menyebarkan pergantian data dari server ke semua observer yang sudah disubscribe-nya. Simple bukan?

Cukup dengan design sekarang pindah ke architecture.

<br>

## Architecture Pattern

<hr>

![Perbedaan Design dan Architecture](/post/design-vs-architecture-design.jpg "Abstrack Photo by Stock Photography on Unsplash")

Architecture Pattern merupakan sebuah penjelasan abstrak tentang bagaimana struktur aplikasimu. Menurut wikipedia bahasa inggris,

> An architectural pattern is a general, **reusable solution** to a commonly occurring **problem in software architecture** within a given context. Architectural patterns are similar to software design patterns but have a **broader scope**.

Mereka adalah patterns untuk tata letak (Layout) keseluruhan aplikasi yang kamu buat.Dan semuanya memiliki kelebihan dan kekurangan.

Banyak architectural patterns yang ada diluar sana, kamu bisa melihatnya di [Wikipedia](https://en.wikipedia.org/wiki/Architectural_pattern). Tapi, saya akan menyebutkan 10 architecture yang umum digunakan.

1. **Layered pattern**
2. **Client-server pattern**
3. **Master-slave pattern**
4. **Pipe-filter pattern**
5. **Broker pattern**
6. **Peer-to-peer pattern**
7. **Event-bus pattern**
8. **Model-view-controller pattern**
9. **Blackboard pattern**
10. **Interpreter pattern**

Kesepuluh pattern ini saya akan jelaskan di artikel yang lain.

<br>

## Design vs Architecture

<hr>

Pada umumnya, architecture dan design keduanya menjelaskan "ide", tetapi Architecture pattern lebih kearah pandangan abstrak dari suatu ide. Sedangkan Design pattern lebih kearah implementasi dari ide tersebut. Design pattern lebih detail dari pada architecture.

> #### "Architecture menggambarkan pandangan abstrak dari seluruh sistem sedangkan Design menggambarkan implementasi dari beberapa komponen yang spesifik dan saling berkaitan."

![Perbedaan Design dan Architecture](/post/design-vs-architecture-architecture.jpg "Architecture Photo by Marc-Olivier Jodoin on Unsplash")

Anggap pemerintah ingin membuat sebuah kota. Pertama, mereka akan membuat sebuah rancangan abstrak sebuah diagram yang menjelaskan dimana letak area perumahan, dimana area pabrik akan dibangun, dimana lokasi taman, rumah sakit, pasar dan lain - lain. Inilah **Architecture**.

Setelah itu, mereka akan membuat sebuah diagram yang menjelaskan bagaimana rumah akan dibangun, berapa maksimal jumlah rumah di area itu. Cara membuat rumah itu berdampingan dan rapi. Bagaimana desain sekolah yang akan dibuat. Berapa banyak kasur di rumah sakit dan sebagainya. Inilah **Design**.

Sebuah Architecture menjelaskan komponen serta relasi diantara mereka sedangkan Design menjelaskan setiap komponen itu dibuat dan akan dibuat. Jadi inilah Architecture Pattern dan inilah Design Pattern **mereka jelas berbeda**.

<center><p>.            .          .</p></center>

Artikel ini adalah hasil translasi dari artikel aslinya yang bisa kalian lihat [disini](https://medium.com/@ezralazuardy/design-or-architecture-pattern-5314ee71ed6c). Artikel yang asli ditulis oleh kerabat saya bernama [Ezra Lazuardy](https://medium.com/@ezralazuardy) dengan versi bahasa inggris. Sedangkan saya membuatnya menjadi versi bahasa indonesia dengan perubahan beberapa kalimat agar mudah dipahami.

<br>

<center>***stay fool so you have learn***</center>