+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-instalooter.jpg"
date = 2021-02-20T00:00:00Z
description = "Cara mudah Crawl Gambar pada instagram menggunakan library instalooter pada python"
series = "Fun Code"
shortcode = "Instalooter"
status = "publish"
tags = ["modul", "opencv", "library","funcode"]
title = "Crawl Gambar Instagram Pakai Python dan Instalooter"
type = ["tutorials", "tutorial"]
url = "/python-instalooter/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"
+++

Hola anbies, sekarang mari kita membahas sedikit tentang library (lebih ke program) crawling yang sering digunakan untuk meng-*crawl* **Seluruh Gambar dan Video Pada Instagram**. Apa itu? nama library nya adalah [instalooter](https://instalooter.readthedocs.io/).

<br>

## Apa itu Instalooter?

<hr>

**Instalooter** adalah sebuah **program** yang digunakan untuk mendownload seluruh video dan gambar pada sebuah profile atau *hashtag* pada instagram tanpa menggunakan API atau Token apapun. Bahkan kalian juga bisa mendownload gambar atau video pada **private akun**!

Cara installnya cukup mudah, kita cuman butuh [pip](https://anbidev.com/python-pip) dan command dibawah :

```bash
pip install instalooter
```

Nah kalau udah, kita bisa langsung menggunakan perintah dasar instalooter pada **command line** kita. 

> Untuk menghindari **Error**, bisa terlebih **login instagram** di PC atau browser kita hehe, tapi jarang sih ini :)

<br>

Disini, anbi bakal kasih contoh command buat **download semua gambar dan video** pada instagram [anbidev](https://instagram.com/anbidev). 

```bash
instalooter user anbidev
```

Kalau berhasil ada *log* kayak gini.

!["Log sudah selesai Download"](/post/python-instalooter-01.png "Log sudah selesai Download")

Dan jika kita lihat, pada folder di path *command line* anbi, akan berisi banyak gambar dari anbidev.

!["Selesai Download Gambar"](/post/python-instalooter-02.jpg "Selesai Crawl Gambar")


<br>

## Crawl Berdasarkan Hashtag

<hr>

Kita juga bisa mengcrawl gambar dan video dengan *instalooter* berdasarkan parameter hashtag. Nih, kita coba crawl **10 gambar atau video** pada postingan dengan hashtag `#programmer`.

```
instalooter hashtag programmer -n 10
```

Ia akan mendownload 10 postingan gambar atau video terbaru, yang menggunakan hashtag `#programmer` yang terbaru. 

!["Selesai Download Gambar"](/post/python-instalooter-03.png "Selesai Crawl Di Hashtag #programmer")

<br>

## Crawl Single Posting

<hr>

Kita sudah berhasil crawling secara batch berdasarkan *hashtag* atau *profile*. Lalu bagaimana jika kita ingin crawling single posting? 

Mudah aja, copy link postingannnya, lalu gunakan command berikut ini.

```bash
instalooter post "https://www.instagram.com/p/CEwhuIghkKb/" 
```

!["Single Post Berhasil Didownload!"](/post/python-instalooter-04.jpg "Single Post Berhasil Didownload!")


Nah, sesimpel itu. Oh iya, anbi pengen gambar hasil crawl disimpen difolder **Pictures**. Kita tinggal kasih parameter ***path*** direktori tujuan. Contoh :

```bash
instalooter post "https://www.instagram.com/p/CEwhuIghkKb/"  ~/Pictures
```

* `~/Pictures` adalah ***path*** direktori untuk menyimpan hasil crawl.

<br>

## Crawling Akun Private

<hr>

Nah, kalau mau crawling akun private, cara satu - satunya adalah kalian follow dulu akunnya. Lalu nunggu di *Accept* nah, abis itu baru deh bisa kita crawl 😂.

Cara **login** pakai **Instalooter** gimana? gini caranya, misal anbi bakal crawl salah satu akun instagram Private yang kebetulan udah di accept hehe.

```bash
instalooter user tridesir --username humanoid99 --password 12345678
```

* `--username` : kalian isi dengan username akun instagram kalian.
* `--password` : kalian isi dengan *password* instagram kalian.

> **PENTING** : Akun yang digunakan harus udah diaccept dulu yak 🙄


<br>

## Implementasi Pada Script

<hr>

Nah, program ini juga bisa kita perlakukan juga menjadi sebuah library. Sehingga bisa kita `import` kedalam script atau program yang ingin kita buat.

Contoh kode yang paling mudah seperti ini.

```python
from instalooter.looters import ProfileLooter

instagram_user = "anbidev"
looter = ProfileLooter(username=instagram_user)    
looter.download('~/Pictures', media_count=10)
```

Dari script diatas bertujuan untuk mendownload 10 postingan terbaru pada instagram **@anbidev**. 

Nah, selanjutnya kita bisa mengembangkannya lagi, dari script tersebut sesuai dengan kebutuhan yang diinginkan.

Misal anbi, disini bakal *crawling* seluruh komentar postingan di salah satu postingan instagram. Anbi bakal ambil di postingannya **petanikode**.

```python
from instalooter.looters import PostLooter

instagram_post = PostLooter('https://www.instagram.com/p/CLiS5C9BVQx/')
list_media = instagram_post.medias()

for media in list_media:
    info = instagram_post.get_post_info(media['shortcode'])
    list_comment = info['edge_media_to_parent_comment']
    the_comment = list_comment['edges']
    count = 1
    for comment in the_comment:
        the_comment = comment['node']

        parent_comment = the_comment['text']
        list_reply = the_comment['edge_threaded_comments']['edges']
      
        print(count,' Komentar : ', parent_comment)
      
        count_reply = 1
        if list_reply:
            for reply in list_reply:
                the_reply = reply['node']
                
                parent_reply = the_reply['text']
                print("\t",count_reply, 'Balasan', parent_reply)
                count_reply += 1
        
        count += 1
```

Pada kode diatas, anbi crawling semua komentar pada salah satu postingan instagram petanikode menggunakan modul `PostLooter`. 

Jika komentarnya ga nambah kemungkinan hasilnya akan seperti ini.

```
1  Komentar :  Typo tu unary semua tiap slide min 🙄
         1 Balasan @anandapujawandra betul. tolong direvisi 😂 @petanikode
2  Komentar :  waduh tipo min
3  Komentar :  Bernyanyy
         1 Balasan @alfari16 ngoding doang ga bernyanyy
         2 Balasan @alfari16 🤙🏻🤙🏻🤙🏻
4  Komentar :  bernyanyi 🔫
5  Komentar :  Cara termudah buat belajar ternary, example: Laper ? Makan(makanan: any) : udahKenyang()
6  Komentar :  Setiap operator itu unary ya? Ato typo?
7  Komentar :  Namanya juga manusia, klo sekali dua kali salah ya wajar
```

Dan masih banyak lagi yang dapat kita implementasikan menggunakan library ini. Bisa crawling jumlah like, kapan dia posting, siapa aja followernya dan lain - lain. Semuanya tergantung kebutuhan kalian masing - masing.

<center> . . . </center>

Oke gitu dulu untuk postingan pelengkap ini hehe, semoga bermanfaat dan mungkin bakal anbi buatin program crawling instagram ini nantinya. Nantikan postingan anbidev selanjutnya ya. Terima kasih :)
















