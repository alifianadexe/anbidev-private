+++
aliases = ["blogs/belajar-listrik-rumah/"]
authors = "bagus"
categories = ["wawasan"]
cover = "/post/belajar-listrik-rumah-cover.jpg"
date = 2020-08-06T00:00:00Z
description = "Penjelasan tentang listrik di rumah kita yang membantu kita dalam berbagai kebutuhan"
series = "wawasan"
status = "publish"
tags = ["blog", "wawasan"]
title = "Belajar Tentang Listrik Di Rumah Kita"
type = ["elektronika", "blogs", "blog"]
url = "/belajar-listrik-rumah/"
[author]
images = "/img/baus.jpg"
name = "Bagus"

+++
Halo readers, dah lama saya gak upload, sepurane ya lur.. xixi. Kali ini kita mau bahas soal listrik nih, soalnya kemarin lagi rame dibahas soal gratisnya listrik dan kenaikan pembayaran beberapa pengguna PLN rumahan di negara kita, termasuk rumah saya hiks.. :(

So kali ini kita mau bahas soal VA (Volt Ampere), lah kok bahas kayak gini sih? buat apa? nanti readers bakal tau di reality hehe.

<br>

## VA Pada Listrik

<hr>

Nah readers pasti tau dong listrik dirumah kalian masing-masing sebesar berapa?
yups, ada yang _450VA, 900VA, 1300VA, 2200VA_ ... dan seterusnya. Di situ ada pembagian lagi yakni seperti : **R1T 450VA**, **R1M 900VA**, **R1MT 450VA** ..dan seterusnya.

Apa itu Kode **R1**, **R1T**, **R1M**, **R1MT**?

Berikut Kepanjangannya :

* **R** : Rumah Tangga
* **M** : Mampu / tidak bersubsidi
* **R1** : Pascabayar
* **R1T** : Prabayar (Token)
* **R1M** : Pascabayar Mampu
* **R1MT** : Prabayar Mampu

<br>

> **FYI** aja nih, jadi info dari pemerintah dari bulan april 2020 untuk listrik **450VA** subsidi itu gratis dan **900VA** subsidi dapat diskon. ciyeh gratis.

<br>

Ok, balik lagi ke permasalahan diawal. Kita mesti tau nih kenapa harus tau hal seperti ini agar kita ga asal colok perangkat elektronik di rumah kita ataupun di rumah temen kita, biar ga kejadian hal yang gak diinginkan hehe.

Jadi, tiap rumah yang udah dialiri listrik pasti dipasang meteran listrik dan tentunya **MCB** (_Miniature Circuit Breaker_) yang dipasang oleh petugas PLN. Meteran fungsinya untuk menghitung arus yang udah ngalir dan agar bisa menghitung tagihan bulanan, sedangkan MCB sendiri fungsinya untuk membatasi listrik yang digunakan dan akan otomatis memutus arus jika penggunaan melebihi batas yang udah ditentukan.

Nah batasnya itu biasanya PLN bakalan pasang si MCB ini sesuai dengan request pelanggan, seperti **2A,C2,6A,C6** .. dan seterusnya. Oke lanjutt.

<br>

## Rumus Daya Listrik

<hr>

Sekarang untuk rumus mengitung daya listrik sendiri sebagai berikut :

    Daya = Tegangan x Arus

atau

    Watt = Volt x Ampere

atau

    P = W / t

<br>

![Gambar MCB 10 Ampere](/post/belajar-listrik-rumah-1.jpg "MCB 10 Ampere")

Misal MCB bertuliskan **_C10_** maka berapakah batas Daya nya ? lalu untuk tegangan, umumnya di PLN Indonesia memasang tegangan hanya **_220V_**. Maka :

    Watt = 220V x 10A
    Watt = 2200 Watt 

Oke, dari sini kita harus merhatiin lah kenapa kok satuan yang dikasih PLN bukan Watt ya, kayak _450Watt_, _900Watt_ kok malah **_450VA_**, **_900VA_**. Pada hakikatnya **Watt** dan **VA** perhitungannya dari `Arus x Tegangan`. hmmm kenapa ya? okeh lanjut.

<br>

## Perbedaan Watt dan VA

<hr>

So, kita harus tau kenapa disebut **Watt** dan kenapa disebut **VA**.

**VA** adalah satuan yang menunjukkan daya yang dapat ditampun dalam suatu sirkuit rangkaian.

Sedangkan **Watt** adalah satuan daya listrik yang dimiliki dan digunakan oleh alat listrik sebagai pengonversi energi listrik.

Begitu, dapat gambaran gak? ibaratnya kayak VA itu sebagai wadah , dan Watt adalah isi di dalam wadah itu. Nah jika kita teliti _electronic stuff_ yang kita pake pasti ada keterangan disitu, perhatiin contoh aja _Stabilizer_ yang kita punya.

![Gambar Stabilizer 500v](/post/belajar-listrik-rumah-2.jpeg "Stabilizer 500V")

Disitu tertulis 500VA nah dapat kita artikan bahwa si _Stabilizer_ ini fungsinya tuh sebagai pengalir arus daya aja, dia gak mengonversi suatu daya ke hal yang lain. Contoh lagi.

![Gambar Setrika](/post/belajar-listrik-rumah-3.jpeg "Seterika")

Si setrika ini biasanya tertera daya yang nanti bakal kepakai umumnya sih 300 Watt atau lebih. Nah bisa kita artikan bahwa si Setrika ini mengubah arus listrik menjadi hal yang lain dalam hal ini yakni **Panas**.

Disini saya dapat suatu gambaran mengenai apa itu **Watt** dan **VA**.

![Gambar Tentang Watt dan VA](/post/belajar-listrik-rumah-4.png "Gambaran Tentang Watt dan VA")

**_;tldr;_**
Dari gambar itu dapat kita ungkap bahwa VA bukanlah Watt, VA adalah kapasitas daya dan Watt adalah daya aktual itu sendiri. untuk detail dari gambarnya sendiri saya gak tau hehe.  pokoknya intinya begitulah

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah. Terima kasih :)