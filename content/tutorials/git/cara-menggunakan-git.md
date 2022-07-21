+++
authors = "hamid"
tutorials = ["git"]
cover = "/post/coverweb-git.png"
date = 2021-01-12T17:00:00Z
description = "Cara menggunakan perintah dasar pada Git "
series = "Git 101"
shortcode = "Perintah Dasar"
status = "publish"
sumber = ["http://rogerdudler.github.io/git-guide/"]
tags = ["git"]
title = "Cara Menggunakan Git"
type = ["tutorials", "tutorial"]
url = "/perintah-dasar-git/"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
### Menggunakan Perintah Git Dasar

Pada artikel [sebelumnya ](https://www.anbidev.com/git-intro/ "Git Intro")kita telah belajar apa itu Git dan juga sudah membuat akun di GitHub. Sekarang mari kita belajar beberapa perintah dasar Git.

### Create Repository

Kita akan membuat repository baru pada GitHub. Buka [https://github.com/](https://github.com/ "https://github.com/") dan pilih New Repository. Jika menggunakan akun GitHub pribadi maka kurang lebih akan sama seperti pada gambar, dibagian pojok kiri atas.

![New Repository](https://cdn-images-1.medium.com/max/800/1*RmxaCgK5XTUgq8Uj13zIfg.png "New Repository")

Selanjutnya, pada artikel ini saya akan beralih ke akun Team AnbiDev, jadi akan menggunakan nama AnbiDev. Tidak perlu bingung, cukup tekan tombol New saja 😉

![New Repository](https://cdn-images-1.medium.com/max/800/1*FdSi9xIUWyTLHlorIdMtRw.png "New Repository")

Isikan nama repositori pada Repository Name, nama dari repository tidak boleh menggunakan spasi, kita beri tanda minus(-) saja sebagai pemisah antar kata. Anbi akan membuat repositori yang bernama git-basic. Untuk Description, dan opsi seperti README, .gitignore, dan license kita abaikan. Kita akan menggunakan repositori kosong terlebih dahulu. Sampai disini repository telah berhasil kita buat.

### Clone

Selanjutnya kita akan melakukan clone ke repository yang kita buat tadi. Buka File Explorer pada perangkat PC atau Laptop, arahkan ke direktori yang akan kita jadikan repository local. Disini Anbi akan menggunakan direktori E:/New/bank-repo.

![File Explorer](https://cdn-images-1.medium.com/max/800/1*JM0MVHNWgMvjFUInE_Bq-A.png "File Explorer")

Klik kanan didalam direktori atau folder ini, lalu pilih Git Bash Here. Kita akan menggunakan Git Bash sepanjang artikel ini.

![Git Bash Here](https://cdn-images-1.medium.com/max/800/1*1RFUfGK6UmZCbLh5cakzZg.png "Git Bash Here")

Akan terbuka Terminal atau Command Prompt, perintah pada command disini sama seperti Terminal di Linux dan Command Prompt di Windows.

![Git Bash](https://cdn-images-1.medium.com/max/800/1*U_l-CsOXR55Gf6R9jxy6jg.png "Git Bash")

Untuk melakukan clone kita kembali ke Github Repository kita tadi, lalu copy alamat repo. Letaknya ada pada jendela Quick setup, yang bagian belakang url ada extensi .git

![GitHub Repository](https://cdn-images-1.medium.com/max/800/1*7PJufY7ETI_wduNW2G4l8Q.png "GitHub Repository")

Lalu pada Git Bash, kita jalankan perintah berikut ini:

```
$ git clone [https://github.com/AnbiDev/git-basic.git](https://github.com/ "https://github.com/")
```

Sesuaikan alamat dengan repository kalian masing-masing. Jika berhasil maka akan tampil seperti pada gambar.

![Proses Cloning](https://cdn-images-1.medium.com/max/800/1*YTnW-a81KILPlaQCoi_FdQ.png "Proses Cloning")

### Workflow Git

Setelah melakukan cloning, kita akan memiliki local repository. Isinya sama seperti repository di Github. Sebelum mendalami lebih jauh, workflow pada local repository kita terlebih dahulu. Local repository kita terdiri dari tiga bagian, yakni

**Working Directory**, merupakan isi dari repositori, baik itu file dan folder yang bisa kita lihat

**Index**, merupakan staging-area atau ini adalah tempat semua usulan perubahan disimpan, jadi perubahan yang ditambahkan akan masuk sebagai usulan disini

**HEAD**, merupakan tempat semua usulan perubahan itu akan dicatat.

![Workflow Git](/post/photo_2021-01-13_23-27-58.jpg "Workflow Git")

Jadi, secara sederhana urutannya adalah Working Directory -> Index -> HEAD

### Add

Seperti yang kita lihat, GitHub Repository kita tadi kosong. Nah, mari kita buat perubahan dengan menggunakan Git. Kita akses buka File Explorer dan arahkan ke direktori untuk cloning GitHub Repository. Kita akan membuat satu file, Anbi akan membuat anbidev.txt didalam folder git-basic.

![anbidev.txt](https://cdn-images-1.medium.com/max/800/1*8CUTOlgH84eNNBRq7NY8iw.png "anbidev.txt")anbidev.txt telah ditambahkan

Kita telah membuat sebuah perubahan, yakni penambahan file. Sekarang akan kita usulkan perubahan ini agar bisa dicatat oleh Git. Perintah yang digunakan untuk mengusulkan perubahan adalah git add. Ada dua cara menggunakan perintah tersebut, yakni:

```
$ git add <nama-file>  
```
Ganti <nama-file> dengan nama file yang diusulkan perubahannya. Perintah ini akan mengusulkan perubahan pada satu file saja.

![git add anbidev.txt](https://cdn-images-1.medium.com/max/800/1*rwRbx0WACoG0Q8cfTQUMMw.png "git add anbidev.txt")

```
$ git add *
```
Jika menggunakan *, maka semua file yang mengalami perubahan akan diusulkan secara bersamaan.

![git add ](https://cdn-images-1.medium.com/max/800/1*BWfT7tCbyOTY6kFpCAkOtA.png "git add *")

### Status

Setelah membuat usulan perubahan menggunakan perintah add, sekarang kita cek apakah usulan tersebut sudah masuk ke index atau staging area. Kita akan menggunakan perintah status untuk pengecekannya.

```
$ git status
```
![git status](https://cdn-images-1.medium.com/max/800/1*RHMX7g7qLEOXxJ1mI0j6oQ.png "git status")

### Commit

Menggunakan perintah add akan membawa perubahan sampe ke index (staging-area), sifatnya masih berupa usulan apakah perubahan akan lanjut ke HEAD atau bisa saja kita batalkan. Jika usulan perubahan tersebut kita anggap valid, bisa kita catat usulan tersebut menggunakan perintah commit. Perintahnya adalah sebagai berikut:
```
$ git commit -m “Pesan Commit”
```
![git commit](https://cdn-images-1.medium.com/max/800/1*48MpyhgEbD28XLu9jTMG4A.png "git commit")

Perlu diperhatikan, pesan commit ini bersifat wajib. Hal ini sebagai pesan singkat agar kita tahu perubahan yang kita lakukan itu untuk apa. Pada tahap ini, perubahan sudah berada pada HEAD tapi belum sampai ke remote repository GitHub.

### Push

Agar perubahan yang sudah ada pada HEAD bisa kita kirim ke remote repository pada GitHub, maka kita perlu melakukan push.

$ git push origin master

![git push](https://cdn-images-1.medium.com/max/800/1*R4uFXrJqMxJ2CnJyybByHg.png "git push")

Jika muncul tulisan yang sesuai pada gambar, maka proses push ke remote repository berjalan dengan lancar. Bisa kita lihat perubahan sudah ada pada GitHub, tak ketinggalan juga Pesan Commit kita tadi.

![GitHub Repository Updated](https://cdn-images-1.medium.com/max/800/1*YGMNkW2FJWQhy6DSA1DEsg.png "GitHub Repository Updated")

Pada tahap ini kita sudah berhasil mengirim perubahan ke remote repository di GitHub. Sekian dulu perintah git dasar yang kita pelajari.