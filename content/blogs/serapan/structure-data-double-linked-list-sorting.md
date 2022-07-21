+++
aliases = ["/blogs/sorting-head-tail-doubly-linked-list/"]
authors = "adexe"
categories = ["serapan"]
cover = "/post/web-sortingdll.jpg"
date = 2020-08-21T00:00:00Z
dateUpdate = ""
description = "Metode sorting pada doubly linked list menggunakan pointer HEAD dan TAIL"
series = "Serapan"
status = "publish"
tags = ["blog", "serapan", "python"]
title = "Sorting Doubly Linked List (HEAD and TAIL)"
type = ["blogs", "blog"]
url = "/sorting-head-tail-doubly-linked-list/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Sorting (Mengurutkan) pada bahasa pemrograman adalah metode yang vital. Karena dengan mengurutkan data kita bisa mendapatkan data yang kita inginkan. Tapi sering kali kita bingung bagaimana cara mengurutkan suatu data yang berada pada struktur data tertentu. Contoh yang akan kita bahas adalah Struktur data **Doubly Linked List**.

<br>

## Doubly Linked List

<hr>

Doubly linked list adalah suatu rangkaian **_Node_** atau Elemen struktur data yang dihubungkan dengan 2 pointer dalam satu element. Berbeda dengan saudaranya Linked List yang hanya memiliki satu pointer next.

Banyak manfaat yang dapat kita ambil dari metode Doubly Linked List. Salah satu pemanfaatan Doubly Linked List yang paling populer ada di **blockchain**.

<br>

## Full Code

<hr>

Oke tidak usah banyak basa - basi lagi, berikut ini _script_ untuk mengurutkan **_doubly linked list_**.

```python

class Data(object):
    def __init__(self, name):
        self.name = name

    def __compare(self, name):
        return 1 if self.name > name else -1 if self.name < name else 0

    def compare(self, data):
        if type(data) == str:
            return self.__compare(data)
        else:
            return self.__compare(data.name)

    def print(self):
        print("{0}".format(self.name))


class Rantai(object):
    def __init__(self, data):
        self.data = data
        self.__next = None
        self.__prev = None

    def compare(self, data):
        return self.data.compare(data)

    def print(self):
        self.data.print()

    @property
    def next(self):
        return self.__next

    @next.setter
    def next(self, node):
        self.__next = node

    @property
    def prev(self):
        return self.__prev

    @prev.setter
    def prev(self, node):
        self.__prev = node


class RantaiTerurut(object):

    def __init__(self):
        self.KEPALA = None
        self.BUNTUT = None
        self.POSISI = None

    def node_print(self):
        current = self.KEPALA
        while current is not None:
            current.print()
            current = current.next

    def node_append(self, str_data):
        data = Data(str_data)
        self.__do_append(data)

    def __do_append(self, data):

        new_chain = Rantai(data)
        new_chain.next = None

        # kepala dan buntutnya ada nggak? klo ngga diisi
        if self.KEPALA == None:
            self.KEPALA = new_chain
            self.BUNTUT = new_chain
            self.KEPALA.prev = None
            return

        # jika kepala lebih kecil atau sama dengan, maka kepalanya diganti
        if new_chain.compare(self.KEPALA.data) in [-1, 0]:
            new_chain.prev = None
            self.KEPALA.prev = new_chain
            new_chain.next = self.KEPALA
            self.KEPALA = new_chain
            return

        # jika ada node dengan data lebih besar maka buntutnya diganti
        if new_chain.compare(self.BUNTUT.data) in [ 1, 0]:
            new_chain.prev = self.BUNTUT
            self.BUNTUT.next = new_chain
            self.BUNTUT = new_chain
            return

        # itterate dari setelah kepala, buat cari yang mana yang
        # mau diappend ke list
        self.POSISI = self.KEPALA.next
        while self.POSISI.compare(new_chain.data) in [-1,0]:
            self.POSISI = self.POSISI.next

        # tuker dengan apa yang udah ada
        (self.POSISI.prev).next = new_chain
        new_chain.prev = self.POSISI.prev
        self.POSISI.prev = new_chain
        new_chain.next = self.POSISI

        # raise NotImplementedError()

# Tempat eksekusi anda dapat bermain" disini
if __name__ == "__main__":
    with open("./dummy.txt", encoding="utf8") as text_file:
        lines = text_file.read().splitlines()

    chain_list = RantaiTerurut()
    for str_data in lines:
        chain_list.node_append(str_data)
    # chain_list.node_print()

```

<br>

## Explanation

<hr>

Dari kode diatas terdapat 3 Class Utama :

- Data
- Rantai
- RantaiTerurut

<br>

**1. Class Data**

<hr>

**Class Data** adalah permisalan sebuah data yang akan diinputkan kedalam sebuah node (Rantai). Objek class ini hanyalah sebuah data _dummy_.

```python

class Data(object):
    def __init__(self, name):
        self.name = name

    def __compare(self, name):
        return 1 if self.name > name else -1 if self.name < name else 0

    def compare(self, data):
        if type(data) == str:
            return self.__compare(data)
        else:
            return self.__compare(data.name)

    def print(self):
        print("{0}".format(self.name))

```

Didalam class ini terdapat 2 fungsi utama yaitu `compare()` dan `print()`.

- Fungsi `compare()` digunakan untuk membandingkan data yang ada di objek ini dengan data di objek lain.
- Fungsi `print()` digunakan untuk menampilkan data pada objek tersebut.

<br>

**2. Class Rantai**

<hr>

**Class Rantai** digunakan untuk membuat sebuah _node_ yang nantinya akan di hubungkan dengan _node_ lainnya menggunakan metode _LinkedList_.

![Struktur Data Double Linked List](/post/structure-data-double-linked-list-sorting-1.png "Contoh Struktur Node")

Struktur data dari sebuah rantai atau node dapat dilihat diatas dimana ia memiliki 3 bagian utama.

<ol type="a"> 
    <li><b>Data</b> : Dimana data ditampung</li>
    <li><b>Next</b> : Penghubung ke node berikutnya</li>
    <li><b>Prev</b> : Penghubung ke node selanjutnya</li>
</ol>

Setiap bagian pada node sangatlah penting, terutama bagian `next` dan `prev`. Dikarenakan pada bagian tersebut digunakan untuk menghubungkan ke node yang lain.

```python
class Rantai(object):
    def __init__(self, data):
        self.data = data
        self.__next = None
        self.__prev = None

    def compare(self, data):
        return self.data.compare(data)

    def print(self):
        self.data.print()

    @property
    def next(self):
        return self.__next

    @next.setter
    def next(self, node):
        self.__next = node

    @property
    def prev(self):
        return self.__prev

    @prev.setter
    def prev(self, node):
        self.__prev = node
```

Sebagian fungsi pada class rantai hanya meneruskan dari fungsi di class data, hal ini bisa kita sebut node di **Bagian Data**. Fungsi - fungsi pada **bagian data** bisa kita sesuaikan sesuai kebutuhan kita.

Lalu ada fungsi tambahan `prev` dan `next` dengan masing - masing **_getter_** dan **_setter_** nya. Fungsi ini yang nanti nya jadi penghubung ke node yang lain.

<br>

**3. Class RantaiTerurut**

<hr>

Lalu yang terakhir adalah class RantaiTerurut disinilah serangkaian node yang memiliki data acak akan diurutkan berdasarkan _alphabetical order ascending_.

```python
class RantaiTerurut(object):

    def __init__(self):
        self.KEPALA = None
        self.BUNTUT = None
        self.POSISI = None

    def node_print(self):
        current = self.KEPALA
        while current is not None:
            current.print()
            current = current.next

    def node_append(self, str_data):
        data = Data(str_data)
        self.__do_append(data)

    def __do_append(self, data):

        new_chain = Rantai(data)
        new_chain.next = None

        # kepala dan buntutnya ada nggak? klo ngga diisi
        if self.KEPALA == None:
            self.KEPALA = new_chain
            self.BUNTUT = new_chain
            self.KEPALA.prev = None
            return

        # jika kepala lebih kecil atau sama dengan, maka kepalanya diganti
        if new_chain.compare(self.KEPALA.data) in [-1, 0]:
            new_chain.prev = None
            self.KEPALA.prev = new_chain
            new_chain.next = self.KEPALA
            self.KEPALA = new_chain
            return

        # jika ada node dengan data lebih besar maka buntutnya diganti
        if new_chain.compare(self.BUNTUT.data) in [ 1, 0]:
            new_chain.prev = self.BUNTUT
            self.BUNTUT.next = new_chain
            self.BUNTUT = new_chain
            return

        # itterate dari setelah kepala, buat cari yang mana yang
        # mau diappend ke list
        self.POSISI = self.KEPALA.next
        while self.POSISI.compare(new_chain.data) in [-1,0]:
            self.POSISI = self.POSISI.next

        # tuker dengan apa yang udah ada
        (self.POSISI.prev).next = new_chain
        new_chain.prev = self.POSISI.prev
        self.POSISI.prev = new_chain
        new_chain.next = self.POSISI

```

Pengurutan ini dinamakan **_"HEAD and TAIL Sorting"_** dikarenakan pada metode pengurutannya menggunakan konsep Kepala dan Buntut.

![Struktur Data Double Linked List](/post/structure-data-double-linked-list-sorting-2.png "Contoh Struktur List Node Dengan Metode HEAD dan TAIL")

Maksud dari **Kepala** **(_HEAD_)** adalah data pertama dari sebuah node list. Dalam metode pengurutan ini HEAD akan menyimpan node dengan data terkecil.

Sedangkan **Buntut** **(_TAIL_)** adalah data terakhir dari sebuah node list. Sehingga didalam TAIL menyimpan node dengan data terbesar.

<br>

# Note

<hr>

Kode ini memang acak, tetapi saya berusaha semaksimal mungkin untuk membuat anda mengerti. Jika masih bingung anda bisa berkomentar dibawah, penulis akan siap sedia membantu kesulitan anda.

untuk _fullcode github_ nya bisa akses langsung ke :

:octopus: [alifianadexe/python-sort-double-linked-list](https://github.com/alifianadexe/python-sort-double-linked-list)

Terima kasih atas perhatiannya dan sampai jumpa.