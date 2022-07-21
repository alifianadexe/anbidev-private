+++
title = "Cara Berkontribusi Artikel ke AnbiDev"
description = "Kontribusi "
type = ["blogs","blog"]
tags = []
date = "2019-09-04"
tutorials = []
series = []
authors = "admin"
[ author ]
  name = "Admin"
  images = "/img/author.png"
+++

Anda ingin berkontribusi ke AnbiDev? Begini caranya!

![Kontribusi Ke AnbiDev](/post/contoh-artikel.jpg "Photo by "My Life Through A Lens" on Unsplash")

# Perlu Diketahui

Hal yang perlu anda ketahui , untuk membuat posting di dalam anbidev.

1. **AnbiDev** menggunakan framework Hugo. Sehingga bentuk mentah artikel pada anbidev bertipe **Markdown(.md)**.

2. Mengetahui tata cara penulisan pada file **Markdown** , jika belum familiar dengan tata cara penulisan file **Markdown** dapat dilihat di tutorial berikut [ini](https://help.github.com/en/articles/basic-writing-and-formatting-syntax).

3. Lalu kenapa sih kita butuh kontribusi? Anda dapat melihat artikel kami [disini](https://anbidev.com/contribute/contribution-needed)

<hr>

# Clone Step

(pastikan sudah install git)

- Pertama **Fork** repository AnbiDev di https://github.com/AnbiDev/anbidev-contribute .

- Buka git bash (CLI), navigasikan folder yang ingin diisi clone folder `anbidev-contribute`. **Misal :** D:/AlifianAdexe/

- Lakukan perintah

```
    git clone https://github.com/username-anda/anbidev-contribute.git
```

- Secara otomatis folder `anbidev-contribute` akan ter-clone ke dalam `D:/AlifianAdexe/`.

- Masuk ke dalam folder `anbidev-contribute`. Masuk lagi kedalam folder `themes`.

- Ada 2 folder , yaitu folder `content` dan folder `image`.
  - Folder `content` digunakan untuk menampung content yang akan anda kontribusikan.

  - Folder `image` digunakan untuk menampung gambar yang dipakai didalam artikel anda.

<hr>

# Folder Content

Didalam folder `content` terdapat sub-folder yang berisi kategori tutorial, seperti **CSS**, **C++**, **Python**, **JavaScript** dan lain -lain.

Anda bisa memulai membuat artikel diantara beberapa kategori yang disediakan. Jika kategori yang inginkan tidak ada, anda cukup membuat folder baru dengan nama kategori baru.

<hr>

# Folder Image

Didalam folder `image` terdapat 2 sub-folder yaitu `author` dan `post`.

Folder **Author** berisi foto anda yang akan ditampilkan didalam post.

Folder **Post** berisi gambar - gambar yang akan ditampilkan didalam artikel anda.

<hr>

# Penulisan File dan Shortcode

Penulisan file yang distandarisasi adalah **_nama-kategori-shortcode.md_**

Apa itu Shortcode? **_Shortcode_** adalah penamaan singkat dalam yang suatu judul. Shortcode tidak perlu panjang , cukup hanya 1 atau 2 kata saja.

Misal saya membuat artikel dengan judul **"Mengenal Tipe Data Pada Python**, lalu shortcode yang tepat adalah **Tipe Data** dan nama filenya :

```
python-tipe-data.md
```

<hr>

# Mengenal Archetypes

> Archetypes adalah: struktur, tema, atau karakter utama yang merepresentasikan diri seseorang, yang mempengaruhi cara individu mempersepsikan pengalamannya, yang menggambarkan kebutuhan dasar individu yang berusaha dipenuhi. - [neurolism.web.id](https://neurolism.web.id/archetype-defenisi-jenis-dan-artinya/#targetText=Berdasarkan%20definisi%2Ddefinisi%20di%20atas,dasar%20individu%20yang%20berusaha%20dipenuhi.)

Dalam konteks ini, lebih tepatnya mempresentasikan struktur dari artikel yang anda buat.
Posisi archetypes ada di awal. Jadi sebelum membuat content, anda harus membuat archetypes terlebih dahulu.

Struktur archetypes kurang lebih seperti ini :

```
+++
title = "Judul artikel anda"
description = "Deskripsi artikel anda"
date = "2019-09-27"
shortcode = "Shortcode Judul"
sumber = [
    "https://wikipedia.com/",
    "https://anbidev.com/"
]
[ author ]
  name = "Nama lengkap anda"
  images = "/author/fotoanda.jpg"
+++
```

Contoh penulisan archetypes :

```
+++
title = "Pengenalan Python"
description = "Pengantar Untuk Belajar Python"
date = "2019-09-27"
shortcode = "Pendahuluan"
sumber = [
    "https://www.petanikode.com/python-linux/",
    "https://belajarpython.com/tutorial/apa-itu-python"
]
[ author ]
  name = "Muhammad alifian Aqshol"
  images = "/author/adexe.jpg"
+++
```

<hr>

# Contoh Artikel

Contoh penulisan artikel bisa anda lihat **[disini](https://raw.githubusercontent.com/AnbiDev/anbidev-contribute/master/content/example/contoh-artikel.md)**.

Dan ini adalah [hasilnya](https://anbidev.com/contribute/contoh-artikel/).

<hr>

# Proses Moderasi

**Setiap hari para admin akan mengecek apakah ada kontribusi untuk AnbiDev**

1. Admin akan mengkonfirmasi artikel anda pada comment di Pull Request anda.
2. Jika ada penulisan yang tidak sesuai (typo) akan dibenarkan admin.
3. Jika ada penulisan yang dilarang (sarkas, kasar, sexualitas) maka akan admin tolak.
4. Selama proses moderasi, anda juga dapat megedit artikel anda.
5. Proses moderasi paling lama 2 hari.
6. Setelah moderasi selesai, artikel akan diupload dan dapat dilihat di https://anbidev.com/tutorials/
