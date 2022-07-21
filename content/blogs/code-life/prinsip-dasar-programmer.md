+++
authors = "adexe"
categories = ["code-life"]
cover = "/post/web-princip.jpg"
date = 2021-03-15T00:00:00Z
description = "Mari kenali prinsip - prinsip dasar seorang programmer yang sering kita lewatkan"
series = "Code Life"
status = "publish"
sumber = ["https://www.makeuseof.com/tag/basic-programming-principles/"]
tags = ["blog", "serapan", "code-life"]
title = "7 Prinsip Dasar Seorang Programmer"
type = ["blogs", "blog"]
url = "/prinsip-dasar-programmer/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Pernahkah kalian sadari bahwa dalam menjadi programmer tidaklah sesulit yang kalian bayangkan. Tetapi, menjadi seorang programmer yang mampu membuat aplikasi _powerfull_ dengan kode se-efisien mungkin adalah hal sulit.

> "It's easy to write code. It's challenging to write good code."

Bagaimana cara membuat kode yang mudah untuk di_maintenance_, mudah dibaca dan dipahami oleh orang lain? Bagaimana cara membuat kode se-efektif mungkin?.

Pertanyaan - pertanyaan seperti itulah yang akhirnya mengantarkan kita pada **Prinsip Dasar Programming**. Apa saja prinsip - prinsip itu? mari kita bahas satu persatu.

<br>

## 1. Keep It Simple, Stupid (KISS)

<hr>

Singkatanya **KISS** (cium) tapi artinya cukup kasar bukan? :smile:

Prinsip ini mengajari kita untuk membuat **aplikasi sesederhana mungkin** serta dalam menulis kode **sesingkat mungkin** dengan menjaga keterbacaan kode.

Jangan terjebak untuk mencoba terlalu pintar atau terlalu pamer, sehingga membuat kodemu menjadi sebuah paragraf yang panjang. Jika kalian bisa menulis kode itu dalam satu baris, tulis saja menjadi satu baris.

Contoh kode dengan penerapan KISS, seperti ini.

```python
def addNumber(num1, num2):
    return num1 + num2
```

Sangat simple, mudah dibaca dan tahu apa tujuan dari fungsi tersebut.

Menggunakan nama variabel yang jelas, memanfaatkan library serta menulis kode program yang diperlukan. Jadi ketika kalian membuka kode ini 6 bulan berikutnya kalian tidak akan kebingungan.

Lalu, prinsip KISS juga bisa kita terapkan dalam membuat sebuah aplikasi. Misal membuat design web, kita tampilkan saja informasi - informasi yang diperlukan, tanpa membuatnya menjadi rumit.

!["Contoh Web Design AnbiDev"](/post/prinsip-dasar-programmer-01.jpg "Contoh Web Design AnbiDev")

Ada lagi penerapan dalam _digital marketing_, menggunakan design yang simple dan aesthetic untuk mendemonstrasikan nilai barang yang mereka jual.

!["Contoh Digital Marketing Guerrilla Agency"](/post/prinsip-dasar-programmer-02.png "Contoh Digital Marketing Guerrilla Agency")

Bagaimana, ada gambaran dalam penerapan prinsip ini di kode atau aplikasi kalian?

<br>

## 2. Don't Repeat Yourself (DRY)

<hr>

Inti dalam prinsip ini adalah jangan mengulang hal yang sama. Hal ini adalah kesalahan yang umum terjadi di banyak programmer di dunia.

Dalam buku The Pragmatic Programmer DRY didefinisikan sebagai berikut :

> "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."

Hal seperti apa yang bisa kita sebut DRY? Ketika kalian membuat kode dengan logic atau data yang hampir sama, atau membuat algoritma dan fungsionalitas program yang hampir sama.

Mari kita ke contoh :

```python
def validasiInfo(karyawan):
    if 'nama' not in karyawan:
        raise Exception('Data nama pada karyawan tidak ditemukan')
    if 'umur' not in karyawan:
        raise Exception('Data umur pada karyawan tidak ditemukan')
    if 'gaji' not in karyawan:
        raise Exception('Data gaji pada karyawan tidak ditemukan')
```

Apakah menurut kalian kode diatas sudah menerapkan DRY? tentu saja **belum**. Lalu, bagaimana kode yang benar dan sesuai? Mari kita ubah

```python
def validasiInfo(karyawan):
    listInfo = ['nama', 'umur', 'karyawan']
    
    for info in listInfo:
        if info not in karyawan:
            raise Exception('Data {} pada karyawan tidak ditemukan'.format(info))
```

Nah, ini baru bisa dikatakan kode dengan penerapan prinsip DRY. Lebih mudah debug satu loop yang menangani 100 loop daripada 100 block kode yang menangani 1 loop.

Lalu, apakah DRY hanya sebatas tentang kode dan logikanya saja? <mark>**Prinsip DRY bukan hanya sebatas tentang kode**<mark>

Seperti yang dibilang diawal, implementasi DRY juga mengacu pada fungsionalitas serta algoritma dalam program. Jadi secara luas, DRY adalah prinsip anti-perulangan yang tidak perlu.

Sudah dapat gambaran tentang prinsip ini? kalau sudah mari kita lanjut ke prinsip berikutnya.

<br>

## 3. You Aren't Gonna Need It (YAGNI)

<hr>

Apa maksud dari prinsip ini? YAGNI adalah prinsip untuk menulis kode yang kalian butuhkan **sekarang** dan tidak boleh membuat kode yang **_mungkin_** akan kalian butuhkan di masa mendatang.

Seringkali kita sebagai developer pasti berpikir ke depan, dan kadang kala kita menulis kode dengan pikiran _"nanti bakal butuh nih"_ atau _"kalau - kalau bakal dipakai nih"_. Dalam prinsip ini, itu salah.

Ketika kalian merasa ragu saat membuat kode untuk menambahkan fitur yang saat ini belum perlu, tapi menurut kalian fitur ini akan berguna dimasa mendatang. Ada dua hal yang perlu kalian perhatikan.

1. Saat ini apakah ada pekerjaan yang masih tertunda?
2. Apakah kalian bekerja sendiri tanpa bantuan tim?

Jika kedua hal itu **benar**, maka anbi sarankan untuk menggunakan prinsip YAGNI.

Dengan mengimplementasikan prinsip idealis YAGNI, kalian akan menghemat banyak waktu dan dapat melanjutkan projekmu secara efisien.

<br>

## 4. SOLID

<hr>

Apa itu prinsip SOLID? **SOLID** adalah sebuah akronim dari lima prinsip _object-oriented design_ (OOD) oleh **Robert C. Martin**. Prinsip ini biasa diterapkan pada saat berkecimpung dalam pemrograman berorientasi objek.

Apa manfaat menggunakan prinsip SOLID? Bagaimana prinsip ini membantu kita dalam menulis kode yang lebih baik?

Prinsip _object-oriented design_ mendorong kita untuk mendevelop sebuah program dengan membuat program yang mudah dirawat, yang mudah dimengerti serta fleksibel.

Jika solid adalah singkatan dari lima prinsip OOD, lalu apa saja prinsip - prinsipnya?

Ini dia singkatan dari SOLID:

* **S** - _Single-Reponsibility Principle_

Setiap _class_ hanya punya **satu tugas**. Sehingga kelas itu hanya punya satu alasan untuk berubah, yakni merubah **satu tugas** tersebut.

* **O** - _Open-Closed Principle_

Sebuah _class_ yang sudah ditulis dan disepakati perilakunya (_behaviour_), harus mudah diwariskan dan tidak boleh diubah - ubah kembali.

* **L** - _Liskov Substitution Principle_

Sebuah _class_ turunan harus bisa menjadi pengganti class _parent_-nya.

* **I** - _Interface Segragation Principle_

Sebuah _interface_ **tidak boleh** menyediakan semua service untuk client objek. Satu interface hanya memiliki satu tugas spesifik untuk tiap clientnya.

* **D** - _Depedency Inversion Principle_

Modul dengan level tinggi tidak boleh bergantung pada modul dengan level rendah. Keduanya harus bergantung pada abstraksi, dan abstraksi harus bergantung pada detail.

> Untuk pembahasan lebih detail tentang SOLID : [Prinsip S.O.L.I.D Dalam Pemrograman Berorientasi Objek](https://anbidev.com/prinsip-solid)

<br>

## 5. Separation Of Concerns (SOC)

<hr>

**_Separation Of Concerns_** adalah versi abstrak dari prinsip _single responsibility_ dan _interface segragation_ pada prinsip SOLID.

Makna dari Prinsip **SOC** adalah bahwa sebuah program harus dirancang dengan bagian yang berbeda - beda, dan setiap bagian tidak boleh memiliki akses satu sama lain.

Contoh dari penerapan prinsip ini ada pada konsep **Model-View-Controller** (**MVC**). MVC membagi program menjadi 3 bagian : penanganan data (model), penanganan logic (controller) dan penanganan tampilan (view).

!["MVC Dalam Kerang"](/post/prinsip-dasar-programmer-03.jpg "MVC In Nutshell")

Kode yang menangani database pada _model_ tidak tahu cara menampilkan data tersebut pada browser. Kode pada tampilan menangani input user, tapi untuk proses nya akan ditangai oleh bagian logic. Setiap bagian tersebut sepenuhnya independen.

Hasil dari penerapan prinsip ini membuat kode mudah untuk di_debug_. Sehingga, kalau kalian ingin mengubah kode pada tampilan, kalian tidak perlu kawatir bagaimana data akan disimpan atau bagaimana logic proses akan bekerja.

Mungkin butuh latihan dan pengalaman dalam menerapkan prinsip pada kode kita, yang penting punya gambaran dulu lah hehe :smile:

<br>

## 6. Clean Code

<hr>

**Clean code** adalah konsep penulisan kode script aplikasi dengan format yang baik dan benar serta rapi dengan tujuan memudahkan penulis atau orang lain memelihara (_maintanance_) kode yang kita buat.

Sebenarnya _clean code_ bukan lagi menjadi prinsip, tapi sebuah keharusan dalam membuat kode yang baik.

Programmer yang baik akan membuat kode yang baik pula. Kode yang mudah dibaca, meninggalkan komentar seperlunya, mematuhi _style code_ yang disepakati bersama (team).

> Untuk pembahasan lebih detail tentang Clean Code : [Menerapkan Clean Code Pada Script Kita](https://anbidev.com/clean-code)

<br>

## 7. Debugging Principle

<hr>

Jika kita tadi telah mengetahui prinsip dari membuat aplikasi, maka yang terakhir adalah prinsip untuk melakukan _debug_.

Apa itu _debugging_?

Debugging adalah proses dalam mengidentifikasi serta memperbaiki kesalahan serta potensi kesalahan yang tertulis pada sebuah program. Sehinggga menyebabkan terjadinya output yang tidak diinginkan.

Prinsip apa saja yang perlu diperhatikan dalam melakukan _debugging_?

1. Identifikasi masalah untuk memutuskan dimana _debugger_ akan diterapkan.
2. Pasang tempat berhenti atau pause (breakpoint) pada baris yang dianggap krusial.
3. Periksa apakah variabel pada kode tersebut memunculkan output yang benar.
4. Jika output salah, perbaiki kode yang menyebabkan masalah tersebut.
5. Jika proses perbaikan selesai atau output sudah benar, lanjutkan ke _breakpoint_ selanjutnya.
6. Setelah semua proses selesai, jalankan program dari awal sampai akhir dan lihat apakah sudah sesuai ekspetasi.

Prinsip debugging seperti ini memang sangat rumit dan ribet, tapi anbi jamin hal ini dapat meminimalisir terbuangnya waktu daripada melakukan proses debugging secara asal.

<center>  . . . </center>

Itulah 7 prinsip yang bisa kalian terapkan untuk menjadi programmer yang baik bagi nusa bangsa dan negara :smile:. Oke sekian dulu, nanti lanjut dipostingan yang lain.