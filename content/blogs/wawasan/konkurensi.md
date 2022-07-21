+++
authors = "bagus"
categories = ["kuliah", "sistem operasi", "umum"]
cover = "/post/web-konkurensi.jpg"
date = 2021-05-02T17:00:00Z
dateUpdate = 2021-05-02T17:00:00Z
description = "Konkurensi yang terjadi didalam proses komputer"
series = ""
status = "publish"
tags = ["konkurensi", "sistem operasi"]
title = "Apa itu Konkurensi ?"
type = []
url = "/konkurensi"
[author]
images = ""
name = "bagus"

+++
Sebagai pengguna smartphone, komputer dan berbagai macam gadget lainnya kita tidak akan lepas yang namanya multi tasking. Ya, pekerjaan atau proses yang dikerjakan secara bersamaan atau lebih dari satu didalam waktu yang sama. Dewasa ini pastilah komputer, smartphone kita sudah memiliki teknologi multiprocessor, multicore hingga multithread.Kenapa begitu, karena sebuah prosesor untuk saat ini masih memiliki keterbatasan clock speed ang menjadi salah satu teknologi multi ini ada.

### Apa itu Konkurensi?

Konkurensi adalah kondisi kejadian dimana banyak proses berjalan di waktu yang bersamaa. Pada proses konkuren yang berinteraksi mempunyai beberapa masalah yang harus diselesaikan. Dengan begitu konkurensi akan berkaitan dengan bagaiaman membuat struktur dan cara kerja, agar permasalahan dapat teratasi. Konkurensi merupakah kegiatan yang berhubungan dengan:

* Alokasi waktu pemroses untuk proses-proses yang aktif
* Pemakaian bersama dan persaingan untuk mendapat sumber daya
* Komunikasi antar proses
* Sinkronisasiaktivitas banyak proses

Konkurensi muncul pada 4 konteks yang berbeda, yakni :

* Banyak aplikasi
* Strukturisasi sebuah aplikasi yang terdiri atas kumpulan proses
* Strukturisasi sistem operasi
* Strukturisasi sebuah proses

Didalam konkurensi terdapat beberapa kesulitan seperti berikut.

* Aktivitas proses lain
* Cara sistem operasi menghandle interupsi
* Kebijakan penjadwalan yang dilakukan oleh sistem operasi
* Pmakaian bersama sumber daya global
* Pengelolaan alokasi sumber daya agar optimal
* Pencarian kesalahan pemrograman

Berikut beberapa masalahnya :

**Mutual Exclusion**

Dalam satu waktu interval tertentu harus ada satu proses saja yang mengakses sumber daya. Berikut fasilitas atau kemampuan dalam dukungan mutual exclusion :

1. Mutual exclusion harus dapat dipaksakan
2. Proses yang berhenti sementara pada bagian non critical harus  dapat berhenti tanpa mengganggu proses yang lain
3. Tidak boleh terjadi sebuah proses tertahan dari memasuki critical section dalam waktu yang tidak pasti: tidak boleh ada deadlock dan starvation
4. Ketika tidak ada proses yang memasuki critical section pada suatu critical resource maka proses lain yang hendak memasuki cirtical sectionnya harus diizinkan mengakses critical resource tersebut tanpa waktu tunda
5. Tidak ada asumsi yang dibuat mengenai kecepatan proses dan jumlah prosesor.

**Deadlock**

Deadlock ini merupakan salah satu permasalahan ketika pemaksaan mutual exclusion tadi. Deadlock adalah banyak proses yang saling menunggu hasil dari proses yang lain untuk dapat melanjutkan atau menyelesaikan tugasnya.  Pada umumnya deadlock terjadi karena proses mengalami startvation, yakni suatu job yang sedang dieksekusi dan tidak ada hentinya, tidak diketahui kapan berhentinya atau bahkan bisa dikatakan job yang antri mempunyai status mati. Kondisi ini merupakan kondisi terparah karena banyak proses dapat terlibat dan smeuanya tidak dapat mengakhiri prosesnya secara benar.

**Starvation**

Keadaan yang biasa terjadi setelah deadlock. Proses yang kekurangan resource tidak akan pernah mendapat resource yang dibutuhkan sehingga mengalami starvation(kelaparan). Kadang, starvation juga bisa terjadi tanpa deadlock yakni saat terjadi kesalahan dalam sistem sehingga terjadi ketimpangan dalam pembagian resource. Satu proses selalu mendapat resource, sedang proses yang lain tidak pernah mendapatkannya. Contoh starvation; seseorang memiliki 3 job atau pendingan (tugas) dan juga ingin melihat anime episode baru. Orang ini mendahulukan tugas dibanding menonton. sebelum 3 pendingan ini selesai dari atasan ada pendingan baru lagi. dan keesokan harinya pun sama ada pendingan lagi, keadaan ini terus berulang, sehingga keinginga si Orang ini untuk menonton anime akan tidak terlaksana atau tidak terpenuhi.

**Metode Penjamin Mutual Exclusion**

* Metode Variabel Lock
  1. Ketika proses hendak masuk critical section, lebih dulu memeriksa variabel lock.
  2. Jika variabel lock berisi 0 (nol), proses menset variabel lock menjadi 1 (satu) dan kemudian masuk critical section.
  3. Tetapi jika variabel lock berisi 1 berarti terdapat proses lain pada critical section sehingga proses menunggu sampai nilai variabel lock menjadi nol.
* Metode Bergantian Secara Ketat
  1. Metode ini mengamsumsikan dapat menggilir masuk critical section secara bergantian terus menerus.
  2. Metode ini melakukan inspeksi terhadap variabel yang berfungsi untuk memasuki critical section.
* Metode Busy Waiting
  1. Busy waiting adalah adanya proses yang sibuk menunggu dan tidak mengerjakan apapun sampai mendapatkan ijin untuk masuk ke critical section.
  2. Sibuk menunggu disini berarti bahwa proses tersebut sedang menunggu dan terus menerus sibuk memeriksa status ijinnya sehingga memakan waktu prosesor.
* Metode Semaphone
  1. Prinsip dasar semaphore adalah dua atau lebih proses bekerja sama dengan signal yang sederhana,misal proses dipaksa untuk berhenti di tempat yang ditunjuk sampai menerima suatu signal khusus.

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah .Terima kasih :)