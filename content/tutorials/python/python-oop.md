+++
authors = "adexe"
cover = "/post/web-ooppy.jpg"
date = 2021-01-30T00:00:00Z
description = "Belajar bagaimana apa saja konsep OOP dan penerapannya dengan kode python"
series = "Python OOP"
shortcode = "Pendahuluan"
status = "publish"
sumber = ["https://belajarpython.com/tutorial/hello-world-python"]
tags = ["python"]
title = "Belajar Object Oriented Programming (OOP) Dengan Python"
tutorials = ["python"]
type = ["tutorials", "tutorial"]
url = "/python-oop-intro/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Apakah kalian pernah mendengar konsep Pemrograman Berbasis Objek? atau terkenal dengan bahasa inggrisnya Object Oriented Programming (OOP)?

Jika belum, mari kita berkenalan terlebih dahulu tentang apa dan bagaimana konsep OOP ini ada? Serta kenapa kita harus menggunakan konsep ini dalam membuat program?

<br>

## Apa itu Object Oriented Programming (OOP)

<hr>

Object Oriented Programming (OOP) adalah suatu paradigma pemrograman yang berorientasi pada konsep **_class_** (kelas) dan **_object_** (objek). Konsep ini sering kali digunakan dalam menyusun aplikasi menjadi kode yang sederhana dan dapat digunakan kembali (_reuseable_).

Konsep ini juga diterapkan dengan tujuan mempermudah kita dalam mengembangkan suatu program dengan cara mengikuti suatu model yang telah ada di kehidupan sehari - hari. 

Dengan perumpamaan, _Class_ sebagai *template* dari kategori yang umum seperti `'Mobil'` atau `'Karyawan'` yang memiliki karakteristik (**_attribute_**) dan perilaku (***behaviour*** atau disebut **_method_**) masing - masing.

!["Penjelasan Singkat OOP"](/post/python-oop-intro-01.jpg "Penjelasan Singkat OOP")

Contohnya seperti ini, anggap kita punya *Class* `mobil`. Ia memiliki *attribute* **`roda`**, **`kecepatan`** dan **`tipe`**. Serta didalam `mobil` dia juga memiliki *method* untuk **`melaju()`**, **`klakson()`** dan **`berbelok()`**.

Jika **_Class_** dalam perumpamaannya adalah _blueprint_ dari suatu kategori yang umum, maka **object** diumpamakan sebagai hal yang lebih spesifik. Jadi, *class* `mobil` tadi bisa membuat banyak objek yang lebih spesifik, misal `mobilAvanza` atau `mobilFerari`.

!["Penerapan Singkat OOP"](/post/python-oop-intro-02.jpg "Penerapan Singkat OOP")


<br>

## Apa itu Class?

<hr>

***Class*** adalah 'cetakan', '*template*' atau *'blueprint'* untuk membuat sebuah ***object***. *Class* hanya sebagai kerangka dasar dari *object*. Sehingga nanti cetakan (*class*) tersebut dapat membuat berbagai macam objek untuk kebutuhan yang berbeda - beda.

*Class* diibaratkan sebagai kategori yang umum, seperti yang dijelaskan diatas. Anggaplah kita membuat *Class* bernama `"mobil"`, didalam *class* tersebut terdapat karakteristik (*attribute*) dan perilaku (*method*) yang hanya dimiliki oleh **mobil**. 

!["Bagaimana Struktur Dari Class?"](/post/python-oop-intro-03.jpg "Bagaimana Struktur Dari Class?")

Kita tahu bahwa mobil memiliki roda, tipe atau kecepatan mobil. Hal ini bisa kita sebut dengan **attribute**. Lalu kita juga tahu bahwa mobil juga memiliki fungsi untuk jalan melaju, klakson dan berbelok. 

Dalam ilustrasi diatas, kita bisa menyimpulkan seperti apa bentuk *class* `mobil`. Dan selanjutnya, bagaimana bentuk *class* tersebut, jika ditranslasikan kedalam bentuk code python.

```python
class Mobil:

    def __init__(self, roda, tipe, kecepatan)
        self.tipe = tipe
        self.roda = roda
        self.kecepatan = kecepatan

    def doMelaju(self):
        print("Melaju dengan kecepatan : ", self.kecepatan)
    
    def doKlakson(self):
        print("klakson")

    def doBelok(self, arah):
        print("Belok arah ", arah)
```

Nah, ini lah bentuk sederhana dari *class* mobil. Bagi kalian yang masih bingung tentang kode diatas, tenang anbi akan jelaskan satu - persatu mulai dari sini.

<br>

## Apa itu Attribute?

<hr>

*Attribute* atau *properties* merupakan karakteristik dari sebuah *class*. *Attribute* ini berupa suatu variabel didalam sebuah *class*. Variabel yang didefinisikan sebagai sebuah attribute juga disebut dengan variabel **Global**.

Cara mendeklarasikan sebuah *attribute* sama dengan cara mendeklarasikan sebuah variabel. Dalam python, variabel yang digunakan sebagai *attribute* biasanya didefinisikan dalam fungsi *constructur* (`__init__`) dan menggunakan keyword `self`. Variabel *attribute* pada *class* disebut juga dengan ***instance* (turunan) *variable***.

Kenapa harus pakai *constructor*? karena *instance variabel* hanya bisa didefinisikan hanya dari sebuah **method**. 

> Untuk lebih jelasnya [Apa itu keyword self?](https://anbidev.com/python-self) 

Tadi kita sudah sedikit menyinggung tentang *attribute* yang dimiliki oleh mobil (tipe, roda dan kecepatan). Dalam kode yang anbi buat diawal.

```python
def __init__(self):
    self.roda = None
    self.tipe = None
    self.kecepatan = 0
```

Pada kode diatas bisa dibilang kita mendeklarasikan *attribute* dengan nilai default (`None` dan `0`) menggunakan fungsi *constructor* (`__init__`) pada *class*.  

Lalu kita bandingkan dengan kode dibawah ini.

```python
def __init__(self, roda, tipe, kecepatan):
    self.roda = roda
    self.tipe = tipe
    self.kecepatan = kecepatan
```

Pada kode diatas, nilai pada *instance variabel* didefiniskan mengikuti parameter yang diberikan pada fungsi constructor (`__init__`). 

Penerapan kedua kode diatas tergantung dengan kondisi  pada saat pendeklarasian sebuah **object**, apakah object ini perlu parameter atau tidak. Jika tidak maka pakai kode yang pertama, jika iya pakai kode yang kedua.

<br>

## Apa itu Method?

<hr>

Method adalah fungsi yang didefinisikan dalam suatu *class*. Biasanya method  memiliki hubungan dalam *behaviour* atau perilaku kelas tersebut. Dalam kasus *class* mobil, anbi mendefinisikan 3 method yaitu **melaju**, **klakson** dan **berbelok**.

Penulisan method dalam python, hampir sama seperti kita mendefinisikan sebuah fungsi pada umumnya. Cuman, yang membedakan, disetiap mendefinisikan sebuah method parameter keyword `self` harus selalu ada. 

Paramater `self` selalu terdapat pada awal parameter disetiap method. Nah, cara contoh penulisan *method* dalam python kurang lebih seperti ini.

```python
def doMelaju(self):
    print("Melaju dengan kecepatan ", self.kecepatan, "  Km/h")
    
def doKlakson(self):
    print("klakson")

def doBelok(self, arah):
    print("Belok arah ", arah)
```

Kenapa harus ada parameter `self`? Agar nantinya kamu dapat mengakses attribute atau method dari *class* tersebut. Karena cara python merujuk suatu *attribute* dan *method* pada suatu *class* hanyalah dengan keyword `self`.  

<br>

## Apa itu Object?

<hr>


Object adalah *instance* atau representasi dari sebuah *class*. Jika class adalah sebuah cetakan, maka *object* adalah hasil dari cetakan tersebut. Kita dapat membuat berbagai object dengan class mobil yang tadi kita buat.

!["Bagaimana Class Dan Object Bekerja?"](/post/python-oop-intro-04.jpg "Bagaimana Class Dan Object Bekerja?")

Cara mendeklarasikan object dari sebuah class pada python adalah dengan memanggil nama class beserta dengan parameter yang diberikan pada fungsi *constructor* (`__init__`).

```python
mobilFerari = new Mobil("Sport", 4, 200)
mobilJeep = new Mobil("Offroad", 6, 150) 
```

!["Struktur Pendeklarasian Object"](/post/python-oop-intro-05.jpg "Struktur Pendeklarasian Object")


Pada kode diatas anbi membuat **2 object** pertama adalah object `mobilFerari` dan `mobilOffroad`. Kedua object tersebut dibuat dari class yang sama (`Mobil`) dan memiliki perilaku (*behaviour*) yang sama tapi dengan karakteristik (*attribute*) yang berbeda. 

Kenapa parameter `self` tidak diikutkan? Karena `self` parameter tidak mandatori pada saat pembuatan objek, sehingga kita bisa melewati pemberian argument pada saat pembuatan objek.

Sekarang mari kita coba akses **attribute** dan **method** dalam masing - masing object. Cara mengaksesnya hanya dengan memberikan titik `.` dalam setiap nama object. Lihat kode dibawah.


```python
# akses attribute tipe dari mobilFerari
print(mobilFerari.tipe) 
# output : Sport

# akses attribute tipe dari mobilOffroad
print(mobilJeep.tipe) 
# output : Offroad
```

Kita bisa menyimpulkan bahwa setiap *object* memiliki nilai `tipe` yang berbeda sesuai dengan saat dideklarasikan. 

Lalu coba kita mengakses *method* `doMelaju()` dan kita coba lihat bagaimana output disetiap object.

```python
    # memanggil method domelaju di mobilFerari
mobilFerari.doMelaju()
# Output : Melaju dengan kecepatan 200 Km/h

# memanggil method domelaju di mobilOffroad
mobilJeep.doMelaju()
# Output : Melaju dengan kecepatan 150 Km/h
```

Jika kita lihat kode pada method `doMelaju()` terdapat *attribute* `self.kecepatan`. Sehingga setiap object memiliki output yang berbeda dengan perilaku yang sama yaitu *"melaju"*.   

<!-- *"Apa sih gunanya object? tujuannya apa sih, menggunakan object untuk program kita?"* -->

<center> . . . </center>

Kita masih intro aja nih, disini kita cuman berkenalan dengan  Object Oriented Programming, bagaimana konsep ini bekerja dan apa manfaat nya bagi kita. Yuk lanjut lagi di post selanjutnya!