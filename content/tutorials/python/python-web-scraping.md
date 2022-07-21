+++
authors = "adexe"
cover = "/post/web-scrapping.jpg"
date = 2021-03-01T00:00:00Z
description = "Mengenal apa itu web scrapping secara deskriptif dan mempraktekkannya dengan bahasa python"
series = "More Python"
shortcode = "Web Scraping"
status = "publish"
sumber = ["https://realpython.com/"]
tags = ["data-mining", "machine-learning", "web-scraping", "python"]
title = "Belajar Dasar Web Scrapping Bersama Python"
tutorials = ["python"]
type = ["tutorials", "tutorial"]
url = "/python-web-scraping/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Banyaknya data yang tersebar diinternet kaya akan sumber daya yang bisa kita manfaatkan untuk kebutuhan - kebutuhan kita. Untuk Kalian yang sering berhubungan dengan pengumpulan data pastilah tidak asing dengan metode **Web Scraping**. 

<br>

## Web Scraping

<hr>

Apa itu ***web scraping***?  *web scraping* adalah sebuah teknik yang digunakan untuk mengumpulkan informasi dari internet. Kalian yang sering menyalin materi di suatu artikel untuk kebutuhan tugas atau yang lain - lain, juga disebut web scraping. 

!["Flow Web Scraping"](/post/python-web-scraping-01.jpg "Flow Web Scraping")

Tapi bagaimanapun juga *web scraping* biasanya mengacu pada sebuah proses yang melibatkan automatisasi. Sebagian website tidak suka akan teknik ini, karena mengakibatkan banyak resiko di sisi bisnis dan teknologi. Tetapi banyak juga website yang menghiraukannya.

Nah, disini kita tentukan tujuannya dulu, jika kita web scraping untuk kebutuhan edukasi, ***it's okay***. Tapi jika kita web scraping untuk kebutuhan bisnis dan keuntungan, ***maybe think twice***.

Kita tidak akan kena masalah ketika tidak melanggar aturan dan etika dari **Terms of Service** yang ditentukan pada web yang kamu ekstrak datanya.

> Untuk mengetahui lebih jauh aspek - aspek yang legal dalam scraping data bisa dilihat [disini](https://www.lawinsociety.org/legal-perspectives-on-scraping-data-from-the-modern-web) 

<br>

## Kenapa Scraping Data Dari Web?

<hr>

Oke, anggap seperti ini, kita sedang mencari pekerjaan. Lalu kita menemukan sebuah situs yang menawarkan pekerjaan yang kita inginkan. Akan tetapi, lowongan itu hanya muncul 1 kali dalam setiap kesempatan yang acak.

Kita nggak mungkin bakal buka situs lowongan itu terus setiap hari, setiap jam, setiap menit hanya untuk mengecek apakah lowongan yang kita inginkan sudah tersedia. Cara paling mudahnya adalah melakukan automatisasi pencarian di setiap situs pekerjaan yang menawarkan lowongan yang kita inginkan. 

Maka dari itu, **Automatiasi Web Scraping** bisa menjadi solusi untuk mempercepat proses pengumpulan data. Kita cuma buat satu kode, lalu kode itu kita jalankan di berbagai situs lowongan dan data tentang lowongan yang kita inginkan akan terkumpul secara otomatis.

Jika kita mencoba mencari data secara manual akan membutuhkan waktu yang lama. Apalagi website akan terus terupdate setiap menitnya. Sehingga kita juga akan melakukan hal yang berulang - ulang untuk hasil yang sama jika kita lakukan secara manual.

Banyak sekali infomarsi yang dapat kita ambil dari sebuah website, dan setiap website akan terus terupdate. Dari segala data yang tersebar, pasti ada beberapa data yang memang kita butuhkan untuk kepentingan kita.

Mulai dari data yang digunakan untuk tugas kuliah kita, semua lirik lagu artis kesayangan kita, foto - foto dari idola kita dan masih banyak lagi. *Automatiasi Web Scraping* akan membantu dalam mencapai itu.


<br>

## Tantangan Dalam Web Scraping

<hr>

Web berkembang sangat cepat, yang terkombinasi dari berbagai teknologi, gaya dan penampilan yang berbeda - beda. Dengan kata lain, web itu seperti kamarmu yang berantakan. Hal ini akan menjadi tantangan kita saat melakukan scrapping pada web.

1. **Variasi**, Setiap website memiliki keunikannya tersendiri, walaupun berbeda - beda mereka terdiri dari struktur umum yang sama. Tetapi, tetap setiap website harus diperlakukan secara spesial tergantung data yang ingin kita ambil.

2. **Durability**, Website akan terus berubah. Anggap kita sudah menyelesaikan satu script untuk *scrapping* sebuah website. Ternyata selang beberapa saat, script nya tidak bekerja, dikarenakan website yang terus berubah. Inilah yang akan menjadi tantangan kita.

Bagaimanapun juga, dikarenakan internet itu dinamis, script scrapping kamu juga perlu kamu maintenance agar bisa terus digunakan.

<br>

## API : Sebuah Alternatif Web Scrapping

<hr>

Gamau ribet buat script untuk dapetin data dari web? Ada cara yang paling mudah, yaitu menggunakan **API**.  Sebagian website kadang menyediakan **API** (*Application Programming Interface*) yang memperbolehkan kita mengakses data - data mereka dengan cara yang telah ditentukan sebelumnya.  

Dengan API kalian gak perlu ribet - ribet parsing HTML, kalian cuman perlu akses langsung untuk mendapatkan data dengan format berupa **JSON** dan **XML**. Serta, menggunakan API data yang didapatkan lebih stabil dan konstan setiap ada nya perubahan.

Akan tetapi API juga memiliki kekurangan. Memang kita bisa mendapatkan data lebih mudah dan stabil, tapi ada kemungkinan ada beberapa data yang kita inginkan tidak tercantum pada API tersebut. Lalu biasanya akan lebih susah memeriksa struktur dari API, jika dokumentasi yang disediakan sangat sedikit.


<br>

##  Simple Web Scrapping Dengan Python

<hr>

Kita sudah berkenalan lebih dekat dengan *web scraping*, mari kita pindah ke sisi teknikal. Sesuai dengan judul diatas, disini kita menggunakan bahasa **Python**.  

Salah satu package pada [standard library python](https://docs.python.org/3/library/) yang biasa digunakan dalam web scraping adalah `urllib.request`. Dalam modul `request` terdapat sebuah fungsi bernama `urlopen()` yang digunakan untuk membuka web URL dalam python.

Mari kita coba dengan kode kita :

```python
from urllib.request import urlopen

url = "https://anbidev.github.io/"
page = urlopen(url)
print(page)
```

Jika kita jalankan script diatas, maka akan keluar output seperti ini:

```
<http.client.HTTPResponse object at 0x000001E26F2E5310>
```

Output diatas berupa object `HTTPResponse`. Jika kita ingin mengekstrak bentuk HTML nya, pertama gunakan method `read()` untuk dapat hasil *bytes*. Kemudian method `decode()` untuk mengkonversi *bytes* ke *String*.

```python
from urllib.request import urlopen

url = "https://anbidev.github.io/"
page = urlopen(url)

html_bytes = page.read()
html = html_bytes.decode("utf-8")
print(html)
```

Menggunakan kode diatas, kita bisa mendapatkan bentuk HTML seperti berikut.

```
<html>
  <head>
    <title>Hai!, Anbi Disini!</title>
  </head>
  <body bgcolor="white">
  <center>
    <br><br>
    <img src="/static/logo.svg" width="100px" height="100px"/>
    <h2>AnbiDev</h2>
    <br><br>
    Website Aslinya Disini : <a href="https://anbidev.com">Anbi Developer</a>
    <br><br>
    Ini buat belajar aja disini!
    <br><br>
    Kamu tau ga <a href="https://facebook.com/mas.anbi.96">Mas Anbi</a> itu adalah admin AnbiDev.
    </center>
  </body>
</html>
```

Kode HTML diatas masih dalam bentuk mentah (*raw*) karena kita belum memilah informasi apa saja yang bisa kita dapatkan dalam bentuk HTML.

<br>

## Ekstrak Data Menggunakan String Method

<hr>

Disini kita bakal belajar mengekstrak data dari bentuk HTML ke bentuk yang mudah dipahami.Disini kita akan menggunakan berbagai *String Method*.

Contoh kita akan ambil `title` pada website yang kita scrape. 

```python
from urllib.request import urlopen

url = "https://anbidev.github.io/"
page = urlopen(url)

html_bytes = page.read()
html = html_bytes.decode("utf-8")

# cari dimana letak tag <title>
title_index = html.find("<title>")

# cari jarak antara <title> sampai </title>
start_index = title_index + len("<title>")
end_index = html.find("</title>")

# slice string untuk dapat "title"
title = html[start_index:end_index]
print(title)
```

Dan akhirnya kita dapatkan `title` nya.

```
Hai!, Anbi Disini!
```

Cukup ribet ya, untuk mendapatkan data "title". Oke, mari kita buat lebih simple menggunakan **Regex** (*Regular Expression*). Regex adalah *pattern* atau pola yang digunakan untuk mencari text didalam String.

Regex pada python terdapat pada modul `re`. Regex menggunakan spesial karakter yang disebut **metacharacter** untuk membedakan setiap pola pada String. 

```python
import re
from urllib.request import urlopen

url = "https://anbidev.github.io/"
page = urlopen(url)
html = page.read().decode("utf-8")

pattern = "<title.*?>.*?</title.*?>" # Metacharacter

match_results = re.search(pattern, html, re.IGNORECASE)
title = match_results.group()
title = re.sub("<.*?>", "", title) # Hapus HTML tags

print(title)
```

Dan yak! hasilnya sama seperti yang pertama 

```
Hai!, Anbi Disini!
```

Penjelasannya seperti ini.

1. `<title. *?>` : Digunakan untuk mencari tag pembuka dari "title", yaitu `<title>`.
2. `.*?` : *metacharacter* untuk memilah semua text yang berada diantara tag pembuka (`<title>`) sampai menemukan *metacharacter* yang serupa, yaitu pada `</title .*?>`.
3. `</title .*?>` : Perbedaannya dari yang pertama terletak pada `/` nya doang kok, intinya sama mencari tag penutup yaitu `</title>`.

Ribet ya, gapapa, ini sebagai dasar pengetahuan kita tentang bagaimana *web scrapping* yang dilakukan secara manual menggunakan python. Setelah kita mengetahui alur dasar *scraping* barulah kita bisa menggunakan library seperti `beautysoup4` atau `selenium`.

<center> . . . </center>

Oke sekian dulu pengawalan kita dalam berkenalan dengan *Web scrapping*, ini akan menjadi awal kita dalam mengenal metode data mining yang lain. Selanjutnya anbi bakal bahas web scraping dengan library `beautysoup4`.