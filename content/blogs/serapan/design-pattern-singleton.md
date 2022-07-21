+++
aliases = ["/blogs/design-pattern-singleto/"]
authors = "adexe"
categories = ["serapan"]
cover = "/post/web-singleton.jpg"
date = 2019-11-04T00:00:00Z
dateUpdate = ""
description = "Disini saya akan menjelaskan lebih jauh tentang design pattern singleton "
series = "Serapan"
status = "publish"
tags = ["blog", "serapan", "design-pattern"]
title = "Ragam Design Pattern : Singleton"
type = ["blogs", "blog"]
url = "/design-pattern-singleton/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++

**Singleton** adalah salah satu dari klasifikasi _Creational Design Pattern_. Pattern ini memastikan bahwa kamu hanya perlu satu _instance_ , sambil menyediakan akses secara global ke _instance_.

Hal ini berguna ketika kamu perlu sebuah objek yang dapat mengkoordinasikan tindakan diseluruh sistem. Istilah ini berasal dari konsep matematika bernama [**Singleton**](https://en.wikipedia.org/wiki/Singleton_%28mathematics%29?source=post_page-----b0b1f535da11----------------------).

> Dalam pemrograman, sebuah objek bisa dikatakan **Singleton**, apabila hanya memiliki **sebuah instance** yang digunakan diseluruh kode logikamu.

<br>

## Apa Itu Instansi _(Instance)_

<hr>

Instansi (_Instance_) adalah sebuah variabel objek dari class, atau bisa dibilang pembentukan dari **class** menjadi sebuah **objek**.

![Ragam Design Pattern Singleton](/post/design-pattern-singleton-fishstar.jpg "Photo by Amy Humphries on Unsplash")

Untuk lebih sederhananya coba lihat kode dibawah ini :

```python
class Hewan:
    def lari(self):
        pass

kucing = Hewan()
```

Maksud dari kode diatas adalah kita membuat sebuah _instance_ dari class yaitu `Hewan()` dan menyimpannya ke dalam variabel `kucing`.

Sehingga dapat dijelaskan bahwa variabel `kucing` adalah **_instance_** dari class `Hewan`.

Oke, kalian sekarang sudah tahu apa itu **_Instance_**, sekarang kita lanjutkan pembahasan kita tentang **Singleton**.

<br>

## Kenapa Singleton?

<hr>

Dalam kenyataannya **_Singleton Pattern_** dapat menyelesaikan dua masalah sekaligus :

![Ragam Design Pattern Singleton](/post/design-pattern-singleton-question.jpg "Photo by Emily Morter on Unsplash")

#### 1. Untuk Memastikan Bahwa Sebuah Class Hanya Memiliki Satu Instance

Untuk apa orang ingin mengatur banyak _instance_ dalam class yang ia buat? Alasan paling umum untuk ini adalah ia ingin mengendalikan akses sebuah **_shared resource_**, contohnya sebuah Database atau File.

**Contoh Kesalahan:** Bayangkan kamu membuat sebuah objek, tapi beberapa saat kemudian kamu memutuskan untuk membuat yang baru. Bukannya menerima objek baru, malah menerima objek yang telah kamu buat.

**_Catatan_** : Perilaku ini tidak mungkin diterapkan dengan _constructor_ biasa, dikarenakan _constructor_ harus selalu mengembalikan nilai (**return**) sebuah objek baru sesuai desainnya.

#### 2. Untuk Menyediakan Sebuah Akses Global Ke Instance Tersebut

Ingat apa itu [Global Variabel](https://anbidev.com/tutorials/python/python-variable/) yang digunakan untuk menyimpan dan mengakses sebuah objek dimanapun itu? Meskipun ini sangat praktis, hal ini juga sangat beresiko. Karena variabel ini sangat **rentan di overwrite** oleh kode lainnya dan membuat app _crash_.

Sama seperti variabel global, **Singleton Pattern** memungkinkan kamu mengakses beberapa objek dari manapun di dalam program. Namun, Singleton melindungi _instance_ agar tidak di _overwrite_ oleh kode lain.

Perbedaan antara **Singleton Pattern** dan **Global Variabel** yaitu Singleton hanya dibuat saat dibutuhkan, sedangkan Global Variabel dibuat saat awal program dijalankan.

**Masalah Dari Sisi Yang Lain :**

Kamu tidak ingin kode yang memecahkan masalah A tersebar di seluruh program yang kamu buat. Sehingga dapat menimbulkan adanya kode yang duplikat yang dapat menyebabkan redudansi dan **_bad pattern_**.

Jauh lebih baik kode ini dibuat didalam suatu class, dan class itu dapat digunakan untuk berbagai kebutuhanmu. Terutama jika kode yang lain sudah bergantung pada kode tersebut.

<center><p>.            .          .</p></center>

Saat ini , **Singleton Pattern** telah menjadi sangat populer sehingga orang dapat mengenali bagaimana cara memecahkan masalah dengan Singleton.

<br>

## Contoh Penggunaan

<hr>

Contoh implementasi konsep **Singleton** cukup banyak. Kali ini saya hanya menampilkan yang sering digunakan saja:

1. **_Database Connection_** <br> Dalam kebanyakan program yang memiliki koneksi database, mereka hanya membuat **satu buah objek** yang digunakan untuk berhubungan dari program ke database.

2. **_Application Settings_** <br> Ketika kita membuat sebuah pengaturan untuk sistem kita maka hanya satu objek yang dibuat, dan ketika pengaturan di _apply_ maka seluruh sistem akan terpengaruh.

3. **_Search Dialog_** <br> Kita punya banyak content didalam program kita, lalu dibuatlah fitur _Search Dialog_. Ketika kita memanggil fitur ini, tidak mungkin membuat objek _Search Dialog_ secara terus menerus. Hanya satu objek _Search Dialog_ untuk seluruh program.

<br>

## Analogi Singleton

<hr>

Dalam dunia nyata, **Pemerintah** adalah contoh analogi yang tepat untuk Singleton. **Satu negara hanya memiliki satu pemerintahan yang resmi**.

![Ragam Design Pattern Singleton](/post/design-pattern-singleton-gov.jpg "Photo by Marco Oriolesi on Unsplash")

Kita ambil contoh yaitu **Indonesia**, Negara Indonesia memiliki **Presiden** dan sebuah pemerintahan resmi dengan nama **_"Pemerintah Indonesia"_**. Seluruh kebijakan dan kepentingan yang dilontarkan **berasal** dari pemerintah atas persetujuan presiden dan warga Indonesia menyampaikan aspirasinya kepada presiden **lewat** pemerintah.

Dalam analogi tersebut, Rakyat dianggap sebagai **Modul** , Presiden sebagai **Resource** dan Pemerintah sebagai **Singleton**.

<br>

## Bagaimana Cara Mengaplikasikan Singleton?

<hr>

Secara abstrak , kamu hanya perlu dua langkah sederhana untuk membuat sebuah **Singleton** objek.

1. **Buat default _constructor_ secara** **_private_**. Hal ini untuk mencegah objek lain membuat class Singleton baru. Kenapa? karena kita perlu memastikan bahwa objek ini hanya memiliki satu instance saja.

2. **Buat _method_ statis yang bertindak sebagai constructor**. Methode ini akan memanggil _private constructor_ untuk membuat sebuah objek dan menyimpannya kedalam field statis.

Kalian masih bingung? Baik, Saya akan menjelaskan menggunakan kode nanti.

<br>

## Struktur Singleton

<hr>

![Ragam Design Pattern Singleton](/post/design-pattern-singleton-tree.jpg "Photo by Tim Foster on Unsplash")

Inti dari struktur tersebut adalah **Client** hanya dapat mengambil _Instance_ dari Singleton yang kamu buat dengan memanggil **getInstance()**.

Pada fungsi tersebut ia akan memeriksa _Instance_ yang saat ini ada. Jika ia `null`, maka ia akan membuat _instance_ baru dan return, dan jika ia **tidak `null`** maka return _instance_ yang ada.

<br>

## Waktunya Koding

<hr>

Coba kita buat implementasi **Singleton** dengan bahasa pemrograman Python.

Kita buat studi kasus. Seperti analogi yang kita bahas sebelumnya, yaitu Negara Indonesia dengan Pemerintah Resminya. Sekarang kita konversi ke kode.

```python

# save as : pemerintah.py

class Pemerintah():
    # Informasi
    kebijakan = None
    pajak = 0

    # Instance
    __instance = None

    # Private Constructor
    def __init__(self):
        if Pemerintah.__instance != None:
            raise Exception("Pemerintah sudah terbentuk!")
        else:
            Pemerintah.__instance = self

    # Static Access Method
    @staticmethod
    def getInstance():
        if Pemerintah.__instance == None:
            Pemerintah()
        return Pemerintah.__instance

```

Baik, saya akan menjelaskan maksud dari kode diatas.

Kita buat class **Pemerintah()** dengan **_private constructor_** dan juga method statis `getInstance()`.

Saya membuat sebuah private variabel yaitu `__instance` dan beberapa informasi sebagai global variabel seperti `kebijakan` dan `pajak`.

> Berikut penjelasan \_\_(_double underscore_) pada Variabel di Python.

Pada fungsi `getInstance()` terdapat kondisi, jika `__instance` berisi `None` maka ia akan memanggil **_private constructor_**.

Lalu didalam **_private constructor_** terdapat juga kondisi yang menyatakan jika `__instance` sudah dibuat maka `raise Exception()` atau keluar ERROR. Ini diperlukan supaya tidak ada duplikasi _instance_ class.

Sedangkan pada blok kode `else`, variabel `__instance` didefinisikan sebagai `self` atau bisa dibilang membuat _instance_ dari class **Pemerintah()**.

<br>

Sekarang kita coba implementasikan class **Pemerintah()**.

```python
from pemerintah import Pemerintah

pemindo = pemerintah.getInstance()

pemindo.kebijakan = "Kebebasan Berpendapat"
pemindo.pajak = 1000

print(pemindo.kebijakan) # Output : 'Kebebasan Berpendapat'
print(pemindo.pajak) # Output : 1000
```

Oke, kode diatas untuk memastikan bahwa tidak ada error dalam inisiasi ataupun alur kode.

Lalu kita coba, bagaimanakah implementasi dari sebuah **Singleton**.

```python
from pemerintah import Pemerintah

# buat 2 objek instance
pemindo = pemerintah.getInstance()
pemkot = pemerintah.getInstance()

pemindo.kebijakan = "Indonesia Sebagai Negara Agraris"
pemindo.pajak = 1000

pemkot.kebijakan = "Didalam Kota Dilarang Pacaran"
pemkot.pajak = 9999

print(pemindo.kebijakan) # Output : 'Didalam Kota Dilarang Pacaran'
print(pemindo.pajak) # Output : 9999

```

_"Kenapa valuenya sama? Padahal ia adalah objek yang berbeda?"_

Siapa bilang mereka adalah objek yang berbeda. Kita coba lagi.

```python
from pemerintah import Pemerintah

# buat 2 objek instance
pemindo = pemerintah.getInstance()
pemkot = pemerintah.getInstance()

if (pemindo == pemkot) :
    print("Mereka Objek yang sama")
else:
    print("Mereka Objek yang berbeda")
```

Nah, dari kode diatas dapat disimpulkan mereka adalah objek yang **sama**. Karena mereka menggunakan **_instance_** **yang sama**.

Lalu, bagaimana jika kita definisikan lagi _instance_ dari class **Pemerintah()**?

```python
from pemerintah import Pemerintah

pemindo = pemerintah.getInstance()
pemkot = Pemerintah()
```

Yups, akan terjadi **ERROR** yaitu `Exception("Pemerintah Sudah Terbentuk!")`. Seperti konsep yang kita bahas sebelumnya bahwa tidak boleh adanya duplikasi _instance_ class.

<br>

## Tipe - Tipe Singleton

<hr>

Sekarang kita bahas 3 tipe dari Singleton.

1. **Early Loading Singleton**<br>
   Singleton yang _instance_-nya dinisialisasi secara langsung selama _instance_ dideklarasi.

```python
    pemindo = Pemerintah()  # Instance Dideklarasikan Langsung

    def getInstance():
        return pemindo
```

2. **Single-Thread — Lazy Loading Singleton**<br>
   Singleton yang _instance_-nya dinisialisasi hanya saat class Singleton tersebut digunakan untuk pertama kali dan hanya ditujukan untuk **Single Thread**. _Ini adalah Singleton yang kita buat tadi_.

3. **Multi-Thread — Lazy Loading Singleton**<br>
   Singleton yang _instance_-nya dinisialisasi hanya saat class Singleton tersebut digunakan untuk pertama kali dan ditujukan untuk **multhi-threaded environtment**.

Didalam environtment _multi-threaded_, akan sangat mungkin terjadi ketika dua _thread_ memanggil _method_ `getInstance()` pada waktu yang sama, dan akan membuat dua _instance_ class Singleton yang tidak diinginkan, dan mungkin membuat program sulit diprediksi.

Untuk membuat _thread instance_ Singleton yang aman, method `getInstance()` harus di **Synchronized** agar method akan tereksekusi oleh satu _thread_ pada satu waktu (One-Thread-One-Run).

> Kita akan bahas lebih mendalam tentang **Multi-Thread** pada artikel yang lain.

<br>

#### -> Singleton Tipe Apa Yang Sebaiknya Saya Pakai?

Jawaban atas pertanyaan ini berdasarkan masalah yang kamu hadapi.

Jika kamu hanya butuh Singleton sederhana dan mengesampingkan performa dari program yang kamu buat, gunakan **Early Loading Singleton**.

Jika kamu peduli tentang performa aplikasimu, tapi hanya menggunakan _single threading_, gunakan **Single Thread - Lazy Loading Singleton**. Pastikan kamu memanggil `getInstance()` didalam _single thread_, jika tidak Singleton yang kamu buat akan dinisialisasi dua kali dan menghasilkan **_multi-instance_** (maka kita tidak bisa menyebutnya sebuah Singleton)

Dan yang terakhir, jika kamu peduli tentang performa aplikasimu dan menggunakan environment _multi-thread_, gunakan **Multi Thread - Lazy Loading Singleton**.

<br>

## Sesi Review

<hr>

![Ragam Design Pattern Singleton](/post/design-pattern-singleton-review.jpg "Photo by Isaac Smith on Unsplash")

Setelah semua teori dan contoh kode diatas, kita bisa menyimpulkan bahwa mengimplementasikan sebuah Singleton sangatlah mudah, seperti :

1. Menambahkan **_private static field_** didalam class untuk menyimpan _instance_ Singleton.

2. Mendeklarasikan sebuah method **_public static creation_** untuk mendapatkan _instance_ Singleton.

3. Implementasikan salah satu **tipe Singleton "Lazy Initilization"** didalam method statis.

4. Buat **private constructor** dari class.

5. Lalu **implementasikan** ke kode program yang kamu buat.

<br>

#### -> Kapan Kita Menggunakan Singleton?

- Gunakan Singleton ketika class pada programmu seharusnya memiliki satu _instance_ untuk semua modul. Contoh, seperti _shared database_ atau file.

- Gunakan Singleton ketika kamu ingin mengontrol atas global variabel pada program yang kamu buat.

#### -> Kelebihan Singleton

- Kamu bisa memastikan bahwa hanya ada satu _instance_ yang dibuat.

- Kamu dapat mengontrol _instance_ yang memiliki akses secara global.

- Objek Singleton hanya diinisialisasi ketika ia di*request* untuk pertama kalinya.

#### -> Kekurangan Singleton

- Singleton dapat menutupi desain program yang buruk oleh penciptanya, misalnya, ketika setiap komponen program tahu terlalu banyak informasi tentang satu sama lain.

- Singleton membutuhkan perlakuan khusus saat berada di environment _multi-threaded_, agar tidak membuat objek Singleton berkali - kali.

<center><p>.            .          .</p></center>

Artikel ini adalah hasil translasi dari artikel aslinya yang bisa kalian lihat [disini](https://medium.com/@ezralazuardy/creational-design-pattern-singleton-b0b1f535da11). Artikel yang asli ditulis oleh kerabat saya bernama [Ezra Lazuardy](https://medium.com/@ezralazuardy) dengan versi bahasa inggris. Sedangkan saya membuatnya menjadi versi bahasa indonesia dengan perubahan beberapa kalimat agar mudah dipahami.

<br>

<center>***stay fool so you have learn***</center>