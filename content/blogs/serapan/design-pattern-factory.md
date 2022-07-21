+++
authors = "adexe"
categories = ["serapan"]
cover = "/post/web-factory.jpg"
date = 2019-11-04T00:00:00Z
dateUpdate = ""
description = "Disini saya akan menjelaskan lebih jauh tentang design pattern factory"
series = "Serapan"
status = "publish"
tags = ["blog", "serapan", "design-pattern"]
title = "Ragam Design Pattern : Factory"
type = ["blogs", "blog"]
url = "/design-pattern-factory/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Factory Pattern salah satu dari 23 Design Pattern yang ada di buku Gang of four. Didalam factory pattern **client** (atau client code) meminta sebuah objek tanpa tahu asal dari objek tersebut (yang berarti, ada class yang digunakan untuk membuat objek tersebut).

Ide dibalik Factory Pattern ini adalah untuk menyederhanakan proses object creation. Factory pattern mengurangi kompleksitas dalam memaintance suatu aplikasi dengan cara memisahkan kode untuk membuat objek dari kode yang menggunakannya.

Kita akan mendiskusikan dua hal :

- Factory Method
- Abstract Factory

## Factory Method

Factory Method didasarkan dari sebuah single function yang ditulis untuk menangani tugas object creation. Kita mengeksekusi nya, memberikan sebuah parameter tentang apa yang kita inginkan, dan hasilnya adalah objek yang kita inginkan.

Uniknya, ketika menggunakan factory method, kita tidak diharuskan tahu tentang detail bagaimana objek itu dimplementasikan dan dari mana objek itu berasal.

## Contoh Dunia Nyata

Contoh penggunaan factory method di dunia nyata sama seperti pabrik mainan plastik. Bahan material yang digunakan untuk membuat mainan selalu sama, tapi untuk mainan yang berbeda(beda figur dan bentuk)bisa dibuat dengan cetakan yang berbeda.

Seperti halnya factory method yang dimana inputnya adalah nama dari mainan yang kita minta (mainan bebek atau mobil) dan outputnya (setelah di cetak) adalah mainan plastik yang kita inginkan.

Dalam dunia software, Django web framework menggunakan factory pattern untuk membuat field pada form. Modul `forms` pada Django, dapat membuat berbagai macam field seperti `CharField`, `EmailField` dan sebagainya. Dan bagian dari perilaku field tersebut bisa kita atur menggunakan attribut seperti `max_length` atau `required`.

Contoh penggunaan dari Factory Method di modul `forms` Django :

```python
from django import forms

class InputForm(forms.Form):
    name = forms.CharField(max_length=100)
    birth_date = forms.DateField(required=False)
```

Contoh lain dari penerapan factory method yaitu berkaitan dengan meningkatkan performa dan penggunaan memory dari sebuah aplikasi. Factory method dapat meningkatkan performa serta penggunaan memory dengan membuat sebuah objek hanya ketika objek itu dibutuhkan.

Ketika kita membuat sebuah objek dengan cara menginisialiasi class, extra memory akan teralokasi ke dalam objek baru setiap kali dibuat (Kecuali class menggunakan chaching internal).

```python
# save as id.py

class A:
    pass

if __name__ == '__main__':
    a = A()
    b = A()

    print(id(a) == id(b)) # False
    print('a ->',a)
    print('b ->',b)
```

Pada kode diatas, ia membuat dua _instance_ dari class yang sama (`A`), dan menggunakan function `id()` untuk membandingkan **memory adresses** merekam dan hasilnya adalah `False`. Memory Adresses mereka juga kita `print` dan hasilnya adalah :

```
a -> <__main__.A object at 0x015405D0>
b -> <__main__.A object at 0x01540610>
```

Dapat dilihat diatas **memory adresses** mereka berbeda dan dapat disimpulkan mereka adalah objek yang berbeda.

## Implementasi Factory Method

Data datang dari mana saja. Ada dua kategori utama bentuk file dalam menyimpan/mengambil sebuah data :

- human-readable files
- binary files

Contoh human-readable files adalah XML, RSS/Atom, YAML, JSON. Lalu, contoh binary files adalah `.sq3` format yang digunakan pada SQLite dan .mp3 format file audio.

Kali ini kita akan fokus pada dua human-readable files yang paling populer yaitu XML dan JSON.

Pada kasus ini , terdapat data yang disimpan pada XML dan juga JSON, kita ingin memusatkan koneksi client ke service eksternal mereka. Kita akan menggunakan factory method untuk menyelesaikan masalah ini.

Pertama coba kita lihat data pada JSON. Kita simpan sebagai `movie.json` :

```json
[
  {
    "title": "After Dark in Central Park",
    "year": 1900,
    "director": null,
    "cast": null,
    "genre": null
  },
  {
    "title": "Boarding School Girls' Pajama Parade",
    "year": 1900,
    "director": null,
    "cast": null,
    "genre": null
  },
  {
    "title": "Buffalo Bill's Wild West Parad",
    "year": 1900,
    "director": null,
    "cast": null,
    "genre": null
  },
  {
    "title": "Caught",
    "year": 1900,
    "director": null,
    "cast": null,
    "genre": null
  },
  {
    "title": "Clowns Spinning Hats",
    "year": 1900,
    "director": null,
    "cast": null,
    "genre": null
  },
  {
    "title": "Capture of Boer Battery by British",
    "year": 1900,
    "director": "James H. White",
    "cast": null,
    "genre": "Short documentary"
  },
  {
    "title": "The Enchanted Drawing",
    "year": 1900,
    "director": "J. Stuart Blackton",
    "cast": null,
    "genre": null
  },
  {
    "title": "Family Troubles",
    "year": 1900,
    "director": null,
    "cast": null,
    "genre": null
  },
  {
    "title": "Feeding Sea Lions",
    "year": 1900,
    "director": null,
    "cast": "Paul Boyton",
    "genre": null
  }
]
```

Lalu kita lihat data dari file XML, yang mempresentasikan sebagai `Person` dengan informasi seperti `firstName` , `lastName` , `gender` dan sebagainya. Lalu kita simpan sebagai `person.xml`.

```xml
<persons>
  <person>
    <firstName>John</firstName>
    <lastName>Smith</lastName>
    <age>25</age>
    <address>
      <streetAddress>21 2nd Street</streetAddress>
      <city>New York</city>
      <state>NY</state>
      <postalCode>10021</postalCode>
    </address>
    <phoneNumbers>
      <phoneNumber type="home">212 555-1234</phoneNumber>
      <phoneNumber type="fax">646 555-4567</phoneNumber>
    </phoneNumbers>
    <gender>
      <type>male</type>
    </gender>
  </person>
  <person>
    <firstName>Jimy</firstName>
    <lastName>Liar</lastName>
    <age>19</age>
    <address>
      <streetAddress>18 2nd Street</streetAddress>
      <city>New York</city>
      <state>NY</state>
      <postalCode>10021</postalCode>
    </address>
    <phoneNumbers>
      <phoneNumber type="home">212 555-1234</phoneNumber>
    </phoneNumbers>
    <gender>
      <type>male</type>
    </gender>
  </person>
  <person>
    <firstName>Patty</firstName>
    <lastName>Liar</lastName>
    <age>20</age>
    <address>
      <streetAddress>18 2nd Street</streetAddress>
      <city>New York</city>
      <state>NY</state>
      <postalCode>10021</postalCode>
    </address>
    <phoneNumbers>
      <phoneNumber type="home">212 555-1234</phoneNumber>
      <phoneNumber type="mobile">001 452-8819</phoneNumber>
    </phoneNumbers>
    <gender>
      <type>female</type>
    </gender>
  </person>
</persons>
```