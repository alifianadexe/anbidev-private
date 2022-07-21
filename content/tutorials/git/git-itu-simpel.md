+++
authors = "hamid"
tutorials = ["git"]
cover = "/post/coverweb-git.png"
date = 2020-09-15T17:00:00Z
description = "Mengenal Git secara sederhana dan simple"
series = "Git 101"
shortcode = "Pengenalan"
status = "publish"
sumber = ["https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa", "https://insights.stackoverflow.com/survey/2018#work-_-version-control", "https://guides.github.com/introduction/git-handbook/", "https://en.wikipedia.org/wiki/Git"]
tags = ["git"]
title = "Apa itu Git?"
type = ["tutorials", "tutorial"]
url = "/git-intro/"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
Apa itu Git? Git adalah proyek open-source yang berfungsi untuk mengontrol versi dari aplikasi. Dibuat oleh Linus Trovalds pada tahun 2005 untuk mengembangkan kernel Linux asli dan kernel milik developer lain yang ingin berkontribusi. Git ditulis dalam bahasa C, Shell, Perl, Tcl dan Python. Website resminya ada [disini](https://git-scm.com/ "git").

<br>

### Latar Belakang

<hr>

Dalam mengembangkan aplikasi secara berkelompok sering kali kita merubah suatu kode secara sepihak, dengan Git kita bisa mencari beberapa hal berikut:

- **Siapa** yang merubah kode
- Bagian **mana** yang dirubah
- **Kapan** terjadi perubahan
- **Kenapa** kode dirubah

<br>

## Fungsi dan Kegunaan GIT

<hr>

Kenapa sih kita perlu menggunakan Git? Merujuk pada [Stack OverFlow Developer Survey Results 2018](https://insights.stackoverflow.com/survey/2018#work-_-version-control "Developer Survey Results 2018") ada lebih dari 87% developer menggunakan Git, hal ini menjelaskan Git adalah Version Control yang paling banyak digunakan di dunia.

Kegunaan Git adalah sebagai berikut:

- **Sentralisasi**, dengan menggunakan Git kamu bisa memiliki satu repository utama dimana semua perubahan diarahkan ke repository tersebut.
- **Version Control**, git memberikan versi dari setiap perubahan yang kita tulis, dan terus mengingat semua versi dari perubahan tersebut dan kapan perubahan dibuat. Kita merubah 1000x, git akan mengingat 1000x.
- **Working in Teams**, git memiliki fitur untuk mencabangkan repository utamanya. Sehingga jika kita memiliki kelompok yang beranggotakan tiga orang, kita bisa membuat tiga cabang milik masing-masing anggota. Kita bisa tahu siapa yang merubah dan bagian mana perubahannya. Jika perubahannya valid, bisa dilanjutkan ke repository utama.

<br>

## Instalasi Git

<hr>

Sebelum menggunakan git, kita perlu menginstall dulu git sesuai sistem operasi yang kita miliki

### Install Git pada Windows

1. Download Git [disini](https://git-scm.com/download/win "Git Windows").
2. Ikuti saja layar instalasi yang muncul.
3. Buka Command Prompt, jalankan git dengan mengetik `git`. Jika git sukses terpasang maka akan tampil seperti ini

   ![Git Command](/post/screenshot-199.png "Git Command")

### Install Git pada Linux

1. Pada Linux, cukup ketik `sudo apt install git` pada Terminal. (disini aku menggunakan Ubuntu 20.04).
2. Test juga dengan mengetik `git`.