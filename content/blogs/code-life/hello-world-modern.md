+++
authors = "adexe"
categories = ["code-life"]
cover = "/post/web-hellowold.jpg"
date = 2021-03-02T00:00:00Z
description = "'Hello World' yang sekarang sudah tidak sama dengan yang dulu pada tahun 1978"
series = "Code Life"
status = "publish"
sumber = ["https://stackoverflow.blog/2020/03/05/a-modern-hello-world-program-needs-more-than-just-code/"]
tags = ["blog", "serapan", "code-life"]
title = "\"Hello World\" Modern Butuh Lebih Dari Sekedar Kode"
type = ["blogs", "blog"]
url = "/hello-world-modern/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
> Diadopsi dari artikel aslinya [A Modern Hello World Program Needs More Than Just Code](https://stackoverflow.blog/2020/03/05/a-modern-hello-world-program-needs-more-than-just-code/) dengan beberapa perubahan. 

Terakhir kali saya pakai bahasa C itu sudah 2 tahun yang lalu, dan cuman penasaran aja dengan bahasa itu akhirnya saya pelajari. Sekarang dimata kuliah yang saya tempuh, semuanya dibuat menjadi python.

Setelah sekian lama mencoba banyak bahasa, saya kembali teringat kembali ke bahasa C yang pernah dulu pelajari. Dimana, membuat sebuah program 'Hello World' terlihat lebih elegan menggunakan bahasa tersebut.

Haha, nostalgia yang tidak berguna, tapi cukup bermakna.

<br>

## Tradisi Dengan Sebuah Tujuan

<hr>

Asal mula notasi program "Hello World" ini berasal dari bapak Brian Kernigham dan Dennis M. Ritchie's sang penemu *The C Programming Language*, yang dulu menulis sebuah program kecil, yang bertujuan untuk mengkonfirmasi bahwa kamu sudah mengerti *environtemt* bahasa tersebut.

Program kecil ini ditulis menggunakan bahasa C :

```c
#include <stdio.h>

int main() {
    printf("Hello, world!\n");
    return 0;
}
```

Coba tulis kode itu kedalam editormu dan kompilasi menggunakan command di terminal UNIX.

```shell
$ cc hello.c
$ ./a.out 
```

Dan hal itu menghasilkan output yang dapat mudah kita prediksi 

```shell
Hello, world!
```

Ketiga hal diatas menyatakan bahwa kamu itu telah berhasil menulis, mengcompile dan mengeksekusi program menggunakan bahasa C. Itulah tujuan awal menggunakan dari program "Hello, World".

Menurut Kenighan dan Ritchie, membuat program menggunakan bahasa C, berarti kamu telah menguasai langkah dasar untuk memulai suatu projek dengan C.

> **"This is the big hurdle; to leap over it you have to be able to create the program text somewhere, compile it successfully, load it, run it, and find out where your output went. With these mechanical details mastered, everything else is comparatively easy."**

Dari pernyataan diatas, oke, saya mengakui bahwa "*everything else is comparatively easy*" itu cuman guyonan, tapi ini juga adalah landasan penting dalam mempelajari bahasa pemrograman apapun.

Ini sudah menjadi tradisi dalam pemrograman, dan seperti banyak tradisi lainnya, hal ini **diikuti tanpa mengenal untuk apa tujuan atau nilai dari tradisi tersebut**.  

Saat ini kita memiliki [Koleksi Hello World Online](http://helloworldcollection.de/) dengan hampir 600 contoh didalamnya. Banyak IDE akan membuat contoh dasar "Hello World" untukmu, dan banyak bahasa *interpreter* seperti Python, yang membuat program "Hello World" ini menjadi sangat singkat.

Tetapi sayangnya, hal itu tidak menyediakan informasi atau wawasan yang jelas. Richard Hamming berkata, *"Tujuan komputasi adalah untuk wawasan, bukan cuman literasi string"*.

<br>

## "Hello World" Itu Untuk Apa?

<hr>

Berdasarkan **Kenighan** dan **Ritchie**, program "Hello, World" bertujuan untuk langkah awal dalam memahami dasar dari bahasa pemrograman tersebut (yaitu C). Apa saja yang kita butuhkan dari menulis sampa mengeksekusi program, terwakilkan oleh program "Hello World". 

Dalam membuat proyek yang sesungguhnya, tidak hanya menggunakan editor dan compiler. Namun sebuah pemahaman dalam membangun sebuah program, bagaimana membangun *environtment* yang terstruktur, rencana dalam memelihara program menggunakan *version control*.

Jadi, yang selama ini membuat program "Hello World" masih membutuhkan 5 baris kode, membangun "Hello World" yang siap untuk dikembangkan lebih lanjut bisa saja lebih rumit.

<br>

## "Hello World" Untuk Project

<hr>

Membuat program "Hello World" yang sesuai itu lebih sulit, tapi hasilnya juga lebih baik. Bayangkan kamu ingin membuat sebuah project, kita ambil contoh *web application*.

Ketika kamu memilih sebuah bahasa, kamu juga akan memilih framework yang ingin dipakai, begitu juga *frontend* dan *backend*. Kamu juga perlu mengidentifikasi bagaimana aplikasi ini akan di*host* dan bagaimana kodenya akan di ***manage*** dan ***deploy***.

Program "Hello World" yang benar - benar sesuai tidak hanya menampilkan sebuah output. Kamu juga harus menunjukan bahwa kamu itu siap menambah fitur baru, menggunakan konsep SCRUM, dan mendemonstrasikan aplikasi tersebut dengan versi terbaru.

Sebuah program "Hello World" yang sesuai yaitu sebuah program yang minimal dan dapat dikembangkan lebih jauh, dan dapat memberikan manfaat ketika di publikasikan.

<br>

## Bagaimana Membuat Program "Hello World" Yang Sesuai

<hr>

Tentu saja, program "Hello World" yang sesuai akan berbeda - beda tergantung bahasa dan *environtment*. Disini saya akan menyarankan bagaimana cara mengawali sebuah proyek, dengan point - point berikut ini.

 - **Direktori Terpisah Untuk Setiap Proyek** - bisa dibilang sebuah folder dimana kode itu berada.
 - **Inisialisasi Git Repository Untuk Setiap Folder** - ingat untuk selalu pakai version control disetiap proyek. Kita tidak pernah tau apa yang berubah, apa yang terjadi selama perubahan itu dan bagaimana kode lama kita bekerja.
 - **Pilih *development tools* untuk sesuai kebutuhanmu** - IDE, tool build dan sebagainya.
 - ***Build Process* yang berulang - ulang lebih baik daripada bergantung pada sekali compile**
 - **Dan setelah itu barulah mulai kode pertamamu**

Setelah semua itu, kemungkinan besar kalian akan terhindar dari beberapa kesalahan yang tidak pernah kalian sadari, dan ketika kesalahan - kesalahan kecil itu berhasil kalian hindari, disitulah *"esensi senang"* sangat membuat program akan muncul.


<br>

## Mulai Proyek "Hello World" Secara Professional

<hr>

Sangat mudah kita bayangkan "Hello World" hanyalah untuk pemula yang terdiri dari satu file dalam folder kosong dengan beberapa baris kode.

Project "Hello World" yang mungkin cukup realistis, membutuhkan proses yang rumit dan sulit dengan banyak bagian. 

Contoh, membuat basic program dalam **Java** didalam **Maven** yang terdiri dari 10 direktori dan subdirektori hanya untuk membuat "Hello World". Belum lagi ketika Maven di *build*, *depedency manager* akan mendownload sekitar 1350 file yang terdiri dari 550 direktori.

Itu hanya sekedar Java dan Maven, kita ambil contoh lagi pada **React**. Dengan command `create-react-app`, sebuah program akan membutuhkan sekitar 4304 direktori dan 28678 file.

Tentu saja melakukan ini sangatlah sulit jika dilakukan manual. Bahkan, jika sudah tercipta program "Hello World", kamu juga perlu menambahkan version control serta kemungkinan mengkonfigurasi *container* atau *Integration/Continues Deployment*.

Meskipun ini lebih rumit daripada program 5 baris "Hello World" yang asli, tetapi masih memiliki tujuan yang sama :<mark> "Membangun aplikasi yang sederhana dengan memastikan syarat untuk pengembangan kedepannya" </mark>.

<br>

## Awal Bagus Untuk Kalian!

<hr>


Setiap proyek aplikasi, dari yang besar atau kecil pasti dihadapkan dengan masalah yang sama dari awal.

> "Bagaimana kamu dapat menguasai secara detail mekanisme untuk memulai sebuah proyek, membuat kodenya, bahkan menerapkannya? Sehingga kamu dapat fokus untuk membangun program yang memenuhi kebutuhan user?"

Apapun kerumitan project yang kamu buat, kamu dapat memastikannya dengan cara membuat program demonstrasi yang sangat sederhana, yang melingkupi fungsionalitas seluruh proses dari *build*, *testing* dan *deploy*.

Inti pesan itulah yang program "Hello World" sampaikan, dan ini masih yang menjad terbaik!