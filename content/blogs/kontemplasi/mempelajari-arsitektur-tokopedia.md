+++
authors = "adexe"
categories = ["kontemplasi"]
cover = "/post/web-tokopedia.jpg"
date = 2020-12-29T00:00:00Z
dateUpdate = 2020-12-29T00:00:00Z
description = "Mari kita sejenak membahas tentang bagaimana arsitektur tokopedia dari kacamata seorang ahli"
series = "Opini"
status = "publish"
tags = ["blog", "opini"]
title = "Belajar Dari Pondasi Awal Arsitektur Tokopedia"
type = ["blogs", "blog"]
url = "/mempelajari-arsitektur-tokopedia/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Beda hari, beda cerita, kemarin kita sudah membahas tentang [Arsitektur Blibli Dari Kacamata Seorang Ahli](https://anbidev.com/mempelajari-arsitektur-blibli/), sekarang ditambah lagi sesi "Kuliah Tambahan" ini. Kali ini boss saya membahas tentang teknologi **Tokopedia** dari masa ke masa.


Mari kita lihat artikel dari [Labana.id](https://labana.id) tentang [Teknologi Tokopedia Dari Masa Ke Masa](https://www.labana.id/view/buka-bukaan-teknologi-tokopedia-dari-masa-ke-masa/2016/04/29/?fullview). Artikel menarik, bercerita tentang topologi sistem yang digunakan tokopedia waktu itu. Memang, sudah tidak relevan pastinya dengan kondisi saat ini, namun masih merupakan bahasan yang menarik untuk dipelajari.

<br>

## Mari Kita Pemanasan Sambil Ngopi

<hr>

Tokopedia didirikan oleh orang hebat yaitu, [William Tanuwijaya](https://www.linkedin.com/in/williamtanuwijaya/) dan [Leontinus Alpha Edison](https://id.linkedin.com/in/leontinus-alpha-edison), tentunya dibantu juga oleh [Victor Fungkong](https://www.linkedin.com/in/victor-fungkong-313250193/) (Pemodal pertama Tokopedia). Mereka mulai membangun Tokopedia sejak Januari 2009. Untuk mengejar pertumbuhan teknologi yang sangat pesat, mereka memulai Tokopedia.

Perlu kalian pahami sebelumnya, topologi sistem merupakan hal yang bersifat spesifik bergantung pada **goal / tujuan** dari sebuah sistem tersebut dibuat. <mark>Jadi, topologi yang sama belum tentu memberikan hasil yang sama ketika diterapkan pada sistem lain dengan tujuan penggunaan yang berbeda</mark>.

Misal saya memiliki Enterprise system yang dikembangkan menggunakan pendekatan yang jauh berbeda dari yang dilakukan oleh *public service* system seperti tokopedia. Namun, dalam titik-titik tertentu, kendala, ataupun permasalahan yang dihadapi bisa saja sama.

Disinilah konteksnya, pada artikel tadi kita belajar bagaimana tokopedia menangani dan membangun solusi atas kasus - kasus yang muncul yang merupakan *real case* dan bukan sekedar teori secara aktual di lapangan. 

Tantangannya adalah bagaimana *enterprise sistem* menangani dan membangun solusi atas kasus - kasus tersebut dengan pendekatan dan solusi yang sesuai dengan fungsi dan tujuan utama sistem tersebut dibuat.

<br>

## Tokopedia Dengan Intronya

<hr>

Leontinus Alpha Edison dulu nya bukan orang yang cukup dikenal di lingkungan komunitas programer Indonesia. Bahkan boss saya pernah ngobrol dengan masternya Perl di Indonesia, Ikhlasul Amal, beliau juga gak kenal dulunya, bukan tipikal orang yang aktif dalam komunitas. 

Hanya yang pasti saat dulu ia memulai menulis script untuk Tokopedia, sangat terlihat idealisme nya, dengan memilih menggunakan oracle dan bukan **RBMS** yang umum yang digunakan di komunitas Perl (**PGSQL**).

Tokopedia sendiri dulunya bukanlah seperti yang kita kenal sekarang. Pertama kali Tokopedia dikenalkan semata mata sebagai alternatif pembayaran atas transaksi jual beli online yang saat itu umum digunakan sebagai media antara di Kaskus atau dikenal sebagai REKBER.

> **RekBer** (rekening bersama) merupakan suatu metode pembayaran atau transaksi yang dilakukan online.

Tokopedia membuat sendiri platform yang memungkinkan pengguna bisa melihat lihat produk seperti hal nya di etalase, sehingga penjual tidak rebutan untuk saling **sundul!** hanya untuk meraih perhatian calon pembeli.

Misi Tokopedia adalah menyediakan sarana REKBER yang berbentuk organisasi dan bukan perorangan sehingga bisa dipercaya digunakan untuk transaksi online yang melibatkan jumlah cukup besar. Sebab itu, dulunya Tokopedia mulai dikenal sebagai alternatif wahana untuk jual beli handphone karena menyangkut nominal jutaan rupiah.

Karena banyak kasus REKBER perorangan menghilang dan membuat buruk citra jual beli transaksi online. Karena niat nya sederhana, dan dimulai secara perorangan, tidak perlu programmer kapalan untuk memulai. 

Situs Tokopedia awalnya sangat sederhana banyak mengambil layout ataupun model yang digunakan oleh *script online shopping* berbasis Perl yang kebanyakan *open source* saat itu. Tentu lambat dan sulit karena masih menggunakan arsitektur sederhana.

<br>

## Mari Bahas Arsitekturnya

<hr>

Berbeda dengan kaskus yang saat itu sudah menggunakan server yang berlokasi di *United State* (US), hosting Tokopedia di **CBN**. Ditambah lagi *Oracle Express Edition* memang sengaja oleh oracle dibatasi *throttle* nya.

**Throttle** yang dimaksud disini adalah TPS atau *transaction per second*. Dan dari pengalaman Leon juga sepertinya belum mendalami penggunaan RDBMS secara efisien. Customer Tokopedia kebanyakan awalnya adalah seller -  seller HP yang umumnya saat itu banyak didominasi oleh etnis Tionghoa.

Setelah merekrut tambahkan orang yang lebih mengerti teknis, mereka kemudian menganalisis permasalahan dan memisahkan aktifitas yang mengkonsumsi *resource* lebih besar terpisah dari layanan untuk menampilkan data (*displaying data*).


!["Topologi Apps Kedua Tokopedia"](/post/arsitektur-tokopedia-01.jpg "Topologi Apps Kedua Tokopedia")

Mereka masih menggunakan Apache karena memang yang paling terkenal saat itu, ditambah mekanisme Perl kebanyakan adalah sebagai CGI yang meng*generate* halaman web sebagai *static page*, Perl hanya efektif untuk searching.


!["Topologi Apps Ketiga Tokopedia"](/post/arsitektur-tokopedia-02.jpg "Topologi Apps Ketiga Tokopedia")

Kendala baru mulai terasa setelah ukuran database yang digunakan mencapai limit, akhirnya pindah ke PostgreSQL, yang umum banyak dipakai oleh komunitas Perl. Dan fitur ***active replication*** langsung mereka manfaatkan.

> **Replikasi** adalah suatu teknik untuk melakukan copy dan pendistribusian data dan objek-objek database dari satu database ke database lain dan melaksanakan sinkronisasi antara database sehingga konsistensi data dapat terjamin.

Tujuan *active replication* ataupun *WAL streaming replication* ini adalah untuk memungkinkan implementasi ***database cluster***, yang memungkinkan operasi *INSERT*, *UPDATE*, dan *DELETE* dilakukan pada node ataupun *instance* yang terpisah dari node utama yang digunakan untuk operasi *SELECT*.

Kenapa demikian, karena tipikal *public service system* adalah 90% lebih operasi utama adalah melibatkan dalam masalah menampilkan data (*displaying data*), otomatis operasi utama di database adalah *SELECT*.

Sayangnya analisis ini pun menghapus hasil analisis sebelumnya, mungkin karena mereka juga masih muda, tapi terlihat dari yang sebelumnya, arsitektur ini sudah benar pada perubahan II. Pada arsitektur III mereka balik lagi karena menganggap RDBMS adalah issue utama, yang kemudian mereka menyadari kesalahan itu di arsitektur IV. 

Arsitektur yang Ideal-nya seharusnya arsitektur III ini adalah arsitektur II, dan sebaliknya. Di arsitektur IV mereka mulai memanfaatkan NGINX karena lebih ringan daripada Apache yang lebih berat.

!["Topologi Apps Keempat Tokopedia"](/post/arsitektur-tokopedia-03.jpg "Topologi Apps Keempat Tokopedia")

Kenapa mereka tidak memanfaatkan ***Haproxy***? Karena saat itu fokus keduanya berbeda, fokus utama *Haproxy* adalah *TCP load balancer*, sementara NGINX lebih fokus sebagai **HTTP server**, dan otomatis fitur *balancer* yang ada fokusnya benar - benar sebagai **HTTP balancer**.

Apakah *TCP load balancer* tidak bisa digunakan sebagai HTTP balancer? Secara umum tentunya bisa, sangat bisa. Jika *Haproxy* mampu menangani stream TCP, stream HTTP pastinya juga bisa.

Hanya saja bedanya, karena dianggap sebagai stream ataupun *raw data*, *Haproxy* tidak bisa memisahkan berdasarkan jenis *request* stream tersebut, artinya *Haproxy* tidak membaca jenis *request*nya apa, apakah GET, POST, PUT ataukah UPDATE.

Sebaliknya NGINX karena basis nya adalah HTTP server, fitur *balancer* nya mampu membaca jenis *request* ini dan mengalihkan ke node yang sesuai. Artinya semua node yang berada di layer di bawah *Haproxy* bersifat sama, memiliki fungsi sama, non-spesifik.

Tentunya ini gak sesuai dengan konteks dari tujuan Tokopedia menggunakan balancer, ataupun sistem yang bersifat *public service*, karena frekuensi operasi SELECT jauh lebih besar daripada operasi lainnya. Sementara bagi tipikal *enterprise sistem*, operasi INSERT , UPDATE dan DELETE ini frekuensinya jauh lebih besar.

Semakin besar pengguna Tokopedia semakin mereka menyadari akses terhadap layanan *displaying data* pun harus dibenahi. Mengandalkan file system OS untuk menangani *request* terhadap *static file* membuat server mulai terlihat kepayahan.

Diantara kalian apakah mungkin kalian pernah mengalami kasus sulit untuk mengakses file yang berada pada satu folder bersama puluhan ribu file lain? Kira kira seperti itu kasus nya. Di Tokopedia mungkin bisa mencapai ratusan ribu atau jutaan file.

Di titik ini, bukan hanya kapasitas *storage* masalahnya, kemampuan OS juga menjadi terbatas. Karena OS dirancang hanya untuk keperluan umum, bukan untuk kebutuhan ataupun kasus yang sangat spesifik seperti ini. Tentunya untuk ini butuh sistem ataupun infrastruktur yang mampu menangani manajemen secara terpisah, itulah sebabnya mereka menggunakan **CDN** (*content delivery network*).

> **CDN** adalah sekelompok server yang ditempatkan di berbagai lokasi untuk menyebarkan konten web ke sejumlah wilayah geografis yang luas

Implementasinya banyak, **Hadoop** dan **GlusterFS** adalah salah dua nya, Begitu pula hal nya dengan content yang banyak memanfaatkan BLOB dalam bentuk text, mereka menggunakan MongoDB untuk memungkinkan akses terhadap text data bisa dilakukan secara efisien.

Apakah **PostgreSQL** tidak bisa? Tentu saja bisa. Pertimbangan menggunakan MongoDB ini karena saya percaya lebih bersifat emosional. Jargon MongoDB dipercaya lebih efisien dalam mengakses text data dalam bentuk JSON. 

Pada dasarnya secara teknis semua RDBMS pastinya bisa, karena asumsi nya semua permasalahan terkait *storage management* dan lain - lain, merupakan variabel yang konstan, sama dihadapi oleh semua RDBMS.

Tinggal kembali pada cara yang ditempuh RDBMS dalam memberikan solusi yang membedakannya. Yang lebih utama adalah bagaimana cara programer membangun struktur data menggunakan BLOB content ini yang tadinya menjadi sumber masalah utama.

<br>

## Moral Of The Story

<hr>

Nah kita sampai dipenghujung pembahasan "kuliah tambahan" ini. Sekarang dari artikel pembahasan yang kemarin [Arsitektur Blibli Dari Kacamata Seorang Ahli](https://anbidev.com/mempelajari-arsitektur-blibli/) dengan artikel ini, moral apa yang dapat kita ambil dari 2 artikel ini?

Bos saya berkata, ia memiliki 3 kesimpulan tentang dua hal ini :

  1. ***Right Technology For The Right Purpose***

  Semua teknologi memiliki batasan atas penggunaannya, baik itu bahasa pemrograman ataupun teknologi secara umum, pastikan untuk memahami batasan tersebut dan mengimplementasikannya. ***Pilih teknologi yang sesuai dengan tujuanmu***


  2. **Pahami Teknologi Yang Kamu Gunakan**

  Sebelum menyimpulkan keterbatasan dari suatu teknologi, analisis terlebih dulu apakah batasan tersebut memang karena teknologi-nya, atau keterbatasan yang disebabkan karena kita yang **KURANG MEMAHAMI** cara menggunakan teknologi tersebut secara optimal. 
  
  Dalam banyak kasus 80% permasalahan bukan disebabkan karena keterbatasan teknologi, melainkan karena programmernya yang keliru dalam memanfaatkan teknologi tersebut.

  3. **Jika orang lain bisa, Kita Belum Tentu Bisa**

  Tokopedia sukses karena memiliki ekosistem pengguna yang kuat, fundamental ekonomi Indonesia banyak didukung oleh komunitas etnis Tionghoa, ekosistem inilah yang membantu mengarahkan pada pemilik modal yang kuat pula. 

  Buang jauh jauh nasihat **Mario Teguh** bahwa *"Jika orang lain bisa, anda Pasti Bisa"*. sebab untuk menjadi bisa, ada banyak faktor yang mempengaruhi untuk menjadi bisa, dan bukan hanya dari kita sendiri.

  <center> . . . </center>

Saya berterima kasih kepada Bos saya karena telah menyebarkan ilmunya ini lewat "kuliah tambahan" kepada para anggota tim-nya. Dengan begitu saya bisa meneruskan ilmu - ilmu ini untuk nanti nya bisa bermanfaat untuk programmer - programmer *wannabe* lainnya.