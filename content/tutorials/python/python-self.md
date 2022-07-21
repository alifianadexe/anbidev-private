+++
authors = "adexe"
cover = "/post/web-selfpy.jpg"
date = 2021-03-10T00:00:00Z
description = "Membahas secara lengkap tentang self yang terdapat pada bahasa pemrograman Python."
series = "Python 101"
shortcode = "Self"
status = "publish"
draft=false
sumber = ["https://www.programiz.com/article/python-self-why"]
tags = ["python"]
title = "Membahas Lengkap \"Self\" Pada Python"
tutorials = ["python"]
type = ["tutorials", "tutorial"]
url = "/python-self/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"
+++

Hai anbies, sekarang kita akan belajar tentang keyword `self`. Kalian akan sering menemukan keyword ini ketika bermain dengan pemrograman berbasis objek atau *[Object Oriented Programming (OOP)](https://anbidev.com/Python-oop)*.

Lalu ada pertanyaan seperti *"kenapa kok setiap fungsi pada class harus ada `self` nya sih?"* Nah teruntun kalian yang masih bingung esensi keyword `self` pada Python, bisa nih disimak dulu artikel berikut ini.


<br>

## Apa itu Keyword Self

<hr>

Didalam pemrograman berbasis objek, ketika kita mendefinisikan sebuah method untuk sebuah *class*, kita diharuskan untuk membuat `self` sebagai parameter pertama. 

Coba kita lihat pada *class* `Makanan` dibawah ini : 

```Python
class Karyawan:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduction(self):
        print(f"Hallo, nama saya {self.name}. Umur saya {self.age}.")

    def work(self):
        print("Mari Kita Kerja!")
```

Pada kode diatas, semua method termasuk `__init__` memiliki parameter `self` pada posisi pertama.

Kita tahu bahwa *Class* adalah *template* atau cetakan untuk objek. Lalu menggunakan *template class* ini bisa kita buat banyak objek. Coba kita buat 2 buah objek berdasarkan *class* diatas.

```Python
karyawan1 = Karyawan('Aqshol', 19)
karyawan2 = Karyawan('Hamid', 21)
```

Keyword `self` sendiri digunakan untuk merepresentasikan setiap objek yang dibuat. Pada kasus ini, kedua objek diatas, `karyawan1` dan `karyawan2` memiliki attribut `name` dan `age` masing - masing. Meskipun berasal dari *class* yang sama, yaitu `Cat`.

Jika tidak ada parameter `self`, maka *class* tidak akan bisa menampung informasi yang terdapat pada kedua objek tersebut. 

Namun, karena *class* itu hanyalah sebuah *template*, `self` memungkinkan kita untuk mengakses ke atribut dan method pada setiap objek yang dibuat. Inilah yang membuat setiap objek memiliki atribut dan method nya masing - masing.

<br>

## Kenapa Self Selalu Didefinisikan ?

<hr>

Bahkan, ketika kita mengerti tentang cara menggunakan `self`, hal ini mungkin masih nampak aneh, terutama bagi programmer yang sering menggunakan bahasa yang lain.

`self` itu diberikan secara eksplisit sebagai parameter setiap kali kita mendefinisikan method. Seperti kata **Zen Of Python**, *"Explicit is better than implicit"* yang artinya *"Hal yang tersurat lebih baik daripada hal yang tersirat"*.

Jadi, kenapa kita harus melakukan ini? Ayo kita ambil contoh sederhana. Kita punya class `Point`, didalam class tersebut terdapat method `distance()` yang digunakan untuk kalkulasi jarak.

```Python
class Point(object):
    def __init__(self, x = 0, y = 0):
        self.x = x
        self.y = y
    
    # mencari jarak dari titik asal
    def distance(self):
        return (self.x**2 + self.y**2) ** 0.5
```

Sekarang mari kita buat *object* dari *class* ini dan kita cari jaraknya.

```Python
p1 = Point(6, 8)
jarak = p1.distance()

print(jarak)
```

```bash
10.0
```

Dari contoh diatas, method `__init__()` harusnya ada tiga argument, tetapi kenapa hanya ada dua argument saja (`6` dan `8`) ?. Dan juga, pada method `distance()` kenapa tidak ada argument yang dimasukkan?.

*"Kenapa Python tidak menampilkan error tentang jumlah parameter yang tidak cocok?"*


<br>

## Apa Yang Sedang Terjadi Didalam?

<hr>


Berdasarkan contoh diatas `Point.distance` atau `p1.distance` adalah dua hal yang berbeda.

```Python
>>> type(Point.distance)
<class 'function'>
>>> type(p1.distance)
<class 'method'>
```

Kita dapat melihat bahwa yang pertama itu tipenya ***function*** dan yang kedua tipenya ***method***. Hal yang unik pada method (pada Python) adalah <mark> objek itu sendiri digunakan sebagai argument pertama pada fungsi tersebut</mark>.

Pada contoh kasus diatas, cara memanggil method `p1.distance()`, sebenarnya sama dengan `Point.distance(p1)`. 

Yang sebenarnya terjadi, ketika kita memanggil method beserta argumen - argumennya, ia akan mencari fungsi yang sesuai dengan method tersebut, yang berada didalam *class*. Lalu memanggilnya serta menempatkan method objek itu pada argumen pertama. 

!["Method dan Function"](/post/python-self-01.jpg "Method dan Function")

Jadi, sesuatu seperti `obj.a_meth(args)` akan menjadi `Class.a_meth(obj, args)`. Proses pemanggilan fungsi dilakukan secara otomatis, sedangkan proses penerimaan tidak.

Itulah alasan kenapa parameter pertama pada fungsi di dalam *class* harus ***object*** itu sendiri (`self`). Menulis parameter `self` sudah menjadi sebuah tradisi bagi para programmer Python.


<br>

## Self Bisa Kita Hindari

<hr>

Sekarang kalian tahu bahwa object (*instance*) itu sendiri secara otomatis menjadi argumen yang pertama. Nah, kalian juga menghindari penulisan `self` dengan cara membuatnya menjadi ***static method***. Contoh :

```python
class TheUnknown(object):

    @staticmethod
    def stat_method():
        print("Kan, gaada self yang diberikan disini!")
```

Nih, kenalin `@staticmethod` sebuah ***fungsi decorator*** yang membuat method `stat_method()` menjadi static. Mari kita buat instance dari *class* ini dan panggil object nya.

```python
theObj = TheUnknown()
theObj.stat_method()
```

Outputnya

```bash
Kan, gaada self yang diberikan disini!
```

Dari contoh diatas, dapat kita lihat method tersebut dapat di inisialiasi tanpa menuliskan `self` pada parameter pertama. Dikarenakan, *static method* berperilaku seperti layaknya fungsi - fungsi biasanya.

```Python
>>> type(TheUnknown.stat_method)
<class 'function'>
>>> type(theObj.stat_method)
<class 'function'>
```


<br>

## Apakah init() adalah sebuah Constructor?

<hr>

Ada satu kesimpulan yang penting yang bisa kita ambil dari informasi sejauh ini, yaitu method `__init__()` itu **bukanlah sebuah *constructor***. Beberapa programmer Python yang naif bingung dengan ini, karena `__init__()` selalu dipanggil setiap object dibuat.

Dari pendekatan yang kita buktikan sebelumnya, parameter pertama pada `__init__()` adalah **object itu sendiri**. Sehingga tidak mungkin method ini dipanggil ketika object akan dibuat, padahal parameter `self` jelas - jelas ada dideklarasikan di awal.

Yang sebenarnya terjadi, method `__init__()` dipanggil **setelah** object terbuat dan baru akan di inisialisasikan.

Secara teknikal, constructor adalah method yang mana ia dipanggil ketika object terbuat. Didalam Python sendiri juga terdapat method  `__new__()`.

```Python
__new__(cls, *args, **kwargs)
```

Ketika `__new__()` dipanggil, *class* sendiri akan memberikan argumen pertama secara otomatis (`cls`).

Dan lagi, seperti `self`, `cls` juga hanya sebuah nama konvensional. Untuk `*args` dan `**kwargs` hanya digunakan untuk mengambil sejumlah argumen yang berubah - ubah pada saat pemanggilan method di Python.

Berikut adalah point - point penting ketika implementasi menggunakan method `__new__()`.

 * `__new__()` selalu dipanggil sebelum `__init__()`.
 * Argument pertama adalah *class* itu sendiri yang mana diberikan secara implisit.
 * Selalu mengembalikan (*return*) objek yang valid dari `__new__()`. Bukan sesuatu yang mandatori, tapi ini fungsi utama untuk membuat dan mengembalikan objek.

Coba kita lihat contoh dibawah : 

```Python
class Point(object):
    def __new__(cls,*args,**kwargs):
        print("Ini Berasal Dari __new__!")
        print(cls)
        print(args)
        print(kwargs)

        # create our object and return it
        obj = super().__new__(cls)
        return obj

    def __init__(self,x = 0,y = 0):
        print("Ini Berasal Dari __init__!")
        self.x = x
        self.y = y
```

Sekarang, mari kita coba.

```python
p2 = Point(3,4)
```

Coba kita lihat outputnya

```
Ini Berasal Dari __new__!
<class '__main__.Point'>
(3, 4)
{}
Ini Berasal Dari __init__!
```

Dari contoh ilustrasi diatas, `__new__()` dipanggil sebelum `__init__()`. Kita juga bisa lihat bahwa paramater `cls` pada `__new__()` adalah class itu sendiri (`Point`). Lalu, object dibuat dengan memanggil method `__new__()` pada *base class* **object**.

Didalam Python, `object` adalah *base class* dari semua class lain yang diturunkan. Di contoh diatas, kita mendapatkannya menggunakan keyword `super()`.

<br>

## Pakai new Atau init  ?

<hr>

Kalian mungkin sering melihat implementasi dengan `__init__()` dan jarang melihat implementasi menggunakan `__new__()`. Ini dikarenakan karena kita tidak perlu meng *override* method tersebut (`__init__()`).

Pada umumnya `__init__()` digunakan untuk menginisialisasi object yang baru terbuat sedangkan `__new__()` digunakan untuk mengkontrol bagaimana object akan dibuat.

Kita juga bisa memakai `__new__()` untuk menginisialisasi atribut pada objek, tetapi untuk lebih baiknya tetap berada pada `__init__()`.

Anggap kita ingin class `SqPoint` membuat object yang mempresentasikan empat sudut pada persegi. Kita dapat membuat turunan dari class `Point` dan menggunakan method `__new__()` untuk menerapkan batas pembuatan objek (limit 4).

Berikut contoh penerapannya

```python
class SquarePoint(Point):
    MAX_Inst = 4
    Inst_created = 0

    def __new__(cls,*args,**kwargs):
        if (cls.Inst_created >= cls.MAX_Inst):
            raise ValueError("Tidak bisa membuat object lebih banyak lagi!")
        cls.Inst_created += 1
        return super().__new__(cls)
```

Dan inilah hasilnya.

```python
>>> p1 = SquarePoint(0,0)
>>> p2 = SquarePoint(1,0)
>>> p3 = SquarePoint(1,1)
>>> p4 = SquarePoint(0,1)
>>> 
>>> p5 = SquarePoint(2,2)
Traceback (most recent call last):
...
ValueError: Tidak bisa membuat object lebih banyak lagi
```

Kita dapat membuat batas pembuatan object, sehingga hanya 4 object yang dapat terbuat menggunakan class `SquarePoint`.

<center> . . . </center>

Itulah pembahasa tentang keyword `self` yang nantinya kita bisa terapkan di pemrograman berbasis objek menggunakan python. Baik, terima kasih sudah menyimak.














