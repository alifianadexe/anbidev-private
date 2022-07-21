+++
authors = "hamid"
categories = ["code-life"]
cover = "/post/web-stylecase.jpg"
date = 2021-02-04T10:00:00Z
dateUpdate = 2021-02-04T10:00:00Z
description = "Mengenal tentang gaya penulisan kode program yang berkembang dikhalayak luas"
series = "Code Life"
status = "publish"
tags = ["blog", "wawasan", "code-life", "style"]
title = "7 Gaya Penulisan Pada Kode Program"
type = ["blogs", "blog"]
url = "/gaya-penulisan-program/"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Halo pembaca Anbi, tak jarang ya kita kasih perhatian lebih ke variable, fungsi atau syntax dari program yang lagi kita kembangkan. 

Selain karena pemilihan nama yang cocok, tapi kita juga harus konsisten dalam menggunakan gaya penulisan kode programnya ya. 

Karena sebagian besar bahasa pemrogaman bersifat case-sensitive, artinya besar kecil kata akan mempengaruhi kode kita. Anbi akan jelaskan beberapa gaya penulisan pada kode program.

<br>

## Camel Case

<hr>

Cirinya tanpa spasi dan **kata paling awal** menggunakan **huruf kecil** dan kata selanjutnya diawali **huruf besar**. Penggunaan huruf besar ini diinspirasi dari punuk hewan unta yang menonjol, sehingga diberi nama **Camel Case**.

!["Camel Case"](/post/kode-style-case-01.jpg "Camel Case")

Biasa digunakan pada pemrograman berorientasi objek atau OOP dalam mendeklarasikan method. Contoh penggunaan Camel Case adalah sebagai berikut:

```
doCalculate  
getConnection  
setPrice
```

<br>

## Pascal Case

<hr>

Hampir sama dengan Camel Case ya, bedanya hanya pada awal huruf dari Pascal Case adalah menggunakan huruf besar. Cirinya **tanpa spasi** dan setiap kata **diawali huruf besar**. Pascal Case juga sering disebut dengan *UpperCamelCase*.

!["Pascal Case"](/post/kode-style-case-02.jpg "Pascal Case")

Biasa digunakan dalam penamaan class pada banyak bahasa pemrograman. Contoh penggunaan Pascal Case adalah sebagai berikut:

```
UserLoginCount  
EmployeeStatus  
PayrollStatus
```

<br>

## Snake Case

<hr>

Cirinya mengganti semua spasi dengan garis bawah atau **underscore** `(_)`. Dengan menggunakan underscore, maka mata akan melihatnya hampir mirip dengan kata biasa, sehingga pembaca dapat mengenali dua kata atau kumpulan kata dengan lebih cepat. 

Contoh bahasa pemrogaman yang menggunakan Snake Case adalah C, Python, Ruby dan Java dan masih banyak lagi.

!["Snake Case"](/post/kode-style-case-03.jpg "Snake Case")

Biasa digunakan dalam penamaan variabel pada banyak bahasa pemrograman. Contoh penggunaan Snake Case adalah sebagai berikut:

```
my_url  
var_lib  
max_point_out
```

<br>

## Kebab Case

<hr>

Hampir sama dengan snake case namun spasi di replace dengan **tanda hubung** `( - )`. Sama-sama memudahkan developer untuk membaca kode, karena adanya ruang yang agak kosong antar kata. 

Kelemahan dari Kebab Case adalah penggunaan *dash* atau tanda min ( - ). Karena sebagian besar bahasa pemrograman menganggap *dash* sebagai bentuk matematika pengurangan.

!["Kebab Case"](/post/kode-style-case-04.jpg "Kebab Case")

Biasa digunakan pada penamaan URLs, agar lebih manusiawi dalam pembacaan. Lalu, kebab case juga diimplementasikan pada penamaan variabel di bahasa Lisp. 

```
cara-mendapatkan-pacar  
how-to-get-wife
```

<br>

## Upper Case

<hr>

Sering kali dalam pembuatan password baru, perlu adanya Upper Case didalam bagian password tersebut. Upper Case ini dapat diartikan sebagai huruf besar. 

Nah, pada pemrogaman juga sama, Upper Case akan mengkonversi semua huruf dengan **huruf kapital** atau juga bisa disebut dengan “ScreamCase”.

!["Upper Case"](/post/kode-style-case-05.jpg "Upper Case")

Biasa digunakan dalam mendeklarasikan sebuah constant variabel pada banyak bahasa pemrograman.

```
DB_CLIENT  
HOSTNAME  
URL_STRING
```

<br>

## Dot Case

<hr>

Atau bisa juga disebut dengan "dot notation". Mengganti semua spasi dengan **titik** `(.)` dan semua huruf menjadi huruf kecil. Sering kita temui pada saat pemanggilan package atau library.

!["Dot Case"](/post/kode-style-case-06.jpg "Dot Case")

Biasa digunakan dalam penulisan nama "package" atau "library". Contoh penggunaan Dot Case adalah sebagai berikut:

```
mypackage.do.something  
java.util
com.android.util.package
```

<br>

## Slash Case

<hr>

Terakhir adalah Slash Case, memang dalam bahasa pemrograman jarang dijumpai gaya penulisan seperti ini. Ciri nya yaitu mengganti spasi dengan **tanda slash** `(/)`.

!["Slash Case"](/post/kode-style-case-07.jpg "Slash Case")

Biasa digunakan dalam pemanggilan “command” atau pemisah `path` pada sistem terminal. Contoh penggunaan Slash Case adalah sebagai berikut:

```
/help  
dir/w  
watch/anime/onepiece
```

<center>. . .</center>

<br>

## Kesimpulan

<hr>

Mau pakai gaya yang manapun terserah kalian, yang penting mudah dipahami dan juga mudah dibaca. Ingat konsep yang pernah anbi sampaikan [Clean Code](https://anbidev.com/clean-code). Gaya penamaan ini hanyalah salah satu dari penerapan konsep ini kok.

Yaudah gitu aja, ketemu lagi di postingan berikutnya yaa.