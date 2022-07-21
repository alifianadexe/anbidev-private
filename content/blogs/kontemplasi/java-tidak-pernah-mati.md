+++
title = "Garbage Collector Membuat Java Never Die"
description = "Sebuah pelajaran tentang alasan kenapa java tidak pernah mati dan pemahaman lebih dalam tentang garbage collector"
type = ["blogs","blog"]
status = "publish"
tags = [
    "blog",
    "java",
    "server",
    "opini"
]
date = "2021-03-22"
categories = ["kontemplasi"]
series = "Opini"
url = "/java-dan-garbage-collector/"
authors = "adexe"
cover = "/post/dev21-05.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Pada saat itu server sedang melakukan backup database secara otomatis. Akan tetapi, proses melakukan backup terjadi lebih lama daripada biasanya. Akibatnya database tidak terbackup secara sempurna.

Setelah itu, bos saya yang sekaligus merangkap menjadi *architecture software* turun tangan mengatasi hal ini. Setelah ditelusuri ternyata memang disana terdapat beberapa proses yang tidak wajar pada saat terjadinya backup.

Lalu apa yang mendasari proses ini menjadi tidak wajar? penyebab utamanya adalah <mark>**pertumbuhan aplikasi yang terlalu besar**</mark>. 

Jumlah *session* yang aktif, yang bisa mencapai ribuan *session*. Membuat aplikasi inti yang berada pada server kewalahan dalam menangani hal ini.

Sehingga banyak memori yang membengkak dan membuat *request* terhadap aplikasi menjadi lambat. Hal ini juga mengakibatkan munculnya satu atau dua proses besar yang perlu seharusnya butuh banyak memori, akan tetapi terhambat oleh *session* atau *request* yang lain.

Apa yang bos saya lakukan? yang ia lakukan adalah memaksimalkan penggunaan ***garbage collector*** pada Java.

<br> 

## Java, Sang Makhluk Abadi

<hr>

Salah satu alasan kenapa Java *"TIDAK AKAN PERNAH MATI"* meski banyak bahasa alternatif seperti JavaScript, Golang, Rust, dan lain - lain terus bermunculan adalah karena, Java masih merupakan pilihan utama tak tergantikan pada perusahaan dengan level *enterprise* sebagai *backbone* atas *mission critical system* yang mereka miliki.

Kenapa perusahaan perusahaan tersebut memilih Java?  alasan utamanya adalah Java memberikan banyak opsi yang bisa disesuaikan kebutuhan *enterprise* sesuai dengan tujuan yang ingin dicapai dari sistem yang dibuat. 

Memiliki performa seperti C, ataupun Assembly namun resiko yang jauh lebih rendah daripada *native language* tersebut. Salah satu faktor penting yang mengurangi resiko implementasi dari java adalah keberadaan ***Garbage Collector***.

*Garbage Collector* (Pengumpulan Sampah) adalah sebuah sistem yang digunakan untuk mengatur serta mengalokasikan memori, sehingga kita tidak perlu secara manual membebaskan memori dari objek yang tidak terpakai.

Dengan *Garbage Collector*, developer tidak perlu ambil pusing untuk mengontrol alokasi dan dealokasi memori, tidak perlu pusing memantau risiko munculnya fragmentasi memori, sehingga bisa sepenuhnya fokus pada tujuan dari sistem yang sedang dikerjakan.

Namun, *Garbage Collector* ini pun memiliki kelemahan, artinya saat *Garbage Collector* ini aktif, semua aktifitas *logic* pada program akan terhenti, yang istilahnya dikenal sebagai ***stop the world*** (Zaa Waa Rudo!! :smile:).

Semakin banyak sampah, *collecting* membutuhkan waktu semakin lama, artinya *freeze* pada program juga akan semakin lama.

Sementara jika durasi waktu *collecting* dibatasi terlalu singkat, maka banyak sampah tidak berhasil dibuang, dan akhirnya memori penuh dengan sampah dan menyebabkan program tidak bisa berjalan sebagaimana mestinya.

Bayangkan kalau ini adalah sistem ERP atau sistem di perusahaan telekomunikasi atau perbankan, atau bursa efek, setiap terjadi *stop the world* (Zaa Waa Rudoo!! :smile:), Maka pada saat itu pula resiko kerugian perusahaan muncul.

> "Itu sebabnya tidak ada cerita NodeJS digunakan sebagai backbone bursa efek" - kata bos saya.

<br>

## Garbage Collector, Pedang Sang Java

<hr>

Java dikembangkan sedemikian rupa, dan ia memiliki tidak hanya satu jenis *Garbage Collector*, melainkan beberapa dengan algoritma dan juga perilaku *collecting* yang berbeda - beda. 

Masing - masing algoritma tersebut memiliki begitu banyak opsi yang bisa digunakan untuk mengontrol perilaku kerja sesuai dengan kebutuhan sistem secara spesifik.

Tantangannya adalah menemukan algoritma dan opsi yang benar benar cocok dengan karakteristik sistem serta penggunaan dilingkungan suatu organisasi.

Proses untuk menemukan ini algoritma yang cocok tidaklah mudah, sangat sulit seperti mencari jodoh :relieved: . Dikarenakan terhadap sistem yang sama, densitas penggunaan berbeda, opsinya pun juga bisa berbeda.

Sehingga sulit untuk menggunakan *dummy* system dan simulasi penggunaan, karena karakteristik serta heterogensi service-nya juga sangat fluktuatif. 

Yang pada akhirnya <s>proses pencarian jodoh</s> proses pencarian algoritma umum dilakukan langsung di server *Production*. Permasalahannya, salah opsi, sistem bisa macet ditengah-tengah proses.

Jadi, umumnya teknik yang digunakan adalah membuat opsi selonggar mungkin agar sistem bisa berjalan selama *peak time* (waktu paling sibuk) secara normal, dan bisa dimonitor perilakunya, kemudian sedikit demi sedikit dilakukan pengaturan hingga titik optimal bisa tercapai.

"Opsi selonggar mungkin" yang dalam artian, alokasi memori yang diijinkan dibuat hingga maksimum sebesar kapasitas memori server, atau servernya ditambahkan memori.

Sehingga Garbage Collector dibuat agar mampu menangani *collecting process* sebesar mungkin (*high gain*), tapi teknik ini bisa menjadi berkebalikan kalau sistem yang digunakan adalah telekomunikasi ataupun bursa efek (sekecil dan sesering mungkin).

<center> . . . </center>

Mudah - mudahan kali ini  bisa membantu memperluas wawasan kalian semua. Kita memiliki kemampuan untuk memilih teknologi yang akan kita terapkan pada lingkungan kita, namun seiring dengan kemampuan tersebut, tanggung jawab nya adalah semua resiko atas pilihan tersebut otomatis berada di tangan kita pula.

Artinya saat kita memilih teknologi, kita harus siap dengan segala resiko yang dibawa oleh teknologi tersebut, perimbangan antara kentungan bagi perusahaan kalian, dan upgrade skill yang harus dilakukan oleh kalian terkait pilihan implementasi tersebut. 

> "You can't choose one Technologies and expect other to solve your problem."


