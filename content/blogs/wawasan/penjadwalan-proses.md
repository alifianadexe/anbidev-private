+++
authors = "bagus"
categories = ["ilmu", "fakta"]
cover = ""
date = 2021-04-08T17:00:00Z
dateUpdate = 2021-04-08T17:00:00Z
description = "Materi mebahas soal penjadwalan proses pada materi Sitem Operasi"
series = ""
status = "publish"
tags = ["mata kuliah", "belajar", "fakta"]
title = "Penjadwalan Proses - Sistem Operasi"
type = ["cpu", "komputer", "kuliah", "sistem operasi"]
url = "/penjadwalan-proses"
[author]
images = ""
name = "bagus"

+++
Halo anbies, kali ini kita akan membahas Materi Penjadwalan Proses. Apa itu? Nah materi ini saya comot di Mata Kuliah Sistem Operasi. di bahasan kali ini mungkin masih membahas mengenai teorinya saja, belum sampai ke bab perhitungan mengenai penjadwalan tersebut. Jadi langsung saja kita bahas bareng ya.

Biasanya pada kasus sistem multiprogramming, sangat mungkin beberapa program akan menempati pada sisi memori utama (RAM) sekaligus. Lalu apakah hal tersebut akan berjalan dalam waktu bersamaan? Kalau tidak bersamaan, maka yang mana akan dijalankan terlebih dahulu? Maka dari itu solusinya adalah Manajemen/Penjadwalan proses, yang bertujuan untuk mengatur pelaksanaan eksekusi oleh prosesor untuk setiap proces yang diantrikan sedemikian hingga memenuhi tujuan sistem, dengan begitu bila response time cepat, maka lebih banyak program yang dapat terselesaikan, dan Prosessor akan bekerja secara efisien.

#### Definisi Penjadwalan Proses

Penjadwalan disini memiliki makna kumpulan kebijaksanaan dan mekanisme di sebuah sistem operasi yang berkaitan dengan urutan proses kerja dalam memutuskan proses mana yang akan dijalankan dahulu, kapan berjalan atau berapa lama proses itu berjalan. Penjadwalan proses pun memiliki kriteria untuk mengukur dan optimasi kinerja penjadwalan, yakni :

**a. Adil (fairness**) --> Proses yang diperlakukan sama, yakni mendapat jatah waktu pemroses yang sama dan tak ada proses yang tak kebagian layanan pemroses sehingga mengalami kekurangan waktu

**b. Efisiensi (eficiency)** --> pemroses dihitung dengan perbandingan (rasio) waktu sibuk pemroses

**c. Waktu tanggap (response time)** -->

* Sistem interaktif, terminal response time yakni waktu yang dihabiskan dari saat karakter terakhir dari perintah dimasukkan sampai hasil pertama muncul dilayar
* Sistem waktu nyata, realtime/event response time adalah waktu dari saat kejadian (internal atau eksternal) sampai instruksi pertama layanan yang dimaksud dieksekusi.

**d. Turn around time** --> waktu yang dihabiskan dari saat program mulai masuk ke sistem sampai proses diselesaikan oleh sistem.

**e. Throughput** --> jumlah kerja yang dapat diselesaikan dalam satu unit waktu.

#### Tipe Penjadwalan

1\. Penjadwalan Jangka pendek (short term scheduler) --> menjadwalkan alokasi pemroses diantara proses yang ready di memori utama.

2\. Penjadwalan jangka menengah (medium term scheduler) --> Setelah eksekusi selama selang beberapa waktu, proses mungkin menunda sebuah eksekusi karena membuat permintaan request input/output atau memanggil system call.

3\. Penjadwalan Jangka Panjang (long term scheduler) --> bekerja terhadap antrian batch dan memilih batch berikutnya yang harus dieksekusi. Batch biasanya adalah proses-proses dengan penggunaan sumber daya yang intensif (yaitu waktu pemroses, memori, perangkat I/O).Memiliki prioritas rendah

#### Strategi Penjadwalan

1\. Penjadwalan Preemtive --> Proses diberi jatah waktu oleh pemroses, yang mana pemroses dapat diambil alih (interupsi) proses lain, sehingga proses disela sebelum selesai dan harus dilanjutkan menunggu jatah waktu pemroses kembali pada proses itu.

2\. Penjadwalan non-preemtive --> proses yang sedang berjalan tidak dapat disela, sekali proses berada di status runnung maka proses akan dieksekusi terus sampai proses berhenti karena selesai atau diblok untuk menunggu I/O .

#### **Algoritma Penjadwalan**

***

#### **Nonpreemtive :**

#### a. FIFO (First In First Out) atau FCFS (First Come First Serve)

Proses-proses diberi jatah waktu pemroses berdasarkan waktu kedatangan. Pada saat proses mendapat jatah waktu pemroses, proses dijalankan sampai selesai. Penjadwalan ini :

* Baik untuk sistem batch yang sangat jarang berinteraksi dengan pemakai. Contoh : aplikasi analisis numerik, maupun pembuatan tabel.
* Sangat tidak baik (tidak berguna) untuk sistem interaktif, karena tidak memberi waktu tanggap yang baik.
* Tidak dapat digunakan untuk sistem waktu nyata (real-time applications).

#### b. SJF (Shortest Job First)

Waktu jalan proses sampai selesai diketahui sebelumnya. Mekanismenya adalah menjadwalkan proses dengan waktu jalan terpendek lebih dulu sampai selesai, sehingga memberikan efisiensi yang tinggi dan turn around time rendah dan penjadwalannya tak berprioritas.

Masalah yang muncul adalah :

* Tidak mengetahui ukuran job saat job masuk. Untuk mengetahui ukuran job adalah dengan membuat estimasi berdasarkan kelakukan sebelumnya.
* Proses yang tidak datang bersamaan, sehingga penetapannya harus dinamis.
* Penjadwalan ini jarang digunakan, karena merupakan kajian teoritis untuk pembandingan turn around time.

#### c. HRN (Highest Ratio Next)

* Penjadwalan berprioritas dinamis.
* Penjadwalan untuk mengoreksi kelemahan SJF.
* Adalah strategi penjadwalan dengan prioritas proses tidak hanya merupakan fungsi waktu layanan tetapi juga jumlah waktu tunggu proses. Begitu proses mendapat jatah pemroses, proses berjalan sampai selesai

#### d. MFQ (Multiple Feedback Queues)

* Penjadwalan berprioritas dinamis
* Penjadwalan ini untuk mencegah (mengurangi) banyaknya swapping dengan proses-proses yang sangat banyak menggunakan pemroses (karena menyelesaikan tugasnya memakan waktu lama) diberi jatah waktu (jumlah kwanta) lebih banyak dalam satu waktu.
* Penjadwalan ini juga menghendaki kelas-kelas prioritas bagi proses-proses yang ada. Kelas tertinggi berjalan selama satu kwanta,kelas berikutnya berjalan selama dua kwanta, kelas berikutnya berjalan empat kwanta, dan seterusnya.

#### **Preemtive :**

#### a. RR (Round Robin)

* Penjadwalan yang paling tua, sederhana, adil,banyak digunakan algoritmanya dan mudah diimplementasikan.
* Penjadwalan ini bukan dipreempt oleh proses lain tetapi oleh penjadwal berdasarkan lama waktu berjalannya proses (preempt by time).
* Penjadwalan tanpa prioritas. Berasumsi bahwa semua proses memiliki kepentingan yang sama, sehingga tidak ada prioritas tertentu.

Masalah yang timbul adalah menentukan besar kwanta, yaitu :

* Kwanta terlalu besar menyebabkan waktu tanggap besar dan turn arround time rendah.
* Kwanta terlalu kecil menyebabkan peralihan proses terlalu banyak sehingga menurunkan efisiensi proses.

#### b. SRF (Shortest Remaining First)

* Penjadwalan berprioritas dinamis.
* Adalah preemptive untuk timesharing
* Melengkapi SJF

Pada SRF, proses dengan sisa waktu jalan diestimasi terendah dijalankan, termasuk proses-proses yang baru tiba.

* Pada SJF, begitu proses dieksekusi, proses dijalankan sampai selesai.
* Pada SRF, proses yang sedang berjalan (running) dapat diambil alih proses baru dengan sisa waktu jalan yang diestimasi lebih rendah.

#### c. PS (Priority Schedulling)

Tiap proses diberi prioritas dan proses yang berprioritas tertinggi mendapat jatah waktu lebih dulu (running).

#### d. GS (Guaranteed Schedulling)

Memberikan guarantee(jaminan) yang realistis (memberi daya pemroses yang sama) untuk membuat dan menyesuaikan performance adalah jika ada N pemakai, sehingga setiap proses (pemakai) akan mendapatkan 1/N dari daya pemroses CPU. Untuk materi berikutnya kita akan membahas mengenai perhitungan pada algoritma .tersebut

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah .Terima kasih :)