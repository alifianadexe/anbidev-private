+++
authors = "hamid"
cover = "/post/blockchain.png"
date = 2021-12-12T17:00:00Z
description = "Struktur sederhana dari blockchain"
series = "Dasar Blockchain"
shortcode = "struktur"
status = "publish"
sumber = ["https://dictionary.cambridge.org/dictionary/english/ledger", "https://mlsdev.medium.com/blockchain-architecture-basics-components-structure-benefits-creation-beace17c8e77", "https://www.dummies.com/article/business-careers-money/personal-finance/cryptocurrency/what-is-a-blockchain-and-how-does-it-work-262432"]
tags = ["blockchain"]
title = "Struktur Blockchain"
tutorials = ["blockchain"]
type = ["tutorial"]
url = "struktur-blockchain"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada dasarnya blockchain sama seperti database pada umumnya. Pada artikel [sebelumnya](https://anbidev.com/perkenalan-blockchain/ "Perkenalan Blockchain"), Anbi sudah jelaskan jika blockchain adalah sebuah ledger yang terdistribusi. Menurut `Cambridge Dictionary`, definisi dari ledger adalah “sebuah buku untuk mencatat sesuatu, khususnya aktifitas bisnis dan keluar masuk uang. “ Coba bayangkan, sebuah ledger digital yang tidak akan rusak, yang isinya tidak hanya transaksi keuangan saja namun data virtual lain. Blockchain mampu mencatat rekam medis, kepemilikan tanah, pemungutan suara, dll. Blockchain sifatnya terdistribusi (`distributed`), dibagikan (`shared`), dan tetap (`immutable`) dan mencatat sejarah transaksi mulai dari transaksi pertama kali. Hal ini menciptakan keamanan, pertanggungjawaban, dan transparansi data.

<br>

### Database vs Blockchain System

<hr>

![Illustrasi Client Server](/post/database_traditional.png "Illustrasi Client Server")

Artisektur dari World Wide Web menggunakan jaringan `client-server`. Artinya, server menyimpan semua informasi pada satu tempat dan administrator dapat dengan mudah mengontrol dan mengolah data secara terpusat. Individu yang tidak bertanggung jawab juga bisa saja masuk kedalam sistem milik Admin Server, akan menjadi masalah besar jika Admin tersebut tidak mampu mengatasi gangguan dari luar.

![Illustrasi Peer-to-Peer](/post/database_blockchain.png "Illustrasi Peer-to-Peer")

Pada blockchain, setiap partisipan didalam network mengolah, menvalidasi dan memperbarui setiap ada data baru. Dua struktur data yang diimplementasikan adalah:

`Pointer`: variable yang menyimpan informasi dari lokasi memori milik variable lain

`Linked List`: urutan block dimana setiap block memiliki data spesifik dan terhubung ke block lain dengan bantuan pointer

![Linked List](/post/linked-list.png "Linked List")

<br>

### Struktur Block

<hr>

Blockchain menyimpan informasi dalam bentuk kelompok yang disebut dengan `blocks`. Blocks dihubungkan secara berurutan membentuk garis kontinu. Sehingga menjadi sebuah rantai block atau kita kenal dengan Blockchain. Setiap block seperti halaman pada ledger atau buku catatan. Sebuah block terdiri dari tiga komponen:

`Data`: Tipe dari data bergantung pada penggunaan Blockchain. Contohnya pada Bitcoin, data yang ada didalam block berupa detail transaksi (pengirim, penerima, jumlah coin, dll)

`Hash`: Hash adalah kode enkripsi yang berguna sebagai tanda, dapat diartikan seperti sidik jari atau tanda-tangan. Hash dibentuk dari isi block dan semua isinya, dan isinya selalu unik.

Hash dari block sebelumnya (`previous hash`): Bagian ini adalah inti dari keamaan sebuah blockchain. Karena setiap block membawa informasi dari block sebelumnya, rantai block menjadi semakin aman.

![Struktur Sederhana Blockchain ](/post/structure_blockchain_basic.png "Struktur Sederhana Blockchain ")

Anbi beri contoh sederhana blockchain. Misalnya ada tiga block dengan isi masing-masing block adalah sebagai berikut:

**Block 1** berisi:

* Data: 1 Bitcoin dari Aqshol ke Bagus
* Hash: 12EF
* Previous Hash: 0000

**Block 2** berisi:

* Data: 5 Bitcoin dari Bagus ke Hamid
* Hash: E12J
* Previous Hash: 12EF

**Block 3** berisi:

* Data: 10 Bitcoin dari Hamid ke Aqshol
* Hash: Q36M
* Previous Hash: E12J

![Contoh Sederhana Blockchain ](/post/structure_blockchain_example.png "Contoh Sederhana Blockchain ")

Seperti contoh diatas, setiap block memiliki hash sendiri dan hash milik block sebelumnya. Jadi, block 3 menunjuk ke block 2, dan block 2 menunjuk ke block 1. Pada block 1 atau block pertama tidak menunjuk block manapun. Block pertama disebut juga `genesis block`

<br>

### Bagaimana blockchain mengamankan dirinya sendiri

<hr>

Mengubah isi salah satu block didalam blockchain hampir tidak mungkin untuk dilakukan. Blockchain mengamankan dirinya sendiri dengan `hashing`. Mengubah data dari satu block akan mengubah hash dari block tersebut. Hal ini akan menyebabkan hash dari block lain yang menunjuk ke block tersebut menjadi `invalid`

Selain hash, blockchain juga memiliki keamanan tambahan seperti proof-of-work. `Proof-of-Work (PoW)` adalah mekanisme untuk `melambatkan` pembuatan block baru. Contohnya pada Bitcoin, membutuhkan waktu 10 menit untuk mengkalkulasi PoW dan menambah block baru kedalam chain. Hal ini membuat perubahan data didalam block menjadi sangat sulit. Jika kamu ingin merubah data suatu block, maka kamu juga perlu mengubah block selanjutnya. Pada blockchain seperti Bitcoin, memiliki ratusan ribu block, jadi kemungkinan untuk memanipulasinya bisa lebih dari 10 tahun.

Langkah ketiga sebuah blockchain mengamankan dirinya sendiri adalah dengan `didistribusikan`. Blockchain tidak memiliki entitas tersentral yang mengelola chain. Sebagai gantinya, Blockchain menggunakan jaringan `peer-to-peer (P2P)`. Pada public blockchain seperti Bitcoin, semua orang diizinkan untuk bergabung. Setiap anggota dari jaringan disebut dengan `validator` atau `node`. Saat ada anggota baru yang bergabung kedalam jaringan, dia mendapatkan salinan dari Blockchain.

Blockchain juga terus dikembangkan. Salah satu pengembangan terakhirnya di dalam ekosistem cryptocurrency adalah smart contract. `Smart Contract` adalah program yang disimpan didalam blockchain. Smart Contract dapat mengontrol secara langsung transaksi cryptocurrency atau aset digital lain tergantung dengan kondisi tertentu.