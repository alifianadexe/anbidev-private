+++
authors = "bagus"
categories = ["wawasan", "blogs"]
cover = "/post/cover-ac.jpg"
date = 2020-11-15T17:00:00Z
dateUpdate = ""
description = "Membahas kenapa rumah kita menggunakan arus listrik AC"
series = ""
status = "publish"
tags = ["opini", "elektronika", "wawasan", "blogs"]
title = "Rumahku ber-AC (Alternate Current)"
type = ["blogs", "blog"]
url = "/rumah-ber-ac"
[author]
images = "/img/baus.jpg"
name = "bagus"

+++
**Bismillah,**

Halo readers anbi, melanjut pembahasan mengenai listrik yang lalu. temen-temen udah tahu belum sih listrik dirumah kita itu pake AC? oh waw sekali bukan. Lalu apa istimewanya sih? Di dunia yang fana ini masih diketahui ada dua jenis aliran listrik yakni **AC** dan **DC**? nah dulu sejarah mencatat mereka berdua ini bersaing, yakni antara **Tesla** dan **Edison**, pengen tahu? baca di situs lain ya, hehe.

Lanjut mengenai si AC ini kenapa ya kok PLN nyalurin listrik ke rumah kita pake AC? kok gak langsung DC aja? secara alat elektronik kita dirumah pakenya kan DC, misal Komputer, Charger, TV LED, Lampu LED, dan masih banyak lagi. Dan infonya arus AC sangat berbahaya di banding arus DC. Nah, tenang semuanya sudah diatur sama **PLN yang sedang merugi**, kasihan ya. Langsung aja kita bahas.

<br>

## **Apa itu AC ?**

***

**_Alternate Current_**, _(arus alternatif)_, yaitu arus listrik bolak-balik. Maksudnya adalah arus listrik tersebut mengalir pada sebuah penghantar yang tegangannya selalu berubah potensial atau tegangannya, yang bakal ngebentuk sebuah gelombang sinus, eh ga selalu sinus sih, contohnya kek gini.

![Gelombang arus AC](/post/gelombang-arus-ac.png "Gelombang arus AC")

<br>

## **Kenapa pake AC ?**

<hr>

Seperti pembahasan yang lalu, di Indonesia sendiri kebanyakan listrik yang digunain di perumahan itu pake **220Volt 50Hz**. Coba deh cek meteran kalian.

![https://www.idwebpulsa.com/kelebihan-kwh-meter-prabayar/](/post/meteran-prabayar.png "Meteran Prabayar")

Bagian **230V/220V** artinya listrik dirumah kita mendapat tegangan sebesar 220 volt. 50Hz itu nunjukin kalau pake frekuensi _50Hertz_ (50 gelombang per detik). kalau diibaratin lampu bohlam yang warna kuning, dia bakalan kedip-kedip sampai 50 kali dalam 1 detik. wadaw sekali ya.

Lalu kenapa kok harus pakai arus AC dalam penyaluran listrik ini? Sejarah mencatat bahwa dulu abad ke-19 terdapat perseteruan yang _epic_ antara **_Nikola Tesla_** vs **_Thomas Alva Edison_**. Yang mana dimenangkan oleh arus AC, karena arus AC dapat ditransmisikan dengan jarak yang cukup jauh menggunakan alat **Trafo** (_Transformer_) untuk menaik turunkan tegangan. Tegangan ini sangat penting guna transmisi listrik ini, kenapa? karena secara rumus daya :

> Daya = Tegangan x Arus
>
> P = V . I

Jadi kalau semisal transimi listriknya jauh banget nanti bakalan ada arus yang hilang dijalanan (dimakan habis oleh kabel transimi) dan tidak sampai ke rumah-rumah. <ins>Jadi ada dua solusi yakni **menaikkan Arus** dan **menaikkan Voltage**</ins>.

Jika **menaikkan Arus** dibutuhkan Kabel tembaga yang cukup besar dan itu sangat gak efisien dan mahal, maka dari itu dinaikkan lah Voltage-nya yang tidak perlu membutuhkan tembaga(kabel) penyaluran yang besar. Untuk **menaikkan Voltage** (tegangan) dengan menggunakan Trafo (_Transformator_) _Step-up_ saja.

Maka dari itu lebih efisien pakai Trafo untuk menaikkan tegangan. Oke paham yah. Tidak jarang juga temen-temen dengar atau pernah merhatiin ada tulisan _"Awas, Listrik bertegangan tinggi"_, iya emang betul tegangannya yang ditinggikan bukan Arusnya dan itu sangat berbahaya. Dari pembahasan itu Trafo sendiri hanya dapat bekerja di arus AC aja,kenapa tuh? ya gak tau sih hehe. Info yang saya dapat seperti itu.

<br>

## Alasan Kenapa Pakai Arus AC

<hr>

**A. Gampang untuk diubah (convert)**

Jadi buat mengubah dari AC ke DC kita cukup pakai **Dioda Penyearah** (_Rectifier_), setiap alat elektronik dimasa kini pasti memiliki komponen seperti itu. Misal lampu led, komputer, laptop, smartphone, dll. Didalam perangkat tersebut didalamnya ada sebuah rangkaian _rectifier_.

![Rangkaian AC ke DC](/post/rangkaian_ac-ke-dc.png "Rangkaian AC ke DC")

Sedangkan untuk mengubah arus DC ke arus AC menggunakan **Inverter**, namun diperlukan banyak sekali rangkaian guna konversi DC ke AC. Seperti berikut rangkaian nya.

![Rangkaian DC ke AC](/post/rangkaian_dc-ke-ac.png "Rangkaian DC ke AC")

Dari rangkaian tersebut cukup tidak efisien dan rumit untuk saya hehe.

<br>

**B. Lebih mudah diubah besaran Tegangan dan Arusnya**

Dalam skalabilitas kecil arus dan tegangan kecil penggunaan rangkaian elektronik untuk mengubah besaran tegangan dan arus lebih efisien dibanding menggunakan trafo yang harganya lebih mahal. Namun, jika penggunaan listrik yang besar (skala yg besar) maka penggunaan trafo lebih oke ketimbang rangkaian elektronik biasa.

Dari penjelasan tersebut akan lengkap bilamana ada contohnya. Misalnya tegangan yang dihasilkan oleh suatu Pembangkit yakni **20kV**, dinaikkan _Trafo Step-up_ menjadi **200kV**. Kemudian, disalurkan oleh biasanya kabel udara **Sutet** (Saluran Udara Tegangan Tinggi) sampai di suatu gardu induk tegangan diturunkan oleh _Trafo Step-down_ menjadi **30kV**, lalu sampai ke tiang-tiang yang ada trafonya di _step-down_ lagi menjadi tegangan rendah kemudian disalurkanlah ke rumah-rumah sampai tegangan menjadi **220V**.

<center> .  .  . </center>

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah .Terima kasih :)