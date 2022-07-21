+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-03-07T17:00:00Z
description = "Cara kerja dan aplikasi yang diperlukan"
series = "Dasar C"
shortcode = "Persiapan"
status = "publish"
sumber = ["https://www.anbidev.com/pengenalan-c/"]
tags = ["c"]
title = "Persiapan Belajar C"
tutorials = ["c"]
type = ["tutorial"]
url = "persiapan-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada [artikel sebelumnya](https://www.anbidev.com/pengenalan-c/ "Pengenalan C") kita sudah berkenalan dengan C beserta sejarah dan penggunaannya. Sekarang, kita akan mulai belajar C dengan memahami cara kerja dan lingkungan pengembangannya.

<br>

### Cara Kerja

<hr>

C merupakan bahasa pemrogaman yang _compiled languaged_, maksudnya progam yang menggunakan Bahasa C akan `diterjemahkan` terlebih dahulu kedalam bahasa mesin, lalu akan dijalankan oleh sistem secara langsung. 

Sehingga bahasa ini dapat menghasilkan program yang efisien pada sistem komputer. Untuk menerjemahkannya ke bahasa mesin, diperlukan yang namanya `compiler`

<br>

### Compiler

<hr>

> Langkah lengkap instalasi compiler hingga siap digunakan ada di artikel [Persiapan Belajar C++](https://www.anbidev.com/persiapan-cpp/ "Persiapan Belajar C++"). Compiler yang kita gunakan sama biar tidak mubazir. Jadi disini dibahas sedikit saja

Seperti yang kita bahas sebelumnya, compiler berfungsi sebagai penerjemah dari progam yang kita tulis dalam Bahasa C ke bahasa mesin agar dimengerti oleh komputer. Anbi akan menggunakan compiler milik GNU yakni g++. 

Sebelum itu kita akan install terlebih dahulu MinGw untuk menggunakan compiler tersebut. Kamu bisa mendownload aplikasinya [disini](https://sourceforge.net/projects/mingw-w64/ "MinGw-w64"). Jalankan Setup nya lalu sesuaikan dengan spesifikasi PC/Laptop kalian.

![](/post/mingw.PNG)

Disini Anbi menggunakan `versi 8.1.0` dengan Architecture `x86_64`dan Threads nya `posix`. Klik Next, lalu tempatkan pada direktori yang kalian inginkan atau biarkan default juga tidak apa-apa. Proses instalasinya akan memakan waktu agak lama, pastikan terkoneksi ke internet karena MinGw juga akan mendownload beberapa resource tambahan. 

Setelah proses instalasi selesai, kita perlu menambahkan `path` programnya (Folder `bin` didalam folder instalasi MinGw) ke system environment variable agar perintah dari MinGw dapat dikenali oleh Command Prompt.

<br>

### IDE

<hr>

IDE (Integrated Development Environment) yang Anbi gunakan adalah `Dev C++`. Memang namanya Dev C++, tapi juga bisa kita gunakan untuk Bahasa C. IDE ini bisa kalian unduh [disini](https://sourceforge.net/projects/orwelldevcpp/ "Dev C++"). Langkah installnya tidak ribet, cuma perlu _Next-Next_ hingga selesai. Jika menemukan error bisa tulis di kolom komentar ya. Berikut tampilan awal Dev C++

![Workspace Dev C++](/post/screenshot-2021-03-08-173213.png "Workspace Dev C++")

<br>

#### Menjalankan Aplikasi Pertama

<hr>

Kita akan mencoba untuk menjalankan program `Hello World` pertama kita. Silakan ketik atau copy paste kode berikut ini:

```c
#include <stdio.h>
    
int main(void){
    printf("hello, world\n");
}
```

Untuk menjalankan aplikasi pilih menu `Excute` lalu `Run`, atau bisa juga menggunakan shortcut dengan menekan `F10`.

![Notifikasi untuk compile](/post/screenshot-2021-03-08-173946.png "Notifikasi untuk compile")

Akan muncul notifikasi untuk melakukan compile. Lalu pilih direktori untuk menyimpan program kita. Pastikan kita menyimpan dengan extensi `.c`.

![](/post/screenshot-2021-03-08-174251.png)

Jika berhasil maka akan menampilkan console Command Prompt yang outputnya `Hello World`

![](/post/screenshot-2021-03-08-174456.png)

Baik, kita sudah sukses dengan aplikasi pertama kita. Sampai jumpa di artikel berikutnya.